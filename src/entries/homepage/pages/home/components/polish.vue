<template>
    <div class="page-polish-link">
        <span class="polish-link-title cursor-default">打磨招生每个环节，确保用好每个资源</span>
        <div class="polish-wrap">
            <ul class="polish-ul">
                <li class="polish-li" v-for="(item, index) in polish" :class="{'polish-li-reserver': index % 2 !== 0}">
                    <img class="polish-img" v-lazy="item.imgLink"/>
                    <div class="polish-title-wrap" :class="{'polish-title-wrap-reserver': index % 2 !== 0}">
                        <span class="polish-title">{{item.title}}</span>
                        <span class="polish-subtitle">{{item.subtitle}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import polish1 from '../../../images/home_page/polish_5.png'
    import polish2 from '../../../images/home_page/polish_6.png'
    import polish3 from '../../../images/home_page/polish_7.png'
    import polish4 from '../../../images/home_page/polish_8.png'

    export default {
        name: 'polish',
        data() {
            return {
                polish: [{
                    imgLink: polish1,
                    title: '用数据透析转化效率，优化分配',
                    subtitle: '全面详细的数据统计，让精细化运营成为可能',
                }, {
                    imgLink: polish2,
                    title: '智能便捷的分配与再分配',
                    subtitle: '7天不跟进，30天不成单自动重新再分配',
                }, {
                    imgLink: polish3,
                    title: '每次跟进不遗漏，让咨询真正协作起来',
                    subtitle: '跟进记录主管可见，还可以添加策略指导，自定义客户标签',
                }, {
                    imgLink: polish4,
                    title: '操作简单，随时随地，方便好用',
                    subtitle: '手机只需通过微信即可完成学员的跟进、试听、到访、报名等各种操作',
                }]
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .page-polish-link {
        width: 100%;
        min-width: 1240px;
        height: 1863px;
        background: #fff;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        align-items: center;
        .polish-link-title {
            font-size: 34px;
            color: #242D33;
            margin-top: 120px;
        }
        .polish-wrap {
            width: 1102px;
            height: 1465px;
            margin-top: 144px;
            .polish-ul {
                list-style: none;
                width: 100%;
                height: 100%;
            }
            .polish-li {
                display: -webkit-flex;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                margin-bottom: 150px;
            }
            .polish-li-reserver {
                flex-direction: row-reverse;
            }
            .polish-title-wrap {
                display: -webkit-flex;
                display: flex;
                flex-direction: column;
            }
            .polish-title-wrap-reserver {
            }
            .polish-title {
                font-size: 26px;
                color: rgba(36, 45, 51, 1);
                margin-bottom: 29px;
            }
            .polish-subtitle {
                font-size: 16px;
                color: rgba(99, 115, 127, 1);
            }
        }
    }
</style>
