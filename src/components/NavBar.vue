<script lang="ts" setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";
import { Icon } from "@iconify/vue";

const page_links = [
    { name: "About", href: "#hero", description: "Read about me" },
    { name: "Projects", href: "#projects", description: "Read about my project" },
    { name: "Contact", href: "#footer", description: "Read how you can contact me" },
];

const social_links = [
    {
        name: "Github",
        href: "https://www.github.com/divyansh0x0",
        icon: "mdi:github",
        description: "Go to my github page",
    },
];

const activeIndex = ref(0);
const navLinksRef = ref<HTMLElement[]>([]);
const sliderWidth = ref('0px');
const sliderLeft = ref('0px');

const updateSlider = async (index: number) => {
    activeIndex.value = index;
    await nextTick();
    
    const activeEl = navLinksRef.value[index];
    // Need to handle DOM elements properly, ensuring it's the anchor tag
    if (activeEl instanceof HTMLElement) {
        sliderWidth.value = `${activeEl.offsetWidth}px`;
        sliderLeft.value = `${activeEl.offsetLeft}px`;
    }
};

onMounted(() => {
    setTimeout(() => updateSlider(0), 100);

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50;
        
        if (isAtBottom) {
            updateSlider(page_links.length - 1);
            return;
        }

        let found = false;
        for (let i = page_links.length - 1; i >= 0; i--) {
            const section = document.querySelector(page_links[i].href);
            if (section instanceof HTMLElement) {
                if (section.offsetTop <= scrollPosition) {
                    updateSlider(i);
                    found = true;
                    break;
                }
            }
        }
        if (!found) updateSlider(0);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => updateSlider(activeIndex.value));
    
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', () => updateSlider(activeIndex.value));
    });
});
</script>

<template>
    <nav class="navbar">
        <div class="nav-container page-nav">
            <div class="nav-slider" :style="{ width: sliderWidth, transform: `translateX(${sliderLeft})` }"></div>
            <ul class="page-links">
                <li v-for="(link, index) in page_links" :key="link.name">
                    <a
                        ref="navLinksRef"
                        :aria-label="link.description"
                        class="nav-link"
                        :class="{'nav-link-active': activeIndex === index}"
                        :href="link.href"
                        @click="updateSlider(index)"
                    >
                        {{ link.name }}
                    </a>
                </li>
            </ul>
        </div>
        <div class="nav-container social-nav">
            <ul class="social-links">
                <li v-for="link in social_links" :key="link.name">
                    <a
                        class="social-link"
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
.navbar {
    position: fixed;
    top: var(--spacing-md);
    left: var(--spacing-lg);
    right: var(--spacing-lg);
    z-index: 999;
    display: flex;
    justify-content: space-between;
    pointer-events: none; 
}

.nav-container {
    pointer-events: auto;
    background-color: var(--color-background); /* Solid TUI background */
    border: var(--border-thickness) solid var(--color-primary); /* High contrast border */
    position: relative;
    /* Blocky terminal aesthetic, removing chamfer or keeping it strict */
    box-shadow: 4px 4px 0px rgba(252, 238, 10, 0.2);
}

.page-nav {
    padding: 0;
}

.nav-slider {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    /* Highlight block for active element */
    background-color: var(--color-primary);
    transition: transform 0.15s cubic-bezier(0, 0.5, 0.5, 1), width 0.15s cubic-bezier(0, 0.5, 0.5, 1);
    z-index: 0;
}

.page-links,
.social-links {
    display: flex;
    list-style: none;
    position: relative;
    z-index: 1;
    margin: 0;
    padding: 0;
}

.nav-link {
    display: block;
    padding: var(--padding-sm) var(--padding-md);
    font-family: var(--font-body); /* Monospace for TUI */
    font-weight: 700;
    text-transform: uppercase;
        font-size: 1rem;
    color: var(--color-primary);
    transition: color 0.1s ease;
    cursor: pointer;

    &::before {
        content: "[ ";
        opacity: 0.5;
    }
    &::after {
        content: " ]";
        opacity: 0.5;
    }

    &:hover {
        background-color: rgba(252, 238, 10, 0.1);
    }
}

.nav-link-active {
    color: var(--color-on-primary);
    
    &::before { content: "> "; opacity: 1; }
    &::after { content: ""; }
    
    &:hover {
        background-color: transparent;
    }
}

.social-nav {
    border-color: var(--color-border);
    box-shadow: none;
}

.social-link {
    padding: var(--padding-sm) var(--padding-md);
    display: flex;
    align-items: center;
    color: var(--color-on-surface);
    
    &:hover {
        color: var(--color-primary);
        background-color: rgba(252, 238, 10, 0.1);
    }
}

.icon {
    width: 1.5em;
    height: 1.5em;
}
</style>
