const express = require("express");
const Postwallethistoryr = require("./models/usersWalletHistory");
const User = require("./models/users");
const Userwallet = require("./models/userWalletBalance");
const BadmintonContest = require("./models/badmintonContest");
const app = express();
require("./db/conn");

const port = process.env.PORT || 8000

app.use(express.json());

app.post("/users", (req, res) => {
    const data = new User(req.body);
    console.log(data);
    data.save().then(() => {
        res.send(data);
    }).catch((e) => {
        res.send(e);
    });
})

app.post("/userWalletBalance", (req, res) => {
    const walletdata = new Userwallet(req.body);
    console.log(walletdata);
    walletdata.save().then(() => {
        res.send(walletdata);
    }).catch((e) => {
        res.send(e);
    });
})

app.post("/user/payment/wallethistory/id/lpjkhy", (req, res) => {
    const wallethistoryg = new Postwallethistoryr(req.body);
    console.log(wallethistoryg);
    wallethistoryg.save().then(() => {
        res.send(wallethistoryg);
    }).catch((e) => {
        res.send(e)
    });
})

app.post("/user/created/tournament/badminton/lljjsugsv", (req, res) => {
    const badminton = new BadmintonContest(req.body);
    console.log(badminton);
    badminton.save().then(() => {
        res.send(badminton);
    }).catch((e) => {
        res.send(e);
    });
})

app.get("/user/badminton/tournament/mjhsgfdrte/:status", async (req, res) => {
    try {
        const status = req.params.status;
        const badmintonStatus = await BadmintonContest.find({ status: status });
        res.send(badmintonStatus);
    } catch (error) {
        res.send(error);
    }
})

app.get("/user/badminton/tournament/mjhsgfdrte/:status/:userUidWhoCreated/:userUidWhoAccepted", async (req, res) => {
    try {
        const status = req.params.status;
        const accepted = req.params.userUidWhoAccepted;
        const created = req.params.userUidWhoCreated;
        const newstatus = await BadmintonContest.find({status: status}).where({ $or: [ { userUidWhoCreated: created }, { userUidWhoAccepted: accepted } ] })
        res.send(newstatus);
    } catch (error) {
        res.send(error);
    }
})

// app.get("/user/badminton/tournament/mjhsgfdrte/gg/:status/:userUidWhoCreated", async (req, res) => {
//     try {
//         const status = req.params.status;
//         const accepted = req.params.userUidWhoCreated;
//         const badmintonStatus = await BadmintonContest.find({ status: status, userUidWhoCreated: accepted });
//         res.send(badmintonStatus);
//     } catch (error) {
//         res.send(error);
//     }
// })

app.get("/connected/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const userById = await User.findById(_id);
        res.send(userById);
    } catch (error) {
        res.send(error);
    }
})

app.get("/walletBalance/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const walletBalancebyId = await Userwallet.findById(_id);
        res.send(walletBalancebyId);
    } catch (error) {
        res.send(error);
    }
})

app.get("/walletreact/:user", async (req, res) => {
    try {
        const users = req.params.user;
        const historybyid = await Postwallethistoryr.find({ user: users });
        res.send(historybyid);
    } catch (error) {
        res.send(error);
    }
})

app.patch("/walletBalance/user/updated/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedBalance = await Userwallet.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updatedBalance);
        console.log(updatedBalance);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.patch("/badminton/contest/user/info/status/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedDetails = await BadmintonContest.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updatedDetails);
        console.log(updatedDetails);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/", (req, res) => {
    res.send("Hello users how are you . ready o yeah");
})

app.listen(port, () => {
    console.log("connection success " + port);
})