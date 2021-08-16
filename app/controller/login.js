const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    const result = await ctx.service.login.index();
    const token = app.jwt.sign({ username }, app.config.jwt.secret, {expiresIn: 60*60*24});
    if (result && password === result.password && username === result.username) {
      // ctx.set({'authorization':token})
      ctx.body = {
        data: {username},
        token,
        code: 0,
        message: '登录成功'
      }
    } else if (result && (password !== result.password)) {
      ctx.body = {
        code: 400,
        message: '密码错误'
      }
    } else {
      ctx.body = {
        code: 400,
        message: '该用户不存在'
      }
    }
  }
}

module.exports = LoginController;