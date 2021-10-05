const express = require("express");
const User = require("./models/users");
const app = express();
require("./db/conn");

const port = process.env.PORT || 8000

app.use(express.json());

app.post("/users",(req,res) => {
    res.send(data);
    const data = new User(req.body);
    data.save().then(()=>{
        res.send(data);
    }).catch((e) =>{
        res.send(e);
    });
})

app.get("/",(req,res) =>{
    res.send("Hello users how are you . ready o yeah");
})

app.listen(port, ()=>{
    console.log("connection success " + port);
})