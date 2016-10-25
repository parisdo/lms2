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
        this.badges = [];
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
    CourseService.prototype.updateStatus = function (course) {
        var body = JSON.stringify(course);
        return this.http.put(config_1.apiUrl + "course/status?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
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
    CourseService.prototype.getHighscore = function (id) {
        return this.http.get(config_1.apiUrl + "course/highscore/" + id + "?token=" + this.authService.token)
            .map(function (res) { return res.json().data; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CourseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHFCQUFxRCxlQUFlLENBQUMsQ0FBQTtBQUNyRSwyQkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUVqRCxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBR2pDLDRCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyw2QkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQUdqRCx1QkFBcUIsVUFBVSxDQUFDLENBQUE7QUFPaEM7SUFFRSx1QkFBcUIsSUFBVSxFQUFVLFdBQXdCO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUdqRSxXQUFNLEdBQVksRUFBRSxDQUFDO1FBQ3JCLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFFYixVQUFLLEdBQVcsRUFBRSxDQUFDO0lBTnlDLENBQUM7SUFRckUsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVyxFQUFPO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxlQUFNLGVBQVUsRUFBRSxlQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBTyxDQUFDO2FBQ3hFLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQWYsQ0FBZSxDQUFDO2FBQzdCLEtBQUssQ0FBQyxVQUFDLEtBQVMsSUFBSyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxlQUFNLHFCQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQU8sQ0FBQzthQUNsRSxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQzthQUM3QixLQUFLLENBQUMsVUFBQyxLQUFTLElBQUssT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsU0FBb0I7UUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksZUFBTSw0QkFBdUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFPLEVBQUUsSUFBSSxFQUFFLHdCQUFVLEVBQUUsQ0FBQzthQUM5RixHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxVQUFDLEtBQVMsSUFBSyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLE1BQWM7UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksZUFBTSwwQkFBcUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFPLEVBQUUsSUFBSSxFQUFFLHdCQUFVLEVBQUUsQ0FBQzthQUMzRixHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxVQUFDLEtBQVMsSUFBSyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFjLE1BQW9CO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLGVBQU0sNkJBQXdCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBTyxFQUFFLElBQUksRUFBRSx3QkFBVSxFQUFFLENBQUM7YUFDL0YsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN4QixLQUFLLENBQUMsVUFBQyxLQUFTLElBQUssT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLGVBQU0sNEJBQXVCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBTyxFQUFFLElBQUksRUFBRSx3QkFBVSxFQUFFLENBQUM7YUFDL0YsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN4QixLQUFLLENBQUMsVUFBQyxLQUFTLElBQUssT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUtELG1DQUFXLEdBQVgsVUFBYSxFQUFPO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxlQUFNLGVBQVUsRUFBRSxxQkFBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFPLENBQUM7YUFDOUUsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBZixDQUFlLENBQUM7YUFDN0IsS0FBSyxDQUFDLFVBQUMsS0FBUyxJQUFLLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFHRCxtQ0FBVyxHQUFYLFVBQVksS0FBWTtRQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxlQUFNLGtDQUE2QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQU8sRUFBRSxJQUFJLEVBQUUsd0JBQVUsRUFBRSxDQUFDO2FBQ3BHLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDeEIsS0FBSyxDQUFDLFVBQUMsS0FBUyxJQUFLLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsS0FBWTtRQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxlQUFNLGdDQUEyQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQU8sRUFBRSxJQUFJLEVBQUUsd0JBQVUsRUFBRSxDQUFDO2FBQ2pHLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDeEIsS0FBSyxDQUFDLFVBQUMsS0FBUyxJQUFLLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDRCxtQ0FBVyxHQUFYLFVBQVksRUFBTTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksZUFBTSw0QkFBdUIsRUFBRSxlQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBTyxDQUFDO2FBQ3hGLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDbEMsS0FBSyxDQUFDLFVBQUMsS0FBUyxJQUFLLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFJRCxvQ0FBWSxHQUFaLFVBQWMsRUFBTztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksZUFBTSx5QkFBb0IsRUFBRSxlQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBTyxDQUFDO2FBQ3BGLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQWYsQ0FBZSxDQUFDO2FBQzdCLEtBQUssQ0FBQyxVQUFDLEtBQVMsSUFBSyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQztJQUNsRixDQUFDO0lBMUZIO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUE0RmIsb0JBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBO0FBM0ZZLHFCQUFhLGdCQTJGekIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvY291cnNlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zLCBKc29ucH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuXG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uL21vZGVscy9jb3Vyc2VcIjtcbmltcG9ydCB7eGhySGVhZGVyc30gZnJvbSBcIi4veGhyLWhlYWRlcnNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtBZGRDb3Vyc2V9IGZyb20gXCIuLi9tb2RlbHMvYWRkX2NvdXJzZVwiO1xuXG5pbXBvcnQge2FwaVVybH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtFZGl0WHBDb3Vyc2V9IGZyb20gXCIuLi9tb2RlbHMvZWRpdF94cFwiO1xuaW1wb3J0IHtMZXZlbH0gZnJvbSBcIi4uL21vZGVscy9sZXZlbFwiO1xuaW1wb3J0IHtCYWRnZX0gZnJvbSBcIi4uL21vZGVscy9iYWRnZVwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb3Vyc2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuICBjb3Vyc2U6IENvdXJzZTtcbiAgbGV2ZWxzOiBMZXZlbFtdID0gW107XG4gIGJhZGdlczogQmFkZ2VbXSA9IFtdO1xuXG4gIHByaXZhdGUgdG9rZW46IHN0cmluZyA9ICcnO1xuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy50b2tlbiA9IHRoaXMuYXV0aFNlcnZpY2UudG9rZW47XG4gIH1cblxuICBnZXRDb3Vyc2UgKGlkOiBhbnkpOiBPYnNlcnZhYmxlPENvdXJzZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke2FwaVVybH1jb3Vyc2UvJHtpZH0/dG9rZW49JHt0aGlzLmF1dGhTZXJ2aWNlLnRva2VufWApXG4gICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKS5kYXRhKVxuICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG4gIGdldEFsbENvdXJzZSAoKTogT2JzZXJ2YWJsZTxDb3Vyc2VbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke2FwaVVybH1jb3Vyc2U/dG9rZW49JHt0aGlzLmF1dGhTZXJ2aWNlLnRva2VufWApXG4gICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKS5kYXRhKVxuICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG4gIGNyZWF0ZU5ld0NvdXJzZShuZXdDb3Vyc2U6IEFkZENvdXJzZSk6IE9ic2VydmFibGU8QWRkQ291cnNlPntcbiAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KG5ld0NvdXJzZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke2FwaVVybH1jb3Vyc2UvY3JlYXRlP3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gLCBib2R5LCB4aHJIZWFkZXJzKCkpXG4gICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjphbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKSk7XG4gIH1cblxuICBlZGl0Q291cnNlKGNvdXJzZTogQ291cnNlKTogT2JzZXJ2YWJsZTxDb3Vyc2U+e1xuICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY291cnNlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgJHthcGlVcmx9Y291cnNlL2VkaXQ/dG9rZW49JHt0aGlzLmF1dGhTZXJ2aWNlLnRva2VufWAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG4gIHNldHRpbmdDb3Vyc2UoY291cnNlOiBFZGl0WHBDb3Vyc2UpOiBPYnNlcnZhYmxlPEVkaXRYcENvdXJzZT57XG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjb3Vyc2UpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHthcGlVcmx9Y291cnNlL3NldHRpbmc/dG9rZW49JHt0aGlzLmF1dGhTZXJ2aWNlLnRva2VufWAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXR1cyhjb3Vyc2U6IENvdXJzZSk6IE9ic2VydmFibGU8Q291cnNlPntcbiAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNvdXJzZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7YXBpVXJsfWNvdXJzZS9zdGF0dXM/dG9rZW49JHt0aGlzLmF1dGhTZXJ2aWNlLnRva2VufWAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6YW55KSA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJykpO1xuICB9XG5cblxuICAvL0JhZGdlXG5cbiAgZ2V0QWxsQmFkZ2UgKGlkOiBhbnkpOiBPYnNlcnZhYmxlPEJhZGdlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHthcGlVcmx9Y291cnNlLyR7aWR9L2JhZGdlP3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gKVxuICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkuZGF0YSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjphbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKSk7XG4gIH1cblxuXG4gIGNyZWF0ZUJhZGdlKGJhZGdlOiBCYWRnZSk6IE9ic2VydmFibGU8QmFkZ2U+e1xuICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYmFkZ2UpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHthcGlVcmx9Y291cnNlL2NyZWF0ZS9iYWRnZT90b2tlbj0ke3RoaXMuYXV0aFNlcnZpY2UudG9rZW59YCwgYm9keSwgeGhySGVhZGVycygpKVxuICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6YW55KSA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJykpO1xuICB9XG5cbiAgZWRpdEJhZGdlKGJhZGdlOiBCYWRnZSk6IE9ic2VydmFibGU8QmFkZ2U+e1xuICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYmFkZ2UpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke2FwaVVybH1jb3Vyc2UvZWRpdC9iYWRnZT90b2tlbj0ke3RoaXMuYXV0aFNlcnZpY2UudG9rZW59YCwgYm9keSwgeGhySGVhZGVycygpKVxuICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6YW55KSA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJykpO1xuICB9XG4gIGRlbGV0ZUJhZGdlKGlkOmFueSl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoYCR7YXBpVXJsfWNvdXJzZS9kZWxldGUvYmFkZ2UvJHtpZH0/dG9rZW49JHt0aGlzLmF1dGhTZXJ2aWNlLnRva2VufWApXG4gICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6YW55KSA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJykpO1xuICB9XG5cbiAgLy9oaWdoc2NvcmVcblxuICBnZXRIaWdoc2NvcmUgKGlkOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke2FwaVVybH1jb3Vyc2UvaGlnaHNjb3JlLyR7aWR9P3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gKVxuICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpLmRhdGEpXG4gICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG59XG4iXX0=
