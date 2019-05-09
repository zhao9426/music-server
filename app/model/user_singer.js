'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;
  const UserSinger = app.model.define("UserSinger", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    singer_id: INTEGER(11),
    user_id: INTEGER(11),
    created_at: DATE,
    updated_at: DATE
  });
  return UserSinger;
};