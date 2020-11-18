import Vue from 'vue';
import VueRouter from 'vue-router';
import Superman from '../views/Superman.vue';
import WonderWoman from '../views/WonderWoman.vue';
import Batman from '../views/Batman.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Superman',
    component: Superman,
  },
  {
    path: '/wonderWoman',
    name: 'WonderWoman',
    component: WonderWoman,
  },
  {
    path: '/batman',
    name: 'Batman',
    component: Batman,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
