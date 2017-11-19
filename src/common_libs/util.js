/**
 * 提供在所有页面都可以使用的通用的方法
 */
export default {
    trimAll,
    addZero,
    onlyNum,
    closeWin,
    targetSelf,
    loadJS,
    formatStamp,
    $,
    isEmptyObject,
    getBrowserVersion,
    getUrlQuery,
    isSameArray,
    safeHtml,
};

/**
 * 删除所有空格
 * @param {string} str
 * @return {string}
 */
export function trimAll(str) {
    return str.replace(/\s/g, '')
}

/**
 * 小于10，补0函数，常用于时间结构
 * @param {number} num
 * @return {string}
 */
export function addZero(num) {
    return num < 10 ? `0${num}` : num
}

/**
 * 去除非数字字符
 * @param {string} str
 * @return {string}
 */
export function onlyNum(str) {
    return str ? str.replace(/\D/ig, '') : str
}

/**
 * 关闭当前标签页
 */
export function closeWin() {
    window.opener = null
    window.open('', '_self')
    window.close()
}

/**
 * 在当前页面跳转，external是否为外部域名
 * @param {string} url
 * @param {boolean?} external
 */
export function targetSelf(url, external = false) {
    if (external) {
        window.top.location.href = url
    } else {
        window.top.location.href = `${window.location.protocol}//${window.location.host}${url}`
    }
}

/**
 * 异步加载js，id属性防止重复加载
 * @param {string} url
 * @param {string?} id
 */
export function loadJS(url, id) {
    if (document.getElementById(id)) {
        return
    }
    const fjs = document.getElementsByTagName('script')[0]
    const js = document.createElement('script')
    if (id) {
        js.id = id
    }
    js.src = url
    fjs.parentNode.insertBefore(js, fjs)
}

/**
 * 时间戳转世界时间
 * @param {number} time
 * @param {string} format 时间格式字符串 "yyyy-MM-dd EEE hh:mm:ss"
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * @return {string}
 * @example
 * "yyyy-MM-dd hh:mm:ss.S" ==> 2006-07-02 08:09:04.423
 * "yyyy-M-d h:m:s.S"      ==> 2006-7-2 8:9:4.18
 */
export function formatStamp(time, format) {
    format = format === null ? 'yyyy/MM/dd hh:mm' : format
    const date = new Date()
    date.setTime(time * 1000)
    const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))
    for (const k in o) {
        if (new RegExp(`(${k})`).test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)))
    }
    return format
}

/**
 * 获取Dom元素
 * @param {string}
 */
export const $ = document.querySelector.bind(document)

/**
 * 检测一个对象是否是空对象
 * @param {object} obj
 * @return {boolean}
 */
export function isEmptyObject(obj) {
    for (const key in obj) {
        // 如果obj是Object.create(null)创建出来的，就没有prototype，也没有hasOwnProperty
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

/*
 * 设备检测
 * @return {{isIos:Function, isAndroid:Function}}
 */
export function getBrowserVersion() {
    const ua = navigator.userAgent || navigator.vendor || window.opera
    const uaInfo = {
        ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i),
        android: ua.match(/Android/i) || ua.match(/Linux/i)
    }
    return {
        isIos() {
            return uaInfo.ios
        },
        isAndroid() {
            return uaInfo.android
        }
    }
}

/**
 * 获取url中的指定参数
 * @param   {string} name url中的参数名字
 * @param   {string?} url 不填则使用当前地址
 * @returns {null | string} 若获取失败则返回null
 */
export function getUrlQuery(name, url) {
    const matcher = (url || window.location.search).match(`${name}=([^&#]+)`);
    if (!matcher || matcher.length < 2) {
        console.log(`No "${name}" in url`);
        return null;
    }
    return matcher[1];
}

/**
 * 比较两个数组是否相同
 * @param {Array} array1
 * @param {Array} array2
 * @param {Function} [comparator] 数组元素的比较器，传入参数为两个元素值，返回boolean
 */
export function isSameArray(array1, array2, comparator) {
    if (array1.length !== array2.length) {
        return false
    } else if (!array1.length) {
        return true
    }
    if (comparator) {
        return array1.every(item1 => array2.some(item2 => comparator(item1, item2)))
    } else {
        return array1.every(item => array2.includes(item))
    }
}

/**
 * 对用户输入的字符串进行转义，防止xss攻击。需要用v-html方式显示的用户内容一定要调用此方法
 * @param {string} str
 */
export function safeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/(\r\n|\n)/g, '<br>')
}
