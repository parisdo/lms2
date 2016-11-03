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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var xhr_headers_1 = require("./xhr-headers");
var auth_service_1 = require("../auth/auth.service");
var config_1 = require('./config');
var CourseService = (function () {
    function CourseService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.levels = [];
        this.badges = [];
        this.token = '';
    }
    CourseService.prototype.ngOnInit = function () {
        this.token = this.authService.token;
    };
    CourseService.prototype.getCourse = function (id) {
        return this.http.get(config_1.apiUrl + "course/" + id + "?token=" + this.authService.token)
            .map(function (res) { return res.json().data; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService.prototype.getAllCourse = function () {
        return this.http.get(config_1.apiUrl + "course?token=" + this.authService.token)
            .map(function (res) { return res.json().data; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService.prototype.createNewCourse = function (newCourse) {
        var body = JSON.stringify(newCourse);
        return this.http.post(config_1.apiUrl + "course/create?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService.prototype.updateStudent = function (student) {
        var body = JSON.stringify(student);
        return this.http.post(config_1.apiUrl + "course/add/students?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService.prototype.editCourse = function (course) {
        var body = JSON.stringify(course);
        return this.http.put(config_1.apiUrl + "course/edit?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService.prototype.settingCourse = function (course) {
        var body = JSON.stringify(course);
        return this.http.post(config_1.apiUrl + "course/setting?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService.prototype.updateStatus = function (course) {
        var body = JSON.stringify(course);
        return this.http.put(config_1.apiUrl + "course/status?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService.prototype.getAllBadge = function (id) {
        return this.http.get(config_1.apiUrl + "course/" + id + "/badge?token=" + this.authService.token)
            .map(function (res) { return res.json().data; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService.prototype.createBadge = function (badge) {
        var body = JSON.stringify(badge);
        return this.http.post(config_1.apiUrl + "course/create/badge?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService.prototype.editBadge = function (badge) {
        var body = JSON.stringify(badge);
        return this.http.put(config_1.apiUrl + "course/edit/badge?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService.prototype.deleteBadge = function (id) {
        return this.http.delete(config_1.apiUrl + "course/delete/badge/" + id + "?token=" + this.authService.token)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService.prototype.getHighscore = function (id) {
        return this.http.get(config_1.apiUrl + "course/highscore/" + id + "?token=" + this.authService.token)
            .map(function (res) { return res.json().data; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
