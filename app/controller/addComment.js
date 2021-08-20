'use strict';

const Controller = require('egg').Controller;
class AddCommentController extends Controller {
  async index() {
    const {ctx} = this;
    const datetime = Date.parse(new Date());
    const {articleId, author, content} = ctx.request.body;
    const db = ctx.model.Comment;
    const result = await db.create({articleId, author, content, datetime});
    ctx.body = {
      code: 200,
      data: result
    }
  }
}

module.exports = AddCommentController;
