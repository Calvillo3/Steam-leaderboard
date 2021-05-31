"use strict";

const express = require("express");
const appid = require("appid");

const SteamAPI = require('steamapi');
const steam = new SteamAPI('229EC1EF5800D26CDF74E448F2CCB67B');

const router = express.Router();



router.route("/doc")
    .get((_req, res) => {
        // console.log("GET /");
        steam.getUserSummary('76561198146931523').then(summary => {
            res.status(200).send(summary);
        });
    });

router.route("/searchlist/:id")
    .get((_req, res) => {
        //console.log("GET /");
        appid(new RegExp(_req.params.id, 'i')).then(summary => {
            res.status(200).send(summary);
        });
    });

module.exports = router;

// steam.getUserSummary('76561198146931523').then(summary => {
// 	console.log(summary);
// });

// router.route("/doc")
//     .get((_req, res) => {
//         console.log("GET /");
//         res.status(200).send({
//             data: "App is running."
//         });
//     });

   