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
                _this.showMessage(message_service_1.msg.getUpdateMessage(200));
                $("#giveFeedback").modal('toggle');
                _this.ngOnInit();
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateMessage(500));
            }
        }, function (error) { return console.log(error); });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFFOUQsZ0NBQWtCLGdDQUFnQyxDQUFDLENBQUE7QUFDbkQsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFFNUQsdUJBQXdCLHVCQUN4QixDQUFDLENBRDhDO0FBQy9DLHNCQUFvQixvQkFBb0IsQ0FBQyxDQUFBO0FBT3pDO0lBQ0UsNkJBQW1CLFNBQWUsRUFBUyxLQUFXLEVBQVMsUUFBYyxFQUFTLFNBQWU7UUFBbEYsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBTTtJQUFJLENBQUM7SUFDNUcsMEJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLDJCQUFtQixzQkFFL0IsQ0FBQTtBQUVEO0lBQ0UsNkJBQW1CLFNBQWUsRUFBUyxRQUFjLEVBQVMsS0FBVyxFQUFTLFFBQWMsRUFBUyxTQUFlO1FBQXpHLGNBQVMsR0FBVCxTQUFTLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFNO0lBQUksQ0FBQztJQUNuSSwwQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksMkJBQW1CLHNCQUUvQixDQUFBO0FBR0Q7SUFDRSx1QkFBbUIsU0FBZSxFQUFTLFFBQWM7UUFBdEMsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07SUFBSSxDQUFDO0lBQ2hFLG9CQUFDO0FBQUQs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R0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUF2V0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFDLENBQUMsMkJBQTJCLENBQUM7U0FDeEMsQ0FBQzs7MkJBQUE7SUFtV0YsMEJBQUM7QUFBRCxDQWpXQSxBQWlXQyxJQUFBO0FBaldZLDJCQUFtQixzQkFpVy9CLENBQUEiLCJmaWxlIjoiYXBwL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3N0dWRlbnRcIjtcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHttc2d9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtDb3Vyc2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvY291cnNlXCI7XG5pbXBvcnQge3B1YmxpY1VybH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbmZpZ1wiXG5pbXBvcnQge0JhZGdlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2JhZGdlXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCJwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL2FwaVwiO1xuaW1wb3J0IHtMZXZlbH0gZnJvbSBcIi4uLy4uL21vZGVscy9sZXZlbFwiO1xuXG5kZWNsYXJlIHZhciAgJDogYW55O1xuZGVjbGFyZSB2YXIgXzogYW55O1xuXG5leHBvcnQgY2xhc3MgdXBkYXRlU3R1ZGVudHNTY29yZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3Vyc2VfaWQ/OiBhbnksIHB1YmxpYyBzY29yZT86IGFueSwgcHVibGljIHN0dWRlbnRzPzogYW55LCBwdWJsaWMgbWF4X3Njb3JlPzogYW55KSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIHVwZGF0ZVN0dWRlbnRzQmFkZ2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY291cnNlX2lkPzogYW55LCBwdWJsaWMgYmFkZ2VfaWQ/OiBhbnksIHB1YmxpYyBzY29yZT86IGFueSwgcHVibGljIHN0dWRlbnRzPzogYW55LCBwdWJsaWMgbWF4X3Njb3JlPzogYW55KSB7IH1cbn1cblxuXG5leHBvcnQgY2xhc3MgZGVsZXRlU3R1ZGVudHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvdXJzZV9pZD86IGFueSwgcHVibGljIHN0dWRlbnRzPzogYW55KSB7IH1cbn1cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnY291cnNlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJ2NvdXJzZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOlsnY291cnNlLWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQ291cnNlTGlzdENvbXBvbmVudCB7XG5cbiAgZGlzcGxheTogYm9vbGVhbiA9IGZhbHNlO1xuICBtZXNzYWdlID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICBjb250ZW50OiBgYCxcbiAgICBidXR0b246ICcnXG4gIH07XG5cblxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgY291cnNlOiBDb3Vyc2U7XG4gIHN0dWRlbnRzOiBTdHVkZW50W109IFtdO1xuICBsZXZlbHM6IExldmVsW10gPSBbXTtcblxuICBleHA6IGFueVtdID0gWzUwLCAxMDAsIDEwMDBdO1xuICBiYWRnZXM6IEJhZGdlW10gPSBbXTtcblxuICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcbiAgLy9HZXQgcGFyYW1ldGVyXG4gIHByaXZhdGUgc2VsZWN0ZWRJZDogbnVtYmVyO1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIFNlYXJjaFxuICBwcml2YXRlIGZpbHRlcktleXM6IHN0cmluZyA9ICduYW1lJztcbiAgY2hlY2tBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIC8vR2l2ZSBGZWVkYmFjayBNb2RhbFxuICBmZWVkYmFja1N0YXRlOiBzdHJpbmcgPSAnWFAnO1xuICBzZWxlY3RlZFN0dWRlbnRzOiBhbnkgPSBbXTtcblxuICAvL1ZpZXcgSGlnaHNjb3JlXG5cbiAgc2hvd0hpZ2hTY29yZTogbnVtYmVyID0gNTtcbiAgZGVmYXVsdEhpZ2hTY29yZTogbnVtYmVyO1xuXG4gIGhpZ2hTY29yZVN0dWRlbnRzOiBhbnlbXSA9IFtdO1xuXG4gIG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgcXVlcnlQYXJhbXM6IHsgJ2lkJzogdGhpcy5zZWxlY3RlZElkfSxcbiAgfTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLCBwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcblxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvdXJzZV9pZCcsIHBhcmFtc1snaWQnXSk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkSWQpO1xuXG4gICAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmdldENvdXJzZSh0aGlzLnNlbGVjdGVkSWQpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAoZGF0YTphbnkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZSA9IGRhdGEuY291cnNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVscyA9IGRhdGEubGV2ZWxzO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubGV2ZWxzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWRnZXMgPSBkYXRhLmJhZGdlcztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhZGdlcy5tYXAoKGJhZGdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFkZ2UuaW1hZ2UgPSBwdWJsaWNVcmzigIsgKyAnc3R1ZGVudHMvYmFkZ2VzLycgKyBiYWRnZS5pbWFnZVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuY291cnNlID0gZGF0YS5jb3Vyc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZS5sZXZlbHMgPSBkYXRhLmxldmVscztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmJhZGdlcyA9IHRoaXMuYmFkZ2VzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdEhpZ2hTY29yZSA9ICt0aGlzLmNvdXJzZS5sZWFkZXJfYm9hcmQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hpZ2hTY29yZSA9IHRoaXMuZGVmYXVsdEhpZ2hTY29yZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnN0dWRlbnRzKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzID0gZGF0YS5zdHVkZW50cztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50cy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQuc3R1ZGVudF9pZCA9IHN0dWRlbnQuc3R1ZGVudF9pZC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50LmltYWdlID0gcHVibGljVXJsICsgJ3N0dWRlbnRzL2xvZ28vJyArIHN0dWRlbnQuaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQucHJvZ3Jlc3NUeXBlID0gdGhpcy5wcm9ncmVzc0NhbGN1bGF0b3Ioc3R1ZGVudC5vdmVyYWxsX3hwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5tYXhYUCA9IHRoaXMuY2FsY3VsYXRlTWF4WFAoc3R1ZGVudC5sZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQuYmFkZ2VzID0gdGhpcy5nZXRCYWRnZVN0dWRlbnQoc3R1ZGVudC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdHVkZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudHMgPSB0aGlzLnN0dWRlbnRzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZS5nZXRIaWdoc2NvcmUodGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaFNjb3JlU3R1ZGVudHMgPSBkYXRhLnN0dWRlbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hTY29yZVN0dWRlbnRzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50LnN0dWRlbnRfaWQgPSBzdHVkZW50LnN0dWRlbnRfaWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQuaW1hZ2UgPSBwdWJsaWNVcmwgKyAnc3R1ZGVudHMvbG9nby8nICsgc3R1ZGVudC5pbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQucHJvZ3Jlc3NUeXBlID0gdGhpcy5wcm9ncmVzc0NhbGN1bGF0b3Ioc3R1ZGVudC5vdmVyYWxsX3hwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQubWF4WFAgPSB0aGlzLmNhbGN1bGF0ZU1heFhQKHN0dWRlbnQubGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5iYWRnZXMgPSB0aGlzLmdldEJhZGdlU3R1ZGVudChzdHVkZW50LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gICAgICAgICB9KTtcblxuICB9XG5cbiAgZ2V0QmFkZ2VTdHVkZW50KGlkOiBhbnkpe1xuXG4gICAgbGV0IGJhZGdlczogYW55W10gPSBbXTtcblxuICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudEJhZGdlKGlkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGRhdGEuZm9yRWFjaCgoYmFkZ2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgYmFkZ2UuaW1hZ2UgPSBwdWJsaWNVcmwgKyAnL3N0dWRlbnRzL2JhZGdlcy8nICsgYmFkZ2UuaW1hZ2U7XG4gICAgICAgICAgICBsZXQgbmV3QmFkZ2UgPSBuZXcgQmFkZ2UodGhpcy5zZWxlY3RlZElkLnRvU3RyaW5nKCksIGJhZGdlLmlkLCBiYWRnZS5uYW1lLCBiYWRnZS5pbWFnZSwgYmFkZ2UueHAsIGJhZGdlLmlkLCBmYWxzZSk7XG4gICAgICAgICAgICBiYWRnZXMucHVzaChuZXdCYWRnZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuXG4gICAgcmV0dXJuIGJhZGdlcztcblxuICB9XG5cbiAgc2VsZWN0SGlnaFNjb3JlKHZhbHVlOiBhbnkpe1xuICAgIHRoaXMuc2hvd0hpZ2hTY29yZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9ncmVzc1R5cGU6IHN0cmluZztcbiAgcHJvZ3Jlc3NDYWxjdWxhdG9yKHhwOiBudW1iZXIpOiBzdHJpbmd7XG5cbiAgICBsZXQgYWxsU3RhdHVzOiBzdHJpbmdbXSA9IFsnaW5mbycsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ107XG4gICAgbGV0IHN0YXR1czogc3RyaW5nO1xuXG4gICAgaWYoeHAgPCAyNSl7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbM107XG4gICAgfWVsc2UgaWYoeHAgPCA1MCl7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbMl07XG4gICAgfWVsc2UgaWYoeHAgPCA3NSl7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbMV07XG4gICAgfWVsc2Uge1xuICAgICAgc3RhdHVzID0gYWxsU3RhdHVzWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0dXM7XG5cbiAgfVxuXG4gIGNhbGN1bGF0ZU1heFhQKHN0dWRlbnRMZXZlbDogYW55KXtcbiAgICBsZXQgbWF4WFA6IGFueTtcbiAgICB0aGlzLmxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xuICAgICAgaWYobGV2ZWwubGV2ZWxfaWQgPT0gc3R1ZGVudExldmVsKXtcbiAgICAgICAgbWF4WFAgPSBsZXZlbC5jZWlsaW5nX3hwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1heFhQO1xuXG4gIH1cblxuICBvcmRlckJ5KHZhbHVlOiBhbnkpe1xuICAgIHRoaXMuc3R1ZGVudHMgPSBfLm9yZGVyQnkodGhpcy5zdHVkZW50cywgW3ZhbHVlLCAnc3R1ZGVudF9pZCddLCBbJ2FzYycsICdkZXNjJ10pO1xuICB9XG5cbiAgc2VhcmNoKHZhbHVlOiBhbnkpe1xuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdpdmVBbGxGZWVkYmFjaygpe1xuICAgICAgJChcIiNnaXZlRmVlZGJhY2tcIikubW9kYWwoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRTdHVkZW50cyA9IFtdO1xuICAgICAgdGhpcy5zdHVkZW50cy5maWx0ZXIoKHN0dWRlbnQpID0+IHN0dWRlbnQuc2VsZWN0ZWQgPyB0aGlzLnNlbGVjdGVkU3R1ZGVudHMucHVzaChzdHVkZW50KTogbnVsbCk7XG4gIH1cblxuICBnaXZlRmVlZGJhY2soc3R1ZGVudDogYW55KXtcbiAgICB0aGlzLnNlbGVjdGVkU3R1ZGVudHMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkU3R1ZGVudHMucHVzaChzdHVkZW50KTtcbiAgfVxuXG4gIG9uVXBkYXRlU3R1ZGVudFNjb3JlKHNjb3JlOiBhbnkpe1xuXG4gICAgbGV0IG1heFNjb3JlID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbHMubGVuZ3RoIC0gMV0uY2VpbGluZ194cDtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxzLmxlbmd0aCAtIDFdLmNlaWxpbmdfeHApO1xuXG4gICAgbGV0IHN0dWRlbnRzID0gbmV3IHVwZGF0ZVN0dWRlbnRzU2NvcmUoXG4gICAgICB0aGlzLmNvdXJzZS5pZCxcbiAgICAgIHNjb3JlLFxuICAgICAgdGhpcy5zZWxlY3RlZFN0dWRlbnRzLFxuICAgICAgbWF4U2NvcmVcbiAgICApO1xuXG4gICAgdGhpcy5zdHVkZW50U2VydmljZS51cGRhdGVTdHVkZW50c1Njb3JlKHN0dWRlbnRzKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgJChcIiNnaXZlRmVlZGJhY2tcIikubW9kYWwoJ3RvZ2dsZScpO1xuICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZU1lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIG9uVXBkYXRlU3R1ZGVudEJhZGdlKGJhZGdlOiBhbnkpe1xuXG4gICAgbGV0IG1heFNjb3JlID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbHMubGVuZ3RoIC0gMV0uY2VpbGluZ194cDtcblxuICAgIGxldCBzdHVkZW50cyA9IG5ldyB1cGRhdGVTdHVkZW50c0JhZGdlKFxuICAgICAgdGhpcy5jb3Vyc2UuaWQsXG4gICAgICBiYWRnZS5pZCxcbiAgICAgIGJhZGdlLnhwLFxuICAgICAgdGhpcy5zZWxlY3RlZFN0dWRlbnRzLFxuICAgICAgbWF4U2NvcmVcbiAgICApO1xuXG4gICAgLy9jb25zb2xlLmxvZyhzdHVkZW50cyk7XG5cbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLnVwZGF0ZVN0dWRlbnRzQmFkZ2Uoc3R1ZGVudHMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZU1lc3NhZ2UoMjAwKSk7XG4gICAgICAgICAgICAkKFwiI2dpdmVGZWVkYmFja1wiKS5tb2RhbCgndG9nZ2xlJyk7XG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlTWVzc2FnZSg1MDApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgb25DaGVjayhzdHVkZW50OiBTdHVkZW50KXtcbiAgICBzdHVkZW50LnNlbGVjdGVkID0gIXN0dWRlbnQuc2VsZWN0ZWQ7XG5cbiAgICBsZXQgb2JqID0gdGhpcy5zdHVkZW50cy5maW5kKChpdGVtKSA9PiB7IHJldHVybiAhaXRlbS5zZWxlY3RlZCB9KTtcbiAgICBvYmogPT0gbnVsbCA/IHRoaXMuY2hlY2tBbGwgPSB0cnVlOiB0aGlzLmNoZWNrQWxsID0gZmFsc2U7XG4gIH1cblxuICBvbkNoZWNrQWxsKCl7XG4gICAgdGhpcy5jaGVja0FsbCA9ICF0aGlzLmNoZWNrQWxsO1xuICAgIHRoaXMuc3R1ZGVudHMuZm9yRWFjaCgoc3R1ZGVudCkgPT4gc3R1ZGVudC5zZWxlY3RlZCA9IHRoaXMuY2hlY2tBbGwpO1xuICB9XG5cbiAgY2hhZ2VGZWVkYmFja1N0YXRlKHN0YXRlOiBzdHJpbmcpe1xuICAgIHRoaXMuZmVlZGJhY2tTdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgdmlld0xlYWRlcmJvYXJkKCl7XG4gICAgJChcIiN2aWV3TGVhZGVyYm9hcmRcIikubW9kYWwoKTtcbiAgfVxuXG4gIGdvQmFjaygpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3RlYWNoYF0pO1xuICB9XG5cbiAgZ290b1BhZ2UocGFnZTogc3RyaW5nKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9jb3Vyc2UvJHtwYWdlfWBdKTtcbiAgfVxuXG4gIGdvdG9XZWJib2FyZCgpe1xuXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICBxdWVyeVBhcmFtczogeyAnaWQnOiB0aGlzLmNvdXJzZS5pZH0sXG4gICAgfTtcblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3dlYmJvYXJkL3Bvc3RgXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gIH1cblxuICBlZGl0U3R1ZGVudFByb2ZpbGUoaWQ6IGFueSl7XG5cbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdpZCc6IGlkfSxcbiAgICB9O1xuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvY291cnNlL2VkaXQtc3R1ZGVudGBdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgfVxuXG4gIGRlbGV0ZVBvcHVwKCl7XG4gICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcbiAgICB0aGlzLm1lc3NhZ2UgPSB7XG4gICAgICB0aXRsZTogJ+C4peC4muC4meC4seC4geC5gOC4o+C4teC4ouC4mScsXG4gICAgICBjb250ZW50OiBg4Lii4Li34LiZ4Lii4Lix4LiZ4LiB4Liy4Lij4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4LiX4Li14LmI4LmA4Lil4Li34Lit4LiBYCxcbiAgICAgIGJ1dHRvbjogJ+C4peC4midcbiAgICB9O1xuICB9XG5cbiAgb25EZWxldGVTdHVkZW50KCl7XG5cbiAgICBsZXQgdGVtcFN0dWRlbnRzOiBhbnlbXSA9IFtdO1xuXG4gICAgdGhpcy5zdHVkZW50cy5maWx0ZXIoKHN0dWRlbnQpID0+IHtcbiAgICAgIHN0dWRlbnQuc2VsZWN0ZWQgPyB0ZW1wU3R1ZGVudHMucHVzaChzdHVkZW50KTogbnVsbDtcbiAgICB9KTtcblxuICAgIGxldCBzdHVkZW50cyA9IG5ldyBkZWxldGVTdHVkZW50KFxuICAgICAgdGhpcy5jb3Vyc2UuaWQsXG4gICAgICB0ZW1wU3R1ZGVudHNcbiAgICApO1xuICAgIC8vY29uc29sZS5sb2coc3R1ZGVudHMpO1xuXG4gICAgdGhpcy5zdHVkZW50U2VydmljZS5kZWxldGVTdHVkZW50KHN0dWRlbnRzKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlTWVzc2FnZSg1MDApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuXG4gIH1cblxuXG4gIHVwZGF0ZVN0dWRlbnQoKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NvdXJzZS91cGRhdGUtc3R1ZGVudCddKTtcbiAgfVxuXG4gIHNob3dNZXNzYWdlKG1zZzogYW55KXtcbiAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB0aGlzLm1zZ3MucHVzaChtc2cpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tc2dzID0gW107XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuXG4gIGNhbmNlbCgpe1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==
