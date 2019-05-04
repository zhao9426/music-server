module.exports = (app) => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;
    const Comment = app.model.define("Comment", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      from_uid: INTEGER,
      from_uname: STRING(30),
      topic_type: INTEGER,
      topic_id: { type: INTEGER },
      content: TEXT,
      to_uid: INTEGER,
      to_uname: STRING(30), 
      created_at: DATE,
      updated_at: DATE
    });
    return Comment;
}