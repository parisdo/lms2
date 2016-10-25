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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3NlcnZpY2VzL2JhZGdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFHL0MsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQU9qQztJQUVJLHNCQUFxQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUN2QixjQUFTLEdBQUcsb0NBQW9DLENBQUM7SUFEdkIsQ0FBQztJQUduQyxnQ0FBUyxHQUFUO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDL0IsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN4QixLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBVkw7UUFBQyxpQkFBVSxFQUFFOztvQkFBQTtJQVliLG1CQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSxvQkFBWSxlQVd4QixDQUFBIiwiZmlsZSI6ImFwcC9ob21lL3NlcnZpY2VzL2JhZGdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5cbmltcG9ydCB7Q291cnNlfSBmcm9tIFwiLi4vbW9kZWxzL2NvdXJzZVwiO1xuaW1wb3J0IHtCYWRnZX0gZnJvbSBcIi4uL21vZGVscy9iYWRnZVwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWRnZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge31cbiAgICBwcml2YXRlIGNvdXJzZVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjUwMDAvYXBpL3YxL2JhZGdlJztcblxuICAgIGdldEJhZGdlcyAoKTogT2JzZXJ2YWJsZTxCYWRnZVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY291cnNlVXJsKVxuICAgICAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhY2hlKCk7XG4gICAgfVxuXG59XG4iXX0=
