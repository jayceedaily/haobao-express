import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";


Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

const app = createApp(App);

app.use(router);

app.mount("#app");
