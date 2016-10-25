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
var auth_service_1 = require("../auth/auth.service");
var HomeComponent = (function () {
    function HomeComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.images = new Array(8);
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn() && this.authService.checkRole()) {
            this.router.navigate(["/teach"]);
        }
        else if (this.authService.isLoggedIn() && !this.authService.checkRole()) {
            this.router.navigate(["/student/dashboard"]);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFFM0QsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsNkJBQTBCLHNCQUFzQixDQUFDLENBQUE7QUFZakQ7SUFHRSx1QkFBb0IsTUFBYyxFQUFXLFdBQXdCO1FBQWpELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQURyRSxXQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaUQsQ0FBQztJQUV4RSxnQ0FBUSxHQUFSO1FBRUUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBdEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDLENBQUM7O3FCQUFBO0lBbUJGLG9CQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSxxQkFBYSxnQkFpQnpCLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd0Yi1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGltYWdlcyA9IG5ldyBBcnJheSg4KTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKXt9XG5cbiAgbmdPbkluaXQoKXtcblxuICAgIGlmKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpICYmIHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tSb2xlKCkpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvdGVhY2hgXSk7XG4gICAgfWVsc2UgaWYodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkgJiYgIXRoaXMuYXV0aFNlcnZpY2UuY2hlY2tSb2xlKCkpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Avc3R1ZGVudC9kYXNoYm9hcmRgXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=
