import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import ClientDashboard from '../views/ClientDashboard.vue';
import SalesHistory from '../views/SalesHistory.vue';
import Register from '@/views/Register.vue'; 


const routes = [
  { path: '/', redirect: '/login' },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/admin', component: AdminDashboard },
  { path: '/client', component: ClientDashboard },
  { path: '/sales-history', component: SalesHistory },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;


