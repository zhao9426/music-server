'use strict';
const toInt = require('../utils/toInt');
const Controller = require('egg').Controller;

const createRule = {
  name: { type: "string", required: true },
  url: { type: "string", required: true },
  category: { type: "string" },
  singer: { type: "string" },
  album: { type: "string", required: false },
  poster: "string",
  description: { type: "string", required: false }
};


class SongController extends Controller {
    async index() {
        const ctx = this.ctx;
        const query = {
          keyword: ctx.query.keyword,
          limit: toInt(ctx.query.limit),
          offset: toInt(ctx.query.offset)
        };
        let songs = await ctx.service.song.getAllSong(query);
        ctx.status = 200;
        ctx.body = { success: true, data: songs };
    }


    async show(query) {
        const ctx = this.ctx;
        let song = await ctx.service.song.getSong(toInt(ctx.params.id));
        ctx.status = 201;
        ctx.body = {
            success: true,
            data: song
        }
    }

    async create() {
        const ctx = this.ctx;
        ctx.validate(createRule, ctx.request.body);
        const song = await ctx.service.song.create(ctx.request.body);
        ctx.status = 201;
        ctx.body = {
            success: true,
            data: song
        }
    }

    async update() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id);
        const song = await ctx.model.Song.findById(id);
        if (!song) {
            ctx.status = 404;
            return;
        }
        ctx.validate(createRule, ctx.request.body);
        console.log(ctx.request.body);
        
        const nSong = await song.update(ctx.request.body); 
        ctx.status = 200;
        ctx.body = {
            success: true,
            data: nSong
        }
    }

    async destroy() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id);
        const song = await ctx.model.Song.findById(id);
        if (!song) {
            ctx.status = 404;
            return;
        }

        await song.destroy();
        ctx.status = 200;
        ctx.body = {
            success: true,
            data: null
        }
    }
}

module.exports = SongController;
