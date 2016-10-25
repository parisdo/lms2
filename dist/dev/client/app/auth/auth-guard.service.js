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
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth.service');
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHVCQUdrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3BELDZCQUF1QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBR3hEO0lBQ0ksbUJBQW9CLFdBQXdCLEVBQVUsTUFBYztRQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXhFLCtCQUFXLEdBQVgsVUFBWSxLQUE2QixFQUFFLEtBQTBCO1FBRWpFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQWRMO1FBQUMsaUJBQVUsRUFBRTs7aUJBQUE7SUFlYixnQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksaUJBQVMsWUFjckIsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLFxuICAgIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgICBOYXZpZ2F0aW9uRXh0cmFzIH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gICAgICAgICAgICBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcblxuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5yZWRpcmVjdFVybCA9IHN0YXRlLnVybDtcblxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSJdfQ==
