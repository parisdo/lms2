"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var home_module_1 = require('./home/home.module');
var shared_module_1 = require('./shared/shared.module');
var auth_module_1 = require("./auth/auth.module");
var teach_module_1 = require("./teach/teach.module");
var course_module_1 = require("./course/course.module");
var student_module_1 = require("./student/student.module");
var webboard_module_1 = require("./webboard/webboard.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                shared_module_1.SharedModule.forRoot(),
                home_module_1.HomeModule,
                auth_module_1.AuthModule,
                teach_module_1.TeachModule,
                course_module_1.CourseModule,
                student_module_1.StudentModule,
                webboard_module_1.WebboardModule
            ],
            declarations: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '<%= APP_BASE %>'
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
