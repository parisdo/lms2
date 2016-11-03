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
            _this.teacher = data;
            _this.teacher.image = data.image;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC90ZWFjaC1uYXYvdGVhY2gtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBRWhELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBUzlEO0lBSUUsMkJBQW1CLFdBQXdCLEVBQVMsTUFBYyxFQUFVLGNBQThCO1FBQXZGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7SUFFOUcsb0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFO2FBQzdCLFNBQVMsQ0FDUixVQUFBLElBQUk7WUFDRixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0QsbUNBQU8sR0FBUDtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQ2xDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQXRDLENBQXNDLENBQzdDLENBQUM7SUFDSixDQUFDO0lBMUNIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7O3lCQUFBO0lBc0NGLHdCQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtBQXBDWSx5QkFBaUIsb0JBb0M3QixDQUFBIiwiZmlsZSI6ImFwcC90ZWFjaC90ZWFjaC1uYXYvdGVhY2gtbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUZWFjaGVyfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3RlYWNoZXJcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VGVhY2hlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90ZWFjaGVyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXktdGVhY2gtbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICd0ZWFjaC1uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGVhY2gtbmF2LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFRlYWNoTmF2Q29tcG9uZW50IHtcblxuICBwcml2YXRlIHRlYWNoZXI6IFRlYWNoZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHRlYWNoZXJTZXJ2aWNlOiBUZWFjaGVyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmNoZWNrUm9sZSgpKSB7XG4gICAgICAgIHRoaXMuZ2V0VGVhY2hlcigpO1xuICAgICAgfVxuICB9XG5cbiAgZ2V0VGVhY2hlcigpIHtcbiAgICB0aGlzLnRlYWNoZXJTZXJ2aWNlLmdldFRlYWNoZXIoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy50ZWFjaGVyID0gZGF0YTtcbiAgICAgICAgICB0aGlzLnRlYWNoZXIuaW1hZ2UgPSBkYXRhLmltYWdlO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbm91dCgpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgZ290b0hvbWUoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVhY2gnXSk7XG4gIH1cblxuXG4gIHNpZ25vdXQoKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5zaWdub3V0KCkuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9zaWduaW4nXSlcbiAgICApO1xuICB9XG59XG4iXX0=
