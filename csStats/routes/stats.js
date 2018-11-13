var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Stats = require('../models/Stats.js');

/* GET ALL STATS */
router.get('/', function(req, res, next) {
  Stats.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});
  
  /* GET SINGLE STATS BY ID */
  router.get('/:id', function(req, res, next) {
    Stats.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* SAVE STATS */
  router.post('/', function(req, res, next) {
    Stats.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  
  /* DELETE STATS */
  router.delete('/:id', function(req, res, next) {
    Stats.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

module.exports = router;