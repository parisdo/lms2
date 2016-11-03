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
var config_1 = require('../services/config');
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
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
        return this.http.post(config_1.apiUrl + "user/signin", body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .cache();
    };
    AuthService.prototype.studentSigin = function (student) {
        var body = JSON.stringify(student);
        return this.http.post(config_1.apiUrl + "user/signin", body, xhr_headers_1.xhrHeaders())
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFnRkMsSUFBQTtBQWhGWSxtQkFBVyxjQWdGdkIsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHt4aHJIZWFkZXJzfSBmcm9tIFwiLi4vc2VydmljZXMveGhyLWhlYWRlcnNcIjtcbmltcG9ydCB7U3R1ZGVudH0gZnJvbSBcIi4uL21vZGVscy9zdHVkZW50XCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHthcGlVcmx9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICB0b2tlbjogc3RyaW5nO1xuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlICByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLnRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgfVxuXG4gICAgdXBsb2FkKGRhdGE6IGFueSl7XG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGxldCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSxcbiAgICAgICAgICAgIHhocjogWE1MSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2Fkc1tdXCIsIGRhdGFbaV0sIGRhdGFbaV0ubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB4aHIub3BlbignUE9TVCcsICdodHRwOi8vNTQuMTc5LjE2MC40Mi9hcGkvdjEvdXBsb2FkJywgdHJ1ZSk7XG4gICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuXG4gICAgfVxuXG4gICAgc2lnbmluICh0ZWFjaGVyOiBUZWFjaGVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh0ZWFjaGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke2FwaVVybH11c2VyL3NpZ25pbmAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYWNoZSgpO1xuICAgIH1cblxuICAgIHN0dWRlbnRTaWdpbihzdHVkZW50OiBTdHVkZW50KXtcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke2FwaVVybH11c2VyL3NpZ25pbmAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYWNoZSgpO1xuICAgIH1cblxuICAgIHNpZ25vdXQoKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncm9sZScpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0cnVlKTtcbiAgICB9XG5cbiAgICBpc0xvZ2dlZEluKCl7XG4gICAgICAgIHJldHVybiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIH1cblxuICAgIHNldFRva2VuKHRva2VuOiBhbnksIHJvbGU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdGhpcy50b2tlbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyb2xlJywgcm9sZSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKCd0b2tlbicpO1xuICAgIH1cblxuICAgIGNoZWNrUm9sZSgpe1xuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sZScpID09ICd0ZWFjaGVyJyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbiJdfQ==
