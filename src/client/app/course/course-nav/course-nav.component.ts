import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-course-nav',
    templateUrl: 'course-nav.component.html',
    styleUrls: ['course-nav.component.css']
})
export class CourseNavComponent{

    @Output() feedback: EventEmitter<any> = new EventEmitter();
    @Output() leaderboard: EventEmitter<any> = new EventEmitter();
    @Output() webboard: EventEmitter<any> = new EventEmitter();

    goToWebboard(): any{
        this.webboard.emit(null);
    }

    giveAllFeedback(): any{
        this.feedback.emit(null);
    }

    viewLeaderboard(): any{
        this.leaderboard.emit(null);
    }


}
