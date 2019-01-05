'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const SongList = app.model.define('SongList', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    author: STRING(10),
    count: INTEGER,
    favorite: INTEGER,
    description: STRING(20),
    created_at: DATE,
    updated_at: DATE,
  });

  return SongList;
};
