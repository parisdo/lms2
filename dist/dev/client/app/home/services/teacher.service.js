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
var teacher_1 = require("../models/teacher");
var xhr_headers_1 = require("./xhr-headers");
var auth_service_1 = require("../auth/auth.service");
var config_1 = require('./config');
var TeacherService = (function () {
    function TeacherService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.teacher = new teacher_1.Teacher();
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
    TeacherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, (typeof (_a = typeof auth_service_1.AuthService !== 'undefined' && auth_service_1.AuthService) === 'function' && _a) || Object])
    ], TeacherService);
    return TeacherService;
    var _a;
}());
exports.TeacherService = TeacherService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3NlcnZpY2VzL3RlYWNoZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHFCQUE2RCxlQUFlLENBQUMsQ0FBQTtBQUU3RSxtQkFBeUIsU0FBUyxDQUFDLENBQUE7QUFDbkMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyx3QkFBc0IsbUJBQW1CLENBQUMsQ0FBQTtBQUMxQyw0QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsNkJBQTBCLHNCQUFzQixDQUFDLENBQUE7QUFFakQsdUJBQXFCLFVBQVUsQ0FBQyxDQUFBO0FBR2hDO0lBT0ksd0JBQXFCLElBQVUsRUFBVSxXQUF3QjtRQUE1QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFMakUsWUFBTyxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBRXpCLGVBQVUsR0FBTSxlQUFNLFlBQVMsQ0FBQztRQUNoQyxvQkFBZSxHQUFNLGVBQU0sc0JBQW1CLENBQUM7SUFFYSxDQUFDO0lBRXJFLG1DQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFVBQVUsZUFBVSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQU8sQ0FBQzthQUNyRSxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQzthQUNoRCxLQUFLLENBQUMsVUFBQyxLQUFTLElBQUssT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQztJQUN0RixDQUFDO0lBSUQsbUNBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLGVBQWlCLEVBQUUsSUFBSSxFQUFFLHdCQUFVLEVBQUUsQ0FBQzthQUMvRCxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxVQUFDLEtBQVMsSUFBSyxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUF2Qkw7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQXlCYixxQkFBQzs7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLHNCQUFjLGlCQXdCMUIsQ0FBQSIsImZpbGUiOiJhcHAvaG9tZS9zZXJ2aWNlcy90ZWFjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnMsIEpzb25wfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0IHtUZWFjaGVyfSBmcm9tIFwiLi4vbW9kZWxzL3RlYWNoZXJcIjtcbmltcG9ydCB7eGhySGVhZGVyc30gZnJvbSBcIi4veGhyLWhlYWRlcnNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9hdXRoL2F1dGguc2VydmljZVwiO1xuXG5pbXBvcnQge2FwaVVybH0gZnJvbSAnLi9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVhY2hlclNlcnZpY2Uge1xuXG4gICAgdGVhY2hlcjogVGVhY2hlciA9IG5ldyBUZWFjaGVyKCk7XG5cbiAgICBwcml2YXRlIHRlYWNoZXJVcmwgPSBgJHthcGlVcmx9dGVhY2hlcmA7XG4gICAgcHJpdmF0ZSByZWdpc3RyYXRpb25VcmwgPSBgJHthcGlVcmx9dXNlci9yZWdpc3RyYXRpb25gO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG5cbiAgICBnZXRUZWFjaGVyICgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnRlYWNoZXJVcmx9P3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gKVxuICAgICAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpLmRhdGEudGVhY2hlcl9wcm9maWxlWzBdKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjphbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKSk7XG4gICAgfVxuXG5cblxuICAgIGFkZFRlYWNoZXIodGVhY2hlcjogVGVhY2hlcik6IE9ic2VydmFibGU8VGVhY2hlcj57XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodGVhY2hlcik7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnJlZ2lzdHJhdGlvblVybH1gLCBib2R5LCB4aHJIZWFkZXJzKCkpXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgICB9XG5cbn1cbiJdfQ==
