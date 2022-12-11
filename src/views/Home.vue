<template>
  <v-app id="app">
    <v-container>
      <section class="section1 mt-3">
        <v-row class="text-left mx-3" align="center" justify="center">
          <v-col cols="12" xs="12" sm="6" md="6">
            <h1 class="titleSection1">The power of sport to move the world</h1>
            <div class="mt-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur facere inventore iusto, sed omnis officia aut
                praesentium eaque exercitationem quos, non placeat. Sed harum ut
                perspiciatis officia ipsa enim explicabo!
              </p>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6">
            <v-img src="../assets/undraw1.2.svg" class="w-70 mx-auto"></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-app>
</template>

<script>
//import Undraw1 from "../assets/logo.svg";

export default {
  name: "Home",
};
</script>

<style>
.titleSection1 {
  font-size: 40px;
  line-height: 50px;
}
</style>
