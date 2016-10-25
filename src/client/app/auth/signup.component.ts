import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Teacher} from "../models/teacher";
import {Router} from "@angular/router";
import {TeacherService} from "../services/teacher.service";
import {AuthService} from "./auth.service";
import {ImageResult, ResizeOptions} from "ng2-imageupload";
import {ValidationService} from "../services/validation.service";
import { CustomValidators } from 'ng2-validation';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
})
export class SignupComponent {

  userForm: any;
  teacher = new Teacher();
  fakeImage: any = 'http://fakeimg.pl/150/?text=image';
  image: string = '';
  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 150,
    resizeMaxWidth: 150
  };

  constructor(public authService: AuthService, private teacherService: TeacherService,
              private formBuilder: FormBuilder, private router: Router)
  {
    this.createForm();
  }

  onChange(event: any) {
    var files1 = event.srcElement.files;
    var files2 = event.srcElement.files;

    let files: any[] = [];
    files.push(files1, files2);
    console.log('test send file');
    console.log(files);

    this.authService.upload(files);
  }

  createForm(){
    //var password = new FormControl('', [Validators.required, ValidationService.passwordValidator]);
    // var certainPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

    this.userForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, ValidationService.passwordValidator]],
      // password: password,
      // certainPassword: certainPassword,
      'name': ['', [Validators.required]],
      'image': ['',],
      'title': ['นาย'],
      'position': ['ครูอัตราจ้าง'],
      'id_card': ['', [Validators.required, ValidationService.isNumber, Validators.minLength(13), Validators.maxLength(13)]],
      'phone': ['', [Validators.required, ValidationService.isNumber]],
      'address': ['', [Validators.required]],
      'teaching_level': ['', [Validators.required]],
      'institution': ['', [Validators.required]],
      'province': ['', [Validators.required]]
    });
  }

  reset(){
    this.createForm();
  }

  selected(imageResult: ImageResult) {
      this.image = imageResult.resized
          && imageResult.resized.dataURL
          || imageResult.dataURL;
  }

  onSubmit(teacher: Teacher) {

    this.image == '' ? this.image = this.fakeImage : this.image;

    this.teacher = new Teacher(teacher.email, teacher.password, teacher.name, this.image, teacher.title, teacher.position,
      teacher.id_card, teacher.phone, teacher.address, teacher.teaching_level, teacher.institution, teacher.province
    );

    console.log(this.teacher);

    this.teacherService.addTeacher(this.teacher)
    .subscribe(
        teacher  => {
          console.log(teacher);
          this.router.navigate(['/auth/signin']);
        },
        error =>  console.log(error)
    );
  }
}


