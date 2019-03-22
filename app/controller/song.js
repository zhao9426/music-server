'use strict';
const toInt = require('../utils/toInt');
const Controller = require('egg').Controller;

const createRule = {
   // accesstoken: 'string',
    name: { type: 'string', required: true },
    url: { type: 'string', required: true },
    singer: { type: 'string'},
    album: 'string',
    description: 'string'
};


class SongController extends Controller {
    async index() {
        const ctx = this.ctx;
        const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
        ctx.body = await ctx.model.Song.findAll(query);
    }


    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.model.Song.findById(toInt(ctx.params.id));
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
