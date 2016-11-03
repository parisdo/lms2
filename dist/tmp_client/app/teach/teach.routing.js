"use strict";
var router_1 = require('@angular/router');
var teach_component_1 = require("./teach.component");
var teach_list_component_1 = require("./teach-list/teach-list.component");
var auth_guard_service_1 = require("../auth/auth-guard.service");
var add_course_component_1 = require("./add-course/add-course.component");
var edit_teacher_component_1 = require("./edit-teacher/edit-teacher.component");
var teachRoutes = [
    {
        path: 'teach',
        component: teach_component_1.TeachComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: '',
                component: teach_list_component_1.TeachListComponent,
            },
            {
                path: 'add-course',
                component: add_course_component_1.AddCourseComponent
            },
            {
                path: 'edit-teacher',
                component: edit_teacher_component_1.EditTeacherComponent
            }
        ]
    }
];
exports.teachRouting = router_1.RouterModule.forChild(teachRoutes);
