'use strict';
const toInt = require('../utils/toInt');
const Controller = require('egg').Controller;

class CommentController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {  
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset)
    };
    
    const {
        topicId: topic_id,
        topicType: topic_type
    } = ctx.query;
    let where = { topic_id, topic_type };
    let comments = await ctx.service.comment.show(query , where);
    ctx.status = 200;
    ctx.body = { success: true, data: comments };
  }

/*   async show(){
    const ctx = this.ctx;
    const id = toInt(ctx.params.id); 
    let singer = await ctx.service.singer.showOne(id);
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: singer
    };
  } */
  // 发表评论
  async create() {
    const ctx = this.ctx;
    const params = ctx.request.body;
    let comment = await ctx.service.comment.create(params)
    ctx.status = 201;
    ctx.body = { data: comment, success: true };
  }
  
 /*  async update(){
      const ctx = this.ctx;
      const id = toInt(ctx.params.id);
      const params = ctx.request.body;
      let singer = await ctx.service.singer.update(id, params);
      ctx.status = 201;
      ctx.body = { data: singer, success: true };
  } */
  // 删除评论
  async destroy(){
       const ctx = this.ctx;
       const id = toInt(ctx.params.id);
       const { fromId: from_uid, topicId: topic_id, topicType: topic_type } = ctx.request.body
       let comment = await ctx.service.comment.delete(id, from_uid, topic_id, topic_type);
       ctx.status = 201;
       ctx.body = { data: comment, success: true };
  }
}

module.exports = CommentController;
