module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Category = app.model.define("Category", {
    type: { type: INTEGER, primaryKey: true },
    name: STRING(30),
    created_at: DATE,
    updated_at: DATE
  });
  return Category;
};
