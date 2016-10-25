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
                course_nav_component_1.CourseNavComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CourseModule);
    return CourseModule;
}());
exports.CourseModule = CourseModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvY291cnNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHNCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELHNDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLHNDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLGtDQUE4Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVELHFDQUFpQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3JFLDZDQUF3QyxtREFBbUQsQ0FBQyxDQUFBO0FBQzVGLHdDQUFvQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQzlFLHVDQUFtQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzNFLHFDQUFpQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBdUJyRTtJQUFBO0lBQTJCLENBQUM7SUFwQjVCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLG1CQUFXO2dCQUNYLDRCQUFZO2dCQUVaLDhCQUFhO2FBQ2Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osa0NBQWU7Z0JBQ2YsMkNBQW1CO2dCQUNuQiwyQ0FBbUI7Z0JBQ25CLG1DQUFlO2dCQUNmLHlDQUFrQjtnQkFDbEIsK0NBQXFCO2dCQUNyQix3REFBeUI7Z0JBQ3pCLDZDQUFvQjtnQkFDcEIseUNBQWtCO2FBQ25CO1NBQ0YsQ0FBQzs7b0JBQUE7SUFDeUIsbUJBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsb0JBQVksZUFBRyxDQUFBIiwiZmlsZSI6ImFwcC9jb3Vyc2UvY291cnNlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7U2hhcmVkTW9kdWxlfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7Y291cnNlUm91dGluZ30gZnJvbSBcIi4vY291cnNlLnJvdXRpbmdcIjtcbmltcG9ydCB7Q291cnNlQ29tcG9uZW50fSBmcm9tIFwiLi9jb3Vyc2UuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvdXJzZUxpc3RDb21wb25lbnR9IGZyb20gXCIuL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZGl0Q291cnNlQ29tcG9uZW50fSBmcm9tIFwiLi9lZGl0LWNvdXJzZS9lZGl0LWNvdXJzZS5jb21wb25lbnRcIjtcbmltcG9ydCB7RWRpdFhQQ29tcG9uZW50fSBmcm9tIFwiLi9lZGl0LXhwL2VkaXQteHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0VkaXRCYWRnZUNvbXBvbmVudH0gZnJvbSBcIi4vZWRpdC1iYWRnZS9lZGl0LWJhZGdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZGl0U3R1ZGVudFNjb3JlQ29tcG9uZW50fSBmcm9tIFwiLi9lZGl0LXN0dWRlbnQtc2NvcmUvZWRpdC1zdHVkZW50LXNjb3JlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZGl0U3R1ZGVudHNDb21wb25lbnR9IGZyb20gXCIuL2VkaXQtc3R1ZGVudHMvZWRpdC1zdHVkZW50cy5jb21wb25lbnRcIjtcbmltcG9ydCB7RWRpdFN0dWRlbnRDb21wb25lbnR9IGZyb20gXCIuL2VkaXQtc3R1ZGVudC9lZGl0LXN0dWRlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvdXJzZU5hdkNvbXBvbmVudH0gZnJvbSBcIi4vY291cnNlLW5hdi9jb3Vyc2UtbmF2LmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuXG4gICAgY291cnNlUm91dGluZ1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb3Vyc2VDb21wb25lbnQsXG4gICAgQ291cnNlTGlzdENvbXBvbmVudCxcbiAgICBFZGl0Q291cnNlQ29tcG9uZW50LFxuICAgIEVkaXRYUENvbXBvbmVudCxcbiAgICBFZGl0QmFkZ2VDb21wb25lbnQsXG4gICAgRWRpdFN0dWRlbnRzQ29tcG9uZW50LFxuICAgIEVkaXRTdHVkZW50U2NvcmVDb21wb25lbnQsXG4gICAgRWRpdFN0dWRlbnRDb21wb25lbnQsXG4gICAgQ291cnNlTmF2Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ291cnNlTW9kdWxlIHt9XG4iXX0=
