import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import {ResizeOptions, ImageResult} from "ng2-imageupload";
import {Teacher} from "../../models/teacher";
import {TeacherService} from "../../services/teacher.service";
import {AuthService} from "../../auth/auth.service";
import {ValidationService} from "../../services/validation.service";
import {CourseService} from "../../services/course.service";
import {msg} from '../../services/message-service';
import {Message} from "primeng/components/common/api";
import {publicUrl} from  "../../services/config";


@Component({
    moduleId: module.id,
    selector: 'edit-teacher',
    templateUrl: 'edit-teacher.component.html',
    styleUrls: ['edit-teacher.component.css'],
})
export class EditTeacherComponent implements OnInit{

    //Get parameter
    errorMessage: string;
    course_id: any;
    teacher = new Teacher;
    msgs: Message[] = [];

    userForm: any;
    fakeImage: any = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoL…FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==';
    image: string = '';
    resizeOptions: ResizeOptions = {
      resizeMaxHeight: 150,
      resizeMaxWidth: 150
    };

    constructor(public authService: AuthService, private teacherService: TeacherService,
                private formBuilder: FormBuilder, private router: Router, private courseService: CourseService)
    {
      this.createForm();
    }

    ngOnInit() {

      if (this.teacherService.teacher != null) {
        this.teacher = this.teacherService.teacher;
        this.teacher.image = `${publicUrl}/teachers/logo/` + this.teacher.image;
        this.image =  this.teacher.image;

      } else {
        this.router.navigate(['/teach']);
      }
    }

    newImage: boolean = false;

    selected(imageResult: ImageResult) {

      this.newImage = true;
      this.image = imageResult.resized
        && imageResult.resized.dataURL
        || imageResult.dataURL;
    }

    createForm(){

      this.userForm = this.formBuilder.group({
        'name': ['', [Validators.required]],
        'image': [''],
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

    onSubmit(teacher: Teacher) {

      if(this.newImage){
        this.teacher.image = this.image;
      }else {
        let teacherPath = `${publicUrl}teachers/logo/`.length;
        this.teacher.image = this.teacher.image.substring(teacherPath);
      }

      console.log( this.teacher.image);

      this.teacherService.editTeacherProfile(this.teacher)
        .subscribe(
          (data: any) => {
            //console.log(data);
            if(data.status == "success"){
              this.showMessage(msg.getUpdateMessage(200));
            }else {
              this.showMessage(msg.getUpdateMessage(500));
            }
          },
          (error) => console.log(error)
        );
    }

  showMessage(msg: any){
    this.msgs = [];
    this.msgs.push(msg);
    setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }


  cancel(){
      window.history.back();
  }

  ngOnDestroy() {
    location.reload();
  }


}
