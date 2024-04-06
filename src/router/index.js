import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AlbunsView from "../views/AlbunsView.vue";
import DetalhesView from "../views/DetalhesView.vue";

const homeRota = {
  path: "/",
  name: "home",
  component: HomeView,
};

const albunsRota = {
  path: "/albuns",
  name: "albuns",
  component: AlbunsView,
};

const detalhesRota = {
  path: "/detalhes/:id",
  name: "detalhes",
  component: DetalhesView,
};

const routes = [homeRota, albunsRota, detalhesRota];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
