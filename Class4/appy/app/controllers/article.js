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
      title: 'Articles Page',
      articles: articles
    });
  });
});

router.get('/new', function (req, res, next) {
    res.render('article/new', { title: 'Create New Article' });
});

router.get('/show/:id', function(req,res, next) {
    Article.findById(req.params.id, function (err, article) {
      if (err) return next(err);
      res.render('article/show', {
        title: 'Article Page',
        article: article
    });
  });
});

router.post('/update', function(req,res, next) {
  Article.findOneAndUpdate({'_id': req.body.id},
      { title: req.body.title, url: req.body.url, text: req.body.text }
      , function (err, article) {
        console.log(err);
      if (err) return next(err);
      res.redirect('show/' + article.id);
  });
});

router.get('/edit/:id', function (req, res, next) {
    Article.findById(req.params.id, function (err, article) {
      if (err) return next(err);
      res.render('article/edit', {
        title: 'Article Edit Page',
        article: article
    });
  });
});

router.get('/delete/:id', function(req,res, next) {
  Article.findOne(req.params.id, function (err, article) {
      if (err) return next(err);
      article.remove(function(err){
        if (err) return next(err);
        res.redirect('/articles');
      });
  });
});

router.post('/create', function (req, res, next) {
  var article = new Article({ title: req.body.title, url: req.body.url, text: req.body.text });
  article.save(function (err, article) {
    if (err) return next(err);
    res.redirect('/articles');
  });
});
