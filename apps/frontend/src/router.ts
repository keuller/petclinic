import { createRouter, createWebHistory } from 'vue-router';
import Index from '~/pages/Index.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'index', component: Index },
        { path: '/vets', name: 'veterinarios', component: () => import('~/pages/veterinarios/index.vue') },
        { path: '/clientes', name: 'clientes', component: () => import('~/pages/Clientes.vue') }
    ]
});

export default router
