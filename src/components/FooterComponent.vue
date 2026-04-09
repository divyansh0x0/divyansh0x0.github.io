<script setup lang="ts">
import { Icon } from "@iconify/vue";
const linkInfos = [
    {
        name: "Github",
        link: "https://github.com/divyansh0x0",
        icon: "mdi:github",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/divyaanssshhhh",
        icon: "mdi:linkedin",
    },
];
</script>

<template>
    <section id="footer" class="footer-section">
        <div class="footer-grid">
            <div class="footer-header">
                <h2 class="footer-title">CONNECTION_TERMINAL</h2>
                <div class="system-line"></div>
            </div>
            
            <div class="footer-main">
                <div class="footer-links-group">
                    <span class="label">AUTHORIZED_CHANNELS</span>
                    <ul class="footer-links">
                        <li v-for="link in linkInfos" :key="link.name">
                            <a :href="link.link" target="_blank" class="footer-link-item">
                                <Icon :icon="link.icon" class="link-icon" />
                                <span class="link-name">{{ link.name }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div class="footer-brand">
                    <span class="brand-id">DIVYANSH[DX-2026]</span>
                    <p class="brand-motto">PRECISION_SYSTEMS_ENGINEERING</p>
                </div>
            </div>
            
            <div class="footer-legal">
                <div class="legal-content">
                    <span>©2026_ALL_RIGHTS_RESERVED</span>
                    <span>LOC:53.3498N_6.2603W</span>
                </div>
                <div class="footer-accent"></div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.footer-section {
    padding: var(--spacing-xl) var(--spacing-lg);
    background-color: var(--color-background);
    border-top: var(--border-thickness) solid var(--color-border);
}

.footer-grid {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
}

.footer-header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.footer-title {
    font-size: clamp(2rem, 5vw, 4rem);
    color: var(--color-primary);
    margin: 0;
    line-height: 1;
}

.system-line {
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
    position: relative;
    
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 4px;
        background-color: var(--color-secondary);
        top: -2px;
    }
}

.footer-main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-xl);
}

.footer-links-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.label {
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--color-secondary);
    letter-spacing: 0.1em;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.footer-link-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    color: var(--color-on-background);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.25rem;
    transition: all var(--transition-speed) ease;
    
    &:hover {
        color: var(--color-primary);
        padding-left: var(--spacing-sm);
    }
}

.footer-brand {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.brand-id {
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--color-on-background);
}

.brand-motto {
    font-size: 0.75rem;
    color: var(--color-primary);
    letter-spacing: 0.3em;
    margin: 0;
}

.footer-legal {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: var(--spacing-lg);
    border-top: 1px solid var(--color-border);
    font-family: var(--font-body);
    font-size: 0.7rem;
    color: var(--color-on-surface);
    opacity: 0.5;
}

.legal-content {
    display: flex;
    gap: var(--spacing-xl);
}

.footer-accent {
    width: 60px;
    height: 12px;
    background-color: var(--color-primary);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
}

@media (max-width: 768px) {
    .footer-brand {
        text-align: left;
    }
}
</style>
