'use strict';

// had enabled by egg
exports.static = true;
exports.ejs = {
  cache: false,
  debug: true,
  enable: true,
  package: 'egg-view-ejs',
};

/* exports.mysql = {
    enable: true,
    package: 'egg-mysql'
} */

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.cors = {
  enable: true,
  package: "egg-cors",
  origin: "http://localhost:8888/,http://localhost",
  credentials: true,
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Max-Age": 1728000,
  allowHeaders:
    "Access-Control-Allow-Credentials,Access-Control-Request-Headers,Access-Control-Max-Age",
  allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS"
};
