import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";
import {Course} from "../../models/course";
import {ActivatedRoute, Router, NavigationExtras} from "@angular/router";
import {Subscription} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {ResizeOptions, ImageResult} from "ng2-imageupload";
import {Teacher} from "../../models/teacher";
import {Message} from "primeng/components/common/api";
import {msg} from '../../services/message-service';
import {AuthService} from "../../auth/auth.service";
import {publicUrl} from "../../services/config"

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'my-student-dashboard',
  templateUrl: 'student-dashboard.component.html',
  styleUrls: ['student-dashboard.component.css']
})


export class StudentDashboardComponent {

  student_id: any;
  private sub: Subscription;

  teacher: Teacher;
  student: Student;
  course: Course;

  showHighScore: number = 5;

  highScoreStudents: any[] = [];
  badges: any[] = [];

  errorMessage: string;
  userForm: any;
  fakeImage: any = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoL…FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==';
  image: string = '';
  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 150,
    resizeMaxWidth: 150
  };

  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder,
              private studentService: StudentService, public authService: AuthService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.student_id = this.authService.id;
    //console.log(this.student_id);

    if(this.student_id != null){
      this.getStudent(this.student_id);
    }
  }

  selected(imageResult: ImageResult) {
    this.student.image = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      'student_id': ['', [Validators.required]],
      'username': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });
  }

  gotoPage(page: string) {
    this.router.navigate([`/course/${page}`]);
  }


  getStudent(id: any) {
    this.studentService.getStudent(id)
      .subscribe(
        (data) => {
          //console.log(data);

          this.teacher = data.teacher[0];
          this.student = data.student[0].student;
          this.student.image = publicUrl + 'students/logo/' + this.student.image;
          this.student.progressType = this.progressCalculator(this.student.overall_xp);
          this.studentService.student = this.student;
          this.badges = data.student[0].badge;
          this.badges.map((badge) => {
            badge.image = publicUrl​ + 'students/badges/' + badge.image
          });

          this.course = data.course;
          this.highScoreStudents = data.leaderboard;

          this.highScoreStudents.map((student) => {
            student.student.image = publicUrl + 'students/logo/' + student.student.image;

            for(let i = 0; i < student.badge.length; i++){
              student.badge[i].image = publicUrl + 'students/badges/' + student.badge[i].image;
            }

          });



          //console.log(this.highScoreStudents);
          this.showHighScore = +this.course.leader_board;

          this.createForm();
        },
        error => console.log(error)
      );
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


  gotoWebboard(){

    let navigationExtras: NavigationExtras = {
      queryParams: { 'id': this.course.id},
    };

    this.router.navigate([`/webboard/post`], navigationExtras);
  }

  edit: boolean =false;

  editMode(mode: boolean) {
    this.edit = mode;
  }


  save() {

    let imageSubstr = this.student.image.substring(35);
    console.log(imageSubstr);

    this.studentService.editStudent(this.student)
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data.status == 'success') {
            this.showMessage(msg.getUpdateMessage(200));
          } else {
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

  signout() {
    this.authService.signout().subscribe(
      () => this.router.navigate(['/auth/signin'])
    );
  }


  cancel(){
    window.history.back();
  }


}
