"use strict";
var router_1 = require('@angular/router');
var signin_component_1 = require("./signin.component");
var signup_component_1 = require("./signup.component");
var auth_service_1 = require("./auth.service");
var auth_guard_service_1 = require("./auth-guard.service");
var auth_component_1 = require("./auth.component");
var authRoutes = [{
        path: 'auth',
        component: auth_component_1.AuthComponent,
        children: [
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
        ] }
];
exports.authProviders = [
    auth_guard_service_1.AuthGuard,
    auth_service_1.AuthService
];
exports.authRouting = router_1.RouterModule.forChild(authRoutes);
