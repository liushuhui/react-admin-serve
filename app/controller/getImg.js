'use strict';

const Controller = require('egg').Controller;

class GetImgController extends Controller {
  async index() {
    const {ctx} = this;
    const findResult = await ctx.model.Upload.find();
    const res = findResult[findResult.length - 1].url;
    ctx.body = {
      code: 200,
      data: `http://localhost:7001${res}`
    }
  }
}

module.exports = GetImgController;
