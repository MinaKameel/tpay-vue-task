import { createApp } from "vue";
import "es6-promise/auto";
//import Vue from "vue";
import store from './store'
import App from "./App.vue";
import router from "./router";
import setHttpDefaults from "./services/http-defaults";
import PrimeVue from "primevue/config";
setHttpDefaults();

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(store);
app.mount('#app')




