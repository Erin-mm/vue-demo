import Vue from 'vue'
import router from './router/index'
import axios from 'axios'
import store from './store/store'
import app from './app.vue'
require('./assets/scss/config.scss')
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(app)
})
