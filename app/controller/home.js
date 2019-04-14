'use strict';

const Controller = require('egg').Controller;
const toInt = require("../utils/toInt");

class HomeController extends Controller {
  async index() {
    this.ctx.body = "hi, egg2";
  }

  async songList() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset)
    };
    let list = await ctx.service.songList.show(query);
    ctx.status = 200;
    ctx.body = { success: true, data: list };
  }

  async newSongs() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset)
    };
    let songs = await ctx.service.song.show(query);
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: songs
    };
  }

  async singers() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset)
    };
    let singers = await ctx.service.singer.show(query);
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: singers
    };
  }

  async rank() {
    const ctx = this.ctx;
    const query = {
      category: ctx.query.category,
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset)
    };
    let songs = await ctx.service.song.show(query);
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: songs
    };
  }

  async category() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset)
    };
    let category = await ctx.service.category.show(query);
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: category
    };
  }

  async token() {
    const ctx = this.ctx;
    this.ctx.body = {
      token: ctx.csrf
    };
  }
}

module.exports = HomeController;
