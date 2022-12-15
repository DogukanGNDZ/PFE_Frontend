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
              <v-img class="imgTeams" src="../assets/dunking.png"></v-img>
            </v-avatar>
          </v-div>

          <h2>{{ infoCoach.firstname }} {{ infoCoach.lastname }}</h2>
          <div
            v-if="
              roleUsr !== null && roleUsr !== 'player' && roleUsr !== 'coach'
            "
            class="my-3"
          >
            <v-btn class="ma-2" outlined rounded color="success">
              Demande de coach
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3">
            <h3 class="text-left">Informations</h3>
            <v-card-text class="text-left">
              <p>Email : {{ infoCoach.email }}</p>
              <p>Age : {{ infoCoach.age }}</p>
              <p>
                Number year of experience :
                {{ infoCoach.number_year_experience }} year(s)
              </p>
              <p>Description : {{ infoCoach.description }}</p>
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
  name: "ProfileCoach",
  data() {
    return {
      infoCoach: [],
      imageUrl: null,
      roleUsr: null,
    };
  },
  async mounted() {
    //Get the email of the user connected
    const email = localStorage.getItem("email");

    if (email !== null) {
      //Get the role of the user connected
      await axios
        .get(server.baseURLDev + "auth/getRole?email_user=" + email)
        .then((response) => (this.roleUsr = response.data))
        .catch((error) => {
          console.log(error);
        });
    }

    //Get the id of the coach
    const id = this.$route.params.id;
    axios
      .get(server.baseURLDev + "users/id/" + id)
      .then((response) => {
        this.infoCoach = response.data;
        this.imageUrl =
          `https://pfeimages.blob.core.windows.net/imagess/` +
          response.data.picture;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
