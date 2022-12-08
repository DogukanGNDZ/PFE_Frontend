<template>
  
    <v-container class="role-page my-auto" no-gutters fluid>
    <v-row no-gutters fluid>
    <v-col class="px-5" sm="4">
    <v-card :loading="loading">
            <v-img
      src="../assets/dunking.png"
      height="200px"
    ></v-img>

            <v-card-title>
            Player
            </v-card-title>

            <v-card-subtitle>
            You practice a sport regularly, you want to join a club to show your talent or you are already part of a club and you fight for it.
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                class="text-red"
                @click="handlePlayer"
                to="/register"
            >
                Choose
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>{{ show ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down' }}</v-icon>
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    You practice a sport regularly, you want to join a club to show your talent or you are already part of a club and you fight for it. This is your category
                </v-card-text>
            </div>
            </v-expand-transition>
    </v-card>
    </v-col>
    <v-col class="px-5" sm="4">
    <v-card :loading="loading">
            <v-img
      src="../assets/coach.png"
      height="200px"
    ></v-img>

            <v-card-title>
            Coach
            </v-card-title>

            <v-card-subtitle>
              You have the power to galvanize your players and get the best out of them.
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                class="text-red"
                @click="handleCoach"
                to="/register"
            >
                Choose
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="(show1 = !show1)"
            >
                <v-icon>{{ show1 ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down' }}</v-icon>
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <div v-show="show1">
                <v-divider></v-divider>

                <v-card-text>
                  You have the power to galvanize your players and get the best out of them.
                </v-card-text>
            </div>
            </v-expand-transition>
    </v-card>
    </v-col>
    <v-col class="px-5" sm="4">
    <v-card :loading="loading">
            <v-img
      src="../assets/club.png"
      height="200px"
    ></v-img>

            <v-card-title>
            Club
            </v-card-title>

            <v-card-subtitle>
              You are in charge of a recognized club and want to recruit players 
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                class="text-red"
                @click="handleClub"
                to="/register"
                
            >
                Choose
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="(show2 = !show2)"
            >
                <v-icon>{{ show2 ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down' }}</v-icon>
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <div v-show="show2">
                <v-divider></v-divider>

                <v-card-text>
                  You are in charge of a recognized club and want to recruit players 
                </v-card-text>
            </div>
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


</style>
