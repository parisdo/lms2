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
var student_service_1 = require("../../services/student.service");
var PrintStudentsComponent = (function () {
    function PrintStudentsComponent(router, studentService) {
        this.router = router;
        this.studentService = studentService;
        this.students = [];
    }
    PrintStudentsComponent.prototype.ngOnInit = function () {
        if (this.studentService.students.length != 0) {
            this.students = this.studentService.students;
            console.log(this.students);
        }
        else {
            this.router.navigate(['/teach']);
        }
    };
    PrintStudentsComponent.prototype.cancel = function () {
        window.history.back();
    };
    PrintStudentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'print-students',
            template: "<div class=\"section-header\">   <div class=\"container\" style=\"margin-top: 55px; padding-bottom: 15px;\">     <div class=\"row\">       <div class=\"col-xs-12\">         <a class=\"section-header-link link\" (click)=\"cancel()\" routerLinkActive=\"true\">           <i class=\"section-header-icon fa fa-chevron-left\" aria-hidden=\"true\"></i> \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A</a>         <h3 class=\"section-header-title\">\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E1A\u0E31\u0E15\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</h3>       </div>     </div>   </div> </div>  <div class=\"lms-body\">   <div class=\"container\">       <div class=\"row box-wrapper\">        <div class=\"row\">         <div class=\"col-xs-12\">           <button style=\"float: right\" class=\"btn btn-green\">\u0E1E\u0E34\u0E21\u0E1E\u0E4C</button>         </div>       </div>        <div class=\"row\" *ngIf=\"students != null\">         <div class=\"col-md-3\" *ngFor=\"let student of students\">            <div class=\"panel panel-default\">             <div class=\"panel-body\">               <h4 class=\"panel-title\">ID: {{student.student_id}}</h4>               <h4 class=\"panel-title\">Name: {{student.name}}</h4>               <hr>               <p><strong>username:</strong> {{student.username}}</p>               <p><strong>password:</strong> {{student.password}} </p>             </div>           </div>          </div>       </div>       </div>   </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}.lms-body,body{font-family:proxima-nova,sans-serif;overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.lms-body{margin-top:45px;margin-bottom:45px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}.center{margin:0 auto}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.box-title{color:#1e394f;margin-bottom:15px}.box-wrapper{background-color:transparent;border:none}.section-header{padding-top:15px;background-color:#fff}.section-header-link,.section-header-title{color:#848484}.section-header-icon{color:#848484!important}.fa{color:#848484;cursor:pointer}.box-wrapper{padding:45px}.panel{max-height:none;min-height:inherit}.panel-body{text-align:left;cursor:pointer;min-height:inherit} /*# sourceMappingURL=print-students.component.css.map */"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, student_service_1.StudentService])
    ], PrintStudentsComponent);
    return PrintStudentsComponent;
}());
exports.PrintStudentsComponent = PrintStudentsComponent;
