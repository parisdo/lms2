import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "../auth/auth-guard.service";
import {StudentComponent} from "./student.component";
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard.component";
import {StudentSigninComponent} from "./student-signin/student-signin.component";
import {EditProfileStudentComponent} from "./edit-profile-student/edit-profile-student.component";

const studentRoutes: Routes = [
    {
        path: 'student',
        component: StudentComponent,
        children: [
            {
                path: 'dashboard',
                component: StudentDashboardComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'edit-profile-student',
                component: EditProfileStudentComponent,
                canActivate: [AuthGuard]
            }
            ,{
                path: '',
                component: StudentSigninComponent,
            }
        ]
    }

];

export const studentRouting: ModuleWithProviders = RouterModule.forChild(studentRoutes);
