const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: { type: String, required: true },    
    place: { type: String, required: true },    
    age: { type: Number, required: true },    
    occupation: { type: String, required: true },    
    gender: { type: String, required: true },    
    email: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now},
    token: { type: String }
})

const Users = mongoose.model('User', userSchema)
module.exports = Users