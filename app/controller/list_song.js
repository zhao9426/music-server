'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const toInt = require('../utils/toInt');
const meida = path.join(__dirname, '../public/media');

class ListSongController extends Controller {
  async list() {
    const { ctx } = this;
    const fs = require('fs');
    const names = fs.readdirSync(meida);
    await ctx.render('list.ejs', {
      title: 'list Song',
      music: names || [],
    });

  }

  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.SongList.findAll(query);
  }

  async create() {
    const ctx = this.ctx;
    const { name, author, description } = ctx.request.body;
    const SongList = await ctx.model.SongList.create({ name, author, description });
    ctx.status = 201;
    ctx.body = SongList;
  }
  
}

module.exports = ListSongController;
