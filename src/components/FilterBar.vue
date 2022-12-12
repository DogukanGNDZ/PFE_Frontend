<template>
  <v-container>
    <v-row align="center" class="mx-3">
      <v-col cols="12" sm="3">
        <v-select :items="items" label="Sport"></v-select>
      </v-col>
      <v-col cols="12" sm="3">
        <v-select :items="items" filled label="Age"></v-select>
      </v-col>
      <v-col cols="12" sm="3">
        <v-select :items="items" label="Country"></v-select>
      </v-col>
      <v-col cols="12" sm="3">
        <v-select :items="items" label="Position"></v-select>
      </v-col>
    </v-row>
    <v-row class="mx-3">
      <v-col cols="3">
        <v-btn block> Filter </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FilterBar",

  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>
