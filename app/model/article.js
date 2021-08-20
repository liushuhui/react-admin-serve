module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema({
    title: {
      type: String,
      require: true
    },
    classify: {
      type: String,
      require: true
    },
    article: {
      type: String,
      require: true
    },
    dateTime: {
      type: String
    }
  });
  return mongoose.model('article', ArticleSchema, 'article')
}