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
    CourseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, (typeof (_a = typeof auth_service_1.AuthService !== 'undefined' && auth_service_1.AuthService) === 'function' && _a) || Object])
    ], CourseService);
    return CourseService;
    var _a;
}());
exports.CourseService = CourseService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MscUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBQ3JFLDJCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBRWpELFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFHakMsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDZCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBR2pELHVCQUFxQixVQUFVLENBQUMsQ0FBQTtBQU9oQztJQUVFLHVCQUFxQixJQUFVLEVBQVUsV0FBd0I7UUFBNUMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBR2pFLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFFYixVQUFLLEdBQVcsRUFBRSxDQUFDO0lBTHlDLENBQUM7SUFPckUsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVyxFQUFPO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxlQUFNLGVBQVUsRUFBRSxlQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBTyxDQUFDO2FBQ3hFLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQWYsQ0FBZSxDQUFDO2FBQzdCLEtBQUssQ0FBQyxVQUFDLEtBQVMsSUFBSyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsb0NB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LENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksZUFBTSw0QkFBdUIsRUFBRSxlQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBTyxDQUFDO2FBQ3hGLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDbEMsS0FBSyxDQUFDLFVBQUMsS0FBUyxJQUFLLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUEzRUg7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQTZFYixvQkFBQzs7QUFBRCxDQTVFQSxBQTRFQyxJQUFBO0FBNUVZLHFCQUFhLGdCQTRFekIsQ0FBQSIsImZpbGUiOiJhcHAvaG9tZS9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMsIEpzb25wfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5cbmltcG9ydCB7Q291cnNlfSBmcm9tIFwiLi4vbW9kZWxzL2NvdXJzZVwiO1xuaW1wb3J0IHt4aHJIZWFkZXJzfSBmcm9tIFwiLi94aHItaGVhZGVyc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0FkZENvdXJzZX0gZnJvbSBcIi4uL21vZGVscy9hZGRfY291cnNlXCI7XG5cbmltcG9ydCB7YXBpVXJsfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge0VkaXRYcENvdXJzZX0gZnJvbSBcIi4uL21vZGVscy9lZGl0X3hwXCI7XG5pbXBvcnQge0xldmVsfSBmcm9tIFwiLi4vbW9kZWxzL2xldmVsXCI7XG5pbXBvcnQge0JhZGdlfSBmcm9tIFwiLi4vbW9kZWxzL2JhZGdlXCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvdXJzZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIGNvdXJzZTogQ291cnNlO1xuICBsZXZlbHM6IExldmVsW10gPSBbXTtcblxuICBwcml2YXRlIHRva2VuOiBzdHJpbmcgPSAnJztcblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMudG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLnRva2VuO1xuICB9XG5cbiAgZ2V0Q291cnNlIChpZDogYW55KTogT2JzZXJ2YWJsZTxDb3Vyc2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHthcGlVcmx9Y291cnNlLyR7aWR9P3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gKVxuICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkuZGF0YSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjphbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKSk7XG4gIH1cblxuICBnZXRBbGxDb3Vyc2UgKCk6IE9ic2VydmFibGU8Q291cnNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHthcGlVcmx9Y291cnNlP3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gKVxuICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkuZGF0YSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjphbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKSk7XG4gIH1cblxuICBjcmVhdGVOZXdDb3Vyc2UobmV3Q291cnNlOiBBZGRDb3Vyc2UpOiBPYnNlcnZhYmxlPEFkZENvdXJzZT57XG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShuZXdDb3Vyc2UpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHthcGlVcmx9Y291cnNlL2NyZWF0ZT90b2tlbj0ke3RoaXMuYXV0aFNlcnZpY2UudG9rZW59YCwgYm9keSwgeGhySGVhZGVycygpKVxuICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6YW55KSA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJykpO1xuICB9XG5cbiAgZWRpdENvdXJzZShjb3Vyc2U6IENvdXJzZSk6IE9ic2VydmFibGU8Q291cnNlPntcbiAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNvdXJzZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7YXBpVXJsfWNvdXJzZS9lZGl0P3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gLCBib2R5LCB4aHJIZWFkZXJzKCkpXG4gICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjphbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKSk7XG4gIH1cblxuXG4gIHNldHRpbmdDb3Vyc2UoY291cnNlOiBFZGl0WHBDb3Vyc2UpOiBPYnNlcnZhYmxlPEVkaXRYcENvdXJzZT57XG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjb3Vyc2UpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHthcGlVcmx9Y291cnNlL3NldHRpbmc/dG9rZW49JHt0aGlzLmF1dGhTZXJ2aWNlLnRva2VufWAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG5cbiAgLy9CYWRnZVxuXG4gIGdldEFsbEJhZGdlIChpZDogYW55KTogT2JzZXJ2YWJsZTxCYWRnZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7YXBpVXJsfWNvdXJzZS8ke2lkfS9iYWRnZT90b2tlbj0ke3RoaXMuYXV0aFNlcnZpY2UudG9rZW59YClcbiAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpLmRhdGEpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6YW55KSA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJykpO1xuICB9XG5cblxuICBjcmVhdGVCYWRnZShiYWRnZTogQmFkZ2UpOiBPYnNlcnZhYmxlPEJhZGdlPntcbiAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJhZGdlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7YXBpVXJsfWNvdXJzZS9jcmVhdGUvYmFkZ2U/dG9rZW49JHt0aGlzLmF1dGhTZXJ2aWNlLnRva2VufWAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG4gIGVkaXRCYWRnZShiYWRnZTogQmFkZ2UpOiBPYnNlcnZhYmxlPEJhZGdlPntcbiAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJhZGdlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgJHthcGlVcmx9Y291cnNlL2VkaXQvYmFkZ2U/dG9rZW49JHt0aGlzLmF1dGhTZXJ2aWNlLnRva2VufWAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuICBkZWxldGVCYWRnZShpZDphbnkpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke2FwaVVybH1jb3Vyc2UvZGVsZXRlL2JhZGdlLyR7aWR9P3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gKVxuICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG59XG4iXX0=
