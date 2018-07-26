// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueCookie)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  http: {
    root: '/apiv1',
    headers: {}
  }
})
