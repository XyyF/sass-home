<template>
    <div class="student-home">
        <span class="student-home-title cursor-default">极致体验，带来更深的信任</span>
        <div class="student-home-wrap">
            <div class="student-home-display">
                <div class="projection-wrap">
                    <div class="phone-img-wrap" :class="showStudentImg">
                        <div class="phone-voice" :class="showStudentImg"></div>
                        <div class="phone-frame" :class="showStudentImg">
                            <transition name="fade" mode="out-in">
                                <img class="phone-img" v-lazy="studentPhone.img" :key="showStudentImg"/>
                            </transition>
                        </div>
                    </div>
                    <img class="projection" src="../../../images/home_page/projection_1.png"/>
                </div>
                <span class="student-home-subtitle cursor-default">家长&学员页面展示</span>
            </div>
            <div class="student-home-buttons">
                <div class="buttons-wrap">
                    <div class="wrap col-one">
                        <div :class="{'homework-wrap': isShowDetail('homework')}" class="buttons homework-wrap-default"
                             @mouseover="changeStudentImg('homework')">
                            <img v-if="isShowDetail('homework')" class="shortcut-icon" src="../../../images/home_page/homework_fff_1.png"/>
                            <img class="shortcut-icon" src="../../../images/home_page/homework_11.png" v-else/>
                            <p class="label">作业记录</p>
                        </div>
                        <div :class="{'remark-records': isShowDetail('remarkRecords')}" class="buttons remark-records-default"
                             @mouseover="changeStudentImg('remarkRecords')">
                            <img v-if="isShowDetail('remarkRecords')" class="shortcut-icon" src="../../../images/home_page/comment_fff_1.png"/>
                            <img class="shortcut-icon" src="../../../images/home_page/comment_1.png" v-else/>
                            <p class="label">课堂点评</p>
                        </div>
                        <div :class="{'class-schedule': isShowDetail('classSchedule')}" class="buttons class-schedule-default"
                             @mouseover="changeStudentImg('classSchedule')">
                            <img v-if="isShowDetail('classSchedule')" class="shortcut-icon" src="../../../images/home_page/schedule_fff_1.png"/>
                            <img class="shortcut-icon" src="../../../images/home_page/schedule_1.png" v-else/>
                            <p class="label">课程表</p>
                        </div>
                    </div>
                    <div class="wrap col-two">
                        <div :class="{'my-class': isShowDetail('myClass')}" class="buttons my-class-default" @mouseover="changeStudentImg('myClass')">
                            <img v-if="isShowDetail('myClass')" class="shortcut-icon" src="../../../images/home_page/class_fff_1.png"/>
                            <img class="shortcut-icon" src="../../../images/home_page/class_1.png" v-else/>
                            <p class="label">我的班级</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import studentPhone1 from '../../../images/home_page/class-schedule-1.png'
    import studentPhone2 from '../../../images/home_page/my-class-1.png'
    import studentPhone3 from '../../../images/home_page/remrak-records-1.png'
    import studentPhone4 from '../../../images/home_page/homework-1.png'
    import studentDefault from '../../../images/home_page/home-default.jpg'

    export default {
        name: 'student-home-page',
        data() {
            return {
                showStudentImg: 'defalut',
            }
        },
        computed: {
            studentPhone() {
                return {
                    'classSchedule': {img: studentPhone1},
                    'myClass': {img: studentPhone2},
                    'remarkRecords': {img: studentPhone3},
                    'homework': {img: studentPhone4},
                    'defalut': {img: studentDefault},
                }[this.showStudentImg] || {}
            },
        },
        methods: {
            changeStudentImg(str) {
                this.showStudentImg = str
            },
            isShowDetail(str) {
                return this.showStudentImg === str
            },
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .student-home {
        padding-top: 229px;
        background: #f8f8f8 url('../../../images/home_page/wave-5.png') no-repeat top;
        background-size: 100% 150px;
        width: 100%;
        min-width: 1240px;
        padding-bottom: 79px;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        align-items: center;
        &-title {
            font-size: 34px;
            color: #242D33;
            margin: 0 auto 104px;
        }
        &-wrap {
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            margin: 0 auto;
            position: relative;
            .student-home-display {
                display: -webkit-flex;
                display: flex;
                flex-direction: column;
                align-items: center;
                .projection-wrap {
                    width: 445px;
                    height: 493px;
                    position: relative;
                    .phone-img-wrap {
                        width: 294px;
                        height: 100%;
                        margin: 0 auto;
                        border: 1px solid;
                        background: #fff;
                        border-bottom: transparent;
                        border-top-left-radius: 30px;
                        border-top-right-radius: 30px;
                        .phone-voice {
                            width: 60px;
                            height: 8px;
                            border: 1px solid;
                            border-radius: 4px;
                            margin: 36px auto 31px;
                            background: #fff;
                        }
                        .phone-frame {
                            width: 260px;
                            height: 418px;
                            border: 1px solid;
                            border-bottom: transparent;
                            margin: 0 auto;
                        }
                        &.classSchedule, .classSchedule {
                            border-color: #4BCBE7;
                        }
                        &.myClass,.myClass {
                            border-color: #53CB65;
                        }
                        &.remarkRecords, .remarkRecords {
                            border-color: #F9B845;
                        }
                        &.homework, .homework {
                            border-color: #C092F4;
                        }
                    }
                    .projection {
                        position: absolute;
                        bottom: -45px;
                        left: 0;
                        width: 445px;
                        height: 76px;
                    }
                }
                .student-home-subtitle {
                    margin-top: 49px;
                    color: #242D33;
                    font-size: 14px;
                }
            }
            .phone-img {
                width: 258px;
                height: 418px;
            }
            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s
            }
            .fade-enter, .fade-leave-to {
                opacity: 0
            }
            .student-home-buttons {
                display: -webkit-flex;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .buttons-wrap {
                    display: -webkit-flex;
                    display: flex;
                    flex-direction: row;
                    margin-top: 67px;
                }
            }
            .buttons-title {
                font-size: 26px;
                color: #242D33;
                margin-bottom: 67px;
            }
            .shortcut-icon {
                max-width: 31px;
                max-height: 31px;
            }
            .wrap {
                display: -webkit-flex;
                display: flex;
                flex-wrap: wrap;
                height: 204px;
            }
            // 手动设置列的比例
            .wrap.col-one {
                width: 271px;
            }
            .wrap.col-two {
                width: 143px;
            }
            .buttons {
                display: -webkit-flex;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                width: calc(50% - 12px);
                height: calc(50% - 12px);
                margin: 4px;
                border-radius: 3px;
                background-color: #fff;
                color: #000;
                img {
                    margin-bottom: 9px;
                }
            }
            .homework-wrap-default {
                border: 1px solid #C092F4;
            }
            .homework-wrap {
                background-color: #C092F4;
                color: #fff;
            }
            .remark-records-default {
                border: 1px solid #F9B845;
            }
            .remark-records {
                background-color: #F9B845;
                color: #fff;
            }
            .class-schedule-default {
                width: calc(100% - 12px);
                border: 1px solid #4BCBE7;
                display: -webkit-flex;
                display: flex;
                flex-direction: row;
                p {
                    margin: -8px 0 0 13px;
                }
            }
            .class-schedule {
                background-color: #4BCBE7;
                color: #fff;
            }
            .my-class-default {
                width: calc(100% - 12px);
                height: calc(100% - 12px);
                border: 1px solid #53CB65;
            }
            .my-class {
                background-color: #53CB65;
                color: #fff;
            }
        }
    }
</style>
