const mongoose = require("mongoose");

const walletHistorySchema = new mongoose.Schema({

    user: {type: String},
    status: {
        type: String
    },
    requestId: {
        type: String
    },
    senderName: {
        type: String
    },
    paymentCreated: {
        type: String
    },
    processedOn: {
        type: String
    },
    amount: {
        type: Number
    }
})

const Postwallethistory = new mongoose.model("walletHistory", walletHistorySchema);
module.exports = Postwallethistory;