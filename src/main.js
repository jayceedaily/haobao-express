import { createApp } from "vue";
import "./style.css";
import routes from "./routes";

import App from "./App.vue";
Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

import VueGeolocation from "vue3-geolocation";
import GMaps from "vuejs3-google-maps";

const app = createApp(App);

app.use(VueGeolocation);
app.use(routes);
app.use(GMaps, {
  load: {
    apiKey: "AIzaSyD1k_5jRf0h7qH4Dl5Fem_QrQkmNjE0Rn8",
    libraries: ["places"],
  },
});

app.mount("#app");
