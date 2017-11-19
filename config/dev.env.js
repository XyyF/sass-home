var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    QN_PATH: 'ojejn0mbe.bkt.clouddn.co',
})
