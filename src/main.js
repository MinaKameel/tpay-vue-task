import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import setHttpDefaults from "./services/http-defaults";
import PrimeVue from 'primevue/config';
setHttpDefaults();

createApp(App)
  .use(router, PrimeVue)
  .mount("#app");
