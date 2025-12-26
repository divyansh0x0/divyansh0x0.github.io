<script setup lang="ts">
interface ProjectData {
    name: string,
    about: string,
    thumbnail: string,
    video: string,
    date: string,
    status: "completed" | "ongoing",
    skills: string[],
}

interface ProjectCategory {
    name: string,
    details: string,
    projects: ProjectData[]
}

const earlyProjects: ProjectData[] = [
    {
        name: "Quartz",
        about: "A custom Java music player built using GStreamer for audio playback.",
        thumbnail: "quartz.png",
        video: "quartz.mp4",
        date: "2022",
        status: "completed",
        skills: [
            "Java",
            "Java Swing",
            "Media Playback Systems",
            "Desktop Application Development",
        ]
    },
    {
        name: "JPhysicsEngine",
        about: "An object-oriented physics engine written in Java Swing, capable of handling collisions between circular and rectangular objects.",
        thumbnail: "physics_engine.png",
        video: "physics_engine.mp4",
        date: "2023",
        status: "completed",
        skills: [
            "Java",
            "Object-Oriented Design",
            "Physics Simulation",
            "Collision Detection"
        ]
    },
    {
        name: "JCalc",
        about: "A console-based AST calculator capable of parsing mathematical expressions and functions. It supports implicit multiplication, transcendental numbers, trigonometric functions, and logarithmic operations.",
        thumbnail: "jcalc.png",
        video: "jcalc.mp4",
        date: "2024",
        status: "completed",
        skills: [
            "Java",
            "Compiler Fundamentals",
            "Abstract Syntax Trees",
            "Parsing Techniques",
            "Lexical Analysis",
            "Language Design"
        ]
    }
]

const currentProjects: ProjectData[] = [
    {
        name: "Algo",
        about: "An advanced algorithm visualizer featuring a custom language and IDE, built specifically for visualizing data structures and algorithms.",
        thumbnail: "algo.png",
        video: "algo.mp4",
        date: "2025",
        status: "ongoing",
        skills: [
            "Nuxt",
            "Vue.js",
            "Compiler Design",
            "Domain-Specific Languages",
            "Entity Component System",
            "DevOps"
        ]
    },
    {
        name: "Crystal",
        about: "A C++ library for building cross-platform applications with a custom rendering pipeline.",
        thumbnail: "cpp.png",
        video: "crystal.mp4",
        date: "2025",
        status: "ongoing",
        skills: [
            "C++",
            "CMake",
            "OpenGL",
            "Cross-Platform Rendering",
            "UI Systems Design",
        ]
    }
]

const allProjects: ProjectCategory[] = [
    {
        name: "Early Projects",
        details: "Projects developed during my school years. While the code is relatively unrefined, these projects are fully functional and demonstrate my early interest in systems and software development.",
        projects: earlyProjects,
    },
    {
        name: "Ongoing Projects",
        details: "Projects developed during my BTech program. The codebases are significantly more robust, structured, and designed with collaboration and scalability in mind.",
        projects: currentProjects,
    }
];

</script>

<template>
    <section style="background-color: var(--color-surface-container-low)">
        <h1>Projects</h1>
        <div v-for="projectCat in allProjects" :key="projectCat.name" class="project-category">
            <h2>
                {{ projectCat.name }}
            </h2>
            <p> {{ projectCat.details }}</p>
            <div class="project-cards-container">
                <div
                    v-for="project in projectCat.projects"
                    :key="project.name"
                    :class="projectCat.name"
                    class="project-card-wrapper">
                    <video
                        v-if="project.video"
                        :src="`/videos/${project.video}`"
                        :poster="`/images/${project.thumbnail}`"
                        muted
                        loop
                        aria-hidden="true"
                        playsinline
                        disablePictureInPicture
                        preload="metadata"
                        @mouseenter="e => (e.target as HTMLVideoElement).play()"
                        @mouseleave="e => (e.target as HTMLVideoElement).pause()"
                    />
                    <img
                        v-else :src="`/images/${project.thumbnail}`"
                        loading="lazy"
                        :alt="project.name">
                    <div class="project-card-details">
                        <h3>
                            {{ project.name }}
                        </h3>

                        <p>{{ project.about }}</p>
                        <div class="skills-wrapper">
                            <div
                                v-for="skill in project.skills"
                                :key="skill"
                                class="skill">{{ skill }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">
h1 {
    font-size: 6rem;
    padding: var(--padding-md) 0;
}

h2 {
    font-size: 3rem;
    padding: var(--padding-sm) 0;
}

h3 {
    font-size: 1.2em;
    font-weight: 800;
}

.project-category {
    width: 100%;
    min-height: 80vh;
    padding: var(--padding-lg) 0;
}

.project-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing-lg);
    margin: var(--spacing-xl) 0;
    width: 100%;
}

.project-card-wrapper {
    position: relative;
    overflow: hidden;
    cursor: pointer;

    flex: 1;
    width: 55ch;
    min-width: 35ch;
    min-height: 50vh;
    padding-top: 100px;

    background-color: var(--color-surface-container-high);
    border-radius: var(--border-radius-md);
    box-shadow: 0 16px 22px 1px var(--color-shadow);

    transition: transform 0.2s ease;
    align-content: end;

    video,
    img {
        position: absolute;
        left: 0%;
        top: 50%;
        height: 100%;
        width: auto;
        transform: scale(1.2) translate(0%, -50%);
        pointer-events: none;
    }

    video {
        filter: var(--inverse-filter);
    }

    &:hover {
        transform: scale(1.01);
    }
}

.project-card-details {
    user-select: none;
    position: relative;
    height: fit-content;
    padding: var(--padding-md);

    font-size: 1.2em;
    color: var(--color-on-overlay);

    backdrop-filter: blur(20px);
    background: linear-gradient(
            to top,
            var(--color-overlay) 30%,
            transparent
    );
    align-content: end;
    transition: transform 0.25s ease;
    transform: translateY(3em);
}

.project-card-wrapper:hover .project-card-details {
    transform: translateY(0);
}

.skills-wrapper {
    margin-top: 1em;
    display: flex;
    flex-wrap: nowrap;
    gap: 1em;
    overflow-y: visible;
    overflow-x: auto;
    border-radius: var(--border-radius-sm);
}

.skill {
    user-select: none;
    padding: var(--padding-sm);
    border-radius: var(--border-radius-sm);
    background-color: var(--color-primary-container);
    color: var(--color-secondary);
    font-size: 0.9em;
    flex: 0 0 fit-content;
    //opacity: 0;
    //filter: blur(4px);
    //transform: translateY(6px);

    transition: opacity 0.25s ease,
    transform 0.25s ease,
    filter 0.4s ease,
    box-shadow 0.2s ease;

}

//
//.project-card-wrapper:hover .skill {
//    opacity: 1;
//    filter: blur(0);
//    transform: translateY(0);
//}
//
.skill:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px 1px var(--color-shadow);
}
@media screen and (min-width: 900px) {
    .skills-wrapper {
        overflow-x: hidden;
        flex-wrap: wrap;
    }
}
</style>