<template>
  
    <v-container class="role-page my-auto" no-gutters>
    <v-row no-gutters >
      <v-col class="px-5" sm="4">
        <v-card class="cardRole"     @click="handlePlayer"
                    to="/register">
                <v-img
                  src="../assets/dunking.png"
                  class="w-100 h-100"
                ></v-img>

                <v-card-title>
                Player
                </v-card-title>

                <p class="text-left paragraphPlayer mx-5">
                  You practice a sport regularly, you want to join a club to show your talent or you are already part of a club and you fight for it.

                </p>

                <v-card-actions>

                

              
                </v-card-actions>

        </v-card>
      </v-col>
    <v-col class="px-5" sm="4">
    <v-card class="cardRole" @click="handleCoach" to="/register">
            <v-img
      src="../assets/coach.png"
      class="w-100 h-100"
    ></v-img>

            <v-card-title>
            Coach
            </v-card-title>

            <p class="text-left paragraphPlayer mx-5">You have the power to galvanize your players and get the best out of them.</p>

            <v-card-actions>

            <v-spacer></v-spacer>

            </v-card-actions>

            <v-expand-transition>
            </v-expand-transition>
    </v-card>
    </v-col>
    <v-col class="px-5" sm="4">
    <v-card class="cardRole" @click="handleClub" to="/register">
            <v-img
      src="../assets/club.png"
      class="w-100 h-100"
    ></v-img>

            <v-card-title>
            Club
            </v-card-title>

            <p class="text-left paragraphPlayer mx-5">You are in charge of a recognized club and want to recruit players or coaches.<br/>

               </p>
              

            <v-card-actions>

            <v-spacer></v-spacer>

            </v-card-actions>

            <v-expand-transition>
            </v-expand-transition>
    </v-card>
    </v-col>
    </v-row>
    </v-container>
</template>

<script>
//import axios from 'axios';
//import { server } from '../helper';
//import User from '../models/user.js';
  export default {
    name: "Register",
    data: () => ({
      valid: false,
      show: false,
      show1: false,
      show2: false,
    }),
    methods: {
      handleCoach() {
        localStorage.setItem("role", "coach")
      },
      handlePlayer() {
        localStorage.setItem("role", "player")
      },
      handleClub() {
        localStorage.setItem("role", "club")
      }
    }
    // methods: {
    //     handleRegister() {
    //         axios.post('http://localhost:5000/user/register', this.user)
    //         .catch(e=>{console.log(e);this.error=e})
    //   }
    // }
  }
</script>
<style>

.cardRole:hover{
  border: solid 1px black
}

.paragraphPlayer{
  opacity: 50%;
}

</style>
