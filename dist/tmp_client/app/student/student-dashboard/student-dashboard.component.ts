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
    this.sub = this.route
      .queryParams
      .subscribe(params => {

        this.student_id = +params['id'];
        console.log(this.student_id);
        this.getStudent();
      })
  }

  selected(imageResult: ImageResult) {
    this.student.image = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      'student_id': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });
  }

  gotoPage(page: string) {
    this.router.navigate([`/course/${page}`]);
  }


  getStudent() {
    this.studentService.getStudent(this.student_id)
      .subscribe(
        (data) => {
          console.log(data);

          this.teacher = data.teacher[0];
          this.student = data.student[0].student;
          this.student.image = 'http://54.169.115.233/students/logo/' + this.student.image;
          this.student.progressType = this.progressCalculator(this.student.overall_xp);
          this.studentService.student = this.student;
          this.badges = data.student[0].badge;
          this.badges.map((badge) => {
            badge.image = 'http://54.169.115.233/students/badges/' + badge.image
          });

          this.course = data.course;
          this.highScoreStudents = data.leaderboard;
          this.highScoreStudents.map((student) => {
            student.image = 'http://54.169.115.233/students/logo/' + student.image
          });

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
    this.studentService.editStudent(this.student)
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data.status == 'success') {
            this.showMessage(msg.getUpdateStudentsScoreMessage(200));
          } else {
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

  signout() {
    this.authService.signout().subscribe(
      () => this.router.navigate(['/auth/signin'])
    );
  }


  cancel(){
    window.history.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
