<template>
  <v-container>
    <v-row class="mx-3">
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-card class="playerCard">
          <!-- ROW -->
          <v-row>
            <v-col cols="2">
              <v-img src="../assets/logo.png" class="imgTeams"></v-img>
            </v-col>
            <v-col cols="9 text-left">
              <h2>National Basketball Vue</h2>
              <strong>Basketball</strong> -
              <strong>2 teams</strong>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                non minus culpa nihil commodi quam neque dolore voluptatem
                aperiam architecto.
              </p>
            </v-col>
            <v-col cols="1">
              <v-btn icon="fas fa-ellipsis-vertical"></v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-card class="playerCard">
          <!-- ROW -->
          <v-row>
            <v-col cols="2">
              <v-img src="../assets/logo.png" class="imgTeams"></v-img>
            </v-col>
            <v-col cols="9 text-left">
              <h2>Haute Ecole Leonard De Vinci</h2>
              <strong>Badminton</strong> -
              <strong>5 teams</strong>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                non minus culpa nihil commodi quam neque dolore voluptatem
                aperiam architecto.
              </p>
            </v-col>
            <v-col cols="1">
              <v-btn icon="fas fa-ellipsis-vertical"></v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-card class="playerCard">
          <!-- ROW -->
          <v-row>
            <v-col cols="2">
              <v-img src="../assets/logo.png" class="imgTeams"></v-img>
            </v-col>
            <v-col cols="9 text-left">
              <h2>RSCA Anderlecht</h2>
              <strong>Football</strong> -
              <strong>20 teams</strong>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                non minus culpa nihil commodi quam neque dolore voluptatem
                aperiam architecto.
              </p>
            </v-col>
            <v-col cols="1">
              <v-btn icon="fas fa-ellipsis-vertical"></v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import axios from "axios";

export default {
  name: "PlayerGrid",
  data: () => ({
    items: [
      { title: "Click Me1" },
      { title: "Click Me2" },
      { title: "Click Me3" },
      { title: "Click Me4" },
    ],
  }),
  mounted() {
    // axios.get("url").then((response) => (this.players = response.data));
  },
};
</script>

<style>
.imgTeams {
  height: 100px;
  width: auto;
}
</style>
