const mongoose = require("mongoose");

const footballSchema = new mongoose.Schema({

    status:{
        type: String
    },
    matchType:{
        type: String
    },
    totalGoals:{
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

const FootballContest = new mongoose.model("FootballContest", footballSchema);
module.exports = FootballContest;