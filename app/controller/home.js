'use strict';

const Controller = require('egg').Controller;
const toInt = require("../utils/toInt");
const uploadClient = require("../utils/upload");

class HomeController extends Controller {
  async index() {
    this.ctx.body = "hi, egg2";
  }

  async songList() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),//查询参数
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
      token: ctx.csrf//跨域校验
    };
  }

  async upload(){
    const ctx = this.ctx;
    const { files } = ctx.request;
    let urls = [];
    for (let index = 0; index < files.length; index++) {
      let file = files[index];
      let bucket = '';
      switch (file.mime) {
        case 'video/mp4':
          bucket = "music";
          break;
        case 'image/png':
          bucket = "image";
          break;
        default:
          bucket = "test";
          break;
      }
     let res = await uploadClient.put(`${bucket}/${file.filename}`, file.filepath);
     urls.push({ name: res.name, url: res.url }); 
    }
   
    this.ctx.body = {
      data: {
        urls
      }
    }     
  }
  // 获取某个歌单下的歌曲
  async showSongs(){
    const ctx = this.ctx;
    // 这里的id是歌单的id
    console.log(ctx.query.id);

    let songListDetail = await ctx.service.songList.showSongs(toInt(ctx.query.id));
    
    if(songListDetail){
      ctx.status = 200;
      ctx.body = { success: true, data: songListDetail }
    } else {
      ctx.status = 404;
      ctx.body = { success: false, data: null}
    }
  }

}


module.exports = HomeController;
