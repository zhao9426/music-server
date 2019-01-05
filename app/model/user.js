'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('User', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    pwd: STRING(20),
    created_at: DATE,
    updated_at: DATE,
  });

  User.findByNameAndPwd = async (name, pwd) => {
      return await User.findOne({
          where: {
              name,
              pwd
          }
      })
  }
  return User;
};
