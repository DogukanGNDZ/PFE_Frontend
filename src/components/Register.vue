<template>
  
    <v-container class="register-page">
        <v-card :loading="loading">
            <v-card-title>
                Register
            <v-card-text>
      <v-form ref="form" @submit.prevent="handleRegister" method="post" v-model="valid" :loading="loading">
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
          type="number"
          v-model="user.age"
          :rules="ageRules"
          label="Age"
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
          :append-icon="show ? 'fa-sharp fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
          @click:append="() => (show = !show)"
          label="Password"
          hint="At least 8 characters"
        ></v-text-field>
        <v-btn type="submit" :disabled="!valid">
          S'enregistrer
        </v-btn>
      </v-form>
    
    </v-card-text>
    </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
//import { server } from '../helper';
import User from '../models/user.js';
  export default {
    name: "Register",
    data: () => ({
      valid: false,
      user : new User('','',0,'',''),
      show: false,
      nameRules: [
        v => !!v || 'Le nom est requis',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      firstNameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      ageRules: [
        v => !!v || "L'age est requis",
        v => (v <100 && v>6)|| 'Age must be valid'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters'
      ]
    }),
    methods: {
        handleRegister() {
            axios.post('http://localhost:5000/users/register',{firstname: this.user.firstname, lastname: this.user.lastname, age: this.user.age, email: this.user.email, password: this.user.password})
            .catch(e=>{console.log(e);this.error=e})
      }
    }
  }
</script>
<style>
.register-page {
  width: 400px;
  margin: auto;
}
</style>
