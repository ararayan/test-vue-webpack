if(module.hot) {
  module.hot.accept()
};

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'; // for ajax

import routes from './routes.js';
import shell from './vue/entries/shell/shell.vue';

import registerZone from './registerZone.js';
import registerComponent from './registerComponent.js';

// register 
registerZone();
registerComponent();

// use vuex and router;
Vue.use(Vuex);
Vue.use(VueRouter);
const router = new VueRouter({routes: routes});

// init vue;
new Vue({
  el: '#app',
  router,
  render:h => h(shell)
});


