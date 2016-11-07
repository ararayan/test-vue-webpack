import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'; // for ajax



document.addEventListener('DOMContentLoaded', event=>{
  new Vue({
    el: 'body',
    data: {
      message: 'Hello Vue.js!',
      shit: 12
    }
  });
})



if(module.hot) {
  module.hot.accept()
};

