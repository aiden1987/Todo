var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Todo' });
});

/* GET test page. */
router.get('/test', function(req, res) {
  res.render('test', { title: 'Todo' });
});


module.exports = router;
