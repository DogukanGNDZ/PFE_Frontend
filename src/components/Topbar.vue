<template>
  <v-container>
    <v-row class="mx-3">
      <v-col cols="8">
        <v-text-field
          class="text-field-search"
          hide-details
          label="Search"
          placeholder="Search"
          filled
          rounded
          dense
          single-line
        ></v-text-field>
      </v-col>
      <v-col cols="4" class="text-right">
        <v-btn icon="fa-solid fa-user" class="ml-3" to="/profil"></v-btn>
        <v-btn icon="fas fa-home" class="ml-3"></v-btn>
        <v-btn icon="fas fa-home" class="ml-3"></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Topbar",
};
</script>

<style>
.text-field-search {
  width: 50%;
}
</style>
