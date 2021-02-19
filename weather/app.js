var express=require('express');
var app=express();
var path=require("path")
app.use(express.static(path.join(__dirname,"../public")));
app.get("/",function(req,res){
    res.send("welcome to My Weather.com")
})
app.get("/weather",function(req,res){
    res.send("welcome to Weather Page")N