'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
 
  const User = app.model.define('User', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    pwd: STRING(20),
    role: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  User.findByNameAndPwd = async (name, pwd) => {
      return await User.findOne({
          where: {
              name,
              pwd
          }
      }).then((user) => {  
          if(user){
              return { name: user.dataValues.name };
          } else {
              throw new Error("用户名或密码错误！");
          }
      })
  }

  return User;
};
