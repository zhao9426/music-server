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
}

module.exports = SongListService;
