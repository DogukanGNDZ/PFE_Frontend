<template>
  <v-container>
    <v-row class="mx-3">
      <v-col
        v-for="club in this.clubs"
        :key="club.id"
        cols="12"
        xs="12"
        sm="12"
        md="12"
      >
        <v-card class="playerCard" @click="redirectToProfileClub(club.id)">
          <!-- ROW -->
          <v-row>
            <v-col cols="2">
              <v-img
                :src="
                  'https://pfeimages.blob.core.windows.net/imagess/' +
                  club.picture
                "
                class="imgTeams"
              ></v-img>
            </v-col>
            <v-col cols="9 text-left">
              <h2>{{ club.name }}</h2>
              <strong>Basketball</strong> -
              <strong>{{ club.number_teams }} teams</strong>
              <p>
                {{ club.description }}
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
import axios from "axios";
import { server } from "../helper";

export default {
  name: "TeamsGrid",
  data() {
    return {
      clubs: [],
      listClubs: [[]],
    };
  },
  async mounted() {
    await axios
      .get(server.baseURLDev + "clubs")
      .then((response) => {
        this.clubs = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    this.clubs.filter((value, index) => {
      console.log(index);
      console.log(value.email);

      axios
        .get(server.baseURLDev + "sports/userSport?email=" + value.email)
        .then((response) => {
          this.listClubs[index] = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.listClubs);
    });
  },
  methods: {
    redirectToProfileClub(id) {
      this.$router.push({ path: "/clubs/" + id });
    },
  },
};
</script>

<style>
.imgTeams {
  height: 100px;
  width: auto;
}
</style>
