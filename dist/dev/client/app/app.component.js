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
var index_1 = require('./shared/index');
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth/auth.service");
var AppComponent = (function () {
    function AppComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        console.log('Environment config', index_1.Config);
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                window.scrollTo(0, 0);
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsc0JBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFDeEMsdUJBQThDLGlCQUFpQixDQUFDLENBQUE7QUFDaEUsNkJBQTBCLHFCQUFxQixDQUFDLENBQUE7QUFTaEQ7SUFFRSxzQkFBb0IsTUFBZSxFQUFVLFdBQXdCO1FBQWpELFdBQU0sR0FBTixNQUFNLENBQVM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLGNBQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBVTtZQUVqQyxFQUFFLENBQUEsQ0FBQyxLQUFLLFlBQVksd0JBQWUsQ0FBQyxDQUFBLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLENBQUM7UUFFSCxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFwQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxLQUFLO1lBQ2YsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDOztvQkFBQTtJQWlCRixtQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksb0JBQVksZUFleEIsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlcywgTmF2aWdhdGlvblN0YXJ0fSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9hdXRoL2F1dGguc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coJ0Vudmlyb25tZW50IGNvbmZpZycsIENvbmZpZyk7XG5cbiAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuXG4gICAgICBpZihldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCl7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gIH1cblxufVxuIl19
