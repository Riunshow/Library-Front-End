import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
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
        path: '/myarticle',
        name: 'MyArticle',
        component: require('@/components/PlayGround/MyArticle').default,
        meta: {
            requireAuth: true
        }
    }, {
        path: '/myself',
        name: 'PersonalPage',
        component: require('@/components/Personal/PersonalPage').default,
        meta: {
            requireAuth: true
        },
        children: [{
            path: 'nearlyread',
            name: 'NearlyRead',
            component: require('@/components/Personal/NearlyRead').default,
            meta: {
                requireAuth: true
            },
        }, {
            path: 'mycollect',
            name: 'MyCollect',
            component: require('@/components/Personal/MyCollect').default,
            meta: {
                requireAuth: true
            },
        }, {
            path: 'fans',
            name: 'Myfans',
            component: require('@/components/Personal/Fans').default,
            meta: {
                requireAuth: true
            },
        }, {
            path: 'follows',
            name: 'Mywatch',
            component: require('@/components/Personal/Follows').default,
            meta: {
                requireAuth: true
            },
        }]
    }, {
        path: '/book',
        name: 'book',
        component: require('@/components/BookList/BookIndex').default,
    }, {
        path: '/bookinfo/:bookid',
        name: 'BookInfo',
        component: require('@/components/BookDetailInfo/BookInfo').default,
    }, {
        path: '/403',
        name: '403',
        component: require('@/components/common/403').default,
    }, {
        path: '*',
        redirect: '/home'
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