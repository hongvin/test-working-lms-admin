/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';
import vuetify from 'vuetify';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// Core
import App from './App.vue';
import router from './router';

// Layouts
import Default from '@/layouts/Default.vue';

ShardsVue.install(Vue);

Vue.component('default-layout', Default);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
