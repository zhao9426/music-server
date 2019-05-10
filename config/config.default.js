'use strict';

module.exports = appInfo => {
  const config = exports = {
    buffer: true,
  };

  config.sequelize = {//orm的一个库，通过orm操作数据库
    dialect: 'mysql',//指定什么类型的数据库
    host: '47.100.53.48',//IP地址
    password: '794838927',//密码
    port: 8888,
    database: 'test',//数据库名字
  /*   pool: {
      max: 5,
      min: 1,
      idle: 2,
      acquire: 2
    } */
  };

  config.security = {//security的一个库用来配置安全
    domainWhiteList: ["http://localhost:8888", "http://localhost:3000"],//域名白名单
    csrf: {//配置csrffa'g
      enable: false,
      credentials: true,
      useSession: true,
      cookieName: "csrfToken",
      sessionName: 'csrfToken',
      queryName: '_csrf', 
      bodyName: "_csrf",
      headerName: "x-csrf-token"
    }
  };
  config.keys = appInfo.name + "_1543889310000_3741";//配置app.key

  config.middleware = [ 'errorHandler' ];//配置中间键
  config.errorHandler = {//配置错误处理中间键
    match: '/api',
  };
  config.view = {//配置模板引擎
    mapping: {
      '.ejs': 'ejs',
    },
  };

  config.multipart = {
    mode: 'file'
  }

  return config;
};
