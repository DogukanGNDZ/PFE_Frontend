<template>
  
    <v-container class="Profile-page pa-0 ma-0" v-if="!edit">
        
 
            <v-img class="grey backImage" contain src="../assets/dunking.png"></v-img>
            <v-col>
            <v-avatar size="200" style="position:absolute; top: 12%; left: 5%;">
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
            </v-col>
            <v-col>
              <v-btn icon="fa-solid fa-pen" @click="handleEdit" data-tippy-content="Edit Profile"></v-btn>
            </v-col>
            <v-list-item color="rgba(0, 0, 0, .4)">
              <v-list-item-content>
                <v-list-item-title class="title">Jerome Devaux</v-list-item-title>
                <v-list-item-subtitle>Football Player</v-list-item-subtitle>
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
                            {{description}}
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
  </v-container>
  <v-container class="Profile-page pa-0 ma-0" v-else>
    <v-img class="grey backImage" contain src="../assets/dunking.png"></v-img>
    <v-col>
    <v-avatar size="200" style="position:absolute; top: 12%; left: 5%;">
      <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
    </v-avatar>
    </v-col>
    <v-col>
      <v-btn icon="fa-solid fa-pen" @click="handleEdit" data-tippy-content="Edit Profile"></v-btn>
      <div>
        <input type="file" @change="onFileChange">
        <img v-if="imageUrl" :src="imageUrl" />
        <v-btn @click="uploadImage">Upload Image</v-btn>
      </div>
    </v-col>
    <v-row>
      <v-col>
        <p>Details</p>
        <v-form ref="form" @submit.prevent="handleUpdateProfil" method="post" v-model="valid">
          <li v-for="item in items" :key="item.category">
          {{ item.category}} : <v-text-field v-model="item.value" :value="item.value"></v-text-field>
          </li>
          <v-btn type="submit">
            Validate changes
          </v-btn>
        </v-form>
        

      </v-col>
      <v-col>
        <p>About Me</p>
        
      </v-col>
    </v-row>
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
import axios from 'axios';
import { server } from '../helper';
import tippy from 'tippy.js';


  export default {
    name: "Profile",
    mounted() {
    tippy('[data-tippy-content]');
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
          if (response.data.size != 0) {
            this.items[7].value = response.data.size;
          }
          if (response.data.weight != 0) {
            this.items[8].value = response.data.weight;
          }
        })
        .catch(error => {
            // handle error
            console.log(error)
          })
      // axios.get(server.baseURLDev+'sports/userSport', {

      // }
    },
    data: () => ({
        description: "No description yet",
        imageUrl: null,
        imageData: null,
        edit: false,
        headers: [
          { text: "CATEGORY", value: "category" },
          { text: "VALUE", value: "value"},
        ],
        items: [
          { category: "Firstname", value: '' },
          { category: "Lastname", value: "Dev"},
          { category: "Email", value: "jerome@gmail.com"},
          { category: "Age", value: "/"},
          { category: "Role", value: "Player"},
          { category: "Sport", value: "Football"},
          { category: "Position", value: "Forward"},
          { category: "Size", value: "/"},
          { category: "Weight", value: "/"},
          { category: "Years of experience", value: "5"},
          { category: "Actual CLub", value: "/"},
          { category: "Adresse", value: "5030 Gembloux Belgium"},
        ],
    }),

    methods: {
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
          firstname : this.items[0].value,
          lastname : this.items[1].value,
          email : this.items[2].value,
          age : this.items[3].value,
          post: this.items[6].value,
          size : this.items[7].value,
          weight : this.items[8].value,
          number_year_experience : this.items[9].value,
          description : this.description,
          picture : "",
        };

        axios.put(server.baseURLDev+'users/update', body, { headers: headers })
        .then((response) => { 
            console.log(response.data);
          })
          .catch(error => {
            // handle error
            console.log(error)
          });
      },
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

    },

  }
</script>
<style>
.backImage {
  height:  17%;
  width: 100%;
  background-color: gray;

}

/* .customize-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 30px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #2d3a4f;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #2d3a4f;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;
} */
</style>
