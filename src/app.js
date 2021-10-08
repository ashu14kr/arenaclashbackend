const express = require("express");
const User = require("./models/users");
const Userwallet = require("./models/userWalletBalance")
const app = express();
require("./db/conn");

const port = process.env.PORT || 8000

app.use(express.json());

app.post("/users",(req,res) => {
    const data = new User(req.body);
    console.log(data);
    data.save().then(()=>{
        res.send(data);
    }).catch((e) =>{
        res.send(e);
    });
})

app.post("/userWalletBalance", (req,res) =>{
    const walletdata = new Userwallet(req.body);
    console.log(walletdata);
    walletdata.save().then(() =>{
        res.send(walletdata);
    }).catch((e)=>{
        res.send(e);
    });
})

app.get("/",(req,res) =>{
    res.send("Hello users how are you . ready o yeah");
})

app.listen(port, ()=>{
    console.log("connection success " + port);
})