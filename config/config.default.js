/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1610727191288_7038';

  //中间件执行顺序则是按照数组中的顺序执行
  config.middleware = ['auth'];
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/admin',
      options: {}
    }

  }
  //不需要验证token的路由
  config.jwt = {
    secret: 'admin' //自定义 token 的加密条件字符串,
    
  }
  config.auth = {
    ignore: ['/login'] // 登陆的接口不需要鉴权
  };
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  }
  
  config.multipart = {
    mode: 'file'
  };
  config.cors = {
    origin: '*', //只允许这个域进行访问接口
    credentials: true, // 允许跨域请求携带cookies
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  
  // 图片上传
  const userConfig = {
    static: {
      prefix: '/',
      dir: path.join(appInfo.baseDir, 'app/public')
    },
    uploadDir: 'app/public/upload',
    multipart: {
      /** 文件接收配置 */
      mode: 'file',
      cleanSchedule: {
        cron: '0 0 4 * * *',
      },
      fileSize: '100mb',
      /** 文件接收配置 */
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};