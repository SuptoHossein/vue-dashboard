import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: import('../pages/layout/master.vue'),
        redirect: '/dashboard',
        children: [
            {
                name: 'dashboard',
                path: '/dashboard',
                component: import('../pages/dashboard.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router