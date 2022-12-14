import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Register from "@/views/RegisterView.vue";
import Role from "@/views/ChoseRoleView.vue";
import Dashboard from "@/views/Dashboard.vue";
import Clubs from "@/views/Teams.vue";
import Players from "@/views/Players.vue";
import Coachs from "@/views/Coachs.vue";
import ProfileClub from "@/views/ProfileClub.vue";
import Login from "@/views/LoginView.vue";
import MyProfil from "@/views/MyProfilView.vue";
import Notification from "@/views/NotificationView.vue";
import Logout from "@/components/Logout.vue";
import ProfilePlayer from "@/views/ProfilePlayer.vue";
import MyClub from "@/views/MyClub.vue";
import MyCoach from "@/views/MyCoachView.vue";
import NewMember from "@/views/NewMember.vue";
import axios from "axios";
import { server } from "../helper";

if (localStorage.getItem("token") !== null) {
  axios
    .post(server.baseURLDev + "auth/confirm_token", {
      token: localStorage.getItem("token"),
    })
    .catch((error) => {
      location.href = "/logout";
      console.log(error);
    });
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
    path: "/clubs",
    name: "Teams",
    component: Clubs,
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
    path: "/myprofil",
    name: "My Profil",
    component: MyProfil,
  },
  {
    path: "/notification",
    name: "Notifications",
    component: Notification,
  },
  {
    path: "/logout",
    name: "Log out",
    component: Logout,
  },
  {
    path: "/players",
    name: "Players",
    component: Players,
  },
  {
    path: "/coachs",
    name: "Coachs",
    component: Coachs,
  },
  { path: "/clubs/:id", component: ProfileClub },
  { path: "/players/:id", component: ProfilePlayer },
  {
    path: "/myClub",
    name: "My Club",
    component: MyClub,
  },
  {
    path: "/mycoach",
    name: "My Coach",
    component: MyCoach,
  },
  {
    path: "/newMember",
    name: "NewMember",
    component: NewMember,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
