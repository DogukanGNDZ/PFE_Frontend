<template>
  <v-container>
    <!-- ROW -->
    <v-row class="mx-3">
      <v-col
        v-for="player in this.players"
        :key="player.id"
        cols="12"
        xs="12"
        sm="6"
        md="4"
      >
        <v-card class="playerCard" @click="redirectToProfilePlayer(player.id)">
          <!-- ROW -->
          <v-row>
            <v-col cols="12">
              <v-img

                :src="'https://pfeimages.blob.core.windows.net/imagess/' + player.picture "
                class="rounded-circle float-left"
                width="30px"
                alt=""
              >
              </v-img>
              <p class="float-left ml-3 namePlayer">
                {{ player.firstname }} {{ player.lastname }}
              </p>
            </v-col>
          </v-row>
          <v-row class="mb-3">
            <v-card-text class="text-left textCard">
              <p class="mb-2">
                {{ player.age }} years <br />
                Basketball
              </p>
              <p class="my-2">"{{ player.description }}"</p>
            </v-card-text>
          </v-row>
          <div class="lineBetween"></div>
          <v-row class="my-3">
            <v-col cols="6" style="border-right: solid 1px #eb6969">
              Nationality <br />
              Size <br />
              Weight <br />
              Position
            </v-col>
            <v-col cols="6">
              American <br />
              {{ player.size }} cm <br />
              {{ player.weight }} kg <br />
              {{ player.post }}
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
  name: "PlayerGrid",
  data() {
    return {
      players: [],
    };
  },
  mounted() {
    axios
      .get(server.baseURLDev + "users")
      .then(response => {      
        console.log('liste')
      console.log(response)
      this.players = response.data})
      

      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    redirectToProfilePlayer(id) {
      this.$router.push({ path: "/players/" + id });
    },
  },
};
</script>

<style>
.playerCard {
  background: linear-gradient(#000000, #2e2e2e);
  color: white;
  box-shadow: 0px 5px 30px 0px rgba(167, 167, 167, 0.16);
  transition: all 0.3s ease-out 0s;
  padding: 15px 15px;
  border: 2px solid transparent;
  border-radius: 8px;
}
.playerCard:hover {
  border-color: #eb6969;
}
.namePlayer {
  font-weight: 700;
}
.lineBetween {
  border-bottom: solid 1px #eb6969;
  width: 70%;
  margin: auto;
}
.textCard {
  margin-right: 12px;
  margin-left: 12px;
  margin-top: 10px;
  padding: 0;
}
</style>
