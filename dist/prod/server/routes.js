"use strict";
var services = require('./services/index');
function init(app) {
    services.init(app);
}
exports.init = init;
