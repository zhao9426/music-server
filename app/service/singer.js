"use strict";

const Service = require("egg").Service;

class SingerService extends Service {
  constructor(ctx) {
    super(ctx);
  }
  // 新增歌手
  async create(params) {
    const ctx = this.ctx;
    const singer = await ctx.model.Singer.create({ ...params });
    return singer;
  }
  // 从数据库中查找歌手
  async show(query) {
    const ctx = this.ctx;
    let singers = await ctx.model.Singer.findAll(query);
    return singers;
  }
  // 查找一个歌手
  async showOne(id) {
    const ctx = this.ctx;
    let singer = await ctx.model.Singer.findById(id);
    return singer;
  }

  // 更新歌手信息
  async update(id, data) {
    const ctx = this.ctx;
    const singer = await ctx.model.Singer.findById(id);
    if (singer) {
      return await singer.update(data);
    } else {
      throw new Error("此歌手不存在！");
    }
  }
  // 删除歌手
  async delete(id) {
    const ctx = this.ctx;
    const singer = await ctx.model.Singer.findByPk(id);
    if (singer) {
      return await singer.destroy();
    } else {
      throw new Error("此歌手不存在！");
    }
  }
}

module.exports = SingerService;
