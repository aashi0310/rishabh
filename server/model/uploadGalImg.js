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
    created_at: { type: Date },
    parentgallery: { type: String }
}, { collection: 'uploadGallery' });

const UploadGallery = mongoose.model('UploadGallery', uploadSchema);
module.exports = UploadGallery;