<!-- Template -->
<template>
    <v-app>
      <!-- <RegisterClub v-if="role=='club'"/>
      <Register v-else /> -->
      <Login />
    </v-app>
  </template>
  
  <script>
  import Login from "@/components/Login.vue";
  
  export default {
    name: "LoginView",
    // data: () => ({
    //   role: localStorage.getItem("role"),
    //   }),
  
    components: {
      Login,
      // RegisterClub
    },
  };
  </script>
  
  <!-- Style -->
  <style scoped></style>
  