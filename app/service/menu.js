const Service = require('egg').Service;

class MenuService extends Service {
  async index() {
    const {ctx} = this;
    const db = ctx.model.Menu;
    //数据库建表的时候表名一定要加一个s,比如users
    const findResult = await db.find();
    return findResult;
    }
}

module.exports = MenuService;