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
var course_service_1 = require("../../services/course.service");
var router_1 = require("@angular/router");
var teacher_service_1 = require("../../services/teacher.service");
var auth_service_1 = require("../../auth/auth.service");
var TeachListComponent = (function () {
    function TeachListComponent(authService, teacherService, courseService, router) {
        this.authService = authService;
        this.teacherService = teacherService;
        this.courseService = courseService;
        this.router = router;
        this.courses = [];
        this.hideCourses = [];
    }
    TeachListComponent.prototype.ngOnInit = function () {
        if (this.authService.checkRole()) {
            this.getTeacher();
            this.getCourse();
        }
    };
    TeachListComponent.prototype.getTeacher = function () {
        var _this = this;
        this.teacherService.getTeacher()
            .subscribe(function (teacher) {
            _this.teacher = teacher;
            _this.teacherService.teacher = _this.teacher;
        }, function (error) { return _this.errorMessage = error; });
    };
    TeachListComponent.prototype.getCourse = function () {
        var _this = this;
        this.courses = [];
        this.hideCourses = [];
        this.courseService.getAllCourse()
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].status == '1') {
                    _this.courses.push(data[i]);
                }
                else if (data[i].status == '2') {
                    _this.hideCourses.push(data[i]);
                }
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    TeachListComponent.prototype.updateStatus = function (course, status) {
        var _this = this;
        course.status_id = status;
        course.course_id = course.id;
        this.courseService.updateStatus(course)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.ngOnInit();
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    TeachListComponent.prototype.gotoCourse = function (id) {
        var navigationExtras = {
            queryParams: { 'id': id },
        };
        this.router.navigate(['/course'], navigationExtras);
    };
    TeachListComponent.prototype.addCourse = function () {
        this.router.navigate(['/teach/add-course']);
    };
    TeachListComponent.prototype.cancel = function () {
        window.history.back();
    };
    TeachListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-teach-list',
            template: "<div class=\"section-header\">   <div class=\"container\" style=\"margin-top: 55px; padding-bottom: 15px;\">     <div class=\"row\">       <div class=\"col-xs-12\">         <h2 class=\"section-header-title\">CLASSROOM</h2>         <hr>         <div class=\"section-header-link link\">           <a class=\"text-muted link\" style=\"margin-right: 15px\" data-toggle=\"modal\" data-target=\".hide-class-modal-sm\" ><ins>\u0E14\u0E39\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E0B\u0E48\u0E2D\u0E19</ins></a>           <button class=\"btn btn-green\" (click)=\"addCourse()\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19</button>         </div>       </div>     </div>   </div> </div>  <div class=\"lms-body\"> <div class=\"container\">   <div class=\"row box-wrapper\">    <div class=\"row scrollable-content\">     <div *ngIf=\"courses != null\">       <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let course of courses; let last = last;\" >          <div class=\"panel panel-default\" >           <div class=\"panel-heading\">           </div>           <div class=\"panel-body\"  (click)=\"gotoCourse(course.id)\">             <h3 class=\"panel-title\">{{course.name}}</h3>             {{course.description}}           </div>           <div class=\"panel-footer\">             <div class=\"dropdown pull-right\" style=\"margin-top: -10px\">                <i class=\"fa fa-cog\" aria-hidden=\"true\" dropdown-toggle=\"dropdown\"               id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"></i>                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" style=\"right: 0; left: inherit\">                 <li><a (click)=\"updateStatus(course, 2)\">\u0E0B\u0E48\u0E2D\u0E19\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19</a></li>                 <li><a (click)=\"updateStatus(course, 3)\">\u0E25\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19</a></li>               </ul>             </div>           </div>         </div>        </div>     </div>    </div> </div>  </div>  <!-- Modal --> <div class=\"modal fade hide-class-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">   <div class=\"modal-dialog modal-sm\">     <div class=\"modal-content\">       <div class=\"modal-header\">         <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">           <span aria-hidden=\"true\">&times;</span>         </button>         <h4 class=\"modal-title\">\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E0B\u0E48\u0E2D\u0E19</h4>       </div>       <div class=\"modal-body\">         <ul class=\"list-group\">           <li class=\"list-group-item list-group-item-action\" style=\"border: none\"  *ngFor=\"let course of hideCourses\">             <div (click)=\"updateStatus(course, 1)\">               <h5><i class=\"fa fa-reply\" aria-hidden=\"true\" style=\"margin-right: 15px\"></i> {{course.name}}</h5>             </div>           </li>         </ul>       </div>     </div>   </div> </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}.lms-body,body{font-family:proxima-nova,sans-serif;overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.lms-body{margin-top:45px;margin-bottom:45px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}.center{margin:0 auto}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.box-wrapper{background-color:transparent;border:none}.section-header{padding-top:15px;background-color:#fff}.section-header-title{color:#848484;text-align:center}.section-header-link{color:#848484}.section-header-icon{color:#848484!important}.modal-dialog{overflow-y:initial!important}.modal-body{max-height:250px;overflow-y:auto}.teachList-header{text-align:center}.teachList-more{color:#87c97f}.addClass{margin-bottom:55px;max-width:20rem;padding:2rem;text-align:center}.addClass__btn{margin-bottom:.75rem;color:#87c97f}.panel{max-height:180px;min-height:180px}.panel-body{cursor:pointer;min-height:120px}.panel-footer{padding:15px 10px;background-color:transparent;border:none;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.fa-cog{cursor:pointer;font-size:18px;color:#87c97f}.dropdown-menu{position:relative}.list-group-item:hover{cursor:pointer;background-color:#f0f2f1} /*# sourceMappingURL=teach-list.component.css.map */"]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, teacher_service_1.TeacherService, course_service_1.CourseService, router_1.Router])
    ], TeachListComponent);
    return TeachListComponent;
}());
exports.TeachListComponent = TeachListComponent;
