
<template>
    <v-app>
      <Notification />
    </v-app>
  </template>
  
  <script>
  import Notification from "@/components/Notification.vue";
  
  export default {
    name: "NotificationView",
  
    components: {
      Notification
    },
  };
  </script>
  
  <!-- Style -->
  <style scoped></style>
  