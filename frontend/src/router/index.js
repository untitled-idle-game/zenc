import { createRouter, createWebHistory } from "vue-router";

/**
 * To add a new route
 * 
 * Copy/paste a route from below and replace the names with what you desire, then replace the component with the necessary component
 * 
 * Then, go to App.vue and add a RouterLink
 * The path in ROuterLink should be the same as the path in your newly added route
 * 
 * Ex: <RouterLink to="/path">Example</RouterLink>
 * Where the `to="/path"` is the path and 'Example' is the link that will show up on the router link in the website
 * 
 * Eventually, RouterLinks should go into the menu, but for now they can just go on the top of the page.
 */

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
                '../components/SignInScreen.vue'
            ),
            props: true
        },
        {
            path: '/themestore',
            name: 'themestore',
            component: () => import(
                '../components/ThemeStoreScreen.vue'
            ),
        },
        {
            path: "/survey",
            name: "survey",
            component: () => import(
                '../components/SurveyScreen.vue'
            ),
        }
    ]
});

export default router;