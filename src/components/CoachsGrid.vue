<template>
  <v-container>
    <!-- ROW -->
    <v-row class="mx-3">
      <v-col
        v-for="coach in this.coachs"
        :key="coach.id"
        cols="12"
        xs="12"
        sm="6"
        md="4"
      >
        <v-card class="playerCard" @click="redirectToProfileCoach(coach.id)">
          <!-- ROW -->
          <v-row>
            <v-col cols="12">
              <v-div v-if="coach.picture !== ``">
                <v-img
                :src="
                  'https://pfeimages.blob.core.windows.net/imagess/' +
                  coach.picture
                "
                class="rounded-circle float-left"
                width="30px"
                alt=""
              >
              </v-img>
              </v-div>
              <v-div v-else>

                <v-img
                  src="../assets/coach.png"
                  class="rounded-circle float-left"
                  width="30px"
                  alt=""
                >
                </v-img>
              </v-div>

              <p class="float-left ml-3 namePlayer">
                {{ coach.firstname }} {{ coach.lastname }}
              </p>
            </v-col>
          </v-row>
          <v-row class="mb-3">
            <v-card-text class="text-left textCard">
              <p class="mb-2">
                {{ coach.age }} years <br />
                {{ setCount()}}
                <v-div v-for="sportt in this.sports" :key="sportt.id">
                  <v-div v-if="coach.id == sportt.id"> 
                    {{ sportt.sport }}
                    {{ handleCount()}}
                  </v-div>

                </v-div>                  
                <v-div v-if="this.count == 0">
                    No Sport yet
                </v-div>
              </p>
              <p class="my-2">
                {{ coach.description }}
              </p>
            </v-card-text>
          </v-row>
          <div class="lineBetween"></div>
          <v-row class="my-3">
            <v-col cols="6" style="border-right: solid 1px #eb6969">
              Nb experience <br />
              Club
            </v-col>
            <v-col cols="6">
              {{ coach.number_year_experience }} years <br />
              RSCA
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
  name: "CoachsGrid",
  data() {
    return {
      coachs: [],
      sports: [],
      count: 0,
    };
  },
  async mounted() {
    await axios
      .get(server.baseURLDev + "coachs")
      .then((response) => {
        this.coachs = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
    this.coachs.forEach(element => {
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
    })


  },
  methods: {
    redirectToProfileCoach(id) {
      this.$router.push({ path: "/coachs/" + id });
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
