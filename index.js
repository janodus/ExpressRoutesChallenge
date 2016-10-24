// == REQUIRE PACKAGES
var express = require("express");
var app = express();

// == ROUTES 

app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req,res){
  if (req.params.animal === "pig") {
    res.send("OINK!");
  }
  else if (req.params.animal === "cow") {
    res.send("MOOOOOO!");
  }
  else if (req.params.animal === "dog") {
    res.send("The dog says 'WOOF WOOF!'")
  }
});

app.get("/repeat/:text/:times", function(req,res){
  console.log(req.params.text);
  console.log(req.params.times);
  var stringText = req.params.text;
  var returnText = [];

  // For loop to create the returnText array (which will be joined later on   
    for(var i = 1; i <= req.params.times; i++){
    returnText.push(req.params.text) 
    };
  
  // Joins the returnText array in to a simple output line  
  var stringText = returnText.join(" ")
  // Page response here
  res.send(stringText);  
});

// Catch all 
app.get("*", function(req,res){
  res.send("What are you going with your life?")
});

// == SERVER 
app.listen(process.env.PORT, process.env.IP, function(){console.log("Server has been started.")});