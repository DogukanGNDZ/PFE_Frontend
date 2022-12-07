<!-- Template -->
<template>
  <v-app>
    <v-container>
      <div>
        <h1 text class="text-red mt-10">Home</h1>
      </div>
    </v-container>
  </v-app>
</template>

<!-- Script -->
<script>
<<<<<<< HEAD
export default {
  name: "HomeView",

  components: {},
=======
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
>>>>>>> c78e40d0798de13b639a0349af589b2223024e8c
};
</script>
