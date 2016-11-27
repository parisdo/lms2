import {Component, OnInit} from "@angular/core";
import {Badge} from "../../models/badge";
import {Student} from "../../models/student";
import {Validators, FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {CourseService} from "../../services/course.service";
import {StudentService} from "../../services/student.service";
import {ImageResult, ResizeOptions} from "ng2-imageupload";

@Component({
    moduleId: module.id,
    selector: 'print-students',
    templateUrl: 'print-students.component.html',
    styleUrls: ['print-students.component.css'],
})
export class PrintStudentsComponent implements OnInit{

    //Get parameter
    errorMessage: string;
    courseName: any;
    students: Student[] = [];

    newpage: boolean = false;


    constructor(private router: Router, private courseService: CourseService){}

    ngOnInit(){

      if(localStorage.getItem('course_id') != undefined){
        this.courseService.getCourse(localStorage.getItem('course_id'))
          .subscribe((data: any) => {
            this.courseName = data.course.name;
            this.students = data.students;
            this.setPage();
          }, error => console.log(error));
      }else {
        this.router.navigate(['/teach']);
      }
    }


    thum: any = [];
    count: number = 0;

    setPage() {

      for (let i: number = 0; i < Math.ceil((this.students.length / 15)); i++) {
        this.thum[i] = [];

        for (let j: number = 0; j < 15; j++) {
          if (this.count < this.students.length) {
            this.thum[i][j] = this.students[this.count];
            this.count++;
          }
        }
      }

    }


    print(){
      window.print();
    }

    cancel(){
      window.history.back();
    }

}
