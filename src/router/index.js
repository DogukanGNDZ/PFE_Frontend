import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Contact from "@/views/ContactView.vue";
import Teams from "@/views/TeamsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
