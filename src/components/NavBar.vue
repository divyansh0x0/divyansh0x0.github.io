<script lang="ts" setup>
import HeroSection from "./HeroSection.vue";
import { Icon } from "@iconify/vue";
const page_links = [
    {
        name: "About",
        href: "/#hero",
        description: "Read about me",
    },
    {
        name: "Projects",
        href: "/#projects",
        description: "Read about my project",
    },
    {
        name: "Contact",
        href: "/#footer",
        description: "Read how you can contact me",
    },
];

const social_links = [
    {
        name: "Github",
        href: "https://www.github.com/divyansh0x0",
        icon: "mdi:github",
        description: "Go to my github page",
    },
];
</script>

<template>
    <nav
        style="
            position: fixed;
            top: var(--spacing-left);
            left: var(--spacing-left);
            z-index: 999;
            display: flex;
            width: 100%;
            height: fit-content;
            justify-content: space-between;
        "
    >
        <div>
            <ul
                style="
                    display: flex;
                    gap: var(--spacing-md);
                    padding: var(--padding-sm);
                    list-style: none;
                "
            >
                <li v-for="link in page_links" :key="link.name">
                    <a
                        :aria-label="link.description"
                        class="nav-link"
                        :href="link.href"
                    >
                        {{ link.name }}
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <ul
                style="
                    display: flex;
                    gap: var(--spacing-md);
                    padding: var(--padding-sm);
                    list-style: none;
                "
            >
                <li v-for="link in social_links" :key="link.name">
                    <a
                        style="
                            padding: var(--padding-sm);
                            display: block;
                            height: 100%;
                            align-items: center;
                        "
                        :href="link.href"
                        :aria-label="link.description"
                        target="_blank"
                    >
                        <Icon class="icon" :icon="link.icon"></Icon>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.nav-link {
    display: block;
    background-color: var(--color-surface-container-high);

    border-radius: var(--border-radius-circle);
    border: 1px solid var(--color-border);

    padding: var(--padding-md);

    backdrop-filter: blur(10px);

    transition: background var(--transition-speed) ease;

    &:hover {
        background-color: var(--color-surface-container-highest);
    }
}

.icon {
    width: 2em;
    height: 2em;
    transition: transform var(--transition-speed) ease;
    &:hover {
        transform: scale(1.2);
    }
}
</style>
