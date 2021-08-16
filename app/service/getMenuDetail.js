
const Service = require('egg').Service;
const mongoose=require('mongoose');

class GetMenuDetailService extends Service {
  async index() {
    const {ctx} = this;
    // 获取 url 的 ？后面的数据，通过 ctx.query 拿到数据 GET /posts?category=egg&language=node
    //获取 Router 上也可以申明参数，通过 ctx.params 拿到数据 app.get('/projects/:projectId/app/:appId', 'app.listApp'); GET /projects/1/app/2
    //post、put、delete 等方法，框架内置了 bodyParser 中间件来对这两类格式的请求 body 解析成 object 挂载到 ctx.request.body 上。
    const {_id, level, parentId, title} = ctx.request.query;
    const db = ctx.model.Menu;
    return level == 1 ?  await db.findById({_id}) :  
          await db.find({_id: mongoose.Types.ObjectId(parentId)}, {'children': {$elemMatch: {title}}, _id: 0});
  }
}

module.exports = GetMenuDetailService;
