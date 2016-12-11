if(module.hot) {
  module.hot.accept()
};


import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'; // for ajax

import routes from './routes.js';
import defShell from './vue/entries/shell/def.shell.vue';

import registerComponent from './registerComponent.js';

// register and use vuex & router;
registerComponent();
Vue.use(Vuex);
Vue.use(VueRouter);
const router = new VueRouter({routes: routes});


// init vue;
new Vue({
  el: '#app',
  router,
  render:h => h(defShell)
});


