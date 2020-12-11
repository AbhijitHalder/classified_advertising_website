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

module.exports = router;