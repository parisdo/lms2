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
var teach_routing_1 = require("./teach.routing");
var teach_component_1 = require("./teach.component");
var teach_list_component_1 = require("./teach-list/teach-list.component");
var add_course_component_1 = require("./add-course/add-course.component");
var edit_teacher_component_1 = require("./edit-teacher/edit-teacher.component");
var TeachModule = (function () {
    function TeachModule() {
    }
    TeachModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                teach_routing_1.teachRouting,
            ],
            declarations: [
                teach_component_1.TeachComponent,
                teach_list_component_1.TeachListComponent,
                add_course_component_1.AddCourseComponent,
                edit_teacher_component_1.EditTeacherComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TeachModule);
    return TeachModule;
}());
exports.TeachModule = TeachModule;
