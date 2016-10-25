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
var api_config_1 = require("../../../config/api.config");
var storage_1 = require("../../../helpers/storage");
var AdminService = (function () {
    function AdminService(_http) {
        this._http = _http;
    }
    AdminService.prototype.getAllDeveloper = function () {
        return this._http.get(api_config_1.apiUrl + "developers?token=" + storage_1.storage.getAuthToken())
            .map(function (res) { return res.json().data; });
    };
    AdminService.prototype.getAllDeveloperId = function (id) {
        return this._http.get(api_config_1.apiUrl + "developer/profile/" + id + "?token=" + storage_1.storage.getAuthToken())
            .map(function (res) { return res.json(); });
    };
    AdminService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYXBpL2FkbWluL2FkbWluLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQyxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFHL0MsMkJBQXFCLDRCQUE0QixDQUFDLENBQUE7QUFDbEQsd0JBQXNCLDBCQUEwQixDQUFDLENBQUE7QUFHakQ7SUFHRSxzQkFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07SUFDaEMsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUksbUJBQU0seUJBQW9CLGlCQUFPLENBQUMsWUFBWSxFQUFJLENBQUM7YUFDekUsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBZixDQUFlLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCLFVBQWtCLEVBQW1CO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBSSxtQkFBTSwwQkFBcUIsRUFBRSxlQUFVLGlCQUFPLENBQUMsWUFBWSxFQUFJLENBQUM7YUFDdEYsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFmSDtRQUFDLGlCQUFVLEVBQUU7O29CQUFBO0lBa0JiLG1CQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSxvQkFBWSxlQWlCeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2FwaS9hZG1pbi9hZG1pbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQge2FwaVVybH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9hcGkuY29uZmlnXCI7XG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkbWluU2VydmljZSB7XG5cblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuICB9XG5cbiAgZ2V0QWxsRGV2ZWxvcGVyKCl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2FwaVVybH1kZXZlbG9wZXJzP3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKS5kYXRhKTtcbiAgfVxuXG4gIGdldEFsbERldmVsb3BlcklkKGlkOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7YXBpVXJsfWRldmVsb3Blci9wcm9maWxlLyR7aWR9P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuXG59XG4iXX0=
