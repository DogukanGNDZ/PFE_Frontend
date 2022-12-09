<template>
  
    <v-container class="Profile-page">
        <v-row >
            <v-img  src="../assets/dunking.png"></v-img>
        </v-row>
        <v-row>

        </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import { server } from '../helper';
  export default {
    name: "Register",
    data: () => ({
      valid: false,
      email: '',
      password: '',
      show: false,
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
      handleLogin(){
        axios.post(server.baseURLDev+'users/login', {
          email: this.email,
          password: this.password
          })
          .then(response => {
            // handle success
            console.log(response.data)
          })
          .catch(error => {
            // handle error
            console.log(error)
          })
      },
      
        /*handleRegister() {
            axios.post('http://localhost:5000/users/register',{firstname: this.user.firstname, lastname: this.user.lastname, age: this.user.age, email: this.user.email, password: this.user.password})
            .catch(e=>{console.log(e);this.error=e})
      }*/
    }
  }
</script>
<style>
.register-page {
  width: 400px;
  margin: auto;
}
</style>
