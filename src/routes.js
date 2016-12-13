

// import login from './vue/login/login.vue';
import general from './vue/entries/general/general.vue';
import dashboard from './vue/entries/dashboard/dashboard.vue';
// import entityView from './vue/entityView/entityView.vue';

export default [
    {path: '/', component: dashboard },
     {path: '/dashboard', component: dashboard },
    {path: '/general', component: general }
    // {path: '/login', component: login }
];