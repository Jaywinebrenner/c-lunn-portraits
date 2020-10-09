import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueExpandableImage from "vue-expandable-image";
import vmodal from "vue-js-modal";
import EnlargeableImage from "@diracleo/vue-enlargeable-image";

Vue.use(EnlargeableImage);


Vue.use(vmodal);
Vue.use(VueExpandableImage);


Vue.use(BootstrapVue);

Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
