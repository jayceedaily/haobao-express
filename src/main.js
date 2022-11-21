import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";
Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

createApp(App).mount("#app");
