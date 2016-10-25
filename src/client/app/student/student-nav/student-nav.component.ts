import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'student-nav',
    templateUrl: 'student-nav.component.html'
})
export class StudentNavComponent{

    constructor( private router: Router){}
    gotoWebboard(){
        this.router.navigate([`/webboard/post`]);
    }
}
