<template>
  
  <v-container class="Profile-page pa-0 ma-0" v-if="!edit">
    <v-div v-if="imageUrlB!==`https://pfeimages.blob.core.windows.net/imagess/`">
      <v-img class="grey backImage"  :src="imageUrlB"></v-img>
    </v-div>
    <v-div v-else>
              <v-img class="grey backImage" src="../assets/dunking.png"></v-img>
            </v-div>

    <v-col v-if="imageUrl!==`https://pfeimages.blob.core.windows.net/imagess/`">  
          <v-avatar size="200" style="position:absolute; top: 12%; left: 5%;">
              <v-img  v-if="imageUrl" :src="imageUrl"  ></v-img>
          </v-avatar>
    </v-col>
    <v-col v-else>
          <v-avatar size="200" style="position:absolute; top: 12%; left: 5%;">
              <v-img   src="../assets/dunking.png"  ></v-img>
          </v-avatar>
    </v-col>

    <v-col>
      <v-btn
        icon="fa-solid fa-pen"
        @click="handleEdit"
        data-tippy-content="Edit Profile"
      ></v-btn>
    </v-col>
    <v-list-item color="rgba(0, 0, 0, .4)">
      <v-list-item-content>
        <v-list-item-title class="title">Jerome Devaux</v-list-item-title>
        <v-list-item-subtitle>Football Player</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-row>
      <v-col>
        <v-card style="border-color: white !important; border-width: 0px">
          <v-card-title>Details</v-card-title>
          <v-card-text>
            <EasyDataTable
              :headers="headers"
              :items="items"
              theme-color="#1d90ff"
              table-class-name="customize-table"
              hide-footer
              alternating
              no-hover
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card height="100%">
          <v-card-title>About Me</v-card-title>
          <v-card-text>
            {{ description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="Profile-page pa-0 ma-0" v-else>
    <v-div v-if="imageUrlB!==`https://pfeimages.blob.core.windows.net/imagess/`">
              <v-img class="grey backImage" v-if="imageUrlB" :src="imageUrlB"></v-img>
            </v-div>
            <v-div v-else>
              <v-img class="grey backImage" src="../assets/dunking.png"></v-img>
            </v-div>
    <v-col>
      <v-avatar size="200" style="position: absolute; top: 12%; left: 5%">
        <v-img v-if="imageUrl" :src="imageUrl"></v-img>
      </v-avatar>
    </v-col>
    <v-col>
      <v-btn
        icon="fa-solid fa-pen"
        @click="handleEdit"
        data-tippy-content="Edit Profile"
      ></v-btn>
      <!-- <div>
        <input type="file" @change="onFileChange">
        <img v-if="imageUrl" :src="imageUrl" />
        <v-btn @click="uploadImage">Upload Image</v-btn>
      </div> -->
    </v-col>
    <v-form
      ref="form"
      @submit.prevent="handleUpdateProfil"
      method="post"
      v-model="valid"
    >
      <v-row>
        <v-col>
          <p>Details</p>

          <li
            v-for="item in items"
            :key="item.category"
            style="list-style: none"
          >
            <v-row
              v-if="
                item.category == items[2].category ||
                item.category == items[4].category ||
                item.category == items[7].category
              "
            >
              <v-col class="my-auto"
                ><p class="text-xs-center">{{ item.category }} :</p></v-col
              >
              <v-col class="my-auto"
                ><p class="text-xs-center">{{ item.value }}</p></v-col
              >
            </v-row>
            <v-row v-else-if="item.category == items[5].category">
              <v-col class="my-auto"
                ><p class="text-xs-center">{{ item.category }} :</p></v-col
              >
              <v-col class="my-auto"
                ><v-select
                  v-model="items[5].value"
                  :items="sports"
                  filled
                  label="Sport"
                ></v-select
              ></v-col>
            </v-row>
            <v-row v-else-if="item.category == items[8].category">
              <v-col class="my-auto"
                ><p class="text-xs-center">{{ item.category }} :</p></v-col
              >
              <v-col class="my-auto"
                ><v-row
                  ><v-text-field
                    style="background-color: white"
                    v-model="country"
                    :value="country"
                    class="text-xs-center"
                    label="country"
                  ></v-text-field
                  ><v-text-field
                    style="background-color: white"
                    v-model="city"
                    :value="city"
                    class="text-xs-center"
                    label="city"
                  ></v-text-field></v-row
              ></v-col>
            </v-row>
            <v-row v-else>
              <v-col class="my-auto"
                ><p class="text-xs-center">{{ item.category }} :</p></v-col
              >
              <v-col class="my-auto"
                ><v-text-field
                  style="background-color: white"
                  v-model="item.value"
                  :value="item.value"
                  class="text-xs-center"
                ></v-text-field
              ></v-col>
              <!-- v-model="item.value" -->
            </v-row>
          </li>
        </v-col>
        <v-col>
          <p>About Me</p>
          <v-text-field
            style="background-color: white"
            v-model="description"
            :value="description"
            class="text-xs-center"
          ></v-text-field>
          <div>
                  <h3 class="text-left">Change Profile picture</h3>
                  <v-file-input
                    @change="onFileChange"
                    hide-input
                    show-size
                    truncate-length="20"
                ></v-file-input>
                <v-btn class="ma-2" outlined rounded color="success" @click="uploadImage">Upload Image</v-btn>
              </div>
              <div>
                <h3 class="text-left">Change Banner</h3>
                <v-file-input
                    @change="onFileChangeB"
                    hide-input
                    show-size
                    truncate-length="20"
                ></v-file-input>
                <v-btn class="ma-2" outlined rounded color="success" @click="uploadImageB">Upload Image</v-btn>
            </div>
        </v-col>
      </v-row>
      <v-btn type="submit"> Validate changes </v-btn>
    </v-form>
  </v-container>
</template>
<script>
import axios from "axios";
import { server } from "../helper";
import tippy from "tippy.js";
// import { response } from 'express';

export default {
  name: "Profile",
  mounted() {
    tippy("[data-tippy-content]");
  },

  beforeMount() {
    axios
      .get(server.baseURLDev + "users/email/"+ localStorage.getItem("email"))
      .then((response) => {
        console.log(response);
        this.items[0].value = response.data.firstname;
        this.items[1].value = response.data.lastname;
        this.items[2].value = response.data.email;
        if (response.data.description.length != 0) {
          this.description = response.data.description;
        }
        if (response.data.age != 0) {
          this.items[3].value = response.data.age;
        }
        this.items[6].value = response.data.number_year_experience;
        this.imageName = response.data.picture;
        this.imageNameBan= response.data.picture_banner;
        this.imageUrl = `https://pfeimages.blob.core.windows.net/imagess/${this.imageName}`;
        this.imageUrlB = `https://pfeimages.blob.core.windows.net/imagess/`+response.data.picture_banner;
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(server.baseURLDev + "sports")
      .then((response) => {
        console.log("AAAALLLL spooooort");
        console.log(response);
        var arraytoreturn = [];
        response.data.forEach((element) => {
          arraytoreturn.push(element.name);
        });
        this.sports = arraytoreturn;
        console.log(this.sports);
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
        console.log("spooooort");
        console.log(response);
        if (response.data.length > 0) {
          this.items[5].value = response.data[0].name;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        server.baseURLDev +
          "auth/getRole?email_user=" +
          localStorage.getItem("email")
      )
      .then((response) => {
        console.log("rooole");
        console.log(response);
        this.items[4].value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        server.baseURLDev +
          "users/adresses?email=" +
          localStorage.getItem("email")
      )
      .then((response) => {
        console.log("adresse");
        console.log(response);
        if (response.data.length > 0) {
          this.country = response.data[0].country;
          this.city = response.data[0].city;
        }
        
        if (this.country != undefined) {
          if (this.city != undefined) {
            this.items[8].value = this.country + " " + this.city;
          } else {
            this.items[8].value = this.country;
          }
        } else {
          if (this.city != undefined) {
            this.items[8].value = this.city;
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        server.baseURLDev +
          "coachs/coachClub?email_user=" +
          localStorage.getItem("email")
      )
      .then((response) => {
        console.log("Cluuuub");
        console.log(response);
        if (response.data.length > 0) {
          this.items[7].value = response.data[0].name;
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data: () => ({
    edit: false,
    imageName: "",
    imageNameBan:null,
    imageUrl: null,
    imageData: null,
    imageUrlB: null,
    imageDataB: null,
    country: "",
    city: "",
    sports: [],
    description: "No description yet",
    headers: [
      { text: "CATEGORY", value: "category" },
      { text: "VALUE", value: "value" },
    ],
    items: [
      { category: "Firstname", value: "/" },
      { category: "Lastname", value: "/" },
      { category: "Email", value: "/" },
      { category: "Age", value: "/" },
      { category: "Role", value: "/" },
      { category: "Sport", value: "/" },
      { category: "Years of experience", value: "/" },
      { category: "Actual CLub", value: "/" },
      { category: "Adresse", value: "/" },
    ],
  }),
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
    onFileChangeB(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrlB = e.target.result;
        this.imageDataB = file;
      };
      reader.readAsDataURL(file);
    },
    uploadImageB() {
      const formData = new FormData();
      formData.append("image", this.imageDataB);

      axios
        .post(server.baseURLDev + "users/uploadImageBanner", formData, {
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


    handleEdit(){
        this.edit = !this.edit;
      },
    handleUpdateProfil(){
      const headers = {
          'Content-Type': 'application/json',
          'Authorize': localStorage.getItem('token')
        };
      const body = {
        firstname: this.items[0].value,
        lastname: this.items[1].value,
        email: this.items[2].value,
        age: this.items[3].value,
        number_year_experience: this.items[6].value,
        description : this.description,
        picture: this.imageName, 
        picture_banner: this.imageNameBan,
        
      };
      axios.put(server.baseURLDev+"coachs/update", body, { headers: headers })
      .then((response) => {
          console.log("userUPDAAAATE");
          console.log(response.data);
      })
      .catch((error) => {
          // handle error
          console.log("erroooooor");
          console.log(error);
      });

      axios
        .put(server.baseURLDev + "sports/addSport", {
          name: this.items[5].value,
          email: localStorage.getItem("email"),
        })
        .then((response) => {
          console.log("add sport");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      axios
      .post(server.baseURLDev + "adresses/create", {
        country: this.country,
        city: this.city,
        street: "",
        number: 0,
        email: localStorage.getItem("email"),
      })
      .then((response) => {
        console.log("add adresse");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    },
  }
}

</script>
