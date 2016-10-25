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
var BadgeService = (function () {
    function BadgeService(http) {
        this.http = http;
        this.courseUrl = 'http://127.0.0.1:5000/api/v1/badge';
    }
    BadgeService.prototype.getBadges = function () {
        return this.http.get(this.courseUrl)
            .map(function (res) { return res.json(); })
            .cache();
    };
    BadgeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BadgeService);
    return BadgeService;
}());
exports.BadgeService = BadgeService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9iYWRnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRy9DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFPakM7SUFFSSxzQkFBcUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDdkIsY0FBUyxHQUFHLG9DQUFvQyxDQUFDO0lBRHZCLENBQUM7SUFHbkMsZ0NBQVMsR0FBVDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQy9CLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDeEIsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQVZMO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUFZYixtQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksb0JBQVksZUFXeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvYmFkZ2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcblxuaW1wb3J0IHtDb3Vyc2V9IGZyb20gXCIuLi9tb2RlbHMvY291cnNlXCI7XG5pbXBvcnQge0JhZGdlfSBmcm9tIFwiLi4vbW9kZWxzL2JhZGdlXCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhZGdlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuICAgIHByaXZhdGUgY291cnNlVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9hcGkvdjEvYmFkZ2UnO1xuXG4gICAgZ2V0QmFkZ2VzICgpOiBPYnNlcnZhYmxlPEJhZGdlW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb3Vyc2VVcmwpXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2FjaGUoKTtcbiAgICB9XG5cbn1cbiJdfQ==
