'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;
  const UserSinger = app.model.define("UserSinger", {
    singer_id: { type: INTEGER(11), primaryKey: true },
    user_id: { type: INTEGER(11), primaryKey: true },
    created_at: DATE,
    updated_at: DATE
  });
  return UserSinger;
};