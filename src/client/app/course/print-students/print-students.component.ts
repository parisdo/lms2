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
    students: Student[] = [];

    constructor(private router: Router, private studentService: StudentService){}

    ngOnInit(){

      if(this.studentService.students != null){
        this.students = this.studentService.students;
        console.log(this.students);
      }


    }

    cancel(){
      window.history.back();
    }

}
