var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/about', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    console.log(mongoose.model('Article'));
    res.render('index', {
      title: 'About page',
      articles: articles
    });
  });
});
