module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CommentSchema = new Schema({
    articleId: {
      type: Schema.Types.ObjectId,
      require: true
    },
    author: {
      type: String,
      require: true
    },
    content: {
      type: String,
      require: true
    },
    datetime: {
      type: String
    }
  });
  return mongoose.model('comment', CommentSchema, 'comment')
}