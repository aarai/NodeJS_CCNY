var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/articles', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('article/index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.post('/create', function (req, res, next) {
    var article = new Article({
      title: req.body.title,
      text: req.body.text,
      url: req.body.url
    });
    article.save(function(err,article) {
      if (err) return next(err);
      res.redirect('/articles');
      //res.json(article);
    });
});

router.post('/update', function (req, res, next) {
  Article.findOneAndUpdate({'_id': req.body.id }
  ,{
    title: req.body.title,
    text: req.body.text,
    url: req.body.url
  },function(err,article) {
      if (err) return next(err);
      res.redirect('show/'+ article.id);
  });
});

router.get('/show/:id', function (req, res, next) {
  Article.findById(req.params.id, function(err,article) {
    if (err) return next(err);
    res.render('article/show', {title: "Article page", article: article });
  });
});

router.get('/edit/:id', function (req, res, next) {
  Article.findById(req.params.id, function(err,article) {
    if (err) return next(err);
    res.render('article/edit', {title: "Article page", article: article });
  });
});

router.get('/delete/:id', function (req, res, next) {
  Article.findById(req.params.id, function(err,article) {
    if (err) return next(err);
    article.remove(function(err) {
      if(err) return next(err);
      res.redirect('/articles');
    });
  });
});

router.get('/new', function (req, res, next) {
    res.render('article/new', { title: 'Create New Article' });
});
