<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid> </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

import NavBar from "@/components/Navbar.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
  },
});
</script>
