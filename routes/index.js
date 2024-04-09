var express = require('express');
var flash = require('connect-flash');
var session = require('express-session');
var router = express.Router();
var Ad = require('../models/ad');
var Cart = require('../models/cart');
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

router.get('/add-to-cart/:id', function(req, res, next){
  var adId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Ad.findById(adId, function(err, ad){
    if(err){
      req.flash('error', 'Ad not found.');
      return res.redirect('/');
    }
    cart.add(ad, ad.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/page1');
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
