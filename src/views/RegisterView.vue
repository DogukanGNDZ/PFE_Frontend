<!-- Template -->
<template>
  <v-app>
    <!-- <RegisterClub v-if="role=='club'"/>
    <Register v-else /> -->
    <Register />
  </v-app>
</template>

<script>
import Register from "@/components/Register.vue";
// import RegisterClub from "@/components/RegisterClub.vue";

export default {
  name: "RegisterView",
  // data: () => ({
  //   role: localStorage.getItem("role"),
  //   }),

  components: {
    Register,
    // RegisterClub
  },
};
</script>

<!-- Style -->
<style scoped></style>
