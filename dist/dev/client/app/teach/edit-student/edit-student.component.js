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
var student_1 = require("../../models/student");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var course_service_1 = require("../../services/course.service");
var student_service_1 = require("../../services/student.service");
var EditStudentComponent = (function () {
    function EditStudentComponent(formBuilder, route, router, courseService, studentService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.courseService = courseService;
        this.studentService = studentService;
        this.fakeImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoL…FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==';
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 150,
            resizeMaxWidth: 150
        };
        this.student = new student_1.Student;
        this.students = [];
        this.badges = [];
        this.createForm();
    }
    EditStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.course_id = this.courseService.course.id;
        this.students = this.studentService.students;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.selectedId = +params['id'];
            _this.students.forEach(function (student) {
                student.id == _this.selectedId ? _this.student = student : null;
            });
        });
    };
    EditStudentComponent.prototype.selected = function (imageResult) {
        this.student.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    EditStudentComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'username': ['', [forms_1.Validators.required]],
            'student_id': ['', [forms_1.Validators.required]],
            'name': ['', [forms_1.Validators.required]],
            'overall_xp': ['', [forms_1.Validators.required]],
        });
    };
    EditStudentComponent.prototype.reset = function () {
        this.createForm();
    };
    EditStudentComponent.prototype.save = function (student) {
        this.student.course_id = this.course_id;
        console.log(this.student);
        this.studentService.editStudentProfile(this.student)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
            }
            else {
            }
        }, function (error) { return console.log(error); });
    };
    EditStudentComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EditStudentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-student',
            templateUrl: 'edit-student.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, course_service_1.CourseService, student_service_1.StudentService])
    ], EditStudentComponent);
    return EditStudentComponent;
}());
exports.EditStudentComponent = EditStudentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC9lZGl0LXN0dWRlbnQvZWRpdC1zdHVkZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBRWhELHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXZELCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBUTlEO0lBdUJJLDhCQUFvQixXQUF3QixFQUN4QixLQUFxQixFQUNyQixNQUFjLEVBQ2QsYUFBNEIsRUFDNUIsY0FBOEI7UUFKOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQW5CbEQsY0FBUyxHQUFRLHdKQUF3SixDQUFDO1FBQzFLLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsa0JBQWEsR0FBa0I7WUFDN0IsZUFBZSxFQUFFLEdBQUc7WUFDcEIsY0FBYyxFQUFFLEdBQUc7U0FDcEIsQ0FBQztRQUtGLFlBQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFDdEIsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixXQUFNLEdBQVksRUFBRSxDQUFDO1FBUW5CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQWNDO1FBWkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUU3QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2xCLFdBQVc7YUFDWCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2YsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQzVCLE9BQU8sQ0FBQyxFQUFFLElBQUksS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRSxJQUFJLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBUSxHQUFSLFVBQVMsV0FBd0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU87ZUFDbkMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPO2VBQzNCLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25DLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9DQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELG1DQUFJLEdBQUosVUFBSyxPQUFnQjtRQUVuQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNqRCxTQUFTLENBQ1IsVUFBQyxJQUFTO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFFN0IsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO1lBRVAsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7SUFDTixDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQTdGTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDOzs0QkFBQTtJQTRGRiwyQkFBQztBQUFELENBM0ZBLEFBMkZDLElBQUE7QUEzRlksNEJBQW9CLHVCQTJGaEMsQ0FBQSIsImZpbGUiOiJhcHAvdGVhY2gvZWRpdC1zdHVkZW50L2VkaXQtc3R1ZGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWRnZX0gZnJvbSBcIi4uLy4uL21vZGVscy9iYWRnZVwiO1xuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3N0dWRlbnRcIjtcbmltcG9ydCB7VmFsaWRhdG9ycywgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ltYWdlUmVzdWx0LCBSZXNpemVPcHRpb25zfSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdlZGl0LXN0dWRlbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZWRpdC1zdHVkZW50LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdFN0dWRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICAvL0dldCBwYXJhbWV0ZXJcbiAgICBwcml2YXRlIHNlbGVjdGVkSWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgdXNlckZvcm06IGFueTtcbiAgICBmYWtlSW1hZ2U6IGFueSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFvSEJ3Z0hCZ29JQ0FnTENnb0zigKZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUgvMlE9PSc7XG4gICAgaW1hZ2U6IHN0cmluZyA9ICcnO1xuICAgIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgICByZXNpemVNYXhIZWlnaHQ6IDE1MCxcbiAgICAgIHJlc2l6ZU1heFdpZHRoOiAxNTBcbiAgICB9O1xuXG5cbiAgY291cnNlX2lkOiBhbnk7XG5cbiAgICBzdHVkZW50ID0gbmV3IFN0dWRlbnQ7XG4gICAgc3R1ZGVudHM6IFN0dWRlbnRbXSA9IFtdO1xuXG4gICAgYmFkZ2VzOiBCYWRnZVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSl7XG5cbiAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG5cbiAgICAgIHRoaXMuY291cnNlX2lkID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZS5pZDtcbiAgICAgIHRoaXMuc3R1ZGVudHMgPSB0aGlzLnN0dWRlbnRTZXJ2aWNlLnN0dWRlbnRzO1xuXG4gICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgIHRoaXMuc3R1ZGVudHMuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuICAgICAgICAgICAgc3R1ZGVudC5pZCA9PSB0aGlzLnNlbGVjdGVkSWQgPyB0aGlzLnN0dWRlbnQgPSBzdHVkZW50OiBudWxsO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdHVkZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWQoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG4gICAgICB0aGlzLnN0dWRlbnQuaW1hZ2UgPSBpbWFnZVJlc3VsdC5yZXNpemVkXG4gICAgICAgICYmIGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTFxuICAgICAgICB8fCBpbWFnZVJlc3VsdC5kYXRhVVJMO1xuICAgIH1cblxuICAgIGNyZWF0ZUZvcm0oKXtcbiAgICAgICAgdGhpcy51c2VyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgJ3VzZXJuYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAgICAgJ3N0dWRlbnRfaWQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICAgICAnbmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgICdvdmVyYWxsX3hwJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldCgpe1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICB9XG5cbiAgICBzYXZlKHN0dWRlbnQ6IFN0dWRlbnQpIHtcblxuICAgICAgdGhpcy5zdHVkZW50LmNvdXJzZV9pZCA9IHRoaXMuY291cnNlX2lkO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdHVkZW50KTtcblxuICAgICAgdGhpcy5zdHVkZW50U2VydmljZS5lZGl0U3R1ZGVudFByb2ZpbGUodGhpcy5zdHVkZW50KVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgICAgLy90aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgLy90aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZSg1MDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuXG59XG4iXX0=
