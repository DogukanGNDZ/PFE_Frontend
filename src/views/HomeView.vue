<!-- Template -->
<template>
  <v-app id="home">
    <NavBar />
    <HelloWorld />
    <v-container fluid>
      <div class="head">
        <p text class="text-red">test</p>
      </div>
    </v-container>
  </v-app>
</template>

<!-- Script -->
<script>
import { defineComponent } from "vue";

import NavBar from "@/components/Navbar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
    HelloWorld,
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
