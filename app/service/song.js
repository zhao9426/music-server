const Service = require('egg').Service;

class SongService extends Service {
  constructor(ctx) {
    super(ctx);
  }

  async show(params) {
    const ctx = this.ctx;
    const Op = this.app.Sequelize.Op;
    let query = {};
    if(params.category){
      query = {
        where: {
          category: params.category
        }
      };
    }
    console.log(query, "KKK");

    let songs = await ctx.model.Song.findAll(query);
    return songs;
  }

  async create(params) {
    const ctx = this.ctx;
    const song = await ctx.model.Song.create({ ...params });
    return song;
  }

  async update(params) {
    const ctx = this.ctx;
    const song = await ctx.model.Song.update({ ...params });
    return song;
  }
}

module.exports = SongService;