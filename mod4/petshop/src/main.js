import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import { store } from './vuex';

Vue.filter('grana', function(value) {
  if (typeof value !== 'number') {
    return value;
  }

  value = value.toFixed(2);
  return `R$ ${value}`;
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
  store,
}).$mount('#app');
