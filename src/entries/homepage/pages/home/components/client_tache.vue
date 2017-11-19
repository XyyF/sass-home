<template>
    <div class="page-client-link">
        <span class="client-link-title">升级每个环节，全方位为机构赋能</span>
        <div class="ball-wrap">
            <div>
                <transition name="scale" mode="out-in">
                    <div class="ball-animation-wrap" v-if="showBallDetail === ''" :key="'ball'">
                        <div :class="{'ballAnima': ballAnimation}" class="ball-wrap">
                            <div class="ball data-analyze-ball" @click="clickBall('dataAnalyze')" @mouseover="clearTimer" @mouseout="setTimer"><span>数据分析</span><div class="data-inwrap ball-inwrap"></div>
                            </div>
                            <div class="ball class-teach-ball" @click="clickBall('classTeach')" @mouseover="clearTimer" @mouseout="setTimer"><span>课堂教学</span><div class="class-inwrap ball-inwrap"></div>
                            </div>
                            <div class="ball operation-ball" @click="clickBall('operation')" @mouseover="clearTimer" @mouseout="setTimer">
                                <span>运营升级</span><div class="operation-inwrap ball-inwrap"></div></div>
                            <div class="ball enroll-ball" @click="clickBall('enroll')" @mouseover="clearTimer" @mouseout="setTimer"><span>市场招生</span><div class="enroll-inwrap ball-inwrap"></div>
                            </div>
                            <div class="ball praise-ball" @click="clickBall('praise')" @mouseover="clearTimer" @mouseout="setTimer"><span>口碑传递</span><div class="praise-inwrap ball-inwrap"></div>
                            </div>
                            <div class="ball service-ball" @click="clickBall('service')" @mouseover="clearTimer" @mouseout="setTimer">
                                <span>学员服务</span><div class="service-inwrap ball-inwrap"></div></div>
                        </div>
                    </div>
                    <div class="ball-detail" v-else :key="'detail'">
                        <div class="ball-detail-title-wrap">
                            <img class="ball-detail-close" @click="hideBallDetail" src="../../../images/home_page/close.png"/>
                            <span class="ball-detail-title">{{ballDetail.title}}</span>
                        </div>
                        <table class="ball-detail-table" cellspacing="0">
                            <tbody>
                            <tr class="ball-detail-thead">
                                <th class="pain-spot" v-if="hasPainSpot"><span>机构痛点</span></th>
                                <th class="advantage" :class="{'only-advantage': !hasPainSpot}"><span>解决方案</span></th>
                            </tr>
                            <tr v-for="(item, index) in ballDetail.advantage">
                                <td class="pain-spot-detail" v-if="hasPainSpot"><span class="error">{{ballDetail.painSpot[index]}}</span></td>
                                <td class="advantage-detail" :class="{'only-advantage-detail': !hasPainSpot}"><span class="correct">{{item}}</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'client-tache',
        data() {
            return {
                showBall: false,
                showBallDetail: '',
                ballAnimation: false,
                timer: '',
            }
        },
        computed: {
            ballDetail() {
                return {
                    'classTeach': {
                        title: '课堂教学',
                        painSpot: ['考勤纸质化，可查询性差', '学员信息记录难，查询难', '学员数据流转，极易出错'],
                        advantage: ['微信考勤轻松，课消课表实时更新，随时可查', '电子学员信息档案，随教学自动生成，轻松洞察', '系统操作便捷，数据转移清晰无误']
                    },
                    'enroll': {
                        title: '市场招生',
                        painSpot: ['零散的客户名单，管理难、难协作、难分析', '沟通基本靠吼，成本高，协作不流畅', '意向学员跟进不及时，流失性大'],
                        advantage: ['客户数据云端化，轻松管理，协作分析', '角色信息透明化，任务自动指派，配合协作更流畅', '学员跟进、到访试听都有记录，主管操作更便捷']
                    },
                    'service': {
                        title: '学员服务',
                        painSpot: ['零散的客户名单，管理难、难协作、难分析', '沟通基本靠吼，成本高，协作不流畅', '意向学员跟进不及时，流失性大'],
                        advantage: ['客户数据云端化，轻松管理，协作分析', '角色信息透明化，任务自动指派，配合协作更流畅', '学员跟进、到访试听都有记录，主管操作更便捷']
                    },
                    'dataAnalyze': {
                        title: '数据分析',
                        painSpot: ['统计多个校区数据，难上加难', '数据分析单一，弊端较多，不全面'],
                        advantage: ['从多维度进行数据分析，帮您洞悉全局', '各个校区全方面精准数据，自动生成，省时省力']
                    },
                    'praise': {
                        title: '口碑推广',
                        painSpot: [],
                        advantage: ['学员家长分享课堂精美点评，到朋友圈，进行熟人传播', '学员家长分享活动给好友得奖励，促使分享带动新学员', '作业、课堂、成绩、考勤等数据可外化，可分享，并带动传递']
                    },
                    'operation': {
                        title: '运营升级',
                        painSpot: [],
                        advantage: ['全面的学员数据，升级课堂教学', '细致的市场数据，升级渠道推广', '及时的咨询数据，升级渠道推广', '准确的运营数据，升级课程设置']
                    },
                }[this.showBallDetail] || {}
            },
            hasPainSpot() {
                return JSON.stringify(this.ballDetail) !== '{}' ? !!this.ballDetail.painSpot.length : false
            },
        },
        methods: {
            clickBall(str) {
                this.showBallDetail = str
            },
            hideBallDetail() {
                if (this.showBallDetail !== '') {
                    this.showBallDetail = ''
                }
                if (this.timer === '') {
                    this.setTimer()
                }
            },
            clearTimer() {
                window.clearInterval(this.timer)
                this.timer = ''
                this.ballAnimation = false
            },
            setTimer() {
                this.timer = setInterval(carInfoInterval, 1500)
                const self = this;

                function carInfoInterval() {
                    self.ballAnimation = !self.ballAnimation
                }
            },
        },
        beforeMount() {
            this.setTimer()
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../../../components/font-mixin";

    .page-client-link {
        width: 100%;
        min-width: 1240px;
        height: 990px;
        background: url('../../../images/home_page/client-link_3.png') no-repeat 50% 20px;
        background-size: 1306px 880px;
        .ball-wrap {
            height: 740px;
            width: 100%;
        }
        .ball-animation-wrap {
            width: 910px;
            height: 660px;
            margin: 0 auto;
            position: relative;
            .ball-wrap {
                -webkit-transition: all 1.5s;
                -moz-transition: all 1.5s;
                -ms-transition: all 1.5s;
                -o-transition: all 1.5s;
                transition: all 1.5s;
            }
            .ballAnima {
                opacity: 0.3;
            }
        }
        .scale-enter-active {
            animation: ballShow .7s linear reverse;
        }
        .scale-leave-active {
            animation: ballHide .7s linear;
        }
        .scale-enter {
            animation: ballShow .7s linear reverse;
        }
        .scale-leave-to {
            animation: ballHide .7s linear;
        }
        @keyframes ballHide {
            0% {
                transform: scaleX(1.00) scaleY(1.00);
                opacity: 1;
            }
            100% {
                transform: scaleX(0.00) scaleY(0.00);
                opacity: 0;
            }
        }
        @keyframes ballShow {
            0% {
                transform: scaleX(1.00) scaleY(1.00);
                opacity: 1;
            }
            30% {
                transform: scaleX(1.20) scaleY(1.20);
            }
            100% {
                transform: scaleX(0.00) scaleY(0.00);
                opacity: 0;
            }
        }
        .ball-detail {
            width: 890px;
            height: 640px;
            margin: 0 auto;
            background: url('../../../images/home_page/client-detial.png') no-repeat center;
            background-size: 570px 570px;
            display: -webkit-flex;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
        }
        .ball-detail-title-wrap {
            margin-bottom: 62px;
            position: relative;
        }
        .ball-detail-close {
            cursor: pointer;
            position: absolute;
            left: 230px;
            top: -48px;
            -webkit-transition: all 1.5s ease;
            -moz-transition: all 1.5s ease;
            -ms-transition: all 1.5s ease;
            -o-transition: all 1.5s ease;
            transition: all 1.5s ease;
            &:hover {
                transform: scaleX(1.10) scaleY(1.10);
            }
        }
        .ball-detail-title {
            font-size: 48px;
            @include default-font-light;
            color: #05C062;
        }
        .ball-detail-table {
            width: 920px;
            text-align: center;
            position: relative;
            box-shadow: 0 0 25px rgba(187, 187, 187, 1);
            border-radius: 10px;
            border: 0 transparent;
            td {
                font-size: 14px;
                width: 458px;
                height: 60px;
                background: rgba(248, 248, 248, 1);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            tr:last-child td:first-child {
                border-bottom-left-radius: 10px;
                border-bottom: 0;
            }
            tr:last-child td:last-child {
                border-bottom-right-radius: 10px;
                border-bottom: 0;
            }
            .pain-spot-detail {
                color: rgba(99, 115, 127, 1);
                text-align: left;
                padding-left: 30px;
                border-bottom: 4px #fff solid;
                border-right: 4px #fff solid;
                .error:before {
                    content: url('../../../images/home_page/error.jpg');
                    margin-right: 19px;
                }
            }
            .advantage-detail {
                color: #36B459;
                text-align: left;
                padding-left: 30px;
                border-bottom: 4px #fff solid;
                background: rgba(241, 253, 248, 1);
                .correct:before {
                    content: url('../../../images/home_page/correct.jpg');
                    margin-right: 19px;
                }
            }
            .only-advantage-detail {
                text-align: center;
            }
            th:only-child {
                border-top-left-radius: 10px;
            }
            .ball-detail-thead {
                color: #fff;
                height: 64px;
                line-height: 64px;
                .advantage {
                    font-size: 26px;
                    font-family: "PingFangSC-Regula", serif;
                    border-top-right-radius: 10px;
                    background: linear-gradient(-90deg, rgba(0, 194, 223, 1), rgba(8, 221, 100, 1), rgba(47, 225, 115, 1));
                    background: -o-linear-gradient(-90deg, rgba(0, 194, 223, 1), rgba(8, 221, 100, 1), rgba(47, 225, 115, 1));
                    background: -webkit-linear-gradient(-90deg, rgba(0, 194, 223, 1), rgba(8, 221, 100, 1), rgba(47, 225, 115, 1));
                    background: -moz-linear-gradient(180deg, rgba(0, 194, 223, 1), rgba(8, 221, 100, 1), rgba(47, 225, 115, 1));
                    span:before {
                        content: '';
                        background: url('../../../images/home_page/advantage.png') no-repeat;
                        background-size: 28px 28px;
                        position: absolute;
                        width: 28px;
                        height: 28px;
                        top: 17px;
                        left: 601px;
                    }
                }
                .only-advantage span:before {
                    content: '';
                    background: url('../../../images/home_page/advantage.png') no-repeat;
                    background-size: 28px 28px;
                    position: absolute;
                    width: 28px;
                    height: 28px;
                    top: 17px;
                    left: 371px;
                }
                .pain-spot {
                    border-right: 4px solid #fff;
                    font-size: 26px;
                    font-family: "PingFangSC-Regula", serif;
                    border-top-left-radius: 10px;
                    background: linear-gradient(-90deg, rgba(246, 61, 69, 1), rgba(253, 185, 45, 1));
                    background: -o-linear-gradient(-90deg, rgba(246, 61, 69, 1), rgba(253, 185, 45, 1));
                    background: -webkit-linear-gradient(-90deg, rgba(246, 61, 69, 1), rgba(253, 185, 45, 1));
                    background: -moz-linear-gradient(180deg, rgba(246, 61, 69, 1), rgba(253, 185, 45, 1));
                    span:before {
                        content: '';
                        background: url('../../../images/home_page/pain-spot.png') no-repeat;
                        background-size: 28px 28px;
                        position: absolute;
                        width: 28px;
                        height: 28px;
                        top: 17px;
                        left: 140px;
                    }
                }
            }
        }
        .client-link-title {
            display: block;
            width: 100%;
            font-size: 34px;
            color: #242D33;
            padding-top: 125px;
            text-align: center;
        }
        .data-analyze-ball {
            width: 120px;
            height: 120px;
            background: linear-gradient(180deg, rgba(244, 149, 98, 1), rgba(253, 203, 75, 1));
            background: -o-linear-gradient(180deg, rgba(244, 149, 98, 1), rgba(253, 203, 75, 1));
            background: -webkit-linear-gradient(180deg, rgba(244, 149, 98, 1), rgba(253, 203, 75, 1));
            background: -moz-linear-gradient(180deg, rgba(244, 149, 98, 1), rgba(253, 203, 75, 1));
            top: 465px;
            left: 239px;
            .data-inwrap {
                width: 136px;
                height: 136px;
                border: 8px solid rgba(254, 192, 20, 0.2);
                -webkit-box-shadow: 0 0 20px 20px rgba(254, 192, 20, 0.1);
                -moz-box-shadow: 0 0 20px 20px rgba(254, 192, 20, 0.1);
                box-shadow: 0 0 20px 20px rgba(254, 192, 20, 0.1);
                top: -10px;
                left: -10px;
            }
        }
        .class-teach-ball {
            width: 120px;
            height: 120px;
            margin-top: -60px;
            margin-left: -60px;
            background: linear-gradient(180deg, rgba(81, 233, 156, 1), rgba(10, 199, 106, 1));
            background: -o-linear-gradient(180deg, rgba(81, 233, 156, 1), rgba(10, 199, 106, 1));
            background: -webkit-linear-gradient(180deg, rgba(81, 233, 156, 1), rgba(10, 199, 106, 1));
            background: -moz-linear-gradient(180deg, rgba(81, 233, 156, 1), rgba(10, 199, 106, 1));
            top: 128px;
            left: 572px;
            .class-inwrap {
                width: 132px;
                height: 132px;
                border: 6px solid rgba(25, 215, 122, 0.2);
                -webkit-box-shadow: 0 0 20px 20px rgba(25, 215, 122, 0.1);
                -moz-box-shadow: 0 0 20px 20px rgba(25, 215, 122, 0.1);
                box-shadow: 0 0 20px 20px rgba(25, 215, 122, 0.1);
                top: -8px;
                left: -8px;
            }
        }
        .operation-ball {
            width: 110px;
            height: 110px;
            margin-top: -55px;
            margin-left: -55px;
            background: linear-gradient(180deg, rgba(0, 147, 220, 1), rgba(0, 195, 220, 1));
            background: -o-linear-gradient(180deg, rgba(0, 147, 220, 1), rgba(0, 195, 220, 1));
            background: -webkit-linear-gradient(180deg, rgba(0, 147, 220, 1), rgba(0, 195, 220, 1));
            background: -moz-linear-gradient(180deg, rgba(0, 147, 220, 1), rgba(0, 195, 220, 1));
            top: 146px;
            left: 129px;
            .operation-inwrap {
                width: 122px;
                height: 122px;
                border: 6px solid rgba(0, 160, 223, 0.2);
                -webkit-box-shadow: 0 0 20px 20px rgba(0, 160, 223, 0.1);
                -moz-box-shadow: 0 0 20px 20px rgba(0, 160, 223, 0.1);
                box-shadow: 0 0 20px 20px rgba(0, 160, 223, 0.1);
                top: -8px;
                left: -8px;
            }
        }
        .enroll-ball {
            width: 100px;
            height: 100px;
            margin-top: -50px;
            margin-left: -50px;
            background: linear-gradient(180deg, rgba(10, 188, 199, 1), rgba(0, 237, 205, 1));
            background: -o-linear-gradient(180deg, rgba(10, 188, 199, 1), rgba(0, 237, 205, 1));
            background: -webkit-linear-gradient(180deg, rgba(10, 188, 199, 1), rgba(0, 237, 205, 1));
            background: -moz-linear-gradient(180deg, rgba(10, 188, 199, 1), rgba(0, 237, 205, 1));
            top: 260px;
            left: 369px;
            .enroll-inwrap {
                width: 108px;
                height: 108px;
                border: 4px solid rgba(25, 215, 122, 0.2);
                -webkit-box-shadow: 0 0 20px 20px rgba(25, 215, 122, 0.1);
                -moz-box-shadow: 0 0 20px 20px rgba(25, 215, 122, 0.1);
                box-shadow: 0 0 20px 20px rgba(25, 215, 122, 0.1);
                top: -6px;
                left: -6px;
            }
        }
        .praise-ball {
            width: 90px;
            height: 90px;
            margin-top: -45px;
            margin-left: -45px;
            background: linear-gradient(180deg, rgba(110, 160, 196, 1), rgba(184, 217, 241, 1));
            background: -o-linear-gradient(180deg, rgba(110, 160, 196, 1), rgba(184, 217, 241, 1));
            background: -webkit-linear-gradient(180deg, rgba(110, 160, 196, 1), rgba(184, 217, 241, 1));
            background: -moz-linear-gradient(180deg, rgba(110, 160, 196, 1), rgba(184, 217, 241, 1));
            top: 341px;
            left: 836px;
            .praise-inwrap {
                width: 102px;
                height: 102px;
                border: 6px solid rgba(159, 185, 204, 0.2);
                -webkit-box-shadow: 0 0 20px 20px rgba(159, 185, 204, 0.1);
                -moz-box-shadow: 0 0 20px 20px rgba(159, 185, 204, 0.1);
                box-shadow: 0 0 20px 20px rgba(159, 185, 204, 0.1);
                top: -8px;
                left: -8px;
            }
        }
        .service-ball {
            width: 90px;
            height: 90px;
            margin-top: -45px;
            margin-left: -45px;
            background: linear-gradient(180deg, rgba(252, 127, 177, 1), rgba(255, 101, 101, 1));
            background: -o-linear-gradient(180deg, rgba(252, 127, 177, 1), rgba(255, 101, 101, 1));
            background: -webkit-linear-gradient(180deg, rgba(252, 127, 177, 1), rgba(255, 101, 101, 1));
            background: -moz-linear-gradient(180deg, rgba(252, 127, 177, 1), rgba(255, 101, 101, 1));
            top: 455px;
            left: 669px;
            .service-inwrap {
                width: 102px;
                height: 102px;
                border: 6px solid rgba(254, 108, 120, 0.2);
                -webkit-box-shadow: 0 0 20px 20px rgba(254, 108, 120, 0.1);
                -moz-box-shadow: 0 0 20px 20px rgba(254, 108, 120, 0.1);
                box-shadow: 0 0 20px 20px rgba(254, 108, 120, 0.1);
                top: -8px;
                left: -8px;
            }
        }
        .ball-inwrap {
            position: absolute;
            border-radius: 50%;
        }
        .ball {
            display: -webkit-flex;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            border: 2px solid #fff;
            color: #fff;
            border-radius: 50%;
            position: absolute;
            cursor: pointer;
            span {
                display: inline-block;
                width: 43px;
                word-wrap: break-word;
            }
            &:hover {
                animation: hoverBall 1s linear;
            }
            @keyframes hoverBall {
                0% {
                    transform: scaleX(1.00) scaleY(1.00);
                }
                50% {
                    transform: scaleX(1.20) scaleY(1.20);
                }
                100% {
                    transform: scaleX(1.00) scaleY(1.00);
                }
            }
        }
    }
</style>
