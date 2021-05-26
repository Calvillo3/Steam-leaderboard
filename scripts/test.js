// const fetch = require("node-fetch");


fetch('https://steamspy.com/api.php?request=top100in2weeks')
    .then(response => {response.json()})
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

