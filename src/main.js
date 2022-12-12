import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "boxicons/css/boxicons.min.css";
import "@fortawesome/fontawesome-free/js/all";
import vuetify from "./plugins/vuetify";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import 'tippy.js/dist/tippy.css';
// import store from './store'

createApp(App).use(router).use(vuetify).component('EasyDataTable', Vue3EasyDataTable).mount("#app");
