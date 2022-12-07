<template>
  <v-app>
    <v-main>
      <HomeView />
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import NavBar from "@/components/Navbar.vue";
import HomeView from "./views/HomeView.vue";

export default {
  name: "App",

  components: {
    HomeView,
  },

  data: () => ({
    //
  }),
};
</script>
