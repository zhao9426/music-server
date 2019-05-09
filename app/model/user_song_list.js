'use strict';

module.exports = app => {
  const { INTEGER, DATE, BOOLEAN } = app.Sequelize;
  const UserSongList = app.model.define("UserSongList", {
    song_list_id: { type: INTEGER(11), primaryKey: true },
    user_id: { type: INTEGER(11), primaryKey: true },
    created_at: DATE,
    updated_at: DATE
  });

  return UserSongList;
};