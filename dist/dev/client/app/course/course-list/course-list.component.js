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
var updateStudentsBadge = (function () {
    function updateStudentsBadge(course_id, badge_id, score, students) {
        this.course_id = course_id;
        this.badge_id = badge_id;
        this.score = score;
        this.students = students;
    }
    return updateStudentsBadge;
}());
exports.updateStudentsBadge = updateStudentsBadge;
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
            _this.courseService.getCourse(_this.selectedId)
                .subscribe(function (data) {
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
    CourseListComponent.prototype.onUpdateStudentScore = function (score) {
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
    CourseListComponent.prototype.onUpdateStudentBadge = function (badge) {
        var _this = this;
        var students = new updateStudentsBadge(this.course.id, badge.id, badge.xp, this.selectedStudents);
        this.studentService.updateStudentsBadge(students)
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
    CourseListComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    CourseListComponent.prototype.cancel = function () {
        window.history.back();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFFOUQsZ0NBQWtCLGdDQUFnQyxDQUFDLENBQUE7QUFDbkQsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFFNUQsdUJBQXdCLHVCQUN4QixDQUFDLENBRDhDO0FBUS9DO0lBQ0UsNkJBQW1CLFNBQWUsRUFBUyxLQUFXLEVBQVMsUUFBYztRQUExRCxjQUFTLEdBQVQsU0FBUyxDQUFNO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07SUFBSSxDQUFDO0lBQ3BGLDBCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSwyQkFBbUIsc0JBRS9CLENBQUE7QUFFRDtJQUNFLDZCQUFtQixTQUFlLEVBQVMsUUFBYyxFQUFTLEtBQVcsRUFBUyxRQUFjO1FBQWpGLGNBQVMsR0FBVCxTQUFTLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07SUFBSSxDQUFDO0lBQzNHLDBCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSwyQkFBbUIsc0JBRS9CLENBQUE7QUFHRDtJQUNFLHVCQUFtQixTQUFlLEVBQVMsUUFBYztRQUF0QyxjQUFTLEdBQVQsU0FBUyxDQUFNO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBTTtJQUFJLENBQUM7SUFDaEUsb0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHFCQUFhLGdCQUV6QixDQUFBO0FBU0Q7SUFnQ0UsNkJBQ1ksYUFBNEIsRUFBVSxjQUE4QixFQUNwRSxLQUFxQixFQUFVLE1BQWM7UUFEN0Ms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QUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBR0Qsb0NBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUE3UUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFDLENBQUMsMkJBQTJCLENBQUM7U0FDeEMsQ0FBQzs7MkJBQUE7SUF5UUYsMEJBQUM7QUFBRCxDQXZRQSxBQXVRQyxJQUFBO0FBdlFZLDJCQUFtQixzQkF1US9CLENBQUEiLCJmaWxlIjoiYXBwL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3N0dWRlbnRcIjtcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHttc2d9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtDb3Vyc2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvY291cnNlXCI7XG5pbXBvcnQge3B1YmxpY1VybH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbmZpZ1wiXG5pbXBvcnQge0JhZGdlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2JhZGdlXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCJwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL2FwaVwiO1xuaW1wb3J0IHtMZXZlbH0gZnJvbSBcIi4uLy4uL21vZGVscy9sZXZlbFwiO1xuXG5kZWNsYXJlIHZhciAgJDogYW55O1xuZGVjbGFyZSB2YXIgXzogYW55O1xuXG5leHBvcnQgY2xhc3MgdXBkYXRlU3R1ZGVudHNTY29yZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3Vyc2VfaWQ/OiBhbnksIHB1YmxpYyBzY29yZT86IGFueSwgcHVibGljIHN0dWRlbnRzPzogYW55KSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIHVwZGF0ZVN0dWRlbnRzQmFkZ2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY291cnNlX2lkPzogYW55LCBwdWJsaWMgYmFkZ2VfaWQ/OiBhbnksIHB1YmxpYyBzY29yZT86IGFueSwgcHVibGljIHN0dWRlbnRzPzogYW55KSB7IH1cbn1cblxuXG5leHBvcnQgY2xhc3MgZGVsZXRlU3R1ZGVudHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvdXJzZV9pZD86IGFueSwgcHVibGljIHN0dWRlbnRzPzogYW55KSB7IH1cbn1cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnY291cnNlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJ2NvdXJzZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOlsnY291cnNlLWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQ291cnNlTGlzdENvbXBvbmVudCB7XG5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIGNvdXJzZTogQ291cnNlO1xuICBzdHVkZW50czogU3R1ZGVudFtdPSBbXTtcbiAgbGV2ZWxzOiBMZXZlbFtdID0gW107XG5cbiAgZXhwOiBhbnlbXSA9IFsxMCwgMTUsIDIwXTtcbiAgYmFkZ2VzOiBCYWRnZVtdID0gW107XG5cbiAgbXNnczogTWVzc2FnZVtdID0gW107XG4gIC8vR2V0IHBhcmFtZXRlclxuICBwcml2YXRlIHNlbGVjdGVkSWQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICAvLyBTZWFyY2hcbiAgcHJpdmF0ZSBmaWx0ZXJLZXlzOiBzdHJpbmcgPSAnbmFtZSc7XG4gIGNoZWNrQWxsOiBib29sZWFuID0gZmFsc2U7XG4gIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcblxuICAvL0dpdmUgRmVlZGJhY2sgTW9kYWxcbiAgZmVlZGJhY2tTdGF0ZTogc3RyaW5nID0gJ1hQJztcbiAgc2VsZWN0ZWRTdHVkZW50czogYW55ID0gW107XG5cbiAgLy9WaWV3IEhpZ2hzY29yZVxuICBoaWdoU2NvcmVTdHVkZW50czogYW55W10gPSBbXTtcblxuICBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgIHF1ZXJ5UGFyYW1zOiB7ICdpZCc6IHRoaXMuc2VsZWN0ZWRJZH0sXG4gIH07XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSwgcHJpdmF0ZSBzdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2UsXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG5cbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zZWxlY3RlZElkKTtcblxuICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZS5nZXRDb3Vyc2UodGhpcy5zZWxlY3RlZElkKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgKGRhdGE6YW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZSA9IGRhdGEuY291cnNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVscyA9IGRhdGEubGV2ZWxzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhZGdlcyA9IGRhdGEuYmFkZ2VzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFkZ2VzLm1hcCgoYmFkZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWRnZS5pbWFnZSA9ICdodHRwOi8vNTQuMTY5LjExNS4yMzMvc3R1ZGVudHMvYmFkZ2VzLycgKyBiYWRnZS5pbWFnZVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuY291cnNlID0gZGF0YS5jb3Vyc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZS5sZXZlbHMgPSBkYXRhLmxldmVscztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmJhZGdlcyA9IHRoaXMuYmFkZ2VzO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5zdHVkZW50cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50cyA9IGRhdGEuc3R1ZGVudHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudHMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50LnN0dWRlbnRfaWQgPSBzdHVkZW50LnN0dWRlbnRfaWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5pbWFnZSA9IHB1YmxpY1VybCArICdzdHVkZW50cy9sb2dvLycgKyBzdHVkZW50LmltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50LnByb2dyZXNzVHlwZSA9IHRoaXMucHJvZ3Jlc3NDYWxjdWxhdG9yKHN0dWRlbnQub3ZlcmFsbF94cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudHMgPSB0aGlzLnN0dWRlbnRzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZS5nZXRIaWdoc2NvcmUodGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hTY29yZVN0dWRlbnRzID0gZGF0YS5zdHVkZW50cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gICAgICAgICB9KTtcblxuICB9XG5cbiAgcHJpdmF0ZSBwcm9ncmVzc1R5cGU6IHN0cmluZztcbiAgcHJvZ3Jlc3NDYWxjdWxhdG9yKHhwOiBudW1iZXIpOiBzdHJpbmd7XG5cbiAgICBsZXQgYWxsU3RhdHVzOiBzdHJpbmdbXSA9IFsnaW5mbycsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ107XG4gICAgbGV0IHN0YXR1czogc3RyaW5nO1xuXG4gICAgaWYoeHAgPCAyNSl7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbM107XG4gICAgfWVsc2UgaWYoeHAgPCA1MCl7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbMl07XG4gICAgfWVsc2UgaWYoeHAgPCA3NSl7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbMV07XG4gICAgfWVsc2Uge1xuICAgICAgc3RhdHVzID0gYWxsU3RhdHVzWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0dXM7XG5cbiAgfVxuXG4gIG9yZGVyQnkodmFsdWU6IGFueSl7XG4gICAgdGhpcy5zdHVkZW50cyA9IF8ub3JkZXJCeSh0aGlzLnN0dWRlbnRzLCBbdmFsdWUsICdpZCddLCBbJ2FzYycsICdkZXNjJ10pO1xuICB9XG5cbiAgc2VhcmNoKHZhbHVlOiBhbnkpe1xuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdpdmVBbGxGZWVkYmFjaygpe1xuICAgICAgJChcIiNnaXZlRmVlZGJhY2tcIikubW9kYWwoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRTdHVkZW50cyA9IFtdO1xuICAgICAgdGhpcy5zdHVkZW50cy5maWx0ZXIoKHN0dWRlbnQpID0+IHN0dWRlbnQuc2VsZWN0ZWQgPyB0aGlzLnNlbGVjdGVkU3R1ZGVudHMucHVzaChzdHVkZW50KTogbnVsbCk7XG4gIH1cblxuICBnaXZlRmVlZGJhY2soc3R1ZGVudDogYW55KXtcbiAgICB0aGlzLnNlbGVjdGVkU3R1ZGVudHMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkU3R1ZGVudHMucHVzaChzdHVkZW50KTtcbiAgfVxuXG4gIG9uVXBkYXRlU3R1ZGVudFNjb3JlKHNjb3JlOiBhbnkpe1xuXG4gICAgbGV0IHN0dWRlbnRzID0gbmV3IHVwZGF0ZVN0dWRlbnRzU2NvcmUoXG4gICAgICB0aGlzLmNvdXJzZS5pZCxcbiAgICAgIHNjb3JlLFxuICAgICAgdGhpcy5zZWxlY3RlZFN0dWRlbnRzXG4gICAgKTtcblxuICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UudXBkYXRlU3R1ZGVudHNTY29yZShzdHVkZW50cylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoMjAwKSk7XG4gICAgICAgICAgICAkKFwiI2dpdmVGZWVkYmFja1wiKS5tb2RhbCgndG9nZ2xlJyk7XG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIG9uVXBkYXRlU3R1ZGVudEJhZGdlKGJhZGdlOiBhbnkpe1xuXG4gICAgbGV0IHN0dWRlbnRzID0gbmV3IHVwZGF0ZVN0dWRlbnRzQmFkZ2UoXG4gICAgICB0aGlzLmNvdXJzZS5pZCxcbiAgICAgIGJhZGdlLmlkLFxuICAgICAgYmFkZ2UueHAsXG4gICAgICB0aGlzLnNlbGVjdGVkU3R1ZGVudHNcbiAgICApO1xuXG4gICAgLy9jb25zb2xlLmxvZyhzdHVkZW50cyk7XG5cbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLnVwZGF0ZVN0dWRlbnRzQmFkZ2Uoc3R1ZGVudHMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgJChcIiNnaXZlRmVlZGJhY2tcIikubW9kYWwoJ3RvZ2dsZScpO1xuICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBvbkNoZWNrKHN0dWRlbnQ6IFN0dWRlbnQpe1xuICAgIHN0dWRlbnQuc2VsZWN0ZWQgPSAhc3R1ZGVudC5zZWxlY3RlZDtcblxuICAgIGxldCBvYmogPSB0aGlzLnN0dWRlbnRzLmZpbmQoKGl0ZW0pID0+IHsgcmV0dXJuICFpdGVtLnNlbGVjdGVkIH0pO1xuICAgIG9iaiA9PSBudWxsID8gdGhpcy5jaGVja0FsbCA9IHRydWU6IHRoaXMuY2hlY2tBbGwgPSBmYWxzZTtcbiAgfVxuXG4gIG9uQ2hlY2tBbGwoKXtcbiAgICB0aGlzLmNoZWNrQWxsID0gIXRoaXMuY2hlY2tBbGw7XG4gICAgdGhpcy5zdHVkZW50cy5mb3JFYWNoKChzdHVkZW50KSA9PiBzdHVkZW50LnNlbGVjdGVkID0gdGhpcy5jaGVja0FsbCk7XG4gIH1cblxuICBjaGFnZUZlZWRiYWNrU3RhdGUoc3RhdGU6IHN0cmluZyl7XG4gICAgdGhpcy5mZWVkYmFja1N0YXRlID0gc3RhdGU7XG4gIH1cblxuICB2aWV3TGVhZGVyYm9hcmQoKXtcbiAgICAkKFwiI3ZpZXdMZWFkZXJib2FyZFwiKS5tb2RhbCgpO1xuICB9XG5cbiAgZ29CYWNrKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvdGVhY2hgXSk7XG4gIH1cblxuICBnb3RvUGFnZShwYWdlOiBzdHJpbmcpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2NvdXJzZS8ke3BhZ2V9YF0pO1xuICB9XG5cbiAgZ290b1dlYmJvYXJkKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Avd2ViYm9hcmQvcG9zdGBdLCB0aGlzLm5hdmlnYXRpb25FeHRyYXMpO1xuICB9XG5cbiAgZWRpdFN0dWRlbnRQcm9maWxlKGlkOiBhbnkpe1xuXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICBxdWVyeVBhcmFtczogeyAnaWQnOiBpZH0sXG4gICAgfTtcblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2NvdXJzZS9lZGl0LXN0dWRlbnRgXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gIH1cblxuICBvbkRlbGV0ZVN0dWRlbnQoKXtcblxuICAgIGxldCB0ZW1wU3R1ZGVudHM6IGFueVtdID0gW107XG5cbiAgICB0aGlzLnN0dWRlbnRzLmZpbHRlcigoc3R1ZGVudCkgPT4ge1xuICAgICAgc3R1ZGVudC5zZWxlY3RlZCA/IHRlbXBTdHVkZW50cy5wdXNoKHN0dWRlbnQpOiBudWxsO1xuICAgIH0pO1xuXG4gICAgbGV0IHN0dWRlbnRzID0gbmV3IGRlbGV0ZVN0dWRlbnQoXG4gICAgICB0aGlzLmNvdXJzZS5pZCxcbiAgICAgIHRlbXBTdHVkZW50c1xuICAgICk7XG4gICAgLy9jb25zb2xlLmxvZyhzdHVkZW50cyk7XG5cbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLmRlbGV0ZVN0dWRlbnQoc3R1ZGVudHMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG5cbiAgfVxuICBcblxuICBzaG93TWVzc2FnZShtc2c6IGFueSl7XG4gICAgdGhpcy5tc2dzID0gW107XG4gICAgdGhpcy5tc2dzLnB1c2gobXNnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubXNncyA9IFtdO1xuICAgIH0sIDMwMDApO1xuICB9XG5cblxuICBjYW5jZWwoKXtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=
