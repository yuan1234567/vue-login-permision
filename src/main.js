// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false
const whiteList = ['/login'] // 不重定向白名单

router.beforeEach((to, from, next) => {
    var isLogin = Boolean(JSON.parse(sessionStorage.getItem('user'))) //true用户已登录， false用户未登录
    if (isLogin) { //已经登录
        if (to.path === '/login') {
            next()
        } else {
            if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
                const roles = ['admin']
                store.state.user.roles = roles
                store.dispatch('GenerateRoutes', { roles }).then(() => {
                    router.addRoutes(store.getters.addRouters)
                    next({...to, replace: true })
                }).catch(err => {
                    next({ path: '/login' })
                    console.log(err)
                })
            } else {
                next()
            }

        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login') // 否则全部重定向到登录页
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})