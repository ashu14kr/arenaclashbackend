const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/users-api", {
    useNewUrlParser:true,
    useUnifiedtopology:true
}).then( ()=>{
    console.log("db connection success");
}).catch((e)=>{
    console.log("db connection failed")
})

//https://thawing-lake-36012.herokuapp.com