<template>
  
    <v-container class="login-page">
        <v-card>
            <v-card-title>
              Login
            <v-card-text>
      <v-form ref="form" @submit.prevent="handleLogin"  method="post" v-model="valid" >
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          :type="show ? 'text' : 'password'"
          :append-icon="show ? 'fa-sharp fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
          @click:append="() => (show = !show)"
          label="Password"
        ></v-text-field>
        <v-btn type="submit" :disabled="!valid">
          Log in
        </v-btn>
      </v-form>
    
    </v-card-text>
    </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
import { server } from '../helper';
  export default {
    name: "Login",
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
        console.log(this.email + this.password);
        axios.post(server.baseURLDev+'auth/login', {
          email: this.email,
          password: this.password
          })
          .then((response) => { 
            console.log(response.data);
            localStorage.setItem("token", response.data)
            location.href = "/";
        //   if (response.data.access_token) {
        //     let payload = {
        //       token: response.data.access_token,
        //       user : response.data.user
        //     }
        //     this.$store.dispatch(server.baseURLDev+'auth/login', payload )
        //     this.$router.push({path:'/'})
        //   }
          })
          .catch(error => {
            // handle error
            console.log(error)
          });
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
