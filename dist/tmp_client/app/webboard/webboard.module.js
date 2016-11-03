"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var webboard_routing_1 = require("./webboard.routing");
var webboard_component_1 = require("./webboard.component");
var webboard_list_component_1 = require("./webboard-list/webboard-list.component");
var new_post_component_1 = require("./new-post/new-post.component");
var post_component_1 = require("./post/post.component");
var WebboardModule = (function () {
    function WebboardModule() {
    }
    WebboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                webboard_routing_1.webboardRouting
            ],
            declarations: [
                webboard_component_1.WebboardComponent,
                webboard_list_component_1.WebboardListComponent,
                new_post_component_1.NewPostComponent,
                post_component_1.PostComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], WebboardModule);
    return WebboardModule;
}());
exports.WebboardModule = WebboardModule;
