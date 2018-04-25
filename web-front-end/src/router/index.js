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
    }, {
        path: '/write',
        name: 'Write',
        component: require('@/components/Editor/Editor').default,
        meta: {
            requireAuth: true
        }
    }, {
        path: '/403',
        name: '403',
        component: require('@/components/common/403').default,
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
        if (sessionStorage.user) {
            next()
        } else {
            next({
                path: '/403'
            })
        }

    } else {
        next()
    }
})

export default router;