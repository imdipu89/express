var express=require('express');
var ejs=require('ejs');
var app=express();
var path=require("path");
const { join } = require('path');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"assests")));
app.get("/",function(req,res){
    res.render("home");
});
app.get("/about",function(req,res){
    res.render("about");
});
app.listen(8998,function(){
    console.log("port 8998 is running");
});