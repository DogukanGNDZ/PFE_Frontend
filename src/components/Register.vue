<template>
  
    <v-container>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Nom"
        ></v-text-field>
        <v-text-field
          v-model="firstName"
          :counter="10"
          :rules="firstNameRules"
          label="Prénom"
        ></v-text-field>
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
          hint="At least 8 characters"
        ></v-text-field>
        <v-btn @click="register" :disabled="!valid">
          Register
        </v-btn>
      </v-form>
    </v-container>
  
  </template>
  
  <script>
  export default {
    name: "Register",
    data: () => ({
      valid: false,
      name: '',
      email: '',
      password: '',
      show: false,
      nameRules: [
        v => !!v || 'Le nom est requis',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      firstNameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
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
      register() {
        this.$refs.form.validate();
        if (!this.valid) return;
  
        // submit the form
      }
    }
  }
  </script>