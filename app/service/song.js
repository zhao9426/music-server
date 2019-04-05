const Service = require('egg').Service;

class SongService extends Service {
  constructor(ctx) {
    super(ctx);
  }

  async show(query){
    const ctx = this.ctx;
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