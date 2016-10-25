import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'my-student',
    templateUrl: 'student.component.html'
})
export class StudentComponent{

    constructor( private router: Router){}

}
