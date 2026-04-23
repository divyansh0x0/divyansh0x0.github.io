<script setup lang="ts">
import type { ProjectData } from "@/lib/ProjectData";
import ProjectCard from "@/components/ProjectCard.vue";

interface ProjectCategory {
    name: string;
    details: string;
    projects: ProjectData[];
}

const earlyProjects: ProjectData[] = [
    {
        name: "Ash - Discord Bot",
        about: "A Discord bot built in Java for community moderation and automation. Handles everything from user management to scheduled events, designed to stay reliable under the kind of message volume active servers actually see.",
        thumbnail: "discord.png",
        video: "",
        date: "2022",
        status: "completed",
        features: [
            "Moderation tools for warnings, kicks, and bans with a clean command interface",
            "Reaction-based role assignment with persistent state stored in JSON",
            "Giveaway and timer automation with configurable scheduling",
            "Slash command support for a modern, low-friction user experience",
            "Built-in expression evaluator for quick in-chat math",
            "Auto-react system configurable per channel or keyword",
        ],
        githubRepo: "https://github.com/divyansh0x0/Ash-Moderation-Bot",
        sitelink: "",
    },
    {
        name: "Quartz - Music Player",
        about: "A desktop music player built in Java using GStreamer for audio playback and Swing for the UI. The main technical focus was dynamic theming — the interface extracts the dominant color palette from album art and rebuilds its entire color scheme on the fly.",
        thumbnail: "quartz.png",
        video: "quartz.mp4",
        date: "2022",
        status: "completed",
        features: [
            "Borderless custom window with a fully hand-built Swing UI — no default OS chrome",
            "Album art color extraction that drives real-time UI retheming",
            "Built-in audio visualizer with customizable rendering parameters",
            "Local library management with fast track indexing and playback state persistence",
        ],
        githubRepo: "https://github.com/divyansh0x0/quartz",
        sitelink: "",
    },
    {
        name: "JPhysicsEngine",
        about: "A 2D physics simulation engine written from scratch in Java. Built to explore rigid body dynamics, collision detection, and real-time rendering — without relying on any physics library.",
        thumbnail: "physics_engine.png",
        video: "physics_engine.mp4",
        date: "2023",
        status: "completed",
        features: [
            "Real-time simulation of 2D rigid body physics including velocity, gravity, and friction",
            "Collision detection and response across multiple geometric primitives",
            "Custom-built GUI for creating and manipulating objects in the simulation at runtime",
        ],
        githubRepo: "https://github.com/divyansh0x0/JPhysicsEngine",
        sitelink: "",
    },
    {
        name: "JCalc - Advanced Calculator",
        about: "A mathematical expression parser and evaluator written in Java. The core challenge was building a proper parser that handles operator precedence, implicit multiplication, nested expressions, and standard math functions without ambiguity.",
        thumbnail: "jcalc.png",
        video: "jcalc.mp4",
        date: "2024",
        status: "completed",
        features: [
            "Full support for trig, logarithms, and other standard math functions",
            "Handles implicit multiplication (e.g. 2(3+4)) and nested bracket expressions correctly",
            "Recursive descent parsing with step-by-step evaluation for accurate results",
        ],
        githubRepo: "https://github.com/divyansh0x0/JCalc",
        sitelink: "",
    },
];

const currentProjects: ProjectData[] = [
    {
        name: "Algo - Algorithm Visualizer",
        about: "A browser-based algorithm visualization tool, built entirely client-side. The core of the project is YASL — a custom scripting language with its own lexer, parser, and interpreter — designed specifically for writing visual, step-by-step algorithm logic.",
        thumbnail: "algo.png",
        video: "algo.mp4",
        date: "2025",
        status: "ongoing",
        features: [
            "Embedded code editor built into the browser with syntax support for YASL",
            "YASL: a purpose-built scripting language with its own lexer, parser, and runtime interpreter",
            "HTML Canvas renderer for smooth, frame-by-frame visualization of array and graph operations",
            "Step-through execution mode that pauses and replays code state in real time",
            "Fully client-side — no backend, no build step required to run",
            "Built ground-up as a frontend architecture exercise, not assembled from existing visualization libraries",
        ],
        githubRepo: "https://github.com/divyansh0x0/algo",
        sitelink: "https://divyansh0x0.github.io/algo",
    },
];
const allProjects: ProjectCategory[] = [
    {
        name: "Featured Project - 2025 onwards",
        details:
            "Project developed during my BTech program. The codebase is significantly more robust, structured, and designed with collaboration and scalability in mind.",
        projects: currentProjects,
    },
    {
        name: "Early Projects - 2022 to 2024",
        details:
            "Projects developed during my school years. The code is unrefined and a lot of bugs are present. These projects were one of the best learning experiences for me.",
        projects: earlyProjects,
    },
];
</script>

<template>
    <section
        id="projects"
        class="projects-section"
    >
        <div class="section-header">
            <h2>Work & Projects</h2>
        </div>
        <div
            v-for="(projectCat) in allProjects"
            :key="projectCat.name"
            class="project-category"
        >
            <div class="category-header">
                <h3>{{ projectCat.name }}</h3>
                <p class="cat-details">{{ projectCat.details }}</p>
            </div>
            <div class="project-cards-container">
                <ProjectCard
                    v-for="project in projectCat.projects"
                    :key="project.name"
                    :project="project"
                />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.projects-section {
    background-color: transparent;
}

.section-label {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 900;
    color: var(--color-secondary);
    letter-spacing: 0.2em;
}

.section-header {
    width: 100%;
    margin-bottom: var(--spacing-xl);
}

.project-category {
    width: 100%;
    padding: var(--padding-lg) 0;
    display: flex;
    flex-direction: column;
}

.category-header {
    margin-bottom: var(--spacing-lg);
    background-color: transparent;
    padding-top: var(--spacing-md);
    padding-bottom: var(--spacing-md);
}

.cat-meta {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xs);
}

.cat-index {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-primary);
}

.cat-line {
    flex: 1;
    height: 1px;
    background-color: var(--color-border);
}

.category-header h3 {
    padding-top: 0;
    color: var(--color-on-background);
    margin: 0;
    font-size: 1.5rem;
}

.cat-details {
    margin: 0;
    margin-top: var(--spacing-sm);
    font-size: 1rem;
    color: var(--color-on-surface);
    opacity: 0.8;
    max-width: 80ch;
}

.project-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50ch, 1fr));
    gap: var(--spacing-xl);
    width: 100%;
}
@media screen and (max-width: 1024px) {
    .project-cards-container {
        grid-template-columns: 1fr;
        width: 100%;
    }
}
</style>
