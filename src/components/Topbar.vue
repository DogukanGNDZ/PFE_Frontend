<template>
  <v-container>
    <v-row class="mx-3">
      <v-col cols="8">
        <v-text-field
          class="text-field-search"
          hide-details
          label="Search"
          placeholder="Search"
          filled
          dense
          single-line
        ></v-text-field>
      </v-col>

      <!-- <v-col cols="4" class="text-right">
        <div style="display: inline-block">
        <div v-if="role == null"></div>
        <div v-else-if="role === 'player'">
          <v-btn
            icon="fa-solid fa-user"
            class="ml-3"
            to="/myprofil"
            data-tippy-content="My profile"
          ></v-btn>
        </div>
        <div v-else-if="role === 'coach'">
          <v-btn icon="fa-solid fa-user"
            class="ml-3"
            to="/mycoach"
            data-tippy-content="My Coach"
          ></v-btn>
        </div>
        <div v-else><v-btn
            icon="fa-solid fa-user"
            class="ml-3"
            to="/myClub"
            data-tippy-content="My Club"
          ></v-btn>
        </div>
        <div style="display: inline-block">
        <v-btn
          icon="fa-solid fa-bell"
          class="ml-3"
          to="/notification"
          data-tippy-content="Notifications"
        ></v-btn>
      </div>
      </div>

        <div style="display: inline-block">
          <div v-if="role == null"></div>
          <div v-else-if="role === 'coach'">
            <v-btn
              id="myButton"
              icon="fas fa-home"
              class="ml-3"
              data-tippy-content="Connected as coach"
            ></v-btn>
          </div>
          <div v-else-if="role === 'player'">
            <v-btn
              id="myButton"
              icon="fas fa-columns"
              class="ml-3"
              data-tippy-content="Connected as player"
            ></v-btn>
          </div>
          <div v-else>
            <v-btn
              id="myButton"
              icon="fas fa-users"
              class="ml-3"
              data-tippy-content="Connected as club"
            ></v-btn>
          </div>
        </div>
      </v-col> -->
      <v-col cols="4" class="text-right" v-if="role === 'player'">
        <div>
          <v-btn
            icon="fa-solid fa-user"
            class="ml-3"
            to="/myprofil"
            data-tippy-content="My profile"
          ></v-btn>
          <v-btn
            icon="fa-solid fa-bell"
            class="ml-3"
            to="/notification"
            data-tippy-content="Notifications"
          ></v-btn>
          <v-btn
            id="myButton"
            icon="fas fa-columns"
            class="ml-3"
            data-tippy-content="Connected as player"
          ></v-btn>
        </div>
      </v-col>
      <v-col cols="4" class="text-right" v-if="role === 'coach'">
        <div>
          <v-btn
            icon="fa-solid fa-user"
            class="ml-3"
            to="/mycoach"
            data-tippy-content="My Coach"
          ></v-btn>
          <v-btn
            icon="fa-solid fa-bell"
            class="ml-3"
            to="/notification"
            data-tippy-content="Notifications"
          ></v-btn>
          <v-btn
            id="myButton"
            icon="fas fa-home"
            class="ml-3"
            data-tippy-content="Connected as coach"
          ></v-btn>
        </div>
      </v-col>
      <v-col cols="4" class="text-right" v-if="role === 'club'">
        <div>
          <v-btn
            icon="fa-solid fa-user"
            class="ml-3"
            to="/myclub"
            data-tippy-content="My CLubh"
          ></v-btn>
          <v-btn
            icon="fa-solid fa-bell"
            class="ml-3"
            to="/notification"
            data-tippy-content="Notifications"
          ></v-btn>
          <v-btn
            id="myButton"
            icon="fas fa-home"
            class="ml-3"
            to="/newMember"
            data-tippy-content="Connected as club"
          ></v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <!-- <v-toolbar class="flex-grow-0" dark color="black" shaped>
    <v-toolbar-title class="text-left">Coding Beauty</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn icon="fas fa-home" class="ml-3"></v-btn>
    <v-btn icon="fas fa-sign-in" class="ml-3"></v-btn>
    <v-btn icon="fas fa-home" class="ml-3"></v-btn>
  </v-toolbar> -->
</template>

<script>
import { server } from "../helper";
import axios from "axios";
import tippy from "tippy.js";

export default {
  name: "Topbar",
  data: () => ({
    role: null,
  }),
  methods: {},
  mounted() {
    let email = localStorage.getItem("email");
    if (email !== null) {
      axios
        .get(server.baseURLDev + "auth/getRole?email_user=" + email)
        .then((response) => (this.role = response.data))
        .catch((error) => {
          console.log(error);
        });
    }
    tippy("[data-tippy-content]");
  },
};
</script>

<style>
.text-field-search {
  width: 50%;
}
</style>
