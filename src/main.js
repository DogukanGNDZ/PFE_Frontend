import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "boxicons/css/boxicons.min.css";
import "@fortawesome/fontawesome-free/js/all";
import vuetify from "./plugins/vuetify";
import "animate.css";

createApp(App).use(router).use(vuetify).mount("#app");
