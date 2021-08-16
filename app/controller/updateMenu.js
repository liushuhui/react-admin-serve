
const Controller = require('egg').Controller;

class UpdateMenuController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.service.updateMenu.index();
    ctx.body = {
      code: 0,
      data: result,
      message: '修改成功！'
    }
  }
}

module.exports = UpdateMenuController;
