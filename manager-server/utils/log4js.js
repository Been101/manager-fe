/*
 * @Author: laibin.zheng
 * @Date: 2022-04-24 14:58:09
 * @LastEditTime: 2022-04-24 18:41:29
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \manger-fe\manager-server\utils\log4js.js
 * 
 */
const log4js = require('log4js');

const levels = {
  trace: log4js.levels.TRACE,
  debug: log4js.levels.DEBUG,
  info: log4js.levels.INFO,
  warn: log4js.levels.WARN,
  error: log4js.levels.ERROR,
  fatal: log4js.levels.FATAL,
}

log4js.configure({
  appenders: {
    console: { type: 'console' },
    info: { type: 'file', filename: 'logs/all.log' },
    error: {
      type: 'dateFile',
      filename: 'logs/log',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true // 设置文件名称为 filename + pattern
    }
  },
  categories: {
    default: { appenders: [ 'console' ], level: 'debug' },
    info: {
      appenders: ['info', 'console'],
      level: 'info'
    },
    error: {
      appenders: [ 'error', 'console' ],
      level: 'error'
    }
  }
});

/**
 * 
 * @param {string} content 
 */
exports.debug = (content) => {
  const logger = log4js.getLogger();
  logger.level = levels.debug
  logger.debug(content)
}

exports.info = (content) => {
  const logger = log4js.getLogger('info');
  logger.level = levels.info
  logger.info(content)
}
exports.error = (content) => {
  const logger = log4js.getLogger('error');
  logger.level = levels.error
  logger.error(content)
}