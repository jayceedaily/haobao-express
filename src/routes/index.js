import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Index.vue"

const routes = [
	{
		name: 'home',
        path: "/",
		component: Home,
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
