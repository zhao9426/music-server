'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;
  const UserSong = app.model.define("UserSong", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    song_id: INTEGER(11),
    user_id: INTEGER(11),
    created_at: DATE,
    updated_at: DATE
  });
  return UserSong;
};