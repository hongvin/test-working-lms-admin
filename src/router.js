import Vue from 'vue';
import Router from 'vue-router';

import Overview from './views/Overview.vue';
import Profile from './views/Profile.vue';
import Errors from './views/Errors.vue';
import News from './views/News.vue';
import Jobs from './views/Jobs.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/overview',
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
    {
      path: '*',
      redirect: '/errors',
    },
  ],
});
