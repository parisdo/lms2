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
var config_1 = require("../../services/config");
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
        this.newImage = false;
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
                _this.image = _this.student.image;
                _this.studentService.getStudentBadge(_this.selectedId)
                    .subscribe(function (data) {
                    data.forEach(function (badge) {
                        badge.image = config_1.publicUrl + '/students/badges/' + badge.image;
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
        this.newImage = true;
        this.image = imageResult.resized
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
        var _this = this;
        this.student.course_id = this.course_id;
        if (this.newImage) {
            this.student.image = this.image;
        }
        else {
            this.studentPath = (config_1.publicUrl + "students/logo/").length;
            this.student.image = this.student.image.substring(this.studentPath);
        }
        console.log(this.student);
        this.studentService.editStudentProfile(this.student)
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
        var badges = new deleteBadge(this.student.id, tempBadges);
        console.log(badges);
        this.studentService.deleteStudentBadge(badges)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.showMessage(message_service_1.msg.getUpdateMessage(200));
                _this.ngOnInit();
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateMessage(500));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50L2VkaXQtc3R1ZGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxzQkFBb0Isb0JBQW9CLENBQUMsQ0FBQTtBQUN6Qyx3QkFBc0Isc0JBQXNCLENBQUMsQ0FBQTtBQUM3QyxzQkFBc0MsZ0JBQWdCLENBQUMsQ0FBQTtBQUN2RCx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV2RCwrQkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUM1RCxnQ0FBNkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUc5RCxnQ0FBa0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUNuRCx1QkFBeUIsdUJBQXVCLENBQUMsQ0FBQTtBQUVqRDtJQUNFLHFCQUFtQixFQUFRLEVBQVMsTUFBWTtRQUE3QixPQUFFLEdBQUYsRUFBRSxDQUFNO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBTTtJQUNoRCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLG1CQUFXLGNBR3ZCLENBQUE7QUFRRDtJQXlCRSw4QkFBb0IsV0FBd0IsRUFBVSxLQUFxQixFQUFVLE1BQWMsRUFDL0UsYUFBNEIsRUFBVSxjQUE4QjtRQURwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMvRSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWxCeEYsY0FBUyxHQUFRLHdKQUF3SixDQUFDO1FBQzFLLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsa0JBQWEsR0FBa0I7WUFDN0IsZUFBZSxFQUFFLEdBQUc7WUFDcEIsY0FBYyxFQUFFLEdBQUc7U0FDcEIsQ0FBQztRQUtGLFlBQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFDdEIsYUFBUSxHQUFjLEVB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QUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOzs0QkFBQTtJQXFMRiwyQkFBQztBQUFELENBcExBLEFBb0xDLElBQUE7QUFwTFksNEJBQW9CLHVCQW9MaEMsQ0FBQSIsImZpbGUiOiJhcHAvY291cnNlL2VkaXQtc3R1ZGVudC9lZGl0LXN0dWRlbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmFkZ2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvYmFkZ2VcIjtcbmltcG9ydCB7U3R1ZGVudH0gZnJvbSBcIi4uLy4uL21vZGVscy9zdHVkZW50XCI7XG5pbXBvcnQge1ZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtTdHVkZW50U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0dWRlbnQuc2VydmljZVwiO1xuaW1wb3J0IHtJbWFnZVJlc3VsdCwgUmVzaXplT3B0aW9uc30gZnJvbSBcIm5nMi1pbWFnZXVwbG9hZFwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9hcGlcIjtcbmltcG9ydCB7bXNnfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHtwdWJsaWNVcmx9IGZyb20gIFwiLi4vLi4vc2VydmljZXMvY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBkZWxldGVCYWRnZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpZD86IGFueSwgcHVibGljIGJhZGdlcz86IGFueSkge1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2VkaXQtc3R1ZGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnZWRpdC1zdHVkZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2VkaXQtc3R1ZGVudC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRTdHVkZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvL0dldCBwYXJhbWV0ZXJcbiAgcHJpdmF0ZSBzZWxlY3RlZElkOiBudW1iZXI7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHVzZXJGb3JtOiBhbnk7XG4gIGZha2VJbWFnZTogYW55ID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3QkRBQW9IQndnSEJnb0lDQWdMQ2dvTOKApkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBSC8yUT09JztcbiAgaW1hZ2U6IHN0cmluZyA9ICcnO1xuICByZXNpemVPcHRpb25zOiBSZXNpemVPcHRpb25zID0ge1xuICAgIHJlc2l6ZU1heEhlaWdodDogMTUwLFxuICAgIHJlc2l6ZU1heFdpZHRoOiAxNTBcbiAgfTtcblxuXG4gIGNvdXJzZV9pZDogYW55O1xuXG4gIHN0dWRlbnQgPSBuZXcgU3R1ZGVudDtcbiAgc3R1ZGVudHM6IFN0dWRlbnRbXSA9IFtdO1xuICBzdHVkZW50UGF0aDogYW55O1xuXG4gIGJhZGdlczogQmFkZ2VbXSA9IFtdO1xuICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSwgcHJpdmF0ZSBzdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2UpIHtcblxuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmJhZGdlcyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuY291cnNlU2VydmljZS5jb3Vyc2UgIT0gbnVsbCAmJiB0aGlzLnN0dWRlbnRTZXJ2aWNlLnN0dWRlbnRzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY291cnNlX2lkID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZS5pZDtcbiAgICAgIHRoaXMuc3R1ZGVudHMgPSB0aGlzLnN0dWRlbnRTZXJ2aWNlLnN0dWRlbnRzO1xuXG4gICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgIHRoaXMuc3R1ZGVudHMuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuICAgICAgICAgICAgc3R1ZGVudC5pZCA9PSB0aGlzLnNlbGVjdGVkSWQgPyB0aGlzLnN0dWRlbnQgPSBzdHVkZW50IDogbnVsbDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5zdHVkZW50LmltYWdlO1xuXG4gICAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZS5nZXRTdHVkZW50QmFkZ2UodGhpcy5zZWxlY3RlZElkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgLy90aGlzLmJhZGdlcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChiYWRnZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICBiYWRnZS5pbWFnZSA9IHB1YmxpY1VybCArICcvc3R1ZGVudHMvYmFkZ2VzLycgKyBiYWRnZS5pbWFnZTtcbiAgICAgICAgICAgICAgICAgIGxldCBuZXdCYWRnZSA9IG5ldyBCYWRnZSh0aGlzLmNvdXJzZV9pZCwgYmFkZ2UuaWQsIGJhZGdlLm5hbWUsIGJhZGdlLmltYWdlLCBiYWRnZS54cCwgYmFkZ2UuaWQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYmFkZ2VzLnB1c2gobmV3QmFkZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5iYWRnZXMpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVhY2gnXSk7XG4gICAgfVxuXG4gIH1cblxuICBuZXdJbWFnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBzZWxlY3RlZChpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICB0aGlzLm5ld0ltYWdlID0gdHJ1ZTtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2VSZXN1bHQucmVzaXplZFxuICAgICAgJiYgaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMXG4gICAgICB8fCBpbWFnZVJlc3VsdC5kYXRhVVJMO1xuICB9XG5cbiAgY3JlYXRlRm9ybSgpIHtcbiAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAndXNlcm5hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnc3R1ZGVudF9pZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICduYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgJ292ZXJhbGxfeHAnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuXG4gIHNhdmUoc3R1ZGVudDogU3R1ZGVudCkge1xuXG4gICAgdGhpcy5zdHVkZW50LmNvdXJzZV9pZCA9IHRoaXMuY291cnNlX2lkO1xuXG4gICAgaWYodGhpcy5uZXdJbWFnZSl7XG4gICAgICB0aGlzLnN0dWRlbnQuaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgIH1lbHNlIHtcbiAgICAgIHRoaXMuc3R1ZGVudFBhdGggPSBgJHtwdWJsaWNVcmx9c3R1ZGVudHMvbG9nby9gLmxlbmd0aDtcbiAgICAgIHRoaXMuc3R1ZGVudC5pbWFnZSA9IHRoaXMuc3R1ZGVudC5pbWFnZS5zdWJzdHJpbmcodGhpcy5zdHVkZW50UGF0aCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGhpcy5zdHVkZW50KTtcblxuICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UuZWRpdFN0dWRlbnRQcm9maWxlKHRoaXMuc3R1ZGVudClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuXG4gIGNoZWNrQWxsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgb25DaGVjayhiYWRnZTogQmFkZ2UpIHtcbiAgICBiYWRnZS5zZWxlY3RlZCA9ICFiYWRnZS5zZWxlY3RlZDtcblxuICAgIGxldCBvYmogPSB0aGlzLmJhZGdlcy5maW5kKChiYWRnZSkgPT4ge1xuICAgICAgcmV0dXJuICFiYWRnZS5zZWxlY3RlZFxuICAgIH0pO1xuICAgIG9iaiA9PSBudWxsID8gdGhpcy5jaGVja0FsbCA9IHRydWUgOiB0aGlzLmNoZWNrQWxsID0gZmFsc2U7XG4gIH1cblxuICBvbkNoZWNrQWxsKCkge1xuICAgIHRoaXMuY2hlY2tBbGwgPSAhdGhpcy5jaGVja0FsbDtcbiAgICB0aGlzLmJhZGdlcy5mb3JFYWNoKChiYWRnZSkgPT4gYmFkZ2Uuc2VsZWN0ZWQgPSB0aGlzLmNoZWNrQWxsKTtcbiAgfVxuXG5cbiAgb25EZWxldGVTdHVkZW50QmFkZ2UoKSB7XG5cbiAgICBsZXQgdGVtcEJhZGdlczogYW55W10gPSBbXTtcblxuICAgIHRoaXMuYmFkZ2VzLmZpbHRlcigoYmFkZ2UpID0+IHtcbiAgICAgIGJhZGdlLnNlbGVjdGVkID8gdGVtcEJhZGdlcy5wdXNoKGJhZGdlKSA6IG51bGw7XG4gICAgfSk7XG5cbiAgICBsZXQgYmFkZ2VzID0gbmV3IGRlbGV0ZUJhZGdlKFxuICAgICAgdGhpcy5zdHVkZW50LmlkLFxuICAgICAgdGVtcEJhZGdlc1xuICAgICk7XG4gICAgY29uc29sZS5sb2coYmFkZ2VzKTtcblxuICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UuZGVsZXRlU3R1ZGVudEJhZGdlKGJhZGdlcylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG5cbiAgfVxuXG4gIHNob3dNZXNzYWdlKG1zZzogYW55KXtcbiAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB0aGlzLm1zZ3MucHVzaChtc2cpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tc2dzID0gW107XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuXG5cbiAgY2FuY2VsKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG59XG4iXX0=
