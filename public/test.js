//const fetch = require("node-fetch");
const baseURL = 'http://localhost:8081';
//const { response } = require("express");



// fetch('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=229EC1EF5800D26CDF74E448F2CCB67B&steamids=76561197960361544')
//     .then(response => {response.json()})
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

fetch('/doc')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

