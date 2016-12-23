import Vue from 'vue';

// global component;
import cipTab from './vue/component/tab/tab.vue';
import cipMenu from './vue/component/menu/menu.vue';
import cipFormitem from './vue/component/formItem/formItem.vue';
import textbox from './vue/component/textbox/textbox.vue';
import crcModal from './vue/component/crc.modal/crc.modal.vue';

const register = ()=>{
    Vue.component('cip-tab', cipTab);
    Vue.component('cip-menu', cipMenu);
    Vue.component('cip-form-item', cipFormitem);
    Vue.component('cip-textbox', textbox);
    Vue.component('crc-modal', crcModal);
}

export default register;
