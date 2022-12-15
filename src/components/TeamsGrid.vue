<template>
  <v-container>
    <!-- <v-row class="mx-3">
      <v-col cols="12">
        <v-text-field
          v-model="search"
          class="text-field-search"
          hide-details
          label="Search"
          placeholder="Search"
          filled
          dense
          single-line
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-btn block @click="handleSearchSubmit()"> Filter </v-btn>
      </v-col>
    </v-row> -->
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

            <v-div v-if="club.picture !== ``">
              <v-col cols="2">
              <v-avatar size="100">
                <v-img
                  :src="
                    'https://pfeimages.blob.core.windows.net/imagess/' +
                    club.picture
                  "
                  class="imgTeams"
                ></v-img>
              </v-avatar>
            </v-col>
              </v-div>
              <v-div v-else>
                <v-col cols="2">
              <v-avatar size="100">
                <v-img
                  src="../assets/club.png"
                  class="rounded-circle float-left"
                  width="30px"
                  alt=""
                >
                </v-img>
              </v-avatar>
            </v-col>
              </v-div>

            <v-col cols="9 text-left">
              <h2>{{ club.name }}</h2>
              <strong>Basketball</strong> -
              <strong>{{ club.number_teams }} teams</strong>
              <p>
                {{ club.description }}
              </p>
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

      axios
        .get(server.baseURLDev + "sports/userSport?email=" + value.email)
        .then((response) => {
          this.listClubs[index] = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  methods: {
    redirectToProfileClub(id) {
      this.$router.push({ path: "/clubs/" + id });
    },

    // handleSearchSubmit() {
    //   axios
    //     .get(
    //       server.baseURLDev +
    //         "users/searchUser?role=club&name=" +
    //         this.search +
    //         "&country="
    //     )
    //     .then((response) => {
    //       console.log(response.data);
    //       this.clubs = response.data;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
};
</script>

<style>
.imgTeams {
  height: 100px;
  width: auto;
}
</style>
