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
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../../auth/auth.service");
var student_1 = require("../../models/student");
var StudentSigninComponent = (function () {
    function StudentSigninComponent(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.student = new student_1.Student();
        this.setMessage();
        this.createForm();
    }
    StudentSigninComponent.prototype.setMessage = function () {
    };
    StudentSigninComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'username': ['', [forms_1.Validators.required]],
            'password': ['', [forms_1.Validators.required]]
        });
    };
    StudentSigninComponent.prototype.reset = function () {
        this.createForm();
    };
    StudentSigninComponent.prototype.signin = function (student) {
        this.message = 'Trying to log in ...';
        this.student = new student_1.Student(student.name, student.password);
        console.log(this.student);
        this.authService.setToken(student.password, 'student');
        this.router.navigate(['./student/dashboard']);
    };
    StudentSigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'student-signin',
            templateUrl: 'student-signin.component.html',
            styleUrls: ['student-signin.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], StudentSigninComponent);
    return StudentSigninComponent;
}());
exports.StudentSigninComponent = StudentSigninComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQtc2lnbmluL3N0dWRlbnQtc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBUTdDO0lBT0ksZ0NBQW9CLFdBQXdCLEVBQVUsV0FBd0IsRUFBVSxNQUFjO1FBQWxGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnRHLFlBQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUdwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwyQ0FBVSxHQUFWO0lBRUEsQ0FBQztJQUVELDJDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25DLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsdUNBQU0sR0FBTixVQUFPLE9BQWdCO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBdkNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDOUMsQ0FBQzs7OEJBQUE7SUFvQ0YsNkJBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLDhCQUFzQix5QkFtQ2xDLENBQUEiLCJmaWxlIjoiYXBwL3N0dWRlbnQvc3R1ZGVudC1zaWduaW4vc3R1ZGVudC1zaWduaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3N0dWRlbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3N0dWRlbnQtc2lnbmluJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3N0dWRlbnQtc2lnbmluLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3R1ZGVudC1zaWduaW4uY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50U2lnbmluQ29tcG9uZW50IHtcblxuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICB1c2VyRm9ybTogYW55O1xuICAgIHN0dWRlbnQgPSBuZXcgU3R1ZGVudCgpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuc2V0TWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICB9XG5cbiAgICBzZXRNZXNzYWdlKCkge1xuICAgICAgICAvL3RoaXMubWVzc2FnZSA9ICdMb2dnZWQgJyArICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSA/ICdpbicgOiAnb3V0Jyk7XG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybSgpe1xuICAgICAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAndXNlcm5hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICAgICAncGFzc3dvcmQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gICAgfVxuXG4gICAgc2lnbmluKHN0dWRlbnQ6IFN0dWRlbnQpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJ1RyeWluZyB0byBsb2cgaW4gLi4uJztcbiAgICAgICAgdGhpcy5zdHVkZW50ID0gbmV3IFN0dWRlbnQoc3R1ZGVudC5uYW1lLCBzdHVkZW50LnBhc3N3b3JkKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdHVkZW50KTtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRUb2tlbihzdHVkZW50LnBhc3N3b3JkLCAnc3R1ZGVudCcpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vc3R1ZGVudC9kYXNoYm9hcmQnXSk7XG4gICAgfVxuXG59XG4iXX0=
