"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var auth_routing_1 = require("./auth/auth.routing");
var can_deactivate_guard_service_1 = require("./auth/can-deactivate-guard.service");
exports.routes = index_1.HomeRoutes.slice();
exports.appRoutingProviders = [
    auth_routing_1.authProviders,
    can_deactivate_guard_service_1.CanDeactivateGuard
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
