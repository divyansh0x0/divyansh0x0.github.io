<script setup lang="ts">
import { PropType } from "vue";
import type { ProjectData } from "@/lib/ProjectData";
import { Icon } from "@iconify/vue";
defineProps({
    project: {
        type: Object as PropType<ProjectData>,
        required: true,
    },
});
</script>

<template>
    <div class="project-card-wrapper">
        <div class="project-card-details">
            <h4>
                {{ project.name }}
            </h4>

            <p>{{ project.about }}</p>
            <ul class="features-wrapper">
                <li
                    v-for="skill in project.features"
                    :key="skill"
                    class="feature"
                >
                    {{ skill }}
                </li>
            </ul>
            <div class="date">
                {{ project.date }}
            </div>
            <div class="links">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    v-if="project.githubRepo"
                    :href="project.githubRepo"
                    :aria-label="`View ${project.name} on GitHub`"
                >
                    <Icon icon="mdi:github" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    v-if="project.sitelink"
                    :href="project.sitelink"
                    :aria-label="`View ${project.name} website`"
                >
                    <Icon icon="streamline-plump:web" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
    border-radius: var(--border-radius-sm);
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
    gap: var(--spacing-md);
    backdrop-filter: blur(20px);
    border-radius: var(--border-radius-sm);
    align-content: space-evenly;
    transition: transform 0.25s ease;
    overflow: hidden;
    //transform: translateY(3em);
}

.links {
    position: absolute;
    bottom: var(--padding-md);
    right: var(--padding-md);
    width: fit-content;
    display: flex;
    flex-wrap: nowrap;
    gap: 1em;

    a {
        display: block;
        font-size: 3rem;
        color: var(--color-secondary);
        transition: transform var(--transition-speed) ease;
        &:hover {
            transform: scale(1.2);
        }
    }
}

.date {
    position: absolute;
    bottom: var(--padding-lg);
    left: var(--padding-lg);
    width: fit-content;
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    padding: var(--padding-sm);
    border-radius: var(--border-radius-sm);
}

.date,
.links {
    opacity: 0;
    filter: blur(5px);
    transition:
        opacity var(--transition-speed) ease,
        filter var(--transition-speed) ease;
}

.project-card-wrapper:hover {
    .date,
    .links {
        filter: blur(0);
        opacity: 1;
    }
}

.features-wrapper {
    padding: var(--padding-md);
    list-style: "- ";
    background-color: var(--color-surface-container-low);
    border-radius: var(--border-radius-sm);
    overflow-y: auto;
    flex: 1;
    .feature {
        padding: var(--padding-sm);
    }
    scrollbar-width: none;
}
</style>
