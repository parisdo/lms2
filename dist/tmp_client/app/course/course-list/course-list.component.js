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
            template: "<p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>  <p-dialog header=\"{{message.title}}\" [(visible)]=\"display\" modal=\"modal\"           showEffect=\"fade\" responsive=\"responsive\" resizable=\"!resizable\">   {{message.content}} <br>   <footer>     <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">       <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteStudent()\">{{message.button}}</button>       <button type=\"button\" class=\"btn btn-secondary\" (click)=\"display = false\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>     </div>   </footer> </p-dialog>  <div class=\"section-header\" *ngIf=\"course != null\">   <my-course-nav (webboard)=\"gotoWebboard()\" (feedback)=\"giveAllFeedback()\" (leaderboard)=\"viewLeaderboard()\"></my-course-nav>   <div class=\"container\">     <div class=\"row\">       <div class=\"col-xs-12\">         <a class=\"section-header-link\">           <a class=\"section-header-link\" (click)=\"cancel()\"><i class=\"section-header-icon fa fa-chevron-left\" aria-hidden=\"true\"></i> \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A</a>           <div class=\"dropdown pull-right\">             <span dropdown-toggle=\"dropdown\"             id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">               <i class=\"fa fa-cog link\" aria-hidden=\"true\" ></i> \u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25             </span>              <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" style=\"right: 0; left: inherit\">               <li><a class=\"link\" (click)=\"gotoPage('edit-course')\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19</a></li>               <li><a class=\"link\" (click)=\"gotoPage('edit-xp')\">\u0E41\u0E01\u0E49\u0E44\u0E02  XP \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E02\u0E31\u0E49\u0E19</a></li>               <li><a class=\"link\" (click)=\"gotoPage('edit-badge')\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25</a></li>               <li><a class=\"link\" (click)=\"gotoPage('edit-student-score')\">\u0E41\u0E01\u0E49\u0E44\u0E02 XP \u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</a></li>               <li><a class=\"link\" (click)=\"gotoPage('print-students')\">\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E1A\u0E31\u0E15\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</a></li>             </ul>           </div>         </a>         <h3 class=\"section-header-title\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i> {{course.name}}</h3>       </div>     </div>   </div> </div>   <div class=\"lms-body\" style=\"margin-top: 0; padding-top: 0\">   <div class=\"container\" *ngIf=\"course != null\">      <div class=\"row\">       <div class=\"col-md-8\">         <form class=\"form-inline\">           <div class=\"form-group\">             <p class=\"form-check-inline pull-left text-muted on-checked\"  (click)=\"onCheckAll()\" style=\"margin-right: 45px\">               <input class=\"form-check-input\" type=\"checkbox\" value=\"checkAll\"                      [(ngModel)]=\"checkAll\" name=\"checkAll\"> \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14             </p>            </div>            <div class=\"form-group\">             <input type=\"text\" class=\"form-control form-control-sm\" id=\"Search\" placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32...\" #term                    (keyup)=\"search(term.value)\">           </div>           <div class=\"form-group\">             <select class=\"form-control form-control-sm\" [(ngModel)]=\"filterKeys\" name=\"filterKeys\">               <option value=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</option>               <option value=\"student_id\">\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</option>             </select>           </div>            <div class=\"form-group\">             \u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E32\u0E21             <select class=\"form-control form-control-sm\" name=\"orderKeys\" (change)=\"orderBy($event.target.value)\">               <option value=\"student_id\">\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</option>               <option value=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</option>               <option value=\"xp\">\u0E04\u0E48\u0E32 XP</option>             </select>           </div>          </form>       </div>       <div class=\"col-md-4\">         <form class=\"form-inline\">           <div class=\"form-group pull-right\">             <button class=\"btn btn-danger\" type=\"button\" (click)=\"deletePopup()\"><i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i> \u0E25\u0E1A\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</button>             <button class=\"btn btn-green\" type=\"button\" (click)=\"updateStudent()\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</button>           </div>         </form>        </div>     </div>       <div class=\"row box-wrapper\">        <div class=\"scrollable-content\">          <div class=\"row\">           <div class=\"col-md-4\" *ngFor=\"let student of students |filterData: searchValue: filterKeys; let index = index;\"                style=\"margin-bottom: 15px\">              <div class=\"panel panel-default\">               <div class=\"panel-heading\">                 <div class=\"pull-right\">Level <span class=\"badge\">{{student.level}}</span></div>               </div>               <div class=\"panel-body\" data-toggle=\"modal\" data-target=\"#giveFeedback\" (click)=\"giveFeedback(student)\">                 <div class=\"row\">                   <div class=\"col-md-6\">                     <img class=\"center img-responsive img-circle\" style=\"max-width: 100px; margin-top: 5px\" [src]=\"student.image\">                   </div>                   <div class=\"col-md-6\" style=\"padding-top: 15px\">                     <p >Name: {{student.name}}</p>                     <p>ID: {{student.student_id}}</p>                     <div style=\"margin-top: 15px\">                       <div class=\"progress\">                         <div class=\"progress-bar progress-bar-{{student.progressType}}\" role=\"progressbar\"                              [attr.aria-valuenow]=\"student.overall_xp\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"100\"                              [style.width]=\"(student.overall_xp)+ '%'\">                         </div>                       </div>                       <small>{{student.overall_xp}} <span>/ {{student.maxXP}} XP</span></small>                      </div>                   </div>                 </div>               </div>               <div class=\"panel-footer\">                 <small class=\"form-check-inline text-muted on-checked\"  (click)=\"onCheck(student)\">                   <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"student.selected\"                          name=\"student.name\"> \u0E40\u0E25\u0E37\u0E2D\u0E01                 </small>                 <small class=\"text-muted information pull-right\" (click)=\"editStudentProfile(student.id)\">\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21                 </small>               </div>             </div>            </div>         </div>          </div>      </div>   </div>  </div>   <!-- Give Feedback Modal --> <div class=\"modal fade\" id=\"giveFeedback\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"giveFeedbacklLabel\"      aria-hidden=\"true\">   <div class=\"modal-dialog\" role=\"document\" style=\"overflow-y: initial !important\">     <div class=\"modal-content\">       <div class=\"modal-header\">         <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">           <span aria-hidden=\"true\">&times;</span>         </button>         <h4 class=\"modal-title\" id=\"giveFeedbacklLabel\">\u0E21\u0E2D\u0E1A {{feedbackState}} \u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A <span           *ngFor=\"let student of selectedStudents; let last = last\" class=\"text-muted\"           style=\"margin-right: 5px;\">{{student.name}} {{student.student_id}}<span *ngIf=\"selectedStudents.length > 1 && !last\">,</span></span></h4>       </div>        <div class=\"modal-body\" style=\"max-height: 350px; overflow-y: auto; margin-bottom: 15px\">         <div style=\"text-align: center; margin-bottom: 15px\">           <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">             <button type=\"button\" class=\"btn {{ feedbackState == 'XP' ? 'btn-info': 'btn-secondary'}} link\"                     style=\"min-width: 100px\" (click)=\"chageFeedbackState('XP')\">XP             </button>             <button type=\"button\" class=\"btn {{ feedbackState == 'Badge' ? 'btn-info': 'btn-secondary'}} link\"                     style=\"min-width: 100px\" (click)=\"chageFeedbackState('Badge')\">Badge             </button>           </div>         </div>          <!--Badge-->         <div class=\"row\" style=\"margin-bottom: 15px\" *ngIf=\"feedbackState == 'Badge'\">           <div class=\"col-md-3\" *ngFor=\"let badge of badges\">             <div class=\"panel panel-default link\" (click)=\"onUpdateStudentBadge(badge)\">               <div class=\"panel-body text-center\">                 <img class=\"center img-responsive img-circle \" [src]=\"badge.image\" style=\"margin-bottom: 5px\">                 <p class=\"card-text\" style=\"margin-bottom: 0\">{{badge.name}}</p>                 <small class=\"card-text\">+{{badge.xp}} XP</small>               </div>             </div>            </div>         </div>         <!--XP-->         <div *ngIf=\"feedbackState == 'XP'\">            <div class=\"row\" style=\"margin-bottom: 15px\">             <div class=\"col-md-4\" *ngFor=\"let xp of exp;\">               <div class=\"panel panel-default link\" (click)=\"onUpdateStudentScore(xp)\">                 <div class=\"panel-body text-center\">                   + {{xp.toLocaleString()}} XP                 </div>               </div>             </div>           </div>           <div class=\"row\">             <form class=\"form-inline text-center\" style=\"margin-right: 5px; margin-left: 5px\">               <div class=\"form-group\">                 <p class=\"form-control-static\">\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32 XP</p>               </div>               <div class=\"form-group\">                 <input type=\"number\" class=\"form-control form-control-sm\" name=\"dynamicXp\" [(ngModel)]=\"dynamicXp\">               </div>               <button type=\"submit\" class=\"btn btn-info btn-sm\" (click)=\"onUpdateStudentScore()\">\u0E15\u0E01\u0E25\u0E07</button>             </form>           </div>           <div class=\"row\">             <div class=\"col-xs-12\" style=\"text-align: center; margin-top: 15px\">               <small *ngIf=\"!isXp\">\u0E01\u0E23\u0E38\u0E13\u0E32\u0E43\u0E2A\u0E48\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 0 \u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B</small>             </div>           </div>         </div>        </div>        <div class=\"modal-footer\">         <button type=\"button\" id=\"closeUpdateModal\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"resetXp()\" >\u0E1B\u0E34\u0E14</button>       </div>     </div>   </div> </div>  <!--View Leaderboard Modal--> <div class=\"modal fade\" id=\"viewLeaderboard\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"giveFeedbackLabel\"      aria-hidden=\"true\">   <div class=\"modal-dialog\" role=\"document\" style=\"overflow-y: initial !important; \">     <div class=\"modal-content\">       <div class=\"modal-header\">         <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">           <span aria-hidden=\"true\">&times;</span>         </button>          <div class=\"modal-title\" id=\"viewLeaderboardlLabel\">           <form class=\"form-inline text-center\" style=\"margin-right: 15px; margin-left: 15px; margin-bottom: 0\">             <div class=\"form-group\">               <p class=\"form-control-static\">\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E09\u0E1E\u0E32\u0E30</p>             </div>             <div class=\"form-group\">               <select class=\"form-control form-control-sm\" (change)=\"selectHighScore($event.target.value)\">                 <option value=\"{{defaultHighScore}}\">{{defaultHighScore}}</option>                 <option value=\"10\">10</option>                 <option value=\"20\">20</option>                 <option value=\"30\">15</option>                 <option value=\"40\">40</option>                 <option value=\"50\">50</option>               </select>               {{showHighScore}}             </div>             <span>\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E41\u0E23\u0E01</span>           </form>       </div>       <div class=\"modal-body\" style=\"max-height: 350px; overflow-y: auto;\">           <div class=\"row\">           <!--Student Card-->           <div class=\"col-xs-12\" style=\"padding-right: 25px; padding-left: 25px\">             <div class=\"card card-block\">               <div class=\"row {{index % 2 != 0 ? 'odd': 'even'}}\" *ngFor=\"let student of highScoreStudents; let index = index\">                 <div *ngIf=\"index < showHighScore\">                   <div class=\"row\">                     <div class=\"col-md-1 col-xs-12 text-center\">                       <h3>{{index + 1}}</h3>                     </div>                     <div class=\"col-md-2 col-xs-12 text-xs-center\">                       <img class=\"center img-responsive img-circle\" [src]=\"student.image\">                     </div>                     <div class=\"col-md-5 col-xs-12 text-xs-center\">                       <p class=\"card-title\" style=\"margin-top: 15px\">{{student.student_id}} {{student.name}}</p>                     </div>                     <div class=\"col-md-2 col-xs-12 text-xs-center\">                       <p style=\"margin-top: 15px\">{{student.overall_xp}} XP</p>                     </div>                     <div class=\"col-md-2 col-xs-12 text-xs-center\">                       <p style=\"margin-top: 15px\">Level {{student.level}}</p>                     </div>                   </div>                   <div class=\"row\">                     <div class=\"col-md-offset-3 col-md-5\">                       <div class=\"row\">                         <div class=\"col-md-3\" *ngFor=\"let badge of student.badges;\">                           <img class=\"center img-responsive img-circle \" [src]=\"badge.image\" style=\"margin-bottom: 5px; max-width: 40px\">                         </div>                       </div>                     </div>                   </div>                  </div>                </div>             </div>           </div>          </div>       </div>       <div class=\"modal-footer\">         <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\u0E1B\u0E34\u0E14</button>       </div>     </div>   </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{font-size:18px;color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}body{background-color:#f0f2f1}.lms-body,body{overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.btn,.lms-body,.modal,.modal-body,.modal-header,.nav,.section-header-link,.section-header-title,a,body,h1,h2,h3,h4,h5,input,label,p,small{font-family:Kanit,sans-serif!important;font-weight:400!important}.lms-body{padding-top:45px;padding-bottom:90px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}.center{margin:0 auto}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.rowTable,.tdTable,.thTable{padding-top:5px;padding-bottom:5px;margin-bottom:5px}.thTable{background-color:#f0f2f1}.tdTable{border-bottom:1px solid #f0f2f1}:host/deep/.ui-growl-item-container.ui-state-highlight.ui-growl-message-success{background-color:#87c97f;border-color:#87c97f}:host /deep/ .ui-resizable-se{display:none}:host /deep/ .ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-shadow{position:fixed;padding:0;overflow:hidden;width:500px}.lms-body{margin-top:0}.container{margin-top:45px}.box-wrapper{background-color:transparent;border:none}.section-header{padding-top:55px;background-color:#f0f2f1}.section-header-link,.section-header-title{color:#848484}.section-header-icon{color:#848484!important}.goBack{float:left;margin-right:15px;margin-top:-5px}.dropdown{float:right}.dropdown-setting{margin-top:-5px}.level-tag{position:absolute;top:-10px;right:-10px;border-radius:1em;width:40px;border:4px solid #fff;color:#fff;background-color:#eec820}.ui-widget,:host/deep/.ui-growl{z-index:2000}.fa-cog{color:#848484}.information{cursor:pointer;text-decoration:underline}.panel{max-height:none;min-height:inherit}.panel-body{cursor:pointer;min-height:inherit}.showHighScore,.showHighScore-menu{float:none;text-align:center}.showHighScore-menu{right:0;left:-10px;width:50px;margin:0 auto}.even,.highScoreRow,.odd{padding:5px}.odd{background-color:#f0f2f1}.even{background-color:#fff} /*# sourceMappingURL=course-list.component.css.map */"]
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, student_service_1.StudentService, router_1.ActivatedRoute, router_1.Router])
    ], CourseListComponent);
    return CourseListComponent;
}());
exports.CourseListComponent = CourseListComponent;
