<template>
  <v-container>
    <v-row class="mx-3">
      <v-col v-if="!this.newMembers.length">
        <h1>No requests</h1>
      </v-col>
      <v-col
        v-for="nMember in this.newMembers"
        :key="nMember.id"
        cols="12"
        xs="12"
        sm="12"
        md="12"
      >
        <v-card class="playerCard">
          <!-- ROW -->
          <v-row>
            <v-col cols="10 text-left">
              <h2>{{ nMember.lastname }} {{ nMember.firstname }}</h2>
              <strong>Date {{ nMember.category }}</strong>
            </v-col>
            <v-col cols="1" class="my-3">
              <button
                type="button"
                @click="handleDeleteNewMember(nMember.email)"
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
                @click="handleAcceptNewMember(nMember.email)"
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
        this.newMembers = response.data;
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
    },
  },
};
</script>
