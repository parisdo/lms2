import {Component} from "@angular/core";
import {Course} from "../../models/course";
import {CourseService} from "../../services/course.service";
import {Validators, FormBuilder} from "@angular/forms";
import {Message} from "primeng/components/common/api";
import {msg} from '../../services/message-service';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'edit-course',
    templateUrl: 'edit-course.component.html',
    styleUrls: ['edit-course.component.css']
})

export class EditCourseComponent {

    course: Course;
    msgs: Message[] = [];

    constructor(private formBuilder: FormBuilder, private courseService: CourseService,
                private router: Router){}

    ngOnInit() {

      if(localStorage.getItem('course_id') != undefined){
        this.courseService.getCourse(localStorage.getItem('course_id'))
          .subscribe((data: any) => {
            this.course = data.course;
            this.createCourseForm();
          }, error => console.log(error));
      }else {
        this.router.navigate(['/teach']);
      }


    }

    courseForm: any;
    createCourseForm(){
        this.courseForm = this.formBuilder.group({
            'course_id': [this.course.id],
            'name': [this.course.name, [Validators.required]],
            'description': [this.course.description]
        });
    }


    submit(){

       // console.log(this.courseForm.value);
        this.courseService.editCourse(this.courseForm.value)
            .subscribe(
                (data: any) => {
                  if(data.status == 'success'){
                    this.showMessage(msg.getUpdateStudentsScoreMessage(200));
                  }else {
                    this.showMessage(msg.getUpdateStudentsScoreMessage(500));
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

    }

}
