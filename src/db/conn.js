const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Ashu14kr:bUgDyECOGOC95ET0@cluster0.cis27.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/users-api", {
    useNewUrlParser:true,
    useUnifiedtopology:true
}).then( ()=>{
    console.log("db connection success");
}).catch((e)=>{
    console.log("connection failed")
})

//https://thawing-lake-36012.herokuapp.com