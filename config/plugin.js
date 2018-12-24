'use strict';

// had enabled by egg
exports.static = true;
exports.ejs = {
    cache: false,
    debug: true,
    enable: true,
    package: 'egg-view-ejs' 
};
exports.mysql = {
    enable: true,
    package: 'egg-mysql'
}

exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};
