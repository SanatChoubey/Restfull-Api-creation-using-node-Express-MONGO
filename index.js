const express = require("express");
const router = require("./Router/product")
const app =  express();
const mongoose = require('mongoose');





//mongodb+srv://sanat:<PASSWORD>@cluster0-alg2n.mongodb.net/test?retryWrites=true
mongoose.connect('mongodb+srv://sanat:sanatc@cluster0-alg2n.mongodb.net/names?retryWrites=true', {useNewUrlParser: true});

app.use ((req,res,next)=>{


res.header("Access-Control-Allow-Origin","*")
res.header("Access-Control-Allow-Headers","*")
if(req.method=== "OPTIONS"){

res.header("Access-Control-Allow-Methods","GET,POST,DELETE")
return res.json({})



}
next();

})








app.use("/",router);
app.use((req,res,next)=>{

const error = new Error("404not found");

res.json({name:error.message,
})



})

const port = process.env.PORT || 3000

app.listen(port)
