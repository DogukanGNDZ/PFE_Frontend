<template>
  <section>
    <div>Test {{ this.$route.params.id }}</div>
    <v-container>
      <v-row>
        <v-col cols="12">
          
          <v-div v-if="imageUrl!==`https://pfeimages.blob.core.windows.net/imagess/`">
              <v-img v-if="imageUrl" :src="imageUrl" class="imgTeams"></v-img>
            </v-div>
            <v-div v-else>
              <v-img class="imgTeams" src="../assets/dunking.png"></v-img>
            </v-div>

          <h2>{{ infoPlayer.firstname }} {{ infoPlayer.lastname }}</h2>
          <div class="my-3">
            <v-btn class="ma-2" outlined rounded color="success">
              Demande de test
            </v-btn>
          </div>
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
                {{ infoPlayer.number_year_experience }}
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
    };
  },
  mounted() {
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
