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
var xhr_headers_1 = require("../services/xhr-headers");
var router_1 = require("@angular/router");
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.teacherUrl = 'http://54.169.115.233/api/v1/user/signin';
        this.studentUrl = '';
        this.token = localStorage.getItem('token');
    }
    AuthService.prototype.upload = function (data) {
        console.log(data);
        var formData = new FormData(), xhr = new XMLHttpRequest();
        for (var i = 0; i < data.length; i++) {
            formData.append("uploads[]", data[i], data[i].name);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('success');
                    console.log(xhr.response);
                }
                else {
                    console.log('error');
                    console.log(xhr.response);
                }
            }
        };
        xhr.open('POST', 'http://54.179.160.42/api/v1/upload', true);
        xhr.send(formData);
        console.log(formData);
    };
    AuthService.prototype.signin = function (teacher) {
        var body = JSON.stringify(teacher);
        return this.http.post("" + this.teacherUrl, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .cache();
    };
    AuthService.prototype.studentSigin = function (student) {
        var body = JSON.stringify(student);
        return this.http.post("" + this.teacherUrl, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .cache();
    };
    AuthService.prototype.signout = function () {
        this.token = undefined;
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        return Rx_1.Observable.of(true);
    };
    AuthService.prototype.isLoggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.setToken = function (token, role) {
        this.token = token;
        localStorage.setItem('token', this.token);
        localStorage.setItem('role', role);
        return Rx_1.Observable.of('token');
    };
    AuthService.prototype.checkRole = function () {
        if (localStorage.getItem('role') == 'teacher') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
