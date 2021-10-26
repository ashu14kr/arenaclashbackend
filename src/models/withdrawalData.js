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

const withdrawalData = new mongoose.model("WithdawalData", withdrawalDataSchema);
module.exports = withdrawalData;