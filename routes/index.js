var express = require('express');
var router = express.Router();
var Ad = require('../models/ad');
router.use(express.static(__dirname));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Token Graph Ads', name:null });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Welcome to Token Graph Ads', name:null });
});

router.get('/page1', function(req, res, next) {
  Ad.find().sort({ order: 1 }).exec(function(err, docs) {
      if (err) {
          console.error(err);
          return next(err);
      }
      var AdChunks = [];
      var chunkSize = 3;
      for(var i = 0; i < docs.length; i += chunkSize) {
          AdChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('page1', { title: 'Collection', ads: docs });
  });
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: 'Welcome to Token Graph Ads', name:null });
});

router.get('/page3', function(req, res, next) {
  res.render('page3', { title: 'Welcome to Token Graph Ads', name:null });
});

router.get('/page4', function(req, res, next) {
    res.render('page4', { title: 'Welcome to Token Graph Ads', name:null });
});

module.exports = router;
