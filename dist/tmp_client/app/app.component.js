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
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth/auth.service");
var angular2_jwt_1 = require('angular2-jwt');
var AppComponent = (function () {
    function AppComponent(router, authService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                window.scrollTo(0, 0);
            }
        });
        var token = authService.token;
        var isTokenNotExpired;
        isTokenNotExpired = angular2_jwt_1.tokenNotExpired(null, token);
        if (!isTokenNotExpired) {
            console.log("token expired");
            authService.signout().subscribe(function () {
                _this.router.navigate(['/auth/signin']);
            });
        }
        else {
            console.log("token not expired");
        }
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            template: "<app-header *ngIf=\"!authService.isLoggedIn()\"></app-header> <router-outlet></router-outlet> <app-footer></app-footer>",
            styles: ["body{background-color:#f0f2f1} /*# sourceMappingURL=app.component.css.map */"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
