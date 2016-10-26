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
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var teacher_1 = require("../models/teacher");
var forms_1 = require("@angular/forms");
require('rxjs/add/operator/filter');
var SigninComponent = (function () {
    function SigninComponent(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.teacher = new teacher_1.Teacher();
        this.setMessage();
        this.createForm();
    }
    SigninComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn() ? 'in' : 'out');
    };
    SigninComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'email': ['', [forms_1.Validators.required]],
            'password': ['', [forms_1.Validators.required]]
        });
    };
    SigninComponent.prototype.reset = function () {
        this.createForm();
    };
    SigninComponent.prototype.signin = function (teacher) {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.teacher = new teacher_1.Teacher(teacher.email, teacher.password);
        this.authService.signin(this.teacher)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.authService.setToken(data.data.token, 'teacher');
                _this.router.navigate(['./teach']);
            }
            else {
                _this.errorMessage = data.errormessage;
            }
        }, function (error) { console.log(error); });
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-signin',
            templateUrl: 'signin.component.html',
            styleUrls: ['signin.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3NpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyx1QkFBc0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN4RCx3QkFBc0IsbUJBQW1CLENBQUMsQ0FBQTtBQUMxQyxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFRbEM7SUFPRSx5QkFBb0IsV0FBd0IsRUFBVSxXQUF3QixFQUFVLE1BQWM7UUFBbEYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGdEcsWUFBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBR3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFHcEIsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxPQUFnQjtRQUF2QixpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzlCLFNBQVMsQ0FDTixVQUFDLElBQVM7WUFDUixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBRTNCLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN0RCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFcEMsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUVMLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3JDLENBQUM7SUFDVixDQUFDO0lBckRIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7O3VCQUFBO0lBa0RGLHNCQUFDO0FBQUQsQ0FqREEsQUFpREMsSUFBQTtBQWpEWSx1QkFBZSxrQkFpRDNCLENBQUEiLCJmaWxlIjoiYXBwL2F1dGgvc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvblN0YXJ0fSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXNpZ25pbicsXG4gIHRlbXBsYXRlVXJsOiAnc2lnbmluLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZ25pbi5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCB7XG5cbiAgbWVzc2FnZTogc3RyaW5nO1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgdXNlckZvcm06IGFueTtcbiAgdGVhY2hlciA9IG5ldyBUZWFjaGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5zZXRNZXNzYWdlKCk7XG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG5cbiAgICAvLyByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSh2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSkpO1xuICB9XG5cbiAgc2V0TWVzc2FnZSgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnTG9nZ2VkICcgKyAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkgPyAnaW4nIDogJ291dCcpO1xuICB9XG5cbiAgY3JlYXRlRm9ybSgpe1xuICAgIHRoaXMudXNlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdlbWFpbCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICdwYXNzd29yZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuXG4gIHNpZ25pbih0ZWFjaGVyOiBUZWFjaGVyKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gJ1RyeWluZyB0byBsb2cgaW4gLi4uJztcbiAgICB0aGlzLnRlYWNoZXIgPSBuZXcgVGVhY2hlcih0ZWFjaGVyLmVtYWlsLCB0ZWFjaGVyLnBhc3N3b3JkKTtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25pbih0aGlzLnRlYWNoZXIpXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRUb2tlbihkYXRhLmRhdGEudG9rZW4sICd0ZWFjaGVyJyk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vdGVhY2gnXSk7XG5cbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9ybWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH1cbiAgICAgICAgICApO1xuICB9XG5cbn1cbiJdfQ==
