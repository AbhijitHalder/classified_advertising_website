const mongoose = require('mongoose')
const adSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: 'Title is Required',
        trim: true
    },
    price: {
        type: Number,
        required: 'Price is Required'
    },
    description: {
        type: String,
        required: 'Description is Required',
        trim: true
    }
})

module.exports = mongoose.model('Ad', adSchema)