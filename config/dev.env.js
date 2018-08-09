'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const commonConfig = require('../commonConfig')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: commonConfig.REQUEST_URL
})
