"use strict";
var router_1 = require('@angular/router');
var course_component_1 = require("./course.component");
var course_list_component_1 = require("./course-list/course-list.component");
var edit_course_component_1 = require("./edit-course/edit-course.component");
var edit_xp_component_1 = require("./edit-xp/edit-xp.component");
var edit_badge_component_1 = require("./edit-badge/edit-badge.component");
var edit_student_score_component_1 = require("./edit-student-score/edit-student-score.component");
var edit_students_component_1 = require("./edit-students/edit-students.component");
var edit_student_component_1 = require("./edit-student/edit-student.component");
var print_students_component_1 = require("./print-students/print-students.component");
var update_student_component_1 = require("./update-student/update-student.component");
var courseRoutes = [
    {
        path: 'course',
        component: course_component_1.CourseComponent,
        children: [
            { path: '', component: course_list_component_1.CourseListComponent },
            { path: 'edit-course', component: edit_course_component_1.EditCourseComponent },
            { path: 'edit-xp', component: edit_xp_component_1.EditXPComponent },
            { path: 'edit-badge', component: edit_badge_component_1.EditBadgeComponent },
            { path: 'edit-students', component: edit_students_component_1.EditStudentsComponent },
            { path: 'edit-student', component: edit_student_component_1.EditStudentComponent },
            { path: 'edit-student-score', component: edit_student_score_component_1.EditStudentScoreComponent },
            { path: 'update-student', component: update_student_component_1.UpdateStudentComponent },
            { path: 'print-students', component: print_students_component_1.PrintStudentsComponent }
        ]
    }
];
exports.courseRouting = router_1.RouterModule.forChild(courseRoutes);
