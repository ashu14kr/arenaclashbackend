const mongoose = require("mongoose");

const withdrawalDataSchema = new mongoose.Schema({

    status:{},
    userUid:{},
    amount:{},
    createddate:{},
    requestedId:{},
    paymentMethod:{},
    completedDate:{},
    userPhoneNo:{},
    transactiontype:{}
})

const WithdrawalData = new mongoose.model("WithdrawalData", withdrawalDataSchema);
module.exports = WithdrawalData;