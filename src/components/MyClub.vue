<template>
    <section>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-img v-if="imageUrl" :src="imageUrl" class="imgTeams"></v-img>
            <h2>{{ infoClub.name }}</h2>
            <div class="my-3">


            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card class="pa-3">
              <h3 class="text-left">Informations</h3>
              <v-card-text class="text-left">
                <p>Email : {{ infoClub.email }}</p>
                <p>Number of teams : {{ infoClub.number_teams }}</p>
                <p>Description : {{ infoClub.description }}</p>
                <p>Creation date : {{ infoClub.creation_date }}</p>

              </v-card-text>
              <div>
                <!--<input type="file" >-->
                <h3 class="text-left">Change Picture</h3>
                <v-file-input
                    @change="onFileChange"
                    hide-input
                    show-size
                    truncate-length="20"
                ></v-file-input>
                <v-btn class="ma-2" outlined rounded color="success" @click="uploadImage">Upload Image</v-btn>
            </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mx-1 mt-5">
          <h3>Teams :</h3>
          <v-col cols="12">
            <v-card class="pa-3">
              <h3 class="text-left">Category</h3>
              <v-card-text class="text-left">
                <p>Info about teams</p>
                <p>Number of players</p>
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
        imageUrl: null,
        imageData: null,
        infoClub: [],
        teams: [],
      };
    },
    mounted() {
      //const id = this.$route.params.id;
      axios
        .get(server.baseURLDev + "users/email/" + localStorage.getItem("email"))
        .then((response) => {
            this.infoClub = response.data;
            this.imageUrl = `https://pfeimages.blob.core.windows.net/imagess/`+response.data.picture;
            console.log(this.imageUrl);
        })
        .catch((error) => {
          console.log(error);
        });
  
      axios
        .get(
          server.baseURLDev + "clubs/getTeamsClub?email=" + this.infoClub.email
        )
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      onFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target.result;
        this.imageData = file;
      };
      reader.readAsDataURL(file);
    },
      uploadImage() {
      const formData = new FormData();
      formData.append('image', this.imageData);

      axios.post(server.baseURLDev+'users/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorize': localStorage.getItem('token')
        },
      })
        .then((response) => {
          // Handle the response from the server
          console.log(response)
        })
        .catch((error) => {
          // Handle any errors
          console.log(error)
        });
    },
    }
  };
  </script>
  