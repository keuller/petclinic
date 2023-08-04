import { createRouter, createWebHistory } from 'vue-router';
import Index from '~/pages/Index.vue';
import TestPage from '~/pages/Test.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'index', component: Index },
        { path: '/test', name: 'test', component: TestPage }
    ]
});

export default router
