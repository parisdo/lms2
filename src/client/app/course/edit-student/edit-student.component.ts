import {Component, OnInit} from "@angular/core";
import {Badge} from "../../models/badge";
import {Student} from "../../models/student";
import {Validators, FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {CourseService} from "../../services/course.service";
import {StudentService} from "../../services/student.service";
import {ImageResult, ResizeOptions} from "ng2-imageupload";
import {Message} from "primeng/components/common/api";
import {msg} from '../../services/message-service';

export class deleteBadge {
  constructor(public id?: any, public badges?: any) {
  }
}

@Component({
  moduleId: module.id,
  selector: 'edit-student',
  templateUrl: 'edit-student.component.html',
  styleUrls: ['edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {

  //Get parameter
  private selectedId: number;
  private sub: Subscription;

  errorMessage: string;
  userForm: any;
  fakeImage: any = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoL…FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==';
  image: string = '';
  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 150,
    resizeMaxWidth: 150
  };


  course_id: any;

  student = new Student;
  students: Student[] = [];

  badges: Badge[] = [];
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private courseService: CourseService, private studentService: StudentService) {

    this.createForm();
  }

  ngOnInit() {

    this.badges = [];

    if (this.courseService.course != null && this.studentService.students != null) {
      this.course_id = this.courseService.course.id;
      this.students = this.studentService.students;

      this.sub = this.route
        .queryParams
        .subscribe(params => {
          this.selectedId = +params['id'];
          this.students.forEach((student) => {
            student.id == this.selectedId ? this.student = student : null;
          });

          this.studentService.getStudentBadge(this.selectedId)
            .subscribe(
              (data: any) => {
                console.log(data);
                //this.badges = data;
                data.forEach((badge: any) => {
                  badge.image = 'http://54.169.115.233/students/badges/' + badge.image;
                  let newBadge = new Badge(this.course_id, badge.id, badge.name, badge.image, badge.xp, badge.id, false);
                  this.badges.push(newBadge);
                });
                //console.log(this.badges);
              },
              (error) => console.log(error)
            );

        });
    } else {
      this.router.navigate(['/teach']);
    }

  }

  selected(imageResult: ImageResult) {
    this.student.image = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      'username': ['', [Validators.required]],
      'student_id': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'overall_xp': ['', [Validators.required]],
    });
  }

  reset() {
    this.createForm();
  }

  save(student: Student) {

    this.student.course_id = this.course_id;
    console.log(this.student);

    this.studentService.editStudentProfile(this.student)
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data.status == 'success') {
            //this.showMessage(msg.getUpdateStudentsScoreMessage(200));
          } else {
            //this.showMessage(msg.getUpdateStudentsScoreMessage(500));
          }
        },
        (error) => console.log(error)
      );
  }


  checkAll: boolean = false;

  onCheck(badge: Badge) {
    badge.selected = !badge.selected;

    let obj = this.badges.find((badge) => {
      return !badge.selected
    });
    obj == null ? this.checkAll = true : this.checkAll = false;
  }

  onCheckAll() {
    this.checkAll = !this.checkAll;
    this.badges.forEach((badge) => badge.selected = this.checkAll);
  }


  onDeleteStudentBadge() {

    let tempBadges: any[] = [];

    this.badges.filter((badge) => {
      badge.selected ? tempBadges.push(badge) : null;
    });

    let badges = new deleteBadge(
      this.student.id,
      tempBadges
    );
    console.log(badges);

    this.studentService.deleteStudentBadge(badges)
      .subscribe(
        (data: any) => {
          if (data.status == 'success') {
            this.showMessage(msg.getUpdateStudentsScoreMessage(200));
            this.ngOnInit();
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



  cancel() {
    window.history.back();
  }

}
