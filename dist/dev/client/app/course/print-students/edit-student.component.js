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
var student_1 = require("../../models/student");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var course_service_1 = require("../../services/course.service");
var student_service_1 = require("../../services/student.service");
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
        this.createForm();
    }
    EditStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvcHJpbnQtc3R1ZGVudHMvZWRpdC1zdHVkZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBRWhELHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXZELCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBUzlEO0lBdUJJLDhCQUFvQixXQUF3QixFQUN4QixLQUFxQixFQUNyQixNQUFjLEVBQ2QsYUFBNEIsRUFDNUIsY0FBOEI7UUFKOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQW5CbEQsY0FBUyxHQUFRLHdKQUF3SixDQUFDO1FBQzFLLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsa0JBQWEsR0FBa0I7WUFDN0IsZUFBZSxFQUFFLEdBQUc7WUFDcEIsY0FBYyxFQUFFLEdBQUc7U0FDcEIsQ0FBQztRQUtGLFlBQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFDdEIsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixXQUFNLEdBQVksRUFBRSxDQUFDO1FBUW5CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQW1CQztRQWpCQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztZQUM1RSxJQUFJLENBQUMs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aEMsQ0FBQSIsImZpbGUiOiJhcHAvY291cnNlL3ByaW50LXN0dWRlbnRzL2VkaXQtc3R1ZGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWRnZX0gZnJvbSBcIi4uLy4uL21vZGVscy9iYWRnZVwiO1xuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3N0dWRlbnRcIjtcbmltcG9ydCB7VmFsaWRhdG9ycywgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ltYWdlUmVzdWx0LCBSZXNpemVPcHRpb25zfSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdlZGl0LXN0dWRlbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZWRpdC1zdHVkZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2VkaXQtc3R1ZGVudC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRTdHVkZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgLy9HZXQgcGFyYW1ldGVyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZElkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIHVzZXJGb3JtOiBhbnk7XG4gICAgZmFrZUltYWdlOiBhbnkgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndCREFBb0hCd2dIQmdvSUNBZ0xDZ29M4oCmRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFILzJRPT0nO1xuICAgIGltYWdlOiBzdHJpbmcgPSAnJztcbiAgICByZXNpemVPcHRpb25zOiBSZXNpemVPcHRpb25zID0ge1xuICAgICAgcmVzaXplTWF4SGVpZ2h0OiAxNTAsXG4gICAgICByZXNpemVNYXhXaWR0aDogMTUwXG4gICAgfTtcblxuXG4gIGNvdXJzZV9pZDogYW55O1xuXG4gICAgc3R1ZGVudCA9IG5ldyBTdHVkZW50O1xuICAgIHN0dWRlbnRzOiBTdHVkZW50W10gPSBbXTtcblxuICAgIGJhZGdlczogQmFkZ2VbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBzdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2Upe1xuXG4gICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuXG4gICAgICBpZih0aGlzLmNvdXJzZVNlcnZpY2UuY291cnNlICE9IG51bGwgJiYgdGhpcy5zdHVkZW50U2VydmljZS5zdHVkZW50cyAhPSBudWxsKXtcbiAgICAgICAgdGhpcy5jb3Vyc2VfaWQgPSB0aGlzLmNvdXJzZVNlcnZpY2UuY291cnNlLmlkO1xuICAgICAgICB0aGlzLnN0dWRlbnRzID0gdGhpcy5zdHVkZW50U2VydmljZS5zdHVkZW50cztcblxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgICAucXVlcnlQYXJhbXNcbiAgICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgICAgdGhpcy5zdHVkZW50cy5mb3JFYWNoKChzdHVkZW50KSA9PiB7XG4gICAgICAgICAgICAgIHN0dWRlbnQuaWQgPT0gdGhpcy5zZWxlY3RlZElkID8gdGhpcy5zdHVkZW50ID0gc3R1ZGVudDogbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0dWRlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy90ZWFjaCddKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHNlbGVjdGVkKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuICAgICAgdGhpcy5zdHVkZW50LmltYWdlID0gaW1hZ2VSZXN1bHQucmVzaXplZFxuICAgICAgICAmJiBpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkxcbiAgICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtKCl7XG4gICAgICAgIHRoaXMudXNlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICd1c2VybmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgICdzdHVkZW50X2lkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAgICAgJ25hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICAgICAnb3ZlcmFsbF94cCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gICAgfVxuXG4gICAgc2F2ZShzdHVkZW50OiBTdHVkZW50KSB7XG5cbiAgICAgIHRoaXMuc3R1ZGVudC5jb3Vyc2VfaWQgPSB0aGlzLmNvdXJzZV9pZDtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3R1ZGVudCk7XG5cbiAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UuZWRpdFN0dWRlbnRQcm9maWxlKHRoaXMuc3R1ZGVudClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICAgIC8vdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoMjAwKSk7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgIC8vdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICApO1xuICAgIH1cblxuICBjYW5jZWwoKXtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxufVxuIl19
