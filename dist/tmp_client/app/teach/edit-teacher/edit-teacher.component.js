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
var forms_1 = require('@angular/forms');
var router_1 = require("@angular/router");
var teacher_1 = require("../../models/teacher");
var teacher_service_1 = require("../../services/teacher.service");
var auth_service_1 = require("../../auth/auth.service");
var validation_service_1 = require("../../services/validation.service");
var course_service_1 = require("../../services/course.service");
var message_service_1 = require('../../services/message-service');
var config_1 = require("../../services/config");
var EditTeacherComponent = (function () {
    function EditTeacherComponent(authService, teacherService, formBuilder, router, courseService) {
        this.authService = authService;
        this.teacherService = teacherService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.courseService = courseService;
        this.teacher = new teacher_1.Teacher;
        this.msgs = [];
        this.fakeImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoL…FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==';
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 150,
            resizeMaxWidth: 150
        };
        this.newImage = false;
        this.createForm();
    }
    EditTeacherComponent.prototype.ngOnInit = function () {
        if (this.teacherService.teacher != null) {
            this.teacher = this.teacherService.teacher;
            this.teacher.image = (config_1.publicUrl + "/teachers/logo/") + this.teacher.image;
            this.image = this.teacher.image;
        }
        else {
            this.router.navigate(['/teach']);
        }
    };
    EditTeacherComponent.prototype.selected = function (imageResult) {
        this.newImage = true;
        this.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    EditTeacherComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'name': ['', [forms_1.Validators.required]],
            'image': [''],
            'title': ['นาย'],
            'position': ['ครูอัตราจ้าง'],
            'id_card': ['', [forms_1.Validators.required, validation_service_1.ValidationService.isNumber, forms_1.Validators.minLength(13), forms_1.Validators.maxLength(13)]],
            'phone': ['', [forms_1.Validators.required, validation_service_1.ValidationService.isNumber]],
            'address': ['', [forms_1.Validators.required]],
            'teaching_level': ['', [forms_1.Validators.required]],
            'institution': ['', [forms_1.Validators.required]],
            'province': ['', [forms_1.Validators.required]]
        });
    };
    EditTeacherComponent.prototype.reset = function () {
        this.createForm();
    };
    EditTeacherComponent.prototype.onSubmit = function (teacher) {
        var _this = this;
        if (this.newImage) {
            this.teacher.image = this.image;
        }
        else {
            var teacherPath = (config_1.publicUrl + "teachers/logo/").length;
            this.teacher.image = this.teacher.image.substring(teacherPath);
        }
        console.log(this.teacher.image);
        this.teacherService.editTeacherProfile(this.teacher)
            .subscribe(function (data) {
            if (data.status == "success") {
                _this.showMessage(message_service_1.msg.getRegisterMessage(200));
            }
            else {
                _this.showMessage(message_service_1.msg.getRegisterMessage(500));
            }
        }, function (error) { return console.log(error); });
    };
    EditTeacherComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    EditTeacherComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditTeacherComponent.prototype.ngOnDestroy = function () { };
    EditTeacherComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-teacher',
            template: "<p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>  <div class=\"section-header\">   <div class=\"container\" style=\"margin-top: 55px; padding-bottom: 15px;\">     <div class=\"row\">       <div class=\"col-xs-12\">         <a class=\"section-header-link link\" (click)=\"cancel()\" routerLinkActive=\"true\">           <i class=\"section-header-icon fa fa-chevron-left\" aria-hidden=\"true\"></i> \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A</a>         <h3 class=\"section-header-title\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</h3>       </div>     </div>   </div> </div>  <div class=\"lms-body\">   <div class=\"container\">     <div class=\"row box-wrapper\">       <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit(userForm.value)\" style=\"padding: 15px; \" autocomplete=\"off\"             novalidate>         <div class=\"col-md-4\">            <div class=\"form-group row\">             <div class=\"col-sm-10\">               <img class=\"img-responsive center\" [src]=\"image\" [hidden]=\"!image\" style=\"margin-bottom: 15px\">               <label class=\"btn btn-info btn-sm\" for=\"file-selector\" style=\"display: block\">                 <input id=\"file-selector\" type=\"file\" image-upload (imageSelected)=\"selected($event)\"                        [resizeOptions]=\"resizeOptions\" style=\"display:none;\">                 \u0E43\u0E2A\u0E48\u0E23\u0E39\u0E1B               </label>               <small class='text-muted' [hidden]=\"image\">\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E43\u0E2A\u0E48\u0E23\u0E39\u0E1B (\u0E43\u0E2A\u0E48\u0E23\u0E39\u0E1B\u0E44\u0E1F\u0E25\u0E4C .jpg, .jpeg)</small>               <small class='text-muted' style=\"font-size: 10px\" id=\"upload-file-info\"></small>             </div>           </div>          </div>         <div class=\"col-md-8\">            <div class=\"form-group row\">             <label for=\"title\" class=\"col-sm-4 col-form-label\">\u0E04\u0E33\u0E19\u0E33\u0E2B\u0E19\u0E49\u0E32\u0E0A\u0E37\u0E48\u0E2D *</label>             <div class=\"col-sm-8\">               <select class=\"custom-select\" id=\"title\" name=\"title\" formControlName=\"title\" [(ngModel)]=\"teacher.title\">                 <option value=\"\u0E19\u0E32\u0E22\">\u0E19\u0E32\u0E22</option>                 <option value=\"\u0E19\u0E32\u0E07\">\u0E19\u0E32\u0E07</option>                 <option value=\"\u0E19\u0E32\u0E07\u0E2A\u0E32\u0E27\">\u0E19\u0E32\u0E07\u0E2A\u0E32\u0E27</option>                 <option value=\"\u0E2D\u0E37\u0E48\u0E19\u0E46\">\u0E2D\u0E37\u0E48\u0E19\u0E46</option>               </select>               <control-messages [control]=\"userForm.controls.title\"></control-messages>             </div>           </div>            <div class=\"form-group row\">             <label for=\"name\" class=\"col-sm-4 col-form-label\">\u0E0A\u0E37\u0E48\u0E2D - \u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 *</label>             <div class=\"col-sm-8\">               <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" formControlName=\"name\"                      [(ngModel)]=\"teacher.name\">               <control-messages [control]=\"userForm.controls.name\"></control-messages>             </div>           </div>             <div class=\"form-group row\">             <label for=\"position\" class=\"col-sm-4 col-form-label\">\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 / \u0E27\u0E34\u0E17\u0E22\u0E10\u0E32\u0E19\u0E30</label>             <div class=\"col-sm-8\">               <select class=\"custom-select\" id=\"position\" name=\"position\" formControlName=\"position\"                       [(ngModel)]=\"teacher.position\">                 <option value=\"\u0E04\u0E23\u0E39\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E08\u0E49\u0E32\u0E07\">\u0E04\u0E23\u0E39\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E08\u0E49\u0E32\u0E07</option>                 <option value=\"\u0E04\u0E23\u0E39\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E43\u0E2B\u0E21\u0E48/\u0E04\u0E23\u0E39\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22\">\u0E04\u0E23\u0E39\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E43\u0E2B\u0E21\u0E48/\u0E04\u0E23\u0E39\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22</option>                 <option value=\"\u0E04\u0E23\u0E39\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E01\u0E32\u0E23\">\u0E04\u0E23\u0E39\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E01\u0E32\u0E23</option>                 <option value=\"\u0E04\u0E23\u0E39\u0E0A\u0E33\u0E19\u0E32\u0E0D\u0E01\u0E32\u0E23\">\u0E04\u0E23\u0E39\u0E0A\u0E33\u0E19\u0E32\u0E0D\u0E01\u0E32\u0E23</option>                 <option value=\"\u0E04\u0E23\u0E39\u0E0A\u0E33\u0E19\u0E32\u0E0D\u0E01\u0E32\u0E23\u0E1E\u0E34\u0E40\u0E28\u0E29\">\u0E04\u0E23\u0E39\u0E0A\u0E33\u0E19\u0E32\u0E0D\u0E01\u0E32\u0E23\u0E1E\u0E34\u0E40\u0E28\u0E29</option>                 <option value=\"\u0E04\u0E23\u0E38\u0E39\u0E0A\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E32\u0E0D\">\u0E04\u0E23\u0E38\u0E0C\u0E0A\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E32\u0E0D</option>                 <option value=\"\u0E04\u0E23\u0E39\u0E0A\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E32\u0E0D\u0E1E\u0E34\u0E40\u0E28\u0E29\">\u0E04\u0E23\u0E38\u0E0C\u0E0A\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E32\u0E0D\u0E1E\u0E34\u0E40\u0E28\u0E29</option>                 <option value=\"\u0E28\u0E36\u0E01\u0E29\u0E32\u0E19\u0E34\u0E40\u0E17\u0E28\u0E01\u0E4C\">\u0E28\u0E36\u0E01\u0E29\u0E32\u0E19\u0E34\u0E40\u0E17\u0E28\u0E01\u0E4C</option>                 <option value=\"\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\">\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32</option>                 <option value=\"\u0E04\u0E23\u0E39\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E2D\u0E01\u0E0A\u0E19\">\u0E04\u0E23\u0E39\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E2D\u0E01\u0E0A\u0E19</option>                 <option value=\"\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E08\u0E32\u0E23\u0E22\u0E4C\">\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E08\u0E32\u0E23\u0E22\u0E4C</option>                 <option value=\"\u0E23\u0E2D\u0E07\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E08\u0E32\u0E23\u0E22\u0E4C\">\u0E23\u0E2D\u0E07\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E08\u0E32\u0E23\u0E22\u0E4C</option>                 <option value=\"\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E08\u0E32\u0E23\u0E22\u0E4C\">\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E08\u0E32\u0E23\u0E22\u0E4C</option>                 <option value=\"\u0E2D\u0E37\u0E48\u0E19\u0E46\">\u0E2D\u0E37\u0E48\u0E19\u0E46</option>               </select>               <control-messages [control]=\"userForm.controls.position\"></control-messages>             </div>           </div>             <div class=\"form-group row\">             <label for=\"id_card\" class=\"col-sm-4 col-form-label\">\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19</label>             <div class=\"col-sm-8\">               <input type=\"text\" class=\"form-control\" id=\"id_card\" name=\"id_card\" formControlName=\"id_card\"                      [(ngModel)]=\"teacher.id_card\">               <control-messages [control]=\"userForm.controls.id_card\"></control-messages>             </div>           </div>            <div class=\"form-group row\">             <label for=\"phone\" class=\"col-sm-4 col-form-label\">\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C</label>             <div class=\"col-sm-8\">               <input type=\"text\" class=\"form-control\" id=\"phone\" name=\"phone\" formControlName=\"phone\"                      [(ngModel)]=\"teacher.phone\">               <control-messages [control]=\"userForm.controls.phone\"></control-messages>             </div>           </div>            <div class=\"form-group row\">             <label for=\"address\" class=\"col-sm-4 col-form-label\">\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E44\u0E14\u0E49</label>             <div class=\"col-sm-8\">               <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" formControlName=\"address\"                      [(ngModel)]=\"teacher.address\">               <control-messages [control]=\"userForm.controls.address\"></control-messages>             </div>           </div>            <div class=\"form-group row\">             <label for=\"teaching_level\" class=\"col-sm-4 col-form-label\">\u0E2A\u0E2D\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19</label>             <div class=\"col-sm-8\">               <input type=\"text\" class=\"form-control\" id=\"teaching_level\" name=\"password\"                      formControlName=\"teaching_level\" [(ngModel)]=\"teacher.teaching_level\">               <control-messages [control]=\"userForm.controls.teaching_level\"></control-messages>             </div>           </div>            <div class=\"form-group row\">             <label for=\"institution\" class=\"col-sm-4 col-form-label\">\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E16\u0E32\u0E1A\u0E31\u0E19</label>             <div class=\"col-sm-8\">               <input type=\"text\" class=\"form-control\" id=\"institution\" name=\"institution\" formControlName=\"institution\"                      [(ngModel)]=\"teacher.institution\">               <control-messages [control]=\"userForm.controls.institution\"></control-messages>             </div>           </div>            <div class=\"form-group row\">             <label for=\"province\" class=\"col-sm-4 col-form-label\">\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14</label>             <div class=\"col-sm-8\">               <input type=\"text\" class=\"form-control\" id=\"province\" name=\"province\" formControlName=\"province\"                      [(ngModel)]=\"teacher.province\">               <control-messages [control]=\"userForm.controls.province\"></control-messages>             </div>           </div>            <hr>           <div class=\"form-group row pull-xs-right\">             <div style=\"margin-right: 15px\">               <button type=\"button\" class=\"btn  btn-secondary\" (click)=\"reset()\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>               <button type=\"submit\" class=\"btn  btn-info\" [disabled]=\"!userForm.valid\">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01</button>             </div>           </div>          </div>         </form>     </div>   </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{font-size:18px;color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}body{background-color:#f0f2f1}.lms-body,body{font-family:proxima-nova,sans-serif;overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.lms-body{padding-top:45px;padding-bottom:90px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.rowTable,.tdTable,.thTable{padding-top:5px;padding-bottom:5px;margin-bottom:5px}.thTable{background-color:#f0f2f1}.tdTable{border-bottom:1px solid #f0f2f1}:host/deep/.ui-growl-item-container.ui-state-highlight.ui-growl-message-info{background-color:#87c97f;border-color:#87c97f}:host /deep/ .ui-resizable-se{display:none}:host /deep/ .ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-shadow{position:fixed;padding:0;overflow:hidden;width:500px}.center{margin:0 auto}.section-header{padding-top:45px;background-color:#fff}.section-header-link,.section-header-title{color:#848484}.section-header-icon{color:#848484!important} /*# sourceMappingURL=edit-teacher.component.css.map */"],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, teacher_service_1.TeacherService, forms_1.FormBuilder, router_1.Router, course_service_1.CourseService])
    ], EditTeacherComponent);
    return EditTeacherComponent;
}());
exports.EditTeacherComponent = EditTeacherComponent;
