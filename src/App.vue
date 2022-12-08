<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <Topbar />

    <router-view />
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Sidebar from "@/components/sidebar/Sidebar";
import { sidebarWidth } from "@/components/sidebar/state";
export default {
  components: { Sidebar, Topbar },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style>
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
