"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var compression = require('compression');
var routes = require('./routes');
var redis_1 = require('./db/redis');
var _clientDir = '../client';
var app = express();
function init(port, mode) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(bodyParser.text());
    app.use(compression());
    redis_1.Init();
    if (mode == 'dev') {
        app.all('/*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'X-Requested-With');
            next();
        });
        routes.init(app);
        var root = path.resolve(process.cwd());
        var clientRoot = path.resolve(process.cwd(), './dist/dev/client');
        app.use(express.static(root));
        app.use(express.static(clientRoot));
        var renderIndex = function (req, res) {
            res.sendFile(path.resolve(__dirname, _clientDir + '/index.html'));
        };
        app.get('/*', renderIndex);
    }
    else {
        routes.init(app);
        app.use('/js', express.static(path.resolve(__dirname, _clientDir + '/js')));
        app.use('/css', express.static(path.resolve(__dirname, _clientDir + '/css')));
        app.use('/assets', express.static(path.resolve(__dirname, _clientDir + '/assets')));
        var renderIndex = function (req, res) {
            res.sendFile(path.resolve(__dirname, _clientDir + '/index.html'));
        };
        app.get('/*', renderIndex);
    }
    return new Promise(function (resolve, reject) {
        var server = app.listen(port, function () {
            var port = server.address().port;
            console.log('App is listening on port:' + port);
            resolve(server);
        });
    });
}
exports.init = init;
;
