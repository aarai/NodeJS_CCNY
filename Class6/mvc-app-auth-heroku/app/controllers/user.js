var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  passport = require('passport'),
  User = mongoose.model('User');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/register', function (req, res, next) {
  res.render('user/new', {title: 'Register new user'});
});

router.post('/register', passport.authenticate('register', {
  successRedirect: '/login',
  failureRedirect: '/register'
}));

router.get('/login', function (req, res, next) {
  res.render('user/login', {title: 'Login user'});
});

router.post('/login', passport.authenticate('login', {
  successRedirect: '/',
  failureRedirect: '/login'
}))

router.get('/logout', function (req, res, next) {
  req.logout();
  res.redirect('/');
});
