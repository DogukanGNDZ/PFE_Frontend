<!-- Template -->
<template>
    <v-app>
      <Role />
    </v-app>
  </template>
  
  <script>
  import Role from "@/components/ChooseRole.vue";
  
  export default {
    name: "RoleView",
  
    components: {
      Role,
    },
  };
  </script>
  
  <!-- Style -->
  <style scoped></style>