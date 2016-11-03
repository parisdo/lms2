import {Component} from "@angular/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router, NavigationExtras} from "@angular/router";
import {Course} from "../../models/course";
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";

@Component({
    moduleId: module.id,
    selector: 'edit-students',
    templateUrl: 'edit-students.component.html',
})
export class EditStudentsComponent {

    private selectedId: number;
    private sub: Subscription;
    private filterKeys: string = 'name';
    course: Course = new Course('Dummy Course', 'Dummy');

    errorMessage: string;
    students: Student[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private studentService: StudentService) {}

    ngOnInit(){
        this.sub = this.route
            .queryParams
            .subscribe(params => {
                this.selectedId = +params['id'];
                this.createStudents();
                console.log(this.selectedId);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    createStudents(){
        // this.studentService.getStudents()
        //     .subscribe(
        //         students => this.students = students,
        //         error =>  this.errorMessage = <any>error);
    }

    searchValue: string = '';

    search(value: any){
        this.searchValue = value;
    }

}
