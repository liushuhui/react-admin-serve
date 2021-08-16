const Service = require('egg').Service;

class LoginService extends Service {
  async index() {
    const {ctx} = this;
    const db = ctx.model.User;
    //数据库建表的时候表名一定要加一个s,比如users
    const findResult = await  db.findOne({username: ctx.request.body.username});
    return findResult;
    }
}

module.exports = LoginService;