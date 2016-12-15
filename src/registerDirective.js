import Vue from 'vue';

// global component;
import vueRoot from './vue/directive/vueRoot.js';
debugger;
const register = ()=>{
    Vue.directive('to-root', vueRoot);
}

export default register;