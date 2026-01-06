<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { throttle } from "@/lib/Throttle";
import { ease, lerp } from "@/lib/Lerp";

interface Circle {
    x: number;
    y: number;
    radius: number;
}

interface Velocity {
    x: number;
    y: number;
}

const canvasRef = ref<HTMLCanvasElement | null>(null);
const RenderSettings = {
    radiusFactor: 0.15,
    thickness: 1,
    color: "#fff",
    maxVelocity: 0.08,
    pointCount: 16,
    lerpDurationMs: 8000,
};
let frameId = 0;

onMounted(async () => {
    const canvas = canvasRef.value;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    RenderSettings.color = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--color-canvas");
    if (!ctx) return;

    function resizeCanvas(canvas: HTMLCanvasElement) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    const circles: Circle[] = [];
    const velocities: Velocity[] = [];
    let newCircles: Circle[] = [];
    let newVelocities: Velocity[] = [];
    let lerpTime: number[] = [];
    let circlesUnderTransition = false;
    let initialCircles: Circle[] = [];

    function createPoints() {
        if (circles.length != 0) circlesUnderTransition = true;
        initialCircles = [];
        newCircles = [];
        newVelocities = [];
        lerpTime = [];
        for (let i = 0; i < RenderSettings.pointCount; i++) {
            // points array to update
            const pArr = circlesUnderTransition ? newCircles : circles;
            //velocity array to update
            const vArr = circlesUnderTransition ? newVelocities : velocities;

            pArr.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius:
                    (Math.random() + 0.01) *
                    RenderSettings.radiusFactor *
                    Math.min(window.innerWidth, window.innerHeight),
            });
            vArr.push({
                x:
                    (-Math.random() + Math.random()) *
                    RenderSettings.maxVelocity,
                y:
                    (-Math.random() + Math.random()) *
                    RenderSettings.maxVelocity,
            });
            lerpTime.push(0);
            if (!circlesUnderTransition) continue;

            const initialCircle = circles[i];
            if (!initialCircle) continue;

            // Store the initial value of each circle
            initialCircles.push({
                x: initialCircle.x,
                y: initialCircle.y,
                radius: initialCircle.radius,
            });
        }
    }

    function update() {
        const dt_ms = 16;
        // Transition if new points were generated
        if (circlesUnderTransition) {
            let isPointRemaining = false;
            for (let i = 0; i < circles.length; i++) {
                const circle = circles[i];
                const initialCircle = initialCircles[i];
                const velocity = velocities[i];
                const newPoint = newCircles[i];
                const newVelocity = newVelocities[i];
                const t = lerpTime[i];
                if (
                    !circle ||
                    !initialCircle ||
                    !velocity ||
                    !newPoint ||
                    !newVelocity ||
                    t === undefined
                )
                    continue;
                if (t < 1) {
                    circle.x = lerp(
                        initialCircle.x,
                        newPoint.x,
                        t,
                        ease.linear,
                    );
                    circle.y = lerp(
                        initialCircle.y,
                        newPoint.y,
                        t,
                        ease.linear,
                    );
                    circle.radius = lerp(
                        initialCircle.radius,
                        newPoint.radius,
                        t,
                        ease.linear,
                    );
                    lerpTime[i] = t + dt_ms / RenderSettings.lerpDurationMs;
                    isPointRemaining = true; // This circle hasn't finished its transition
                }
            }
            if (!isPointRemaining) {
                circlesUnderTransition = false;
            }
        } else {
            // Otherwise make blobs move in there respective velocity
            for (let i = 0; i < circles.length; i++) {
                const circle = circles[i];
                const velocity = velocities[i];
                if (!circle || !velocity) continue;
                circle.x += velocity.x * dt_ms;
                circle.y += velocity.y * dt_ms;
                if (circle.x > window.innerWidth + circle.radius * 2.2) {
                    circle.x = -circle.radius * 2.2;
                }

                if (circle.x < -circle.radius * 2.2) {
                    circle.x = window.innerWidth + circle.radius * 2.2;
                }
                if (circle.y > window.innerHeight + circle.radius * 2.2) {
                    circle.y = -circle.radius * 2.2;
                }

                if (circle.y < -circle.radius * 2.2) {
                    circle.y = window.innerHeight + circle.radius * 2.2;
                }
            }
        }
    }

    function render(_: number) {
        if (!ctx) return;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        function drawCircle(point: Circle) {
            if (!ctx) return;
            ctx.fillStyle = RenderSettings.color;
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }

        for (const circle of circles) {
            drawCircle(circle);
        }
    }

    function loop(t1: number = 0, t2: number = 0) {
        const dt_ms = t2 - t1;
        update();
        render(dt_ms);
        frameId = window.requestAnimationFrame((t) => {
            loop(t2, t);
        });
    }

    // We will throttle the recalculation of points on resize.
    const throttledCreatePoints = throttle(createPoints, 2000);
    const resizeObserver = new ResizeObserver(() => {
        resizeCanvas(canvas);
        throttledCreatePoints();
    });
    resizeObserver.observe(canvas, {
        box: "border-box",
    });
    window.addEventListener("orientationchange", () => resizeCanvas(canvas));
    resizeCanvas(canvas);

    createPoints();
    loop();
});
onUnmounted(() => {
    window.cancelAnimationFrame(frameId);
});
</script>

<template>
    <canvas ref="canvasRef" />
</template>

<style scoped>
canvas {
    filter: blur(60px);
    width: 100%;
    height: 100%;
    background-color: var(--color-surface-container-lowest);
}
</style>
