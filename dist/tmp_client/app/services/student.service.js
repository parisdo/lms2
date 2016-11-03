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
var config_1 = require('./config');
var xhr_headers_1 = require("./xhr-headers");
var auth_service_1 = require("../auth/auth.service");
var StudentService = (function () {
    function StudentService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.students = [];
    }
    StudentService.prototype.getStudent = function (id) {
        return this.http.get(config_1.apiUrl + "student/" + id + "?token=" + this.authService.token)
            .map(function (res) { return res.json().data; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.getStudentBadge = function (id) {
        return this.http.get(config_1.apiUrl + "student/" + id + "/badge?token=" + this.authService.token)
            .map(function (res) { return res.json().data.badge; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.updateStudentsScore = function (students) {
        var body = JSON.stringify(students);
        return this.http.post(config_1.apiUrl + "students/update/score?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.updateStudentsBadge = function (students) {
        var body = JSON.stringify(students);
        return this.http.post(config_1.apiUrl + "students/update/scoreandbadge?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.editStudent = function (student) {
        var body = JSON.stringify(student);
        return this.http.put(config_1.apiUrl + "student/edit?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.editStudentProfile = function (student) {
        var body = JSON.stringify(student);
        return this.http.put(config_1.apiUrl + "student/edit/profile?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.deleteStudent = function (student) {
        var body = JSON.stringify(student);
        return this.http.post(config_1.apiUrl + "students/delete?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.deleteStudentBadge = function (badge) {
        var body = JSON.stringify(badge);
        console.log(body);
        return this.http.post(config_1.apiUrl + "student/delete/badge?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
