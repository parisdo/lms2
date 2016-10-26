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
    StudentService.prototype.updateStudentsScore = function (students) {
        var body = JSON.stringify(students);
        return this.http.put(config_1.apiUrl + "students/update/score?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
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
        console.log(body);
        return this.http.post(config_1.apiUrl + "students/delete?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxxQkFBcUQsZUFBZSxDQUFDLENBQUE7QUFDckUsMkJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFFakQsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUdqQyx1QkFBcUIsVUFBVSxDQUFDLENBQUE7QUFDaEMsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDZCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBS2pEO0lBSUUsd0JBQXFCLElBQVUsRUFBVyxXQUF3QjtRQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGbEUsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQUU0QyxDQUFDO0lBRXRFLDRDQUFtQixHQUFuQixVQUFvQixRQUFhO1FBQy9CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLGVBQU0sb0NBQStCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBTyxFQUFFLElBQUksRUFBRSx3QkFBVSxFQUFFLENBQUM7YUFDdkcsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN4QixLQUFLLENBQUMsVUFBQyxLQUFTLElBQUssT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELDJDQUFrQixHQUFsQixVQUFtQixPQUFZO1FBQzdCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLGVBQU0sbUNBQThCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBTyxFQUFFLElBQUksRUFBRSx3QkFBVSxFQUFFLENBQUM7YUFDdEcsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN4QixLQUFLLENBQUMsVUFBQyxLQUFTLElBQUssT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUdELHNDQUFhLEdBQWIsVUFBYyxPQUFZO1FBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksZUFBTSw4QkFBeUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFPLEVBQUUsSUFBSSxFQUFFLHdCQUFVLEVBQUUsQ0FBQzthQUNsRyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxVQUFDLEtBQVMsSUFBSyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQztJQUNsRixDQUFDO0lBNUJIO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFnQ2IscUJBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLHNCQUFjLGlCQStCMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtcywgSnNvbnB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcblxuXG5pbXBvcnQge2FwaVVybH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHt4aHJIZWFkZXJzfSBmcm9tIFwiLi94aHItaGVhZGVyc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi9tb2RlbHMvc3R1ZGVudFwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHVkZW50U2VydmljZSB7XG5cbiAgc3R1ZGVudHM6IFN0dWRlbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHAsICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuICB1cGRhdGVTdHVkZW50c1Njb3JlKHN0dWRlbnRzOiBhbnkpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50cyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7YXBpVXJsfXN0dWRlbnRzL3VwZGF0ZS9zY29yZT90b2tlbj0ke3RoaXMuYXV0aFNlcnZpY2UudG9rZW59YCwgYm9keSwgeGhySGVhZGVycygpKVxuICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLmNhdGNoKChlcnJvcjphbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKSk7XG4gIH1cblxuICBlZGl0U3R1ZGVudFByb2ZpbGUoc3R1ZGVudDogYW55KTogT2JzZXJ2YWJsZTxTdHVkZW50PntcbiAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnQpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke2FwaVVybH1zdHVkZW50L2VkaXQvcHJvZmlsZT90b2tlbj0ke3RoaXMuYXV0aFNlcnZpY2UudG9rZW59YCwgYm9keSwgeGhySGVhZGVycygpKVxuICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLmNhdGNoKChlcnJvcjphbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKSk7XG4gIH1cblxuXG4gIGRlbGV0ZVN0dWRlbnQoc3R1ZGVudDogYW55KTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoc3R1ZGVudCk7XG4gICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke2FwaVVybH1zdHVkZW50cy9kZWxldGU/dG9rZW49JHt0aGlzLmF1dGhTZXJ2aWNlLnRva2VufWAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6YW55KSA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJykpO1xuICB9XG5cblxuXG59XG4iXX0=
