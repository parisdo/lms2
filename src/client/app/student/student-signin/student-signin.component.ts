import { Component } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import {FormBuilder, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";

export class studentSignin{
  constructor(public email? :any, public password?: any){}
}

@Component({
    moduleId: module.id,
    selector: 'student-signin',
    templateUrl: 'student-signin.component.html',
    styleUrls: ['student-signin.component.css'],
})
export class StudentSigninComponent {

    message: string;
    errorMessage: string;
    userForm: any;
    student = new Student();

    constructor(private studentService: StudentService,
                private authService: AuthService,
                private formBuilder: FormBuilder,
                private router: Router) {
        this.setMessage();
        this.createForm();
    }

    setMessage() {
        //this.message = 'Logged ' + (this.authService.isLoggedIn() ? 'in' : 'out');
    }

    createForm(){
        this.userForm = this.formBuilder.group({
            'username': ['', [Validators.required]],
            'password': ['', [Validators.required]]
        });
    }

    reset(){
        this.createForm();
    }

    signin(student: Student) {
        this.message = 'Trying to log in ...';
        this.student = new studentSignin(student.username, student.password);
        console.log(this.student);

      this.authService.signin(this.student)
        .subscribe(
          (data: any) => {
            if(data.status == 'success'){
              console.log(data.data.id);
              let navigationExtras: NavigationExtras = {
                queryParams: { 'id': data.data.id },
              };

              this.authService.setToken(data.data.token, 'student');
              this.router.navigate(['./student/dashboard'], navigationExtras);

            }else {
              //console.log(data);
              this.errorMessage = data.errormessage;
            }
          },
          (error) => { console.log(error); }
        );


    }

}
