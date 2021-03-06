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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LFNBQVMsRUFBRSxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBT3BGLElBQUksV0FBVyxHQUFHLFVBQVUsR0FBb0IsRUFBRSxHQUFxQjtZQUNyRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQztRQUtGLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFLRCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQWMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUM5QyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBL0VlLFlBQUksT0ErRW5CLENBQUE7QUFBQSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5pbXBvcnQgeyBJbml0IH0gZnJvbSAnLi9kYi9yZWRpcyc7XG5cbnZhciBfY2xpZW50RGlyID0gJy4uL2NsaWVudCc7XG52YXIgYXBwID0gZXhwcmVzcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdChwb3J0OiBudW1iZXIsIG1vZGU6IHN0cmluZykge1xuXG4gIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcbiAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gIGFwcC51c2UoYm9keVBhcnNlci50ZXh0KCkpO1xuICBhcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4gIC8vIERCIEluaXRcbiAgSW5pdCgpO1xuXG4gIC8qKlxuICAgKiBEZXYgTW9kZS5cbiAgICogQG5vdGUgRGV2IHNlcnZlciB3aWxsIG9ubHkgZ2l2ZSBmb3IgeW91IG1pZGRsZXdhcmUuXG4gICAqL1xuICBpZiAobW9kZSA9PSAnZGV2Jykge1xuICAgIGFwcC5hbGwoJy8qJywgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ1gtUmVxdWVzdGVkLVdpdGgnKTtcbiAgICAgIG5leHQoKTtcbiAgICB9KTtcblxuICAgIHJvdXRlcy5pbml0KGFwcCk7XG5cbiAgICBsZXQgcm9vdCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpKTtcbiAgICBsZXQgY2xpZW50Um9vdCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLi9kaXN0L2Rldi9jbGllbnQnKTtcbiAgICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKHJvb3QpKTtcbiAgICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKGNsaWVudFJvb3QpKTtcblxuICAgIHZhciByZW5kZXJJbmRleCA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgICByZXMuc2VuZEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgX2NsaWVudERpciArICcvaW5kZXguaHRtbCcpKTtcbiAgICB9O1xuICAgIGFwcC5nZXQoJy8qJywgcmVuZGVySW5kZXgpO1xuXG4gICAgLyoqXG4gICAgICogQXBpIFJvdXRlcyBmb3IgYERldmVsb3BtZW50YC5cbiAgICAgKi9cbiAgfVxuICBlbHNlIHtcbiAgICAvKipcbiAgICAgKiBQcm9kIE1vZGUuXG4gICAgICogQG5vdGUgUHJvZCBtb2Qgd2lsbCBnaXZlIHlvdSBzdGF0aWMgKyBtaWRkbGV3YXJlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXBpIFJvdXRlcyBmb3IgYFByb2R1Y3Rpb25gLlxuICAgICAqL1xuICAgIHJvdXRlcy5pbml0KGFwcCk7XG4gICAgLyoqXG4gICAgICogU3RhdGljLlxuICAgICAqL1xuICAgIGFwcC51c2UoJy9qcycsIGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIF9jbGllbnREaXIgKyAnL2pzJykpKTtcbiAgICBhcHAudXNlKCcvY3NzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgX2NsaWVudERpciArICcvY3NzJykpKTtcbiAgICBhcHAudXNlKCcvYXNzZXRzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgX2NsaWVudERpciArICcvYXNzZXRzJykpKTtcblxuICAgIC8qKlxuICAgICAqIFNwYSBSZXMgU2VuZGVyLlxuICAgICAqIEBwYXJhbSByZXEge2FueX1cbiAgICAgKiBAcGFyYW0gcmVzIHthbnl9XG4gICAgICovXG4gICAgdmFyIHJlbmRlckluZGV4ID0gZnVuY3Rpb24gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcbiAgICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBfY2xpZW50RGlyICsgJy9pbmRleC5odG1sJykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmV2ZW50IHNlcnZlciByb3V0aW5nIGFuZCB1c2UgQG5nMi1yb3V0ZXIuXG4gICAgICovXG4gICAgYXBwLmdldCgnLyonLCByZW5kZXJJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogU2VydmVyIHdpdGggZ3ppcCBjb21wcmVzc2lvbi5cbiAgICovXG4gIHJldHVybiBuZXcgUHJvbWlzZTxodHRwLlNlcnZlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBzZXJ2ZXIgPSBhcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICAgIHZhciBwb3J0ID0gc2VydmVyLmFkZHJlc3MoKS5wb3J0O1xuICAgICAgY29uc29sZS5sb2coJ0FwcCBpcyBsaXN0ZW5pbmcgb24gcG9ydDonICsgcG9ydCk7XG4gICAgICByZXNvbHZlKHNlcnZlcik7XG4gICAgfSk7XG4gIH0pO1xufTtcbiJdfQ==
