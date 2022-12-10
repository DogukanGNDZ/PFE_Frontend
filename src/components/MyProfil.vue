<template>
  
    <v-container class="Profile-page pa-0 ma-0">
        
 
            <v-img class="grey backImage" contain src="../assets/dunking.png"></v-img>
            <v-btn icon="fa-solid fa-pen-to-square" class="ml-3" style="position:absolute; top: 0.5%; left: 95%;"></v-btn>
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
                                theme-color="#1d90ff"
                                table-class-name="customize-table"
                                hide-footer
                                alternating
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
</template>

<script>
import ModifyButton from "./ModifyButton.vue";
  export default {
    name: "Profile",
    mRender: '<a class="btn btn-info btn-sm" href=#/'  + '>' + 'Edit' + '</a>',
    data: () => ({
        headers: [
          { text: "CATEGORY", value: "category" },
          { text: "VALUE", value: "value"},
          { text: "Operation", value: "operation"},
        ],
        
        items: [
          { category: "Firstname", value: "Jerome", operation: ModifyButton},
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

/* .customize-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 30px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #2d3a4f;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #2d3a4f;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;
} */
</style>
