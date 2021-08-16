/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
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
    domainWhiteList: [ 'http://localhost:7001', 'http://127.0.0.1:7001','http://localhost:7002', 'http://127.0.0.1:7002' ]
  }
  config.cors = {
    origin: ['http://localhost:8088'], //只允许这个域进行访问接口
    credentials: true, // 允许跨域请求携带cookies
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};