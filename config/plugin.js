'use strict';

// had enabled by egg
exports.static = true;//配置支持静态文件服务的目录
exports.ejs = {//配置模板引擎
  cache: false,//是否启用模板缓存
  debug: true,//调试模式
  enable: true,//
  package: 'egg-view-ejs',
};

/* exports.mysql = {
    enable: true,
    package: 'egg-mysql'
} */

exports.sequelize = {//配置egg插件，通过它来链接数据库
  enable: true,
  package: 'egg-sequelize',
};

exports.validate = {//配置数据验证
  enable: true,
  package: 'egg-validate',
};

exports.cors = {//配置跨域
  enable: true,
  package: "egg-cors",
  origin: "http://localhost:8888/,http://localhost",//允许哪些域可跨
  credentials: true,//是否携带cookie
  "Access-Control-Allow-Credentials": true,//允许请求头携带这个字段
  "Access-Control-Max-Age": 1728000,//允许最大时间
  allowHeaders://允许请求头有这些字段
    "Access-Control-Allow-Credentials,Access-Control-Request-Headers,Access-Control-Max-Age",
  allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS"//允许请求头有这些方法
};
