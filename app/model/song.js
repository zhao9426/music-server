'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const Song = app.model.define('Song', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(30),
        singer: STRING(10),
        download: INTEGER,
        favorite: INTEGER,
        description: STRING(20),
        url: STRING(50),
        time: INTEGER,
        album: STRING(20),
        created_at: DATE,
        updated_at: DATE,
    });

    return Song;
};
