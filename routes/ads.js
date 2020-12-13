//reference to express
const express = require('express')
const router = express.Router()

//reference to passport
const passport = require('passport')

//connection to ad schema
const Ad = require('../models/ad')

//authentication function
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('users/login')
}

//Ad index view
router.get('/', isLoggedIn, function(req, res, next) {
    Ad.find((err, ads) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('ads/index',{
                ads: ads
            })
        }
    })
});


//add item view
router.get('/add', isLoggedIn,(req, res, next) =>
{
    res.render('ads/add')
})

//adds item to the list
router.post('/add', isLoggedIn,(req, res, next) =>
{
    Ad.create({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
    }, (err, ads) => {
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else
        {
            res.redirect('/ads')
        }
    })
})

//delete item
router.get('/delete/:_id', isLoggedIn, (req, res, next) => {
    const _id = req.params._id;
    Ad.remove({ _id: _id }, (err) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/ads')
        }
    })
})

//edit item view
router.get('/edit/:_id', isLoggedIn,(req, res, next) => {
    const _id = req.params._id;
    Ad.findById(_id,(err,ad) => {
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else
        {
            res.render('ads/edit',
                {
                    ad: ad})
        }
    })
})


//edit item
router.post('/edit/:_id', isLoggedIn,(req, res, next) =>
{
    const _id = req.params._id;

    const ad = new Ad({
        _id: _id,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
    })

    Ad.update({_id: _id}, ad, (err) => {
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else
        {
            res.redirect('/ads')
        }
    })
})

module.exports = router;