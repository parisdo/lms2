"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var course_1 = require("../../models/course");
var EditStudentScoreComponent = (function () {
    function EditStudentScoreComponent(route, router) {
        this.route = route;
        this.router = router;
        this.uploadStete = 'add_xp';
        this.course = new course_1.Course('Dummy Course', 'Dummy');
    }
    EditStudentScoreComponent.prototype.changeUploadState = function (state) {
        this.uploadStete = state;
    };
    EditStudentScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.selectedId = +params['id'];
            console.log(_this.selectedId);
        });
    };
    EditStudentScoreComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EditStudentScoreComponent.prototype.goBack = function () {
        window.history.back();
    };
    EditStudentScoreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-student-score',
            templateUrl: 'edit-student-score.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], EditStudentScoreComponent);
    return EditStudentScoreComponent;
}());
exports.EditStudentScoreComponent = EditStudentScoreComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50LXNjb3JlL2VkaXQtc3R1ZGVudC1zY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4Qyx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSx1QkFBcUIscUJBQXFCLENBQUMsQ0FBQTtBQU8zQztJQWFJLG1DQUNZLEtBQXFCLEVBQ3JCLE1BQWM7UUFEZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVjFCLGdCQUFXLEdBQVcsUUFBUSxDQUFDO1FBTS9CLFdBQU0sR0FBVyxJQUFJLGVBQU0sQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFNckQsQ0FBQztJQVZELHFEQUFpQixHQUFqQixVQUFrQixLQUFhO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFVRCw0Q0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2hCLFdBQVc7YUFDWCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0QsMENBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFMUIsQ0FBQztJQXpDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7O2lDQUFBO0lBdUNGLGdDQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtBQXRDWSxpQ0FBeUIsNEJBc0NyQyxDQUFBIiwiZmlsZSI6ImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50LXNjb3JlL2VkaXQtc3R1ZGVudC1zY29yZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2VkaXQtc3R1ZGVudC1zY29yZScsXG4gICAgdGVtcGxhdGVVcmw6ICdlZGl0LXN0dWRlbnQtc2NvcmUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0U3R1ZGVudFNjb3JlQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgc2VsZWN0ZWRJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgICB1cGxvYWRTdGV0ZTogc3RyaW5nID0gJ2FkZF94cCc7XG5cbiAgICBjaGFuZ2VVcGxvYWRTdGF0ZShzdGF0ZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy51cGxvYWRTdGV0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGNvdXJzZTogQ291cnNlID0gbmV3IENvdXJzZSgnRHVtbXkgQ291cnNlJywgJ0R1bW15Jyk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG5cbiAgICBnb0JhY2soKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ28gYmFjaycpO1xuICAgIH1cblxufVxuIl19
