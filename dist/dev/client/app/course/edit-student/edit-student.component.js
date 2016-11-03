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
                _this.image = _this.student.image;
                _this.studentService.getStudentBadge(_this.selectedId)
                    .subscribe(function (data) {
                    console.log(data);
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
        this.student.image = this.image;
        console.log(this.student);
        this.studentService.editStudentProfile(this.student)
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50L2VkaXQtc3R1ZGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxzQkFBb0Isb0JBQW9CLENBQUMsQ0FBQTtBQUN6Qyx3QkFBc0Isc0JBQXNCLENBQUMsQ0FBQTtBQUM3QyxzQkFBc0MsZ0JBQWdCLENBQUMsQ0FBQTtBQUN2RCx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV2RCwrQkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUM1RCxnQ0FBNkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUc5RCxnQ0FBa0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUVuRDtJQUNFLHFCQUFtQixFQUFRLEVBQVMsTUFBWTtRQUE3QixPQUFFLEdBQUYsRUFBRSxDQUFNO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBTTtJQUNoRCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLG1CQUFXLGNBR3ZCLENBQUE7QUFRRDtJQXdCRSw4QkFBb0IsV0FBd0IsRUFBVSxLQUFxQixFQUFVLE1BQWMsRUFDL0UsYUFBNEIsRUFBVSxjQUE4QjtRQURwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMvRSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWpCeEYsY0FBUyxHQUFRLHdKQUF3SixDQUFDO1FBQzFLLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsa0JBQWEsR0FBa0I7WUFDN0IsZUFBZSxFQUFFLEdBQUc7WUFDcEIsY0FBYyxFQUFFLEdBQUc7U0FDcEIsQ0FBQztRQUtGLFlBQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFDdEIsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixXQUFNLEdBQVksRUFBRSxD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QUFDLFdBQVcsQ0FBQyxxQkFBRyxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBRyxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0QsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7SUFFTixDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLEdBQVE7UUFBcEIsaUJBTUM7UUFMQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFJRCxxQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBOUtIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7OzRCQUFBO0lBMktGLDJCQUFDO0FBQUQsQ0ExS0EsQUEwS0MsSUFBQTtBQTFLWSw0QkFBb0IsdUJBMEtoQyxDQUFBIiwiZmlsZSI6ImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50L2VkaXQtc3R1ZGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWRnZX0gZnJvbSBcIi4uLy4uL21vZGVscy9iYWRnZVwiO1xuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3N0dWRlbnRcIjtcbmltcG9ydCB7VmFsaWRhdG9ycywgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ltYWdlUmVzdWx0LCBSZXNpemVPcHRpb25zfSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCJwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL2FwaVwiO1xuaW1wb3J0IHttc2d9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBkZWxldGVCYWRnZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpZD86IGFueSwgcHVibGljIGJhZGdlcz86IGFueSkge1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2VkaXQtc3R1ZGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnZWRpdC1zdHVkZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2VkaXQtc3R1ZGVudC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRTdHVkZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvL0dldCBwYXJhbWV0ZXJcbiAgcHJpdmF0ZSBzZWxlY3RlZElkOiBudW1iZXI7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHVzZXJGb3JtOiBhbnk7XG4gIGZha2VJbWFnZTogYW55ID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3QkRBQW9IQndnSEJnb0lDQWdMQ2dvTOKApkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBSC8yUT09JztcbiAgaW1hZ2U6IHN0cmluZyA9ICcnO1xuICByZXNpemVPcHRpb25zOiBSZXNpemVPcHRpb25zID0ge1xuICAgIHJlc2l6ZU1heEhlaWdodDogMTUwLFxuICAgIHJlc2l6ZU1heFdpZHRoOiAxNTBcbiAgfTtcblxuXG4gIGNvdXJzZV9pZDogYW55O1xuXG4gIHN0dWRlbnQgPSBuZXcgU3R1ZGVudDtcbiAgc3R1ZGVudHM6IFN0dWRlbnRbXSA9IFtdO1xuXG4gIGJhZGdlczogQmFkZ2VbXSA9IFtdO1xuICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSwgcHJpdmF0ZSBzdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2UpIHtcblxuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmJhZGdlcyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuY291cnNlU2VydmljZS5jb3Vyc2UgIT0gbnVsbCAmJiB0aGlzLnN0dWRlbnRTZXJ2aWNlLnN0dWRlbnRzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY291cnNlX2lkID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZS5pZDtcbiAgICAgIHRoaXMuc3R1ZGVudHMgPSB0aGlzLnN0dWRlbnRTZXJ2aWNlLnN0dWRlbnRzO1xuXG4gICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgIHRoaXMuc3R1ZGVudHMuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuICAgICAgICAgICAgc3R1ZGVudC5pZCA9PSB0aGlzLnNlbGVjdGVkSWQgPyB0aGlzLnN0dWRlbnQgPSBzdHVkZW50IDogbnVsbDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5zdHVkZW50LmltYWdlO1xuXG4gICAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZS5nZXRTdHVkZW50QmFkZ2UodGhpcy5zZWxlY3RlZElkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5iYWRnZXMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoYmFkZ2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgYmFkZ2UuaW1hZ2UgPSAnaHR0cDovLzU0LjE2OS4xMTUuMjMzL3N0dWRlbnRzL2JhZGdlcy8nICsgYmFkZ2UuaW1hZ2U7XG4gICAgICAgICAgICAgICAgICBsZXQgbmV3QmFkZ2UgPSBuZXcgQmFkZ2UodGhpcy5jb3Vyc2VfaWQsIGJhZGdlLmlkLCBiYWRnZS5uYW1lLCBiYWRnZS5pbWFnZSwgYmFkZ2UueHAsIGJhZGdlLmlkLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmJhZGdlcy5wdXNoKG5ld0JhZGdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYmFkZ2VzKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RlYWNoJ10pO1xuICAgIH1cblxuICB9XG5cbiAgc2VsZWN0ZWQoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICYmIGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTFxuICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgfVxuXG4gIGNyZWF0ZUZvcm0oKSB7XG4gICAgdGhpcy51c2VyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ3VzZXJuYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgJ3N0dWRlbnRfaWQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnbmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICdvdmVyYWxsX3hwJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gIH1cblxuICBzYXZlKHN0dWRlbnQ6IFN0dWRlbnQpIHtcblxuICAgIHRoaXMuc3R1ZGVudC5jb3Vyc2VfaWQgPSB0aGlzLmNvdXJzZV9pZDtcbiAgICB0aGlzLnN0dWRlbnQuaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3R1ZGVudCk7XG5cbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLmVkaXRTdHVkZW50UHJvZmlsZSh0aGlzLnN0dWRlbnQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoMjAwKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuXG4gIGNoZWNrQWxsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgb25DaGVjayhiYWRnZTogQmFkZ2UpIHtcbiAgICBiYWRnZS5zZWxlY3RlZCA9ICFiYWRnZS5zZWxlY3RlZDtcblxuICAgIGxldCBvYmogPSB0aGlzLmJhZGdlcy5maW5kKChiYWRnZSkgPT4ge1xuICAgICAgcmV0dXJuICFiYWRnZS5zZWxlY3RlZFxuICAgIH0pO1xuICAgIG9iaiA9PSBudWxsID8gdGhpcy5jaGVja0FsbCA9IHRydWUgOiB0aGlzLmNoZWNrQWxsID0gZmFsc2U7XG4gIH1cblxuICBvbkNoZWNrQWxsKCkge1xuICAgIHRoaXMuY2hlY2tBbGwgPSAhdGhpcy5jaGVja0FsbDtcbiAgICB0aGlzLmJhZGdlcy5mb3JFYWNoKChiYWRnZSkgPT4gYmFkZ2Uuc2VsZWN0ZWQgPSB0aGlzLmNoZWNrQWxsKTtcbiAgfVxuXG5cbiAgb25EZWxldGVTdHVkZW50QmFkZ2UoKSB7XG5cbiAgICBsZXQgdGVtcEJhZGdlczogYW55W10gPSBbXTtcblxuICAgIHRoaXMuYmFkZ2VzLmZpbHRlcigoYmFkZ2UpID0+IHtcbiAgICAgIGJhZGdlLnNlbGVjdGVkID8gdGVtcEJhZGdlcy5wdXNoKGJhZGdlKSA6IG51bGw7XG4gICAgfSk7XG5cbiAgICBsZXQgYmFkZ2VzID0gbmV3IGRlbGV0ZUJhZGdlKFxuICAgICAgdGhpcy5zdHVkZW50LmlkLFxuICAgICAgdGVtcEJhZGdlc1xuICAgICk7XG4gICAgY29uc29sZS5sb2coYmFkZ2VzKTtcblxuICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UuZGVsZXRlU3R1ZGVudEJhZGdlKGJhZGdlcylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcblxuICB9XG5cbiAgc2hvd01lc3NhZ2UobXNnOiBhbnkpe1xuICAgIHRoaXMubXNncyA9IFtdO1xuICAgIHRoaXMubXNncy5wdXNoKG1zZyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG5cblxuICBjYW5jZWwoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbn1cbiJdfQ==
