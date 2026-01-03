<script setup lang="ts">
import {ref} from "vue"
import {throttle} from "~/lib/Throttle";
import {ease, lerp} from "~/lib/Lerp";

interface Point {
    x: number,
    y: number,
    radius: number
}

interface Velocity {
    x: number,
    y: number,
}

const canvasRef = ref<HTMLCanvasElement | null>(null);
const RenderSettings = {
    radiusFactor: 0.15,
    thickness: 1,
    color: "#fff",
    maxVelocity: 0.08,
    pointCount: 16,
    lerpDurationMs: 1000
}
let frameId = 0;

onMounted(async () => {
    const canvas = canvasRef.value;
    if (!canvas)
        return;
    const ctx = canvas.getContext("2d");
    RenderSettings.color = window.getComputedStyle(document.documentElement).getPropertyValue("--color-canvas");
    if (!ctx)
        return;

    function resizeCanvas(canvas: HTMLCanvasElement) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    const points: Point[] = [];
    const velocities: Velocity[] = [];
    let newPoints: Point[] = [];
    let newVelocities: Velocity[] = [];
    let lerpTime: number[] = [];
    let pointsChanged = false;

    function createPoints() {
        if (points.length != 0)
            pointsChanged = true;
        newPoints = [];
        newVelocities = [];
        lerpTime = [];
        for (let i = 0; i < RenderSettings.pointCount; i++) {
            // points array to update
            const pArr = pointsChanged ? newPoints : points;
            //velocity array to update
            const vArr = pointsChanged ? newVelocities : velocities;

            pArr.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: (Math.random()+ 0.01) * RenderSettings.radiusFactor * Math.min(window.innerWidth, window.innerHeight),
            })
            vArr.push({
                x: (-Math.random() + Math.random()) * RenderSettings.maxVelocity,
                y: (-Math.random() + Math.random()) * RenderSettings.maxVelocity,
            })
            lerpTime.push(0);
        }


    }


    function update() {
        const dt_ms = 16;
        if (pointsChanged) {
            let isPointRemaining = false;
            for (let i = 0; i < points.length; i++) {
                const point = points[i];
                const velocity = velocities[i];
                const newPoint = newPoints[i];
                const newVelocity = newVelocities[i];
                const t = lerpTime[i];
                if (!point || !velocity || !newPoint || !newVelocity || t === undefined)
                    continue;
                if (t < 1) {
                    point.x = lerp(point.x, newPoint.x, t, ease.inOutCubic);
                    point.y = lerp(point.y, newPoint.y, t, ease.inOutCubic);

                    lerpTime[i] = dt_ms / RenderSettings.lerpDurationMs + t;
                    isPointRemaining = true;
                }
                console.log(lerpTime[i]);
            }
            if (!isPointRemaining) {
                pointsChanged = false;
                console.log("Updated positions")
            } else
                return;
        }

        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            const velocity = velocities[i];
            if (!point || !velocity)
                continue;
            point.x += velocity.x * dt_ms;
            point.y += velocity.y * dt_ms;
            if (point.x > window.innerWidth + point.radius * 2.2) {
                point.x = -point.radius * 2.2;
            }

            if (point.x < -point.radius * 2.2) {
                point.x = window.innerWidth + point.radius * 2.2;
            }
            if (point.y > window.innerHeight + point.radius * 2.2) {
                point.y = -point.radius * 2.2;
            }

            if (point.y < -point.radius * 2.2) {
                point.y = window.innerHeight + point.radius * 2.2;
            }
        }

    }

    function render(_: number) {
        if (!ctx)
            return;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        function drawPoint(point: Point) {
            if (!ctx)
                return;
            ctx.fillStyle = RenderSettings.color;
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }

        // console.log(dt_ms);
        for (const point of points) {
            drawPoint(point);
        }
        // console.log(points);
    }

    function loop(t1: number = 0, t2: number = 0) {
        const dt_ms = t2 - t1;
        update();
        render(dt_ms);
        frameId = window.requestAnimationFrame((t) => {
            loop(t2, t)
        })

    }

    const throttledCreatePoints = throttle(createPoints, 2000);
    const resizeObserver = new ResizeObserver(()=>{
        resizeCanvas(canvas);
        throttledCreatePoints();
    });
    resizeObserver.observe(canvas, {
        box:"border-box"
    })
    window.addEventListener("orientationchange", () => resizeCanvas(canvas));
    resizeCanvas(canvas);

    createPoints();
    loop();
})
onUnmounted(() => {
    window.cancelAnimationFrame(frameId);
})
</script>

<template>
    <canvas ref="canvasRef"/>
</template>

<style scoped>
canvas {
    filter: blur(60px);
    width: 100%;
    height: 100%;
    background-color: var(--color-surface-container-lowest);
}
</style>