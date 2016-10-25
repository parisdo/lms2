import { Component } from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
    moduleId: module.id,
    selector: 'post',
    templateUrl: 'post.component.html',
})
export class PostComponent {

    constructor(private authService: AuthService){}
    goBack(): void {
        window.history.back();
    }
}
