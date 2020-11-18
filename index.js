const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const fs = require('fs');

const app = express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

let apiKey = fs.readFileSync("apikey.txt", 'utf-8');
console.log(apiKey)

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req,res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  console.log(firstName)
});

app.listen(3000, function(){
  console.log("server is listening to 3000")
});
