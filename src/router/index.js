import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Register from "@/views/RegisterView.vue";
import Role from "@/views/ChoseRoleView.vue";
import Dashboard from "@/views/Dashboard.vue";
import Teams from "@/views/Teams.vue";
import Login from "@/views/LoginView.vue";
import Profil from "@/views/ProfilView.vue";
import MyProfil from "@/views/MyProfilView.vue";
import Logout from "@/components/Logout.vue";
import axios from 'axios';
import { server } from '../helper';

if (localStorage.getItem('token')!==null){
  axios.post(server.baseURLDev+'auth/confirm_token', {
  token: localStorage.getItem('token'), 
  })
  .catch(error => {
    location.href = "/logout"
    console.log(error)
  })
}

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
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
  },
  {
    path: "/myprofil",
    name: "My Profil",
    component: MyProfil,
  },
  {
    path: "/logout",
    name: "Log out",
    component: Logout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
