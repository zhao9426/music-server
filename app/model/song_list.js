'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;
  const SongList = app.model.define("SongList", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    author: STRING(10),
    poster: STRING(20),
    count: INTEGER,
    favorite: INTEGER,
    description: TEXT,
    created_at: DATE,
    updated_at: DATE
  });

  return SongList;
};
