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
        this.courses = [];
        this.hideCourses = [];
    }
    TeachListComponent.prototype.ngOnInit = function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC90ZWFjaC1saXN0L3RlYWNoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFFekQsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFDOUQsNkJBQTBCLHlCQUF5QixDQUFDLENBQUE7QUFRcEQ7SUFRRSw0QkFBb0IsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsYUFBNEIsRUFDNUIsTUFBYztRQUhkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUmxDLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBYSxFQUFFLENBQUM7SUFRM0IsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFHSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUM7SUFHTCxDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUFBLGlCQVVDO1FBUkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7YUFDM0IsU0FBUyxDQUNOLFVBQUEsT0FBTztZQUNMLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBRXZCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0MsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUFBLGlCQWlCQztRQWZDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFO2FBQzlCLFNBQVMsQ0FDTixVQUFDLElBQVE7WUFDUCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDbEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQSxDQUFDO29CQUN4QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQSxDQUFDO29CQUMvQixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsQ0FBQztZQUNILENBQUM7UUFDSixDQUFDLEVBQ0EsVUFBQSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx5Q0FBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLE1BQVc7UUFBeEMsaUJBZW1EO1FBYmpELE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7YUFDcEMsU0FBUyxDQUNSLFVBQUMsSUFBUTtZQUdQLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLENBQUM7UUFFSCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQUUsQ0FBQztJQUVuRCx1Q0FBVSxHQUFWLFVBQVcsRUFBVTtRQUVuQixJQUFJLGdCQUFnQixHQUFxQjtZQUN2QyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1NBQzFCLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFdEQsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQS9GSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7OzBCQUFBO0lBNEZGLHlCQUFDO0FBQUQsQ0EzRkEsQUEyRkMsSUFBQTtBQTNGWSwwQkFBa0IscUJBMkY5QixDQUFBIiwiZmlsZSI6ImFwcC90ZWFjaC90ZWFjaC1saXN0L3RlYWNoLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q291cnNlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvdXJzZVwiO1xuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHtUZWFjaGVyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RlYWNoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC10ZWFjaC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICd0ZWFjaC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RlYWNoLWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlYWNoTGlzdENvbXBvbmVudHtcblxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgY291cnNlczogQ291cnNlW10gPSBbXTtcbiAgaGlkZUNvdXJzZXM6IENvdXJzZVtdID0gW107XG5cbiAgdGVhY2hlcjogVGVhY2hlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0ZWFjaGVyU2VydmljZTogVGVhY2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cblxuICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tSb2xlKCkpIHtcbiAgICAgICAgdGhpcy5nZXRUZWFjaGVyKCk7XG4gICAgICAgIHRoaXMuZ2V0Q291cnNlKCk7XG4gICAgICB9XG5cblxuICB9XG5cbiAgZ2V0VGVhY2hlcigpIHtcblxuICAgIHRoaXMudGVhY2hlclNlcnZpY2UuZ2V0VGVhY2hlcigpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB0ZWFjaGVyID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50ZWFjaGVyID0gdGVhY2hlcjtcbiAgICAgICAgICAgICAgLy8gdGhpcy50ZWFjaGVyLmltYWdlID0gJ2h0dHA6Ly81NC4xNjkuMTE1LjIzMy90ZWFjaGVycy9sb2dvLycgKyB0ZWFjaGVyLmltYWdlO1xuICAgICAgICAgICAgICB0aGlzLnRlYWNoZXJTZXJ2aWNlLnRlYWNoZXIgPSB0aGlzLnRlYWNoZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gIH1cblxuICBnZXRDb3Vyc2UoKSB7XG5cbiAgICB0aGlzLmNvdXJzZXMgPSBbXTtcbiAgICB0aGlzLmhpZGVDb3Vyc2VzID0gW107XG5cbiAgICB0aGlzLmNvdXJzZVNlcnZpY2UuZ2V0QWxsQ291cnNlKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGRhdGE6YW55KSA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPCBkYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgaWYoZGF0YVtpXS5zdGF0dXMgPT0gJzEnKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZXMucHVzaChkYXRhW2ldKTtcbiAgICAgICAgICAgICAgfWVsc2UgaWYgKGRhdGFbaV0uc3RhdHVzID09ICcyJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlQ291cnNlcy5wdXNoKGRhdGFbaV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuICB9XG5cbiAgdXBkYXRlU3RhdHVzKGNvdXJzZTogQ291cnNlLCBzdGF0dXM6IGFueSl7XG5cbiAgICBjb3Vyc2Uuc3RhdHVzX2lkID0gc3RhdHVzO1xuICAgIGNvdXJzZS5jb3Vyc2VfaWQgPSBjb3Vyc2UuaWQ7XG5cbiAgICB0aGlzLmNvdXJzZVNlcnZpY2UudXBkYXRlU3RhdHVzKGNvdXJzZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOmFueSkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7ICB9XG5cbiAgZ290b0NvdXJzZShpZDogbnVtYmVyKXtcblxuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgcXVlcnlQYXJhbXM6IHsgJ2lkJzogaWQgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY291cnNlJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xuXG4gIH1cblxuICBhZGRDb3Vyc2UoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy90ZWFjaC9hZGQtY291cnNlJ10pO1xuICB9XG5cbiAgY2FuY2VsKCl7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbn1cbiJdfQ==
