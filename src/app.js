/**
 * Created by Administrator on 2018/11/22 0022.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body)
    })
}
Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: 'hash',
    strict: process.env.NODE_ENV !== 'production',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return { x: 0, y: to.meta.savedPosition || 0 }
        }
    }
})
new Vue({
    router,
    store
}).$mount('#app')

