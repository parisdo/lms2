import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {courseRouting} from "./course.routing";
import {CourseComponent} from "./course.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {EditCourseComponent} from "./edit-course/edit-course.component";
import {EditXPComponent} from "./edit-xp/edit-xp.component";
import {EditBadgeComponent} from "./edit-badge/edit-badge.component";
import {EditStudentScoreComponent} from "./edit-student-score/edit-student-score.component";
import {EditStudentsComponent} from "./edit-students/edit-students.component";
import {EditStudentComponent} from "./edit-student/edit-student.component";
import {CourseNavComponent} from "./course-nav/course-nav.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

    courseRouting
  ],
  declarations: [
    CourseComponent,
    CourseListComponent,
    EditCourseComponent,
    EditXPComponent,
    EditBadgeComponent,
    EditStudentsComponent,
    EditStudentScoreComponent,
    EditStudentComponent,
    CourseNavComponent
  ]
})
export class CourseModule {}
