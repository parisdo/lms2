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
        if (this.authService.isLoggedIn()) {
            if (this.authService.checkRole()) {
                this.getTeacher();
            }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC90ZWFjaC1uYXYvdGVhY2gtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBRWhELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBVzlEO0lBS0UsMkJBQW1CLFdBQXdCLEVBQ3hCLE1BQWMsRUFDYixjQUE4QjtRQUYvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSjFDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO0lBSW1CLENBQUM7SUFFdEQsb0NBQVEsR0FBUjtRQUVFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQztRQUNILENBQUM7SUFFSCxDQUFDO0lBRUQsc0NBQVUsR0FBVjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7YUFDN0IsU0FBUyxDQUNSLFVBQUEsSUFBSTtZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcscUNBQXFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMxRSxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUdELG1DQUFPLEdBQVA7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNsQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUF0QyxDQUFzQyxDQUM3QyxDQUFDO0lBQ0osQ0FBQztJQWxESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN2QyxDQUFDOzt5QkFBQTtJQThDRix3QkFBQztBQUFELENBNUNBLEFBNENDLElBQUE7QUE1Q1kseUJBQWlCLG9CQTRDN0IsQ0FBQSIsImZpbGUiOiJhcHAvdGVhY2gvdGVhY2gtbmF2L3RlYWNoLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGVhY2hlcn0gZnJvbSBcIi4uLy4uL21vZGVscy90ZWFjaGVyXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1RlYWNoZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGVhY2hlci5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7cHVibGljVXJsfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29uZmlnXCJcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXktdGVhY2gtbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICd0ZWFjaC1uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGVhY2gtbmF2LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFRlYWNoTmF2Q29tcG9uZW50IHtcblxuICBwcml2YXRlIHRlYWNoZXI6IFRlYWNoZXI7XG4gIHByaXZhdGUgcHJvZmlsZUltYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgdGVhY2hlclNlcnZpY2U6IFRlYWNoZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5jaGVja1JvbGUoKSkge1xuICAgICAgICB0aGlzLmdldFRlYWNoZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGdldFRlYWNoZXIoKSB7XG4gICAgdGhpcy50ZWFjaGVyU2VydmljZS5nZXRUZWFjaGVyKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIHRoaXMudGVhY2hlciA9IGRhdGE7XG4gICAgICAgICAgdGhpcy50ZWFjaGVyLmltYWdlID0gJ2h0dHA6Ly81NC4xNjkuMTE1LjIzMy90ZWFjaGVycy9sb2dvJyArIGRhdGEuaW1hZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWdub3V0KCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBnb3RvSG9tZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy90ZWFjaCddKTtcbiAgfVxuXG5cbiAgc2lnbm91dCgpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25vdXQoKS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL3NpZ25pbiddKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
