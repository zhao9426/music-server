'use strict';

const Controller = require('egg').Controller;

class MyController extends Controller {
  // 我的歌单
  async songList() {
    const ctx = this.ctx;
    ctx.body = {
      success: true,
      data: [{
          title: '不可以',
          description: 'kkakkk',
          count: '35首',
          creater: '艾菲'
        },
        {
          title: '不哭',
          count: '34首',
          description: 'kkakkk',
          creater: '艾菲jjk'
        }
      ]
    };
  }

  // 收藏歌单
  async collectSongList(){
    try {
      const params = this.ctx.request.body;
      let { songListId: song_list_id, userId: user_id } = params;
      let usl = await this.ctx.service.songList.collect({song_list_id, user_id});
      this.ctx.body = {
        success: true,
        data: usl
      }
    } catch (e) {
      this.ctx.status = 404;
      this.ctx.body = {
        login: false,
        data: null,
        success: false,
        message: e.message
      };
    }
  }

  // 我收藏的歌单或我的歌单
  async showSongList() {
    try {
      const ctx = this.ctx;
      const query = ctx.request.query;
      let { userId: user_id, isSelfCreat } = query;
      let sl = await this.ctx.service.songList.showCollectedSongList({ user_id });
      let rsl = [];
      if("true" == isSelfCreat){
        rsl = sl.filter(s => s.uid == user_id);
      } else {
        rsl = sl.filter(s => s.uid != user_id);
      }
      ctx.body = {
        success: true,
        data: rsl
      };
    } catch (e) {
      this.ctx.status = 404;
      this.ctx.body = {
        login: false,
        data: null,
        success: false,
        message: e.message
      };
    }
  }

  // 我喜欢的歌曲
  async showLikeSong() {
    try {
      const ctx = this.ctx;
      const query = ctx.request.query;
      let { userId: user_id } = query;
      let ls = await this.ctx.service.song.showLikeSong({ user_id });
      ctx.body = {
        success: true,
        data: ls
      };
    } catch (e) {
      this.ctx.status = 404;
      this.ctx.body = {
        login: false,
        data: null,
        success: false,
        message: e.message
      };
    }
  }

  async likeSong(){
    try {
      const params = this.ctx.request.body;
      let { songId: song_id, userId: user_id } = params;
      let ls = await this.ctx.service.song.likeSong({song_id, user_id});
      this.ctx.body = {
        success: true,
        data: ls
      }
    } catch (e) {
      this.ctx.status = 404;
      this.ctx.body = {
        login: false,
        data: null,
        success: false,
        message: e.message
      };
    }
  }

  async destroyLikeSong() {
    const params = this.ctx.request.body;
    let { songId: song_id, userId: user_id } = params;
    let song = await ctx.service.song.destroyLikeSong({song_id, user_id});
    ctx.status = 201;
    ctx.body = { data: song, success: true };
  }
  
  async likeSinger(){
    try {
      const params = this.ctx.request.body;
      let { singerId: singer_id, userId: user_id } = params;
      let ls = await this.ctx.service.singer.likeSinger({ singer_id, user_id });
      this.ctx.body = {
        success: true,
        data: ls
      }
    } catch (e) {
      this.ctx.status = 404;
      this.ctx.body = {
        login: false,
        data: null,
        success: false,
        message: e.message
      };
    }
  }

  // 我关注的歌手
  async showLikeSinger() {
    try {
      const ctx = this.ctx;
      const query = ctx.request.query;
      let { userId: user_id } = query;
      let ls = await this.ctx.service.singer.showLikeSinger({ user_id });
      ctx.body = {
        success: true,
        data: ls
      };
    } catch (e) {
      this.ctx.status = 404;
      this.ctx.body = {
        login: false,
        data: null,
        success: false,
        message: e.message
      };
    }
  }
}

module.exports = MyController;
