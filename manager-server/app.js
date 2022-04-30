/*
 * @Author: laibin.zheng
 * @Date: 2022-04-22 18:08:09
 * @LastEditTime: 2022-04-27 15:36:27
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \manager-server\app.js
 * 
 */
const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const router = require('./routes/index')

app.use(bodyparser());
app.use(router.routes());
app.use(router.allowedMethods({ 
    // throw: true, // 抛出错误，代替设置响应头状态
    // notImplemented: () => '不支持当前请求所需要的功能',
    // methodNotAllowed: () => '不支持的请求方式'
}));

app.listen(3000)