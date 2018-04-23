import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/home',
        name: 'HomePage',
        component: require('@/components/HomePage/HomePage').default,
    }, {
        path: '/ground',
        name: 'Ground',
        component: require('@/components/PlayGround/PlayGround').default,
    }],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
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