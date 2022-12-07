<template>
  <v-app>
    <NavBar />

    <v-container>
      <div>
        <h1 text class="text-red mt-10">About Page</h1>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/Navbar.vue";

export default {
  name: "About",

  components: {
    NavBar,
  },
};
</script>
