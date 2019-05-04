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
      throw new Error("这个用户名已存在，请换一个用户注册！" ); 
    }
    const user = await ctx.model.User.create({...params, attributes: ["name","role", "avatar"]});
    return { user };
  }

  async login(params){
    const ctx = this.ctx;
    const user = await ctx.model.User.findOne({ where: params, attributes: ["name","role", "avatar"]});
    if(!user){
      throw new Error("用户名或密码错误！");
    }
    return user;
  }
}

module.exports = UserService;
