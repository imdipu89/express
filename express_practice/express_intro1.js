var express=require('express');
var data=express();
data.get('/home',function(req,res){
    res.send("welcome to home file");
});
data.get('/index',function(req,res){
    res.send("welcome to index file");
});
data.get('/contact_us',function(req,res){
    res.send("welcone to contact us page");
});
data.listen(301,function(){
    console.log("running");
});
