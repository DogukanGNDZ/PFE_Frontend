import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "boxicons/css/boxicons.min.css";
import "@fortawesome/fontawesome-free/js/all";
import "animate.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});
import vuetify from "./plugins/vuetify";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import 'tippy.js/dist/tippy.css';
// import store from './store'

createApp(App).use(router).use(vuetify).component('EasyDataTable', Vue3EasyDataTable).mount("#app");
