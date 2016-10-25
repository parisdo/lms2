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
    selector: 'edit-student',
    templateUrl: 'edit-student.component.html',
})
export class EditStudentComponent implements OnInit{

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

    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private courseService: CourseService,
                private studentService: StudentService){

      this.createForm();
    }

    ngOnInit(){

      if(this.courseService.course != null && this.studentService.students != null){
        this.course_id = this.courseService.course.id;
        this.students = this.studentService.students;

        this.sub = this.route
          .queryParams
          .subscribe(params => {
            this.selectedId = +params['id'];
            this.students.forEach((student) => {
              student.id == this.selectedId ? this.student = student: null;
            });
            //console.log(this.student);
          });
      }else {
        this.router.navigate(['/teach']);
      }

    }

    selected(imageResult: ImageResult) {
      this.student.image = imageResult.resized
        && imageResult.resized.dataURL
        || imageResult.dataURL;
    }

    createForm(){
        this.userForm = this.formBuilder.group({
            'username': ['', [Validators.required]],
            'student_id': ['', [Validators.required]],
            'name': ['', [Validators.required]],
            'overall_xp': ['', [Validators.required]],
        });
    }

    reset(){
        this.createForm();
    }

    save(student: Student) {

      this.student.course_id = this.course_id;
      console.log(this.student);

      this.studentService.editStudentProfile(this.student)
        .subscribe(
          (data: any) => {
            console.log(data);
            if(data.status == 'success'){
              //this.showMessage(msg.getUpdateStudentsScoreMessage(200));
            }else {
              //this.showMessage(msg.getUpdateStudentsScoreMessage(500));
            }
          },
          (error) => console.log(error)
        );
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }


}
