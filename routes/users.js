//reference to express
var express = require('express');
var router = express.Router();

//reference to paassport
const passport = require('passport')

//connection to user schema
const User = require('../models/user')

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//register view
router.get('/register', function (req, res, next) {
    res.render('register');
});

//register post action
router.post('/register', (req, res, next) => {
    User.register(new User({
        username: req.body.username
    }), req.body.password, (err, user) => {
        if (err) {
            console.log(err)
            res.end(err)
        } else {
            req.login(user, (err) => {
                res.redirect('/ads')
            })
        }
    })
})

//login view
router.get('/login', function (req, res, next) {
    res.render('login')
});

//login post action
router.post('/login', passport.authenticate('local', {
    successRedirect: '/ads',
    failureRedirect: '/login',
}))

//logout
router.get('/logout', (req, res, next) => {
    req.logout()
    res.redirect('login')
})

module.exports = router;
