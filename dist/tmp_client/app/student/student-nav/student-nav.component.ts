import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";


@Component({
    moduleId: module.id,
    selector: 'student-nav',
    templateUrl: 'student-nav.component.html',
    styleUrls: ['student-nav.component.css']
})
export class StudentNavComponent{

    constructor(public authService: AuthService, private router: Router){}

    signout() {
      this.authService.signout().subscribe(
        () => this.router.navigate(['/auth/signin'])
      );
    }

    gotoWebboard(){
        this.router.navigate([`/webboard/post`]);
    }
}
