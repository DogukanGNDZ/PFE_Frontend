<!-- Template -->
<template>
  <v-app>
    <NavBar />

    <v-container>
      <div>
        <h1 text class="text-red mt-10">Home Page</h1>
      </div>
    </v-container>
    <Register />
  </v-app>
</template>

<!-- Script -->
<script>
import NavBar from "@/components/Navbar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Register from "@/components/Register.vue";
export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
    HelloWorld,
    Register
  },
};
</script>
