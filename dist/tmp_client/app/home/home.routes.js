"use strict";
var index_1 = require('./index');
var page_not_found_component_1 = require("./page-not-found.component");
exports.HomeRoutes = [
    {
        path: '',
        component: index_1.HomeComponent
    },
    { path: '**', component: page_not_found_component_1.PageNotFoundCmponent }
];
