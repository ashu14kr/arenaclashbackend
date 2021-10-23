const mongoose = require("mongoose");

const badmintonSchema = new mongoose.Schema({

    status:{
        type: String
    },
    matchType:{
        type: String
    },
    totalPoints:{
        type: String
    },
    betCoins:{
        type: Number
    },
    winningCoins:{
        type: Number
    },
    whoWon:{},
    whoLose:{},
    userlat:{},
    userlng:{},
    userUidWhoCreated:{},
    userUidWhoAccepted:{},
    createrName:{
        Type: String
    },
    acceperName:{
        Type: String
    },
    userWhoCreatedLocation:{},
    userWhoCreatedContactDetail:{},
    contestCreatedDate:{}

})

const BadmintonContest = new mongoose.model("BadmintonContest", badmintonSchema);
module.exports = BadmintonContest;