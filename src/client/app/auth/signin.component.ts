import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router, NavigationStart} from "@angular/router";
import {Teacher} from "../models/teacher";
import {FormBuilder, Validator, Validators} from "@angular/forms";
import 'rxjs/add/operator/filter';

@Component({
  moduleId: module.id,
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css'],
})
export class SigninComponent {

  message: string;
  errorMessage: string;
  userForm: any;
  teacher = new Teacher();

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.setMessage();
    this.createForm();

    // router.events.subscribe(value => console.log(value));
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn() ? 'in' : 'out');
  }

  createForm(){
    this.userForm = this.formBuilder.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });
  }

  reset(){
    this.createForm();
  }

  signin(teacher: Teacher) {
    this.message = 'Trying to log in ...';
    this.teacher = new Teacher(teacher.email, teacher.password);
    this.authService.signin(this.teacher)
          .subscribe(
              (data: any) => {
                if(data.status == 'success'){
                  // console.log(data.data.token);
                  this.authService.setToken(data.data.token, 'teacher');

                  setTimeout(() => {
                    this.router.navigate(['./teach']);
                  },1000);

                }else {
                  //console.log(data);
                  this.errorMessage = data.errormessage;
                }
              },
              (error) => { console.log(error); }
          );
  }

}
