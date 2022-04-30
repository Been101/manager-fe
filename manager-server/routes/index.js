/*
 * @Author: laibin.zheng
 * @Date: 2022-04-22 18:33:42
 * @LastEditTime: 2022-04-29 16:37:16
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \manager-server\routes\index.js
 * 
 */
const log4js = require('../utils/log4js')

const Router = require('@koa/router')
const router = new Router()
router.post('/user', async (ctx) => {
  console.log(ctx.headers)
  // log4js.error('this is error');
  // log4js.debug('this is debug');
  // log4js.info('this is info');
  ctx.body = {'user': 'this is user'}
})

module.exports = router