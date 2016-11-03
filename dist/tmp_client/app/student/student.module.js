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
var shared_module_1 = require("../shared/shared.module");
var student_routing_1 = require("./student.routing");
var student_component_1 = require("./student.component");
var student_dashboard_component_1 = require("./student-dashboard/student-dashboard.component");
var student_signin_component_1 = require("./student-signin/student-signin.component");
var edit_profile_student_component_1 = require("./edit-profile-student/edit-profile-student.component");
var student_nav_component_1 = require("./student-nav/student-nav.component");
var StudentModule = (function () {
    function StudentModule() {
    }
    StudentModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                student_routing_1.studentRouting
            ],
            declarations: [
                student_component_1.StudentComponent,
                student_signin_component_1.StudentSigninComponent,
                student_dashboard_component_1.StudentDashboardComponent,
                edit_profile_student_component_1.EditProfileStudentComponent,
                student_nav_component_1.StudentNavComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], StudentModule);
    return StudentModule;
}());
exports.StudentModule = StudentModule;
