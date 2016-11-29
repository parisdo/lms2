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
var badge_1 = require("../../models/badge");
var updateStudentsScore = (function () {
    function updateStudentsScore(course_id, score, students, max_score) {
        this.course_id = course_id;
        this.score = score;
        this.students = students;
        this.max_score = max_score;
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
        this.display = false;
        this.message = {
            title: '',
            content: "",
            button: ''
        };
        this.students = [];
        this.levels = [];
        this.exp = [50, 100, 1000];
        this.badges = [];
        this.msgs = [];
        this.filterKeys = 'name';
        this.checkAll = false;
        this.searchValue = '';
        this.feedbackState = 'XP';
        this.selectedStudents = [];
        this.showHighScore = 5;
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
            localStorage.setItem('course_id', params['id']);
            _this.courseService.getCourse(_this.selectedId)
                .subscribe(function (data) {
                _this.course = data.course;
                _this.levels = data.levels;
                _this.badges = data.badges;
                _this.badges.map(function (badge) {
                    badge.image = config_1.publicUrl + 'students/badges/' + badge.image;
                });
                _this.courseService.course = data.course;
                _this.courseService.levels = data.levels;
                _this.courseService.badges = _this.badges;
                _this.defaultHighScore = +_this.course.leader_board;
                _this.showHighScore = _this.defaultHighScore;
                _this.students = data.students;
                _this.students.forEach(function (student) {
                    student.student_id = student.student_id.toString();
                    student.image = config_1.publicUrl + 'students/logo/' + student.image;
                    student.progressType = _this.progressCalculator(student.overall_xp);
                    student.maxXP = _this.calculateMaxXP(student.level);
                    student.badges = _this.getBadgeStudent(student.id);
                });
                _this.studentService.students = _this.students;
                _this.courseService.getHighscore(_this.courseService.course.id)
                    .subscribe(function (data) {
                    _this.highScoreStudents = data.students;
                    _this.highScoreStudents.forEach(function (student) {
                        student.student_id = student.student_id.toString();
                        student.image = config_1.publicUrl + 'students/logo/' + student.image;
                        student.progressType = _this.progressCalculator(student.overall_xp);
                        student.maxXP = _this.calculateMaxXP(student.level);
                        student.badges = _this.getBadgeStudent(student.id);
                    });
                });
            }, function (error) { return _this.errorMessage = error; });
        });
    };
    CourseListComponent.prototype.getBadgeStudent = function (id) {
        var _this = this;
        var badges = [];
        this.studentService.getStudentBadge(id)
            .subscribe(function (data) {
            data.forEach(function (badge) {
                badge.image = config_1.publicUrl + '/students/badges/' + badge.image;
                var newBadge = new badge_1.Badge(_this.selectedId.toString(), badge.id, badge.name, badge.image, badge.xp, badge.id, false);
                badges.push(newBadge);
            });
        }, function (error) { return console.log(error); });
        return badges;
    };
    CourseListComponent.prototype.selectHighScore = function (value) {
        this.showHighScore = value;
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
    CourseListComponent.prototype.calculateMaxXP = function (studentLevel) {
        var maxXP;
        this.levels.forEach(function (level) {
            if (level.level_id == studentLevel) {
                maxXP = level.ceiling_xp;
            }
        });
        return maxXP;
    };
    CourseListComponent.prototype.orderBy = function (value) {
        this.students = _.orderBy(this.students, [value, 'student_id'], ['asc', 'desc']);
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
        var maxScore = this.levels[this.levels.length - 1].ceiling_xp;
        var students = new updateStudentsScore(this.course.id, score, this.selectedStudents, maxScore);
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
        var navigationExtras = {
            queryParams: { 'id': this.course.id },
        };
        this.router.navigate(["/webboard/post"], navigationExtras);
    };
    CourseListComponent.prototype.editStudentProfile = function (id) {
        var navigationExtras = {
            queryParams: { 'id': id },
        };
        this.router.navigate(["/course/edit-student"], navigationExtras);
    };
    CourseListComponent.prototype.deletePopup = function () {
        this.display = true;
        this.message = {
            title: 'ลบนักเรียน',
            content: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
            button: 'ลบ'
        };
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
                _this.display = false;
                _this.ngOnInit();
            }
            else {
            }
        }, function (error) { return console.log(error); });
    };
    CourseListComponent.prototype.updateStudent = function () {
        this.router.navigate(['/course/update-student']);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFFOUQsZ0NBQWtCLGdDQUFnQyxDQUFDLENBQUE7QUFDbkQsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFFNUQsdUJBQXdCLHVCQUN4QixDQUFDLENBRDhDO0FBQy9DLHNCQUFvQixvQkFBb0IsQ0FBQyxDQUFBO0FBT3pDO0lBQ0UsNkJBQW1CLFNBQWUsRUFBUyxLQUFXLEVBQVMsUUFBYyxFQUFTLFNBQWU7UUFBbEYsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBTTtJQUFJLENBQUM7SUFDNUcsMEJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLDJCQUFtQixzQkFFL0IsQ0FBQTtBQUVEO0lBQ0UsNkJBQW1CLFNBQWUsRUFBUyxRQUFjLEVBQVMsS0FBVyxFQUFTLFFBQWM7UUFBakYsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBTTtJQUFJLENBQUM7SUFDM0csMEJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLDJCQUFtQixzQkFFL0IsQ0FBQTtBQUdEO0lBQ0UsdUJBQW1CLFNBQWUsRUFBUyxRQUFjO1FBQXRDLGNBQVMsR0FBVCxTQUFTLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO0lBQUksQ0FBQztJQUNoRSxvQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkscUJBQWEsZ0JBRXpCLENB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O0FBQUQsQ0E5VkEsQUE4VkMsSUFBQTtBQTlWWSwyQkFBbUIsc0JBOFYvQixDQUFBIiwiZmlsZSI6ImFwcC9jb3Vyc2UvY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7U3R1ZGVudH0gZnJvbSBcIi4uLy4uL21vZGVscy9zdHVkZW50XCI7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7bXNnfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcbmltcG9ydCB7Q291cnNlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvdXJzZVwiO1xuaW1wb3J0IHtwdWJsaWNVcmx9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWdcIlxuaW1wb3J0IHtCYWRnZX0gZnJvbSBcIi4uLy4uL21vZGVscy9iYWRnZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9hcGlcIjtcbmltcG9ydCB7TGV2ZWx9IGZyb20gXCIuLi8uLi9tb2RlbHMvbGV2ZWxcIjtcblxuZGVjbGFyZSB2YXIgICQ6IGFueTtcbmRlY2xhcmUgdmFyIF86IGFueTtcblxuZXhwb3J0IGNsYXNzIHVwZGF0ZVN0dWRlbnRzU2NvcmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY291cnNlX2lkPzogYW55LCBwdWJsaWMgc2NvcmU/OiBhbnksIHB1YmxpYyBzdHVkZW50cz86IGFueSwgcHVibGljIG1heF9zY29yZT86IGFueSkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyB1cGRhdGVTdHVkZW50c0JhZGdlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvdXJzZV9pZD86IGFueSwgcHVibGljIGJhZGdlX2lkPzogYW55LCBwdWJsaWMgc2NvcmU/OiBhbnksIHB1YmxpYyBzdHVkZW50cz86IGFueSkgeyB9XG59XG5cblxuZXhwb3J0IGNsYXNzIGRlbGV0ZVN0dWRlbnR7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3Vyc2VfaWQ/OiBhbnksIHB1YmxpYyBzdHVkZW50cz86IGFueSkgeyB9XG59XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2NvdXJzZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICdjb3Vyc2UtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczpbJ2NvdXJzZS1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENvdXJzZUxpc3RDb21wb25lbnQge1xuXG4gIGRpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbWVzc2FnZSA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgY29udGVudDogYGAsXG4gICAgYnV0dG9uOiAnJ1xuICB9O1xuXG5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIGNvdXJzZTogQ291cnNlO1xuICBzdHVkZW50czogU3R1ZGVudFtdPSBbXTtcbiAgbGV2ZWxzOiBMZXZlbFtdID0gW107XG5cbiAgZXhwOiBhbnlbXSA9IFs1MCwgMTAwLCAxMDAwXTtcbiAgYmFkZ2VzOiBCYWRnZVtdID0gW107XG5cbiAgbXNnczogTWVzc2FnZVtdID0gW107XG4gIC8vR2V0IHBhcmFtZXRlclxuICBwcml2YXRlIHNlbGVjdGVkSWQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICAvLyBTZWFyY2hcbiAgcHJpdmF0ZSBmaWx0ZXJLZXlzOiBzdHJpbmcgPSAnbmFtZSc7XG4gIGNoZWNrQWxsOiBib29sZWFuID0gZmFsc2U7XG4gIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcblxuICAvL0dpdmUgRmVlZGJhY2sgTW9kYWxcbiAgZmVlZGJhY2tTdGF0ZTogc3RyaW5nID0gJ1hQJztcbiAgc2VsZWN0ZWRTdHVkZW50czogYW55ID0gW107XG5cbiAgLy9WaWV3IEhpZ2hzY29yZVxuXG4gIHNob3dIaWdoU2NvcmU6IG51bWJlciA9IDU7XG4gIGRlZmF1bHRIaWdoU2NvcmU6IG51bWJlcjtcblxuICBoaWdoU2NvcmVTdHVkZW50czogYW55W10gPSBbXTtcblxuICBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgIHF1ZXJ5UGFyYW1zOiB7ICdpZCc6IHRoaXMuc2VsZWN0ZWRJZH0sXG4gIH07XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSwgcHJpdmF0ZSBzdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2UsXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG5cbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3Vyc2VfaWQnLCBwYXJhbXNbJ2lkJ10pO1xuICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zZWxlY3RlZElkKTtcblxuICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZS5nZXRDb3Vyc2UodGhpcy5zZWxlY3RlZElkKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgKGRhdGE6YW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3Vyc2UgPSBkYXRhLmNvdXJzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbHMgPSBkYXRhLmxldmVscztcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmxldmVscyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFkZ2VzID0gZGF0YS5iYWRnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWRnZXMubWFwKChiYWRnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGJhZGdlLmltYWdlID0gcHVibGljVXJs4oCLICsgJ3N0dWRlbnRzL2JhZGdlcy8nICsgYmFkZ2UuaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZSA9IGRhdGEuY291cnNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UubGV2ZWxzID0gZGF0YS5sZXZlbHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZS5iYWRnZXMgPSB0aGlzLmJhZGdlcztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRIaWdoU2NvcmUgPSArdGhpcy5jb3Vyc2UubGVhZGVyX2JvYXJkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWdoU2NvcmUgPSB0aGlzLmRlZmF1bHRIaWdoU2NvcmU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5zdHVkZW50cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50cyA9IGRhdGEuc3R1ZGVudHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudHMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50LnN0dWRlbnRfaWQgPSBzdHVkZW50LnN0dWRlbnRfaWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5pbWFnZSA9IHB1YmxpY1VybCArICdzdHVkZW50cy9sb2dvLycgKyBzdHVkZW50LmltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50LnByb2dyZXNzVHlwZSA9IHRoaXMucHJvZ3Jlc3NDYWxjdWxhdG9yKHN0dWRlbnQub3ZlcmFsbF94cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQubWF4WFAgPSB0aGlzLmNhbGN1bGF0ZU1heFhQKHN0dWRlbnQubGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50LmJhZGdlcyA9IHRoaXMuZ2V0QmFkZ2VTdHVkZW50KHN0dWRlbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3R1ZGVudHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLnN0dWRlbnRzID0gdGhpcy5zdHVkZW50cztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuZ2V0SGlnaHNjb3JlKHRoaXMuY291cnNlU2VydmljZS5jb3Vyc2UuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hTY29yZVN0dWRlbnRzID0gZGF0YS5zdHVkZW50cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmVTdHVkZW50cy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5zdHVkZW50X2lkID0gc3R1ZGVudC5zdHVkZW50X2lkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50LmltYWdlID0gcHVibGljVXJsICsgJ3N0dWRlbnRzL2xvZ28vJyArIHN0dWRlbnQuaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50LnByb2dyZXNzVHlwZSA9IHRoaXMucHJvZ3Jlc3NDYWxjdWxhdG9yKHN0dWRlbnQub3ZlcmFsbF94cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50Lm1heFhQID0gdGhpcy5jYWxjdWxhdGVNYXhYUChzdHVkZW50LmxldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQuYmFkZ2VzID0gdGhpcy5nZXRCYWRnZVN0dWRlbnQoc3R1ZGVudC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuICAgICAgICAgfSk7XG5cbiAgfVxuXG4gIGdldEJhZGdlU3R1ZGVudChpZDogYW55KXtcblxuICAgIGxldCBiYWRnZXM6IGFueVtdID0gW107XG5cbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLmdldFN0dWRlbnRCYWRnZShpZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBkYXRhLmZvckVhY2goKGJhZGdlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGJhZGdlLmltYWdlID0gcHVibGljVXJsICsgJy9zdHVkZW50cy9iYWRnZXMvJyArIGJhZGdlLmltYWdlO1xuICAgICAgICAgICAgbGV0IG5ld0JhZGdlID0gbmV3IEJhZGdlKHRoaXMuc2VsZWN0ZWRJZC50b1N0cmluZygpLCBiYWRnZS5pZCwgYmFkZ2UubmFtZSwgYmFkZ2UuaW1hZ2UsIGJhZGdlLnhwLCBiYWRnZS5pZCwgZmFsc2UpO1xuICAgICAgICAgICAgYmFkZ2VzLnB1c2gobmV3QmFkZ2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcblxuICAgIHJldHVybiBiYWRnZXM7XG5cbiAgfVxuXG4gIHNlbGVjdEhpZ2hTY29yZSh2YWx1ZTogYW55KXtcbiAgICB0aGlzLnNob3dIaWdoU2NvcmUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvZ3Jlc3NUeXBlOiBzdHJpbmc7XG4gIHByb2dyZXNzQ2FsY3VsYXRvcih4cDogbnVtYmVyKTogc3RyaW5ne1xuXG4gICAgbGV0IGFsbFN0YXR1czogc3RyaW5nW10gPSBbJ2luZm8nLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddO1xuICAgIGxldCBzdGF0dXM6IHN0cmluZztcblxuICAgIGlmKHhwIDwgMjUpe1xuICAgICAgc3RhdHVzID0gYWxsU3RhdHVzWzNdO1xuICAgIH1lbHNlIGlmKHhwIDwgNTApe1xuICAgICAgc3RhdHVzID0gYWxsU3RhdHVzWzJdO1xuICAgIH1lbHNlIGlmKHhwIDwgNzUpe1xuICAgICAgc3RhdHVzID0gYWxsU3RhdHVzWzFdO1xuICAgIH1lbHNlIHtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdHVzO1xuXG4gIH1cblxuICBjYWxjdWxhdGVNYXhYUChzdHVkZW50TGV2ZWw6IGFueSl7XG4gICAgbGV0IG1heFhQOiBhbnk7XG4gICAgdGhpcy5sZXZlbHMuZm9yRWFjaCgobGV2ZWwpID0+IHtcbiAgICAgIGlmKGxldmVsLmxldmVsX2lkID09IHN0dWRlbnRMZXZlbCl7XG4gICAgICAgIG1heFhQID0gbGV2ZWwuY2VpbGluZ194cDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXhYUDtcblxuICB9XG5cbiAgb3JkZXJCeSh2YWx1ZTogYW55KXtcbiAgICB0aGlzLnN0dWRlbnRzID0gXy5vcmRlckJ5KHRoaXMuc3R1ZGVudHMsIFt2YWx1ZSwgJ3N0dWRlbnRfaWQnXSwgWydhc2MnLCAnZGVzYyddKTtcbiAgfVxuXG4gIHNlYXJjaCh2YWx1ZTogYW55KXtcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnaXZlQWxsRmVlZGJhY2soKXtcbiAgICAgICQoXCIjZ2l2ZUZlZWRiYWNrXCIpLm1vZGFsKCk7XG4gICAgICB0aGlzLnNlbGVjdGVkU3R1ZGVudHMgPSBbXTtcbiAgICAgIHRoaXMuc3R1ZGVudHMuZmlsdGVyKChzdHVkZW50KSA9PiBzdHVkZW50LnNlbGVjdGVkID8gdGhpcy5zZWxlY3RlZFN0dWRlbnRzLnB1c2goc3R1ZGVudCk6IG51bGwpO1xuICB9XG5cbiAgZ2l2ZUZlZWRiYWNrKHN0dWRlbnQ6IGFueSl7XG4gICAgdGhpcy5zZWxlY3RlZFN0dWRlbnRzID0gW107XG4gICAgdGhpcy5zZWxlY3RlZFN0dWRlbnRzLnB1c2goc3R1ZGVudCk7XG4gIH1cblxuICBvblVwZGF0ZVN0dWRlbnRTY29yZShzY29yZTogYW55KXtcblxuICAgIGxldCBtYXhTY29yZSA9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxzLmxlbmd0aCAtIDFdLmNlaWxpbmdfeHA7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmxldmVsc1t0aGlzLmxldmVscy5sZW5ndGggLSAxXS5jZWlsaW5nX3hwKTtcblxuICAgIGxldCBzdHVkZW50cyA9IG5ldyB1cGRhdGVTdHVkZW50c1Njb3JlKFxuICAgICAgdGhpcy5jb3Vyc2UuaWQsXG4gICAgICBzY29yZSxcbiAgICAgIHRoaXMuc2VsZWN0ZWRTdHVkZW50cyxcbiAgICAgIG1heFNjb3JlXG4gICAgKTtcblxuICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UudXBkYXRlU3R1ZGVudHNTY29yZShzdHVkZW50cylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoMjAwKSk7XG4gICAgICAgICAgICAkKFwiI2dpdmVGZWVkYmFja1wiKS5tb2RhbCgndG9nZ2xlJyk7XG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIG9uVXBkYXRlU3R1ZGVudEJhZGdlKGJhZGdlOiBhbnkpe1xuXG4gICAgbGV0IHN0dWRlbnRzID0gbmV3IHVwZGF0ZVN0dWRlbnRzQmFkZ2UoXG4gICAgICB0aGlzLmNvdXJzZS5pZCxcbiAgICAgIGJhZGdlLmlkLFxuICAgICAgYmFkZ2UueHAsXG4gICAgICB0aGlzLnNlbGVjdGVkU3R1ZGVudHNcbiAgICApO1xuXG4gICAgLy9jb25zb2xlLmxvZyhzdHVkZW50cyk7XG5cbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLnVwZGF0ZVN0dWRlbnRzQmFkZ2Uoc3R1ZGVudHMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgJChcIiNnaXZlRmVlZGJhY2tcIikubW9kYWwoJ3RvZ2dsZScpO1xuICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBvbkNoZWNrKHN0dWRlbnQ6IFN0dWRlbnQpe1xuICAgIHN0dWRlbnQuc2VsZWN0ZWQgPSAhc3R1ZGVudC5zZWxlY3RlZDtcblxuICAgIGxldCBvYmogPSB0aGlzLnN0dWRlbnRzLmZpbmQoKGl0ZW0pID0+IHsgcmV0dXJuICFpdGVtLnNlbGVjdGVkIH0pO1xuICAgIG9iaiA9PSBudWxsID8gdGhpcy5jaGVja0FsbCA9IHRydWU6IHRoaXMuY2hlY2tBbGwgPSBmYWxzZTtcbiAgfVxuXG4gIG9uQ2hlY2tBbGwoKXtcbiAgICB0aGlzLmNoZWNrQWxsID0gIXRoaXMuY2hlY2tBbGw7XG4gICAgdGhpcy5zdHVkZW50cy5mb3JFYWNoKChzdHVkZW50KSA9PiBzdHVkZW50LnNlbGVjdGVkID0gdGhpcy5jaGVja0FsbCk7XG4gIH1cblxuICBjaGFnZUZlZWRiYWNrU3RhdGUoc3RhdGU6IHN0cmluZyl7XG4gICAgdGhpcy5mZWVkYmFja1N0YXRlID0gc3RhdGU7XG4gIH1cblxuICB2aWV3TGVhZGVyYm9hcmQoKXtcbiAgICAkKFwiI3ZpZXdMZWFkZXJib2FyZFwiKS5tb2RhbCgpO1xuICB9XG5cbiAgZ29CYWNrKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvdGVhY2hgXSk7XG4gIH1cblxuICBnb3RvUGFnZShwYWdlOiBzdHJpbmcpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2NvdXJzZS8ke3BhZ2V9YF0pO1xuICB9XG5cbiAgZ290b1dlYmJvYXJkKCl7XG5cbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdpZCc6IHRoaXMuY291cnNlLmlkfSxcbiAgICB9O1xuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Avd2ViYm9hcmQvcG9zdGBdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgfVxuXG4gIGVkaXRTdHVkZW50UHJvZmlsZShpZDogYW55KXtcblxuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgcXVlcnlQYXJhbXM6IHsgJ2lkJzogaWR9LFxuICAgIH07XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9jb3Vyc2UvZWRpdC1zdHVkZW50YF0sIG5hdmlnYXRpb25FeHRyYXMpO1xuICB9XG5cbiAgZGVsZXRlUG9wdXAoKXtcbiAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xuICAgIHRoaXMubWVzc2FnZSA9IHtcbiAgICAgIHRpdGxlOiAn4Lil4Lia4LiZ4Lix4LiB4LmA4Lij4Li14Lii4LiZJyxcbiAgICAgIGNvbnRlbnQ6IGDguKLguLfguJnguKLguLHguJnguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKXguJfguLXguYjguYDguKXguLfguK3guIFgLFxuICAgICAgYnV0dG9uOiAn4Lil4LiaJ1xuICAgIH07XG4gIH1cblxuICBvbkRlbGV0ZVN0dWRlbnQoKXtcblxuICAgIGxldCB0ZW1wU3R1ZGVudHM6IGFueVtdID0gW107XG5cbiAgICB0aGlzLnN0dWRlbnRzLmZpbHRlcigoc3R1ZGVudCkgPT4ge1xuICAgICAgc3R1ZGVudC5zZWxlY3RlZCA/IHRlbXBTdHVkZW50cy5wdXNoKHN0dWRlbnQpOiBudWxsO1xuICAgIH0pO1xuXG4gICAgbGV0IHN0dWRlbnRzID0gbmV3IGRlbGV0ZVN0dWRlbnQoXG4gICAgICB0aGlzLmNvdXJzZS5pZCxcbiAgICAgIHRlbXBTdHVkZW50c1xuICAgICk7XG4gICAgLy9jb25zb2xlLmxvZyhzdHVkZW50cyk7XG5cbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLmRlbGV0ZVN0dWRlbnQoc3R1ZGVudHMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIC8vdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoMjAwKSk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAvL3RoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG5cbiAgfVxuXG5cbiAgdXBkYXRlU3R1ZGVudCgpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY291cnNlL3VwZGF0ZS1zdHVkZW50J10pO1xuICB9XG5cbiAgc2hvd01lc3NhZ2UobXNnOiBhbnkpe1xuICAgIHRoaXMubXNncyA9IFtdO1xuICAgIHRoaXMubXNncy5wdXNoKG1zZyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG5cbiAgY2FuY2VsKCl7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19
