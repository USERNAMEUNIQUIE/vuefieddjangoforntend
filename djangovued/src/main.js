// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import { store } from './store/store'
import Base from './base/base'




Vue.config.productionTip = false;
Vue.use(VueRouter);


const router = new VueRouter({
  routes,
  mode: 'history'
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { Base },
  template: '<Base/>'
});
