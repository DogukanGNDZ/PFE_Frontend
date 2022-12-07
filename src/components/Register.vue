<template>
  <v-container class="register-page">
    <v-card :loading="loading">
      <v-card-title>
        Inscription
        <v-card-text>
          <v-form ref="form" v-model="valid" :loading="loading">
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
              type="number"
              v-model="age"
              :rules="ageRules"
              label="Age"
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
              :append-icon="
                show ? 'fa-sharp fa-solid fa-eye-slash' : 'fa-solid fa-eye'
              "
              @click:append="() => (show = !show)"
              label="Mot de passe"
              hint="At least 8 characters"
            ></v-text-field>
            <v-btn @click="register" :disabled="!valid"> S'enregistrer </v-btn>
          </v-form>
        </v-card-text>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    valid: false,
    name: "",
    firstName: "",
    age: "",
    email: "",
    password: "",
    show: false,
    nameRules: [
      (v) => !!v || "Le nom est requis",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    firstNameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    ageRules: [
      (v) => !!v || "L'age est requis",
      (v) => (v < 100 && v > 6) || "Age must be valid",
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
    register() {
      this.$refs.form.validate();
      if (!this.valid) return;

      // submit the form
    },
  },
};
</script>
<style>
.register-page {
  width: 400px;
  margin: auto;
}
</style>
