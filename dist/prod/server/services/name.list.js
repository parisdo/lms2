"use strict";
var redis = require('redis');
var nameData = require('../data/name.list.json');
function nameList(app) {
    app.get('/api/name-list/static', function (req, res, next) {
        res.json(nameData);
    });
    app.get('/api/name-list', function (req, res, next) {
        var RedisClient = redis.createClient(), nameList = [];
        RedisClient.smembers('name-list', function (err, replies) {
            console.log("\n          Reply length: " + replies.length + ". \n          Reply: " + replies + ".");
            nameList = replies;
            res.json(nameList);
        });
        RedisClient.quit();
    });
    app.post('/api/name-list', function (req, res, next) {
        var RedisClient = redis.createClient(), request = req.body;
        RedisClient.sadd('name-list', request.name, function (err, replies) {
            console.log("\n          Reply: " + replies + ".");
            res.json({ success: true });
        });
        RedisClient.quit();
    });
    app.delete('/api/name-list', function (req, res, next) {
        var RedisClient = redis.createClient(), request = req.body;
        RedisClient.srem('name-list', request.name, function (err, replies) {
            console.log("\n          Reply length: " + replies.length + ". \n          Reply: " + replies + ".");
            res.json({ success: true });
        });
        RedisClient.quit();
    });
}
exports.nameList = nameList;
