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
            styleUrls: ['edit-student-score.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], EditStudentScoreComponent);
    return EditStudentScoreComponent;
}());
exports.EditStudentScoreComponent = EditStudentScoreComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50LXNjb3JlL2VkaXQtc3R1ZGVudC1zY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4Qyx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSx1QkFBcUIscUJBQXFCLENBQUMsQ0FBQTtBQVEzQztJQWFJLG1DQUNZLEtBQXFCLEVBQ3JCLE1BQWM7UUFEZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVjFCLGdCQUFXLEdBQVcsUUFBUSxDQUFDO1FBTS9CLFdBQU0sR0FBVyxJQUFJLGVBQU0sQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFNckQsQ0FBQztJQVZELHFEQUFpQixHQUFqQixVQUFrQixLQUFhO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFVRCw0Q0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2hCLFdBQVc7YUFDWCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0QsMENBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFMUIsQ0FBQztJQTFDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBQyxDQUFDLGtDQUFrQyxDQUFDO1NBQ2pELENBQUM7O2lDQUFBO0lBdUNGLGdDQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtBQXRDWSxpQ0FBeUIsNEJBc0NyQyxDQUFBIiwiZmlsZSI6ImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50LXNjb3JlL2VkaXQtc3R1ZGVudC1zY29yZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2VkaXQtc3R1ZGVudC1zY29yZScsXG4gICAgdGVtcGxhdGVVcmw6ICdlZGl0LXN0dWRlbnQtc2NvcmUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczpbJ2VkaXQtc3R1ZGVudC1zY29yZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRWRpdFN0dWRlbnRTY29yZUNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHNlbGVjdGVkSWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gICAgdXBsb2FkU3RldGU6IHN0cmluZyA9ICdhZGRfeHAnO1xuXG4gICAgY2hhbmdlVXBsb2FkU3RhdGUoc3RhdGU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMudXBsb2FkU3RldGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBjb3Vyc2U6IENvdXJzZSA9IG5ldyBDb3Vyc2UoJ0R1bW15IENvdXJzZScsICdEdW1teScpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuXG4gICAgZ29CYWNrKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2dvIGJhY2snKTtcbiAgICB9XG5cbn1cbiJdfQ==
