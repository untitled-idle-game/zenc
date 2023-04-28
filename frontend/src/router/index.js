import { createRouter, createWebHistory } from "vue-router";

// import { ZenScreen } from '../components/ZenScreen.vue';
// import { HelloWorld } from '../components/HelloWorld.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(
                '../components/ZenScreen.vue'
            ),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(
                '../components/HelloWorld.vue'
            ),
        }
    ]
});

export default router;