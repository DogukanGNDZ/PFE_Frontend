<template>
  
    <v-container class="Profile-page pa-0 ma-0">
        
 
            <v-img class="grey backImage" contain src="../assets/dunking.png"></v-img>
            <v-col>
            <v-avatar size="200" style="position:absolute; top: 12%; left: 5%;">
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
            </v-col>
            <v-list-item color="rgba(0, 0, 0, .4)">
              <v-list-item-content>
                <v-list-item-title class="title">Jerome Devaux</v-list-item-title>
                <v-list-item-subtitle>Football Player</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-row>
                <v-col>
                    <v-card style="border-color: white !important; border-width: 0px;">
                        <v-card-title>Details</v-card-title>
                        <v-card-text>
                            <EasyDataTable
                                :headers="headers"
                                :items="items"
                                hide-footer
                                />
                        </v-card-text>
                    </v-card>

                </v-col>
                <v-col>
                    <v-card height="100%">
                        <v-card-title>About Me</v-card-title>
                        <v-card-text>
                            I play football for 5 years now and I'm searching a club around Gembloux.
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>

        <v-row>

        </v-row>
  </v-container>
  <!-- <v-card class="mx-auto" max-width="434" tile>
          <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
          <v-col>
            <v-avatar size="100" style="position:absolute; top: 130px">
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
          </v-col>
            <v-list-item color="rgba(0, 0, 0, .4)">
              <v-list-item-content>
                <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
      </v-card> -->
  <!-- <v-row width="100%">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"

              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              height
            </v-card-title>
          </v-card>
        </v-row>

        <v-row>
          <v-card width="100%">
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"
              width="100%"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              height with contain
            </v-card-title>
          </v-card>
        </v-row> -->
</template>

<script>

  export default {
    name: "Profile",
    data: () => ({
        headers: [
          { text: "CATEGORY", value: "category" },
          { text: "VALUE", value: "value"},
        ],
        items: [
          { category: "Firstname", value: "Jerome"},
          { category: "Lastname", value: "Dev"},
          { category: "Email", value: "jerome@gmail.com"},
          { category: "Age", value: "22"},
          { category: "Role", value: "Player"},
          { category: "Sport", value: "Football"},
          { category: "Position", value: "Forward"},
          { category: "Size", value: "188cm"},
          { category: "Weight", value: "78.2"},
          { category: "Years of experience", value: "5"},
          { category: "Actual CLub", value: "/"},
          { category: "Adresse", value: "5030 Gembloux Belgium"},
        ],
    }),
    methods: {

      
    },
    
  }
</script>
<style>
.backImage {
  height:  17%;
  width: 100%;
  background-color: gray;

}
</style>
