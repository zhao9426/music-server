'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
  async show(query, where) {
    const ctx = this.ctx;
    let comments = await ctx.model.Comment.findAll({
        where,
        ...query,
        order: [['created_at','desc']]
    });
    return comments;
  }
  // 新增评论
  async create(params) {
    const ctx = this.ctx;
    const comment = await ctx.model.Comment.create({ ...params });
    return comment;
  }

   // 删除评论
   async delete(id, from_uid, topic_id, topic_type) {
    const ctx = this.ctx;
    console.log(id, from_uid, topic_id, topic_type);
    
    const comment = await ctx.model.Comment.findOne({
        where: {
            id, from_uid, topic_id, topic_type
        }
    });
    if (comment) {
      return await comment.destroy();
    } else {
      throw new Error("此评论不存在！");
    }
  }
}

module.exports = CommentService;
