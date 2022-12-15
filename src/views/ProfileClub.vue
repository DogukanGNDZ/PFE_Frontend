<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-div
            v-if="
              imageUrl !== `https://pfeimages.blob.core.windows.net/imagess/`
            "
          >
            <v-avatar size="200">
              <v-img v-if="imageUrl" :src="imageUrl" class="imgTeams"></v-img>
            </v-avatar>
          </v-div>
          <v-div v-else>
            <v-avatar size="200">
              <v-img class="imgTeams" src="../assets/club.png"></v-img>
            </v-avatar>
          </v-div>
          <h2>{{ infoClub.name }}</h2>
          <!-- <div class="my-3">
            <v-btn class="ma-2" outlined rounded color="success">
              Demande d'inscription
            </v-btn>
          </div> -->
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
              <p>Coach : {{ coachs.lastname }} {{ coachs.firstname }}</p>
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
              <v-btn
                v-if="
                  roleUsr !== null && roleUsr !== 'club' && roleUsr !== 'coach'
                "
                class="ma-2"
                style="float: right"
                outlined
                rounded
                color="indigo"
                @click="sendDemandRegisterToAClub(emailUsr, team.id)"
              >
                Demande d'inscription
              </v-btn>
              <v-btn
                v-if="
                  roleUsr !== null && roleUsr !== 'club' && roleUsr !== 'player'
                "
                class="ma-2"
                style="float: right"
                outlined
                rounded
                color="success"
                @click="sendDemandRegisterToAClubCoach(emailUsr, team.id)"
              >
                Demande d'inscription
              </v-btn>
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
      emailUsr: null,
      roleUsr: null,
      coachs: [],
    };
  },
  async mounted() {
    //Get the email of the user connected
    const email = localStorage.getItem("email");
    this.emailUsr = email;

    if (email !== null) {
      //Get the role of the user connected
      await axios
        .get(server.baseURLDev + "auth/getRole?email_user=" + email)
        .then((response) => (this.roleUsr = response.data))
        .catch((error) => {
          console.log(error);
        });
    }

    //Get the id of the club
    const id = this.$route.params.id;

    //Get information about the club
    await axios
      .get(server.baseURLDev + "users/id/" + id)
      .then((response) => {
        this.infoClub = response.data;
        this.emailClub = response.data.email;
        this.imageUrl =
          `https://pfeimages.blob.core.windows.net/imagess/` +
          response.data.picture;
      })
      .catch((error) => {
        console.log(error);
      });

    // Get the list of all teams of the club
    await axios
      .get(server.baseURLDev + "clubs/getTeamsClub?email=" + this.emailClub)
      .then((response) => {
        this.teams = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    //Get the list of players for each team
    this.teams.filter((value, index) => {
      axios
        .get(server.baseURLDev + "teams/teamsPlayer?id_team=" + value.id)
        .then((response) => {
          this.listPlayer[index] = response.data;
          console.log(value.id);
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .get(server.baseURLDev + "teams/getCoach?id_team=" + value.id)
        .then((response) => {
          this.coachs = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },

  methods: {
    sendDemandRegisterToAClub(emailUsr, teamId) {
      console.log(emailUsr);
      console.log(teamId);
      axios
        .post(server.baseURLDev + "users/applyClub", {
          email_user: emailUsr,
          id_team: teamId,
        })
        .then((response) => {
          // handle success
          alert("You send a demand to this team.");
          console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
    sendDemandRegisterToAClubCoach(emailUsr, teamId) {
      console.log(emailUsr);
      console.log(teamId);
      axios
        .post(server.baseURLDev + "coachs/applyClub", {
          email_coach: emailUsr,
          id_team: teamId,
        })
        .then((response) => {
          // handle success
          alert("You send a demand to this team.");
          console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>
