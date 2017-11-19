<template>
    <div class="home-page" v-title="'校精灵'">
        <header-page></header-page>

        <client-tache></client-tache>

        <polish></polish>

        <trivial></trivial>

        <div class="operation-analyze">
            <span class="operation-analyze-title cursor-default">运营数据分析</span>
            <el-carousel class="operation-analyze-carousel" @change="changeIndex" :initial-index="Number(0)">
                <el-carousel-item v-for="(item, index) in carousel" :key="index" :label="item.title">
                    <img v-lazy="item.img"/>
                </el-carousel-item>
            </el-carousel>
            <div class="carousel-subtitle-wrap">
                <transition name="fade" mode="out-in">
                    <span class="carousel-subtitle" :key="carouselSubtitle">{{carouselSubtitle}}</span>
                </transition>
            </div>
        </div>

        <student-home></student-home>

        <div class="choose-us">
            <span class="choose-us-title cursor-default">为什么选择我们</span>
            <ul class="choose-ul" ref="container">
                <li v-for="item in choose" class="choose-li">
                    <img v-lazy="item.imgLink"/>
                    <span class="choose-title">{{item.title}}</span>
                    <span class="choose-subtitle">{{item.subtitle}}</span>
                </li>
            </ul>
        </div>

        <div class="partner">
            <div class="partner-wrap">
                <p class="partner-title cursor-default">我们的合作伙伴</p>
                <ul class="partner-ul">
                    <li v-for="item in 12" :class="`partner-li-${item}`"></li>
                </ul>
            </div>
        </div>

        <div class="footer">
            <div class="footer-title-wrap">
                <p class="footer-title">科 · 技 · 为 · 教 · 育 · 赋&nbsp&nbsp·&nbsp&nbsp能</p>
                <p class="footer-subtitle">Empower Education By Technology</p>
                <a href="/admin" class="footer-sign-in">立即登录</a>
            </div>
            <div class="footer-contact-wrap" id="contact">
                <p class="footer-contact">/&nbsp&nbsp联系&nbsp&nbsp/</p>
                <p class="footer-detail">售前电话 189-8200-0334 &nbsp&nbsp&nbsp&nbsp 售后电话 156-8067-0216</p>
                <p class="footer-address">/&nbsp&nbsp地址&nbsp&nbsp/</p>
                <p class="footer-detail">成都市高新区 天府软件园D区D5-41号</p>
                <p class="footer-detail brand">© 校精灵 蜀ICP备17011184号</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Carousel, CarouselItem} from 'meetin-sass-ui'
    import VueLazyload from 'vue-lazyload'
    import clientTache from './components/client_tache.vue'
    import trivial from './components/trivial.vue'
    import studentHome from './components/student_home.vue'
    import headerPage from './components/header.vue'
    import polish from './components/polish.vue'
    import choose1 from '../../images/home_page/new_frame_1.png'
    import choose2 from '../../images/home_page/upgrade_1.png'
    import choose3 from '../../images/home_page/interaction_1.png'
    import choose4 from '../../images/home_page/service_1.png'
    import carousel1 from '../../images/home_page/add-student-record_1.png'
    import carousel2 from '../../images/home_page/checkin_record_4.png'
    import carousel3 from '../../images/home_page/conversion-records_1.jpg'

    Vue.component(Carousel.name, Carousel)
    Vue.component(CarouselItem.name, CarouselItem)
    Vue.use(VueLazyload)


    export default {
        name: 'home-page',
        data() {
            return {
                choose: [
                    {imgLink: choose1, title: '最新技术框架', subtitle: '腾讯背景，稳定好用'},
                    {imgLink: choose2, title: '持续升级，免费享受', subtitle: '系统每2周升级一次'},
                    {imgLink: choose3, title: '人性化交互设计', subtitle: '极简操作，轻松上手'},
                    {imgLink: choose4, title: '贴身服务', subtitle: '可约上门培训服务'},
                ],
                carousel: [{img: carousel1, title: '报名分析', subtitle: '每月招新人数分析,到底哪种渠道、哪位咨询师效率最高'},
                    {img: carousel2, title: '课消分析', subtitle: '每月课消率、新增课消,整体运营是否平衡健康'},
                    {img: carousel3, title: '转化率分析', subtitle: '洞悉校区拉新情况,及时调整,不断改进'}],
                carouselActiveIndex: 0,
            }
        },
        computed: {
            carouselSubtitle() {
                return this.carousel[this.carouselActiveIndex].subtitle
            },
        },
        methods: {
            changeIndex(val) {
                this.carouselActiveIndex = val
            },
        },
        components: {
            trivial,
            clientTache,
            studentHome,
            headerPage,
            polish,
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    p {
        margin: 0;
    }

    .home_page {
        width: 100%;
        overflow-x: hidden;
    }

    .operation-analyze {
        padding-top: 150px;
        width: 100%;
        min-width: 1240px;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff url('../../images/home_page/wave-4.png') no-repeat top;
        background-size: 100% 150px;
        .carousel-subtitle {
            font-size: 26px;
            color: #242D33;
        }
        .carousel-subtitle-wrap {
            margin: 0 0 105px 0;
            height: 26px;
        }
        &-title {
            font-size: 34px;
            color: #242D33;
            margin-bottom: 104px;
        }
        &-carousel {
            width: 1124px;
            height: 551px;
            position: relative;
            .el-carousel__indicators {
                bottom: 30px;
            }
            .el-carousel__indicator {
                width: 130px;
                position: relative;
                .el-carousel__button {
                    width: 6px;
                    height: 6px;
                    padding: 0;
                }
                span {
                    position: absolute;
                    top: 0;
                    left: 23px;
                    font-size: 14px;
                }
            }
            img {
                width: 1124px;
                height: 551px;
            }
            .el-carousel__item {
                display: -webkit-flex;
                display: flex;
                flex-direction: column;
                align-items: center;
                .carousel-title {
                    font-size: 26px;
                    color: rgba(36, 45, 51, 1);
                }
            }
            .el-carousel__container {
                height: 551px;
            }
            .el-carousel__indicator {
                .el-carousel__button {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: #9FB9CC;
                }
            }
            .el-carousel__indicator.is-active span {
                color: rgba(54, 180, 89, 1);
            }
        }
    }

    .choose-us {
        padding-top: 140px;
        width: 100%;
        min-width: 1240px;
        background: #fff url('../../images/home_page/wave-4.png') no-repeat top;
        background-size: 100% 150px;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        align-items: center;
        &-title {
            font-size: 26px;
            color: #242D33;
            margin-top: 77px;
        }
        .choose-ul {
            width: 1100px;
            margin: 79px auto 84px;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .choose-li {
                width: 168px;
                display: -webkit-flex;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            img {
                width: 140px;
                height: 140px;
                cursor: default;
            }
            .choose-title {
                font-size: 16px;
                font-family: "PingFang SC", serif;
                font-weight: bold;
                margin-top: 41px;
            }
            .choose-subtitle {
                font-size: 14px;
                margin-top: 5px;
            }
        }
    }

    .partner {
        width: 100%;
        padding-top: 100px;
        height: 650px;
        text-align: center;
        background: #fff;
        background-size: 100% 169px;
        .partner-wrap {
            width: 1100px;
            margin: 0 auto;
        }
        .partner-title {
            font-size: 26px;
            color: #242D33;
        }
        .partner-ul {
            margin-top: 80px;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
            list-style: none;
            li {
                width: 160px;
                height: 120px;
                margin-bottom: 20px;
                background-size: 140px 100px;
                border: 10px solid #f8f8fa;
            }
            .partner-li-1 {
                background: url('../../images/home_page/partner_1.jpg') no-repeat center center;
            }
            .partner-li-2 {
                background: url('../../images/home_page/partner_2.jpg') no-repeat center center;
            }
            .partner-li-3 {
                background: url('../../images/home_page/partner_3.jpg') no-repeat center center;
            }
            .partner-li-4 {
                background: url('../../images/home_page/partner_4.jpg') no-repeat center center;
            }
            .partner-li-5 {
                background: url('../../images/home_page/partner_5.jpg') no-repeat center center;
            }
            .partner-li-6 {
                background: url('../../images/home_page/partner_6.jpg') no-repeat center center;
            }
            .partner-li-7 {
                background: url('../../images/home_page/partner_7.jpg') no-repeat center center;
            }
            .partner-li-8 {
                background: url('../../images/home_page/partner_8.jpg') no-repeat center center;
            }
            .partner-li-9 {
                background: url('../../images/home_page/partner_9.jpg') no-repeat center center;
            }
            .partner-li-10 {
                background: url('../../images/home_page/partner_10.jpg') no-repeat center center;
            }
            .partner-li-11 {
                background: url('../../images/home_page/partner_11.jpg') no-repeat center center;
            }
            .partner-li-12 {
                background: url('../../images/home_page/partner_12.jpg') no-repeat center center;
            }
        }
    }

    .footer {
        width: 100%;
        min-width: 1240px;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        align-items: center;
        .footer-title-wrap {
            width: 100%;
            min-width: 1240px;
            display: -webkit-flex;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 400px;
            background: #171c18 url('../../images/home_page/footer.png') no-repeat center;
            background-size: 100% 400px;
        }
        &-title {
            font-size: 48px;
            color: #fff;
            margin-top: 115px;
            font-weight: 100;
        }
        &-subtitle {
            font-size: 14px;
            color: #fff;
            margin-top: 25px;
            font-weight: 100;
            font-family: 'Helvetica Neue', 'Arial';
            letter-spacing: 18px;
        }
        &-sign-in {
            width: 110px;
            height: 46px;
            line-height: 40px;
            text-align: center;
            color: #fff;
            font-size: 16px;
            border: 1px solid #fff;
            background-color: transparent;
            cursor: pointer;
            margin-top: 41px;
            -webkit-border-radius: 5em 5em 5em 1em / 5em 5em 5em 1em;
            -moz-border-radius: 5em 5em 5em 1em / 5em 5em 5em 1em;
            border-radius: 5em 5em 5em 1em / 5em 5em 5em 1em;
        }
        .footer-contact-wrap {
            width: 100%;
            background: rgba(36, 45, 51, 1);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        &-contact {
            margin-top: 60px;
            color: rgba(180, 193, 204, 1);
        }
        &-address {
            margin-top: 16px;
            color: rgba(180, 193, 204, 1);
        }
        &-detail {
            margin-top: 25px;
            font-size: 14px;
            color: rgba(180, 193, 204, 1);
        }
        &-copyright {
            margin-top: 47px;
            font-size: 12px;
            color: #9FB9CC;
        }
        .brand {
            margin-bottom: 40px;
        }
    }
</style>
