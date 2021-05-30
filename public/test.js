//const fetch = require("node-fetch");


fetch('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=A849BD363DA7A18C00AEAAE8415632F6&steamids=76561197960361544')
    .then(response => {response.json()})
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

