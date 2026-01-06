<script lang="ts" setup>
const page_links = [
    {
        name: "About",
        href: "/#hero",
    },
    {
        name: "Projects",
        href: "/#projects",
    },
    {
        name: "Contact",
        href: "/#footer",
    },
];

const social_links = [
    {
        name: "Github",
        href: "https://www.github.com/divyansh0x0",
        icon: "mdi:github",
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
                    <NuxtLink class="nav-link" :href="link.href">
                        {{ link.name }}
                    </NuxtLink>
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
                        target="_blank"
                    >
                        <Icon class="icon" :name="link.icon"></Icon>
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
