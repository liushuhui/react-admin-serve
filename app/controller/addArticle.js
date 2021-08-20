'use strict';

const Controller = require('egg').Controller;

class AddArticleController extends Controller {
  async index() {
    const {ctx} = this;
    const dateTime = Date.parse(new Date());
    const {title, classify, article} = ctx.request.body;
    const result = ctx.model.Article.create({title, classify, article,dateTime});
    ctx.body = {
      code: 200,
      data: result
    }
  }
}

module.exports = AddArticleController;
