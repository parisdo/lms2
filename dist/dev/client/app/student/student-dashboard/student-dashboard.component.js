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
var config_1 = require("../../services/config");
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
        this.student_id = this.authService.id;
        if (this.student_id != null) {
            this.getStudent(this.student_id);
        }
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
    StudentDashboardComponent.prototype.getStudent = function (id) {
        var _this = this;
        this.studentService.getStudent(id)
            .subscribe(function (data) {
            _this.teacher = data.teacher[0];
            _this.student = data.student[0].student;
            _this.student.image = config_1.publicUrl + 'students/logo/' + _this.student.image;
            _this.student.progressType = _this.progressCalculator(_this.student.overall_xp);
            _this.studentService.student = _this.student;
            _this.badges = data.student[0].badge;
            _this.badges.map(function (badge) {
                badge.image = config_1.publicUrl + 'students/badges/' + badge.image;
            });
            _this.course = data.course;
            _this.highScoreStudents = data.leaderboard;
            _this.highScoreStudents.map(function (student) {
                student.student.image = config_1.publicUrl + 'students/logo/' + student.student.image;
                for (var i = 0; i < student.badge.length; i++) {
                    student.badge[i].image = config_1.publicUrl + 'students/badges/' + student.badge[i].image;
                }
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
                _this.showMessage(message_service_1.msg.getUpdateMessage(200));
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateMessage(500));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQtZGFzaGJvYXJkL3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRzlELHVCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpFLHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBSXZELGdDQUFrQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ25ELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHVCQUF3Qix1QkFFeEIsQ0FBQyxDQUY4QztBQVkvQztJQXlCRSxtQ0FBb0IsV0FBd0IsRUFDeEIsY0FBOEIsRUFBUyxXQUF3QixFQUMvRCxLQUFxQixFQUFVLE1BQWM7UUFGN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDL0QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBbEJqRSxrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUluQixjQUFTLEdBQVEsd0pBQXdKLENBQUM7UUFDMUssVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFrQjtZQUM3QixlQUFlLEVBQUUsR0FBRztZQUNwQixjQUFjLEVBQUUsR0FBRztTQUNwQixDQUFDO1FBRUYsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQXlHckIsU0FBSSxHQUFXLEtBQUssQ0FBQztJQXBHckIsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBR3RDLEVBQUUsQ0FBQSxDQUFDLElBQUks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LElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsMkNBQU8sR0FBUDtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQ2xDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQXRDLENBQXNDLENBQzdDLENBQUM7SUFDSixDQUFDO0lBR0QsMENBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQW5MSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DLENBQUM7O2lDQUFBO0lBaUxGLGdDQUFDO0FBQUQsQ0E5S0EsQUE4S0MsSUFBQTtBQTlLWSxpQ0FBeUIsNEJBOEtyQyxDQUFBIiwiZmlsZSI6ImFwcC9zdHVkZW50L3N0dWRlbnQtZGFzaGJvYXJkL3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdHVkZW50U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0dWRlbnQuc2VydmljZVwiO1xuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3N0dWRlbnRcIjtcbmltcG9ydCB7Q291cnNlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvdXJzZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtSZXNpemVPcHRpb25zLCBJbWFnZVJlc3VsdH0gZnJvbSBcIm5nMi1pbWFnZXVwbG9hZFwiO1xuaW1wb3J0IHtUZWFjaGVyfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3RlYWNoZXJcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcInByaW1lbmcvY29tcG9uZW50cy9jb21tb24vYXBpXCI7XG5pbXBvcnQge21zZ30gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtwdWJsaWNVcmx9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWdcIlxuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ215LXN0dWRlbnQtZGFzaGJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICdzdHVkZW50LWRhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHVkZW50LWRhc2hib2FyZC5jb21wb25lbnQuY3NzJ11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIFN0dWRlbnREYXNoYm9hcmRDb21wb25lbnQge1xuXG4gIHN0dWRlbnRfaWQ6IGFueTtcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICB0ZWFjaGVyOiBUZWFjaGVyO1xuICBzdHVkZW50OiBTdHVkZW50O1xuICBjb3Vyc2U6IENvdXJzZTtcblxuICBzaG93SGlnaFNjb3JlOiBudW1iZXIgPSA1O1xuXG4gIGhpZ2hTY29yZVN0dWRlbnRzOiBhbnlbXSA9IFtdO1xuICBiYWRnZXM6IGFueVtdID0gW107XG5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHVzZXJGb3JtOiBhbnk7XG4gIGZha2VJbWFnZTogYW55ID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3QkRBQW9IQndnSEJnb0lDQWdMQ2dvTOKApkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBSC8yUT09JztcbiAgaW1hZ2U6IHN0cmluZyA9ICcnO1xuICByZXNpemVPcHRpb25zOiBSZXNpemVPcHRpb25zID0ge1xuICAgIHJlc2l6ZU1heEhlaWdodDogMTUwLFxuICAgIHJlc2l6ZU1heFdpZHRoOiAxNTBcbiAgfTtcblxuICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2UsIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0dWRlbnRfaWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmlkO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5zdHVkZW50X2lkKTtcblxuICAgIGlmKHRoaXMuc3R1ZGVudF9pZCAhPSBudWxsKXtcbiAgICAgIHRoaXMuZ2V0U3R1ZGVudCh0aGlzLnN0dWRlbnRfaWQpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdGVkKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuICAgIHRoaXMuc3R1ZGVudC5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICYmIGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTFxuICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgfVxuXG4gIGNyZWF0ZUZvcm0oKSB7XG4gICAgdGhpcy51c2VyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ3N0dWRlbnRfaWQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAndXNlcm5hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnbmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICdwYXNzd29yZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgZ290b1BhZ2UocGFnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvY291cnNlLyR7cGFnZX1gXSk7XG4gIH1cblxuXG4gIGdldFN0dWRlbnQoaWQ6IGFueSkge1xuICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudChpZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAgIHRoaXMudGVhY2hlciA9IGRhdGEudGVhY2hlclswXTtcbiAgICAgICAgICB0aGlzLnN0dWRlbnQgPSBkYXRhLnN0dWRlbnRbMF0uc3R1ZGVudDtcbiAgICAgICAgICB0aGlzLnN0dWRlbnQuaW1hZ2UgPSBwdWJsaWNVcmwgKyAnc3R1ZGVudHMvbG9nby8nICsgdGhpcy5zdHVkZW50LmltYWdlO1xuICAgICAgICAgIHRoaXMuc3R1ZGVudC5wcm9ncmVzc1R5cGUgPSB0aGlzLnByb2dyZXNzQ2FsY3VsYXRvcih0aGlzLnN0dWRlbnQub3ZlcmFsbF94cCk7XG4gICAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZS5zdHVkZW50ID0gdGhpcy5zdHVkZW50O1xuICAgICAgICAgIHRoaXMuYmFkZ2VzID0gZGF0YS5zdHVkZW50WzBdLmJhZGdlO1xuICAgICAgICAgIHRoaXMuYmFkZ2VzLm1hcCgoYmFkZ2UpID0+IHtcbiAgICAgICAgICAgIGJhZGdlLmltYWdlID0gcHVibGljVXJs4oCLICsgJ3N0dWRlbnRzL2JhZGdlcy8nICsgYmFkZ2UuaW1hZ2VcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuY291cnNlID0gZGF0YS5jb3Vyc2U7XG4gICAgICAgICAgdGhpcy5oaWdoU2NvcmVTdHVkZW50cyA9IGRhdGEubGVhZGVyYm9hcmQ7XG5cbiAgICAgICAgICB0aGlzLmhpZ2hTY29yZVN0dWRlbnRzLm1hcCgoc3R1ZGVudCkgPT4ge1xuICAgICAgICAgICAgc3R1ZGVudC5zdHVkZW50LmltYWdlID0gcHVibGljVXJsICsgJ3N0dWRlbnRzL2xvZ28vJyArIHN0dWRlbnQuc3R1ZGVudC5pbWFnZTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0dWRlbnQuYmFkZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICBzdHVkZW50LmJhZGdlW2ldLmltYWdlID0gcHVibGljVXJsICsgJ3N0dWRlbnRzL2JhZGdlcy8nICsgc3R1ZGVudC5iYWRnZVtpXS5pbWFnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5oaWdoU2NvcmVTdHVkZW50cyk7XG4gICAgICAgICAgdGhpcy5zaG93SGlnaFNjb3JlID0gK3RoaXMuY291cnNlLmxlYWRlcl9ib2FyZDtcblxuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHByb2dyZXNzVHlwZTogc3RyaW5nO1xuICBwcm9ncmVzc0NhbGN1bGF0b3IoeHA6IG51bWJlcik6IHN0cmluZ3tcblxuICAgIGxldCBhbGxTdGF0dXM6IHN0cmluZ1tdID0gWydpbmZvJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXTtcbiAgICBsZXQgc3RhdHVzOiBzdHJpbmc7XG5cbiAgICBpZih4cCA8IDI1KXtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1szXTtcbiAgICB9ZWxzZSBpZih4cCA8IDUwKXtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1syXTtcbiAgICB9ZWxzZSBpZih4cCA8IDc1KXtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1sxXTtcbiAgICB9ZWxzZSB7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXR1cztcblxuICB9XG5cblxuICBnb3RvV2ViYm9hcmQoKXtcblxuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgcXVlcnlQYXJhbXM6IHsgJ2lkJzogdGhpcy5jb3Vyc2UuaWR9LFxuICAgIH07XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC93ZWJib2FyZC9wb3N0YF0sIG5hdmlnYXRpb25FeHRyYXMpO1xuICB9XG5cbiAgZWRpdDogYm9vbGVhbiA9ZmFsc2U7XG5cbiAgZWRpdE1vZGUobW9kZTogYm9vbGVhbikge1xuICAgIHRoaXMuZWRpdCA9IG1vZGU7XG4gIH1cblxuXG4gIHNhdmUoKSB7XG5cbiAgICBsZXQgaW1hZ2VTdWJzdHIgPSB0aGlzLnN0dWRlbnQuaW1hZ2Uuc3Vic3RyaW5nKDM1KTtcbiAgICBjb25zb2xlLmxvZyhpbWFnZVN1YnN0cik7XG5cbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLmVkaXRTdHVkZW50KHRoaXMuc3R1ZGVudClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBzaG93TWVzc2FnZShtc2c6IGFueSl7XG4gICAgdGhpcy5tc2dzID0gW107XG4gICAgdGhpcy5tc2dzLnB1c2gobXNnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubXNncyA9IFtdO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgc2lnbm91dCgpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25vdXQoKS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL3NpZ25pbiddKVxuICAgICk7XG4gIH1cblxuXG4gIGNhbmNlbCgpe1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG5cbn1cbiJdfQ==
