import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing} from './app.routes';

import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import {AuthModule} from "./auth/auth.module";
import {TeachModule} from "./teach/teach.module";
import {CourseModule} from "./course/course.module";
import {StudentModule} from "./student/student.module";
import {WebboardModule} from "./webboard/webboard.module";

@NgModule({
  imports: [
    BrowserModule,
    routing,
    SharedModule.forRoot(),
    HomeModule,
    AuthModule,
    TeachModule,
    CourseModule,
    StudentModule,
    WebboardModule
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]
})

export class AppModule {}
