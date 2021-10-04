const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    _id:{
    },
    name: {
        type: String,
    },
    email:{
        type: String
    },
    phoneno:{
    },
    password:{
        type: String
    }

})

const User = new mongoose.model('User', userSchema);
module.exports = User;