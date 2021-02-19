var express=require('express');
var app=express();
var path=require('path');
app.get('/home',function(req,res){
    res.sendFile(path.join(__dirname+"/home.html"));
});
app.get('/index',function(res,res){
    res.sendFile(path.join(__dirname+"/index.html"));
});
app.get('/contact_us',function(req,res){
    res.sendFile(path.join(__dirname+"/contact_us.html"));
});
app.listen(302,function(){
    console.log("port 302 is running sucessfully");
});