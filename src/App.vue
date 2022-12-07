<template>
  <v-app>
    <v-main><NavBar /></v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/Navbar.vue";

export default {
  name: "App",

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
