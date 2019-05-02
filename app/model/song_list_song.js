'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;
  const SongListSong = app.model.define("SongListSong", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    song_list_id: INTEGER(11),
    song_id: INTEGER(11),
    created_at: DATE,
    updated_at: DATE
  });

  return SongListSong;
};
