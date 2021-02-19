var express=require("express");
var app=express();
var path=require('path');
app.get('/home',function(req,res){
    res.sendFile(path.join(__dirname+'/home.html'));
});
app.get('/about_us',function(req,res){
    res.sendFile(path.join(__dirname+'/about_us.html'));
});
app.get('/nav_bar',function(req,res){
    res.sendFile(path.join(__dirname+'/nav_bar.html'));
});
app.get('/form',function(req,res){
    res.sendFile(path.join(__dirname+'/form.html'));
});
app.listen(300);