var express=require("express");
var ejs=require('ejs');
var path=require('path');
var app=express();
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, "assests")));
app.get("/",function(req,res){
    res.render("home");
});
app.get("/about",function(req,res){
    res.render("about");
});
app.listen(4000,function(){
    console.log("server is running");
}); 