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
var router_1 = require("@angular/router");
var course_1 = require("../../models/course");
var student_service_1 = require("../../services/student.service");
var EditStudentsComponent = (function () {
    function EditStudentsComponent(route, router, studentService) {
        this.route = route;
        this.router = router;
        this.studentService = studentService;
        this.filterKeys = 'name';
        this.course = new course_1.Course('Dummy Course', 'Dummy');
        this.searchValue = '';
    }
    EditStudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.selectedId = +params['id'];
            _this.createStudents();
            console.log(_this.selectedId);
        });
    };
    EditStudentsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EditStudentsComponent.prototype.createStudents = function () {
    };
    EditStudentsComponent.prototype.search = function (value) {
        this.searchValue = value;
    };
    EditStudentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-students',
            template: "<div class=\"row\" style=\"margin-bottom: 45px\">     <div class=\"container\">         <div class=\"row box-wrapper\" style=\"padding: 2rem;\">             <form class=\"form-inline\">                 <div class=\"form-group\">                     <input type=\"text\" class=\"form-control form-control-sm\" id=\"Search\" placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32...\" #term (keyup)=\"search(term.value)\">                 </div>                 <div class=\"form-group\">                     <select class=\"form-control form-control-sm\" [(ngModel)]=\"filterKeys\" name=\"filterKeys\">                         <option value=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</option>                         <option value=\"id\">\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</option>                     </select>                 </div>                  <hr>                 <div class=\"form-group\">                     <p class=\"form-check-inline\">                         <input class=\"form-check-input\" type=\"checkbox\" name=\"choose\" value=\"option1\" style=\"right: 15px\"> \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14                     </p>                 </div>             </form>      <div style=\"overflow-y: initial !important; position: relative; width: auto;\">         <div class=\"row\" style=\"max-height: 350px; overflow-y: auto; padding-top: 1rem\">             <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let student of students | filterData: searchValue: filterKeys;  let index = index;\" style=\"margin-bottom: 15px\">                 <div class=\"card\">                     <div class=\"card-block link\" style=\"max-width: 18rem;\" data-toggle=\"modal\" data-target=\"#giveFeedback\" routerLink=\"/course/edit-student\">                         <h3><span class=\"level-tag tag tag-pill tag-info\">{{student.level}}</span></h3>                         <img class=\"pull-xs-left img-fluid img-circle\" style=\"margin-right: 15px; margin-top: 5px\" src=\"http://fakeimg.pl/50/\">                         <p class=\"card-title\" >{{student.name}} <br>{{student.id}}</p>                         <div style=\"margin-top: 25px\">                             <progress class=\"progress progress-info\" style=\"margin-bottom: 0; height: .5rem;\" value=\"{{student.xp}}\" max=\"100\" aria-describedby=\"progress\">                             </progress>                         </div>                     </div>                     <div class=\"card-footer\">                         <small class=\"form-check-inline pull-xs-left text-muted link\">                             <input class=\"form-check-input\" type=\"checkbox\" name=\"choose\" value=\"option1\"> \u0E40\u0E25\u0E37\u0E2D\u0E01                         </small>                         <small class=\"text-muted link pull-xs-right\">\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21</small>                     </div>                 </div>              </div>         </div>     </div>      <hr>          <div class=\"pull-xs-right\">             <button type=\"button\" class=\"btn btn-secondary\">\u0E25\u0E1A\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</button>             <button type=\"button\" class=\"btn btn-secondary\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>         </div>          </div>     </div>  </div>",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, student_service_1.StudentService])
    ], EditStudentsComponent);
    return EditStudentsComponent;
}());
exports.EditStudentsComponent = EditStudentsComponent;
