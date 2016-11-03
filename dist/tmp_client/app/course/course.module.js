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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var course_routing_1 = require("./course.routing");
var course_component_1 = require("./course.component");
var course_list_component_1 = require("./course-list/course-list.component");
var edit_course_component_1 = require("./edit-course/edit-course.component");
var edit_xp_component_1 = require("./edit-xp/edit-xp.component");
var edit_badge_component_1 = require("./edit-badge/edit-badge.component");
var edit_student_score_component_1 = require("./edit-student-score/edit-student-score.component");
var edit_students_component_1 = require("./edit-students/edit-students.component");
var edit_student_component_1 = require("./edit-student/edit-student.component");
var course_nav_component_1 = require("./course-nav/course-nav.component");
var print_students_component_1 = require("./print-students/print-students.component");
var update_student_component_1 = require("./update-student/update-student.component");
var CourseModule = (function () {
    function CourseModule() {
    }
    CourseModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                course_routing_1.courseRouting
            ],
            declarations: [
                course_component_1.CourseComponent,
                course_list_component_1.CourseListComponent,
                edit_course_component_1.EditCourseComponent,
                edit_xp_component_1.EditXPComponent,
                edit_badge_component_1.EditBadgeComponent,
                edit_students_component_1.EditStudentsComponent,
                edit_student_score_component_1.EditStudentScoreComponent,
                edit_student_component_1.EditStudentComponent,
                course_nav_component_1.CourseNavComponent,
                update_student_component_1.UpdateStudentComponent,
                print_students_component_1.PrintStudentsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CourseModule);
    return CourseModule;
}());
exports.CourseModule = CourseModule;
