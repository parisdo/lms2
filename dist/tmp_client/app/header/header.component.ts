import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {TeacherService} from "../services/teacher.service";
import {Teacher} from "../models/teacher";

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void{
  }


  signin(){
    this.router.navigate(['/auth/signin']);
  }

  signup(){
    this.router.navigate(['/auth/signup']);
  }

  signout() {
    this.authService.signout().subscribe(
        () => this.router.navigate(['/auth/signin'])
    );
  }

  gotoHome(){
    this.router.navigate(['/home']);
  }



}
