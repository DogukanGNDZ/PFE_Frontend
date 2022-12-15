<template>
  <v-container>
    <v-row class="mx-3">
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
    </v-row>
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
              <v-div v-if="player.picture !== ``">
                <v-img
                  :src="
                    'https://pfeimages.blob.core.windows.net/imagess/' +
                    player.picture
                  "
                  class="rounded-circle float-left"
                  width="30px"
                  alt=""
                >
                </v-img>
              </v-div>
              <v-div v-else>
                <v-img
                  src="../assets/dunking.png"
                  class="rounded-circle float-left"
                  width="30px"
                  alt=""
                >
                </v-img>
              </v-div>
              <p class="float-left ml-3 namePlayer">
                {{ player.firstname }} {{ player.lastname }}
              </p>
            </v-col>
          </v-row>
          <v-row class="mb-3">
            <v-card-text class="text-left textCard">
              <p class="mb-2">
                {{ player.age }} years <br />
                {{ setCount()}}
                <v-div v-for="sportt in this.sports" :key="sportt.id">
                  <v-div v-if="player.id == sportt.id"> 
                    {{ sportt.sport }}
                    {{ handleCount()}}
                  </v-div>

                </v-div>                  
                <v-div v-if="this.count == 0">
                    No Sport yet
                </v-div>
              </p>
              <p class="my-2">"{{ player.description }}"</p>
            </v-card-text>
          </v-row>
          <div class="lineBetween"></div>
          <v-row class="my-3">
            <v-col cols="6" style="border-right: solid 1px #eb6969">
              Size <br />
              Weight <br />
              Position
            </v-col>
            <v-col cols="6">
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
      search: null,
      sports: [],
      count: 0,
    };
  },
  async mounted() {
    await axios
      .get(server.baseURLDev + "users")
      .then((response) => {
        this.players = response.data;
      })

      .catch((error) => {
        console.log(error);
      });
    
    this.players.forEach(element => {
      console.log(element.email)    
      axios
      .get(
        server.baseURLDev +
          "sports/userSport?email=" +
          element.email
      )
      .then((response) => {
        console.log("spooooort");
        console.log(response);
        // var sportt
        this.sports.push({sport : response.data[0].name, id : element.id})
      })
      .catch((error) => {
        console.log(error);
      });
      
    });
    console.log(this.sports);
    
  },
  methods: {
    redirectToProfilePlayer(id) {
      this.$router.push({ path: "/players/" + id });
    },

    handleSearchSubmit() {
      axios
        .get(
          server.baseURLDev +
            "users/searchUser?role=player&name=" +
            this.search +
            "&country="
        )
        .then((response) => {
          this.players = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      //users/searchUser?role=player&name=mar&country=Listembour
    },

    handleCount() {
      this.count +=1
    },

    setCount() {
      this.count = 0
    }
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
