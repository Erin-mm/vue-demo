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

//测试入口
const test = resolve => require(['../components/test/test'], resolve)
const jsLearning = resolve => require(['../components/test/jsLearning'], resolve)
const watchTest = resolve => require(['../components/test/watch-test'], resolve) //无限树
const globalWatcher = resolve => require(['../components/test/globalWatcher'], resolve) //全局监听
const regularExpression = resolve => require(['../components/test/regularExpression'], resolve) //正则表达式
const accordions = resolve => require(['../components/test/accordions'], resolve) //折叠面板


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
        { path: '/', component: home, beforeEnter: requireAuth },
        { path: '/home', component: home, name: 'home', beforeEnter: requireAuth },
        {
            path: '/test',
            component: test,
            name: 'test',
            beforeEnter: requireAuth,
            children: [
                { path: '/test-watch', component: watchTest, name: 'watchTest' },
                { path: '/js-learning', component: jsLearning, name: 'jsLearning' },
                { path: '/global-watcher', component: globalWatcher, name: 'globalWatcher' },
                { path: '/regularExpression', component: regularExpression, name: 'regularExpression' },
                { path: '/accordions', component: accordions, name: 'accordions' },
            ]
        },
        { path: '/login', component: login, name: 'login' },
        {
            path: '/user',
            component: user,
            beforeEnter: requireAuth,
            children: [
                { path: '', component: userImf, name: 'userImf' },
                { path: 'create', component: create, name: 'create' },
                { path: 'modify/:id', component: modify, name: 'modify' }
            ]
        }
    ]
})

export default router
