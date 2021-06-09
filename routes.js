"use strict";

const express = require("express");
const appid = require("appid");

const SteamAPI = require('steamapi');
const steam = new SteamAPI('229EC1EF5800D26CDF74E448F2CCB67B');

const router = express.Router();



router.route("/gamedetails/:id")
    .get((_req, res) => {
        // console.log("GET /");
        steam.getGameDetails(_req.params.id).then(summary => {
            res.status(200).send(summary);
        });
    });

router.route("/gameschema/:id")
    .get((_req, res) => {
        // console.log("GET /");
        steam.getGameSchema(_req.params.id).then(summary => {
            res.status(200).send(summary);
        });
    });

router.route("/playercount/:id")
    .get((_req, res) => {
        // console.log("GET /");
        steam.getGamePlayers(_req.params.id).then(summary => {
            //console.log(summary);
            res.status(200).send(summary.toString());
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

   