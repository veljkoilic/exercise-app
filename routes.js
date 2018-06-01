import VueRouter from 'vue-router';

let routes = [

    {
        path: '#/',
        component: require('./src/components/login.vue')

    },
    {
        path: '#/hello',
        component: require('./src/components/HelloWorld.vue')

    }

];


export default new VueRouter({
    routes
});