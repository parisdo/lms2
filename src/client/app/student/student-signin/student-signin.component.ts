import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {Student} from "../../models/student";

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

    constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
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
        this.student = new Student(student.name, student.password);
        console.log(this.student);
        this.authService.setToken(student.password, 'student');
        this.router.navigate(['./student/dashboard']);
    }

}
