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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC9lZGl0LXRlYWNoZXIvZWRpdC10ZWFjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHNCQUE4RCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELG1DQUFnQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3BFLCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBUTVEO0lBaUJJLDhCQUFtQixXQUF3QixFQUFVLGNBQThCLEVBQy9ELFdBQXdCLEVBQVUsTUFBYyxFQUFVLGFBQTRCO1FBRHZGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQy9ELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWDFHLFlBQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFHdEIsY0FBUyxHQUFRLHdKQUF3SixDQUFDO1FBQzFLLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsa0JBQWEsR0FBa0I7WUFDN0IsZUFBZSxFQUFFLEdBQUc7WUFDcEIsY0FBYyxFQUFFLEdBQUc7U0FDcEIsQ0FBQztRQUtBLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUVFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUU3QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFFRCx1Q0FBUSxHQUFSLFVBQVMsV0FBd0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU87ZUFDbkMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPO2VBQzNCLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFFRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3JDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2hCLFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxzQ0FBaUIsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0SCxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxzQ0FBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHVDQUFRLEdBQVIsVUFBUyxPQUFnQjtRQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDakQsU0FBUyxDQUNSLFVBQUMsSUFBUztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBRTdCLENBQUM7WUFBQSxJQUFJLENBQUMsQ0FBQztZQUVQLENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO0lBQ04sQ0FBQztJQUVELDBDQUFXLEdBQVgsY0FBZSxDQUFDO0lBbkZwQjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOzs0QkFBQTtJQWlGRiwyQkFBQztBQUFELENBaEZBLEFBZ0ZDLElBQUE7QUFoRlksNEJBQW9CLHVCQWdGaEMsQ0FBQSIsImZpbGUiOiJhcHAvdGVhY2gvZWRpdC10ZWFjaGVyL2VkaXQtdGVhY2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Jlc2l6ZU9wdGlvbnMsIEltYWdlUmVzdWx0fSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHtUZWFjaGVyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RlYWNoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZWRpdC10ZWFjaGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2VkaXQtdGVhY2hlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydlZGl0LXRlYWNoZXIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0VGVhY2hlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIC8vR2V0IHBhcmFtZXRlclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY291cnNlX2lkOiBhbnk7XG5cbiAgICB0ZWFjaGVyID0gbmV3IFRlYWNoZXI7XG5cbiAgICB1c2VyRm9ybTogYW55O1xuICAgIGZha2VJbWFnZTogYW55ID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3QkRBQW9IQndnSEJnb0lDQWdMQ2dvTOKApkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBSC8yUT09JztcbiAgICBpbWFnZTogc3RyaW5nID0gJyc7XG4gICAgcmVzaXplT3B0aW9uczogUmVzaXplT3B0aW9ucyA9IHtcbiAgICAgIHJlc2l6ZU1heEhlaWdodDogMTUwLFxuICAgICAgcmVzaXplTWF4V2lkdGg6IDE1MFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHRlYWNoZXJTZXJ2aWNlOiBUZWFjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlKVxuICAgIHtcbiAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICBpZiAodGhpcy50ZWFjaGVyU2VydmljZS50ZWFjaGVyICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy50ZWFjaGVyID0gdGhpcy50ZWFjaGVyU2VydmljZS50ZWFjaGVyO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy90ZWFjaCddKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RlZChpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgIHRoaXMudGVhY2hlci5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICAgJiYgaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMXG4gICAgICAgIHx8IGltYWdlUmVzdWx0LmRhdGFVUkw7XG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybSgpe1xuXG4gICAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICduYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAnaW1hZ2UnOiBbJycsXSxcbiAgICAgICAgJ3RpdGxlJzogWyfguJnguLLguKInXSxcbiAgICAgICAgJ3Bvc2l0aW9uJzogWyfguITguKPguLnguK3guLHguJXguKPguLLguIjguYnguLLguIcnXSxcbiAgICAgICAgJ2lkX2NhcmQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5pc051bWJlciwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMTMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMyldXSxcbiAgICAgICAgJ3Bob25lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UuaXNOdW1iZXJdXSxcbiAgICAgICAgJ2FkZHJlc3MnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICd0ZWFjaGluZ19sZXZlbCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgJ2luc3RpdHV0aW9uJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAncHJvdmluY2UnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2V0KCl7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgIH1cblxuICAgIG9uU3VibWl0KHRlYWNoZXI6IFRlYWNoZXIpIHtcblxuICAgICAgY29uc29sZS5sb2codGhpcy50ZWFjaGVyKTtcblxuICAgICAgdGhpcy50ZWFjaGVyU2VydmljZS5lZGl0VGVhY2hlclByb2ZpbGUodGhpcy50ZWFjaGVyKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgICAgLy90aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVUZWFjaGVyc1Njb3JlTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgLy90aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVUZWFjaGVyc1Njb3JlTWVzc2FnZSg1MDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7fVxuXG5cbn1cbiJdfQ==
