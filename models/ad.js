//schema for an ADs
const mongoose = require('mongoose')
const adSchema = new mongoose.Schema( {
    title: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    }
})

//make the class public
module.exports = mongoose.model('Ad', adSchema)