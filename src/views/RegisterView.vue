<!-- Template -->
<template>
    <v-app id="register">
      <Register />
    </v-app>
  </template>
  
  <!-- Script -->
  <script>
  import { defineComponent } from "vue";
  
  import Register from "@/components/Register.vue";
  export default defineComponent({
    name: "RegisterView",
  
    components: {
      Register
    },
  });
  </script>
  
  <!-- Style -->
  <style scoped>
  .v-container {
    padding: 16px 0;
  }
  .head {
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 400px;
    width: 100%;
    color: white;
  }
  
  head:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background: black;
  }
  </style>
  