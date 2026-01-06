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

function send(e: any) {
    console.log(e);
}
</script>

<template>
    <section id="footer" class="footer-section">
        <h2 class="contact-heading">Contact Me</h2>
        <div class="contact-content">
            <div class="social-links-container">
                <h3>I am on</h3>
                <ul class="social-list">
                    <li v-for="linkInfo in linkInfos" :key="linkInfo.name">
                        <a :href="linkInfo.link" target="_blank" class="link">
                            {{ linkInfo.name }}
                            <Icon class="icon" :icon="linkInfo.icon" />
                        </a>
                    </li>
                </ul>
            </div>
            <!--            <div style="width: 100%; max-width: 300px; display: flex; justify-content: space-between;">-->
            <!--                <form style="display: flex; width: 100%; flex-direction: column; align-items: center; gap: var(&#45;&#45;spacing-md);">-->
            <!--                    <h3 style="width: 100%;">Write me an Email</h3>-->
            <!--                    <input type="email" placeholder="Email" name="email" />-->
            <!--                    <textarea placeholder="Message" name="message" />-->
            <!--                    <input type="submit" placeholder="Send" name="Send" value="Send" @submit.prevent="send" />-->
            <!--                </form>-->
            <!--            </div>-->
        </div>
    </section>
</template>

<style scoped lang="scss">
.footer-section {
    background: var(--color-surface-container-lowest);
    height: fit-content !important;
    width: 100%;
}

.contact-heading {
    padding: var(--padding-md) 0;
}

.contact-content {
    width: 100%;
    min-height: 50vh;
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-lg);
    align-items: center;
    justify-content: space-between;
}

.social-links-container {
    height: fit-content;
}

.social-list {
    list-style: none;
    display: flex;
    gap: var(--spacing-md);
    padding: var(--padding-sm) 0;
}

.link {
    display: flex;
    gap: var(--spacing-md);
    justify-content: space-between;
    border-radius: var(--border-radius-sm);
    color: var(--color-on-primary);
    background: var(--color-primary);
    margin-bottom: var(--spacing-sm);
    padding: var(--padding-md);
    transition: filter var(--transition-speed) ease;

    &:hover {
        filter: brightness(1.2);
        .icon {
            transform: scale(1.1);
        }
    }
}

.icon {
    display: block;
    transition: transform var(--transition-speed) ease;
}

form {
    input[type="email"],
    textarea {
        width: 100%;
        border: none;
        padding: var(--padding-md);
        border-radius: var(--border-radius-sm);
        outline: none;
    }
    textarea {
        resize: none;
        height: 12em;
    }
    input[type="submit"] {
        padding: var(--padding-sm) var(--padding-md);
        width: fit-content;
        border: none;

        background: var(--color-secondary);
        color: var(--color-on-secondary);
        border-radius: var(--border-radius-sm);
    }
}
</style>
