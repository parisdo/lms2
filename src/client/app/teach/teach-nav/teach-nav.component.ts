import {Component, OnInit} from '@angular/core';
import {Teacher} from "../../models/teacher";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import {TeacherService} from "../../services/teacher.service";

import {publicUrl} from "../../services/config"

@Component({
  moduleId: module.id,
  selector: 'my-teach-nav',
  templateUrl: 'teach-nav.component.html',
  styleUrls: ['teach-nav.component.css']
})

export class TeachNavComponent {

  private teacher: Teacher;
  private profileImage: string = '';

  constructor(public authService: AuthService,
              public router: Router,
              private teacherService: TeacherService) {}

  ngOnInit() {

      if (this.authService.checkRole()) {
        this.getTeacher();
      }
  }

  getTeacher() {
    this.teacherService.getTeacher()
      .subscribe(
        data => {
          console.log(data);
          this.teacher = data;
          this.teacher.image = 'http://54.169.115.233/teachers/logo' + data.image;
        },
        error => {
          console.log(error);
          this.authService.signout();
        }
      );
  }

  gotoHome() {
    this.router.navigate(['/teach']);
  }


  signout() {
    this.authService.signout().subscribe(
      () => this.router.navigate(['/auth/signin'])
    );
  }
}
