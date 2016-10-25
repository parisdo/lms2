import { Component } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras} from "@angular/router";

import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";
import {Subscription} from "rxjs";
import {msg} from '../../services/message-service';

declare var _: any;
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/course";

import {publicUrl} from "../../services/config"
import {Badge} from "../../models/badge";
import {Message} from "primeng/components/common/api";
import {Level} from "../../models/level";
declare var  $: any;


export class updateStudentsScore {

  constructor(
    public course_id?: any,
    public score?: any,
    public students?: any,
  ) { }

}

export class deleteStudent{
  constructor(
    public course_id?: any,
    public students?: any,
  ) { }
}

@Component({
  moduleId: module.id,
  selector: 'course-list',
  templateUrl: 'course-list.component.html',
  styleUrls:['course-list.component.css']
})

export class CourseListComponent {

  errorMessage: string;
  course: Course;
  students: Student[]= [];
  levels: Level[] = [];

  exp: any[] = [10, 15, 20];
  badges: Badge[] = [];

  msgs: Message[] = [];
  //Get parameter
  private selectedId: number;
  private sub: Subscription;

  // Search
  private filterKeys: string = 'name';
  checkAll: boolean = false;
  searchValue: string = '';

  //Give Feedback Modal
  feedbackState: string = 'XP';
  selectedStudents: any = [];

  //View Highscore
  highScoreStudents: any[] = [];

  navigationExtras: NavigationExtras = {
    queryParams: { 'id': this.selectedId},
  };


  constructor(
      private courseService: CourseService, private studentService: StudentService,
      private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route
        .queryParams
        .subscribe(params => {

          this.selectedId = +params['id'];
          console.log(this.selectedId);

          this.courseService.getCourse(this.selectedId)
              .subscribe(
                  (data:any) => {

                    console.log(data);

                    this.course = data.course;
                    this.levels = data.levels;
                    this.badges = data.badges;

                    this.badges.map((badge) => {
                      badge.image = 'http://54.169.115.233/students/badges/' + badge.image
                    });

                    this.courseService.course = data.course;
                    this.courseService.levels = data.levels;
                    this.courseService.badges = this.badges;


                    this.students = data.students;
                    this.students.forEach(
                        student => {
                          student.student_id = student.student_id.toString();
                          student.image = publicUrl + 'students/logo/' + student.image;
                          student.progressType = this.progressCalculator(student.overall_xp);
                        }
                    );
                    this.studentService.students = this.students;

                    this.courseService.getHighscore(this.courseService.course.id)
                      .subscribe(
                        (data: any) => {
                          this.highScoreStudents = data.students;
                        });

                  },
                  error =>  this.errorMessage = <any>error);
         });

  }

  private progressType: string;
  progressCalculator(xp: number): string{

    let allStatus: string[] = ['info', 'success', 'warning', 'danger'];
    let status: string;

    if(xp < 25){
      status = allStatus[3];
    }else if(xp < 50){
      status = allStatus[2];
    }else if(xp < 75){
      status = allStatus[1];
    }else {
      status = allStatus[0];
    }

    return status;

  }

  orderBy(value: any){
    this.students = _.orderBy(this.students, [value, 'id'], ['asc', 'desc']);
  }

  search(value: any){
    this.searchValue = value;
  }

  giveAllFeedback(){
      $("#giveFeedback").modal();
      this.selectedStudents = [];
      this.students.filter((student) => student.selected ? this.selectedStudents.push(student): null);
  }

  giveFeedback(student: any){
    this.selectedStudents = [];
    this.selectedStudents.push(student);
  }

  updateBadgeScore(score: any){

    let students = new updateStudentsScore(
      this.course.id,
      score,
      this.selectedStudents
    );

    this.studentService.updateStudentsScore(students)
      .subscribe(
        (data: any) => {
          if(data.status == 'success'){
            this.showMessage(msg.getUpdateStudentsScoreMessage(200));
            $("#giveFeedback").modal('toggle');
            this.ngOnInit();
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


  onCheck(student: Student){
    student.selected = !student.selected;

    let obj = this.students.find((item) => { return !item.selected });
    obj == null ? this.checkAll = true: this.checkAll = false;
  }

  onCheckAll(){
    this.checkAll = !this.checkAll;
    this.students.forEach((student) => student.selected = this.checkAll);
  }

  chageFeedbackState(state: string){
    this.feedbackState = state;
  }

  viewLeaderboard(){
    $("#viewLeaderboard").modal();
  }

  goBack(){
    this.router.navigate([`/teach`]);
  }

  gotoPage(page: string){
    this.router.navigate([`/course/${page}`]);
  }

  gotoWebboard(){
    this.router.navigate([`/webboard/post`], this.navigationExtras);
  }

  editStudentProfile(id: any){

    let navigationExtras: NavigationExtras = {
      queryParams: { 'id': id},
    };

    this.router.navigate([`/course/edit-student`], navigationExtras);
  }

  onDeleteStudent(){

    let tempStudents: any[] = [];

    this.students.filter((student) => {
      student.selected ? tempStudents.push(student): null;
    });

    let students = new deleteStudent(
      this.course.id,
      tempStudents
    );
    console.log(students);

    this.studentService.deleteStudent(students)
      .subscribe(
        (data: any) => {
          if(data.status == 'success'){
            this.showMessage(msg.getUpdateStudentsScoreMessage(200));
            this.ngOnInit();
          }else {
            this.showMessage(msg.getUpdateStudentsScoreMessage(500));
          }
        },
        (error) => console.log(error)
      );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
