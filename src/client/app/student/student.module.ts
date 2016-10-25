import { NgModule }      from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {studentRouting} from "./student.routing";
import {StudentComponent} from "./student.component";
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard.component";
import {StudentSigninComponent} from "./student-signin/student-signin.component";
import {EditProfileStudentComponent} from "./edit-profile-student/edit-profile-student.component";
import {StudentNavComponent} from "./student-nav/student-nav.component";


@NgModule({
    imports: [
        SharedModule,
        studentRouting
    ],
    declarations: [
        StudentComponent,
        StudentSigninComponent,
        StudentDashboardComponent,
        EditProfileStudentComponent,

        StudentNavComponent
    ]
})
export class StudentModule {}
