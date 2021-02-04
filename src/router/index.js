import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: login,

    }, {
        path: '/login',
        component: () =>
            import ('@/views/login.vue')
    }, {
        path: '/Home',
        name: '首页',
        component: () =>
            import ('@/views/Home.vue'),
        meta: {
            requireAuth: true
        },
        children: [{
            name: "用户管理",
            path: '/username',
            component: () =>
                import ('@/views/username.vue')

        }, {
            name: "菜单管理",
            path: '/cai',
            component: () =>
                import ('@/views/cai.vue')

        }, {
            name: "游戏2048",
            path: '/name2048',
            component: () =>
                import ('@/views/name2048.vue')

        }, {
            name: "CSS3动画",
            path: '/iscss3',
            component: () =>
                import ('@/views/iscss3.vue')

        }, {
            name: "贪吃蛇",
            path: '/snake',
            component: () =>
                import ('@/views/snake.vue')

        }, {
            name: "视频播放",
            path: '/view',
            component: () =>
                import ('@/views/view.vue')

        }, ]
    },
    {
        //404
        path: "*",
        component: () =>
            import ('@/views/error.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    routes,

});

//导航守卫
router.beforeEach((to, from, next) => {

    const token = store.state.token ? store.state.token : window.sessionStorage.getItem('token')

    if (to.meta.requireAuth) {
        if (token) {
            next()
        } else {
            alert('请登录');
            next({
                path: '/',
                // query: {
                //     redirect: to.fullPath
                // }
            })
        }
    } else {
        next()
    }

});


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router