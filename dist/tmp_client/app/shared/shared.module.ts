import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonpModule, HttpModule} from "@angular/http";

import { RouterModule } from '@angular/router';
import {ImageUploadModule} from "ng2-imageupload";

//PrimeNG Module
import {GrowlModule} from "primeng/components/growl/growl";
import {HeaderComponent} from "../header/header.component";
import {ControlMessagesComponent} from "./control-messages.component";
import {FooterComponent} from "../footer/footer.component";
import {ValidationService} from "../services/validation.service";
import {appRoutingProviders} from "../app.routes";
import {TeacherService} from "../services/teacher.service";
import {TeachNavComponent} from "../teach/teach-nav/teach-nav.component";
import {CourseService} from "../services/course.service";
import {FilterData} from "./pipes/filterdata.pipe";
import {StudentService} from "../services/student.service";
import {ProgressBarModule} from "primeng/components/progressbar/progressbar";
import {WebboardService} from "../services/webboard.service";
import {EqualValidator} from "../services/equal-validator.directive";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    GrowlModule,
    ProgressBarModule,
    ImageUploadModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TeachNavComponent,
    ControlMessagesComponent,
    FilterData,
    EqualValidator
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    GrowlModule,
    ProgressBarModule,
    ImageUploadModule,

    HeaderComponent,
    FooterComponent,
    TeachNavComponent,
    ControlMessagesComponent,
    FilterData,
    EqualValidator
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        appRoutingProviders,
        ValidationService,
        TeacherService,
        CourseService,
        StudentService,
        WebboardService,

      ]
    };
  }
}
