
const Controller = require('egg').Controller;

class UploadImgController extends Controller {
  async index() {
    const {ctx} = this;
    const result = await ctx.service.uploadImg.index();
    ctx.body = {
      code: 200,
      data: result
    }
  }
}

module.exports = UploadImgController;
