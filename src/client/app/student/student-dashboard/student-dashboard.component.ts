import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";
import {Course} from "../../models/course";

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'my-student-dashboard',
    templateUrl: 'student-dashboard.component.html'
})


export class StudentDashboardComponent{

    student: Student;
    course: Course;

    constructor(private studentService: StudentService){
    }

    ngOnInit(){
        // this.getStudent();
        //
        // $(document).ready(function() {
        //     $("body").tooltip({ selector: '[data-toggle=tooltip]' });
        // });
    }

    getStudent(){
        // this.studentService.getStudent('55080501636')
        //     .subscribe(
        //         (student) => {
        //                 this.student = student[0];
        //             console.log(this.student);
        //                 //this.getCourse(this.student.courseId);
        //         },
        //                 error => console.log(error)
        //         );
    }

    getCourse(courseId: any){

        // console.log(courseId);
        // this.studentService.getCourse(courseId)
        //     .subscribe(
        //         course => this.course = course[0],
        //         error =>  console.log(error));
    }


}
