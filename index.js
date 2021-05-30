var express = require("express");
const SteamAPI = require('steamapi');
const steam = new SteamAPI('229EC1EF5800D26CDF74E448F2CCB67B');
 
 //use the application off of express.
 var app = express();
 app.use(express.static('public'));
 
 //define the route for "/"
 app.get("/", function (request, response){
     //show this file when the "/" is requested
     response.sendFile("index.html");
     console.log('ran');
 });

const routes = require("./routes");
app.use("", routes);

const PORT = process.env.PORT || 8081;
 app.listen(PORT);

//  steam.getUserSummary('76561198146931523').then(summary => {
// 	console.log(summary);
// });