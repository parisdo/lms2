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
            _this.teacher.image = 'http://54.169.115.233/teachers/logo/' + teacher.image;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC90ZWFjaC1saXN0L3RlYWNoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFFekQsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFDOUQsNkJBQTBCLHlCQUF5QixDQUFDLENBQUE7QUFRcEQ7SUFRRSw0QkFBb0IsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsYUFBNEIsRUFDNUIsTUFBYztRQUhkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUmxDLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBYSxFQUFFLENBQUM7SUFRM0IsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFHSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUM7SUFHTCxDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUFBLGlCQVVDO1FBUkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7YUFDM0IsU0FBUyxDQUNOLFVBQUEsT0FBTztZQUNMLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLHNDQUFzQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDNUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQUEsaUJBaUJDO1FBZkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7YUFDOUIsU0FBUyxDQUNOLFVBQUMsSUFBUTtZQUNQLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUNsQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFBLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFBLENBQUM7b0JBQy9CLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO1lBQ0gsQ0FBQztRQUNKLENBQUMsRUFDQSxVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsTUFBVztRQUF4QyxpQkFlbUQ7UUFiakQsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDMUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQzthQUNwQyxTQUFTLENBQ1IsVUFBQyxJQUFRO1lBR1AsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUMzQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQztRQUVILENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFBRSxDQUFDO0lBRW5ELHVDQUFVLEdBQVYsVUFBVyxFQUFVO1FBRW5CLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3ZDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7U0FDMUIsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUV0RCxDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBL0ZIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzs7MEJBQUE7SUE0RkYseUJBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBO0FBM0ZZLDBCQUFrQixxQkEyRjlCLENBQUEiLCJmaWxlIjoiYXBwL3RlYWNoL3RlYWNoLWxpc3QvdGVhY2gtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb3Vyc2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvY291cnNlXCI7XG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VGVhY2hlcn0gZnJvbSBcIi4uLy4uL21vZGVscy90ZWFjaGVyXCI7XG5pbXBvcnQge1RlYWNoZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGVhY2hlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXRlYWNoLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJ3RlYWNoLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGVhY2gtbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGVhY2hMaXN0Q29tcG9uZW50e1xuXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBjb3Vyc2VzOiBDb3Vyc2VbXSA9IFtdO1xuICBoaWRlQ291cnNlczogQ291cnNlW10gPSBbXTtcblxuICB0ZWFjaGVyOiBUZWFjaGVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHRlYWNoZXJTZXJ2aWNlOiBUZWFjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuXG4gICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5jaGVja1JvbGUoKSkge1xuICAgICAgICB0aGlzLmdldFRlYWNoZXIoKTtcbiAgICAgICAgdGhpcy5nZXRDb3Vyc2UoKTtcbiAgICAgIH1cblxuXG4gIH1cblxuICBnZXRUZWFjaGVyKCkge1xuXG4gICAgdGhpcy50ZWFjaGVyU2VydmljZS5nZXRUZWFjaGVyKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHRlYWNoZXIgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnRlYWNoZXIgPSB0ZWFjaGVyO1xuICAgICAgICAgICAgICB0aGlzLnRlYWNoZXIuaW1hZ2UgPSAnaHR0cDovLzU0LjE2OS4xMTUuMjMzL3RlYWNoZXJzL2xvZ28vJyArIHRlYWNoZXIuaW1hZ2U7XG4gICAgICAgICAgICAgIHRoaXMudGVhY2hlclNlcnZpY2UudGVhY2hlciA9IHRoaXMudGVhY2hlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgfVxuXG4gIGdldENvdXJzZSgpIHtcblxuICAgIHRoaXMuY291cnNlcyA9IFtdO1xuICAgIHRoaXMuaGlkZUNvdXJzZXMgPSBbXTtcblxuICAgIHRoaXMuY291cnNlU2VydmljZS5nZXRBbGxDb3Vyc2UoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoZGF0YTphbnkpID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IGRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICBpZihkYXRhW2ldLnN0YXR1cyA9PSAnMScpe1xuICAgICAgICAgICAgICAgIHRoaXMuY291cnNlcy5wdXNoKGRhdGFbaV0pO1xuICAgICAgICAgICAgICB9ZWxzZSBpZiAoZGF0YVtpXS5zdGF0dXMgPT0gJzInKXtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVDb3Vyc2VzLnB1c2goZGF0YVtpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gIH1cblxuICB1cGRhdGVTdGF0dXMoY291cnNlOiBDb3Vyc2UsIHN0YXR1czogYW55KXtcblxuICAgIGNvdXJzZS5zdGF0dXNfaWQgPSBzdGF0dXM7XG4gICAgY291cnNlLmNvdXJzZV9pZCA9IGNvdXJzZS5pZDtcblxuICAgIHRoaXMuY291cnNlU2VydmljZS51cGRhdGVTdGF0dXMoY291cnNlKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6YW55KSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTsgIH1cblxuICBnb3RvQ291cnNlKGlkOiBudW1iZXIpe1xuXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICBxdWVyeVBhcmFtczogeyAnaWQnOiBpZCB9LFxuICAgIH07XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jb3Vyc2UnXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG5cbiAgfVxuXG4gIGFkZENvdXJzZSgpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RlYWNoL2FkZC1jb3Vyc2UnXSk7XG4gIH1cblxuICBjYW5jZWwoKXtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxufVxuIl19
