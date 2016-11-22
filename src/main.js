if(module.hot) {
  module.hot.accept()
};


import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'; // for ajax

import routes from './routes.js';
import home from './vue/home/home.vue';


// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
// const routes = [
//   // { path: '/', component: Foo },
//   // { path: '/bar', component: Bar }
// ]


Vue.use(VueRouter);

const router = new VueRouter({routes: routes});

new Vue({
  el: '#app',
  router,
  render:h => h(home)
});


