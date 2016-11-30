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
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../../auth/auth.service");
var student_1 = require("../../models/student");
var student_service_1 = require("../../services/student.service");
var studentSignin = (function () {
    function studentSignin(email, password) {
        this.email = email;
        this.password = password;
    }
    return studentSignin;
}());
exports.studentSignin = studentSignin;
var StudentSigninComponent = (function () {
    function StudentSigninComponent(studentService, authService, formBuilder, router) {
        this.studentService = studentService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.student = new student_1.Student();
        this.setMessage();
        this.createForm();
    }
    StudentSigninComponent.prototype.setMessage = function () {
    };
    StudentSigninComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'username': ['', [forms_1.Validators.required]],
            'password': ['', [forms_1.Validators.required]]
        });
    };
    StudentSigninComponent.prototype.reset = function () {
        this.createForm();
    };
    StudentSigninComponent.prototype.signin = function (student) {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.student = new studentSignin(student.username, student.password);
        this.authService.signin(this.student)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success' && data.data.role == 'student') {
                _this.authService.setToken(data.data.token, 'student', data.data.id);
                _this.router.navigate(['./student/dashboard']);
            }
            else if (data.data.role != 'student') {
                _this.errorMessage = 'username or password not match!';
            }
            else {
                _this.errorMessage = data.errormessage;
            }
        }, function (error) { console.log(error); });
    };
    StudentSigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'student-signin',
            template: "<div class=\"lms-body\">   <div class=\"container\">     <div class=\"row box-wrapper\">       <h4 class=\"title text-center\">\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19</h4>       <p style=\"margin-bottom: 15px\"><small *ngIf=\"this.authService.isLoggedIn()\" class=\"text-muted\" >{{message}}</small></p>       <form [formGroup]=\"userForm\"  (ngSubmit)=\"signin(userForm.value)\" novalidate >         <div class=\"form-group row\">           <label for=\"username\" class=\"col-sm-3 col-form-label\">Username</label>           <div class=\"col-sm-9\">             <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\"  name=\"username\" formControlName=\"username\">             <control-messages [control]=\"userForm.controls.username\"></control-messages>           </div>         </div>         <div class=\"form-group row\">           <label for=\"password\" class=\"col-sm-3 col-form-label\">Password</label>           <div class=\"col-sm-9\">             <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"password\" formControlName=\"password\">             <control-messages [control]=\"userForm.controls.password\"></control-messages>           </div>         </div>         <small class=\"form-text text-muted offset-sm-3 col-sm-9\" *ngIf=\"errorMessage != null\" style=\"float: left; margin-bottom: 15px;\">{{errorMessage}}</small>         <div class=\"form-group row submit\">           <div class=\"col-sm-12\">             <button type=\"submit\" class=\"btn btn-info btn-block\" [disabled]=\"!userForm.valid\">\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A</button>           </div>         </div>       </form>     </div>   </div> </div>  <p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{font-size:18px;color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}body{background-color:#f0f2f1}.lms-body,body{overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.btn,.lms-body,.modal,.modal-body,.modal-header,.nav,.section-header-link,.section-header-title,a,body,h1,h2,h3,h4,h5,input,label,p,small{font-family:Kanit,sans-serif!important;font-weight:400!important}.lms-body{padding-top:45px;padding-bottom:90px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.rowTable,.tdTable,.thTable{padding-top:5px;padding-bottom:5px;margin-bottom:5px}.thTable{background-color:#f0f2f1}.tdTable{border-bottom:1px solid #f0f2f1}:host/deep/.ui-growl-item-container.ui-state-highlight.ui-growl-message-success{background-color:#87c97f;border-color:#87c97f}:host /deep/ .ui-resizable-se{display:none}:host /deep/ .ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-shadow{position:fixed;padding:0;overflow:hidden;width:500px}.center{margin:0 auto}.box-wrapper{margin-top:90px;max-width:550px;padding:45px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.title{margin-top:-15px;padding-bottom:15px}.submit{margin-top:45px;margin-bottom:-15px} /*# sourceMappingURL=student-signin.component.css.map */"],
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService, auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], StudentSigninComponent);
    return StudentSigninComponent;
}());
exports.StudentSigninComponent = StudentSigninComponent;
