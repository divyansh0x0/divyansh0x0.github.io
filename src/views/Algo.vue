<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const close = () => router.back();
</script>

<template>
    <div class="overlay" @click.self="close">
        <div class="popup">
            <h2>Login</h2>
            <button @click="close">Close</button>
        </div>
    </div>
</template>

<style scoped></style>
