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
            if (data.status == 'success' && data.data.role == 'teacher') {
                _this.authService.setToken(data.data.token, 'teacher');
                _this.router.navigate(['./teach']);
            }
            else if (data.status = 'failed') {
                _this.errorMessage = 'username or password not match!';
            }
            else {
                _this.errorMessage = data.errormessage;
            }
        }, function (error) {
            _this.errorMessage = 'Please Activate Your Account. Before you can login, you must active your account with the code sent to your email address.';
        });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3NpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyx1QkFBc0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN4RCx3QkFBc0IsbUJBQW1CLENBQUMsQ0FBQTtBQUMxQyxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFRbEM7SUFPRSx5QkFBb0IsV0FBd0IsRUFBVSxXQUF3QixFQUFVLE1BQWM7UUFBbEYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGdEcsWUFBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBR3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFHcEIsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxPQUFnQjtRQUF2QixpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzlCLFNBQVMsQ0FDTixVQUFDLElBQVM7WUFFUixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUMxRCxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDdEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFBQSxJQUFJLENBQUUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUNoQyxLQUFJLENBQUMsWUFBWSxHQUFHLGlDQUFpQyxDQUFDO1lBQ3hELENBQUM7WUFBQSxJQUFJLENBQUMsQ0FBQztnQkFDTCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEMsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDSixLQUFJLENBQUMsWUFBWSxHQUFHLDRIQUE0SCxDQUFBO1FBRWxKLENBQUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQXhESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDOzt1QkFBQTtJQXFERixzQkFBQztBQUFELENBcERBLEFBb0RDLElBQUE7QUFwRFksdUJBQWUsa0JBb0QzQixDQUFBIiwiZmlsZSI6ImFwcC9hdXRoL3NpZ25pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25TdGFydH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtUZWFjaGVyfSBmcm9tIFwiLi4vbW9kZWxzL3RlYWNoZXJcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvciwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1zaWduaW4nLFxuICB0ZW1wbGF0ZVVybDogJ3NpZ25pbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWduaW4uY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQge1xuXG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHVzZXJGb3JtOiBhbnk7XG4gIHRlYWNoZXIgPSBuZXcgVGVhY2hlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuc2V0TWVzc2FnZSgpO1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuXG4gICAgLy8gcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUodmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpKTtcbiAgfVxuXG4gIHNldE1lc3NhZ2UoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gJ0xvZ2dlZCAnICsgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpID8gJ2luJyA6ICdvdXQnKTtcbiAgfVxuXG4gIGNyZWF0ZUZvcm0oKXtcbiAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnZW1haWwnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAncGFzc3dvcmQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0KCl7XG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gIH1cblxuICBzaWduaW4odGVhY2hlcjogVGVhY2hlcikge1xuICAgIHRoaXMubWVzc2FnZSA9ICdUcnlpbmcgdG8gbG9nIGluIC4uLic7XG4gICAgdGhpcy50ZWFjaGVyID0gbmV3IFRlYWNoZXIodGVhY2hlci5lbWFpbCwgdGVhY2hlci5wYXNzd29yZCk7XG4gICAgdGhpcy5hdXRoU2VydmljZS5zaWduaW4odGhpcy50ZWFjaGVyKVxuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyAmJiBkYXRhLmRhdGEucm9sZSA9PSAndGVhY2hlcicpe1xuICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRUb2tlbihkYXRhLmRhdGEudG9rZW4sICd0ZWFjaGVyJyk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vdGVhY2gnXSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgIGlmKGRhdGEuc3RhdHVzID0gJ2ZhaWxlZCcpe1xuICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAndXNlcm5hbWUgb3IgcGFzc3dvcmQgbm90IG1hdGNoISc7XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9ybWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ1BsZWFzZSBBY3RpdmF0ZSBZb3VyIEFjY291bnQuIEJlZm9yZSB5b3UgY2FuIGxvZ2luLCB5b3UgbXVzdCBhY3RpdmUgeW91ciBhY2NvdW50IHdpdGggdGhlIGNvZGUgc2VudCB0byB5b3VyIGVtYWlsIGFkZHJlc3MuJ1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgfVxuXG59XG4iXX0=
