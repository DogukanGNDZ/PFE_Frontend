<template>
  <v-app>
    <NavBar />

    <v-container>
      <div>
        <h1 text class="text-red mt-10">Contact Page</h1>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/Navbar.vue";

export default {
  name: "Contact",

  components: {
    NavBar,
  },
};
</script>
