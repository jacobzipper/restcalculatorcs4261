var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add/:var1/:var2', function(req, res, next) {
  res.json({answer: parseInt(req.params.var1, 10) + parseInt(req.params.var2, 10)});
});

router.get('/sub/:var1/:var2', function(req, res, next) {
  res.json({answer: parseInt(req.params.var1, 10) - parseInt(req.params.var2, 10)});
});

router.get('/div/:var1/:var2', function(req, res, next) {
  res.json({answer: parseInt(req.params.var1, 10) / parseInt(req.params.var2, 10)});
});

router.get('/mul/:var1/:var2', function(req, res, next) {
  res.json({answer: parseInt(req.params.var1, 10) * parseInt(req.params.var2, 10)});
});

module.exports = router;
