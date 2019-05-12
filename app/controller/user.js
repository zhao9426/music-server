"use strict";

const Controller = require("egg").Controller;
const toInt = require("../utils/toInt");

const createRule = {
  name: { type: "string", required: true },
  pwd: { type: "string", required: true },
  role: { type: "number", required: false },
  avatar: { type: "string", required: false }
};

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      keyword: ctx.query.keyword,
      limit: toInt(ctx.query.limit), 
      offset: toInt(ctx.query.offset)
    };
    let users = await ctx.service.user.getAllUer(query);
    ctx.status = 200;
      ctx.body = { 
        data: users, 
        login: true,
        success: true
      };
  }

  async login() {
    const ctx = this.ctx;
    try {
      let { name, pwd } = ctx.request.body
      let data = { name, pwd}
      const user = await ctx.service.user.login(data);
      if (user && user.name == ctx.request.body.name) {
        ctx.status = 200;
        ctx.body = { 
          data: user, 
          login: true,
          success: true
        };
      } 
    } catch (e) {
      ctx.status = 404;
      ctx.body = {
        login: false,
        data: null,
        success: false,
        message: e.message
      };
    }
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findById(toInt(ctx.params.id));
  }

  // 创建用户
  async create() {
    const ctx = this.ctx;
    try {
      ctx.validate(createRule, ctx.request.body);
      const user = await ctx.service.user.create(ctx.request.body);
      ctx.status = 201;
      ctx.body = { success: true, data: user};
    } catch (error) {
      ctx.status = 422;
      ctx.body = {
        success: false,
        message: error.message
      };
    }
  }

 // 修改用户信息
  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findById(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const data = ctx.request.body;

    const errors = this.app.validator.validate(
      { name: "string", pwd: "password" },
      data
    );

    if (errors) {
      ctx.status = 400;
      ctx.body = { success: false, data: null, message: `${errors[0].field} ${errors[0].message}` };
      return;
    }

    let uUser = await user.update(data);
    ctx.status = 200;
    ctx.body = {success: true, data: uUser};
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);

    const user = await ctx.model.User.findById(id);
    if (!user) {
      ctx.status = 404;
      ctx.body = { success: false, data: null };
      return;
    }

    let result = await user.destroy();

    ctx.status = 200;
    ctx.body = { success: true, data: result };
  }
}

module.exports = UserController;
