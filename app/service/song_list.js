const Service = require('egg').Service;

class SongListService extends Service {
  constructor(props){
    super(props);
  }

  async show(params){
    const ctx = this.ctx;
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
    let list = await ctx.model.SongList.findAll(query);
    return list;
  }

  async showSongs(songListId){
    const ctx = this.ctx;
    const Op = this.app.Sequelize.Op; 
    let detail = await ctx.model.SongList.findById(songListId);
    if(!detail){
      return null;
    }
    let songsIds = await ctx.model.SongListSong.findAll({ where: { song_list_id: songListId } });
    let songs = await ctx.model.Song.findAll({ where: { id: {
      [Op.in]:  songsIds.map(item => item.song_id)
    }}});
   
    let {id, name, author, poster, count, favorite, description } = detail;
    return {
      id, name, author, poster, count, favorite, description,
      songs: songs
    };
  }

  // 收藏歌单
  async collect(data){
    let esl = await this.ctx.model.UserSongList.findAll({ where: {
      ...data
    }});
    if(esl && esl.length){
      throw new Error("此歌单已存在！");
    } 
    try {
      const usl = await this.ctx.model.UserSongList.create({ ...data });
      return usl;
    } catch (error) {
      throw error;
    }
  }

  async showCollectedSongList(query){
    const Op = this.app.Sequelize.Op; 
    const usl = await this.ctx.model.UserSongList.findAll({ where: { ...query } });
    let sls = await this.ctx.model.SongList.findAll({ where: { id: {
      [Op.in]:  usl.map(item => item.song_list_id)
    }}});
    return sls;
  }
}

module.exports = SongListService;
