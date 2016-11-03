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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var xhr_headers_1 = require("./xhr-headers");
var auth_service_1 = require("../auth/auth.service");
var config_1 = require('./config');
var TeacherService = (function () {
    function TeacherService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.teacherUrl = config_1.apiUrl + "teacher";
        this.registrationUrl = config_1.apiUrl + "user/registration";
    }
    TeacherService.prototype.getTeacher = function () {
        return this.http.get(this.teacherUrl + "?token=" + this.authService.token)
            .map(function (res) { return res.json().data.teacher_profile[0]; })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    TeacherService.prototype.addTeacher = function (teacher) {
        var body = JSON.stringify(teacher);
        return this.http.post("" + this.registrationUrl, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    TeacherService.prototype.editTeacherProfile = function (teacher) {
        var body = JSON.stringify(teacher);
        return this.http.put(this.teacherUrl + "/edit/profile?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    TeacherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], TeacherService);
    return TeacherService;
}());
exports.TeacherService = TeacherService;
