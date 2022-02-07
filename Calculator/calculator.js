//Install express to host the app onto the server
//Install body-parser to get and use elements from the body
const express = require("express");
const bodyParser = require("body-parser");

//Create instance of express
//Set express instance to use bodyParser
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//Initial open will return add.html
app.get("/", function(req, res){
    res.sendFile(__dirname + "/add.html")
});

//Post request available on initial open will run addition
app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    console.log(req.body);
    res.send("Sum is: " + result);
})

//Navigation to /subtract will open subtract.html
app.get("/subtract", function(req, res){
    res.sendFile(__dirname + "/subtract.html");
})

//Post request available on /subtract will run subtraction
app.post("/subtract", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1-num2;
    console.log(req.body);
    res.send("Sum is: " + result);
})

//Have express instance listen on port 3000
//Initial log message
app.listen(3000, function(){
    console.log("Server is running on port 3000.")
});