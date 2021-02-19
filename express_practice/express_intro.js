var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send("welcome to home");
});
app.get('/about',function(req,res){
    res.send("welcome to about us");
});
app.get('/contact',function(req,res){
    res.send("welcome to contact us page");
});
app.listen(3000, function(){
    console.log("running");
});