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
                    console.log(data);
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
            this.student.image = this.student.image.substring(34);
        }
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
            template: "<p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>  <div class=\"section-header\">   <div class=\"container\" style=\"margin-top: 55px;\">     <div class=\"row\">       <div class=\"col-xs-12\">         <a class=\"section-header-link link\" (click)=\"cancel()\" routerLinkActive=\"true\">           <i class=\"section-header-icon fa fa-chevron-left\" aria-hidden=\"true\"></i> \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A</a>         <h3 class=\"section-header-title\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19</h3>       </div>     </div>   </div> </div>  <div class=\"lms-body\">   <div class=\"container\">     <div class=\"row box-wrapper\">        <div class=\"row box-wrapper\" style=\"padding: 2rem; margin-bottom: 45px;\">         <div class=\"col-md-4 col-xs-12 text-xs-center\" style=\"margin-bottom: 45px\">           <div class=\"form-group row\">             <div class=\"col-sm-10\">               <img class=\"img-responsive center\" [src]=\"image\" [hidden]=\"!image\"                    style=\"margin-bottom: 15px\">               <label class=\"btn btn-info btn-sm\" for=\"file-selector\" style=\"display: block\">                 <input id=\"file-selector\" type=\"file\" image-upload (imageSelected)=\"selected($event)\"                        [resizeOptions]=\"resizeOptions\" style=\"display:none;\">                 \u0E43\u0E2A\u0E48\u0E23\u0E39\u0E1B               </label>               <small class='text-muted' [hidden]=\"image\">\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E43\u0E2A\u0E48\u0E23\u0E39\u0E1B (\u0E43\u0E2A\u0E48\u0E23\u0E39\u0E1B\u0E44\u0E1F\u0E25\u0E4C .jpg, .jpeg)</small>               <small class='text-muted' style=\"font-size: 10px\" id=\"upload-file-info\"></small>             </div>           </div>         </div>         <div class=\"col-md-8 col-xs-12\">            <form class=\"center\" [formGroup]=\"userForm\" novalidate autocomplete=\"off\">             <h5 style=\"margin-bottom: 15px\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27               <hr>             </h5>             <div class=\"form-group row\">               <label for=\"username\" class=\"col-sm-3 col-form-label\">Username</label>               <div class=\"col-sm-9\">                 <input type=\"text\" class=\"form-control\" id=\"username\" name=\"id\" formControlName=\"username\"                        [(ngModel)]=\"student.username\">               </div>             </div>             <div class=\"form-group row\">               <label for=\"student_id\" class=\"col-sm-3 col-form-label\">\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 *</label>               <div class=\"col-sm-9\">                 <input type=\"text\" class=\"form-control\" id=\"student_id\" name=\"student_id\" formControlName=\"student_id\"                        [(ngModel)]=\"student.student_id\">               </div>             </div>             <div class=\"form-group row\">               <label for=\"name\" class=\"col-sm-3 col-form-label\">\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 *</label>               <div class=\"col-sm-9\">                 <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" formControlName=\"name\"                        [(ngModel)]=\"student.name\">               </div>             </div>             <div class=\"form-group row\">               <label for=\"overall_xp\" class=\"col-sm-3 col-form-label\">XP</label>               <div class=\"col-sm-9\">                 <input type=\"text\" class=\"form-control\" id=\"overall_xp\" name=\"overall_xp\" formControlName=\"overall_xp\"                        [(ngModel)]=\"student.overall_xp\">               </div>             </div>             <hr>             <div class=\"form-group row pull-xs-right\">               <div class=\"col-xs-12\">                 <button type=\"submit\" class=\"btn btn-info\" (click)=\"save()\" [disabled]=\"!userForm.valid\">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01</button>               </div>             </div>           </form>         </div>        </div>        <h3 style=\"margin-bottom: 15px;\">\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A</h3>       <div class=\"form-group\">         <p class=\"form-check-inline\" (click)=\"onCheckAll()\" *ngIf=\"badges.length != 0\">           <input class=\"form-check-input form-control-sm\" type=\"checkbox\" value=\"checkAll\" style=\"right: 5px\"                  [(ngModel)]=\"checkAll\" name=\"checkAll\">           \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14         </p>       </div>       <div *ngIf=\"badges != null\">         <div class=\"row box-wrapper\" style=\"padding: 2rem; max-height: 300px; overflow-y: auto; margin-bottom: 15px;\">             <div class=\"row\" style=\"margin-top: 15px\">             <div class=\"col-xs-12\">               <div class=\"row box-wrapper\">                 <div class=\"row\" *ngIf=\"badges\">                   <div class=\"col-md-3\" *ngFor=\"let badge of badges;\">                     <div class=\"panel panel-default\" style=\"max-height: inherit; min-height: inherit\">                       <div class=\"panel-body\">                         <img class=\"center img-responsive img-circle \" src=\"{{badge.image}}\" style=\"margin-bottom: 5px; max-width: 80px\">                         <p class=\"card-text\" style=\"margin-bottom: 0\">{{badge.name}}</p>                       </div>                       <div class=\"panel-footer\">                         <p class=\"form-check-inline text-muted on-checked\" (click)=\"onCheck(badge)\">                           <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"badge.selected\"                                  name=\"badge.name\"> \u0E40\u0E25\u0E37\u0E2D\u0E01                         </p>                       </div>                     </div>                   </div>                 </div>                 <p *ngIf=\"badges.length == 0\" style=\"text-align: center\">\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A</p>               </div>             </div>           </div>         </div>       <hr>        <div class=\"row \" style=\"padding: 1rem; margin-bottom: 15px;\">          <div class=\"pull-right\">           <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteStudentBadge()\" [disabled]=\"badges.length == 0\">\u0E25\u0E1A\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A</button>         </div>       </div>       </div>   </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{font-size:18px;color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}body{background-color:#f0f2f1}.lms-body,body{font-family:proxima-nova,sans-serif;overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.lms-body{margin-top:45px;padding-top:45px;padding-bottom:90px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.rowTable,.tdTable,.thTable{padding-top:5px;padding-bottom:5px;margin-bottom:5px}.thTable{background-color:#f0f2f1}.tdTable{border-bottom:1px solid #f0f2f1}:host/deep/.ui-growl-item-container.ui-state-highlight.ui-growl-message-info{background-color:#87c97f;border-color:#87c97f}.center{margin:0 auto}.box-wrapper{background-color:transparent;border:none}.section-header{padding-top:15px;background-color:#fff}.section-header-link,.section-header-title{color:#848484}.section-header-icon{color:#848484!important} /*# sourceMappingURL=edit-student.component.css.map */"],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, course_service_1.CourseService, student_service_1.StudentService])
    ], EditStudentComponent);
    return EditStudentComponent;
}());
exports.EditStudentComponent = EditStudentComponent;
