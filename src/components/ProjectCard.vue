<script setup lang="ts">
import { PropType, ref } from "vue";
import type { ProjectData } from "@/lib/ProjectData";
import { Icon } from "@iconify/vue";
import ChamferCard from "@/components/ChamferCard.vue";

defineProps({
    project: {
        type: Object as PropType<ProjectData>,
        required: true,
    },
});

const videoLoaded = ref(false);
</script>

<template>
    <ChamferCard class="project-card-custom" :borderEnabled="true" :title="project.name">
        <div class="project-card-details">
            <div class="meta-row">
                <span class="status-indicator" :class="project.status">{{ project.status }}</span>
                <span class="date">{{ project.date }}</span>
            </div>

            <p class="about-text">{{ project.about }}</p>

            <div class="tech-section">
                <span class="section-label">FEATURES:</span>
                <ul class="features-wrapper">
                    <li
                        v-for="skill in project.features"
                        :key="skill"
                        class="feature"
                    >
                        {{ skill }}
                    </li>
                </ul>
            </div>

            <div v-if="project.video.length > 0" class="video-wrapper">
                <div class="video-skeleton" :class="{ hidden: videoLoaded }">
                    <div class="shimmer" />
                </div>
                <video
                    :src="`./videos/${project.video}`"
                    muted
                    autoplay
                    loop
                    playsinline
                    class="project-video"
                    :class="{ visible: videoLoaded }"
                    @canplay="videoLoaded = true"
                />
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
    </ChamferCard>
</template>

<style scoped lang="scss">
.project-card-custom {
    flex: 1;
    min-width: 50ch;
    max-width: 80ch;
    transition: transform var(--transition-speed) ease;

    &:hover {
        transform: scale(1.02);
    }
}

.project-card-details {
    display: flex;
    flex-direction: column;
    flex: 1; /* Stretch to fill the card */
    gap: var(--spacing-md);
}

.meta-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 700;
}

.status-indicator {
    padding: 2px 6px;
    background-color: var(--color-surface-container-highest);
    color: var(--color-primary);
    border-left: 3px solid var(--color-primary);
    text-transform: uppercase;

    &.completed {
        color: var(--color-tertiary); /* Cyan */
        border-left-color: var(--color-tertiary);
    }
}

.date {
    color: var(--color-on-surface);
    opacity: 0.6;
}

.about-text {
    font-size: 1rem;
    color: var(--color-on-background);
    line-height: 1.4;
    margin: 0;
}

.tech-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    flex: 1;
}

.section-label {
    font-size: 1rem;
    font-weight: 900;
    color: var(--color-secondary);
    letter-spacing: 0.1em;
}

.features-wrapper {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);

    .feature {
        font-size: 1rem;
        background-color: #000;
        color: var(--color-primary);
        width: 100%;
        padding: 2px 8px;
        font-family: var(--font-body);
    }
}

.video-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background-color: #000;
}

.video-skeleton {
    position: absolute;
    inset: 0;
    background-color: var(--color-surface-container-highest);
    transition: opacity 0.4s ease;

    &.hidden {
        opacity: 0;
        pointer-events: none;
    }
}

.shimmer {
    width: 100%;
    height: 100%;
    background: linear-gradient(
            90deg,
            transparent 0%,
            color-mix(in srgb, var(--color-primary) 8%, transparent) 50%,
            transparent 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1.6s infinite;
}

@keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position:  200% 0; }
}

.project-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.4s ease;

    &.visible {
        opacity: 1;
    }
}

.links {
    display: flex;
    gap: var(--spacing-md);
    padding-top: var(--spacing-md);
    border-top: 1px solid var(--color-border);

    a {
        font-size: 1.5rem;
        color: var(--color-on-surface);
        transition: all var(--transition-speed) ease;
        &:hover {
            color: var(--color-primary);
            transform: translateY(-2px);
        }
    }
}

@media screen and (max-width: 1024px) {
    .project-card-custom {
        max-width: 100%;
    }
}
</style>