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
        about: "A discord moderation bot written in Java. It was a two man project and one of my earliest big projects",
        thumbnail: "discord.png",
        video: "",
        date: "2022",
        status: "completed",
        features: [
            "Supported reporting, kick, ban and warn indivisuals ",
            "Asynchronous message handling",
            "Start timers and giveaways",
            "Could calculate math expressions",
            "Create reaction roles",
            "Supported slash commands",
        ],
        githubRepo: "https://github.com/divyansh0x0/quartz",
        sitelink: "",
    },
    {
        name: "Quartz - Music Player",
        about: "A desktop music player written in Java that uses GStreamer for audio playback with a focus on rich visuals",
        thumbnail: "quartz.png",
        video: "quartz.mp4",
        date: "2022",
        status: "completed",
        features: [
            "Java Swing–based custom GUI",
            "Extended Swing with a custom Material-style UI library",
            "Supports dynamic theming based on the currently playing song’s artwork",
            "Automatic local music library scanning and caching (experimental)",
        ],
        githubRepo: "https://github.com/divyansh0x0/quartz",
        sitelink: "",
    },
    {
        name: "JPhysicsEngine",
        about: "An object-oriented 2D physics engine built with Java Swing, designed to simulate and visualize collisions",
        thumbnail: "physics_engine.png",
        video: "physics_engine.mp4",
        date: "2023",
        status: "completed",
        features: [
            "Custom Material-style UI library for UI components",
            "Collision detection and resolution for circular and rectangular bodies",
        ],
        githubRepo: "https://github.com/divyansh0x0/JPhysicsEngine",
        sitelink: "",
    },
    {
        name: "JCalc - AST Calculator",
        about: "A console-based calculator that parses mathematical expressions into an AST, supporting implicit multiplication, transcendental numbers, and math functions.",
        thumbnail: "jcalc.png",
        video: "jcalc.mp4",
        date: "2024",
        status: "completed",
        features: [
            "Written in Java with BigDecimalMath2 for high-precision arithmetic",
            "Uses recursive-descent parser that generates an abstract syntax tree (AST)",
            "Supports implicit multiplication in expressions",
        ],
        githubRepo: "https://github.com/divyansh0x0/JCalc",
        sitelink: "",
    },
];

const currentProjects: ProjectData[] = [
    {
        name: "Algo - Algorithm Visualizer",
        about: "An interactive algorithm visualizer that simulates algorithms written in nuxt 4 and typescript.\n",
        thumbnail: "algo.png",
        video: "algo.mp4",
        date: "2025",
        status: "ongoing",
        features: [
            "Custom-built text editor for writing algorithms",
            "A custom scripting language - YASL",
            "Entity Component System (ECS)–based rendering architecture",
            "Customizable interface",
            "Smooth, animated visualizations",
            "Automatic tracer attachment when writing custom algorithms",
            "Everything built from scratch",
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
        style="background-color: var(--color-surface-container-low)"
    >
        <h2>Projects</h2>
        <div
            v-for="projectCat in allProjects"
            :key="projectCat.name"
            class="project-category"
        >
            <h3>
                {{ projectCat.name }}
            </h3>
            <p>{{ projectCat.details }}</p>
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
.project-category {
    width: 100%;
    min-height: 80vh;
    padding: var(--padding-lg) 0;
}

.project-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: var(--spacing-lg);
    margin: var(--spacing-xl) 0;
    width: 100%;
}
</style>
