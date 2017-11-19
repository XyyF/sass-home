<template>
    <div class="page-header" v-title="'首页'">
        <div class="page-backgroundImg"></div>
        <div class="page-backgroundColor">
            <header>
                <div class="page-logo-wrap">
                    <div class="page-logo">
                        <div class="logo-wrap">
                            <img v-lazy="header_logo"/>
                            <span class="logo-title">校精灵</span>
                            <div class="logo-subtitle-wrap">
                                <span>科技为教育赋能</span>
                                <span>Empower Education By Technology</span>
                            </div>
                        </div>
                        <a class="call-us" @click="goBottom">联系我们</a>
                    </div>
                </div>
                <div class="header-title-wraps">
                    <div class="header-title-wrap">
                        <span class="header-title">为教育机构量身打造的</span>
                        <span class="header-title-sub">智能管理系统</span>
                        <span class="stub"></span>
                        <span class="header-subtitle">让教育机构的每个环节都能享受技术带来的改变</span>
                        <a href="/admin" class="header-sign-in">立即登录</a>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
    import headerPc from '../../../images/home_page/header_pc.png'
    import logo from '../../../images/home_page/logo.png'

    let timer = null;

    export default {
        name: 'header',
        data() {
            return {
                header_pc: headerPc,
                header_logo: logo,
            }
        },
        methods: {
            goBottom() {               // 回到底部方法
                clearInterval(timer);
                timer = setInterval(function interval() {
                    const height = document.body.offsetHeight - document.documentElement.clientHeight // 总高度
                    const curHeight = document.documentElement.scrollTop || document.body.scrollTop;  // 得到当前高度
                    let speed = (height - curHeight) / 7;                              // 随着高度减速
                    speed = speed < 1 ? (height - curHeight) : Math.floor(speed);
                    if (curHeight === height) {                          // 当前高度为总高度,停止这次计时器
                        clearInterval(timer);
                    }
                    window.scrollTo(0, curHeight + speed)
                }, 50);
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../../../components/font-mixin";

    .page-header {
        width: 100%;
        min-width: 1240px;
        height: 700px;
        overflow-x: hidden;
        position: relative;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        .page-backgroundImg {
            width: 100%;
            height: 700px;
            position: absolute;
            z-index: 1;
            background: url(../../../images/home_page/banner.jpg) no-repeat center;
            background-size: 2000px 700px;
            @media screen and (min-width: 2000px) {
                background-size: 100% 714px;
            }
        }
        .page-backgroundColor {
            width: 100%;
            height: 700px;
            z-index: 2;
        }
        .page-logo-wrap {
            width: 100%;
            padding-left: 6.1%;
        }
        .page-logo {
            width: 93.9%;
            height: 48px;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-shrink: 0;
            margin-top: 10px;
            .logo-wrap {
                display: -webkit-flex;
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            img {
                width: 48px;
                height: 48px;
                cursor: pointer;
            }
            .logo-title {
                margin-left: 20px;
                width: 100px;
                line-height: 48px;
                font-size: 30px;
                color: #242D33;
            }
            .logo-subtitle-wrap {
                display: -webkit-flex;
                display: flex;
                flex-direction: column;
                height: 48px;
                font-size: 12px;
                color: #242D33;
                justify-content: center;
            }
            .call-us {
                width: 90px;
                height: 32px;
                line-height: 32px;
                font-size: 14px;
                color: #605e5e;
                background-color: rgba(255, 255, 255, 0.3);
                border-radius: 20px;
                cursor: pointer;
                text-align: center;
            }
        }
        .header-title-wraps {
            width: 1200px;
            margin: 0 auto;
            position: relative;
            padding: 0 90px;
            @media screen and (min-width: 2000px) {
                padding: 0;
            }
        }
        .header-title-wrap {
            width: 100%;
            display: -webkit-flex;
            display: flex;
            flex-direction: column;
            margin-top: 150px;
            .header-title {
                font-size: 26px;
                font-weight: 500;
                letter-spacing: 5px;
                margin-bottom: 9px;
            }
            .header-title-sub {
                font-size: 52px;
                font-weight: bolder;
                letter-spacing: 5px;
                margin-bottom: 16px;
                background: linear-gradient(45deg, rgba(0, 194, 223, 1), rgba(8, 221, 100, 1), rgba(47, 225, 115, 1));     /* 背景色渐变 */
                -webkit-background-clip: text;         /* 规定背景的划分区域 */
                -webkit-text-fill-color: transparent;  /* 防止字体颜色覆盖 */
            }
            .stub {
                width: 20px;
                height: 5px;
                margin-bottom: 16px;
                background: #2fc2d8;
            }
            .header-subtitle {
                font-size: 18px;
                margin-bottom: 28px;
                font-family: "PingFang SC Regular", sans-serif;
            }
            .header-sign-in {
                width: 110px;
                height: 42px;
                line-height: 36px;
                text-align: center;
                color: #fff;
                font-size: 16px;
                text-decoration: none;
                border: 1px solid transparent;
                cursor: pointer;
                -webkit-border-radius: 5em 5em 5em 1em / 5em 5em 5em 1em;
                -moz-border-radius: 5em 5em 5em 1em / 5em 5em 5em 1em;
                border-radius: 5em 5em 5em 1em / 5em 5em 5em 1em;
                background: linear-gradient(45deg, #24bd66, #2fc2d8);
            }
        }
    }
</style>
