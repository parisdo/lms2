import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CourseComponent} from "./course.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {EditCourseComponent} from "./edit-course/edit-course.component";
import {EditXPComponent} from "./edit-xp/edit-xp.component";
import {EditBadgeComponent} from "./edit-badge/edit-badge.component";
import {EditStudentScoreComponent} from "./edit-student-score/edit-student-score.component";
import {EditStudentsComponent} from "./edit-students/edit-students.component";
import {EditStudentComponent} from "./edit-student/edit-student.component";
import {PrintStudentsComponent} from "./print-students/print-students.component";
import {UpdateStudentComponent} from "./update-student/update-student.component";

const courseRoutes: Routes = [
  {
    path: 'course',
    component: CourseComponent,
    children: [
      {path: '',                    component: CourseListComponent},
      {path: 'edit-course',         component: EditCourseComponent},
      {path: 'edit-xp',             component: EditXPComponent},
      {path: 'edit-badge',          component: EditBadgeComponent},
      {path: 'edit-students',       component: EditStudentsComponent },
      {path: 'edit-student',        component: EditStudentComponent },
      {path: 'edit-student-score',  component: EditStudentScoreComponent },
      {path: 'update-student',      component: UpdateStudentComponent },
      {path: 'print-students',      component: PrintStudentsComponent }
    ]
  }
];

export const courseRouting: ModuleWithProviders = RouterModule.forChild(courseRoutes);
