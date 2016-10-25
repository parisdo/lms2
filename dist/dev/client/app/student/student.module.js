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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFDakQsa0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFDckQsNENBQXdDLGlEQUFpRCxDQUFDLENBQUE7QUFDMUYseUNBQXFDLDJDQUEyQyxDQUFDLENBQUE7QUFDakYsK0NBQTBDLHVEQUF1RCxDQUFDLENBQUE7QUFDbEcsc0NBQWtDLHFDQUFxQyxDQUFDLENBQUE7QUFpQnhFO0lBQUE7SUFBNEIsQ0FBQztJQWQ3QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCw0QkFBWTtnQkFDWixnQ0FBYzthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDVixvQ0FBZ0I7Z0JBQ2hCLGlEQUFzQjtnQkFDdEIsdURBQXlCO2dCQUN6Qiw0REFBMkI7Z0JBRTNCLDJDQUFtQjthQUN0QjtTQUNKLENBQUM7O3FCQUFBO0lBQzBCLG9CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixxQkFBYSxnQkFBRyxDQUFBIiwiZmlsZSI6ImFwcC9zdHVkZW50L3N0dWRlbnQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHtzdHVkZW50Um91dGluZ30gZnJvbSBcIi4vc3R1ZGVudC5yb3V0aW5nXCI7XG5pbXBvcnQge1N0dWRlbnRDb21wb25lbnR9IGZyb20gXCIuL3N0dWRlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1N0dWRlbnREYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuL3N0dWRlbnQtZGFzaGJvYXJkL3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdHVkZW50U2lnbmluQ29tcG9uZW50fSBmcm9tIFwiLi9zdHVkZW50LXNpZ25pbi9zdHVkZW50LXNpZ25pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7RWRpdFByb2ZpbGVTdHVkZW50Q29tcG9uZW50fSBmcm9tIFwiLi9lZGl0LXByb2ZpbGUtc3R1ZGVudC9lZGl0LXByb2ZpbGUtc3R1ZGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7U3R1ZGVudE5hdkNvbXBvbmVudH0gZnJvbSBcIi4vc3R1ZGVudC1uYXYvc3R1ZGVudC1uYXYuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgc3R1ZGVudFJvdXRpbmdcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdHVkZW50Q29tcG9uZW50LFxuICAgICAgICBTdHVkZW50U2lnbmluQ29tcG9uZW50LFxuICAgICAgICBTdHVkZW50RGFzaGJvYXJkQ29tcG9uZW50LFxuICAgICAgICBFZGl0UHJvZmlsZVN0dWRlbnRDb21wb25lbnQsXG5cbiAgICAgICAgU3R1ZGVudE5hdkNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3R1ZGVudE1vZHVsZSB7fVxuIl19
