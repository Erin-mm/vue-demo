import Vue from 'vue'
import router from './router/index'
import axios from 'axios'
import store from './store/store'
import app from './app.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Distpicker from 'v-distpicker'

require('./assets/scss/config.scss')
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.component('v-distpicker', Distpicker)
// Vue.http.options.withCredentials = true;
// Vue.http.options.before = function(request) {
//   request.headers.set('Access-Token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMTMsInBhc3N3b3JkIjoiJDJhJDExJHhBV3lSV3JUR0lxemwvdzU4eU5vTGVacmhTWUY2UTR1Um56cTA1SjRVR3BWRDMySXNpWldlIiwiZXhwIjoxNTA1NTQ3MjgzfQ.o0o9lx_m5FfzPvz7wK82bMxUYejwWdGyFdSNu8uv9Fk')
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(app)
})
