'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async token() {
    const ctx = this.ctx;
    this.ctx.body = {
      token: ctx.csrf
    }
  }
}

module.exports = HomeController;
