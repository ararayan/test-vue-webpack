import Vue from 'vue';

// global component;
import header from './vue/zone/header/header.vue';
import formPanel from './vue/zone/formPanel/formPanel.vue';

const register = ()=>{
    Vue.component('z-header', header);
    Vue.component('z-dyform', formPanel);
}

export default register;