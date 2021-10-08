const mongoose = require("mongoose");

const userBalanceSchema = new mongoose.Schema({

    _id:{
    },
    amount: {
        type: Number,
    },

})

const Userwallet = new mongoose.model('userWalletBalance', userBalanceSchema);
module.exports = Userwallet;

