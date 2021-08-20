
const Service = require('egg').Service;
class UpdateMenuService extends Service {
  async index() {
    const {ctx} = this;
    const db = ctx.model.Menu;
    const {title, key, icon, level, childId, _id} = ctx.request.body;
    return level == 1 ? await db.findOneAndUpdate({_id},{title, key, icon})
                     : await db.updateOne({
                       'children': {
                         $elemMatch: {childId}
                       }},
                       {
                         $set: {'children.$.title': title}
                       }
                      )
  }
}

module.exports = UpdateMenuService;
