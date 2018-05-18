import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRouterMap = [{
        path: '/',
        redirect: '/login',
        hidden: true
    },
    {
        path: '/login',
        name: '登录页面',
        hidden: true,
        component: resolve => require(['../components/pages/Login.vue'], resolve)
    },
    {
        path: '/Readme',
        index: 'Readme',
        name: '自诉',
        meta: {
            title: 'Readme',
            icon: 'el-icon-menu'
        },
        component: resolve => require(['../components/common/Home.vue'], resolve),
        children: [{
            name: '关于我',
            path: '/',
            meta: { title: 'Readme', icon: 'el-icon-menu' },
            component: resolve => require(['../components/pages/Readme.vue'], resolve)
        }]
    }
]
export default new Router({
    //mode: 'history',
    routes: constantRouterMap
})

export const asyncRouterMap = [{
        path: '/permission',
        name: '权限',
        meta: {
            title: 'permission',
            icon: 'el-icon-setting',
            roles: ['admin']
        },
        component: resolve => require(['../components/common/Home.vue'], resolve),
        children: [{
            name: 'permission',
            path: '/permission',
            meta: {
                title: 'permission',
                icon: 'el-icon-menu',
                roles: ['admin']
            },
            component: resolve => require(['../components/pages/permission.vue'], resolve)
        }]
    },
    { path: '*', redirect: '/404', hidden: true }
]