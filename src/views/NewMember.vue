<template>
  <v-container>
    <v-row class="mx-3">
      <h2>Players</h2>
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
                @click="
                  handleAcceptNewMember(
                    this.newMembers[n - 1].email,
                    this.roleUsr
                  )
                "
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

    <!-- COACHS-->
    <v-row class="mx-3">
      <h2>Coachs</h2>
      <v-col v-if="!this.newCoachs.length">
        <h1>No requests coachs</h1>
      </v-col>
      <v-col
        v-for="n in this.newCoachs.length"
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
                {{ this.newCoachs[n - 1].lastname }}
                {{ this.newCoachs[n - 1].firstname }}
              </h2>
              <strong>Team: {{ this.teamsBis[n - 1].category }}</strong>
            </v-col>
            <v-col cols="1" class="my-3">
              <button
                type="button"
                @click="handleDeleteNewMember(this.newCoachs[n - 1].email)"
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
                @click="
                  handleAcceptNewMember(
                    this.newCoachs[n - 1].email,
                    this.roleUsr
                  )
                "
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
    teamsBis: [],
    roleUsr: null,
  }),

  async mounted() {
    const email = localStorage.getItem("email");
    if (email !== null) {
      axios
        .get(server.baseURLDev + "auth/getRole?email_user=" + email)
        .then((response) => (this.roleUsr = response.data))
        .catch((error) => {
          console.log(error);
        });
    }

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
        let va = 0;
        response.data.forEach((element) => {
          va += 1;
          if (va % 2 == 0) {
            this.teamsBis.push(element);
          } else {
            this.newCoachs.push(element);
          }
        });
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
          console.log("coach/player refused")

          //this.$router.go()
        )
        .catch((error) => {
          console.log(error);
        });
      //this.$router.go();
    },
    async handleAcceptNewMember(emailPlayer, roleUsr) {
      console.log(emailPlayer);
      const emailClub = localStorage.getItem("email");
      console.log(emailClub);

      axios
        .post(server.baseURLDev + "clubs/acceptNewMember", {
          email_member: emailPlayer,
          role: roleUsr,
          email_club: emailClub,
        })
        .then(
          // this.$router.push({ path: "/notification"  })
          console.log("coach/player accepted")
          //this.$router.go()
        )
        .catch((error) => {
          console.log(error);
        });
      //this.$router.go();
    },
  },
};
</script>
