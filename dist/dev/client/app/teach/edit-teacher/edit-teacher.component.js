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
var message_service_1 = require('../../services/message-service');
var EditTeacherComponent = (function () {
    function EditTeacherComponent(authService, teacherService, formBuilder, router, courseService) {
        this.authService = authService;
        this.teacherService = teacherService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.courseService = courseService;
        this.teacher = new teacher_1.Teacher;
        this.msgs = [];
        this.fakeImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoL…FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==';
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 150,
            resizeMaxWidth: 150
        };
        this.newImage = false;
        this.createForm();
    }
    EditTeacherComponent.prototype.ngOnInit = function () {
        if (this.teacherService.teacher != null) {
            this.teacher = this.teacherService.teacher;
            this.teacher.image = 'http://54.255.138.5/teachers/logo/' + this.teacher.image;
            this.image = this.teacher.image;
        }
        else {
            this.router.navigate(['/teach']);
        }
    };
    EditTeacherComponent.prototype.selected = function (imageResult) {
        this.newImage = true;
        this.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    EditTeacherComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'name': ['', [forms_1.Validators.required]],
            'image': [''],
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
        var _this = this;
        if (this.newImage) {
            this.teacher.image = this.image;
        }
        else {
            this.teacher.image = this.teacher.image.substring(34);
        }
        console.log(this.teacher.image);
        this.teacherService.editTeacherProfile(this.teacher)
            .subscribe(function (data) {
            if (data.status == "success") {
                _this.showMessage(message_service_1.msg.getRegisterMessage(200));
            }
            else {
                _this.showMessage(message_service_1.msg.getRegisterMessage(500));
            }
        }, function (error) { return console.log(error); });
    };
    EditTeacherComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC9lZGl0LXRlYWNoZXIvZWRpdC10ZWFjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHNCQUE4RCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELG1DQUFnQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3BFLCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELGdDQUFrQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBU25EO0lBZ0JJLDhCQUFtQixXQUF3QixFQUFVLGNBQThCLEVBQy9ELFdBQXdCLEVBQVUsTUFBYyxFQUFVLGFBQTRCO1FBRHZGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQy9ELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWjFHLFlBQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFDdEIsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQUdyQixjQUFTLEdBQVEsd0pBQXdKLENBQUM7UUFDMUssVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFrQjtZQUM3QixlQUFlLEVBQUUsR0FBRztZQUNwQixjQUFjLEVBQUUsR0FBRztTQUNwQixDQUFDO1FBb0JGLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFmeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBRUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksSUFBSSxD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RyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMscUJBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO0lBQ04sQ0FBQztJQUVILDBDQUFXLEdBQVgsVUFBWSxHQUFRO1FBQXBCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBR0QscUNBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDBDQUFXLEdBQVgsY0FBZSxDQUFDO0lBNUdsQjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOzs0QkFBQTtJQTBHRiwyQkFBQztBQUFELENBekdBLEFBeUdDLElBQUE7QUF6R1ksNEJBQW9CLHVCQXlHaEMsQ0FBQSIsImZpbGUiOiJhcHAvdGVhY2gvZWRpdC10ZWFjaGVyL2VkaXQtdGVhY2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Jlc2l6ZU9wdGlvbnMsIEltYWdlUmVzdWx0fSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHtUZWFjaGVyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RlYWNoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xuaW1wb3J0IHttc2d9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCJwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL2FwaVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZWRpdC10ZWFjaGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2VkaXQtdGVhY2hlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydlZGl0LXRlYWNoZXIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0VGVhY2hlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIC8vR2V0IHBhcmFtZXRlclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIGNvdXJzZV9pZDogYW55O1xuICAgIHRlYWNoZXIgPSBuZXcgVGVhY2hlcjtcbiAgICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcblxuICAgIHVzZXJGb3JtOiBhbnk7XG4gICAgZmFrZUltYWdlOiBhbnkgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndCREFBb0hCd2dIQmdvSUNBZ0xDZ29M4oCmRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFILzJRPT0nO1xuICAgIGltYWdlOiBzdHJpbmcgPSAnJztcbiAgICByZXNpemVPcHRpb25zOiBSZXNpemVPcHRpb25zID0ge1xuICAgICAgcmVzaXplTWF4SGVpZ2h0OiAxNTAsXG4gICAgICByZXNpemVNYXhXaWR0aDogMTUwXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgdGVhY2hlclNlcnZpY2U6IFRlYWNoZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UpXG4gICAge1xuICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgIGlmICh0aGlzLnRlYWNoZXJTZXJ2aWNlLnRlYWNoZXIgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRlYWNoZXIgPSB0aGlzLnRlYWNoZXJTZXJ2aWNlLnRlYWNoZXI7XG4gICAgICAgIHRoaXMudGVhY2hlci5pbWFnZSA9ICdodHRwOi8vNTQuMjU1LjEzOC41L3RlYWNoZXJzL2xvZ28vJyArIHRoaXMudGVhY2hlci5pbWFnZTtcbiAgICAgICAgdGhpcy5pbWFnZSA9ICB0aGlzLnRlYWNoZXIuaW1hZ2U7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RlYWNoJ10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld0ltYWdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzZWxlY3RlZChpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcblxuICAgICAgdGhpcy5uZXdJbWFnZSA9IHRydWU7XG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2VSZXN1bHQucmVzaXplZFxuICAgICAgICAmJiBpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkxcbiAgICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtKCl7XG5cbiAgICAgIHRoaXMudXNlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgJ25hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICdpbWFnZSc6IFsnJ10sXG4gICAgICAgICd0aXRsZSc6IFsn4LiZ4Liy4LiiJ10sXG4gICAgICAgICdwb3NpdGlvbic6IFsn4LiE4Lij4Li54Lit4Lix4LiV4Lij4Liy4LiI4LmJ4Liy4LiHJ10sXG4gICAgICAgICdpZF9jYXJkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UuaXNOdW1iZXIsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTMpXV0sXG4gICAgICAgICdwaG9uZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLmlzTnVtYmVyXV0sXG4gICAgICAgICdhZGRyZXNzJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAndGVhY2hpbmdfbGV2ZWwnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICdpbnN0aXR1dGlvbic6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgJ3Byb3ZpbmNlJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldCgpe1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCh0ZWFjaGVyOiBUZWFjaGVyKSB7XG5cbiAgICAgIGlmKHRoaXMubmV3SW1hZ2Upe1xuICAgICAgICB0aGlzLnRlYWNoZXIuaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnRlYWNoZXIuaW1hZ2UgPSB0aGlzLnRlYWNoZXIuaW1hZ2Uuc3Vic3RyaW5nKDM0KTtcbiAgICAgIH1cblxuICAgICAgLy90aGlzLnRlYWNoZXIuaW1hZ2UgPSB0aGlzLnRlYWNoZXIuaW1hZ2Uuc3Vic3RyaW5nKDM0KTtcbiAgICAgIGNvbnNvbGUubG9nKCB0aGlzLnRlYWNoZXIuaW1hZ2UpO1xuXG4gICAgICB0aGlzLnRlYWNoZXJTZXJ2aWNlLmVkaXRUZWFjaGVyUHJvZmlsZSh0aGlzLnRlYWNoZXIpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09IFwic3VjY2Vzc1wiKXtcbiAgICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0UmVnaXN0ZXJNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRSZWdpc3Rlck1lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICApO1xuICAgIH1cblxuICBzaG93TWVzc2FnZShtc2c6IGFueSl7XG4gICAgdGhpcy5tc2dzID0gW107XG4gICAgdGhpcy5tc2dzLnB1c2gobXNnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubXNncyA9IFtdO1xuICAgIH0sIDMwMDApO1xuICB9XG5cblxuICBjYW5jZWwoKXtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge31cblxuXG59XG4iXX0=
