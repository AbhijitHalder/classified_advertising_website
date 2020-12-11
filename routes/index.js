var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/logout', (req, res, next) => {
  //Call passport built-in logout method
  req.logout()
  res.redirect('/login')
})

module.exports = router;
