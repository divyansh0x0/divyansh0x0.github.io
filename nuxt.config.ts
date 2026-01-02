import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: [
        "assets/css/main.css",
        "assets/css/colors.css",
    ],
    modules: [
        '@nuxt/hints',
        '@nuxt/image',
        '@nuxt/test-utils',
        '@nuxt/ui',
        '@nuxt/scripts',
        '@nuxt/eslint'
    ],
    vite: {plugins: [tailwindcss(),],},
})