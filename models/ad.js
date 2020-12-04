const mongoose = require('mongoose')
const adSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: 'Title is Required',
        trim: true
    },
    description: {
        type: String,
        required: 'Description is Required',
        trim: true
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model('Ad', taskSchema)