import VueRouter from 'vue-router';

import welcome from './src/components/views/welcome.vue';
import createWorkout from './src/components/views/createWorkout.vue';
import selectWorkout from './src/components/views/selectWorkout.vue';

export default new VueRouter({
    routes: [
      { path: '/', component: welcome },
      { path: '/create-workout', component: createWorkout },
      { path: '/select-workout', component: selectWorkout }


    ]
});