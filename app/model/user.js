'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
 
  const User = app.model.define('User', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    pwd: STRING(20),
    role: INTEGER,
    avatar: STRING,
    created_at: DATE,
    updated_at: DATE,
  });
  return User;
};
