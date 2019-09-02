var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add/:var1/:var2', function(req, res, next) {
  res.json({answer: req.params.var1 + req.params.var2});
});

router.get('/sub/:var1/:var2', function(req, res, next) {
  res.json({answer: req.params.var1 - req.params.var2});
});

router.get('/div/:var1/:var2', function(req, res, next) {
  res.json({answer: req.params.var1 / req.params.var2});
});

router.get('/mul/:var1/:var2', function(req, res, next) {
  res.json({answer: req.params.var1 * req.params.var2});
});

module.exports = router;
