<script>
import SidebarLink from "./SidebarLink";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";

export default {
  props: {},
  data: () => ({
    token: localStorage.getItem("token"),
  }),
  methods: {},

  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1 class="text-left px-2 mt-2">
      <span v-if="collapsed">
        <div>S</div>
      </span>
      <span v-else>Sport Link</span>
    </h1>
    <div v-if="token !== null">
      <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
      <SidebarLink to="/clubs" icon="fas fa-shield">Clubs</SidebarLink>
      <SidebarLink to="/players" icon="fas fa-users">Players</SidebarLink>
      <SidebarLink to="/coachs" icon="fas fa-flag">Coachs</SidebarLink>
      <SidebarLink to="/logout" icon="fas fa-sign-in">Log out</SidebarLink>
    </div>
    <div v-else>
      <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
      <SidebarLink to="/role" icon="fas fa-sign-in">Register</SidebarLink>
      <SidebarLink to="/login" icon="fa-solid fa-user">Login</SidebarLink>
      <SidebarLink to="/clubs" icon="fas fa-shield">Clubs</SidebarLink>
      <SidebarLink to="/players" icon="fas fa-users">Players</SidebarLink>
      <SidebarLink to="/coachs" icon="fas fa-flag">Coachs</SidebarLink>
    </div>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #000000;
  --sidebar-item-hover: #6b6b6b;
  --sidebar-item-active: #eb6969;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
