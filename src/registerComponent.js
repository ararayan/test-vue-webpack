import Vue from 'vue';

// global component;
import defHeader from './component/header/def.header.vue';
import defTab from './component/tab/def.tab.vue';
import defMenu from './component/menu/def.menu.vue';


const register = ()=>{
    Vue.component('def-header', defHeader);
    Vue.component('def-tab', defTab);
    Vue.component('def-menu', defMenu);
}

export default register;