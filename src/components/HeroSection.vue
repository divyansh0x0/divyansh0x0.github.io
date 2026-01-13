<script setup lang="ts">
import BlogBackground from "@/components/BlogBackground.vue";
</script>
<template>
    <section id="hero" class="hero">
        <BlogBackground class="blob-bg" />
        <h1 id="intro">
            Hi,<br />
            I'm Divyansh
        </h1>
        <p>
            A freshman student in Mechanical Engineering. I have experience with C/C++, Typescript, Java,
            and Python.
        </p>
    </section>
</template>

<style scoped>
.hero {
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: left;
    user-select: none;
}

.hero h1 {
    font-size: max(min(20vw, 13vh), 2rem);
    max-width: 100%;
}
.blob-bg {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
}

p {
    font-size: max(min(2vw, 3vh), 1rem);
    width: 55ch;
    max-width: 100%;
}
</style>
