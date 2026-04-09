<script setup lang="ts">
defineProps({
    borderEnabled: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ""
    }
});
</script>

<template>
    <div class="chamfer-card-wrapper" :class="{ 'border-enabled': borderEnabled }">
        <div v-if="title" class="card-header">
            <span class="header-glitch-part"></span>
            <span class="header-text">{{ title }}</span>
        </div>
        <div class="chamfer-card-outer">
            <div class="chamfer-card-inner">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.chamfer-card-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.card-header {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 0.75rem;
    padding: 2px 12px;
    width: fit-content;
    text-transform: uppercase;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
    margin-bottom: -2px;
    z-index: 2;
}

.chamfer-card-outer {
    position: relative;
    display: flex;
    flex: 1; /* Stretch to fill wrapper */
    flex-direction: column;
    background-color: var(--color-border);
    clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - var(--chamfer-size)),
        calc(100% - var(--chamfer-size)) 100%,
        0 100%
    );
    transition: background-color var(--transition-speed) ease;
}

.chamfer-card-inner {
    position: relative;
    flex: 1;
    margin: var(--border-thickness);
    background-color: var(--color-surface-container);
    clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - var(--chamfer-size)),
        calc(100% - var(--chamfer-size)) 100%,
        0 100%
    );
    display: flex;
    padding: var(--padding-md);
    flex-direction: column;
}



/* Hover effects */
.border-enabled:hover {
    .chamfer-card-outer {
        background-color: var(--color-primary);
    }
}

/* Non-bordered cards still get the inner structure */
.chamfer-card-wrapper:not(.border-enabled) .chamfer-card-outer {
    background-color: transparent;
}
</style>