import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import index from "@/views/index.vue";

export const routes: RouteRecordRaw[] = [{ path: "/", component: index }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
