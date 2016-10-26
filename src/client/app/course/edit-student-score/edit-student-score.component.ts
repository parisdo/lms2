import {Component} from "@angular/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router, NavigationExtras} from "@angular/router";
import {Course} from "../../models/course";

@Component({
    moduleId: module.id,
    selector: 'edit-student-score',
    templateUrl: 'edit-student-score.component.html',
    styleUrls:['edit-student-score.component.css']
})
export class EditStudentScoreComponent {

    private selectedId: number;
    private sub: Subscription;

    uploadStete: string = 'add_xp';

    changeUploadState(state: string){
        this.uploadStete = state;
    }

    course: Course = new Course('Dummy Course', 'Dummy');

    constructor(
        private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit(){
        this.sub = this.route
            .queryParams
            .subscribe(params => {
                this.selectedId = +params['id'];
                console.log(this.selectedId);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    goBack(): void {
        window.history.back();
        //console.log('go back');
    }

}
