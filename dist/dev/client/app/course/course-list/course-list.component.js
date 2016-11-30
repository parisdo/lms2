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
    function updateStudentsBadge(course_id, badge_id, score, students, max_score) {
        this.course_id = course_id;
        this.badge_id = badge_id;
        this.score = score;
        this.students = students;
        this.max_score = max_score;
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
        this.dynamicXp = 0;
        this.isXp = true;
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
    CourseListComponent.prototype.onUpdateStudentScore = function () {
        var _this = this;
        var maxScore = this.levels[this.levels.length - 1].ceiling_xp;
        if (this.dynamicXp > 0) {
            this.isXp = true;
            this.dynamicXp = this.dynamicXp;
            var students = new updateStudentsScore(this.course.id, this.dynamicXp, this.selectedStudents, maxScore);
            this.studentService.updateStudentsScore(students)
                .subscribe(function (data) {
                if (data.status == 'success') {
                    _this.showMessage(message_service_1.msg.getUpdateMessage(200));
                    $("#giveFeedback").modal('toggle');
                    _this.ngOnInit();
                }
                else {
                    _this.showMessage(message_service_1.msg.getUpdateMessage(500));
                }
            }, function (error) { return console.log(error); });
        }
        else {
            this.isXp = false;
            this.dynamicXp = 0;
        }
    };
    CourseListComponent.prototype.resetXp = function () {
        this.dynamicXp = 0;
        this.isXp = true;
    };
    CourseListComponent.prototype.onUpdateStudentBadge = function (badge) {
        var _this = this;
        var maxScore = this.levels[this.levels.length - 1].ceiling_xp;
        var students = new updateStudentsBadge(this.course.id, badge.id, badge.xp, this.selectedStudents, maxScore);
        this.studentService.updateStudentsBadge(students)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.showMessage(message_service_1.msg.getUpdateMessage(200));
                $("#giveFeedback").modal('toggle');
                _this.ngOnInit();
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateMessage(500));
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
                _this.showMessage(message_service_1.msg.getUpdateMessage(200));
                _this.display = false;
                _this.ngOnInit();
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateMessage(500));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFFOUQsZ0NBQWtCLGdDQUFnQyxDQUFDLENBQUE7QUFDbkQsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFFNUQsdUJBQXdCLHVCQUN4QixDQUFDLENBRDhDO0FBQy9DLHNCQUFvQixvQkFBb0IsQ0FBQyxDQUFBO0FBT3pDO0lBQ0UsNkJBQW1CLFNBQWUsRUFBUyxLQUFXLEVBQVMsUUFBYyxFQUFTLFNBQWU7UUFBbEYsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBTTtJQUFJLENBQUM7SUFDNUcsMEJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLDJCQUFtQixzQkFFL0IsQ0FBQTtBQUVEO0lBQ0UsNkJBQW1CLFNBQWUsRUFBUyxRQUFjLEVBQVMsS0FBVyxFQUFTLFFBQWMsRUFBUyxTQUFlO1FBQXpHLGNBQVMsR0FBVCxTQUFTLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFNO0lBQUksQ0FBQztJQUNuSSwwQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksMkJBQW1CLHNCQUUvQixDQUFBO0FBR0Q7SUFDRSx1QkFBbUIsU0FBZSxFQUFTLFFBQWM7UUFBdEMsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07SUFBSSxDQUFDO0lBQ2hFLG9CQUFDO0FBQUQs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SCxDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO0lBRU4sQ0FBQztJQUdELDJDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLEdBQVE7UUFBcEIsaUJBTUM7UUFMQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFHRCxvQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQXZYSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUMsQ0FBQywyQkFBMkIsQ0FBQztTQUN4QyxDQUFDOzsyQkFBQTtJQW1YRiwwQkFBQztBQUFELENBalhBLEFBaVhDLElBQUE7QUFqWFksMkJBQW1CLHNCQWlYL0IsQ0FBQSIsImZpbGUiOiJhcHAvY291cnNlL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3R1ZGVudFwiO1xuaW1wb3J0IHtTdHVkZW50U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0dWRlbnQuc2VydmljZVwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge21zZ30gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcbmltcG9ydCB7cHVibGljVXJsfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29uZmlnXCJcbmltcG9ydCB7QmFkZ2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvYmFkZ2VcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcInByaW1lbmcvY29tcG9uZW50cy9jb21tb24vYXBpXCI7XG5pbXBvcnQge0xldmVsfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2xldmVsXCI7XG5cbmRlY2xhcmUgdmFyICAkOiBhbnk7XG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyB1cGRhdGVTdHVkZW50c1Njb3JlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvdXJzZV9pZD86IGFueSwgcHVibGljIHNjb3JlPzogYW55LCBwdWJsaWMgc3R1ZGVudHM/OiBhbnksIHB1YmxpYyBtYXhfc2NvcmU/OiBhbnkpIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgdXBkYXRlU3R1ZGVudHNCYWRnZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3Vyc2VfaWQ/OiBhbnksIHB1YmxpYyBiYWRnZV9pZD86IGFueSwgcHVibGljIHNjb3JlPzogYW55LCBwdWJsaWMgc3R1ZGVudHM/OiBhbnksIHB1YmxpYyBtYXhfc2NvcmU/OiBhbnkpIHsgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBkZWxldGVTdHVkZW50e1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY291cnNlX2lkPzogYW55LCBwdWJsaWMgc3R1ZGVudHM/OiBhbnkpIHsgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdjb3Vyc2UtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnY291cnNlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6Wydjb3Vyc2UtbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb3Vyc2VMaXN0Q29tcG9uZW50IHtcblxuICBkaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XG4gIG1lc3NhZ2UgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIGNvbnRlbnQ6IGBgLFxuICAgIGJ1dHRvbjogJydcbiAgfTtcblxuXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBjb3Vyc2U6IENvdXJzZTtcbiAgc3R1ZGVudHM6IFN0dWRlbnRbXT0gW107XG4gIGxldmVsczogTGV2ZWxbXSA9IFtdO1xuXG4gIGV4cDogYW55W10gPSBbNTAsIDEwMCwgMTAwMF07XG4gIGJhZGdlczogQmFkZ2VbXSA9IFtdO1xuXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xuICAvL0dldCBwYXJhbWV0ZXJcbiAgcHJpdmF0ZSBzZWxlY3RlZElkOiBudW1iZXI7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgLy8gU2VhcmNoXG4gIHByaXZhdGUgZmlsdGVyS2V5czogc3RyaW5nID0gJ25hbWUnO1xuICBjaGVja0FsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBzZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgLy9HaXZlIEZlZWRiYWNrIE1vZGFsXG4gIGZlZWRiYWNrU3RhdGU6IHN0cmluZyA9ICdYUCc7XG4gIHNlbGVjdGVkU3R1ZGVudHM6IGFueSA9IFtdO1xuXG4gIC8vVmlldyBIaWdoc2NvcmVcblxuICBzaG93SGlnaFNjb3JlOiBudW1iZXIgPSA1O1xuICBkZWZhdWx0SGlnaFNjb3JlOiBudW1iZXI7XG5cbiAgaGlnaFNjb3JlU3R1ZGVudHM6IGFueVtdID0gW107XG5cbiAgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICBxdWVyeVBhcmFtczogeyAnaWQnOiB0aGlzLnNlbGVjdGVkSWR9LFxuICB9O1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGNvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsIHByaXZhdGUgc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgICAucXVlcnlQYXJhbXNcbiAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291cnNlX2lkJywgcGFyYW1zWydpZCddKTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRJZCk7XG5cbiAgICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuZ2V0Q291cnNlKHRoaXMuc2VsZWN0ZWRJZClcbiAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgIChkYXRhOmFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291cnNlID0gZGF0YS5jb3Vyc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxzID0gZGF0YS5sZXZlbHM7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5sZXZlbHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhZGdlcyA9IGRhdGEuYmFkZ2VzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFkZ2VzLm1hcCgoYmFkZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWRnZS5pbWFnZSA9IHB1YmxpY1VybOKAiyArICdzdHVkZW50cy9iYWRnZXMvJyArIGJhZGdlLmltYWdlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZS5jb3Vyc2UgPSBkYXRhLmNvdXJzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmxldmVscyA9IGRhdGEubGV2ZWxzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuYmFkZ2VzID0gdGhpcy5iYWRnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0SGlnaFNjb3JlID0gK3RoaXMuY291cnNlLmxlYWRlcl9ib2FyZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlnaFNjb3JlID0gdGhpcy5kZWZhdWx0SGlnaFNjb3JlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuc3R1ZGVudHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudHMgPSBkYXRhLnN0dWRlbnRzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5zdHVkZW50X2lkID0gc3R1ZGVudC5zdHVkZW50X2lkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQuaW1hZ2UgPSBwdWJsaWNVcmwgKyAnc3R1ZGVudHMvbG9nby8nICsgc3R1ZGVudC5pbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5wcm9ncmVzc1R5cGUgPSB0aGlzLnByb2dyZXNzQ2FsY3VsYXRvcihzdHVkZW50Lm92ZXJhbGxfeHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50Lm1heFhQID0gdGhpcy5jYWxjdWxhdGVNYXhYUChzdHVkZW50LmxldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5iYWRnZXMgPSB0aGlzLmdldEJhZGdlU3R1ZGVudChzdHVkZW50LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0dWRlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZS5zdHVkZW50cyA9IHRoaXMuc3R1ZGVudHM7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmdldEhpZ2hzY29yZSh0aGlzLmNvdXJzZVNlcnZpY2UuY291cnNlLmlkKVxuICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmVTdHVkZW50cyA9IGRhdGEuc3R1ZGVudHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaFNjb3JlU3R1ZGVudHMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQuc3R1ZGVudF9pZCA9IHN0dWRlbnQuc3R1ZGVudF9pZC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5pbWFnZSA9IHB1YmxpY1VybCArICdzdHVkZW50cy9sb2dvLycgKyBzdHVkZW50LmltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5wcm9ncmVzc1R5cGUgPSB0aGlzLnByb2dyZXNzQ2FsY3VsYXRvcihzdHVkZW50Lm92ZXJhbGxfeHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5tYXhYUCA9IHRoaXMuY2FsY3VsYXRlTWF4WFAoc3R1ZGVudC5sZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50LmJhZGdlcyA9IHRoaXMuZ2V0QmFkZ2VTdHVkZW50KHN0dWRlbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBlcnJvciA9PiAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgICAgICAgIH0pO1xuXG4gIH1cblxuICBnZXRCYWRnZVN0dWRlbnQoaWQ6IGFueSl7XG5cbiAgICBsZXQgYmFkZ2VzOiBhbnlbXSA9IFtdO1xuXG4gICAgdGhpcy5zdHVkZW50U2VydmljZS5nZXRTdHVkZW50QmFkZ2UoaWQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgZGF0YS5mb3JFYWNoKChiYWRnZTogYW55KSA9PiB7XG4gICAgICAgICAgICBiYWRnZS5pbWFnZSA9IHB1YmxpY1VybCArICcvc3R1ZGVudHMvYmFkZ2VzLycgKyBiYWRnZS5pbWFnZTtcbiAgICAgICAgICAgIGxldCBuZXdCYWRnZSA9IG5ldyBCYWRnZSh0aGlzLnNlbGVjdGVkSWQudG9TdHJpbmcoKSwgYmFkZ2UuaWQsIGJhZGdlLm5hbWUsIGJhZGdlLmltYWdlLCBiYWRnZS54cCwgYmFkZ2UuaWQsIGZhbHNlKTtcbiAgICAgICAgICAgIGJhZGdlcy5wdXNoKG5ld0JhZGdlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG5cbiAgICByZXR1cm4gYmFkZ2VzO1xuXG4gIH1cblxuICBzZWxlY3RIaWdoU2NvcmUodmFsdWU6IGFueSl7XG4gICAgdGhpcy5zaG93SGlnaFNjb3JlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIHByb2dyZXNzVHlwZTogc3RyaW5nO1xuICBwcm9ncmVzc0NhbGN1bGF0b3IoeHA6IG51bWJlcik6IHN0cmluZ3tcblxuICAgIGxldCBhbGxTdGF0dXM6IHN0cmluZ1tdID0gWydpbmZvJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXTtcbiAgICBsZXQgc3RhdHVzOiBzdHJpbmc7XG5cbiAgICBpZih4cCA8IDI1KXtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1szXTtcbiAgICB9ZWxzZSBpZih4cCA8IDUwKXtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1syXTtcbiAgICB9ZWxzZSBpZih4cCA8IDc1KXtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1sxXTtcbiAgICB9ZWxzZSB7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXR1cztcblxuICB9XG5cbiAgY2FsY3VsYXRlTWF4WFAoc3R1ZGVudExldmVsOiBhbnkpe1xuICAgIGxldCBtYXhYUDogYW55O1xuICAgIHRoaXMubGV2ZWxzLmZvckVhY2goKGxldmVsKSA9PiB7XG4gICAgICBpZihsZXZlbC5sZXZlbF9pZCA9PSBzdHVkZW50TGV2ZWwpe1xuICAgICAgICBtYXhYUCA9IGxldmVsLmNlaWxpbmdfeHA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF4WFA7XG5cbiAgfVxuXG4gIG9yZGVyQnkodmFsdWU6IGFueSl7XG4gICAgdGhpcy5zdHVkZW50cyA9IF8ub3JkZXJCeSh0aGlzLnN0dWRlbnRzLCBbdmFsdWUsICdzdHVkZW50X2lkJ10sIFsnYXNjJywgJ2Rlc2MnXSk7XG4gIH1cblxuICBzZWFyY2godmFsdWU6IGFueSl7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2l2ZUFsbEZlZWRiYWNrKCl7XG4gICAgICAkKFwiI2dpdmVGZWVkYmFja1wiKS5tb2RhbCgpO1xuICAgICAgdGhpcy5zZWxlY3RlZFN0dWRlbnRzID0gW107XG4gICAgICB0aGlzLnN0dWRlbnRzLmZpbHRlcigoc3R1ZGVudCkgPT4gc3R1ZGVudC5zZWxlY3RlZCA/IHRoaXMuc2VsZWN0ZWRTdHVkZW50cy5wdXNoKHN0dWRlbnQpOiBudWxsKTtcbiAgfVxuXG4gIGdpdmVGZWVkYmFjayhzdHVkZW50OiBhbnkpe1xuICAgIHRoaXMuc2VsZWN0ZWRTdHVkZW50cyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRTdHVkZW50cy5wdXNoKHN0dWRlbnQpO1xuICB9XG5cbiAgZHluYW1pY1hwOiBudW1iZXIgPSAwO1xuICBpc1hwOiBib29sZWFuID0gdHJ1ZTtcbiAgb25VcGRhdGVTdHVkZW50U2NvcmUoKXtcblxuICAgIGxldCBtYXhTY29yZSA9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxzLmxlbmd0aCAtIDFdLmNlaWxpbmdfeHA7XG5cbiAgICBpZih0aGlzLmR5bmFtaWNYcCA+IDApe1xuICAgICAgdGhpcy5pc1hwID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHluYW1pY1hwID0gdGhpcy5keW5hbWljWHA7XG5cbiAgICAgIGxldCBzdHVkZW50cyA9IG5ldyB1cGRhdGVTdHVkZW50c1Njb3JlKFxuICAgICAgICB0aGlzLmNvdXJzZS5pZCxcbiAgICAgICAgdGhpcy5keW5hbWljWHAsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdHVkZW50cyxcbiAgICAgICAgbWF4U2NvcmVcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UudXBkYXRlU3R1ZGVudHNTY29yZShzdHVkZW50cylcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgICAkKFwiI2dpdmVGZWVkYmFja1wiKS5tb2RhbCgndG9nZ2xlJyk7XG4gICAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlTWVzc2FnZSg1MDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICk7XG5cbiAgICB9ZWxzZSB7XG4gICAgICB0aGlzLmlzWHAgPSBmYWxzZTtcbiAgICAgIHRoaXMuZHluYW1pY1hwID0gMDtcbiAgICB9XG5cbiAgfVxuXG4gIHJlc2V0WHAoKXtcbiAgICB0aGlzLmR5bmFtaWNYcCA9IDA7XG4gICAgdGhpcy5pc1hwID0gdHJ1ZTtcbiAgfVxuXG4gIG9uVXBkYXRlU3R1ZGVudEJhZGdlKGJhZGdlOiBhbnkpe1xuXG4gICAgbGV0IG1heFNjb3JlID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbHMubGVuZ3RoIC0gMV0uY2VpbGluZ194cDtcblxuICAgIGxldCBzdHVkZW50cyA9IG5ldyB1cGRhdGVTdHVkZW50c0JhZGdlKFxuICAgICAgdGhpcy5jb3Vyc2UuaWQsXG4gICAgICBiYWRnZS5pZCxcbiAgICAgIGJhZGdlLnhwLFxuICAgICAgdGhpcy5zZWxlY3RlZFN0dWRlbnRzLFxuICAgICAgbWF4U2NvcmVcbiAgICApO1xuXG4gICAgLy9jb25zb2xlLmxvZyhzdHVkZW50cyk7XG5cbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLnVwZGF0ZVN0dWRlbnRzQmFkZ2Uoc3R1ZGVudHMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZU1lc3NhZ2UoMjAwKSk7XG4gICAgICAgICAgICAkKFwiI2dpdmVGZWVkYmFja1wiKS5tb2RhbCgndG9nZ2xlJyk7XG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlTWVzc2FnZSg1MDApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgb25DaGVjayhzdHVkZW50OiBTdHVkZW50KXtcbiAgICBzdHVkZW50LnNlbGVjdGVkID0gIXN0dWRlbnQuc2VsZWN0ZWQ7XG5cbiAgICBsZXQgb2JqID0gdGhpcy5zdHVkZW50cy5maW5kKChpdGVtKSA9PiB7IHJldHVybiAhaXRlbS5zZWxlY3RlZCB9KTtcbiAgICBvYmogPT0gbnVsbCA/IHRoaXMuY2hlY2tBbGwgPSB0cnVlOiB0aGlzLmNoZWNrQWxsID0gZmFsc2U7XG4gIH1cblxuICBvbkNoZWNrQWxsKCl7XG4gICAgdGhpcy5jaGVja0FsbCA9ICF0aGlzLmNoZWNrQWxsO1xuICAgIHRoaXMuc3R1ZGVudHMuZm9yRWFjaCgoc3R1ZGVudCkgPT4gc3R1ZGVudC5zZWxlY3RlZCA9IHRoaXMuY2hlY2tBbGwpO1xuICB9XG5cbiAgY2hhZ2VGZWVkYmFja1N0YXRlKHN0YXRlOiBzdHJpbmcpe1xuICAgIHRoaXMuZmVlZGJhY2tTdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgdmlld0xlYWRlcmJvYXJkKCl7XG4gICAgJChcIiN2aWV3TGVhZGVyYm9hcmRcIikubW9kYWwoKTtcbiAgfVxuXG4gIGdvQmFjaygpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3RlYWNoYF0pO1xuICB9XG5cbiAgZ290b1BhZ2UocGFnZTogc3RyaW5nKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9jb3Vyc2UvJHtwYWdlfWBdKTtcbiAgfVxuXG4gIGdvdG9XZWJib2FyZCgpe1xuXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICBxdWVyeVBhcmFtczogeyAnaWQnOiB0aGlzLmNvdXJzZS5pZH0sXG4gICAgfTtcblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3dlYmJvYXJkL3Bvc3RgXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gIH1cblxuICBlZGl0U3R1ZGVudFByb2ZpbGUoaWQ6IGFueSl7XG5cbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdpZCc6IGlkfSxcbiAgICB9O1xuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvY291cnNlL2VkaXQtc3R1ZGVudGBdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgfVxuXG4gIGRlbGV0ZVBvcHVwKCl7XG4gICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcbiAgICB0aGlzLm1lc3NhZ2UgPSB7XG4gICAgICB0aXRsZTogJ+C4peC4muC4meC4seC4geC5gOC4o+C4teC4ouC4mScsXG4gICAgICBjb250ZW50OiBg4Lii4Li34LiZ4Lii4Lix4LiZ4LiB4Liy4Lij4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4LiX4Li14LmI4LmA4Lil4Li34Lit4LiBYCxcbiAgICAgIGJ1dHRvbjogJ+C4peC4midcbiAgICB9O1xuICB9XG5cbiAgb25EZWxldGVTdHVkZW50KCl7XG5cbiAgICBsZXQgdGVtcFN0dWRlbnRzOiBhbnlbXSA9IFtdO1xuXG4gICAgdGhpcy5zdHVkZW50cy5maWx0ZXIoKHN0dWRlbnQpID0+IHtcbiAgICAgIHN0dWRlbnQuc2VsZWN0ZWQgPyB0ZW1wU3R1ZGVudHMucHVzaChzdHVkZW50KTogbnVsbDtcbiAgICB9KTtcblxuICAgIGxldCBzdHVkZW50cyA9IG5ldyBkZWxldGVTdHVkZW50KFxuICAgICAgdGhpcy5jb3Vyc2UuaWQsXG4gICAgICB0ZW1wU3R1ZGVudHNcbiAgICApO1xuICAgIC8vY29uc29sZS5sb2coc3R1ZGVudHMpO1xuXG4gICAgdGhpcy5zdHVkZW50U2VydmljZS5kZWxldGVTdHVkZW50KHN0dWRlbnRzKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlTWVzc2FnZSg1MDApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuXG4gIH1cblxuXG4gIHVwZGF0ZVN0dWRlbnQoKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NvdXJzZS91cGRhdGUtc3R1ZGVudCddKTtcbiAgfVxuXG4gIHNob3dNZXNzYWdlKG1zZzogYW55KXtcbiAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB0aGlzLm1zZ3MucHVzaChtc2cpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tc2dzID0gW107XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuXG4gIGNhbmNlbCgpe1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==
