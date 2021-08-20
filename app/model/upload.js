module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UploadSchema = new Schema({
    url: {type: String, required: true}
  });

  return mongoose.model('Upload', UploadSchema, 'upload');
}