const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create a schema
const uploadSchema = new Schema({
  fieldname: { type: String },
  originalname: { type: String },
  encoding: { type: String },
  mimeptype: { type: String },
  destination: { type: String },
  filename: { type: String },
  path: { type: String },
  size: { type: Number },
  created_at: { type: Date }
}, { collection : 'upload' });
 
const Upload = mongoose.model('Upload', uploadSchema);
module.exports = Upload;