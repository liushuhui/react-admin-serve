'use strict';

const Controller = require('egg').Controller;

class GetArticleController extends Controller {
  async index() {
    const {ctx} = this;
    const db = ctx.model.Article;
    // const result = await db.find({}).sort({'_id': -1});
    const result = await db.aggregate([
      {
        $lookup: {
          from: 'comment',
          localField: '_id',
          foreignField: 'articleId',
          as: 'comment'
        }
      }
    ])
    ctx.body = {
      code: 200,
      data: result
    }
  }
}

module.exports = GetArticleController;
