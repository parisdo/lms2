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
var router_1 = require("@angular/router");
var teacher_service_1 = require("../../services/teacher.service");
var TeachNavComponent = (function () {
    function TeachNavComponent(authService, router, teacherService) {
        this.authService = authService;
        this.router = router;
        this.teacherService = teacherService;
        this.profileImage = '';
    }
    TeachNavComponent.prototype.ngOnInit = function () {
        if (this.authService.checkRole()) {
            this.getTeacher();
        }
    };
    TeachNavComponent.prototype.getTeacher = function () {
        var _this = this;
        this.teacherService.getTeacher()
            .subscribe(function (data) {
            console.log(data);
            _this.teacher = data;
            _this.teacher.image = 'http://54.169.115.233/teachers/logo' + data.image;
        }, function (error) {
            console.log(error);
            _this.authService.signout();
        });
    };
    TeachNavComponent.prototype.gotoHome = function () {
        this.router.navigate(['/teach']);
    };
    TeachNavComponent.prototype.signout = function () {
        var _this = this;
        this.authService.signout().subscribe(function () { return _this.router.navigate(['/auth/signin']); });
    };
    TeachNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-teach-nav',
            templateUrl: 'teach-nav.component.html',
            styleUrls: ['teach-nav.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, teacher_service_1.TeacherService])
    ], TeachNavComponent);
    return TeachNavComponent;
}());
exports.TeachNavComponent = TeachNavComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC90ZWFjaC1uYXYvdGVhY2gtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBRWhELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBVzlEO0lBS0UsMkJBQW1CLFdBQXdCLEVBQ3hCLE1BQWMsRUFDYixjQUE4QjtRQUYvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSjFDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO0lBSW1CLENBQUM7SUFFdEQsb0NBQVEsR0FBUjtRQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFO2FBQzdCLFNBQVMsQ0FDUixVQUFBLElBQUk7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLHFDQUFxQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUUsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFHRCxtQ0FBTyxHQUFQO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDbEMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FDN0MsQ0FBQztJQUNKLENBQUM7SUEvQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzs7eUJBQUE7SUEyQ0Ysd0JBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBO0FBekNZLHlCQUFpQixvQkF5QzdCLENBQUEiLCJmaWxlIjoiYXBwL3RlYWNoL3RlYWNoLW5hdi90ZWFjaC1uYXYuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtUZWFjaGVyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RlYWNoZXIuc2VydmljZVwiO1xuXG5pbXBvcnQge3B1YmxpY1VybH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbmZpZ1wiXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ215LXRlYWNoLW5hdicsXG4gIHRlbXBsYXRlVXJsOiAndGVhY2gtbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RlYWNoLW5hdi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBUZWFjaE5hdkNvbXBvbmVudCB7XG5cbiAgcHJpdmF0ZSB0ZWFjaGVyOiBUZWFjaGVyO1xuICBwcml2YXRlIHByb2ZpbGVJbWFnZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHRlYWNoZXJTZXJ2aWNlOiBUZWFjaGVyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcblxuICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tSb2xlKCkpIHtcbiAgICAgICAgdGhpcy5nZXRUZWFjaGVyKCk7XG4gICAgICB9XG4gIH1cblxuICBnZXRUZWFjaGVyKCkge1xuICAgIHRoaXMudGVhY2hlclNlcnZpY2UuZ2V0VGVhY2hlcigpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICB0aGlzLnRlYWNoZXIgPSBkYXRhO1xuICAgICAgICAgIHRoaXMudGVhY2hlci5pbWFnZSA9ICdodHRwOi8vNTQuMTY5LjExNS4yMzMvdGVhY2hlcnMvbG9nbycgKyBkYXRhLmltYWdlO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbm91dCgpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgZ290b0hvbWUoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVhY2gnXSk7XG4gIH1cblxuXG4gIHNpZ25vdXQoKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5zaWdub3V0KCkuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9zaWduaW4nXSlcbiAgICApO1xuICB9XG59XG4iXX0=
