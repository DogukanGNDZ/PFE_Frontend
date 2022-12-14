<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-img src="../assets/logo.png" class="imgTeams"></v-img>
          <h2>{{ infoClub.name }}</h2>
          <div class="my-3">
            <v-btn class="ma-2" outlined rounded color="success">
              Demande d'inscription
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3">
            <h3 class="text-left">Informations</h3>
            <v-card-text class="text-left">
              <p>Email : {{ infoClub.email }}</p>
              <p>Number of teams : {{ infoClub.number_teams }}</p>
              <p>Description : {{ infoClub.description }}</p>
              <p>Creation date : {{ infoClub.creation_date }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mx-1 mt-5">
        <h3>Teams :</h3>
        <v-col cols="12">
          <v-card class="pa-3">
            <h3 class="text-left">Category</h3>
            <v-card-text class="text-left">
              <p>Info about teams</p>
              <p>Number of players</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import axios from "axios";
import { server } from "../helper";
export default {
  name: "ProfileClub",
  data() {
    return {
      infoClub: [],
      teams: [],
    };
  },
  mounted() {
    const id = this.$route.params.id;
    axios
      .get(server.baseURLDev + "users/id/" + id)
      .then((response) => (this.infoClub = response.data))
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        server.baseURLDev + "clubs/getTeamsClub?email=" + this.infoClub.email
      )
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
