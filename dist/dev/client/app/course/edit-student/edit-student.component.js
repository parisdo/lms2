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
var core_1 = require("@angular/core");
var badge_1 = require("../../models/badge");
var student_1 = require("../../models/student");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var course_service_1 = require("../../services/course.service");
var student_service_1 = require("../../services/student.service");
var message_service_1 = require('../../services/message-service');
var deleteBadge = (function () {
    function deleteBadge(id, badges) {
        this.id = id;
        this.badges = badges;
    }
    return deleteBadge;
}());
exports.deleteBadge = deleteBadge;
var EditStudentComponent = (function () {
    function EditStudentComponent(formBuilder, route, router, courseService, studentService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.courseService = courseService;
        this.studentService = studentService;
        this.fakeImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoL…FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==';
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 150,
            resizeMaxWidth: 150
        };
        this.student = new student_1.Student;
        this.students = [];
        this.badges = [];
        this.msgs = [];
        this.checkAll = false;
        this.createForm();
    }
    EditStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.badges = [];
        if (this.courseService.course != null && this.studentService.students != null) {
            this.course_id = this.courseService.course.id;
            this.students = this.studentService.students;
            this.sub = this.route
                .queryParams
                .subscribe(function (params) {
                _this.selectedId = +params['id'];
                _this.students.forEach(function (student) {
                    student.id == _this.selectedId ? _this.student = student : null;
                });
                _this.studentService.getStudentBadge(_this.selectedId)
                    .subscribe(function (data) {
                    data.forEach(function (badge) {
                        badge.image = 'http://54.169.115.233/students/badges/' + badge.image;
                        var newBadge = new badge_1.Badge(_this.course_id, badge.id, badge.name, badge.image, badge.xp, badge.id, false);
                        _this.badges.push(newBadge);
                    });
                }, function (error) { return console.log(error); });
            });
        }
        else {
            this.router.navigate(['/teach']);
        }
    };
    EditStudentComponent.prototype.selected = function (imageResult) {
        this.student.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    EditStudentComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'username': ['', [forms_1.Validators.required]],
            'student_id': ['', [forms_1.Validators.required]],
            'name': ['', [forms_1.Validators.required]],
            'overall_xp': ['', [forms_1.Validators.required]],
        });
    };
    EditStudentComponent.prototype.reset = function () {
        this.createForm();
    };
    EditStudentComponent.prototype.save = function (student) {
        this.student.course_id = this.course_id;
        console.log(this.student);
        this.studentService.editStudentProfile(this.student)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
            }
            else {
            }
        }, function (error) { return console.log(error); });
    };
    EditStudentComponent.prototype.onCheck = function (badge) {
        badge.selected = !badge.selected;
        var obj = this.badges.find(function (badge) {
            return !badge.selected;
        });
        obj == null ? this.checkAll = true : this.checkAll = false;
    };
    EditStudentComponent.prototype.onCheckAll = function () {
        var _this = this;
        this.checkAll = !this.checkAll;
        this.badges.forEach(function (badge) { return badge.selected = _this.checkAll; });
    };
    EditStudentComponent.prototype.onDeleteStudentBadge = function () {
        var _this = this;
        var tempBadges = [];
        this.badges.filter(function (badge) {
            badge.selected ? tempBadges.push(badge) : null;
        });
        var badges = new deleteBadge(this.course_id, tempBadges);
        this.studentService.deleteStudentBadge(badges)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.showMessage(message_service_1.msg.getUpdateStudentsScoreMessage(200));
                _this.ngOnInit();
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateStudentsScoreMessage(500));
            }
        }, function (error) { return console.log(error); });
    };
    EditStudentComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    EditStudentComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditStudentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-student',
            templateUrl: 'edit-student.component.html',
            styleUrls: ['edit-student.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, course_service_1.CourseService, student_service_1.StudentService])
    ], EditStudentComponent);
    return EditStudentComponent;
}());
exports.EditStudentComponent = EditStudentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50L2VkaXQtc3R1ZGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxzQkFBb0Isb0JBQW9CLENBQUMsQ0FBQTtBQUN6Qyx3QkFBc0Isc0JBQXNCLENBQUMsQ0FBQTtBQUM3QyxzQkFBc0MsZ0JBQWdCLENBQUMsQ0FBQTtBQUN2RCx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV2RCwrQkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUM1RCxnQ0FBNkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUc5RCxnQ0FBa0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUVuRDtJQUNFLHFCQUFtQixFQUFRLEVBQVMsTUFBWTtRQUE3QixPQUFFLEdBQUYsRUFBRSxDQUFNO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBTTtJQUNoRCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLG1CQUFXLGNBR3ZCLENBQUE7QUFRRDtJQXdCRSw4QkFBb0IsV0FBd0IsRUFBVSxLQUFxQixFQUFVLE1BQWMsRUFDL0UsYUFBNEIsRUFBVSxjQUE4QjtRQURwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMvRSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWpCeEYsY0FBUyxHQUFRLHdKQUF3SixDQUFDO1FBQzFLLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsa0JBQWEsR0FBa0I7WUFDN0IsZUFBZSxFQUFFLEdBQUc7WUFDcEIsY0FBYyxFQUFFLEdBQUc7U0FDcEIsQ0FBQztRQUtGLFlBQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFDdEIsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixXQUFNLEdBQVksRUFBRSxD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QyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUlELHFDQUFNLEdBQU47UUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUEzS0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzs7NEJBQUE7SUF3S0YsMkJBQUM7QUFBRCxDQXZLQSxBQXVLQyxJQUFBO0FBdktZLDRCQUFvQix1QkF1S2hDLENBQUEiLCJmaWxlIjoiYXBwL2NvdXJzZS9lZGl0LXN0dWRlbnQvZWRpdC1zdHVkZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0JhZGdlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2JhZGdlXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3R1ZGVudFwiO1xuaW1wb3J0IHtWYWxpZGF0b3JzLCBGb3JtQnVpbGRlcn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7SW1hZ2VSZXN1bHQsIFJlc2l6ZU9wdGlvbnN9IGZyb20gXCJuZzItaW1hZ2V1cGxvYWRcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcInByaW1lbmcvY29tcG9uZW50cy9jb21tb24vYXBpXCI7XG5pbXBvcnQge21zZ30gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIGRlbGV0ZUJhZGdlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGlkPzogYW55LCBwdWJsaWMgYmFkZ2VzPzogYW55KSB7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZWRpdC1zdHVkZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdlZGl0LXN0dWRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZWRpdC1zdHVkZW50LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdFN0dWRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vR2V0IHBhcmFtZXRlclxuICBwcml2YXRlIHNlbGVjdGVkSWQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgdXNlckZvcm06IGFueTtcbiAgZmFrZUltYWdlOiBhbnkgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndCREFBb0hCd2dIQmdvSUNBZ0xDZ29M4oCmRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFILzJRPT0nO1xuICBpbWFnZTogc3RyaW5nID0gJyc7XG4gIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgcmVzaXplTWF4SGVpZ2h0OiAxNTAsXG4gICAgcmVzaXplTWF4V2lkdGg6IDE1MFxuICB9O1xuXG5cbiAgY291cnNlX2lkOiBhbnk7XG5cbiAgc3R1ZGVudCA9IG5ldyBTdHVkZW50O1xuICBzdHVkZW50czogU3R1ZGVudFtdID0gW107XG5cbiAgYmFkZ2VzOiBCYWRnZVtdID0gW107XG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLCBwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSkge1xuXG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuYmFkZ2VzID0gW107XG5cbiAgICBpZiAodGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZSAhPSBudWxsICYmIHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudHMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5jb3Vyc2VfaWQgPSB0aGlzLmNvdXJzZVNlcnZpY2UuY291cnNlLmlkO1xuICAgICAgdGhpcy5zdHVkZW50cyA9IHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudHM7XG5cbiAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgICAucXVlcnlQYXJhbXNcbiAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICAgICAgdGhpcy5zdHVkZW50cy5mb3JFYWNoKChzdHVkZW50KSA9PiB7XG4gICAgICAgICAgICBzdHVkZW50LmlkID09IHRoaXMuc2VsZWN0ZWRJZCA/IHRoaXMuc3R1ZGVudCA9IHN0dWRlbnQgOiBudWxsO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZS5nZXRTdHVkZW50QmFkZ2UodGhpcy5zZWxlY3RlZElkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgLy90aGlzLmJhZGdlcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChiYWRnZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICBiYWRnZS5pbWFnZSA9ICdodHRwOi8vNTQuMTY5LjExNS4yMzMvc3R1ZGVudHMvYmFkZ2VzLycgKyBiYWRnZS5pbWFnZTtcbiAgICAgICAgICAgICAgICAgIGxldCBuZXdCYWRnZSA9IG5ldyBCYWRnZSh0aGlzLmNvdXJzZV9pZCwgYmFkZ2UuaWQsIGJhZGdlLm5hbWUsIGJhZGdlLmltYWdlLCBiYWRnZS54cCwgYmFkZ2UuaWQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYmFkZ2VzLnB1c2gobmV3QmFkZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5iYWRnZXMpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVhY2gnXSk7XG4gICAgfVxuXG4gIH1cblxuICBzZWxlY3RlZChpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICB0aGlzLnN0dWRlbnQuaW1hZ2UgPSBpbWFnZVJlc3VsdC5yZXNpemVkXG4gICAgICAmJiBpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkxcbiAgICAgIHx8IGltYWdlUmVzdWx0LmRhdGFVUkw7XG4gIH1cblxuICBjcmVhdGVGb3JtKCkge1xuICAgIHRoaXMudXNlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICd1c2VybmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICdzdHVkZW50X2lkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgJ25hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnb3ZlcmFsbF94cCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG5cbiAgc2F2ZShzdHVkZW50OiBTdHVkZW50KSB7XG5cbiAgICB0aGlzLnN0dWRlbnQuY291cnNlX2lkID0gdGhpcy5jb3Vyc2VfaWQ7XG4gICAgY29uc29sZS5sb2codGhpcy5zdHVkZW50KTtcblxuICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UuZWRpdFN0dWRlbnRQcm9maWxlKHRoaXMuc3R1ZGVudClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAvL3RoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3RoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuXG4gIGNoZWNrQWxsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgb25DaGVjayhiYWRnZTogQmFkZ2UpIHtcbiAgICBiYWRnZS5zZWxlY3RlZCA9ICFiYWRnZS5zZWxlY3RlZDtcblxuICAgIGxldCBvYmogPSB0aGlzLmJhZGdlcy5maW5kKChiYWRnZSkgPT4ge1xuICAgICAgcmV0dXJuICFiYWRnZS5zZWxlY3RlZFxuICAgIH0pO1xuICAgIG9iaiA9PSBudWxsID8gdGhpcy5jaGVja0FsbCA9IHRydWUgOiB0aGlzLmNoZWNrQWxsID0gZmFsc2U7XG4gIH1cblxuICBvbkNoZWNrQWxsKCkge1xuICAgIHRoaXMuY2hlY2tBbGwgPSAhdGhpcy5jaGVja0FsbDtcbiAgICB0aGlzLmJhZGdlcy5mb3JFYWNoKChiYWRnZSkgPT4gYmFkZ2Uuc2VsZWN0ZWQgPSB0aGlzLmNoZWNrQWxsKTtcbiAgfVxuXG5cbiAgb25EZWxldGVTdHVkZW50QmFkZ2UoKSB7XG5cbiAgICBsZXQgdGVtcEJhZGdlczogYW55W10gPSBbXTtcblxuICAgIHRoaXMuYmFkZ2VzLmZpbHRlcigoYmFkZ2UpID0+IHtcbiAgICAgIGJhZGdlLnNlbGVjdGVkID8gdGVtcEJhZGdlcy5wdXNoKGJhZGdlKSA6IG51bGw7XG4gICAgfSk7XG5cbiAgICBsZXQgYmFkZ2VzID0gbmV3IGRlbGV0ZUJhZGdlKFxuICAgICAgdGhpcy5jb3Vyc2VfaWQsXG4gICAgICB0ZW1wQmFkZ2VzXG4gICAgKTtcbiAgICAvL2NvbnNvbGUubG9nKHN0dWRlbnRzKTtcblxuICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UuZGVsZXRlU3R1ZGVudEJhZGdlKGJhZGdlcylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcblxuICB9XG5cbiAgc2hvd01lc3NhZ2UobXNnOiBhbnkpe1xuICAgIHRoaXMubXNncyA9IFtdO1xuICAgIHRoaXMubXNncy5wdXNoKG1zZyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG5cblxuICBjYW5jZWwoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbn1cbiJdfQ==
