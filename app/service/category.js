const Service = require("egg").Service;

class CategoryService extends Service {
  constructor(ctx) {
    super(ctx);
  }

  async show(query) {
    const ctx = this.ctx;
    let category = await ctx.model.Category.findAll(query);
    return category;
  }

  async create(params) {
    const ctx = this.ctx;
    const category = await ctx.model.Category.create({ ...params });
    return category;
  }

  async update(params) {
    const ctx = this.ctx;
    const category = await ctx.model.Category.update({ ...params });
    return category;
  }
}

module.exports = CategoryService;
