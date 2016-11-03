import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeachComponent} from "./teach.component";
import {TeachListComponent} from "./teach-list/teach-list.component";
import {AuthGuard} from "../auth/auth-guard.service";
import {AddCourseComponent} from "./add-course/add-course.component";
import {SigninComponent} from "../auth/signin.component";
import {EditTeacherComponent} from "./edit-teacher/edit-teacher.component";

const teachRoutes: Routes = [
  {
    path: 'teach',
    component: TeachComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TeachListComponent,
      },
      {
        path: 'add-course',
        component: AddCourseComponent
      },
      {
        path: 'edit-teacher',
        component: EditTeacherComponent
      }
    ]

  }
];

export const teachRouting: ModuleWithProviders = RouterModule.forChild(teachRoutes);
