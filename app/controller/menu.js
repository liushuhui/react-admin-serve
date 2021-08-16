const Controller = require('egg').Controller;

class MenuController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.service.menu.index();
    ctx.body = {
      code: 0,
      data: result
    }
  }
}

module.exports = MenuController;