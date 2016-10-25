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
var auth_service_1 = require("../../shared/services/api/auth/auth.service");
var VendorNavbarComponent = (function () {
    function VendorNavbarComponent(_authService) {
        this._authService = _authService;
    }
    VendorNavbarComponent.prototype.logout = function () {
        this._authService.logout();
    };
    VendorNavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-vendor-navbar',
            templateUrl: 'vendor-navbar.component.html',
            styleUrls: ['vendor-navbar.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], VendorNavbarComponent);
    return VendorNavbarComponent;
}());
exports.VendorNavbarComponent = VendorNavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92ZW5kb3IvdmVuZG9yLW5hdmJhci92ZW5kb3ItbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLDZCQUEwQiw2Q0FBNkMsQ0FBQyxDQUFBO0FBU3hFO0lBRUUsK0JBQW9CLFlBQXdCO1FBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO0lBRTVDLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBZkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDOzs2QkFBQTtJQVlGLDRCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSw2QkFBcUIsd0JBVWpDLENBQUEiLCJmaWxlIjoiYXBwL3ZlbmRvci92ZW5kb3ItbmF2YmFyL3ZlbmRvci1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS9hdXRoL2F1dGguc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd0Yi12ZW5kb3ItbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICd2ZW5kb3ItbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3ZlbmRvci1uYXZiYXIuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFZlbmRvck5hdmJhckNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2Upe1xuXG4gIH1cblxuICBsb2dvdXQoKXtcbiAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgfVxuXG59XG4iXX0=
