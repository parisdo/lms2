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
var auth_service_1 = require("../../auth/auth.service");
var PostComponent = (function () {
    function PostComponent(authService) {
        this.authService = authService;
    }
    PostComponent.prototype.goBack = function () {
        window.history.back();
    };
    PostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'post',
            templateUrl: 'post.component.html',
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWJib2FyZC9wb3N0L3Bvc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsNkJBQTBCLHlCQUF5QixDQUFDLENBQUE7QUFPcEQ7SUFFSSx1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRSxDQUFDO0lBQy9DLDhCQUFNLEdBQU47UUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFWTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHFCQUFxQjtTQUNyQyxDQUFDOztxQkFBQTtJQU9GLG9CQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSxxQkFBYSxnQkFNekIsQ0FBQSIsImZpbGUiOiJhcHAvd2ViYm9hcmQvcG9zdC9wb3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwb3N0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3Bvc3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQb3N0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKXt9XG4gICAgZ29CYWNrKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxufVxuIl19
