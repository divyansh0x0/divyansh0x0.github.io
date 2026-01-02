<script setup lang="ts">
import type ProjectData from '~/lib/ProjectData';

defineProps({
    details: {
        type: Object as PropType<ProjectData>,
        required: true
    }
})
</script>
<template>
    <div class="project-card-wrapper">
        <div class="project-card-details">
            <h4>
                {{ details.name }}
            </h4>

            <p>{{ details.about }}</p>
            <ul class="features-wrapper">
                <li
                    v-for="skill in details.features"
                    :key="skill"
                    class="feature">{{ skill }}
                </li>
            </ul>
            <div class="date">
                {{details.date}}
            </div>
            <div class="links">
                <a v-if="details.githubRepo" target="_blank" rel="noopener noreferrer" :href="details.githubRepo">
                    <Icon name="mdi:github"  />
                </a>
                <a v-if="details.sitelink" target="_blank" rel="noopener noreferrer" :href="details.sitelink">
                    <Icon name="streamline-plump:web" />
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>
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

    backdrop-filter: blur(20px);
    //background: linear-gradient(
    //    to top,
    //    var(--color-overlay) 0%,
    //    transparent
    //);
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
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    padding: var(--padding-sm);
    border-radius: var(--border-radius-sm);
    //opacity: 0;
    //filter: blur(10px);
}
.features-wrapper {
    padding: var(--padding-md);
    list-style: '- ';
    .feature {
        padding: var(--padding-sm);

    }
}
</style>