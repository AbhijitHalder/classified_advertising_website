const express = require('express')
const router = express.Router()

const Ads = require('../models/ads')

router.get('/ads', function(req, res, next) {
    res.render('ads/index');
});
