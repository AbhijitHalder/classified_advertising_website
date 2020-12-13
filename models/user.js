//schema for users
const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')

const userSchema = new mongoose.Schema( {
    username: String,
    password: String,
})

//class for user management
userSchema.plugin(plm);

//make the class public
module.exports = mongoose.model('User', userSchema)