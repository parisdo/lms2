"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
            templateUrl: 'edit-profile-student.component.html'
        })
    ], EditProfileStudentComponent);
    return EditProfileStudentComponent;
}());
exports.EditProfileStudentComponent = EditProfileStudentComponent;
