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
var WebboardService = (function () {
    function WebboardService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    WebboardService.prototype.createPost = function (post) {
        var body = JSON.stringify(post);
        return this.http.post(config_1.apiUrl + "post/create?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebboardService.prototype.getAllPost = function (id) {
        return this.http.get(config_1.apiUrl + "post/course/" + id + "?token=" + this.authService.token)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebboardService.prototype.editPost = function (post) {
        var body = JSON.stringify(post);
        return this.http.post(config_1.apiUrl + "post/edit?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebboardService.prototype.deletePost = function (id) {
        var body = JSON.stringify(id);
        return this.http.post(config_1.apiUrl + "post/delete?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebboardService.prototype.postComment = function (post) {
        var body = JSON.stringify(post);
        return this.http.post(config_1.apiUrl + "post/comment?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebboardService.prototype.editComment = function (post) {
        var body = JSON.stringify(post);
        return this.http.post(config_1.apiUrl + "post/comment/edit?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebboardService.prototype.deleteComment = function (id) {
        var body = JSON.stringify(id);
        return this.http.post(config_1.apiUrl + "post/comment/delete?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebboardService.prototype.replyComment = function (post) {
        var body = JSON.stringify(post);
        return this.http.post(config_1.apiUrl + "post/replycomment?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebboardService.prototype.editReplyComment = function (post) {
        var body = JSON.stringify(post);
        return this.http.post(config_1.apiUrl + "post/replycomment/edit?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebboardService.prototype.deleteReplyComment = function (id) {
        var body = JSON.stringify(id);
        return this.http.post(config_1.apiUrl + "post/replycomment/delete?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebboardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], WebboardService);
    return WebboardService;
}());
exports.WebboardService = WebboardService;
