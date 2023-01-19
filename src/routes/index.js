import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Index.vue";
import Login from "@/views/Auth/Login.vue"
import OtpVerification from "@/views/Auth/OtpVerification.vue"
import Store from "@/views/Store/Index2.vue"

const routes = [
  {
    name: "home",
    path: "/",
    component: Store,
  },
  {
    name: "login",
    path: "/login",
    component: Login
  },
  {
    name: "otp-verification",
    path: "/otp-verification",
    component: OtpVerification
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
