const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  longURL: String,
  shortURL: String,
  shortCode: String,
});
const URL = mongoose.model('URL', urlSchema, 'urls');

module.exports = mongoose.model('URL', urlSchema);

