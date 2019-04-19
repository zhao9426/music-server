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
  // 我收藏的歌单
  async collectSongList() {
    const ctx = this.ctx;
    ctx.body = {
      success: true,
      data: ["我的收藏歌单"]
    };
  }

  // 我喜欢的歌曲
  async likeSong() {
    const ctx = this.ctx;
    ctx.body = {
      success: true,
      data: ["我的喜欢的歌曲"]
    };
  }

  // 我关注的歌手
  async likeSinger() {
    const ctx = this.ctx;
    ctx.body = {
      success: true,
      data: ["我的关注的歌手"]
    };
  }
}

module.exports = MyController;
