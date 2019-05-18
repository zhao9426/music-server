const Service = require('egg').Service;

class SongService extends Service {
  constructor(ctx) {
    super(ctx);
  }

  async show(params) {
    const ctx = this.ctx;
    let { category, limit, offset } = params;
    let query = {limit, offset};
    let where = { }
    if(category){
      where = { category }
    }
    
    let songs = await ctx.model.Song.findAll({
      ...query,
      where
    });
    return songs;
  }

  async getSong(songId){
    let song = await this.ctx.model.Song.findByPk(songId);
    return song;
  }

  async getAllSong(params){
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
      let songs = await this.ctx.model.Song.findAll(query);
      return songs
    } catch (error) {
      
    }
  }

  async showLikeSong(params){
    const Op = this.app.Sequelize.Op; 
    let sids = await this.ctx.model.UserSong.findAll({ where: { ...params }})
    let songs = await this.ctx.model.Song.findAll({ where: { id: {
      [Op.in]:  sids.map(item => item.song_id)
    }}});
    return songs
  }

  async likeSong(data){
    const Sq = this.app.Sequelize; 
    const Op = this.app.Sequelize.Op; 
    try {
      let esl = await this.ctx.model.UserSong.findAll({ where: {
        ...data
      }});
      if(esl && esl.length){
        const us = await this.ctx.model.Song.decrement(`favorite`, { where: { id: data.song_id,  favorite: { [Op.gt]: 0 } }});
        const usl = await this.ctx.model.UserSong.destroy({where: {...data }});
        return us;
      } else {
        const usl = await this.ctx.model.UserSong.create({ ...data });
        const us = await this.ctx.model.Song.increment(`favorite`, { where: { id: data.song_id }});
        return us;
      } 
    } catch (error) {
      throw error;
    }
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