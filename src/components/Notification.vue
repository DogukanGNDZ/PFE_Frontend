<template>
  <!-- <v-container>
        <EasyDataTable
                                :headers="headers"
                                :items= "items"
                                theme-color="#1d90ff"
                                table-class-name="customize-table"
                                hide-footer
                                alternating
                                no-hover
                                />
    </v-container> -->
  <v-container>
    <v-row class="mx-3">
      <v-col v-if="!this.items.length">
        <h1>No notifications</h1>
      </v-col>
      <v-col
        v-for="item in this.items"
        :key="item.id"
        cols="12"
        xs="12"
        sm="12"
        md="12"
      >
        <v-card class="playerCard">
          <!-- ROW -->
          <v-row>
            <v-col cols="9 text-left">
              <h2>{{ item.content }}</h2>
              <strong>{{ item.date }}</strong>
            </v-col>
            <v-col cols="1" class="my-3">
              <button type="button" @click="handleDeleteNotification(item.id)">
                <i
                  class="fa-solid fa-trash-can"
                  style="color: red; height: 30px"
                ></i>
              </button>
              <!-- <v-btn icon="fa-solid fa-trash-can" @click="handleDeleteNotification(item.id)"></v-btn> -->
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
  name: "Notification",
  data: () => ({
    notifications: [],
    headers: [
      { text: "Date", value: "date" },
      { text: "Content", value: "content" },
    ],
    items: [],
  }),
  mounted() {
    axios
      .get(
        server.baseURLDev +
          "notifications/getNotifications?email_user=" +
          localStorage.getItem("email")
      )
      .then((response) => {
        response.data.forEach((element) => {
          if (element.etat == "active") {
            var e = {
              date: element.date_and_time,
              content: element.content,
              id: element.id,
            };
            this.items.push(e);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    async handleDeleteNotification(id) {
      await axios
        .post(server.baseURLDev + "notifications/updateState", {
          id: id,
        })
        .then
        // this.$router.push({ path: "/notification"  })
        ()
        .catch((error) => {
          console.log(error);
        });
      this.$router.go();
    },
  },
};
</script>
