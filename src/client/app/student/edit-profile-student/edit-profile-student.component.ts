import {Component, OnInit} from '@angular/core';
import {Student} from "../../models/student";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'edit-profile-student',
    templateUrl: 'edit-profile-student.component.html'
})

export class EditProfileStudentComponent{

    errorMessage: string;
    userForm: any;
    student = new Student('55080501',  'มานี' , 'ดีใจ', 'Khjde093');

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }
    createForm(){
        this.userForm = this.formBuilder.group({
            'username': ['', [Validators.required]],
            'name': ['', [Validators.required]],
            'password': ['', [Validators.required]],
            'confirm_password': ['', [Validators.required]]
        });
    }

    reset(){
        this.createForm();
    }

    signin(student: Student) {
        this.student = new Student(student.username, student.name, student.password);
        console.log(this.student);
    }

}
