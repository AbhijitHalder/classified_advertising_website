const mongoose = require('mongoose')
const adSchema = new mongoose.Schema( {
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.model('Ad', adSchema)