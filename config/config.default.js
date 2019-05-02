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
  /*   pool: {
      max: 5,
      min: 1,
      idle: 2,
      acquire: 2
    } */
  };

  config.security = {
    domainWhiteList: ["http://localhost:8888", "http://localhost:3000"],
    csrf: {
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

  config.multipart = {
    mode: 'file'
  }

  return config;
};
