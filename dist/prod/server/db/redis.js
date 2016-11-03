"use strict";
var redis = require('redis');
function Init() {
    var RedisClient = redis.createClient();
    RedisClient.sadd("name-list", "Edsger Dijkstra", "Donald Knuth", "Alan Turing", "Grace Hopper", redis.print);
    RedisClient.quit();
}
exports.Init = Init;
