var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
  res.json({answer: parseInt(req.query.var1, 10) + parseInt(req.query.var2, 10)});
});

router.get('/sub', function(req, res, next) {
  res.json({answer: parseInt(req.query.var1, 10) - parseInt(req.query.var2, 10)});
});

router.get('/div', function(req, res, next) {
  res.json({answer: parseInt(req.query.var1, 10) / parseInt(req.query.var2, 10)});
});

router.get('/mul', function(req, res, next) {
  res.json({answer: parseInt(req.query.var1, 10) * parseInt(req.query.var2, 10)});
});

module.exports = router;
