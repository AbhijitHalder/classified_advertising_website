const express = require('express')
const router = express.Router()

const Ad = require('../models/ad')

router.get('/', function(req, res, next) {
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

router.get('/add',(req, res, next) =>
{
    res.render('ads/add')
})

router.post('/add',(req, res, next) =>
{
    Ad.create({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
    }, (err, ad) => {
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