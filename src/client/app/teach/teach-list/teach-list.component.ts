import { Component} from '@angular/core';
import {Course} from "../../models/course";
import {CourseService} from "../../services/course.service";
import {Router, NavigationExtras} from "@angular/router";
import {Teacher} from "../../models/teacher";
import {TeacherService} from "../../services/teacher.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-teach-list',
  templateUrl: 'teach-list.component.html',
  styleUrls: ['teach-list.component.css']
})
export class TeachListComponent{

  errorMessage: string;
  courses: Course[] = [];
  hideCourses: Course[] = [];

  teacher: Teacher;

  constructor(private authService: AuthService,
              private teacherService: TeacherService,
              private courseService: CourseService,
              private router: Router) {
  }

  ngOnInit() {


      if (this.authService.checkRole()) {
        this.getTeacher();
        this.getCourse();
      }


  }

  getTeacher() {

    this.teacherService.getTeacher()
        .subscribe(
            teacher => {
              this.teacher = teacher;
              this.teacher.image = 'http://54.169.115.233/teachers/logo/' + teacher.image;
              this.teacherService.teacher = this.teacher;
            },
            error =>  this.errorMessage = <any>error);
  }

  getCourse() {

    this.courses = [];
    this.hideCourses = [];

    this.courseService.getAllCourse()
      .subscribe(
          (data:any) => {
            for(let i = 0; i< data.length; i++){
              if(data[i].status == '1'){
                this.courses.push(data[i]);
              }else if (data[i].status == '2'){
                this.hideCourses.push(data[i]);
              }
            }
         },
          error =>  this.errorMessage = <any>error);
  }

  updateStatus(course: Course, status: any){

    course.status_id = status;
    course.course_id = course.id;

    this.courseService.updateStatus(course)
      .subscribe(
        (data:any) => {
          // console.log(data);

          if(data.status == 'success'){
            this.ngOnInit();
          }

        },
        error =>  this.errorMessage = <any>error);  }

  gotoCourse(id: number){

    let navigationExtras: NavigationExtras = {
      queryParams: { 'id': id },
    };

    this.router.navigate(['/course'], navigationExtras);

  }

  addCourse(){
    this.router.navigate(['/teach/add-course']);
  }

  cancel(){
    window.history.back();
  }

}
