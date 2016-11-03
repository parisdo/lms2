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
