var passport = require('passport'),
    LocalStrategy = require('passport-local'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');


module.exports = function() {

  //configure passport local strategy
  passport.use('login', new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

  passport.use('register', new LocalStrategy({
      passReqToCallback: true,
    },
    function(req, username, password, done) {
      var newUser = new User(req.body);
      //todo hash the password
      newUser.save(function(err,user){
        if (err) return done(err);
        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
      User.findById(id, function (err, user) {
        done(err, user);
      });
    });

}
