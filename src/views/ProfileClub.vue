<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-img v-if="imageUrl" :src="imageUrl" class="imgTeams"></v-img>
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
        <v-col v-for="(team, i) in this.teams" :key="i" cols="12">
          <v-card class="pa-3">
            <h3 class="text-left">{{ team.category }}</h3>
            <v-card-text class="text-left">
              <p>Number of players : {{ team.number_players }}</p>
              <p>Players :</p>
            </v-card-text>
            <v-row>
              <v-col
                v-for="(player, j) in this.listPlayer[i]"
                :key="j"
                cols="12"
              >
                {{ player.firstname }} {{ player.lastname }}
              </v-col>
            </v-row>
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
      imageUrl: null,
      infoClub: [],
      teams: [],
      listPlayer: [[]],
      emailClub: null,
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    await axios
      .get(server.baseURLDev + "users/id/" + id)
      .then((response) => {
        this.infoClub = response.data;
        this.emailClub = response.data.email;
        this.imageUrl =
          `https://pfeimages.blob.core.windows.net/imagess/` +
          response.data.picture;
        console.log(this.imageUrl);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(server.baseURLDev + "clubs/getTeamsClub?email=" + this.emailClub)
      .then((response) => {
        this.teams = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    this.teams.filter((value, index) => {
      console.log("Value id : " + value.id);
      console.log("Index " + index);

      axios
        .get(server.baseURLDev + "teams/teamsPlayer?id_team=" + value.id)
        .then((response) => {
          this.listPlayer[index] = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.listPlayer);
    });
  },

  methods: {},
};
</script>
