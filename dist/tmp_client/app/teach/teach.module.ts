import { NgModule }      from '@angular/core';
import {SharedModule} from "../shared/shared.module";

import {teachRouting} from "./teach.routing";
import {TeachComponent} from "./teach.component";
import {TeachListComponent} from "./teach-list/teach-list.component";
import {AddCourseComponent} from "./add-course/add-course.component";
import {EditTeacherComponent} from "./edit-teacher/edit-teacher.component";

@NgModule({
  imports: [
    SharedModule,
    teachRouting,
  ],
  declarations: [
    TeachComponent,
    TeachListComponent,
    AddCourseComponent,
    EditTeacherComponent
  ]
})
export class TeachModule {}
