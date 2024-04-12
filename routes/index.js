var express = require('express');
var session = require('express-session');
var passport = require('passport');
var router = express.Router();
var Ad = require('../models/ad');
var Cart = require('../models/cart');

// Middleware setup
router.use(session({
  secret: 'TokenGraphAdMetamask',
  resave: false,
  saveUninitialized: true
}));

router.use(passport.initialize());
router.use(passport.session());

/* GET home page. */
router.get('/', function(req, res, next) {
  var messages = req.flash('error');
  res.render('index', { title: 'Welcome to Token Graph Ads', name: null, messages: messages, hasErrors: messages.length > 0 });
});

router.get('/index', function(req, res, next) {
  res.redirect('/');
});

router.get('/page1', function(req, res, next) {
  console.log('Is authenticated:', req.isAuthenticated());
  console.log('Metamask address:', req.user ? req.user.metamaskAddress : null);

  Ad.find().sort({ order: 1 }).exec(function(err, ads) {
    if (err) {
      console.error(err);
      return next(err);
    }
    var metamaskAddress = req.isAuthenticated() && req.user && req.user.metamaskAddress ? req.user.metamaskAddress : null;
    res.render('page1', { title: 'Collection', ads: ads, metamaskAddress: metamaskAddress, session: req.session });
  });
});


router.get('/add-to-cart/:id', function(req, res, next) {
  var adId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Ad.findById(adId, function(err, ad) {
    if (err || !ad) {
      req.flash('error', 'Ad not found.');
      return res.redirect('/');
    }
    cart.add(ad, ad.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/page1');
  });
});

router.get('/shopping-cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shopping-cart', { session: req.session, ads: null });
  }
  var cart = new Cart(req.session.cart);
  res.render('shopping-cart', { session: req.session, ads: cart.generateArray(), totalPrice: cart.totalPrice });
});

router.get('/checkout', function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  res.render('checkout', { total: cart.totalPrice });
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: 'Welcome to Token Graph Ads', name: null });
});

router.get('/page3', function(req, res, next) {
  res.render('page3', { title: 'Welcome to Token Graph Ads', name: null });
});

router.get('/page4', function(req, res, next) {
  res.render('page4', { title: 'Welcome to Token Graph Ads', name: null });
});

module.exports = router;