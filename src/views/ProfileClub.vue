<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-img v-if="imageUrl" :src="imageUrl" class="imgTeams"></v-img>
          <h2>National Basketball Vue</h2>
          <h2>{{ this.$route.params.id }}</h2>
          <div class="my-3">
            <v-btn class="ma-2" outlined rounded color="success">
              Demande d'inscription
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card class="pa-3">
            <v-title>Informations</v-title>
            <v-card-text class="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              laborum eaque nam a, facilis quis quod inventore accusamus quaerat
              quidem!
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-3">
            <v-title>Teams</v-title>
            <v-card-text class="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              laborum eaque nam a, facilis quis quod inventore accusamus quaerat
              quidem!
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-3">
            <v-title>Description</v-title>
            <v-card-text class="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              laborum eaque nam a, facilis quis quod inventore accusamus quaerat
              quidem!
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
      urlImage:null,
      infoClub: [],
    };
  },
  mounted() {
    const id = this.$route.params.id;
    console.log(id);
    axios
      .get(server.baseURLDev + "users/id/" + id)
      .then((response) => this.urlImage= this.imageUrl = `https://pfeimages.blob.core.windows.net/imagess/`+response.data.picture)
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
