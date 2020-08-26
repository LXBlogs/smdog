import Vue from 'vue';
import router from './router';
import store from './store';

import './plugins/axios';
import './plugins/element.js';
import './plugins/mavon.js';
import './app.scss';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
