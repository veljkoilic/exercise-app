import VueRouter from 'vue-router';

import notifications from './src/components/notifications.vue';
import login from './src/components/login.vue';

export default new VueRouter({
    routes: [
      { path: '/login', component: login },
      { path: '/notifications', component: notifications }
    ]
});