'use strict';

module.exports = appInfo => {
  const config = exports = {
    buffer: true,
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '47.100.53.48',
    password: '794838927',
    port: 8888,
    database: 'test',
  };
  config.security = {
    domainWhiteList: ["http://localhost:8888", "http://localhost:3000"],
    csrf: {
      enable: false,
      credentials: true,
      //  useSession: false,
      cookieName: "csrfToken",
      // sessionName: 'csrfToken',
      //  bodyName: '_csrf'
      //  queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: "_csrf", // 通过 body 传递 CSRF token 的默认字段为 _csrf
      headerName: "x-csrf-token" // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    }
  };
  config.keys = appInfo.name + "_1543889310000_3741";

  config.middleware = [ 'errorHandler' ];
  config.errorHandler = {
    match: '/api',
  };
  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };

  return config;
};
