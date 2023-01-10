import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Index.vue";
import Login from "@/views/Auth/Login.vue"
import Store from "@/views/Store/Index2.vue"

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "login",
    path: "/login",
    component: Login
  },
  {
    name: "store",
    path: "/store",
    component: Store
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (to.meta.title) {
    setTitle(to.meta.title);
  }
});

export default router;
