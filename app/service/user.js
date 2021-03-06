const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
  }
  async create(params) {
    const ctx = this.ctx;
    const { name } = params;
    let euser = await ctx.model.User.findAll({ where: {
      name
    }});
    if(euser && euser.length){
      throw new Error("这个用户名已存在，请换一个用户名注册！" ); 
    }
    const user = await ctx.model.User.create({...params, attributes: ["name","role", "avatar"]});
    return { user };
  }

  async getAllUer(params){
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
      let users = await this.ctx.model.User.findAll(query);
      return users
    } catch (error) {
      
    }
  }

  async login(params){
    const ctx = this.ctx;

    const user = await ctx.model.User.findOne({ where: params, attributes: ["id","name","role", "avatar"]});
    if(!user){
      throw new Error("用户名或密码错误！");
    }
    return user;
  }
}

module.exports = UserService;
