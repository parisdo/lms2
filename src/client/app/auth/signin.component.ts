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
                //console.log(data);
                if(data.status == 'success' && data.data.role == 'teacher'){
                  this.authService.setToken(data.data.token, 'teacher');
                  this.router.navigate(['./teach']);
                }else  if(data.status = 'failed'){
                  this.errorMessage = 'username or password not match!';
                }else {
                  this.errorMessage = data.errormessage;
                }
              },
              (error) => {
                this.errorMessage = 'Please Activate Your Account. Before you can login, you must active your account with the code sent to your email address.'
                //console.log(error);
              }
          );
  }

}
