"use strict";
var router_1 = require('@angular/router');
var webboard_component_1 = require("./webboard.component");
var webboard_list_component_1 = require("./webboard-list/webboard-list.component");
var new_post_component_1 = require("./new-post/new-post.component");
var post_component_1 = require("./post/post.component");
var webboardRoutes = [
    {
        path: 'webboard',
        component: webboard_component_1.WebboardComponent,
        children: [
            { path: '', component: webboard_list_component_1.WebboardListComponent },
            { path: 'new-post', component: new_post_component_1.NewPostComponent },
            { path: 'post', component: post_component_1.PostComponent }
        ]
    }
];
exports.webboardRouting = router_1.RouterModule.forChild(webboardRoutes);
