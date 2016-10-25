"use strict";
var router_1 = require('@angular/router');
var auth_guard_service_1 = require("../auth/auth-guard.service");
var student_component_1 = require("./student.component");
var student_dashboard_component_1 = require("./student-dashboard/student-dashboard.component");
var student_signin_component_1 = require("./student-signin/student-signin.component");
var edit_profile_student_component_1 = require("./edit-profile-student/edit-profile-student.component");
var studentRoutes = [
    {
        path: 'student',
        component: student_component_1.StudentComponent,
        children: [
            {
                path: 'dashboard',
                component: student_dashboard_component_1.StudentDashboardComponent,
                canActivate: [auth_guard_service_1.AuthGuard]
            },
            {
                path: 'edit-profile-student',
                component: edit_profile_student_component_1.EditProfileStudentComponent,
                canActivate: [auth_guard_service_1.AuthGuard]
            },
            {
                path: '',
                component: student_signin_component_1.StudentSigninComponent,
            }
        ]
    }
];
exports.studentRouting = router_1.RouterModule.forChild(studentRoutes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsbUNBQXdCLDRCQUE0QixDQUFDLENBQUE7QUFDckQsa0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFDckQsNENBQXdDLGlEQUFpRCxDQUFDLENBQUE7QUFDMUYseUNBQXFDLDJDQUEyQyxDQUFDLENBQUE7QUFDakYsK0NBQTBDLHVEQUF1RCxDQUFDLENBQUE7QUFFbEcsSUFBTSxhQUFhLEdBQVc7SUFDMUI7UUFDSSxJQUFJLEVBQUUsU0FBUztRQUNmLFNBQVMsRUFBRSxvQ0FBZ0I7UUFDM0IsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSx1REFBeUI7Z0JBQ3BDLFdBQVcsRUFBRSxDQUFDLDhCQUFTLENBQUM7YUFDM0I7WUFDRDtnQkFDSSxJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixTQUFTLEVBQUUsNERBQTJCO2dCQUN0QyxXQUFXLEVBQUUsQ0FBQyw4QkFBUyxDQUFDO2FBQzNCO1lBQ0E7Z0JBQ0csSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLGlEQUFzQjthQUNwQztTQUNKO0tBQ0o7Q0FFSixDQUFDO0FBRVcsc0JBQWMsR0FBd0IscUJBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL3N0dWRlbnQvc3R1ZGVudC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9ICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tIFwiLi4vYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7U3R1ZGVudENvbXBvbmVudH0gZnJvbSBcIi4vc3R1ZGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7U3R1ZGVudERhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vc3R1ZGVudC1kYXNoYm9hcmQvc3R1ZGVudC1kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge1N0dWRlbnRTaWduaW5Db21wb25lbnR9IGZyb20gXCIuL3N0dWRlbnQtc2lnbmluL3N0dWRlbnQtc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZGl0UHJvZmlsZVN0dWRlbnRDb21wb25lbnR9IGZyb20gXCIuL2VkaXQtcHJvZmlsZS1zdHVkZW50L2VkaXQtcHJvZmlsZS1zdHVkZW50LmNvbXBvbmVudFwiO1xuXG5jb25zdCBzdHVkZW50Um91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnc3R1ZGVudCcsXG4gICAgICAgIGNvbXBvbmVudDogU3R1ZGVudENvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFN0dWRlbnREYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdlZGl0LXByb2ZpbGUtc3R1ZGVudCcsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBFZGl0UHJvZmlsZVN0dWRlbnRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAse1xuICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogU3R1ZGVudFNpZ25pbkNvbXBvbmVudCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cblxuXTtcblxuZXhwb3J0IGNvbnN0IHN0dWRlbnRSb3V0aW5nOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHN0dWRlbnRSb3V0ZXMpO1xuIl19
