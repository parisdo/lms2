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
var xhr_headers_1 = require("./xhr-headers");
var auth_service_1 = require("../auth/auth.service");
var config_1 = require('./config');
var TeacherService = (function () {
    function TeacherService(http, authService) {
        this.http = http;
        this.authService = authService;
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
    TeacherService.prototype.editTeacherProfile = function (teacher) {
        var body = JSON.stringify(teacher);
        return this.http.put(this.teacherUrl + "/edit/profile?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    TeacherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], TeacherService);
    return TeacherService;
}());
exports.TeacherService = TeacherService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy90ZWFjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxxQkFBNkQsZUFBZSxDQUFDLENBQUE7QUFFN0UsbUJBQXlCLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFFakMsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDZCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBRWpELHVCQUFxQixVQUFVLENBQUMsQ0FBQTtBQUdoQztJQU9JLHdCQUFxQixJQUFVLEVBQVUsV0FBd0I7UUFBNUMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSHpELGVBQVUsR0FBTSxlQUFNLFlBQVMsQ0FBQztRQUNoQyxvQkFBZSxHQUFNLGVBQU0sc0JBQW1CLENBQUM7SUFFYSxDQUFDO0lBRXJFLG1DQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFVBQVUsZUFBVSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQU8sQ0FBQzthQUNyRSxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQzthQUNoRCxLQUFLLENBQUMsVUFBQyxLQUFTLElBQUssT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQztJQUN0RixDQUFDO0lBSUQsbUNBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLGVBQWlCLEVBQUUsSUFBSSxFQUFFLHdCQUFVLEVBQUUsQ0FBQzthQUMvRCxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxVQUFDLEtBQVMsSUFBSyxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEIsVUFBbUIsT0FBZ0I7UUFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFVBQVUsNEJBQXVCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBTyxFQUFFLElBQUksRUFBRSx3QkFBVSxFQUFFLENBQUM7YUFDeEcsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN4QixLQUFLLENBQUMsVUFBQyxLQUFTLElBQUssT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQztJQUNsRixDQUFDO0lBOUJMO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFpQ2IscUJBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLHNCQUFjLGlCQWdDMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvdGVhY2hlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzLCBKc29ucH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCB7VGVhY2hlcn0gZnJvbSBcIi4uL21vZGVscy90ZWFjaGVyXCI7XG5pbXBvcnQge3hockhlYWRlcnN9IGZyb20gXCIuL3hoci1oZWFkZXJzXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcblxuaW1wb3J0IHthcGlVcmx9IGZyb20gJy4vY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRlYWNoZXJTZXJ2aWNlIHtcblxuICAgIHRlYWNoZXI6IFRlYWNoZXI7XG5cbiAgICBwcml2YXRlIHRlYWNoZXJVcmwgPSBgJHthcGlVcmx9dGVhY2hlcmA7XG4gICAgcHJpdmF0ZSByZWdpc3RyYXRpb25VcmwgPSBgJHthcGlVcmx9dXNlci9yZWdpc3RyYXRpb25gO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG5cbiAgICBnZXRUZWFjaGVyICgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnRlYWNoZXJVcmx9P3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gKVxuICAgICAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpLmRhdGEudGVhY2hlcl9wcm9maWxlWzBdKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjphbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKSk7XG4gICAgfVxuXG5cblxuICAgIGFkZFRlYWNoZXIodGVhY2hlcjogVGVhY2hlcik6IE9ic2VydmFibGU8VGVhY2hlcj57XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodGVhY2hlcik7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnJlZ2lzdHJhdGlvblVybH1gLCBib2R5LCB4aHJIZWFkZXJzKCkpXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgICB9XG5cbiAgICBlZGl0VGVhY2hlclByb2ZpbGUodGVhY2hlcjogVGVhY2hlcik6IE9ic2VydmFibGU8VGVhY2hlcj57XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHRlYWNoZXIpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7dGhpcy50ZWFjaGVyVXJsfS9lZGl0L3Byb2ZpbGU/dG9rZW49JHt0aGlzLmF1dGhTZXJ2aWNlLnRva2VufWAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgICB9XG5cblxufVxuIl19
