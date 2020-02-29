var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('name', 'foo');
  res.render('index.html', { title: 'Express' });
});

module.exports = router;
