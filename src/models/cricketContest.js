const mongoose = require("mongoose");

const cricketSchema = new mongoose.Schema({

    status:{
        type: String
    },
    matchType:{
        type: String
    },
    totalOvers:{
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
    createrName:{},
    acceperName:{},
    userWhoCreatedLocation:{},
    userWhoCreatedContactDetail:{},
    contestCreatedDate:{}

})

const CricketContest = new mongoose.model("CricketContest", cricketSchema);
module.exports = CricketContest;