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
                print_students_component_1.PrintStudentsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CourseModule);
    return CourseModule;
}());
exports.CourseModule = CourseModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvY291cnNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHNCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELHNDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLHNDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLGtDQUE4Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVELHFDQUFpQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3JFLDZDQUF3QyxtREFBbUQsQ0FBQyxDQUFBO0FBQzVGLHdDQUFvQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQzlFLHVDQUFtQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzNFLHFDQUFpQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3JFLHlDQUFxQywyQ0FBMkMsQ0FBQyxDQUFBO0FBd0JqRjtJQUFBO0lBQTJCLENBQUM7SUFyQjVCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLG1CQUFXO2dCQUNYLDRCQUFZO2dCQUVaLDhCQUFhO2FBQ2Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osa0NBQWU7Z0JBQ2YsMkNBQW1CO2dCQUNuQiwyQ0FBbUI7Z0JBQ25CLG1DQUFlO2dCQUNmLHlDQUFrQjtnQkFDbEIsK0NBQXFCO2dCQUNyQix3REFBeUI7Z0JBQ3pCLDZDQUFvQjtnQkFDcEIseUNBQWtCO2dCQUNsQixpREFBc0I7YUFDdkI7U0FDRixDQUFDOztvQkFBQTtJQUN5QixtQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixvQkFBWSxlQUFHLENBQUEiLCJmaWxlIjoiYXBwL2NvdXJzZS9jb3Vyc2UubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHtjb3Vyc2VSb3V0aW5nfSBmcm9tIFwiLi9jb3Vyc2Uucm91dGluZ1wiO1xuaW1wb3J0IHtDb3Vyc2VDb21wb25lbnR9IGZyb20gXCIuL2NvdXJzZS5jb21wb25lbnRcIjtcbmltcG9ydCB7Q291cnNlTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0VkaXRDb3Vyc2VDb21wb25lbnR9IGZyb20gXCIuL2VkaXQtY291cnNlL2VkaXQtY291cnNlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZGl0WFBDb21wb25lbnR9IGZyb20gXCIuL2VkaXQteHAvZWRpdC14cC5jb21wb25lbnRcIjtcbmltcG9ydCB7RWRpdEJhZGdlQ29tcG9uZW50fSBmcm9tIFwiLi9lZGl0LWJhZGdlL2VkaXQtYmFkZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQge0VkaXRTdHVkZW50U2NvcmVDb21wb25lbnR9IGZyb20gXCIuL2VkaXQtc3R1ZGVudC1zY29yZS9lZGl0LXN0dWRlbnQtc2NvcmUuY29tcG9uZW50XCI7XG5pbXBvcnQge0VkaXRTdHVkZW50c0NvbXBvbmVudH0gZnJvbSBcIi4vZWRpdC1zdHVkZW50cy9lZGl0LXN0dWRlbnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZGl0U3R1ZGVudENvbXBvbmVudH0gZnJvbSBcIi4vZWRpdC1zdHVkZW50L2VkaXQtc3R1ZGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q291cnNlTmF2Q29tcG9uZW50fSBmcm9tIFwiLi9jb3Vyc2UtbmF2L2NvdXJzZS1uYXYuY29tcG9uZW50XCI7XG5pbXBvcnQge1ByaW50U3R1ZGVudHNDb21wb25lbnR9IGZyb20gXCIuL3ByaW50LXN0dWRlbnRzL3ByaW50LXN0dWRlbnRzLmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuXG4gICAgY291cnNlUm91dGluZ1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb3Vyc2VDb21wb25lbnQsXG4gICAgQ291cnNlTGlzdENvbXBvbmVudCxcbiAgICBFZGl0Q291cnNlQ29tcG9uZW50LFxuICAgIEVkaXRYUENvbXBvbmVudCxcbiAgICBFZGl0QmFkZ2VDb21wb25lbnQsXG4gICAgRWRpdFN0dWRlbnRzQ29tcG9uZW50LFxuICAgIEVkaXRTdHVkZW50U2NvcmVDb21wb25lbnQsXG4gICAgRWRpdFN0dWRlbnRDb21wb25lbnQsXG4gICAgQ291cnNlTmF2Q29tcG9uZW50LFxuICAgIFByaW50U3R1ZGVudHNDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb3Vyc2VNb2R1bGUge31cbiJdfQ==
