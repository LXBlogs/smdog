import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/Login';
import Template from '@/views/blogs/Template';
import Home from '@/views/blogs/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/blogs',
    // redirect: '/blogs/home',
    // name: 'BlogTemplate',
    component: Template,
    children: [
      {
        path: '',
        name: 'BlogHome',
        component: Home
      },
      {
        path: 'write',
        name: 'writeBlog',
        component: () => import('@/views/blogs/BlogWrite.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
