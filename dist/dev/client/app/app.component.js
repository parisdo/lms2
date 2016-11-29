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
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMsdUJBQThDLGlCQUFpQixDQUFDLENBQUE7QUFDaEUsNkJBQTBCLHFCQUFxQixDQUFDLENBQUE7QUFFaEQsNkJBQWdDLGNBQWMsQ0FBQyxDQUFBO0FBUy9DO0lBRUUsc0JBQW9CLE1BQWUsRUFBVSxXQUF3QjtRQUZ2RSxpQkFrQ0M7UUFoQ3FCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUluRSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVU7WUFFakMsRUFBRSxDQUFBLENBQUMsS0FBSyxZQUFZLHdCQUFlLENBQUMsQ0FBQSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixDQUFDO1FBRUgsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksaUJBQTBCLENBQUM7UUFDL0IsaUJBQWlCLEdBQUcsOEJBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFakQsRUFBRSxDQUFBLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUU3QixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUM3QjtnQkFDRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUNGLENBQUM7UUFFSixDQUFDO1FBQUEsSUFBSSxDQUFDLENBQUM7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUdILENBQUM7SUF2Q0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxLQUFLO1lBQ2YsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDOztvQkFBQTtJQW9DRixtQkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksb0JBQVksZUFrQ3hCLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7Um91dGVyLCBSb3V0ZXMsIE5hdmlnYXRpb25TdGFydH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tICdhbmd1bGFyMi1qd3QvYW5ndWxhcjItand0JztcbmltcG9ydCB7IHRva2VuTm90RXhwaXJlZCB9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlciwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcblxuICAgIC8vY29uc29sZS5sb2coJ0Vudmlyb25tZW50IGNvbmZpZycsIENvbmZpZyk7XG5cbiAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuXG4gICAgICBpZihldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCl7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgbGV0IHRva2VuID0gYXV0aFNlcnZpY2UudG9rZW47XG4gICAgbGV0IGlzVG9rZW5Ob3RFeHBpcmVkOiBib29sZWFuO1xuICAgIGlzVG9rZW5Ob3RFeHBpcmVkID0gdG9rZW5Ob3RFeHBpcmVkKG51bGwsIHRva2VuKTtcblxuICAgIGlmKCFpc1Rva2VuTm90RXhwaXJlZCl7XG4gICAgICBjb25zb2xlLmxvZyhcInRva2VuIGV4cGlyZWRcIik7XG5cbiAgICAgIGF1dGhTZXJ2aWNlLnNpZ25vdXQoKS5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL3NpZ25pbiddKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgIH1lbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gbm90IGV4cGlyZWRcIik7XG4gICAgfVxuXG5cbiAgfVxuXG59XG4iXX0=
