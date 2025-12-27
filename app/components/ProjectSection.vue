<script setup lang="ts">
interface ProjectData {
    name: string,
    about: string,
    thumbnail: string,
    video: string,
    date: string,
    status: "completed" | "ongoing",
    features: string[],
    githubRepo?:string,
    sitelink?:string,
}

interface ProjectCategory {
    name: string,
    details: string,
    projects: ProjectData[]
}

const earlyProjects: ProjectData[] = [
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
        githubRepo:"https://github.com/divyansh0x0/quartz",
        sitelink:"",
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
        githubRepo:"https://github.com/divyansh0x0/JPhysicsEngine",
        sitelink:"",
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
        githubRepo:"https://github.com/divyansh0x0/JCalc",
        sitelink:"",
    }
]

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
            "Everything built from scratch"
        ],
        githubRepo:"https://github.com/divyansh0x0/algo",
        sitelink:"https://divyansh0x0.github.io/algo",
    },
]

const allProjects: ProjectCategory[] = [
    {
        name: "Featured Project - 2025 onwards",
        details: "Project developed during my BTech program. The codebase is significantly more robust, structured, and designed with collaboration and scalability in mind.",
        projects: currentProjects,
    },
    {
        name: "Early Projects - 2022 to 2024",
        details: "Projects developed during my school years. The code is unrefined and a lot of bugs are present. These projects were one of the best learning experiences for me.",
        projects: earlyProjects,
    }
];

</script>

<template>
    <section style="background-color: var(--color-surface-container-low)">
        <h2>Projects</h2>
        <div v-for="projectCat in allProjects" :key="projectCat.name" class="project-category">
            <h3>
                {{ projectCat.name }}
            </h3>
            <p> {{ projectCat.details }}</p>
            <div class="project-cards-container">
                <div
                    v-for="project in projectCat.projects"
                    :key="project.name"
                    :class="projectCat.name"
                    class="project-card-wrapper">
                    <div class="project-card-details">
                        <h4>
                            {{ project.name }}
                        </h4>

                        <p>{{ project.about }}</p>
                        <ul class="features-wrapper">
                            <li
                                v-for="skill in project.features"
                                :key="skill"
                                class="feature">{{ skill }}
                            </li>
                        </ul>
                        <div class="date">
                            {{project.date}}
                        </div>
                        <div class="links">
                            <a target="_blank" rel="noopener noreferrer" v-if="project.githubRepo" :href="project.githubRepo">
                                <Icon name="mdi:github"  />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" v-if="project.sitelink" :href="project.sitelink">
                                <Icon name="streamline-plump:web" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">
h2{
    font-size: 6rem;
    padding: var(--padding-md) 0;
}

h3 {
    font-size: 3rem;
    padding: var(--padding-sm) 0;
}

h4 {
    font-size: 1.2em;
    font-weight: 800;
    padding: var(--padding-md) 0;
}

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

.project-card-wrapper {
    position: relative;
    overflow: hidden;

    flex: 1;
    max-width: 55ch;
    width: 55ch;
    aspect-ratio: 1;
    min-width: 35ch;
    min-height: 50vh;
    padding-top: 0;

    background-color: var(--color-surface-container-high);
    border-radius: var(--border-radius-md);
    box-shadow: 0 16px 22px 1px var(--color-shadow);

    transition: transform 0.2s ease;
    align-content: start;


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
    display: flex;
    flex-direction: column;
    user-select: none;
    position: relative;
    height: 100%;
    padding: var(--padding-md);

    font-size: 1.2em;
    color: var(--color-on-overlay);

    backdrop-filter: blur(20px);
    background: linear-gradient(
            to top,
            var(--color-overlay) 0%,
            transparent
    );
    align-content: space-evenly;
    transition: transform 0.25s ease;
    //transform: translateY(3em);
}



.links{
    position: absolute;
    bottom: var(--padding-md);
    right: var(--padding-md);
    width: fit-content;
    display: flex;
    flex-wrap: nowrap;
    gap: 1em;
    a{
        display: block;
        font-size: 3rem;
        color: var(--color-secondary);
        &:hover{
            transform: scale(1.2);

        }
    }
}
.date{
    position: absolute;
    bottom: var(--padding-lg);
    left: var(--padding-lg);
    width: fit-content;
    background-color: var(--color-tertiary);
    color: var(--color-on-tertiary);
    padding: var(--padding-sm);
    border-radius: var(--border-radius-sm);
    //opacity: 0;
    //filter: blur(10px);
}
.project-card-wrapper:hover  {
    .date {
        //filter: blur(0);
        //opacity: 1;
    }
}
.features-wrapper {
    padding: var(--padding-md);
    list-style: '- ';
    .feature {
        padding: var(--padding-sm);

    }
}
@media screen and (max-width: 800px){
    .project-cards-container{
        justify-content: center;
    }
}
</style>