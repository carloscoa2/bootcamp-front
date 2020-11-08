import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Petshop from '@/views/Petshop';
import Produtos from '@/views/Produtos';
import Detalhes from '@/views/Detalhes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/petshop',
    name: 'Petshop',
    component: Petshop,
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Produtos,
  },
  {
    path: '/produtos/:id',
    name: 'Detalhes',
    component: Detalhes,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
