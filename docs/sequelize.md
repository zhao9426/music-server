sequelize 是一个广泛使用的 ORM 框架，它支持 MySQL、PostgreSQL、SQLite 和 MSSQL 等多个数据源。

ORM框架 帮助管理数据库层代码

安装
# npm install --save sequelize
# npm install --save mysql2

安装并配置`egg-sequelize`插件和`mysql2`模块
+ 安装
```bash
npm install --save --egg-sequelize mysql2
```
+ 在 `config/plugin.js` 中引入 `egg-sequelize` 插件
```bash
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
```
+ 在`config/config.default.js`中编写`sequelize`配置
```
config.sequelize = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  database: 'egg-sequelize-doc-default',
};
```

数据结构变更
使用`migrations`管理


模型定义
定义模型与表之间的映射关系 define
