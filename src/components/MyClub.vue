<template>
  <section>
    <v-container v-if="!edit">
      <v-row>
        <v-col cols="12">
          <v-avatar size="200">
            <v-img v-if="imageUrl" :src="imageUrl" class="imgTeams"></v-img>
          </v-avatar>
          <h2>{{ infoClub.name }}</h2>
          <div class="my-3"></div>
        </v-col>
      </v-row>
      <v-btn
        icon="fa-solid fa-pen"
        @click="handleEdit"
        data-tippy-content="Edit Profile"
        class="ma-4"
      ></v-btn>
      <br />
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3">
            <h3 class="text-left">Informations</h3>
            <v-card-text class="text-left">
              <p>Email : {{ infoClub.email }}</p>
              <p>Number of teams : {{ infoClub.number_teams }}</p>
              <p>Description : {{ infoClub.description }}</p>
              <p>Creation date : {{ infoClub.creation_date }}</p>
              <p>Sport : {{ sport }}</p>
            </v-card-text>
            <!-- <div>
                <h3 class="text-left">Change Picture</h3>
                <v-file-input
                    @change="onFileChange"
                    hide-input
                    show-size
                    truncate-length="20"
                ></v-file-input>
                <v-btn class="ma-2" outlined rounded color="success" @click="uploadImage">Upload Image</v-btn>
            </div> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col cols="12">
          <v-img v-if="imageUrl" :src="imageUrl" class="imgTeams"></v-img>
          <h2>{{ infoClub.name }}</h2>
          <div class="my-3"></div>
        </v-col>
      </v-row>
      <v-btn
        icon="fa-solid fa-pen"
        @click="handleEdit"
        data-tippy-content="Edit Profile"
        class="ma-4"
      ></v-btn>
      <br />
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3">
            <h3 class="text-left">Informations</h3>
            <v-card-text class="text-left">
              <v-form
                ref="form"
                @submit.prevent="handleUpdateProfil"
                method="post"
                v-model="valid"
              >
                <v-row>
                  <v-col sm="1" align-self="center">
                    <p class="text-xs-center">Name :</p></v-col
                  >
                  <v-col sm="4" align-self="center">
                    <v-text-field
                      style="background-color: white"
                      v-model="infoClub.name"
                      :value="infoClub.name"
                      class="text-xs-center"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col sm="1" align-self="center">
                    <p class="text-xs-center">Email :</p></v-col
                  >
                  <v-col sm="4" align-self="center">
                    <p class="text-xs-center">{{ infoClub.email }}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col sm="1" align-self="center">
                    <p class="text-xs-center">Number of teams:</p></v-col
                  >
                  <v-col sm="4" align-self="center">
                    <p class="text-xs-center">{{ infoClub.number_teams }}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col sm="1" align-self="center">
                    <p class="text-xs-center">Description :</p></v-col
                  >
                  <v-col sm="4" align-self="center">
                    <v-text-field
                      style="background-color: white"
                      v-model="infoClub.description"
                      :value="infoClub.description"
                      class="text-xs-center"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col sm="1" align-self="center">
                    <p class="text-xs-center">Creation date :</p></v-col
                  >
                  <v-col sm="4" align-self="center">
                    <p class="text-xs-center">{{ infoClub.creation_date }}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col sm="1" align-self="center"
                    ><p class="text-xs-center">Sport :</p></v-col
                  >
                  <v-col sm="4" align-self="center">
                    <v-select
                      v-model="sport"
                      :items="sports"
                      filled
                      label="Sport"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-btn
                    class="ma-2"
                    outlined
                    rounded
                    color="success"
                    type="submit"
                  >
                    Validate changes
                  </v-btn></v-row
                >
              </v-form>
            </v-card-text>
            <h3 class="text-left">Create team</h3>
            <v-form
              ref="form"
              @submit.prevent="handleAddTeam"
              method="post"
              v-model="valid"
            >
              <v-row>
                <v-col sm="1" align-self="center"
                  ><p class="text-xs-center">Category of the team :</p></v-col
                >
                <v-col sm="5">
                  <v-text-field
                    style="background-color: white"
                    v-model="categoryTeam"
                    class="text-xs-center"
                  ></v-text-field>
                </v-col>
                <v-col sm="3">
                  <v-btn
                    class="ma-2"
                    outlined
                    rounded
                    color="success"
                    type="submit"
                  >
                    Create Team
                  </v-btn>
                </v-col>
              </v-row>

              <v-row class="mb-5"> </v-row>
            </v-form>
            <div>
              <!--<input type="file" >-->
              <h3 class="text-left">Change Picture</h3>
              <v-file-input
                @change="onFileChange"
                hide-input
                show-size
                truncate-length="20"
              ></v-file-input>
              <v-btn
                class="ma-2"
                outlined
                rounded
                color="success"
                @click="uploadImage"
                >Upload Image</v-btn
              >
            </div>
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
      imagename: null,
      edit: false,
      sport: "",
      sports: [],
      categoryTeam: "",
      empty: "",
    };
  },
  mounted() {
    //const id = this.$route.params.id;
    axios
      .get(server.baseURLDev + "users/email/" + localStorage.getItem("email"))
      .then((response) => {
        this.infoClub = response.data;
        this.imageUrl =
          `https://pfeimages.blob.core.windows.net/imagess/` +
          response.data.picture;
        this.imagename = response.data.picture;
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

    axios
      .get(server.baseURLDev + "sports")
      .then((response) => {
        var arraytoreturn = [];
        response.data.forEach((element) => {
          arraytoreturn.push(element.name);
        });
        this.sports = arraytoreturn;
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        server.baseURLDev +
          "sports/userSport?email=" +
          localStorage.getItem("email")
      )
      .then((response) => {
        this.sport = response.data[0].name;
      })
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
    handleEdit() {
      this.edit = !this.edit;
    },
    uploadImage() {
      const formData = new FormData();
      formData.append("image", this.imageData);

      axios
        .post(server.baseURLDev + "users/uploadImage", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorize: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          // Handle the response from the server
          console.log(response);
        })
        .catch((error) => {
          // Handle any errors
          console.log(error);
        });
    },
    handleUpdateProfil() {
      const headers = {
        "Content-Type": "application/json",
        Authorize: localStorage.getItem("token"),
      };
      const body = {
        name: this.infoClub.name,
        email: this.infoClub.email,
        description: this.infoClub.description,
        picture: this.imagename,
        picture_banner: "",
      };
      axios
        .put(server.baseURLDev + "clubs/update", body, { headers: headers })
        .then((response) => {
          console.log(response.data);
          alert("Profil updated");
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
      axios.put(server.baseURLDev + "sports/addSport", {
        name: this.sport,
        email: localStorage.getItem("email"),
      });

      axios
        .put(server.baseURLDev + "sports/addSport", {
          name: this.sport,
          email: localStorage.getItem("email"),
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleAddTeam() {
      axios
        .post(server.baseURLDev + "teams/create", {
          category: this.categoryTeam,
          email_club: localStorage.getItem("email"),
        })
        .then((response) => {
          console.log(response);
          alert("Team created");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
