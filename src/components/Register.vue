<template>
  <v-container class="register-page">
    <v-card>
      <v-card-title>
        Registration
        <v-card-text>
          <v-form
            ref="form"
            @submit.prevent="handleRegister"
            method="post"
            v-model="valid"
            v-if="role == 'player'"
          >
            <v-text-field
              v-model="user.name"
              :counter="10"
              :rules="nameRules"
              label="Lastname"
            ></v-text-field>
            <v-text-field
              v-model="user.firstname"
              :counter="10"
              :rules="firstNameRules"
              label="Firstname"
            ></v-text-field>
            <v-text-field
              v-model="user.email"
              :rules="emailRules"
              label="E-mail"
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              :rules="passwordRules"
              :type="show ? 'text' : 'password'"
              :append-icon="
                show ? 'fa-sharp fa-solid fa-eye-slash' : 'fa-solid fa-eye'
              "
              @click:append="() => (show = !show)"
              label="Password"
              hint="At least 8 characters"
            ></v-text-field>
            <p v-if="errora" class="error" style="color: red">{{ errora }}</p>
            <br />
            <v-btn type="submit" :disabled="!valid"> Register </v-btn>
          </v-form>
          <v-form
            ref="form"
            @submit.prevent="handleRegisterCoach"
            method="post"
            v-model="valid"
            v-else-if="role == 'coach'"
          >
            <v-text-field
              v-model="user.name"
              :counter="10"
              :rules="nameRules"
              label="Lastname"
            ></v-text-field>
            <v-text-field
              v-model="user.firstname"
              :counter="10"
              :rules="firstNameRules"
              label="Firstname"
            ></v-text-field>
            <v-text-field
              v-model="user.email"
              :rules="emailRules"
              label="E-mail"
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              :rules="passwordRules"
              :type="show ? 'text' : 'password'"
              :append-icon="
                show ? 'fa-sharp fa-solid fa-eye-slash' : 'fa-solid fa-eye'
              "
              @click:append="() => (show = !show)"
              label="Password"
              hint="At least 8 characters"
            ></v-text-field>
            <p v-if="errora" class="error">{{ errora }}</p>
            <v-btn type="submit" :disabled="!valid"> Register </v-btn>
          </v-form>
          <v-form
            ref="form"
            @submit.prevent="handleRegisterClub"
            method="post"
            v-model="valid"
            v-else
          >
            <v-text-field
              v-model="club.name"
              :counter="10"
              :rules="nameRules"
              label="Name of the club"
            ></v-text-field>
            <v-text-field
              v-model="club.email"
              :rules="emailRules"
              label="E-mail"
            ></v-text-field>
            <v-text-field
              v-model="club.password"
              :rules="passwordRules"
              :type="show ? 'text' : 'password'"
              :append-icon="
                show ? 'fa-sharp fa-solid fa-eye-slash' : 'fa-solid fa-eye'
              "
              @click:append="() => (show = !show)"
              label="Password"
              hint="At least 8 characters"
            ></v-text-field>
            <p v-if="errora" class="error">{{ errora }}</p>
            <v-btn type="submit" :disabled="!valid"> Register </v-btn>
          </v-form>
        </v-card-text>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import { server } from "../helper";
import User from "../models/user.js";
import Club from "../models/club.js";
export default {
  name: "Register",
  data: () => ({
    errora: null,
    valid: false,
    user: new User("", "", localStorage.getItem("role"), "", ""),
    club: new Club("", "", ""),
    role: localStorage.getItem("role"),
    show: false,
    nameRules: [
      (v) => !!v || "Le nom est requis",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    firstNameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
    ],
  }),
  methods: {
    handleRegister() {
      axios
        .post(server.baseURLDev + "users/register", {
          firstname: this.user.firstname,
          lastname: this.user.name,
          role: "user",
          email: this.user.email,
          password: this.user.password,
        })
        .then((response) => {
          // handle success
          this.$router.push({ path: "/login" });
          console.log(response.data);
        })
        .catch((error) => {
          // handle error
          this.errora = "Email already used";
          console.log(error);
        });
    },
    handleRegisterCoach() {
      axios
        .post(server.baseURLDev + "coachs/register", {
          firstname: this.user.firstname,
          lastname: this.user.name,
          role: "coach",
          email: this.user.email,
          password: this.user.password,
        })
        .then((response) => {
          // handle success
        this.$router.push({ path: "/login" });
          console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
    handleRegisterClub() {
      axios
        .post(server.baseURLDev + "clubs/register", {
          name: this.club.name,
          role: "club",
          email: this.club.email,
          password: this.club.password,
        })
        .then((response) => {
          // handle success
          this.$router.push({ path: "/login" });
          console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
    /*handleRegister() {
            axios.post('http://localhost:5000/users/register',{firstname: this.user.firstname, lastname: this.user.lastname, age: this.user.age, email: this.user.email, password: this.user.password})
            .catch(e=>{console.log(e);this.error=e})
      }*/
  },
};
</script>
<style>
.register-page {
  width: 400px;
  margin: auto;
}
</style>
