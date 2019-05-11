'use strict';

const toInt = require("../utils/toInt");

const Controller = require('egg').Controller;
// 歌手
class SingerController extends Controller {
  // 获取歌手列表
  async index() {
    const ctx = this.ctx;
    const query = {
      keyword: ctx.query.keyword,
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset)
    };
    let singers = await ctx.service.singer.show(query);
    ctx.status = 200;
    ctx.body = { success: true, data: singers };
  }
  
  async show(){
    const ctx = this.ctx;
    const id = toInt(ctx.params.id); 
    let singer = await ctx.service.singer.showOne(id);
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: singer
    };
  }
  // 添加歌手
  async create() {
    const ctx = this.ctx;
    const params = ctx.request.body;
    let singer = await ctx.service.singer.create(params)
    ctx.status = 201;
    ctx.body = { data: singer, success: true };
  }
  // 更新歌手信息  
  async update(){
      const ctx = this.ctx;
      const id = toInt(ctx.params.id);
      const params = ctx.request.body;
      let singer = await ctx.service.singer.update(id, params);
      ctx.status = 201;
      ctx.body = { data: singer, success: true };
  }
  // 删除歌手
  async destroy(){
       const ctx = this.ctx;
       const id = toInt(ctx.params.id);
       let singer = await ctx.service.singer.delete(id);
       ctx.status = 201;
       ctx.body = { data: singer, success: true };
  }
}

module.exports = SingerController;
