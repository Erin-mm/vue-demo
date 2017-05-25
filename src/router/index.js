import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../auth'
Vue.use(VueRouter)

const home = resolve => require(['../components/content/home'], resolve)
const user = resolve => require(['../components/content/user'], resolve)
const login = resolve => require(['../components/content/login'], resolve)
const userImf = resolve => require(['../components/content/userImf'], resolve)
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
}

const router = new VueRouter({
  routes: [
    {path: '/', component: home, beforeEnter: requireAuth},
    {path: '/home', component: home, name: 'home', beforeEnter: requireAuth},
    {path: '/login', component: login, name: 'login'},
    {
      path: '/user', component: user, name: 'user', beforeEnter: requireAuth,
      children: [
        {path: '', component: userImf, name: 'userImf'},
        {path: 'create', component: create, name: 'create'},
        {path: 'modify/:id', component: modify, name: 'modify'}
      ]
    }
  ]
})

export default router
