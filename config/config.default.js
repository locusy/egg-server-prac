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
  config.keys = appInfo.name + '_1586586576663_1118';

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'tian接口',
      description: 'zhi接口 swagger-ui for egg', version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    enableSecurity: false,
    // enableValidate: true,
    routerMap: true,
    enable: true,
  }

  config.mongoose = {
    url: 'mongodb://47.94.208.76:27017/test',
    options: {
      // useMongoClient: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    }, 
  }

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 以/api开头的需要鉴权
  config.jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: /^\/api/, // optional
 }

  return {
    ...config,
    ...userConfig,
  };
};
