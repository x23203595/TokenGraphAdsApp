var passport = require('passport');
var User = require('../models/user');
var MetaMaskStrategy = require('passport-metamask').Strategy;

router.post('/page1', (req, res, next) => {
  const { metamaskAddress } = req.query;
  req.session.metamaskAddress = metamaskAddress;
  res.sendStatus(200);
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new MetaMaskStrategy({
  // Specify options if needed
}, function(metamaskAddress, done) {
  // Look up the user based on the Metamask address
  User.findOne({ metamaskAddress: metamaskAddress }, function(err, user) {
    if (err) { return done(err); }
    if (!user) {
      // If user not found, create a new user with the Metamask address
      var newUser = new User({ metamaskAddress: metamaskAddress });
      newUser.save(function(err) {
        if (err) { return done(err); }
        return done(null, newUser);
      });
    } else {
      // If user found, return the user object
      return done(null, user);
    }
  });
}));

module.exports = passport;