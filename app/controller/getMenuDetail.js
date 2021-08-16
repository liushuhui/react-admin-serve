
const Controller = require('egg').Controller;

class GetMenuDetailController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.service.getMenuDetail.index();
    ctx.body = {
      code: 0,
      data: result,
      message: '成功'
    }
  }
}

module.exports = GetMenuDetailController;
