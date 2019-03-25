module.exports = (app) => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;
    const Singer = app.model.define("Singer", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      avatarUrl: STRING(20),
      follower: { type: INTEGER },
      description: TEXT,
      created_at: DATE,
      updated_at: DATE
    });
    return Singer;
}