import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Index.vue";
import Login from "@/views/Auth/Login.vue";
import OtpVerification from "@/views/Auth/OtpVerification.vue";
import Store from "@/views/Store/Index2.vue";
import BagIndex from "@/views/Bag/Index.vue";
import HistoryIndex from "@/views/OrderHistory/Index.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Store,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "otp-verification",
    path: "/otp-verification",
    component: OtpVerification,
  },
  {
    name: "bag.index",
    path: "/bag",
    component: BagIndex,
  },
  {
    name: "history.index",
    path: "/history",
    component: HistoryIndex,
  },
  {
    name: "user.show",
    path: "/me",
    component: Store,
  },
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
