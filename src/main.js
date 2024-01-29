import { createApp } from "vue";
import './assets/css/style.css'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App).use(router).use(store).use(vuetify).mount("#app");
