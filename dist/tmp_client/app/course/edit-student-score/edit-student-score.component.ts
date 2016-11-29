import {Component} from "@angular/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router, NavigationExtras} from "@angular/router";
import {Course} from "../../models/course";
import {CourseService} from "../../services/course.service";
import {apiUrl} from "../../services/config";
import {AuthService} from "../../auth/auth.service";

@Component({
    moduleId: module.id,
    selector: 'edit-student-score',
    templateUrl: 'edit-student-score.component.html',
    styleUrls:['edit-student-score.component.css']
})

export class EditStudentScoreComponent {

    private selectedId: any;
    private sub: Subscription;

    uploadStete: string = 'add_xp';

    downloadPath: string = '';

    changeUploadState(state: string){
        this.uploadStete = state;
    }


    constructor(private authService: AuthService, private courseService: CourseService,
                private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(){

      if(localStorage.getItem('course_id') != undefined){
        this.courseService.getCourse(localStorage.getItem('course_id'))
          .subscribe((data: any) => {
            this.selectedId = data.course.id;
            this.downloadPath = `${apiUrl}downloadExcel/${this.selectedId}`;
            //console.log(this.downloadPath);
          }, error => console.log(error));
      }else {
        this.router.navigate(['/teach']);
      }
    }

    cancel() {
      window.history.back();
    }

}
