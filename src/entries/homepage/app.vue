<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    import util from '@/common_libs/util'
    import router from './router';
    import vTitle from '../../vue_plugins/v_title';

    Vue.prototype.$util = util
    Vue.use(VueRouter);
    Vue.use(vTitle);

    export default {
        name: 'app',
        data() {
            return {};
        },
        // 通过 router 配置参数注入路由，从而让整个应用都有路由功能
        router,
        // store,
    }
</script>

<style lang="scss" src="./components/basic.scss"></style>
<style lang="scss" rel="stylesheet/scss">
    html, body {
        margin: 0;
        padding: 0;
    }
    .cursor-default {
        cursor: default;
    }
</style>
