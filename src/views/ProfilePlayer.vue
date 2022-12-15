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

          <h2>{{ infoPlayer.firstname }} {{ infoPlayer.lastname }}</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3">
            <h3 class="text-left">Informations</h3>
            <v-card-text class="text-left">
              <p>Email : {{ infoPlayer.email }}</p>
              <p>Age : {{ infoPlayer.age }}</p>
              <p>
                Number year of experience :
                {{ infoPlayer.number_year_experience }} year(s)
              </p>
              <p>Size : {{ infoPlayer.size }}</p>
              <p>Weight : {{ infoPlayer.weight }}</p>
              <p>Position : {{ infoPlayer.post }}</p>
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
  name: "ProfilePlayer",
  data() {
    return {
      infoPlayer: [],
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

    const id = this.$route.params.id;
    console.log(id);
    axios
      .get(server.baseURLDev + "users/id/" + id)
      .then((response) => {
        this.infoPlayer = response.data;
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
