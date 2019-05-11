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
  async show(params) {
    try {
      const Op = this.app.Sequelize.Op;
      let query = {}
      if(params.keyword){
        query = {
          where: { name: {
            [Op.like]: `%${params.keyword}%`
          }}
        };
      }else{
        query = { ...params}
      }
      let singers = await this.ctx.model.Singer.findAll(query);
      return singers
    } catch (error) {
      
    }
  }
  async showLikeSinger(query){
    const Op = this.app.Sequelize.Op; 
    const ctx = this.ctx;
    let sids = await ctx.model.UserSinger.findAll(query);
    let singers = await this.ctx.model.Singer.findAll({ where: { id: {
      [Op.in]:  sids.map(item => item.singer_id)
    }}});
    return singers
  }

  async likeSinger(data){
    const Sq = this.app.Sequelize; 
    const Op = this.app.Sequelize.Op; 
    try {
      let esl = await this.ctx.model.UserSinger.findAll({ where: {
        ...data
      }});
      if(esl && esl.length){
        const us = await this.ctx.model.Singer.decrement(`follower`, { where: { id: data.singer_id,  follower: { [Op.gt]: 0 } }});
        const usl = await this.ctx.model.UserSinger.destroy({where: {...data }});
        return us;
      } else {
        const usl = await this.ctx.model.UserSinger.create({ ...data });
        const us = await this.ctx.model.Singer.increment(`follower`, { where: { id: data.singer_id }});
        return us;
      } 
    } catch (error) {
      throw error;
    }
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
