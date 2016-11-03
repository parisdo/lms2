import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
  moduleId: module.id,
  selector: 'tb-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  images = new Array(8);
  constructor(private router: Router, private  authService: AuthService){}

  ngOnInit(){

    if(this.authService.isLoggedIn() && this.authService.checkRole()){
      this.router.navigate([`/teach`]);
    }else if(this.authService.isLoggedIn() && !this.authService.checkRole()){
      this.router.navigate([`/student/dashboard`]);
    }
    else {
      this.router.navigate(['/']);
    }
  }

}
