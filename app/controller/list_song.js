'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const meida = path.join(__dirname, "../public/media");

class ListSongController extends Controller {
    async list() {
        const { ctx } = this;
       /*  ctx.body = {
            hehe: "fck"
        } */
        const fs = require('fs');
        const names = fs.readdirSync(meida)
        console.log(names, ">>>")
        await ctx.render('list.ejs', {
            title: "list Song",
            music: names || []
        });
        
    }
}

module.exports = ListSongController;