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
        <v-btn icon="fas fa-home" class="ml-3"></v-btn>
        <v-btn icon="fas fa-sign-in" class="ml-3"></v-btn>
        <v-btn icon="fas fa-home" class="ml-3"></v-btn>
      </v-col>
    </v-row>
  </v-container>

  <!-- <v-toolbar class="flex-grow-0" dark color="black" shaped>
    <v-toolbar-title class="text-left">Coding Beauty</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn icon="fas fa-home" class="ml-3"></v-btn>
    <v-btn icon="fas fa-sign-in" class="ml-3"></v-btn>
    <v-btn icon="fas fa-home" class="ml-3"></v-btn>
  </v-toolbar> -->
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
