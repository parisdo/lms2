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
var student_1 = require("../../models/student");
var forms_1 = require("@angular/forms");
var EditProfileStudentComponent = (function () {
    function EditProfileStudentComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.student = new student_1.Student('55080501', 'มานี', 'ดีใจ', 'Khjde093');
        this.createForm();
    }
    EditProfileStudentComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'username': ['', [forms_1.Validators.required]],
            'name': ['', [forms_1.Validators.required]],
            'password': ['', [forms_1.Validators.required]],
            'confirm_password': ['', [forms_1.Validators.required]]
        });
    };
    EditProfileStudentComponent.prototype.reset = function () {
        this.createForm();
    };
    EditProfileStudentComponent.prototype.signin = function (student) {
        this.student = new student_1.Student(student.username, student.name, student.password);
        console.log(this.student);
    };
    EditProfileStudentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-profile-student',
            template: "<div class=\"container\"  style=\"max-width: 800px; display: block\">     <div class=\"row box-wrapper\" style=\"padding: 2rem;\">     <form style=\"max-width: 800px;\" class=\"center\" [formGroup]=\"userForm\"  (ngSubmit)=\"signin(userForm.value)\" novalidate autocomplete=\"off\">         <h5 style=\"margin-bottom: 15px\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27  <hr></h5>             <div class=\"form-group row\">                 <label for=\"username\" class=\"col-sm-3 col-form-label\">Username</label>                 <div class=\"col-sm-9\">                     <input type=\"text\" class=\"form-control\" id=\"username\" name=\"id\" formControlName=\"username\" [(ngModel)]=\"student.username\">                 </div>             </div>             <div class=\"form-group row\">                 <label for=\"name\" class=\"col-sm-3 col-form-label\">\u0E0A\u0E37\u0E48\u0E2D</label>                 <div class=\"col-sm-9\">                     <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" formControlName=\"name\" [(ngModel)]=\"student.name\">                 </div>             </div>             <hr>             <div class=\"form-group row\">                 <label for=\"password\" class=\"col-sm-3 col-form-label\">Password</label>                 <div class=\"col-sm-9\">                     <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"password\" formControlName=\"password\" [(ngModel)]=\"student.password\">                 </div>             </div>             <div class=\"form-group row\">                 <label for=\"password\" class=\"col-sm-3 col-form-label\">Confirm Password</label>                 <div class=\"col-sm-9\">                     <input type=\"password\" class=\"form-control\" id=\"confirm_password\" name=\"confirm_password\" formControlName=\"confirm_password\">                 </div>             </div>             <div class=\"form-group row pull-xs-right\" style=\"margin-top: 15px\">                 <div class=\"col-xs-12\">                     <button type=\"button\" class=\"btn btn-secondary\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>                     <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"!userForm.valid\">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01</button>                 </div>             </div>     </form>    </div> </div>"
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], EditProfileStudentComponent);
    return EditProfileStudentComponent;
}());
exports.EditProfileStudentComponent = EditProfileStudentComponent;
