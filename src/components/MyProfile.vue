<template>
  
    <v-container class="Profile-page pa-0 ma-0" v-if="!edit">
        
            <v-div v-if="imageUrlB!==`https://pfeimages.blob.core.windows.net/imagess/`">
              <v-img class="grey backImage" v-if="imageUrlB" :src="imageUrlB"></v-img>
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
              <v-btn icon="fa-solid fa-pen" @click="handleEdit" data-tippy-content="Edit Profile"></v-btn>
            </v-col>
            <v-list-item>  <!-- color="rgba(0, 0, 0, .4)" -->
              <v-list-item-content>
                <v-list-item class="title">{{this.items[0].value}} {{this.items[1].value}}</v-list-item>
                <v-list-item>{{this.items[5].value}} Player</v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-row>
                <v-col>
                    <v-card style="border-color: white !important; border-width: 0px;">
                        <v-card-title>Details</v-card-title>
                        <v-card-text>
                            <EasyDataTable
                                :headers="headers"
                                :items= "items"
                                theme-color="#1d90ff"
                                table-class-name="customize-table"
                                hide-footer
                                hide-header
                                no-hover
                                />
                        </v-card-text>
                    </v-card>

                </v-col>
                <v-col>
                    <v-card height="100%">
                        <v-card-title>About Me</v-card-title>
                        <v-card-text>
                            {{description}}
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
                item.category == items[10].category
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
            <v-row v-else-if="item.category == items[11].category">
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
        <v-text-field style="background-color : white" v-model="description" :value="description" class="text-xs-center"></v-text-field>
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
          <v-btn type="submit">
            Validate changes
          </v-btn>
    </v-form>
  </v-container>
  <!-- <v-card class="mx-auto" max-width="434" tile>
          <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
          <v-col>
            <v-avatar size="100" style="position:absolute; top: 130px">
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
          </v-col>
            <v-list-item color="rgba(0, 0, 0, .4)">
              <v-list-item-content>
                <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
      </v-card> -->
  <!-- <v-row width="100%">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"

              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              height
            </v-card-title>
          </v-card>
        </v-row>

        <v-row>
          <v-card width="100%">
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"
              width="100%"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              height with contain
            </v-card-title>
          </v-card>
        </v-row> -->
</template>

<!-- <script>
// import axios from 'axios';
// import { server } from '../helper';
import { mapGetters } from 'vuex'
import { reactive} from 'vue';

  export default {
    name: "Profile",
    // beforeMount() {
    //   axios.get(server.baseURLDev+'users/myprofil', {
    //       headers: {
    //         'Authorize': localStorage.getItem('token')
    //       }
    //     })
    //     .then((response) =>{
    //       this.userINfo = response.data;
    //       this.firstname = response.data.firstname;

    //       console.log(this.firstname);
    //       console.log("aa");
    //     })
    //     .catch(error => {
    //         // handle error
    //         console.log(error)
    //       })

    // },
    created() {
        this.$store.dispatch('searchUserByToken')
        this.items[0].value = this.$store.getters.getFirstname
    },
    data () {
        return reactive({
        firstname: '',
        headers: [
          { text: "CATEGORY", value: "category" },
          { text: "VALUE", value: "value"},
        ],
        items: [
          { category: "Firstname", value: '' },
          { category: "Lastname", value: "Dev"},
          { category: "Email", value: "jerome@gmail.com"},
          { category: "Age", value: "22"},
          { category: "Role", value: "Player"},
          { category: "Sport", value: "Football"},
          { category: "Position", value: "Forward"},
          { category: "Size", value: "188cm"},
          { category: "Weight", value: "78.2"},
          { category: "Years of experience", value: "5"},
          { category: "Actual CLub", value: "/"},
          { category: "Adresse", value: "5030 Gembloux Belgium"},
        ],

    });},
    computed: {
        ...mapGetters({
        getFFirstname: 'getFirstname',
        }),
    },

    methods: {

      
    },
    
  }
</script> -->
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
      axios.get(server.baseURLDev+'users/myprofil', {
          headers: {
            'Authorize': localStorage.getItem('token')
          }
        })
        .then((response) =>{
          console.log(response);
          this.items[0].value = response.data.firstname;
          this.items[1].value = response.data.lastname;
          this.items[2].value = response.data.email;
          if (response.data.description.length != 0){
            this.description = response.data.description;
          }
          if (response.data.age != 0) {
            this.items[3].value = response.data.age;
          }
          if (response.data.post.length != 0){
            this.items[6].value = response.data.post;
          }
          if (response.data.size != 0) {
            this.items[7].value = response.data.size;
          }
          if (response.data.weight != 0) {
            this.items[8].value = response.data.weight;
          }
          this.items[9].value = response.data.number_year_experience;
          this.imageName=response.data.picture;
          this.imageUrl = `https://pfeimages.blob.core.windows.net/imagess/${this.imageName}`;
          this.imageUrlB = `https://pfeimages.blob.core.windows.net/imagess/`+response.data.picture_banner;
          this.pict_ban =response.data.picture_banner;

        })
        .catch(error => {
            console.log(error)
          })
      
      axios.get(server.baseURLDev+'sports')
      .then(response => {
        console.log("AAAALLLL spooooort")
        console.log(response)
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
        this.items[5].value = response.data[0].name;
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
        this.country = response.data[0].country;
        this.city = response.data[0].city;
        if (this.country != undefined) {
          if (this.city != undefined) {
            this.items[11].value = this.country + " " + this.city;
          } else {
            this.items[11].value = this.country;
          }
        } else {
          if (this.city != undefined) {
            this.items[11].value = this.city;
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        server.baseURLDev +
          "users/userClub?email_user=" +
          localStorage.getItem("email")
      )
      .then((response) => {
        console.log("Cluuuub");
        console.log(response);
        this.items[10].value = response.data[0].name;
      })
      .catch((error) => {
        console.log(error);
      });
  },

    data: () => ({
        imageName:'',
        imageUrl: null,
        imageData: null,
        imageUrlB: null,
        imageDataB: null,
        pict_ban:null,
        country : "",
        city: "",
        sports: ["Football", "Basketball", "Volley"],
        description: "No description yet",
        edit: false,
        headers: [
          { text: "CATEGORY", value: "category" },
          { text: "VALUE", value: "value"},
        ],
        items: [
          { category: "Firstname", value: "/" },
          { category: "Lastname", value: "/"},
          { category: "Email", value: "/"},
          { category: "Age", value: "/"},
          { category: "Role", value: "/"},
          { category: "Sport", value: "/"},
          { category: "Post", value: "/"},
          { category: "Size", value: "/"},
          { category: "Weight", value: "/"},
          { category: "Years of experience", value: "/"},
          { category: "Actual CLub", value: "/"},
          { category: "Adresse", value: "/"},
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

      sportArrayToNameSportArray(array){
        var arraytoreturn = [];
        array.forEach(element => {
          arraytoreturn.push(element.name) 
        });
        return arraytoreturn;
      },
      handleEdit(){
        this.edit = !this.edit;
      },
      handleUpdateProfil(){
        console.log(localStorage.getItem('token'))
        const headers = {
          'Content-Type': 'application/json',
          'Authorize': localStorage.getItem('token')
        };

      const body = {
        firstname: this.items[0].value,
        lastname: this.items[1].value,
        email: this.items[2].value,
        age: this.items[3].value,
        post: this.items[6].value,
        size: this.items[7].value,
        weight: this.items[8].value,
        number_year_experience: this.items[9].value,
        description: this.description,
        picture: this.imageName,
        pict_ban: this.pict_ban
      };

      axios
        .put(server.baseURLDev + "users/update", body, { headers: headers })
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

      // location.reload()
    },
  },
};
</script>
<style>
.backImage {
  height: 17%;
  width: 100%;
  background-color: gray;
}

 .customize-table {
  /* --easy-table-border: 1px solid #445269; */
  /* --easy-table-row-border: 1px solid #445269; */
  background: linear-gradient(#0e0d0d, #2e2e2e);
  /* --easy-table-header-font-size: 14px;
  --easy-table-header-height: 30px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #2d3a4f; */

  --easy-table-header-font-size: 0px;
  --easy-table-header-height: 0px;
  --easy-table-header-font-color: #c1cad400;
  --easy-table-header-background-color: #2d3a4f00;

  --easy-table-body-row-font-color: black;
  --easy-table-body-row-background-color: white;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;
}
</style>
