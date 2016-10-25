import { Component } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
    moduleId: module.id,
    selector: 'webboard',
    templateUrl: 'webboard.component.html',
})
export class WebboardComponent {

    constructor(private authService: AuthService){

    }
}
