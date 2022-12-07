<template>
  <v-app>
    <v-main><RegisterView /></v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import NavBar from "@/components/Navbar.vue";
import RegisterView from "./views/RegisterView.vue";

export default {
  name: "App",

  components: {
    RegisterView,
  },

  data: () => ({
    //
  }),
};
</script>
