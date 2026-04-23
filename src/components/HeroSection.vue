<script setup lang="ts">
</script>

<template>
    <section id="hero" class="hero">
        <div class="hero-content">
            <div class="intro-group">
                <h1 id="intro">DIVYANSH</h1>
            </div>

            <h3 class="name-tag">Mechanical Engineering Freshman</h3>

            <p class="hero-description">
                Building complex projects from ground up
            </p>

            <div class="hero-footer-decor">
                <div class="bracket-item"></div>
                <div class="bracket-item"></div>
            </div>
        </div>

        <div class="hero-decoration">
            <div class="scan-line"></div>
            <div class="corner-accents"></div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.hero {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    overflow: hidden;
    padding-left: var(--spacing-xl);
}

.hero-header {
    position: absolute;
    top: var(--spacing-xl);
    left: var(--spacing-xl);
    display: flex;
    gap: var(--spacing-md);
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-secondary);
}

.hero-content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.pre-header {
    color: var(--color-secondary);
    font-size: 1rem;
    font-weight: 700;
}

.hero h1 {
    font-size: clamp(1rem, 14vw, 15rem);
    line-height: 0.85;
    color: var(--color-primary);
    margin: 0;
    filter: drop-shadow(4px 4px 0px var(--color-secondary));
}

.badge-row {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
}

.rank-badge {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    padding: var(--spacing-xs) var(--spacing-sm);
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1;
    font-family: var(--font-heading);
}

.rank-label {
    font-size: 1rem;
    font-weight: 900;
}

.rank-value {
    font-size: 1.25rem;
    font-weight: 900;
}

.name-tag {
    color: var(--color-on-background);
    margin: 0;
    font-size: clamp(1rem, 2vw, 1.5rem);
    background-color: rgba(0, 0, 0, 0.5);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-left: 4px solid var(--color-primary);
}

.hero-description {
    font-size: clamp(1rem, 2vw, 1.25rem);
    width: 60ch;
    max-width: 100%;
    margin: 0;
    color: var(--color-on-surface);
    opacity: 0.8;
}

.hero-footer-decor {
    display: flex;
    gap: var(--spacing-xs);
    margin-top: var(--spacing-md);
}

.bracket-item {
    width: 20px;
    height: 4px;
    background-color: var(--color-primary);
}

.hero-decoration {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}

.scan-line {
    position: absolute;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, transparent, rgba(252, 238, 10, 0.05), transparent);
    animation: scan 4s linear infinite;
}

@keyframes scan {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(100vh);
    }
}

.corner-accents {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    border-top: 2px solid var(--color-border);
    border-right: 2px solid var(--color-border);
    opacity: 0.2;
}
</style>
