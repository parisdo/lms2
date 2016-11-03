import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})
export class FooterComponent {

    constructor(public router: Router) {}

    gotoClass(){
        this.router.navigate(['/teach']);
    }

    goBack(): void {
        window.history.back();
    }

}
