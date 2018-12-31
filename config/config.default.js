'use strict';

module.exports = appInfo => {
  const config = exports = {
    buffer: true
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '47.100.53.48',
    password: "794838927",
    port: 8888,
    database: 'test',
  };
  config.security = {
    csrf: {
      enable: true,
    //  queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
    //  bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    //  headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  },

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543889310000_3741';

  // add your config here
  config.middleware = [];
  config.view = {
    mapping: {
      '.ejs': 'ejs'
    }
  }

  return config;
};

/* exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: '47.100.53.48',
    // 端口号
    port: '8888',
    // 用户名
    user: 'root',
    // 密码
    password: '794838927',
    // 数据库名
    database: 'music',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: true,
}; */


