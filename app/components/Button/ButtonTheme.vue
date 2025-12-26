<script lang="ts" setup>
const {theme, toggleTheme} = useThemeManager();

</script>

<template>
    <button @click="toggleTheme()">
        <Icon v-if="theme == 'light'" class="icon" name="ic:round-dark-mode"/>
        <Icon v-else class="icon" name="iconamoon:mode-light"/>
    </button>
</template>

<style scoped>
button {
    border-radius: var(--border-radius-circle);
    font-size: 2em;
    min-height: 30px;
    min-width: 30px;
    padding: var(--padding-sm);
    position: fixed;
    right: var(--spacing-lg);
    top: var(--spacing-lg);
    width: fit-content;
    z-index: 99;
    border:none;
    background-color: var(--color-tertiary);
    color: var(--color-on-tertiary);
    cursor: pointer;
    box-shadow: 5px 5px 25px 1px rgba(0, 0, 0, 0.56);
}

.icon {
    display: block;
}
</style>