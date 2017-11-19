import VueRouter from 'vue-router'

const Home = r => import(/* webpackChunkName: "homepage" */ './pages/home/index.vue').then(r)

// 创建 router 实例
export default new VueRouter({
    // 不使用hash模式，用/连接各级路径，需要在服务端进行相关配置
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/*',
        name: '404',
        component: Home,
    }],
})
