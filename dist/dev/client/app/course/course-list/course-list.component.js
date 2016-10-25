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
var student_service_1 = require("../../services/student.service");
var message_service_1 = require('../../services/message-service');
var course_service_1 = require("../../services/course.service");
var config_1 = require("../../services/config");
var updateStudentsScore = (function () {
    function updateStudentsScore(course_id, score, students) {
        this.course_id = course_id;
        this.score = score;
        this.students = students;
    }
    return updateStudentsScore;
}());
exports.updateStudentsScore = updateStudentsScore;
var deleteStudent = (function () {
    function deleteStudent(course_id, students) {
        this.course_id = course_id;
        this.students = students;
    }
    return deleteStudent;
}());
exports.deleteStudent = deleteStudent;
var CourseListComponent = (function () {
    function CourseListComponent(courseService, studentService, route, router) {
        this.courseService = courseService;
        this.studentService = studentService;
        this.route = route;
        this.router = router;
        this.students = [];
        this.levels = [];
        this.exp = [10, 15, 20];
        this.badges = [];
        this.msgs = [];
        this.filterKeys = 'name';
        this.checkAll = false;
        this.searchValue = '';
        this.feedbackState = 'XP';
        this.selectedStudents = [];
        this.highScoreStudents = [];
        this.navigationExtras = {
            queryParams: { 'id': this.selectedId },
        };
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.selectedId = +params['id'];
            console.log(_this.selectedId);
            _this.courseService.getCourse(_this.selectedId)
                .subscribe(function (data) {
                console.log(data);
                _this.course = data.course;
                _this.levels = data.levels;
                _this.badges = data.badges;
                _this.badges.map(function (badge) {
                    badge.image = 'http://54.169.115.233/students/badges/' + badge.image;
                });
                _this.courseService.course = data.course;
                _this.courseService.levels = data.levels;
                _this.courseService.badges = _this.badges;
                _this.students = data.students;
                _this.students.forEach(function (student) {
                    student.student_id = student.student_id.toString();
                    student.image = config_1.publicUrl + 'students/logo/' + student.image;
                    student.progressType = _this.progressCalculator(student.overall_xp);
                });
                _this.studentService.students = _this.students;
                _this.courseService.getHighscore(_this.courseService.course.id)
                    .subscribe(function (data) {
                    _this.highScoreStudents = data.students;
                });
            }, function (error) { return _this.errorMessage = error; });
        });
    };
    CourseListComponent.prototype.progressCalculator = function (xp) {
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
    CourseListComponent.prototype.orderBy = function (value) {
        this.students = _.orderBy(this.students, [value, 'id'], ['asc', 'desc']);
    };
    CourseListComponent.prototype.search = function (value) {
        this.searchValue = value;
    };
    CourseListComponent.prototype.giveAllFeedback = function () {
        var _this = this;
        $("#giveFeedback").modal();
        this.selectedStudents = [];
        this.students.filter(function (student) { return student.selected ? _this.selectedStudents.push(student) : null; });
    };
    CourseListComponent.prototype.giveFeedback = function (student) {
        this.selectedStudents = [];
        this.selectedStudents.push(student);
    };
    CourseListComponent.prototype.updateBadgeScore = function (score) {
        var _this = this;
        var students = new updateStudentsScore(this.course.id, score, this.selectedStudents);
        this.studentService.updateStudentsScore(students)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.showMessage(message_service_1.msg.getUpdateStudentsScoreMessage(200));
                $("#giveFeedback").modal('toggle');
                _this.ngOnInit();
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateStudentsScoreMessage(500));
            }
        }, function (error) { return console.log(error); });
    };
    CourseListComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    CourseListComponent.prototype.onCheck = function (student) {
        student.selected = !student.selected;
        var obj = this.students.find(function (item) { return !item.selected; });
        obj == null ? this.checkAll = true : this.checkAll = false;
    };
    CourseListComponent.prototype.onCheckAll = function () {
        var _this = this;
        this.checkAll = !this.checkAll;
        this.students.forEach(function (student) { return student.selected = _this.checkAll; });
    };
    CourseListComponent.prototype.chageFeedbackState = function (state) {
        this.feedbackState = state;
    };
    CourseListComponent.prototype.viewLeaderboard = function () {
        $("#viewLeaderboard").modal();
    };
    CourseListComponent.prototype.goBack = function () {
        this.router.navigate(["/teach"]);
    };
    CourseListComponent.prototype.gotoPage = function (page) {
        this.router.navigate([("/course/" + page)]);
    };
    CourseListComponent.prototype.gotoWebboard = function () {
        this.router.navigate(["/webboard/post"], this.navigationExtras);
    };
    CourseListComponent.prototype.editStudentProfile = function (id) {
        var navigationExtras = {
            queryParams: { 'id': id },
        };
        this.router.navigate(["/course/edit-student"], navigationExtras);
    };
    CourseListComponent.prototype.onDeleteStudent = function () {
        var _this = this;
        var tempStudents = [];
        this.students.filter(function (student) {
            student.selected ? tempStudents.push(student) : null;
        });
        var students = new deleteStudent(this.course.id, tempStudents);
        console.log(students);
        this.studentService.deleteStudent(students)
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
    CourseListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CourseListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-list',
            templateUrl: 'course-list.component.html',
            styleUrls: ['course-list.component.css']
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, student_service_1.StudentService, router_1.ActivatedRoute, router_1.Router])
    ], CourseListComponent);
    return CourseListComponent;
}());
exports.CourseListComponent = CourseListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFHekUsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFFOUQsZ0NBQWtCLGdDQUFnQyxDQUFDLENBQUE7QUFHbkQsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFHNUQsdUJBQXdCLHVCQUN4QixDQUFDLENBRDhDO0FBTy9DO0lBRUUsNkJBQ1MsU0FBZSxFQUNmLEtBQVcsRUFDWCxRQUFjO1FBRmQsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCxhQUFRLEdBQVIsUUFBUSxDQUFNO0lBQ25CLENBQUM7SUFFUCwwQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksMkJBQW1CLHNCQVEvQixDQUFBO0FBRUQ7SUFDRSx1QkFDUyxTQUFlLEVBQ2YsUUFBYztRQURkLGNBQVMsR0FBVCxTQUFTLENBQU07UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFNO0lBQ25CLENBQUM7SUFDUCxvQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFkscUJBQWEsZ0JBS3pCLENBQUE7QUFTRDtJQWdDRSw2QkFDWSxhQUE0QixFQUFVLGNBQThCLEVBQ3BFLEtBQXFCLEVBQVUsTUFBYztRQUQ3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNwRSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUE5QnpELGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUVyQixRQUFHLEdBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLFdBQU0sR0FB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VyxDQUFDLHFCQUFHLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekQsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLENBQUM7WUFBQSxJQUFJLENBQUMsQ0FBQztnQkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFHLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQztJQUVOLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBN09IO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBQyxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7OzJCQUFBO0lBeU9GLDBCQUFDO0FBQUQsQ0F2T0EsQUF1T0MsSUFBQTtBQXZPWSwyQkFBbUIsc0JBdU8vQixDQUFBIiwiZmlsZSI6ImFwcC9jb3Vyc2UvY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3N0dWRlbnRcIjtcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHttc2d9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5cbmRlY2xhcmUgdmFyIF86IGFueTtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcblxuaW1wb3J0IHtwdWJsaWNVcmx9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWdcIlxuaW1wb3J0IHtCYWRnZX0gZnJvbSBcIi4uLy4uL21vZGVscy9iYWRnZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9hcGlcIjtcbmltcG9ydCB7TGV2ZWx9IGZyb20gXCIuLi8uLi9tb2RlbHMvbGV2ZWxcIjtcbmRlY2xhcmUgdmFyICAkOiBhbnk7XG5cblxuZXhwb3J0IGNsYXNzIHVwZGF0ZVN0dWRlbnRzU2NvcmUge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb3Vyc2VfaWQ/OiBhbnksXG4gICAgcHVibGljIHNjb3JlPzogYW55LFxuICAgIHB1YmxpYyBzdHVkZW50cz86IGFueSxcbiAgKSB7IH1cblxufVxuXG5leHBvcnQgY2xhc3MgZGVsZXRlU3R1ZGVudHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvdXJzZV9pZD86IGFueSxcbiAgICBwdWJsaWMgc3R1ZGVudHM/OiBhbnksXG4gICkgeyB9XG59XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2NvdXJzZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICdjb3Vyc2UtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczpbJ2NvdXJzZS1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENvdXJzZUxpc3RDb21wb25lbnQge1xuXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBjb3Vyc2U6IENvdXJzZTtcbiAgc3R1ZGVudHM6IFN0dWRlbnRbXT0gW107XG4gIGxldmVsczogTGV2ZWxbXSA9IFtdO1xuXG4gIGV4cDogYW55W10gPSBbMTAsIDE1LCAyMF07XG4gIGJhZGdlczogQmFkZ2VbXSA9IFtdO1xuXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xuICAvL0dldCBwYXJhbWV0ZXJcbiAgcHJpdmF0ZSBzZWxlY3RlZElkOiBudW1iZXI7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgLy8gU2VhcmNoXG4gIHByaXZhdGUgZmlsdGVyS2V5czogc3RyaW5nID0gJ25hbWUnO1xuICBjaGVja0FsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBzZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgLy9HaXZlIEZlZWRiYWNrIE1vZGFsXG4gIGZlZWRiYWNrU3RhdGU6IHN0cmluZyA9ICdYUCc7XG4gIHNlbGVjdGVkU3R1ZGVudHM6IGFueSA9IFtdO1xuXG4gIC8vVmlldyBIaWdoc2NvcmVcbiAgaGlnaFNjb3JlU3R1ZGVudHM6IGFueVtdID0gW107XG5cbiAgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICBxdWVyeVBhcmFtczogeyAnaWQnOiB0aGlzLnNlbGVjdGVkSWR9LFxuICB9O1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGNvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsIHByaXZhdGUgc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgICAucXVlcnlQYXJhbXNcbiAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkSWQpO1xuXG4gICAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmdldENvdXJzZSh0aGlzLnNlbGVjdGVkSWQpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAoZGF0YTphbnkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZSA9IGRhdGEuY291cnNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVscyA9IGRhdGEubGV2ZWxzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhZGdlcyA9IGRhdGEuYmFkZ2VzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFkZ2VzLm1hcCgoYmFkZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWRnZS5pbWFnZSA9ICdodHRwOi8vNTQuMTY5LjExNS4yMzMvc3R1ZGVudHMvYmFkZ2VzLycgKyBiYWRnZS5pbWFnZVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuY291cnNlID0gZGF0YS5jb3Vyc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZS5sZXZlbHMgPSBkYXRhLmxldmVscztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmJhZGdlcyA9IHRoaXMuYmFkZ2VzO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50cyA9IGRhdGEuc3R1ZGVudHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudHMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50LnN0dWRlbnRfaWQgPSBzdHVkZW50LnN0dWRlbnRfaWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5pbWFnZSA9IHB1YmxpY1VybCArICdzdHVkZW50cy9sb2dvLycgKyBzdHVkZW50LmltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50LnByb2dyZXNzVHlwZSA9IHRoaXMucHJvZ3Jlc3NDYWxjdWxhdG9yKHN0dWRlbnQub3ZlcmFsbF94cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudHMgPSB0aGlzLnN0dWRlbnRzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZS5nZXRIaWdoc2NvcmUodGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hTY29yZVN0dWRlbnRzID0gZGF0YS5zdHVkZW50cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gICAgICAgICB9KTtcblxuICB9XG5cbiAgcHJpdmF0ZSBwcm9ncmVzc1R5cGU6IHN0cmluZztcbiAgcHJvZ3Jlc3NDYWxjdWxhdG9yKHhwOiBudW1iZXIpOiBzdHJpbmd7XG5cbiAgICBsZXQgYWxsU3RhdHVzOiBzdHJpbmdbXSA9IFsnaW5mbycsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ107XG4gICAgbGV0IHN0YXR1czogc3RyaW5nO1xuXG4gICAgaWYoeHAgPCAyNSl7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbM107XG4gICAgfWVsc2UgaWYoeHAgPCA1MCl7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbMl07XG4gICAgfWVsc2UgaWYoeHAgPCA3NSl7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbMV07XG4gICAgfWVsc2Uge1xuICAgICAgc3RhdHVzID0gYWxsU3RhdHVzWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0dXM7XG5cbiAgfVxuXG4gIG9yZGVyQnkodmFsdWU6IGFueSl7XG4gICAgdGhpcy5zdHVkZW50cyA9IF8ub3JkZXJCeSh0aGlzLnN0dWRlbnRzLCBbdmFsdWUsICdpZCddLCBbJ2FzYycsICdkZXNjJ10pO1xuICB9XG5cbiAgc2VhcmNoKHZhbHVlOiBhbnkpe1xuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdpdmVBbGxGZWVkYmFjaygpe1xuICAgICAgJChcIiNnaXZlRmVlZGJhY2tcIikubW9kYWwoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRTdHVkZW50cyA9IFtdO1xuICAgICAgdGhpcy5zdHVkZW50cy5maWx0ZXIoKHN0dWRlbnQpID0+IHN0dWRlbnQuc2VsZWN0ZWQgPyB0aGlzLnNlbGVjdGVkU3R1ZGVudHMucHVzaChzdHVkZW50KTogbnVsbCk7XG4gIH1cblxuICBnaXZlRmVlZGJhY2soc3R1ZGVudDogYW55KXtcbiAgICB0aGlzLnNlbGVjdGVkU3R1ZGVudHMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkU3R1ZGVudHMucHVzaChzdHVkZW50KTtcbiAgfVxuXG4gIHVwZGF0ZUJhZGdlU2NvcmUoc2NvcmU6IGFueSl7XG5cbiAgICBsZXQgc3R1ZGVudHMgPSBuZXcgdXBkYXRlU3R1ZGVudHNTY29yZShcbiAgICAgIHRoaXMuY291cnNlLmlkLFxuICAgICAgc2NvcmUsXG4gICAgICB0aGlzLnNlbGVjdGVkU3R1ZGVudHNcbiAgICApO1xuXG4gICAgdGhpcy5zdHVkZW50U2VydmljZS51cGRhdGVTdHVkZW50c1Njb3JlKHN0dWRlbnRzKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICAgICQoXCIjZ2l2ZUZlZWRiYWNrXCIpLm1vZGFsKCd0b2dnbGUnKTtcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZSg1MDApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cblxuICBzaG93TWVzc2FnZShtc2c6IGFueSl7XG4gICAgdGhpcy5tc2dzID0gW107XG4gICAgdGhpcy5tc2dzLnB1c2gobXNnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubXNncyA9IFtdO1xuICAgIH0sIDMwMDApO1xuICB9XG5cblxuICBvbkNoZWNrKHN0dWRlbnQ6IFN0dWRlbnQpe1xuICAgIHN0dWRlbnQuc2VsZWN0ZWQgPSAhc3R1ZGVudC5zZWxlY3RlZDtcblxuICAgIGxldCBvYmogPSB0aGlzLnN0dWRlbnRzLmZpbmQoKGl0ZW0pID0+IHsgcmV0dXJuICFpdGVtLnNlbGVjdGVkIH0pO1xuICAgIG9iaiA9PSBudWxsID8gdGhpcy5jaGVja0FsbCA9IHRydWU6IHRoaXMuY2hlY2tBbGwgPSBmYWxzZTtcbiAgfVxuXG4gIG9uQ2hlY2tBbGwoKXtcbiAgICB0aGlzLmNoZWNrQWxsID0gIXRoaXMuY2hlY2tBbGw7XG4gICAgdGhpcy5zdHVkZW50cy5mb3JFYWNoKChzdHVkZW50KSA9PiBzdHVkZW50LnNlbGVjdGVkID0gdGhpcy5jaGVja0FsbCk7XG4gIH1cblxuICBjaGFnZUZlZWRiYWNrU3RhdGUoc3RhdGU6IHN0cmluZyl7XG4gICAgdGhpcy5mZWVkYmFja1N0YXRlID0gc3RhdGU7XG4gIH1cblxuICB2aWV3TGVhZGVyYm9hcmQoKXtcbiAgICAkKFwiI3ZpZXdMZWFkZXJib2FyZFwiKS5tb2RhbCgpO1xuICB9XG5cbiAgZ29CYWNrKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvdGVhY2hgXSk7XG4gIH1cblxuICBnb3RvUGFnZShwYWdlOiBzdHJpbmcpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2NvdXJzZS8ke3BhZ2V9YF0pO1xuICB9XG5cbiAgZ290b1dlYmJvYXJkKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Avd2ViYm9hcmQvcG9zdGBdLCB0aGlzLm5hdmlnYXRpb25FeHRyYXMpO1xuICB9XG5cbiAgZWRpdFN0dWRlbnRQcm9maWxlKGlkOiBhbnkpe1xuXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICBxdWVyeVBhcmFtczogeyAnaWQnOiBpZH0sXG4gICAgfTtcblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2NvdXJzZS9lZGl0LXN0dWRlbnRgXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gIH1cblxuICBvbkRlbGV0ZVN0dWRlbnQoKXtcblxuICAgIGxldCB0ZW1wU3R1ZGVudHM6IGFueVtdID0gW107XG5cbiAgICB0aGlzLnN0dWRlbnRzLmZpbHRlcigoc3R1ZGVudCkgPT4ge1xuICAgICAgc3R1ZGVudC5zZWxlY3RlZCA/IHRlbXBTdHVkZW50cy5wdXNoKHN0dWRlbnQpOiBudWxsO1xuICAgIH0pO1xuXG4gICAgbGV0IHN0dWRlbnRzID0gbmV3IGRlbGV0ZVN0dWRlbnQoXG4gICAgICB0aGlzLmNvdXJzZS5pZCxcbiAgICAgIHRlbXBTdHVkZW50c1xuICAgICk7XG4gICAgY29uc29sZS5sb2coc3R1ZGVudHMpO1xuXG4gICAgdGhpcy5zdHVkZW50U2VydmljZS5kZWxldGVTdHVkZW50KHN0dWRlbnRzKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZSg1MDApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=
