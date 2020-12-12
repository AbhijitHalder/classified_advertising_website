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

module.exports = mongoose.model('Ad', adSchema)