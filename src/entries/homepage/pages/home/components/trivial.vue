<template>
    <div class="page-trivial">
        <span class="trivial-title cursor-default">重复琐碎的工作都交给校精灵</span>
        <div class="trivial-content-wrap">
            <template v-for="trival in trivals">
                <div class="card Y">
                    <div class="card-front">
                        <img v-lazy="trival.front.imgLink"/>
                        <p class="trivial-li-title">{{trival.front.title}}</p>
                        <p class="trivial-li-subtitle">{{trival.front.subtitle}}</p>
                        <p>...</p>
                    </div>
                    <div class="card-back">
                        <img class="cursor-default" v-lazy="trival.back.imgLink"/>
                        <p class="trivial-li-title">{{trival.title}}</p>
                        <p class="trivial-li-subtitle"
                           v-for="e in trival.back.subtitle"
                           :key="e"
                           :title="e">{{e}}</p>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import trivial1 from '../../../images/home_page/trivial_1.png'
    import trivial2 from '../../../images/home_page/trivial_2.png'
    import trivial3 from '../../../images/home_page/trivial_3.png'
    import trivial4 from '../../../images/home_page/trivial_4.png'
    import trivial5 from '../../../images/home_page/trivial_5.png'
    import trivial6 from '../../../images/home_page/trivial_6.png'

    export default {
        name: 'trivial',
        data() {
            return {
                trivals: [{
                    title: '智能排课',
                    back: {
                        imgLink: trivial4,
                        title: '智能排课',
                        subtitle: ['一键自动排课，自动检测时间冲突', '排课轻松准确，大大减轻教务负担', '调课改时间一键操作', '并自动发送通知,更加轻松'],
                    },
                    front: {
                        imgLink: trivial1,
                        title: '智能排课',
                        subtitle: '一键自动排课，自动检测时间冲突',
                    }
                }, {
                    title: '精准结算',
                    back: {
                        imgLink: trivial5,
                        title: '精准结算',
                        subtitle: ['自动统计学员课时消耗', '自动提醒学员续费', '自动计算教师课时消耗', '咨询师销售业绩，便于结算薪资'],
                    },
                    front: {
                        imgLink: trivial2,
                        title: '精准结算',
                        subtitle: '自动统计学员课时消耗',
                    }
                }, {
                    title: '便捷考勤',
                    back: {
                        imgLink: trivial6,
                        title: '便捷考勤',
                        subtitle: ['用微信即可轻松考勤', '家长&学员微信即刻收到到校通知、课时情况', '教师用微信即可随时查看自己课消情况', '教务、家长、教师考勤课消数据统一无误'],
                    },
                    front: {
                        imgLink: trivial3,
                        title: '便捷考勤',
                        subtitle: '用微信即可轻松考勤',
                    }
                }]
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .page-trivial {
        padding-top: 219px;
        width: 100%;
        height: 860px;
        min-width: 1200px;
        background: #f8f8f8 url('../../../images/home_page/wave-5.png') no-repeat top;
        background-size: 100% 169px;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        align-items: center;
        .trivial-content-wrap {
            margin-top: 99px;
            width: 55%;
            min-width: 1230px;
            height: 439px;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .trivial-title {
            font-size: 34px;
            color: #242D33;
        }
        .card {
            position: relative;
            perspective: 1000px;
            width: 350px;
            height: 380px;
            margin-left: 70px;
            cursor: pointer;
            float: left;
            img {
                width: 84px;
                height: 69px;
            }
            .trivial-li-title {
                text-align: center;
                color: #242D33;
                font-size: 26px;
                margin-top: 43px;
                margin-bottom: 18px;
            }
            .trivial-li-subtitle {
                color: #63737F;
                font-size: 16px;
                line-height: 28px;
            }
            .trivial-li-subtitle {
                display: block;
                width: 322px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: center;
            }
        }
        .trivial-hover {
            position: absolute;
            z-index: 0;
            .trivial-li {
                border: 1px solid #36B459;
                justify-content: flex-start;
                img {
                    width: 100%;
                    height: 150px;
                }
            }
        }

        .card .card-front {
            background: #fff;
            width: 300px;
            height: 360px;
            box-shadow: 0 15px 30px rgba(36, 45, 51, 0.06);
            justify-content: center;
            z-index: 1;
        }
        .card .card-back {
            background: #fff;
            width: 360px;
            height: 420px;
            margin-left: -30px;
            justify-content: flex-start;
            border: 1px solid #36B459;
            img {
                width: 100%;
                height: 150px;
            }
            z-index: 2;
        }
        .card .card-front,
        .card .card-back {
            display: -webkit-flex;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            left: 0;
            top: 0;
            transition: all 1s ease;
            transform-style: preserve-3d;
            backface-visibility: hidden;
            border-radius: 14px;
            .trivial-li-subtitle {
                display: block;
                width: 350px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: center;
            }
        }

        .card:hover .card-front {
            z-index: 2;
        }
        .card:hover .card-back {
            z-index: 1;
        }
        .Y .card-back {
            transform: rotateY(-180deg);
            -webkit-transform: rotateY(-180deg);
            -moz-transform: rotateY(-180deg);
        }
        .Y:hover .card-front {
            transform: rotateY(180deg);
            -webkit-transform: rotateY(180deg);
            -moz-transform: rotateY(180deg);
        }
        .Y:hover .card-back {
            transform: rotateY(0deg);
            -webkit-transform: rotateY(0deg);
            -moz-transform: rotateY(0deg);
        }
    }
</style>
