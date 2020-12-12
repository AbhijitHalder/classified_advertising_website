var express = require('express');
var router = express.Router();

const passport = require('passport')
const User = require('../models/user')


router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/register', function (req, res, next) {
    res.render('register');
});

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


router.get('/login', function (req, res, next) {
    res.render('login')
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/ads',
    failureRedirect: '/login',
}))

router.get('/logout', (req, res, next) => {
    req.logout()
    res.redirect('login')
})

module.exports = router;
