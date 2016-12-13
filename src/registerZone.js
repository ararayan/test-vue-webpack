import Vue from 'vue';

// global component;
import cipHeader from './vue/zone/header/header.vue';
import cipForm from './vue/zone/dyform/dyform.vue';

const register = ()=>{
    Vue.component('cip-header', cipHeader);
    Vue.component('cip-form', cipForm);
}

export default register;