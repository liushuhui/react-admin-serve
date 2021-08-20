const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
const sd = require('silly-datetime');
const mkdirp = require('mkdirp');

class UploadImgService extends Service {
 async index() {
    const {ctx} = this;
    const file = ctx.request.files[0];
    let uploadDir = ''
    try {
      const f = fs.readFileSync(file.filepath);
      // 1.获取当前日期
      const day = sd.format(new Date(), 'YYYYMMDD');
      // 2.创建图片保存的路径
      const dir = path.join(this.config.uploadDir, day);
      await mkdirp(dir); // 不存在就创建目录
      const date = Date.now(); // 毫秒数
      // 返回图片保存的路径
      uploadDir = path.join(dir, date + path.extname(file.filename));
      fs.writeFileSync('./' + uploadDir, f);
    } finally {
      // 清除临时文件
      ctx.cleanupRequestFiles();
    }
    const url = uploadDir.slice(10).replace(/\\/g, '/')
    ctx.model.Upload.create({url})
    return url;
  }
}

module.exports = UploadImgService;