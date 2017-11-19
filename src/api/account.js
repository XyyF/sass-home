/**
 * Created by lnk on 2017/1/17.
 */

import httpRequestor from '../common_libs/http_requestor'

/**
 * 登录
 * @param {string} userName
 * @param {string} password
 * @return {Promise}
 */
export const signin = (userName, password) => {
    return httpRequestor.post('/account/signin', {
        userName,
        password
    })
}

/**
 * 登出
 * @return {Promise}
 */
export const signout = () => {
    return httpRequestor.post('/account/signout')
}

/**
 * 获取自己的个人信息
 * @return {Promise}
 */
export const myaccount = () => {
    return httpRequestor.get('/account/myaccount')
}
