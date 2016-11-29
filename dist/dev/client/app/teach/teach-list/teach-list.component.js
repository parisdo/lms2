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
var core_1 = require('@angular/core');
var course_service_1 = require("../../services/course.service");
var router_1 = require("@angular/router");
var teacher_service_1 = require("../../services/teacher.service");
var auth_service_1 = require("../../auth/auth.service");
var TeachListComponent = (function () {
    function TeachListComponent(authService, teacherService, courseService, router) {
        this.authService = authService;
        this.teacherService = teacherService;
        this.courseService = courseService;
        this.router = router;
        this.display = false;
        this.message = {
            title: '',
            content: "",
            button: ''
        };
        this.courses = [];
        this.hideCourses = [];
    }
    TeachListComponent.prototype.ngOnInit = function () {
        window.localStorage.removeItem('course_id');
        if (this.authService.checkRole()) {
            this.getTeacher();
            this.getCourse();
        }
    };
    TeachListComponent.prototype.getTeacher = function () {
        var _this = this;
        this.teacherService.getTeacher()
            .subscribe(function (teacher) {
            _this.teacher = teacher;
            _this.teacherService.teacher = _this.teacher;
        }, function (error) { return _this.errorMessage = error; });
    };
    TeachListComponent.prototype.getCourse = function () {
        var _this = this;
        this.courses = [];
        this.hideCourses = [];
        this.courseService.getAllCourse()
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].status == '1') {
                    _this.courses.push(data[i]);
                }
                else if (data[i].status == '2') {
                    _this.hideCourses.push(data[i]);
                }
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    TeachListComponent.prototype.deletePopup = function (course) {
        this.display = true;
        this.message = {
            title: 'ลบชั้นเรียน',
            content: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
            button: 'ลบ'
        };
        this.tempCourse = course;
    };
    TeachListComponent.prototype.deleteCourse = function () {
        this.updateStatus(this.tempCourse, 3);
        this.display = false;
    };
    TeachListComponent.prototype.updateStatus = function (course, status) {
        var _this = this;
        course.status_id = status;
        course.course_id = course.id;
        this.courseService.updateStatus(course)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.ngOnInit();
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    TeachListComponent.prototype.gotoCourse = function (id) {
        var navigationExtras = {
            queryParams: { 'id': id },
        };
        this.router.navigate(['/course'], navigationExtras);
    };
    TeachListComponent.prototype.addCourse = function () {
        this.router.navigate(['/teach/add-course']);
    };
    TeachListComponent.prototype.cancel = function () {
        window.history.back();
    };
    TeachListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-teach-list',
            templateUrl: 'teach-list.component.html',
            styleUrls: ['teach-list.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, teacher_service_1.TeacherService, course_service_1.CourseService, router_1.Router])
    ], TeachListComponent);
    return TeachListComponent;
}());
exports.TeachListComponent = TeachListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC90ZWFjaC1saXN0L3RlYWNoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFFekQsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFDOUQsNkJBQTBCLHlCQUF5QixDQUFDLENBQUE7QUFRcEQ7SUFnQkUsNEJBQW9CLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLGFBQTRCLEVBQzVCLE1BQWM7UUFIZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWpCbEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQUc7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDO1FBSUYsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFhLEVBQUUsQ0FBQztJQVEzQixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUdJLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztJQUdMLENBQUM7SUFFRCx1Q0FBVSxHQUFWO1FBQUEsaUJBVUM7UUFSQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRTthQUMzQixTQUFTLENBQ04sVUFBQSxPQUFPO1lBQ0wsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFFdkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQUEsaUJBaUJDO1FBZkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7YUFDOUIsU0FBUyxDQUNOLFVBQUMsSUFBUTtZQUNQLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUNsQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFBLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFBLENBQUM7b0JBQy9CLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO1lBQ0gsQ0FBQztRQUNKLENBQUMsRUFDQSxVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUlELHdDQUFXLEdBQVgsVUFBWSxNQUFjO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixLQUFLLEVBQUUsYUFBYTtZQUNwQixPQUFPLEVBQUUsd0pBQTJCO1lBQ3BDLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFRCx5Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx5Q0FBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLE1BQVc7UUFBeEMsaUJBZW1EO1FBYmpELE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7YUFDcEMsU0FBUyxDQUNSLFVBQUMsSUFBUTtZQUdQLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLENBQUM7UUFFSCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQUUsQ0FBQztJQUVuRCx1Q0FBVSxHQUFWLFVBQVcsRUFBVTtRQUVuQixJQUFJLGdCQUFnQixHQUFxQjtZQUN2QyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1NBQzFCLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFdEQsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQTFISDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7OzBCQUFBO0lBdUhGLHlCQUFDO0FBQUQsQ0F0SEEsQUFzSEMsSUFBQTtBQXRIWSwwQkFBa0IscUJBc0g5QixDQUFBIiwiZmlsZSI6ImFwcC90ZWFjaC90ZWFjaC1saXN0L3RlYWNoLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q291cnNlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvdXJzZVwiO1xuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHtUZWFjaGVyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RlYWNoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC10ZWFjaC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICd0ZWFjaC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RlYWNoLWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlYWNoTGlzdENvbXBvbmVudHtcblxuICBkaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XG4gIG1lc3NhZ2UgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIGNvbnRlbnQ6IGBgLFxuICAgIGJ1dHRvbjogJydcbiAgfTtcblxuXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBjb3Vyc2VzOiBDb3Vyc2VbXSA9IFtdO1xuICBoaWRlQ291cnNlczogQ291cnNlW10gPSBbXTtcblxuICB0ZWFjaGVyOiBUZWFjaGVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHRlYWNoZXJTZXJ2aWNlOiBUZWFjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgICAgLy8gcmVtb3ZlIGNvdXJzZSBpZFxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb3Vyc2VfaWQnKTtcblxuICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tSb2xlKCkpIHtcbiAgICAgICAgdGhpcy5nZXRUZWFjaGVyKCk7XG4gICAgICAgIHRoaXMuZ2V0Q291cnNlKCk7XG4gICAgICB9XG5cblxuICB9XG5cbiAgZ2V0VGVhY2hlcigpIHtcblxuICAgIHRoaXMudGVhY2hlclNlcnZpY2UuZ2V0VGVhY2hlcigpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB0ZWFjaGVyID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50ZWFjaGVyID0gdGVhY2hlcjtcbiAgICAgICAgICAgICAgLy8gdGhpcy50ZWFjaGVyLmltYWdlID0gJ2h0dHA6Ly81NC4xNjkuMTE1LjIzMy90ZWFjaGVycy9sb2dvLycgKyB0ZWFjaGVyLmltYWdlO1xuICAgICAgICAgICAgICB0aGlzLnRlYWNoZXJTZXJ2aWNlLnRlYWNoZXIgPSB0aGlzLnRlYWNoZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gIH1cblxuICBnZXRDb3Vyc2UoKSB7XG5cbiAgICB0aGlzLmNvdXJzZXMgPSBbXTtcbiAgICB0aGlzLmhpZGVDb3Vyc2VzID0gW107XG5cbiAgICB0aGlzLmNvdXJzZVNlcnZpY2UuZ2V0QWxsQ291cnNlKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGRhdGE6YW55KSA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPCBkYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgaWYoZGF0YVtpXS5zdGF0dXMgPT0gJzEnKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZXMucHVzaChkYXRhW2ldKTtcbiAgICAgICAgICAgICAgfWVsc2UgaWYgKGRhdGFbaV0uc3RhdHVzID09ICcyJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlQ291cnNlcy5wdXNoKGRhdGFbaV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuICB9XG5cbiAgdGVtcENvdXJzZTogYW55O1xuXG4gIGRlbGV0ZVBvcHVwKGNvdXJzZTogQ291cnNlKXtcbiAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xuICAgIHRoaXMubWVzc2FnZSA9IHtcbiAgICAgIHRpdGxlOiAn4Lil4Lia4LiK4Lix4LmJ4LiZ4LmA4Lij4Li14Lii4LiZJyxcbiAgICAgIGNvbnRlbnQ6IGDguKLguLfguJnguKLguLHguJnguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKXguJfguLXguYjguYDguKXguLfguK3guIFgLFxuICAgICAgYnV0dG9uOiAn4Lil4LiaJ1xuICAgIH07XG4gICAgdGhpcy50ZW1wQ291cnNlID0gY291cnNlO1xuICB9XG5cbiAgZGVsZXRlQ291cnNlKCl7XG4gICAgdGhpcy51cGRhdGVTdGF0dXModGhpcy50ZW1wQ291cnNlLCAzKTtcbiAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXR1cyhjb3Vyc2U6IENvdXJzZSwgc3RhdHVzOiBhbnkpe1xuXG4gICAgY291cnNlLnN0YXR1c19pZCA9IHN0YXR1cztcbiAgICBjb3Vyc2UuY291cnNlX2lkID0gY291cnNlLmlkO1xuXG4gICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLnVwZGF0ZVN0YXR1cyhjb3Vyc2UpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTphbnkpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpOyAgfVxuXG4gIGdvdG9Db3Vyc2UoaWQ6IG51bWJlcil7XG5cbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdpZCc6IGlkIH0sXG4gICAgfTtcblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NvdXJzZSddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcblxuICB9XG5cbiAgYWRkQ291cnNlKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVhY2gvYWRkLWNvdXJzZSddKTtcbiAgfVxuXG4gIGNhbmNlbCgpe1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG59XG4iXX0=
