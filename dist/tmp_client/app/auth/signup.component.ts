import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Teacher} from "../models/teacher";
import {Router} from "@angular/router";
import {TeacherService} from "../services/teacher.service";
import {AuthService} from "./auth.service";
import {ImageResult, ResizeOptions} from "ng2-imageupload";
import {ValidationService} from "../services/validation.service";

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
})
export class SignupComponent {

  defaultImage: any = `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`;
  userForm: any;
  teacher = new Teacher();
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

  message = {
    title: 'ลงทะเบียน',
    content: `การลงทะเบียนเสร็จสิ้น โปรดตรวจสอบการยืนยันการสมัครสมาชิกในอีเมลแอดเดรสที่คุณใช้เพื่อสร้างบัญชีผู้ใช้.`,
    button: 'ต่อไป'
  };

  createForm(){

    this.userForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, ValidationService.passwordValidator]],
      'password_confirmation': [''],
      'name': ['', [Validators.required]],
      'image': [''],
      'title': ['นาย'],
      'position': ['ครูอัตราจ้าง'],
      'id_card': ['', [Validators.required, ValidationService.isNumber, Validators.minLength(13), Validators.maxLength(13)]],
      'phone': [''],
      'address': [''],
      'teaching_level': [''],
      'institution': [''],
      'province': ['']
    });
  }

  reset(){
    this.createForm();
  }

  selected(imageResult: ImageResult) {
      this.image = imageResult.resized
          && imageResult.resized.dataURL
          || imageResult.dataURL;

    console.log(this.image);
  }

  display: boolean = false;


  showDialog() {
    this.display = true;
  }


  onSubmit(teacher: Teacher) {

    this.image != '' ? this.image = this.image : this.image = this.defaultImage;

    this.teacher = new Teacher(teacher.email, teacher.password, teacher.name, this.image, teacher.title, teacher.position,
      teacher.id_card, teacher.phone, teacher.address, teacher.teaching_level, teacher.institution, teacher.province
    );

    //console.log(this.teacher);

    this.teacherService.addTeacher(this.teacher)
    .subscribe(
        (data: any) => {
          console.log(data);
          if(data.status == 'success'){
            this.showDialog();
          }
        },
        (error) => console.log(error)
    );
  }


  redirectPage(){
    this.router.navigate(['/auth/signin']);
  }

  cancel(){
    window.history.back();
  }



}


