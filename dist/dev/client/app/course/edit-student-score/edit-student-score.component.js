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
var course_service_1 = require("../../services/course.service");
var config_1 = require("../../services/config");
var auth_service_1 = require("../../auth/auth.service");
var EditStudentScoreComponent = (function () {
    function EditStudentScoreComponent(authService, courseService, route, router) {
        this.authService = authService;
        this.courseService = courseService;
        this.route = route;
        this.router = router;
        this.uploadStete = 'add_xp';
        this.downloadPath = '';
    }
    EditStudentScoreComponent.prototype.changeUploadState = function (state) {
        this.uploadStete = state;
    };
    EditStudentScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('course_id') != undefined) {
            this.courseService.getCourse(localStorage.getItem('course_id'))
                .subscribe(function (data) {
                _this.selectedId = data.course.id;
                _this.downloadPath = config_1.apiUrl + "downloadExcel/" + _this.selectedId;
            }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['/teach']);
        }
    };
    EditStudentScoreComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditStudentScoreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-student-score',
            templateUrl: 'edit-student-score.component.html',
            styleUrls: ['edit-student-score.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, course_service_1.CourseService, router_1.ActivatedRoute, router_1.Router])
    ], EditStudentScoreComponent);
    return EditStudentScoreComponent;
}());
exports.EditStudentScoreComponent = EditStudentScoreComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50LXNjb3JlL2VkaXQtc3R1ZGVudC1zY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4Qyx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RSwrQkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUM1RCx1QkFBcUIsdUJBQXVCLENBQUMsQ0FBQTtBQUM3Qyw2QkFBMEIseUJBQXlCLENBQUMsQ0FBQTtBQVNwRDtJQWNJLG1DQUFvQixXQUF3QixFQUFVLGFBQTRCLEVBQzlELEtBQXFCLEVBQVUsTUFBYztRQUQ3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzlELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVZqRSxnQkFBVyxHQUFXLFFBQVEsQ0FBQztRQUUvQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztJQVMxQixDQUFDO0lBUEQscURBQWlCLEdBQWpCLFVBQWtCLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQU9ELDRDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVZDLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUM1RCxTQUFTLENBQUMsVUFBQyxJQUFTO2dCQUNuQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsWUFBWSxHQUFNLGVBQU0sc0JBQWlCLEtBQUksQ0FBQyxVQUFZLENBQUM7WUFFbEUsQ0FBQyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVELDBDQUFNLEdBQU47UUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUF6Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxTQUFTLEVBQUMsQ0FBQyxrQ0FBa0MsQ0FBQztTQUNqRCxDQUFDOztpQ0FBQTtJQXNDRixnQ0FBQztBQUFELENBcENBLEFBb0NDLElBQUE7QUFwQ1ksaUNBQXlCLDRCQW9DckMsQ0FBQSIsImZpbGUiOiJhcHAvY291cnNlL2VkaXQtc3R1ZGVudC1zY29yZS9lZGl0LXN0dWRlbnQtc2NvcmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtDb3Vyc2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvY291cnNlXCI7XG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xuaW1wb3J0IHthcGlVcmx9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWdcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZWRpdC1zdHVkZW50LXNjb3JlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2VkaXQtc3R1ZGVudC1zY29yZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOlsnZWRpdC1zdHVkZW50LXNjb3JlLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEVkaXRTdHVkZW50U2NvcmVDb21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBzZWxlY3RlZElkOiBhbnk7XG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIHVwbG9hZFN0ZXRlOiBzdHJpbmcgPSAnYWRkX3hwJztcblxuICAgIGRvd25sb2FkUGF0aDogc3RyaW5nID0gJyc7XG5cbiAgICBjaGFuZ2VVcGxvYWRTdGF0ZShzdGF0ZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy51cGxvYWRTdGV0ZSA9IHN0YXRlO1xuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG5cbiAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3Vyc2VfaWQnKSAhPSB1bmRlZmluZWQpe1xuICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuZ2V0Q291cnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3Vyc2VfaWQnKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJZCA9IGRhdGEuY291cnNlLmlkO1xuICAgICAgICAgICAgdGhpcy5kb3dubG9hZFBhdGggPSBgJHthcGlVcmx9ZG93bmxvYWRFeGNlbC8ke3RoaXMuc2VsZWN0ZWRJZH1gO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmRvd25sb2FkUGF0aCk7XG4gICAgICAgICAgfSwgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVhY2gnXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cblxufVxuIl19
