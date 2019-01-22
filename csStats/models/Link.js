var mongoose = require('mongoose');

var LinkSchema= new mongoose.Schema({
  idStat : String,
  idAccount : String,
  });

module.exports = mongoose.model('Link', LinkSchema);