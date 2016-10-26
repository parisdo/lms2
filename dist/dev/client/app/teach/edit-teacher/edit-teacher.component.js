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
var forms_1 = require('@angular/forms');
var router_1 = require("@angular/router");
var teacher_1 = require("../../models/teacher");
var teacher_service_1 = require("../../services/teacher.service");
var auth_service_1 = require("../../auth/auth.service");
var validation_service_1 = require("../../services/validation.service");
var course_service_1 = require("../../services/course.service");
var EditTeacherComponent = (function () {
    function EditTeacherComponent(authService, teacherService, formBuilder, router, courseService) {
        this.authService = authService;
        this.teacherService = teacherService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.courseService = courseService;
        this.teacher = new teacher_1.Teacher;
        this.fakeImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoL…FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==';
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 150,
            resizeMaxWidth: 150
        };
        this.createForm();
    }
    EditTeacherComponent.prototype.ngOnInit = function () {
        if (this.teacherService.teacher != null) {
            this.teacher = this.teacherService.teacher;
        }
        else {
            this.router.navigate(['/teach']);
        }
    };
    EditTeacherComponent.prototype.selected = function (imageResult) {
        this.teacher.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    EditTeacherComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'name': ['', [forms_1.Validators.required]],
            'image': ['',],
            'title': ['นาย'],
            'position': ['ครูอัตราจ้าง'],
            'id_card': ['', [forms_1.Validators.required, validation_service_1.ValidationService.isNumber, forms_1.Validators.minLength(13), forms_1.Validators.maxLength(13)]],
            'phone': ['', [forms_1.Validators.required, validation_service_1.ValidationService.isNumber]],
            'address': ['', [forms_1.Validators.required]],
            'teaching_level': ['', [forms_1.Validators.required]],
            'institution': ['', [forms_1.Validators.required]],
            'province': ['', [forms_1.Validators.required]]
        });
    };
    EditTeacherComponent.prototype.reset = function () {
        this.createForm();
    };
    EditTeacherComponent.prototype.onSubmit = function (teacher) {
        console.log(this.teacher);
        this.teacherService.editTeacherProfile(this.teacher)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
            }
            else {
            }
        }, function (error) { return console.log(error); });
    };
    EditTeacherComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditTeacherComponent.prototype.ngOnDestroy = function () { };
    EditTeacherComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-teacher',
            templateUrl: 'edit-teacher.component.html',
            styleUrls: ['edit-teacher.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, teacher_service_1.TeacherService, forms_1.FormBuilder, router_1.Router, course_service_1.CourseService])
    ], EditTeacherComponent);
    return EditTeacherComponent;
}());
exports.EditTeacherComponent = EditTeacherComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC9lZGl0LXRlYWNoZXIvZWRpdC10ZWFjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHNCQUE4RCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELG1DQUFnQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3BFLCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBUTVEO0lBaUJJLDhCQUFtQixXQUF3QixFQUFVLGNBQThCLEVBQy9ELFdBQXdCLEVBQVUsTUFBYyxFQUFVLGFBQTRCO1FBRHZGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQy9ELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWDFHLFlBQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFHdEIsY0FBUyxHQUFRLHdKQUF3SixDQUFDO1FBQzFLLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsa0JBQWEsR0FBa0I7WUFDN0IsZUFBZSxFQUFFLEdBQUc7WUFDcEIsY0FBYyxFQUFFLEdBQUc7U0FDcEIsQ0FBQztRQUtBLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUVFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUU3QyxDQUFDO1FB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSZXNpemVPcHRpb25zLCBJbWFnZVJlc3VsdH0gZnJvbSBcIm5nMi1pbWFnZXVwbG9hZFwiO1xuaW1wb3J0IHtUZWFjaGVyfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3RlYWNoZXJcIjtcbmltcG9ydCB7VGVhY2hlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90ZWFjaGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2VkaXQtdGVhY2hlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdlZGl0LXRlYWNoZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZWRpdC10ZWFjaGVyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdFRlYWNoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICAvL0dldCBwYXJhbWV0ZXJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcblxuICAgIGNvdXJzZV9pZDogYW55O1xuXG4gICAgdGVhY2hlciA9IG5ldyBUZWFjaGVyO1xuXG4gICAgdXNlckZvcm06IGFueTtcbiAgICBmYWtlSW1hZ2U6IGFueSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFvSEJ3Z0hCZ29JQ0FnTENnb0zigKZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUgvMlE9PSc7XG4gICAgaW1hZ2U6IHN0cmluZyA9ICcnO1xuICAgIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgICByZXNpemVNYXhIZWlnaHQ6IDE1MCxcbiAgICAgIHJlc2l6ZU1heFdpZHRoOiAxNTBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSB0ZWFjaGVyU2VydmljZTogVGVhY2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSlcbiAgICB7XG4gICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgaWYgKHRoaXMudGVhY2hlclNlcnZpY2UudGVhY2hlciAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMudGVhY2hlciA9IHRoaXMudGVhY2hlclNlcnZpY2UudGVhY2hlcjtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVhY2gnXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0ZWQoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG4gICAgICB0aGlzLnRlYWNoZXIuaW1hZ2UgPSBpbWFnZVJlc3VsdC5yZXNpemVkXG4gICAgICAgICYmIGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTFxuICAgICAgICB8fCBpbWFnZVJlc3VsdC5kYXRhVVJMO1xuICAgIH1cblxuICAgIGNyZWF0ZUZvcm0oKXtcblxuICAgICAgdGhpcy51c2VyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAnbmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgJ2ltYWdlJzogWycnLF0sXG4gICAgICAgICd0aXRsZSc6IFsn4LiZ4Liy4LiiJ10sXG4gICAgICAgICdwb3NpdGlvbic6IFsn4LiE4Lij4Li54Lit4Lix4LiV4Lij4Liy4LiI4LmJ4Liy4LiHJ10sXG4gICAgICAgICdpZF9jYXJkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UuaXNOdW1iZXIsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTMpXV0sXG4gICAgICAgICdwaG9uZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLmlzTnVtYmVyXV0sXG4gICAgICAgICdhZGRyZXNzJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAndGVhY2hpbmdfbGV2ZWwnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICdpbnN0aXR1dGlvbic6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgJ3Byb3ZpbmNlJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldCgpe1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCh0ZWFjaGVyOiBUZWFjaGVyKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudGVhY2hlcik7XG5cbiAgICAgIHRoaXMudGVhY2hlclNlcnZpY2UuZWRpdFRlYWNoZXJQcm9maWxlKHRoaXMudGVhY2hlcilcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICAgIC8vdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlVGVhY2hlcnNTY29yZU1lc3NhZ2UoMjAwKSk7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgIC8vdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlVGVhY2hlcnNTY29yZU1lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNhbmNlbCgpe1xuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge31cblxuXG59XG4iXX0=
