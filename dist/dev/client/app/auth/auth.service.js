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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LGlCQUFVLEVBQUU7O21CQUFBO0lBb0ZiLGtCQUFDO0FBQUQsQ0FuRkEsQUFtRkMsSUFBQTtBQW5GWSxtQkFBVyxjQW1GdkIsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHt4aHJIZWFkZXJzfSBmcm9tIFwiLi4vc2VydmljZXMveGhyLWhlYWRlcnNcIjtcbmltcG9ydCB7U3R1ZGVudH0gZnJvbSBcIi4uL21vZGVscy9zdHVkZW50XCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB0ZWFjaGVyVXJsID0gJ2h0dHA6Ly81NC4xNjkuMTE1LjIzMy9hcGkvdjEvdXNlci9zaWduaW4nO1xuICAgIHByaXZhdGUgc3R1ZGVudFVybCA9ICcnO1xuXG4gICAgdG9rZW46IHN0cmluZztcbiAgICByZWRpcmVjdFVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSAgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIH1cblxuICAgIHVwbG9hZChkYXRhOiBhbnkpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBsZXQgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCksXG4gICAgICAgICAgICB4aHI6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZHNbXVwiLCBkYXRhW2ldLCBkYXRhW2ldLm5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnaHR0cDovLzU0LjE3OS4xNjAuNDIvYXBpL3YxL3VwbG9hZCcsIHRydWUpO1xuICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcblxuICAgIH1cblxuICAgIHNpZ25pbiAodGVhY2hlcjogVGVhY2hlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodGVhY2hlcik7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnRlYWNoZXJVcmx9YCwgYm9keSwgeGhySGVhZGVycygpKVxuICAgICAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhY2hlKCk7XG4gICAgfVxuXG4gICAgc3R1ZGVudFNpZ2luKHN0dWRlbnQ6IFN0dWRlbnQpe1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy50ZWFjaGVyVXJsfWAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYWNoZSgpO1xuICAgIH1cblxuICAgIHNpZ25vdXQoKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncm9sZScpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0cnVlKTtcbiAgICB9XG5cbiAgICBpc0xvZ2dlZEluKCl7XG4gICAgICAgIHJldHVybiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIH1cblxuICAgIHNldFRva2VuKHRva2VuOiBhbnksIHJvbGU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdGhpcy50b2tlbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyb2xlJywgcm9sZSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKCd0b2tlbicpO1xuICAgIH1cblxuICAgIGNoZWNrUm9sZSgpe1xuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sZScpID09ICd0ZWFjaGVyJyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbiJdfQ==
