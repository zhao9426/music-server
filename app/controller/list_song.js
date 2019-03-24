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
    let list = await ctx.model.SongList.findAll(query)
    ctx.body = { success: true, data: list};
  }

  async create() {
    const ctx = this.ctx;
    const { name, author, poster, description } = ctx.request.body;
    const SongList = await ctx.model.SongList.create({ name, author, poster, description });
    ctx.status = 201;
    ctx.body = { data: SongList, success: true };
  }

  async show(){
    const ctx = this.ctx;
    let song = await ctx.model.SongList.findById(toInt(ctx.params.id));
    if(song){
      ctx.status = 200;
      ctx.body = { success: true, data: song }
    } else {
      ctx.status = 404;
      ctx.body = { success: false, data: null}
    }
  }

  async update(){
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const song = await ctx.model.SongList.findById(id);
    if (!song) {
      ctx.status = 404;
      return;
    }
    const data = ctx.request.body;
    const errors = this.app.validator.validate({name: "string?", author: "string?", description: "string?"}, data)
    if(errors){
      ctx.body = { success: false, data: null, message: errors };
      return;
    }
    let usong = await song.update(data);
    ctx.status = 200;
    ctx.body = { success: true, data: usong};
  }

  async destroy(){
    const {ctx, app } = this;
    const id = toInt(ctx.params.id);
    const song = await ctx.model.SongList.findByPk(id);
    if (!song) {
      ctx.status = 404;
      ctx.body = { success: false, data: null}
      return;
    }
    const result = await song.destroy();
    ctx.status = 200;
    ctx.body = { success: true, data: result } 
  }
}

module.exports = ListSongController;
