const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
  }
  async create(params) {
    const ctx = this.ctx;
    const user = await ctx.model.User.create({...params});
    return { user };
  }
}

module.exports = UserService;
