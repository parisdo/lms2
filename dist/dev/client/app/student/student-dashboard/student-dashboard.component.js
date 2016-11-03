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
var student_service_1 = require("../../services/student.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var message_service_1 = require('../../services/message-service');
var auth_service_1 = require("../../auth/auth.service");
var StudentDashboardComponent = (function () {
    function StudentDashboardComponent(formBuilder, studentService, authService, route, router) {
        this.formBuilder = formBuilder;
        this.studentService = studentService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.showHighScore = 5;
        this.highScoreStudents = [];
        this.badges = [];
        this.fakeImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoL…FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==';
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 150,
            resizeMaxWidth: 150
        };
        this.msgs = [];
        this.edit = false;
    }
    StudentDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.student_id = +params['id'];
            console.log(_this.student_id);
            _this.getStudent();
        });
    };
    StudentDashboardComponent.prototype.selected = function (imageResult) {
        this.student.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    StudentDashboardComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'student_id': ['', [forms_1.Validators.required]],
            'username': ['', [forms_1.Validators.required]],
            'name': ['', [forms_1.Validators.required]],
            'password': ['', [forms_1.Validators.required]]
        });
    };
    StudentDashboardComponent.prototype.gotoPage = function (page) {
        this.router.navigate([("/course/" + page)]);
    };
    StudentDashboardComponent.prototype.getStudent = function () {
        var _this = this;
        this.studentService.getStudent(this.student_id)
            .subscribe(function (data) {
            console.log(data);
            _this.teacher = data.teacher[0];
            _this.student = data.student[0].student;
            _this.student.image = 'http://54.169.115.233/students/logo/' + _this.student.image;
            _this.student.progressType = _this.progressCalculator(_this.student.overall_xp);
            _this.studentService.student = _this.student;
            _this.badges = data.student[0].badge;
            _this.badges.map(function (badge) {
                badge.image = 'http://54.169.115.233/students/badges/' + badge.image;
            });
            _this.course = data.course;
            _this.highScoreStudents = data.leaderboard;
            _this.highScoreStudents.map(function (student) {
                student.image = 'http://54.169.115.233/students/logo/' + student.image;
            });
            _this.showHighScore = +_this.course.leader_board;
            _this.createForm();
        }, function (error) { return console.log(error); });
    };
    StudentDashboardComponent.prototype.progressCalculator = function (xp) {
        var allStatus = ['info', 'success', 'warning', 'danger'];
        var status;
        if (xp < 25) {
            status = allStatus[3];
        }
        else if (xp < 50) {
            status = allStatus[2];
        }
        else if (xp < 75) {
            status = allStatus[1];
        }
        else {
            status = allStatus[0];
        }
        return status;
    };
    StudentDashboardComponent.prototype.gotoWebboard = function () {
        var navigationExtras = {
            queryParams: { 'id': this.course.id },
        };
        this.router.navigate(["/webboard/post"], navigationExtras);
    };
    StudentDashboardComponent.prototype.editMode = function (mode) {
        this.edit = mode;
    };
    StudentDashboardComponent.prototype.save = function () {
        var _this = this;
        var imageSubstr = this.student.image.substring(35);
        console.log(imageSubstr);
        this.studentService.editStudent(this.student)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                _this.showMessage(message_service_1.msg.getUpdateStudentsScoreMessage(200));
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateStudentsScoreMessage(500));
            }
        }, function (error) { return console.log(error); });
    };
    StudentDashboardComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    StudentDashboardComponent.prototype.signout = function () {
        var _this = this;
        this.authService.signout().subscribe(function () { return _this.router.navigate(['/auth/signin']); });
    };
    StudentDashboardComponent.prototype.cancel = function () {
        window.history.back();
    };
    StudentDashboardComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    StudentDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-student-dashboard',
            templateUrl: 'student-dashboard.component.html',
            styleUrls: ['student-dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, student_service_1.StudentService, auth_service_1.AuthService, router_1.ActivatedRoute, router_1.Router])
    ], StudentDashboardComponent);
    return StudentDashboardComponent;
}());
exports.StudentDashboardComponent = StudentDashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQtZGFzaGJvYXJkL3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRzlELHVCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpFLHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBSXZELGdDQUFrQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ25ELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBWXBEO0lBeUJFLG1DQUFvQixXQUF3QixFQUN4QixjQUE4QixFQUFTLFdBQXdCLEVBQy9ELEtBQXFCLEVBQVUsTUFBYztRQUY3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMvRCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFsQmpFLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUM5QixXQUFNLEdBQVUsRUFBRSxDQUFDO1FBSW5CLGNBQVMsR0FBUSx3SkFBd0osQ0FBQztRQUMxSyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQWtCO1lBQzdCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1NBQ3BCLENBQUM7UUFFRixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBa0dyQixTQUFJLEdBQVcsS0FBSyxDQUFDO0lBN0ZyQixDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSzthQUNsQixXQUFXO2FBQ1gsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUVmLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDRDQUFRLEdBQVIsVUFBUyxXQUF3QjtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsT0FBTztlQUNuQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU87ZUFDM0IsV0FBVyxDQUFDLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsOENBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDckMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQVEsR0FBUixVQUFTLElBQVk7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFXLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBR0QsOENBQVUsR0FBVjtRQUFBLGlCQTRCQztRQTNCQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQzVDLFNBQVMsQ0FDUixVQUFDLElBQUk7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLHNDQUFzQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2pGLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdFLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7WUFDM0MsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNwQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7Z0JBQ3BCLEtBQUssQ0FBQyxLQUFLLEdBQUcsd0NBQXdDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQTtZQUN0RSxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBTztnQkFDakMsT0FBTyxDQUFDLEtBQUssR0FBRyxzQ0FBc0MsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFBO1lBQ3hFLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBRS9DLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM1QixDQUFDO0lBQ04sQ0FBQztJQUdELHNEQUFrQixHQUFsQixVQUFtQixFQUFVO1FBRTNCLElBQUksU0FBUyxHQUFhLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkUsSUFBSSxNQUFjLENBQUM7UUFFbkIsRUFBRSxDQUFBLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDVixNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDaEIsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0wsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUVoQixDQUFDO0lBR0QsZ0RBQVksR0FBWjtRQUVFLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3ZDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQztTQUNyQyxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUlELDRDQUFRLEdBQVIsVUFBUyxJQUFhO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFHRCx3Q0FBSSxHQUFKO1FBQUEsaUJBaUJDO1FBZkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMxQyxTQUFTLENBQ1IsVUFBQyxJQUFTO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxXQUFXLENBQUMscUJBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFHLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQztJQUNOLENBQUM7SUFFRCwrQ0FBVyxHQUFYLFVBQVksR0FBUTtRQUFwQixpQkFNQztRQUxDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDJDQUFPLEdBQVA7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNsQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUF0QyxDQUFzQyxDQUM3QyxDQUFDO0lBQ0osQ0FBQztJQUdELDBDQUFNLEdBQU47UUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBaExIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzs7aUNBQUE7SUE4S0YsZ0NBQUM7QUFBRCxDQTNLQSxBQTJLQyxJQUFBO0FBM0tZLGlDQUF5Qiw0QkEyS3JDLENBQUEiLCJmaWxlIjoiYXBwL3N0dWRlbnQvc3R1ZGVudC1kYXNoYm9hcmQvc3R1ZGVudC1kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3R1ZGVudFwiO1xuaW1wb3J0IHtDb3Vyc2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvY291cnNlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1Jlc2l6ZU9wdGlvbnMsIEltYWdlUmVzdWx0fSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9hcGlcIjtcbmltcG9ydCB7bXNnfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXktc3R1ZGVudC1kYXNoYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJ3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgU3R1ZGVudERhc2hib2FyZENvbXBvbmVudCB7XG5cbiAgc3R1ZGVudF9pZDogYW55O1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIHRlYWNoZXI6IFRlYWNoZXI7XG4gIHN0dWRlbnQ6IFN0dWRlbnQ7XG4gIGNvdXJzZTogQ291cnNlO1xuXG4gIHNob3dIaWdoU2NvcmU6IG51bWJlciA9IDU7XG5cbiAgaGlnaFNjb3JlU3R1ZGVudHM6IGFueVtdID0gW107XG4gIGJhZGdlczogYW55W10gPSBbXTtcblxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgdXNlckZvcm06IGFueTtcbiAgZmFrZUltYWdlOiBhbnkgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndCREFBb0hCd2dIQmdvSUNBZ0xDZ29M4oCmRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFILzJRPT0nO1xuICBpbWFnZTogc3RyaW5nID0gJyc7XG4gIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgcmVzaXplTWF4SGVpZ2h0OiAxNTAsXG4gICAgcmVzaXplTWF4V2lkdGg6IDE1MFxuICB9O1xuXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSwgcHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG5cbiAgICAgICAgdGhpcy5zdHVkZW50X2lkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdHVkZW50X2lkKTtcbiAgICAgICAgdGhpcy5nZXRTdHVkZW50KCk7XG4gICAgICB9KVxuICB9XG5cbiAgc2VsZWN0ZWQoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG4gICAgdGhpcy5zdHVkZW50LmltYWdlID0gaW1hZ2VSZXN1bHQucmVzaXplZFxuICAgICAgJiYgaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMXG4gICAgICB8fCBpbWFnZVJlc3VsdC5kYXRhVVJMO1xuICB9XG5cbiAgY3JlYXRlRm9ybSgpIHtcbiAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnc3R1ZGVudF9pZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICd1c2VybmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICduYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgJ3Bhc3N3b3JkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgfSk7XG4gIH1cblxuICBnb3RvUGFnZShwYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9jb3Vyc2UvJHtwYWdlfWBdKTtcbiAgfVxuXG5cbiAgZ2V0U3R1ZGVudCgpIHtcbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLmdldFN0dWRlbnQodGhpcy5zdHVkZW50X2lkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAgIHRoaXMudGVhY2hlciA9IGRhdGEudGVhY2hlclswXTtcbiAgICAgICAgICB0aGlzLnN0dWRlbnQgPSBkYXRhLnN0dWRlbnRbMF0uc3R1ZGVudDtcbiAgICAgICAgICB0aGlzLnN0dWRlbnQuaW1hZ2UgPSAnaHR0cDovLzU0LjE2OS4xMTUuMjMzL3N0dWRlbnRzL2xvZ28vJyArIHRoaXMuc3R1ZGVudC5pbWFnZTtcbiAgICAgICAgICB0aGlzLnN0dWRlbnQucHJvZ3Jlc3NUeXBlID0gdGhpcy5wcm9ncmVzc0NhbGN1bGF0b3IodGhpcy5zdHVkZW50Lm92ZXJhbGxfeHApO1xuICAgICAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudCA9IHRoaXMuc3R1ZGVudDtcbiAgICAgICAgICB0aGlzLmJhZGdlcyA9IGRhdGEuc3R1ZGVudFswXS5iYWRnZTtcbiAgICAgICAgICB0aGlzLmJhZGdlcy5tYXAoKGJhZGdlKSA9PiB7XG4gICAgICAgICAgICBiYWRnZS5pbWFnZSA9ICdodHRwOi8vNTQuMTY5LjExNS4yMzMvc3R1ZGVudHMvYmFkZ2VzLycgKyBiYWRnZS5pbWFnZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5jb3Vyc2UgPSBkYXRhLmNvdXJzZTtcbiAgICAgICAgICB0aGlzLmhpZ2hTY29yZVN0dWRlbnRzID0gZGF0YS5sZWFkZXJib2FyZDtcbiAgICAgICAgICB0aGlzLmhpZ2hTY29yZVN0dWRlbnRzLm1hcCgoc3R1ZGVudCkgPT4ge1xuICAgICAgICAgICAgc3R1ZGVudC5pbWFnZSA9ICdodHRwOi8vNTQuMTY5LjExNS4yMzMvc3R1ZGVudHMvbG9nby8nICsgc3R1ZGVudC5pbWFnZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5zaG93SGlnaFNjb3JlID0gK3RoaXMuY291cnNlLmxlYWRlcl9ib2FyZDtcblxuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHByb2dyZXNzVHlwZTogc3RyaW5nO1xuICBwcm9ncmVzc0NhbGN1bGF0b3IoeHA6IG51bWJlcik6IHN0cmluZ3tcblxuICAgIGxldCBhbGxTdGF0dXM6IHN0cmluZ1tdID0gWydpbmZvJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXTtcbiAgICBsZXQgc3RhdHVzOiBzdHJpbmc7XG5cbiAgICBpZih4cCA8IDI1KXtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1szXTtcbiAgICB9ZWxzZSBpZih4cCA8IDUwKXtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1syXTtcbiAgICB9ZWxzZSBpZih4cCA8IDc1KXtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1sxXTtcbiAgICB9ZWxzZSB7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXR1cztcblxuICB9XG5cblxuICBnb3RvV2ViYm9hcmQoKXtcblxuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgcXVlcnlQYXJhbXM6IHsgJ2lkJzogdGhpcy5jb3Vyc2UuaWR9LFxuICAgIH07XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC93ZWJib2FyZC9wb3N0YF0sIG5hdmlnYXRpb25FeHRyYXMpO1xuICB9XG5cbiAgZWRpdDogYm9vbGVhbiA9ZmFsc2U7XG5cbiAgZWRpdE1vZGUobW9kZTogYm9vbGVhbikge1xuICAgIHRoaXMuZWRpdCA9IG1vZGU7XG4gIH1cblxuXG4gIHNhdmUoKSB7XG5cbiAgICBsZXQgaW1hZ2VTdWJzdHIgPSB0aGlzLnN0dWRlbnQuaW1hZ2Uuc3Vic3RyaW5nKDM1KTtcbiAgICBjb25zb2xlLmxvZyhpbWFnZVN1YnN0cik7XG5cbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLmVkaXRTdHVkZW50KHRoaXMuc3R1ZGVudClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIHNob3dNZXNzYWdlKG1zZzogYW55KXtcbiAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB0aGlzLm1zZ3MucHVzaChtc2cpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tc2dzID0gW107XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICBzaWdub3V0KCkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbm91dCgpLnN1YnNjcmliZShcbiAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvc2lnbmluJ10pXG4gICAgKTtcbiAgfVxuXG5cbiAgY2FuY2VsKCl7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG5cbn1cbiJdfQ==
