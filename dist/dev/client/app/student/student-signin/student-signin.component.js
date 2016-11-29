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
var student_service_1 = require("../../services/student.service");
var studentSignin = (function () {
    function studentSignin(email, password) {
        this.email = email;
        this.password = password;
    }
    return studentSignin;
}());
exports.studentSignin = studentSignin;
var StudentSigninComponent = (function () {
    function StudentSigninComponent(studentService, authService, formBuilder, router) {
        this.studentService = studentService;
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
        var _this = this;
        this.message = 'Trying to log in ...';
        this.student = new studentSignin(student.username, student.password);
        console.log(this.student);
        this.authService.signin(this.student)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success' && data.data.role == 'student') {
                _this.authService.setToken(data.data.token, 'student', data.data.id);
                _this.router.navigate(['./student/dashboard']);
            }
            else {
                _this.errorMessage = data.errormessage;
            }
        }, function (error) { console.log(error); });
    };
    StudentSigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'student-signin',
            templateUrl: 'student-signin.component.html',
            styleUrls: ['student-signin.component.css'],
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService, auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], StudentSigninComponent);
    return StudentSigninComponent;
}());
exports.StudentSigninComponent = StudentSigninComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQtc2lnbmluL3N0dWRlbnQtc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTlEO0lBQ0UsdUJBQW1CLEtBQVcsRUFBUyxRQUFjO1FBQWxDLFVBQUssR0FBTCxLQUFLLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO0lBQUUsQ0FBQztJQUMxRCxvQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkscUJBQWEsZ0JBRXpCLENBQUE7QUFRRDtJQU9JLGdDQUFvQixjQUE4QixFQUM5QixXQUF3QixFQUN4QixXQUF3QixFQUN4QixNQUFjO1FBSGQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMbEMsWUFBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBTXBCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDJDQUFVLEdBQVY7SUFFQSxDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx1Q0FBTSxHQUFOLFVBQU8sT0FBZ0I7UUFBdkIsaUJBb0JDO1FBbkJHLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2xDLFNBQVMsQ0FDUixVQUFDLElBQVM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0wsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hDLENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbkMsQ0FBQztJQUdOLENBQUM7SUF4REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM5QyxDQUFDOzs4QkFBQTtJQXFERiw2QkFBQztBQUFELENBcERBLEFBb0RDLElBQUE7QUFwRFksOEJBQXNCLHlCQW9EbEMsQ0FBQSIsImZpbGUiOiJhcHAvc3R1ZGVudC9zdHVkZW50LXNpZ25pbi9zdHVkZW50LXNpZ25pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3IsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3R1ZGVudFwiO1xuaW1wb3J0IHtTdHVkZW50U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0dWRlbnQuc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3Mgc3R1ZGVudFNpZ25pbntcbiAgY29uc3RydWN0b3IocHVibGljIGVtYWlsPyA6YW55LCBwdWJsaWMgcGFzc3dvcmQ/OiBhbnkpe31cbn1cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3N0dWRlbnQtc2lnbmluJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3N0dWRlbnQtc2lnbmluLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3R1ZGVudC1zaWduaW4uY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50U2lnbmluQ29tcG9uZW50IHtcblxuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICB1c2VyRm9ybTogYW55O1xuICAgIHN0dWRlbnQgPSBuZXcgU3R1ZGVudCgpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLnNldE1lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gICAgfVxuXG4gICAgc2V0TWVzc2FnZSgpIHtcbiAgICAgICAgLy90aGlzLm1lc3NhZ2UgPSAnTG9nZ2VkICcgKyAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkgPyAnaW4nIDogJ291dCcpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZvcm0oKXtcbiAgICAgICAgdGhpcy51c2VyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgJ3VzZXJuYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2V0KCl7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgIH1cblxuICAgIHNpZ25pbihzdHVkZW50OiBTdHVkZW50KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdUcnlpbmcgdG8gbG9nIGluIC4uLic7XG4gICAgICAgIHRoaXMuc3R1ZGVudCA9IG5ldyBzdHVkZW50U2lnbmluKHN0dWRlbnQudXNlcm5hbWUsIHN0dWRlbnQucGFzc3dvcmQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0dWRlbnQpO1xuXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25pbih0aGlzLnN0dWRlbnQpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2VzcycgJiYgZGF0YS5kYXRhLnJvbGUgPT0gJ3N0dWRlbnQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0VG9rZW4oZGF0YS5kYXRhLnRva2VuLCAnc3R1ZGVudCcsIGRhdGEuZGF0YS5pZCk7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi9zdHVkZW50L2Rhc2hib2FyZCddKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9ybWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH1cbiAgICAgICAgKTtcblxuXG4gICAgfVxuXG59XG4iXX0=
