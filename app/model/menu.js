const mongoose = require("mongoose");

const childChildSchema = new mongoose.Schema({
  title: {
    type: String
  },
  key: {
    type: String
  },
  icon: {
    type: String
  },
  level: {
    type: String
  }
})

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const MenuSchema = new Schema({
    _id: { // 这个_id是自定义的，所以定义结构的时候必须要加上，否则findOne会查不到数据，
      type: String
    },
    title: {
      type: String
    },
    key: {
      type: String
    },
    icon: {
      type: String
    },
    level: {
      type: String
    },
    children: [childChildSchema]
  });

  return mongoose.model('Menu', MenuSchema);
}