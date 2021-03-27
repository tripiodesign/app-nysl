import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Librerias de BootstrapVue

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;
// fin BootstrapVue

// Libreria Typed.js //
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

// Libreria vue page transition //
import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
