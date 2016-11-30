import { Component } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras} from "@angular/router";
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";
import {Subscription} from "rxjs";
import {msg} from '../../services/message-service';
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/course";
import {publicUrl} from "../../services/config"
import {Badge} from "../../models/badge";
import {Message} from "primeng/components/common/api";
import {Level} from "../../models/level";

declare var  $: any;
declare var _: any;

export class updateStudentsScore {
  constructor(public course_id?: any, public score?: any, public students?: any, public max_score?: any) { }
}

export class updateStudentsBadge {
  constructor(public course_id?: any, public badge_id?: any, public score?: any, public students?: any, public max_score?: any) { }
}


export class deleteStudent{
  constructor(public course_id?: any, public students?: any) { }
}

@Component({
  moduleId: module.id,
  selector: 'course-list',
  templateUrl: 'course-list.component.html',
  styleUrls:['course-list.component.css']
})

export class CourseListComponent {

  display: boolean = false;
  message = {
    title: '',
    content: ``,
    button: ''
  };


  errorMessage: string;
  course: Course;
  students: Student[]= [];
  levels: Level[] = [];

  exp: any[] = [50, 100, 1000];
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

  showHighScore: number = 5;
  defaultHighScore: number;

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
          localStorage.setItem('course_id', params['id']);
          //console.log(this.selectedId);

          this.courseService.getCourse(this.selectedId)
              .subscribe(
                  (data:any) => {

                    this.course = data.course;
                    this.levels = data.levels;
                    //console.log(this.levels);
                    this.badges = data.badges;

                    this.badges.map((badge) => {
                      badge.image = publicUrl​ + 'students/badges/' + badge.image
                    });

                    this.courseService.course = data.course;
                    this.courseService.levels = data.levels;
                    this.courseService.badges = this.badges;

                    this.defaultHighScore = +this.course.leader_board;
                    this.showHighScore = this.defaultHighScore;

                    // console.log(data.students);

                    this.students = data.students;
                    this.students.forEach(
                        student => {
                          student.student_id = student.student_id.toString();
                          student.image = publicUrl + 'students/logo/' + student.image;
                          student.progressType = this.progressCalculator(student.overall_xp);
                          student.maxXP = this.calculateMaxXP(student.level);
                          student.badges = this.getBadgeStudent(student.id);
                        }
                    );
                    //console.log(this.students);
                    this.studentService.students = this.students;

                    this.courseService.getHighscore(this.courseService.course.id)
                      .subscribe(
                        (data: any) => {

                          this.highScoreStudents = data.students;
                          this.highScoreStudents.forEach(
                            student => {
                              student.student_id = student.student_id.toString();
                              student.image = publicUrl + 'students/logo/' + student.image;
                              student.progressType = this.progressCalculator(student.overall_xp);
                              student.maxXP = this.calculateMaxXP(student.level);
                              student.badges = this.getBadgeStudent(student.id);
                            }
                          );

                        });

                  },
                  error =>  this.errorMessage = <any>error);
         });

  }

  getBadgeStudent(id: any){

    let badges: any[] = [];

    this.studentService.getStudentBadge(id)
      .subscribe(
        (data: any) => {
          data.forEach((badge: any) => {
            badge.image = publicUrl + '/students/badges/' + badge.image;
            let newBadge = new Badge(this.selectedId.toString(), badge.id, badge.name, badge.image, badge.xp, badge.id, false);
            badges.push(newBadge);
          });
        },
        (error) => console.log(error)
      );

    return badges;

  }

  selectHighScore(value: any){
    this.showHighScore = value;
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

  calculateMaxXP(studentLevel: any){
    let maxXP: any;
    this.levels.forEach((level) => {
      if(level.level_id == studentLevel){
        maxXP = level.ceiling_xp;
      }
    });

    return maxXP;

  }

  orderBy(value: any){
    this.students = _.orderBy(this.students, [value, 'student_id'], ['asc', 'desc']);
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

  dynamicXp: number = 0;
  isXp: boolean = true;
  onUpdateStudentScore(){

    let maxScore = this.levels[this.levels.length - 1].ceiling_xp;

    if(this.dynamicXp > 0){
      this.isXp = true;
      this.dynamicXp = this.dynamicXp;

      let students = new updateStudentsScore(
        this.course.id,
        this.dynamicXp,
        this.selectedStudents,
        maxScore
      );

      this.studentService.updateStudentsScore(students)
        .subscribe(
          (data: any) => {
            if(data.status == 'success'){
              this.showMessage(msg.getUpdateMessage(200));
              $("#giveFeedback").modal('toggle');
              this.ngOnInit();
            }else {
              this.showMessage(msg.getUpdateMessage(500));
            }
          },
          (error) => console.log(error)
        );

    }else {
      this.isXp = false;
      this.dynamicXp = 0;
    }

  }

  resetXp(){
    this.dynamicXp = 0;
    this.isXp = true;
  }

  onUpdateStudentBadge(badge: any){

    let maxScore = this.levels[this.levels.length - 1].ceiling_xp;

    let students = new updateStudentsBadge(
      this.course.id,
      badge.id,
      badge.xp,
      this.selectedStudents,
      maxScore
    );

    //console.log(students);

    this.studentService.updateStudentsBadge(students)
      .subscribe(
        (data: any) => {
          if(data.status == 'success'){
            this.showMessage(msg.getUpdateMessage(200));
            $("#giveFeedback").modal('toggle');
            this.ngOnInit();
          }else {
            this.showMessage(msg.getUpdateMessage(500));
          }
        },
        (error) => console.log(error)
      );
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

    let navigationExtras: NavigationExtras = {
      queryParams: { 'id': this.course.id},
    };

    this.router.navigate([`/webboard/post`], navigationExtras);
  }

  editStudentProfile(id: any){

    let navigationExtras: NavigationExtras = {
      queryParams: { 'id': id},
    };

    this.router.navigate([`/course/edit-student`], navigationExtras);
  }

  deletePopup(){
    this.display = true;
    this.message = {
      title: 'ลบนักเรียน',
      content: `ยืนยันการลบข้อมูลที่เลือก`,
      button: 'ลบ'
    };
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
    //console.log(students);

    this.studentService.deleteStudent(students)
      .subscribe(
        (data: any) => {
          if(data.status == 'success'){
            this.showMessage(msg.getUpdateMessage(200));
            this.display = false;
            this.ngOnInit();
          }else {
            this.showMessage(msg.getUpdateMessage(500));
          }
        },
        (error) => console.log(error)
      );

  }


  updateStudent(){
      this.router.navigate(['/course/update-student']);
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
    this.sub.unsubscribe();
  }
}
