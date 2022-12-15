<template>
  <v-container>
    <v-row class="mx-3">
      <v-col v-if="!this.newMembers.length">
        <h1>No requests</h1>
      </v-col>
      <v-col
        v-for="n in this.newMembers.length"
        :key="n"
        cols="12"
        xs="12"
        sm="12"
        md="12"
      >
        <!-- :key="nMember.id" -->
        <v-card class="playerCard">
          <!-- ROW -->
          <v-row>
            <v-col cols="10 text-left">
              <h2>
                {{ this.newMembers[n - 1].lastname }}
                {{ this.newMembers[n - 1].firstname }}
              </h2>
              <strong>Team: {{ this.teams[n - 1].category }}</strong>
            </v-col>
            <v-col cols="1" class="my-3">
              <button
                type="button"
                @click="handleDeleteNewMember(this.newMembers[n - 1].email)"
              >
                <i
                  class="fa-regular fa-circle-xmark"
                  style="color: red; height: 30px"
                ></i>
              </button>
            </v-col>
            <v-col cols="1" class="my-3">
              <button
                type="button"
                @click="handleAcceptNewMember(this.newMembers[n - 1].email)"
              >
                <i
                  class="fa-regular fa-circle-check"
                  style="color: green; height: 30px"
                ></i>
              </button>
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
  name: "NewMember",
  data: () => ({
    newMembers: [],
    newCoachs: [],
    teams: [],
  }),

  async mounted() {
    const email = localStorage.getItem("email");
    await axios
      .get(
        server.baseURLDev +
          "clubs/memberRequests?email_club=" +
          email +
          "&role=player"
      )
      .then((response) => {
        let va = 0;
        response.data.forEach((element) => {
          va += 1;
          if (va % 2 == 0) {
            this.teams.push(element);
          } else {
            this.newMembers.push(element);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        server.baseURLDev +
          "clubs/memberRequests?email_club=" +
          email +
          "&role=coach"
      )
      .then((response) => {
        this.newCoachs = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    async handleDeleteNewMember(emailPlayer) {
      console.log(emailPlayer);
      const emailClub = localStorage.getItem("email");
      console.log(emailClub);

      axios
        .post(server.baseURLDev + "clubs/refuseNewMember", {
          email_member: emailPlayer,
          email_club: emailClub,
        })
        .then(
          // this.$router.push({ path: "/notification"  })
          console.log("refuse player")
          //this.$router.go()
        )
        .catch((error) => {
          console.log(error);
        });
      this.$router.go();
    },
    async handleAcceptNewMember(emailPlayer) {
      console.log(emailPlayer);
      const emailClub = localStorage.getItem("email");
      console.log(emailClub);

      axios
        .post(server.baseURLDev + "clubs/acceptNewMember", {
          email_member: emailPlayer,
          role: "player",
          email_club: emailClub,
        })
        .then(
          // this.$router.push({ path: "/notification"  })
          this.$router.go()
        )
        .catch((error) => {
          console.log(error);
        });
      this.$router.go();
    },
  },
};
</script>
