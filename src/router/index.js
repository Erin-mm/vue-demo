import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../auth'
Vue.use(VueRouter)

const home = resolve => require(['../components/content/home'], resolve)
const user = resolve => require(['../components/content/userImf'], resolve)
const login = resolve => require(['../components/content/login'], resolve)
const create = resolve => require(['../components/content/create'], resolve)
const modify = resolve => require(['../components/content/modify'], resolve)

// 设置登录权限
const requireAuth = (to, from, next) => {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
};

// 退出
// const quitDemo = (to, from, next)=>{
//   auth.logout()
//   let name = 'world'
//   this.$store.dispatch('getUser',name)
//   next('/login')
// }

const router = new VueRouter({
  routes: [
    {path: '/home', component: home, name: 'home', beforeEnter: requireAuth},
    {path: '/user', component: user, name: 'user', beforeEnter: requireAuth},
    {path: '/login', component: login, name: 'login'},
    {path: '/create', component: create, name: 'create'},
    {path: '/modify/:id', component: modify, name: 'modify'}
    // {path: '/logout', name: 'logout', beforeEnter: quitDemo}
  ]
})

export default router
