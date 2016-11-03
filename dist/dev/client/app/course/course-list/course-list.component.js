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
                _this.showHighScore = +_this.course.leader_board;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFFOUQsZ0NBQWtCLGdDQUFnQyxDQUFDLENBQUE7QUFDbkQsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFFNUQsdUJBQXdCLHVCQUN4QixDQUFDLENBRDhDO0FBUS9DO0lBQ0UsNkJBQW1CLFNBQWUsRUFBUyxLQUFXLEVBQVMsUUFBYztRQUExRCxjQUFTLEdBQVQsU0FBUyxDQUFNO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07SUFBSSxDQUFDO0lBQ3BGLDBCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSwyQkFBbUIsc0JBRS9CLENBQUE7QUFFRDtJQUNFLDZCQUFtQixTQUFlLEVBQVMsUUFBYyxFQUFTLEtBQVcsRUFBUyxRQUFjO1FBQWpGLGNBQVMsR0FBVCxTQUFTLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07SUFBSSxDQUFDO0lBQzNHLDBCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSwyQkFBbUIsc0JBRS9CLENBQUE7QUFHRDtJQUNFLHVCQUFtQixTQUFlLEVBQVMsUUFBYztRQUF0QyxjQUFTLEdBQVQsU0FBUyxDQUFNO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBTTtJQUFJLENBQUM7SUFDaEUsb0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHFCQUFhLGdCQUV6QixDQUFBO0FBU0Q7SUFtQ0UsNkJBQ1ksYUFBNEIsRUFBVSxjQUE4QixFQUNwRSxLQUFxQixFQUFVLE1BQWM7UUFEN0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDcEUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBakN6RCxhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFFckIsUUFBRyxHQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQixXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXJCLFNBQUksR0FBYyxFQUFFLENBQUM7UUFNYixlQUFVLEdBQVcsTUFBTSxDQUFDO1FBQ3BDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFHekIsa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFDN0IscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBSTNCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUU5QixxQkFBZ0IsR0FBcUI7WUFDbkMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUM7U0FDdEMsQ0FBQztJQU1GLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBZ0RDO1FBL0NDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDaEIsV0FBVzthQUNYLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFFZixLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBR2hDLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUM7aUJBQ3hDLFNBQVMsQ0FDTixVQUFDLElBQVE7Z0JBRVAsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMxQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFFMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLO29CQUNwQixLQUFLLENBQUMsS0FBSyxHQUFHLHdDQUF3QyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUE7Z0JBQ3RFLENBQUMsQ0FBQyxDQUFDO2dCQUVILEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUM7Z0JBRXhDLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztnQkFJL0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FDakIsVUFBQSxPQUFPO29CQUNMLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDbkQsT0FBTyxDQUFDLEtBQUssR0FBRyxrQkFBUyxHQUFHLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzdELE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDckUsQ0FBQyxDQUNKLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFFN0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO3FCQUMxRCxTQUFTLENBQ1IsVUFBQyxJQUFTO29CQUNSLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QyxDQUFDLENBQUMsQ0FBQztZQUVULENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFFVixDQUFDO0lBR0QsZ0RBQWtCLEdBQWxCLFVBQW1CLEVBQVU7UUFFM0IsSUFBSSxTQUFTLEdBQWEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuRSxJQUFJLE1BQWMsQ0FBQztRQUVuQixFQUFFLENBQUEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNWLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNoQixNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDaEIsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQUEsSUFBSSxDQUFDLENBQUM7WUFDTCxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBRWhCLENBQUM7SUFFRCxxQ0FBTyxHQUFQLFVBQVEsS0FBVTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxvQ0FBTSxHQUFOLFVBQU8sS0FBVTtRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQUEsaUJBSUM7UUFIRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRSxJQUFJLEVBQTVELENBQTRELENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRUQsMENBQVksR0FBWixVQUFhLE9BQVk7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxrREFBb0IsR0FBcEIsVUFBcUIsS0FBVTtRQUEvQixpQkFxQkM7UUFuQkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsQ0FDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQ2QsS0FBSyxFQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FDdEIsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDO2FBQzlDLFNBQVMsQ0FDUixVQUFDLElBQVM7WUFDUixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMscUJBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMscUJBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNELENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO0lBQ04sQ0FBQztJQUVELGtEQUFvQixHQUFwQixVQUFxQixLQUFVO1FBQS9CLGlCQXdCQztRQXRCQyxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFtQixDQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDZCxLQUFLLENBQUMsRUFBRSxFQUNSLEtBQUssQ0FBQyxFQUFFLEVBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUN0QixDQUFDO1FBSUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7YUFDOUMsU0FBUyxDQUNSLFVBQUMsSUFBUztZQUNSLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBRyxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0wsS0FBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBRyxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0QsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7SUFDTixDQUFDO0lBRUQscUNBQU8sR0FBUCxVQUFRLE9BQWdCO1FBQ3RCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRXJDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFPLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzVELENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxnREFBa0IsR0FBbEIsVUFBbUIsS0FBYTtRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUNFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQVcsSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCwwQ0FBWSxHQUFaO1FBRUUsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDdkMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDO1NBQ3JDLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsZ0RBQWtCLEdBQWxCLFVBQW1CLEVBQU87UUFFeEIsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDdkMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztTQUN6QixDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFBQSxpQkEyQkM7UUF6QkMsSUFBSSxZQUFZLEdBQVUsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBTztZQUMzQixPQUFPLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUUsSUFBSSxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRLEdBQUcsSUFBSSxhQUFhLENBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUNkLFlBQVksQ0FDYixDQUFDO1FBR0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO2FBQ3hDLFNBQVMsQ0FDUixVQUFDLElBQVM7WUFDUixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMscUJBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMscUJBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNELENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO0lBRU4sQ0FBQztJQUdELDJDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBSUQseUNBQVcsR0FBWCxVQUFZLEdBQVE7UUFBcEIsaUJBTUM7UUFMQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFHRCxvQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQTFSSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUMsQ0FBQywyQkFBMkIsQ0FBQztTQUN4QyxDQUFDOzsyQkFBQTtJQXNSRiwwQkFBQztBQUFELENBcFJBLEFBb1JDLElBQUE7QUFwUlksMkJBQW1CLHNCQW9SL0IsQ0FBQSIsImZpbGUiOiJhcHAvY291cnNlL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3R1ZGVudFwiO1xuaW1wb3J0IHtTdHVkZW50U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0dWRlbnQuc2VydmljZVwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge21zZ30gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcbmltcG9ydCB7cHVibGljVXJsfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29uZmlnXCJcbmltcG9ydCB7QmFkZ2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvYmFkZ2VcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcInByaW1lbmcvY29tcG9uZW50cy9jb21tb24vYXBpXCI7XG5pbXBvcnQge0xldmVsfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2xldmVsXCI7XG5cbmRlY2xhcmUgdmFyICAkOiBhbnk7XG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyB1cGRhdGVTdHVkZW50c1Njb3JlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvdXJzZV9pZD86IGFueSwgcHVibGljIHNjb3JlPzogYW55LCBwdWJsaWMgc3R1ZGVudHM/OiBhbnkpIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgdXBkYXRlU3R1ZGVudHNCYWRnZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3Vyc2VfaWQ/OiBhbnksIHB1YmxpYyBiYWRnZV9pZD86IGFueSwgcHVibGljIHNjb3JlPzogYW55LCBwdWJsaWMgc3R1ZGVudHM/OiBhbnkpIHsgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBkZWxldGVTdHVkZW50e1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY291cnNlX2lkPzogYW55LCBwdWJsaWMgc3R1ZGVudHM/OiBhbnkpIHsgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdjb3Vyc2UtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnY291cnNlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6Wydjb3Vyc2UtbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb3Vyc2VMaXN0Q29tcG9uZW50IHtcblxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgY291cnNlOiBDb3Vyc2U7XG4gIHN0dWRlbnRzOiBTdHVkZW50W109IFtdO1xuICBsZXZlbHM6IExldmVsW10gPSBbXTtcblxuICBleHA6IGFueVtdID0gWzEwLCAxNSwgMjBdO1xuICBiYWRnZXM6IEJhZGdlW10gPSBbXTtcblxuICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcbiAgLy9HZXQgcGFyYW1ldGVyXG4gIHByaXZhdGUgc2VsZWN0ZWRJZDogbnVtYmVyO1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIFNlYXJjaFxuICBwcml2YXRlIGZpbHRlcktleXM6IHN0cmluZyA9ICduYW1lJztcbiAgY2hlY2tBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIC8vR2l2ZSBGZWVkYmFjayBNb2RhbFxuICBmZWVkYmFja1N0YXRlOiBzdHJpbmcgPSAnWFAnO1xuICBzZWxlY3RlZFN0dWRlbnRzOiBhbnkgPSBbXTtcblxuICAvL1ZpZXcgSGlnaHNjb3JlXG5cbiAgc2hvd0hpZ2hTY29yZTogbnVtYmVyID0gNTtcblxuICBoaWdoU2NvcmVTdHVkZW50czogYW55W10gPSBbXTtcblxuICBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgIHF1ZXJ5UGFyYW1zOiB7ICdpZCc6IHRoaXMuc2VsZWN0ZWRJZH0sXG4gIH07XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSwgcHJpdmF0ZSBzdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2UsXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG5cbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zZWxlY3RlZElkKTtcblxuICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZS5nZXRDb3Vyc2UodGhpcy5zZWxlY3RlZElkKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgKGRhdGE6YW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3Vyc2UgPSBkYXRhLmNvdXJzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbHMgPSBkYXRhLmxldmVscztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWRnZXMgPSBkYXRhLmJhZGdlcztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhZGdlcy5tYXAoKGJhZGdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFkZ2UuaW1hZ2UgPSAnaHR0cDovLzU0LjE2OS4xMTUuMjMzL3N0dWRlbnRzL2JhZGdlcy8nICsgYmFkZ2UuaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZSA9IGRhdGEuY291cnNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UubGV2ZWxzID0gZGF0YS5sZXZlbHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZS5iYWRnZXMgPSB0aGlzLmJhZGdlcztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWdoU2NvcmUgPSArdGhpcy5jb3Vyc2UubGVhZGVyX2JvYXJkO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuc3R1ZGVudHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudHMgPSBkYXRhLnN0dWRlbnRzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5zdHVkZW50X2lkID0gc3R1ZGVudC5zdHVkZW50X2lkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQuaW1hZ2UgPSBwdWJsaWNVcmwgKyAnc3R1ZGVudHMvbG9nby8nICsgc3R1ZGVudC5pbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudC5wcm9ncmVzc1R5cGUgPSB0aGlzLnByb2dyZXNzQ2FsY3VsYXRvcihzdHVkZW50Lm92ZXJhbGxfeHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLnN0dWRlbnRzID0gdGhpcy5zdHVkZW50cztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuZ2V0SGlnaHNjb3JlKHRoaXMuY291cnNlU2VydmljZS5jb3Vyc2UuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmVTdHVkZW50cyA9IGRhdGEuc3R1ZGVudHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuICAgICAgICAgfSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgcHJvZ3Jlc3NUeXBlOiBzdHJpbmc7XG4gIHByb2dyZXNzQ2FsY3VsYXRvcih4cDogbnVtYmVyKTogc3RyaW5ne1xuXG4gICAgbGV0IGFsbFN0YXR1czogc3RyaW5nW10gPSBbJ2luZm8nLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddO1xuICAgIGxldCBzdGF0dXM6IHN0cmluZztcblxuICAgIGlmKHhwIDwgMjUpe1xuICAgICAgc3RhdHVzID0gYWxsU3RhdHVzWzNdO1xuICAgIH1lbHNlIGlmKHhwIDwgNTApe1xuICAgICAgc3RhdHVzID0gYWxsU3RhdHVzWzJdO1xuICAgIH1lbHNlIGlmKHhwIDwgNzUpe1xuICAgICAgc3RhdHVzID0gYWxsU3RhdHVzWzFdO1xuICAgIH1lbHNlIHtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdHVzO1xuXG4gIH1cblxuICBvcmRlckJ5KHZhbHVlOiBhbnkpe1xuICAgIHRoaXMuc3R1ZGVudHMgPSBfLm9yZGVyQnkodGhpcy5zdHVkZW50cywgW3ZhbHVlLCAnaWQnXSwgWydhc2MnLCAnZGVzYyddKTtcbiAgfVxuXG4gIHNlYXJjaCh2YWx1ZTogYW55KXtcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnaXZlQWxsRmVlZGJhY2soKXtcbiAgICAgICQoXCIjZ2l2ZUZlZWRiYWNrXCIpLm1vZGFsKCk7XG4gICAgICB0aGlzLnNlbGVjdGVkU3R1ZGVudHMgPSBbXTtcbiAgICAgIHRoaXMuc3R1ZGVudHMuZmlsdGVyKChzdHVkZW50KSA9PiBzdHVkZW50LnNlbGVjdGVkID8gdGhpcy5zZWxlY3RlZFN0dWRlbnRzLnB1c2goc3R1ZGVudCk6IG51bGwpO1xuICB9XG5cbiAgZ2l2ZUZlZWRiYWNrKHN0dWRlbnQ6IGFueSl7XG4gICAgdGhpcy5zZWxlY3RlZFN0dWRlbnRzID0gW107XG4gICAgdGhpcy5zZWxlY3RlZFN0dWRlbnRzLnB1c2goc3R1ZGVudCk7XG4gIH1cblxuICBvblVwZGF0ZVN0dWRlbnRTY29yZShzY29yZTogYW55KXtcblxuICAgIGxldCBzdHVkZW50cyA9IG5ldyB1cGRhdGVTdHVkZW50c1Njb3JlKFxuICAgICAgdGhpcy5jb3Vyc2UuaWQsXG4gICAgICBzY29yZSxcbiAgICAgIHRoaXMuc2VsZWN0ZWRTdHVkZW50c1xuICAgICk7XG5cbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLnVwZGF0ZVN0dWRlbnRzU2NvcmUoc3R1ZGVudHMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgJChcIiNnaXZlRmVlZGJhY2tcIikubW9kYWwoJ3RvZ2dsZScpO1xuICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBvblVwZGF0ZVN0dWRlbnRCYWRnZShiYWRnZTogYW55KXtcblxuICAgIGxldCBzdHVkZW50cyA9IG5ldyB1cGRhdGVTdHVkZW50c0JhZGdlKFxuICAgICAgdGhpcy5jb3Vyc2UuaWQsXG4gICAgICBiYWRnZS5pZCxcbiAgICAgIGJhZGdlLnhwLFxuICAgICAgdGhpcy5zZWxlY3RlZFN0dWRlbnRzXG4gICAgKTtcblxuICAgIC8vY29uc29sZS5sb2coc3R1ZGVudHMpO1xuXG4gICAgdGhpcy5zdHVkZW50U2VydmljZS51cGRhdGVTdHVkZW50c0JhZGdlKHN0dWRlbnRzKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICAgICQoXCIjZ2l2ZUZlZWRiYWNrXCIpLm1vZGFsKCd0b2dnbGUnKTtcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZSg1MDApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgb25DaGVjayhzdHVkZW50OiBTdHVkZW50KXtcbiAgICBzdHVkZW50LnNlbGVjdGVkID0gIXN0dWRlbnQuc2VsZWN0ZWQ7XG5cbiAgICBsZXQgb2JqID0gdGhpcy5zdHVkZW50cy5maW5kKChpdGVtKSA9PiB7IHJldHVybiAhaXRlbS5zZWxlY3RlZCB9KTtcbiAgICBvYmogPT0gbnVsbCA/IHRoaXMuY2hlY2tBbGwgPSB0cnVlOiB0aGlzLmNoZWNrQWxsID0gZmFsc2U7XG4gIH1cblxuICBvbkNoZWNrQWxsKCl7XG4gICAgdGhpcy5jaGVja0FsbCA9ICF0aGlzLmNoZWNrQWxsO1xuICAgIHRoaXMuc3R1ZGVudHMuZm9yRWFjaCgoc3R1ZGVudCkgPT4gc3R1ZGVudC5zZWxlY3RlZCA9IHRoaXMuY2hlY2tBbGwpO1xuICB9XG5cbiAgY2hhZ2VGZWVkYmFja1N0YXRlKHN0YXRlOiBzdHJpbmcpe1xuICAgIHRoaXMuZmVlZGJhY2tTdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgdmlld0xlYWRlcmJvYXJkKCl7XG4gICAgJChcIiN2aWV3TGVhZGVyYm9hcmRcIikubW9kYWwoKTtcbiAgfVxuXG4gIGdvQmFjaygpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3RlYWNoYF0pO1xuICB9XG5cbiAgZ290b1BhZ2UocGFnZTogc3RyaW5nKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9jb3Vyc2UvJHtwYWdlfWBdKTtcbiAgfVxuXG4gIGdvdG9XZWJib2FyZCgpe1xuXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICBxdWVyeVBhcmFtczogeyAnaWQnOiB0aGlzLmNvdXJzZS5pZH0sXG4gICAgfTtcblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3dlYmJvYXJkL3Bvc3RgXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gIH1cblxuICBlZGl0U3R1ZGVudFByb2ZpbGUoaWQ6IGFueSl7XG5cbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdpZCc6IGlkfSxcbiAgICB9O1xuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvY291cnNlL2VkaXQtc3R1ZGVudGBdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgfVxuXG4gIG9uRGVsZXRlU3R1ZGVudCgpe1xuXG4gICAgbGV0IHRlbXBTdHVkZW50czogYW55W10gPSBbXTtcblxuICAgIHRoaXMuc3R1ZGVudHMuZmlsdGVyKChzdHVkZW50KSA9PiB7XG4gICAgICBzdHVkZW50LnNlbGVjdGVkID8gdGVtcFN0dWRlbnRzLnB1c2goc3R1ZGVudCk6IG51bGw7XG4gICAgfSk7XG5cbiAgICBsZXQgc3R1ZGVudHMgPSBuZXcgZGVsZXRlU3R1ZGVudChcbiAgICAgIHRoaXMuY291cnNlLmlkLFxuICAgICAgdGVtcFN0dWRlbnRzXG4gICAgKTtcbiAgICAvL2NvbnNvbGUubG9nKHN0dWRlbnRzKTtcblxuICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UuZGVsZXRlU3R1ZGVudChzdHVkZW50cylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoMjAwKSk7XG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcblxuICB9XG5cblxuICB1cGRhdGVTdHVkZW50KCl7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jb3Vyc2UvdXBkYXRlLXN0dWRlbnQnXSk7XG4gIH1cblxuXG5cbiAgc2hvd01lc3NhZ2UobXNnOiBhbnkpe1xuICAgIHRoaXMubXNncyA9IFtdO1xuICAgIHRoaXMubXNncy5wdXNoKG1zZyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG5cbiAgY2FuY2VsKCl7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19
