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
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var StudentService = (function () {
    function StudentService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.studentUrl = 'http://127.0.0.1:5000/api/v1/student';
        this.courseUrl = 'http://127.0.0.1:5000/api/v1/course';
    }
    StudentService.prototype.getStudents = function () {
        return this.http.get(this.studentUrl)
            .map(function (response) { return response.json(); })
            .cache();
    };
    StudentService.prototype.getStudentInCourse = function (id) {
        return this.http.get(this.studentUrl + "?courseId=" + id)
            .map(function (res) { return res.json(); })
            .cache();
    };
    StudentService.prototype.getStudent = function (id) {
        return this.http.get(this.studentUrl + "?id=" + id)
            .map(function (res) { return res.json(); })
            .cache();
    };
    StudentService.prototype.getCourse = function (courseId) {
        return this.http.get(this.courseUrl + "?id=" + courseId)
            .map(function (res) { return res.json(); })
            .cache();
    };
    StudentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3NlcnZpY2VzL3N0dWRlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHFCQUFxRCxlQUFlLENBQUMsQ0FBQTtBQUdyRSxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBTWpDO0lBRUUsd0JBQXFCLElBQVUsRUFBVSxLQUFZO1FBQWhDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBRTdDLGVBQVUsR0FBRyxzQ0FBc0MsQ0FBQztRQUNwRCxjQUFTLEdBQUcscUNBQXFDLENBQUM7SUFIRixDQUFDO0lBS3pELG9DQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNsQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBWSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQTNCLENBQTJCLENBQUM7YUFDNUMsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsMkNBQWtCLEdBQWxCLFVBQW9CLEVBQVU7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxVQUFVLGtCQUFhLEVBQUksQ0FBQzthQUN0RCxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUtELG1DQUFVLEdBQVYsVUFBVyxFQUFPO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsVUFBVSxZQUFPLEVBQUksQ0FBQzthQUM5QyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxRQUFhO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsU0FBUyxZQUFPLFFBQVUsQ0FBQzthQUNuRCxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQWpDSDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBb0NiLHFCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtBQW5DWSxzQkFBYyxpQkFtQzFCLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtcywgSnNvbnB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcblxuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vbW9kZWxzL3N0dWRlbnRcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3R1ZGVudFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUganNvbnA6IEpzb25wKSB7fVxuXG4gIHByaXZhdGUgc3R1ZGVudFVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjUwMDAvYXBpL3YxL3N0dWRlbnQnO1xuICBwcml2YXRlIGNvdXJzZVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjUwMDAvYXBpL3YxL2NvdXJzZSc7XG5cbiAgZ2V0U3R1ZGVudHMgKCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zdHVkZW50VXJsKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiA8U3R1ZGVudFtdPiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2FjaGUoKTtcbiAgfVxuXG4gIGdldFN0dWRlbnRJbkNvdXJzZSAoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8U3R1ZGVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5zdHVkZW50VXJsfT9jb3Vyc2VJZD0ke2lkfWApXG4gICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAuY2FjaGUoKTtcbiAgfVxuXG5cbiAgLy9zdHVkZW50XG5cbiAgZ2V0U3R1ZGVudChpZDogYW55KXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnN0dWRlbnRVcmx9P2lkPSR7aWR9YClcbiAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAuY2FjaGUoKTtcbiAgfVxuXG4gIGdldENvdXJzZShjb3Vyc2VJZDogYW55KXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmNvdXJzZVVybH0/aWQ9JHtjb3Vyc2VJZH1gKVxuICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC5jYWNoZSgpO1xuICB9XG5cblxufVxuIl19
