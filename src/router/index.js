import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Register from "@/views/RegisterView.vue";
import Role from "@/views/ChoseRoleView.vue";
import Dashboard from "@/views/Dashboard.vue";
import Teams from "@/views/Teams.vue";

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
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/role",
    name: "Role",
    component: Role,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
