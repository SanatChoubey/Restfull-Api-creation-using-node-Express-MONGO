const express = require('express')

const router= express.Router()
const productmodel = require("../model/product")

router.get("/product/:names",(req,res,next)=>{
productmodel.find().then(soc=>{

res.json({

product:sococ


})



})




})


module.exports= router
