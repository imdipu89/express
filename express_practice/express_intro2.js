var express=require('express');
var data=express();
data.get('/home',function(req,res){
    res.send('welcome to home');
});
data.get('/home1',function(req,res){
    res.send('welcome to home1');
});
data.get('/home2',function(req,res){
    res.send('welcome to home2');
});
data.listen(3001,function(){
    console.log("port is running");
});