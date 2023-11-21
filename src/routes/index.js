import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/loc",
    name: "location",
    component: () => import("@/views/Location/Index.vue"),
  },
  {
    path: "/loc/auf",
    name: "location",
    component: () => import("@/views/Location/Index.vue"),
  },
  {
    path: "/loc/magalang-ave",
    name: "location",
    component: () => import("@/views/Location/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {});

export default router;
