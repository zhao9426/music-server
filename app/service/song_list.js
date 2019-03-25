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
  // async find(uid) {
  //   const songList = await this.app.mysql.get('SongList');
  //   return { songList };
  // }

}

module.exports = SongListService;
