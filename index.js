var express = require("express");
 
 //use the application off of express.
 var app = express();
 app.use(express.static('public'));
 
 //define the route for "/"
 app.get("/", function (request, response){
     //show this file when the "/" is requested
     response.sendFile("index.html");
 });
const PORT = process.env.PORT || 8081;
 app.listen(PORT);