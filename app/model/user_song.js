'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;
  const UserSong = app.model.define("UserSong", {
    song_id:  { type: INTEGER(11), primaryKey: true },
    user_id: { type: INTEGER(11), primaryKey: true },
    created_at: DATE,
    updated_at: DATE
  });
  return UserSong;
};