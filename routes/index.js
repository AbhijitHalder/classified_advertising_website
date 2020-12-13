//reference to express
var express = require('express');
var router = express.Router();

//index page view
router.get('/', function(req, res, next) {
  res.render('index',{
    user: req.user
  });
});

module.exports = router;
