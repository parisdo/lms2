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
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
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
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHFCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUV0RSxtQkFBeUIsU0FBUyxDQUFDLENBQUE7QUFDbkMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUVqQyw0QkFBeUIseUJBQXlCLENBQUMsQ0FBQTtBQUluRDtJQVFJLHFCQUFxQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU52QixlQUFVLEdBQUcsMENBQTBDLENBQUM7UUFDeEQsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQU1wQixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxJQUFTO1FBRVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLFFBQVEsR0FBYSxJQUFJLFFBQVEsRUFBRSxFQUNuQyxHQUFHLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7UUFHL0MsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBRUQsR0FBRyxDQUFDLGtCQUFrQixHQUFHO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBUSxPQUFnQjtRQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQUksQ0FBQyxVQUFZLEVBQUUsSUFBSSxFQUFFLHdCQUFVLEVBQUUsQ0FBQzthQUMxRCxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsT0FBZ0I7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsVUFBWSxFQUFFLElBQUksRUFBRSx3QkFBVSxFQUFFLENBQUM7YUFDMUQsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN4QixLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsZUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLEtBQVUsRUFBRSxJQUFZO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsZUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFBO1FBQ2YsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUNoQixDQUFDO0lBQ0wsQ0FBQztJQWhGTDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBb0ZiLGtCQUFDO0FBQUQsQ0FuRkEsQUFtRkMsSUFBQTtBQW5GWSxtQkFBVyxjQW1GdkIsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHt4aHJIZWFkZXJzfSBmcm9tIFwiLi4vc2VydmljZXMveGhyLWhlYWRlcnNcIjtcbmltcG9ydCB7U3R1ZGVudH0gZnJvbSBcIi4uL21vZGVscy9zdHVkZW50XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHRlYWNoZXJVcmwgPSAnaHR0cDovLzU0LjE2OS4xMTUuMjMzL2FwaS92MS91c2VyL3NpZ25pbic7XG4gICAgcHJpdmF0ZSBzdHVkZW50VXJsID0gJyc7XG5cbiAgICB0b2tlbjogc3RyaW5nO1xuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICB9XG5cbiAgICB1cGxvYWQoZGF0YTogYW55KXtcblxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpLFxuICAgICAgICAgICAgeGhyOiBYTUxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRzW11cIiwgZGF0YVtpXSwgZGF0YVtpXS5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgJ2h0dHA6Ly81NC4xNzkuMTYwLjQyL2FwaS92MS91cGxvYWQnLCB0cnVlKTtcbiAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG5cbiAgICB9XG5cbiAgICBzaWduaW4gKHRlYWNoZXI6IFRlYWNoZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHRlYWNoZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy50ZWFjaGVyVXJsfWAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYWNoZSgpO1xuICAgIH1cblxuICAgIHN0dWRlbnRTaWdpbihzdHVkZW50OiBTdHVkZW50KXtcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudGVhY2hlclVybH1gLCBib2R5LCB4aHJIZWFkZXJzKCkpXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2FjaGUoKTtcbiAgICB9XG5cbiAgICBzaWdub3V0KCkge1xuICAgICAgICB0aGlzLnRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3JvbGUnKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YodHJ1ZSk7XG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpe1xuICAgICAgICByZXR1cm4gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICB9XG5cbiAgICBzZXRUb2tlbih0b2tlbjogYW55LCByb2xlOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRoaXMudG9rZW4pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncm9sZScsIHJvbGUpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZigndG9rZW4nKTtcbiAgICB9XG5cbiAgICBjaGVja1JvbGUoKXtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbGUnKSA9PSAndGVhY2hlcicpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG4iXX0=
