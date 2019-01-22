var mongoose = require('mongoose');

var StatsSchema = new mongoose.Schema({
  avatar: String,
  playerName: String,
  ak47_kills: String,
  m4a4_kills: String,
  awp_kills: String,
  p90_kills: String,
  aug_kills: String,
  deagle_kills: String,
  glock_kills: String,
  knife_kills: String,
  famas_kills: String,
  inferno:String,
  nuke:String,
  dust2:String,
  train:String,
  cbble:String,
  kills:String,
  deaths:String,
  wins:String,
  hs:String,
  idAccount:String
  });

  module.exports = mongoose.model('Stats', StatsSchema);