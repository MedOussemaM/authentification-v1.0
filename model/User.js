const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstname : {
        type : String,
        required : false,
        min : 4,
    },
    lastname : {
        type : String,
        required : true,
        min : 4,
    },
    email : {
        type : String,
        required : true,
        min : 8,
    },
    password : {
        type : String,
        required : true,
        min : 8,
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('User' , userSchema);
