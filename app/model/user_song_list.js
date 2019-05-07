'use strict';

module.exports = app => {
  const { INTEGER, DATE, BOOLEAN } = app.Sequelize;
  const UserSongList = app.model.define("UserSongList", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    song_list_id: INTEGER(11),
    user_id: INTEGER(11),
    is_self_cread: BOOLEAN,
    created_at: DATE,
    updated_at: DATE
  });

  return UserSongList;
};