import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/home',
        name: 'HomePage',
        component: require('@/components/HomePage').default,
    }]
})

router.beforeEach((to, from, next) => {
    if (to.fullPath == '/') {
        next({
            path: '/home'
        })
    }
    if (to.meta.requireAuth) {
        console.log(1)

    } else {
        next()
    }
})

export default router;