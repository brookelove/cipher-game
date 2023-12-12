import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Overview from "./pages/Overview.vue";
import Instructions from "./pages/Instructions.vue";
import LevelPage from "./pages/LevelPage.vue";
import Words from "./components/Words.vue";
import Congrats from "./pages/Congrats.vue";
import "./style.css";
import App from "./App.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/overview", component: Overview },
  { path: "/instructions", component: Instructions },
  { path: "/level/:levelId", component: LevelPage },
  { path: "/strings", component: Words },
  { path: "/congrats", component: Congrats },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
