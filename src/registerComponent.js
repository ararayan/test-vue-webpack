import Vue from 'vue';

// global component;
import cipTab from './vue/component/tab/tab.vue';
import cipMenu from './vue/component/menu/menu.vue';
import cipFormitem from './vue/component/formItem/formItem.vue';
import textbox from './vue/component/textbox/textbox.vue';
import modal from './vue/component/modal/modal.vue';

const register = ()=>{
    Vue.component('cip-tab', cipTab);
    Vue.component('cip-menu', cipMenu);
    Vue.component('cip-form-item', cipFormitem);
    Vue.component('cip-textbox', textbox);
    Vue.component('c-modal', modal);
}

export default register;
