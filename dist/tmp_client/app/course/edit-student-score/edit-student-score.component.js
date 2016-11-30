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
var course_service_1 = require("../../services/course.service");
var config_1 = require("../../services/config");
var auth_service_1 = require("../../auth/auth.service");
var EditStudentScoreComponent = (function () {
    function EditStudentScoreComponent(authService, courseService, route, router) {
        this.authService = authService;
        this.courseService = courseService;
        this.route = route;
        this.router = router;
        this.uploadStete = 'add_xp';
        this.downloadPath = '';
    }
    EditStudentScoreComponent.prototype.changeUploadState = function (state) {
        this.uploadStete = state;
    };
    EditStudentScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('course_id') != undefined) {
            this.courseService.getCourse(localStorage.getItem('course_id'))
                .subscribe(function (data) {
                _this.selectedId = data.course.id;
                _this.downloadPath = config_1.apiUrl + "downloadExcel/" + _this.selectedId;
            }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['/teach']);
        }
    };
    EditStudentScoreComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditStudentScoreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-student-score',
            template: "<div class=\"section-header\">   <div class=\"container\" style=\"margin-top: 55px;\">     <div class=\"row\">       <div class=\"col-xs-12\">         <a class=\"section-header-link link\" (click)=\"cancel()\" routerLinkActive=\"true\">           <i class=\"section-header-icon fa fa-chevron-left\" aria-hidden=\"true\"></i> \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A</a>         <h3 class=\"section-header-title\">\u0E41\u0E01\u0E49\u0E44\u0E02 XP \u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</h3>       </div>     </div>   </div> </div>  <div class=\"lms-body\">   <div class=\"container\">          <div class=\"row box-wrapper\">               <form style=\"max-width: 800px\" class=\"center\" *ngIf=\"uploadStete == 'add_xp'\" ngNoForm action=\"http://54.179.136.36/api/v1/import\"                   method=\"post\" enctype=\"multipart/form-data\" novalidate>                 <h5 style=\"margin-bottom: 15px\">\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E1B\u0E23\u0E31\u0E1A\u0E41\u0E01\u0E49 XP \u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19<hr></h5>                 <div class=\"form-group row\">                     <label for=\"add_xp_step1\" class=\"col-sm-8 col-form-label\"><span class=\"step-tag tag tag-info\">\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E17\u0E35\u0E48 1</span> Download \u0E44\u0E1F\u0E25\u0E4C\u0E15\u0E49\u0E19\u0E09\u0E1A\u0E31\u0E1A (Excel)</label>                     <div class=\"col-sm-4\">                       <a [href]=\"downloadPath\" id=\"add_xp_step1\" *ngIf=\"selectedId != null\">Download</a>                     </div>                 </div>                 <div class=\"form-group row\">                     <label class=\"col-sm-12 col-form-label\"><span class=\"step-tag tag tag-info\">\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E17\u0E35\u0E48 2</span> \u0E1B\u0E23\u0E31\u0E1A\u0E41\u0E01\u0E49\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48 Export \u0E21\u0E32\u0E42\u0E14\u0E22\u0E41\u0E01\u0E49\u0E44\u0E02\u0E04\u0E48\u0E32 XP \u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E04\u0E19\u0E41\u0E25\u0E30\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E25\u0E07\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E14\u0E34\u0E21</label>                 </div>                 <div class=\"form-group row\">                     <label class=\"col-sm-8 col-form-label\"><span class=\"step-tag tag tag-info\">\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E17\u0E35\u0E48 3</span> Upload \u0E44\u0E1F\u0E25\u0E4C XP \u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 (Excel) \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A</label>                     <div class=\"col-sm-4\">                         <input type=\"file\" class=\"form-control\" name=\"file\">                         <span class='label label-info' id=\"upload-file-info\"></span>                     </div>                 </div>                 <hr>                 <div class=\"form-group row pull-xs-right\">                     <div class=\"col-sm-12\">                         <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>                         <button type=\"submit\" class=\"btn btn-info\">Upload</button>                     </div>                 </div>             </form>          </div>     </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{font-size:18px;color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}body{background-color:#f0f2f1}.lms-body,body{font-family:proxima-nova,sans-serif;overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.lms-body{padding-top:45px;padding-bottom:90px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.rowTable,.tdTable,.thTable{padding-top:5px;padding-bottom:5px;margin-bottom:5px}.thTable{background-color:#f0f2f1}.tdTable{border-bottom:1px solid #f0f2f1}:host/deep/.ui-growl-item-container.ui-state-highlight.ui-growl-message-success{background-color:#87c97f;border-color:#87c97f}:host /deep/ .ui-resizable-se{display:none}:host /deep/ .ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-shadow{position:fixed;padding:0;overflow:hidden;width:500px}.center{margin:0 auto}.section-header{padding-top:45px;background-color:#fff}.section-header-link,.section-header-title{color:#848484}.section-header-icon{color:#848484!important} /*# sourceMappingURL=edit-student-score.component.css.map */"]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, course_service_1.CourseService, router_1.ActivatedRoute, router_1.Router])
    ], EditStudentScoreComponent);
    return EditStudentScoreComponent;
}());
exports.EditStudentScoreComponent = EditStudentScoreComponent;
