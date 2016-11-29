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
var config_1 = require("../../services/config");
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
            this.teacher.image = (config_1.publicUrl + "/teachers/logo/") + this.teacher.image;
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
            var teacherPath = (config_1.publicUrl + "teachers/logo/").length;
            this.teacher.image = this.teacher.image.substring(teacherPath);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC9lZGl0LXRlYWNoZXIvZWRpdC10ZWFjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHNCQUE4RCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELG1DQUFnQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3BFLCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELGdDQUFrQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRW5ELHVCQUF5Qix1QkFBdUIsQ0FBQyxDQUFBO0FBU2pEO0lBZ0JJLDhCQUFtQixXQUF3QixFQUFVLGNBQThCLEVBQy9ELFdBQXdCLEVBQVUsTUFBYyxFQUFVLGFBQTRCO1FBRHZGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQy9ELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWjFHLFlBQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFDdEIsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQUdyQixjQUFTLEdBQVEsd0pBQXdKLENBQUM7UUFDMUssVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFrQjtZQUM3QixlQUFlLEVBQUUsR0FBRztZQUNwQixjQUFjLEVBQUUsR0FBRztTQUNwQixDQUFDO1FBb0JGLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFmeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBRUUsRUFBRSxDQUFDLENBQUMsSUFBSSxD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aGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UmVzaXplT3B0aW9ucywgSW1hZ2VSZXN1bHR9IGZyb20gXCJuZzItaW1hZ2V1cGxvYWRcIjtcbmltcG9ydCB7VGVhY2hlcn0gZnJvbSBcIi4uLy4uL21vZGVscy90ZWFjaGVyXCI7XG5pbXBvcnQge1RlYWNoZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGVhY2hlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge21zZ30gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcInByaW1lbmcvY29tcG9uZW50cy9jb21tb24vYXBpXCI7XG5pbXBvcnQge3B1YmxpY1VybH0gZnJvbSAgXCIuLi8uLi9zZXJ2aWNlcy9jb25maWdcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZWRpdC10ZWFjaGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2VkaXQtdGVhY2hlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2VkaXQtdGVhY2hlci5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRUZWFjaGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgLy9HZXQgcGFyYW1ldGVyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgY291cnNlX2lkOiBhbnk7XG4gICAgdGVhY2hlciA9IG5ldyBUZWFjaGVyO1xuICAgIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gICAgdXNlckZvcm06IGFueTtcbiAgICBmYWtlSW1hZ2U6IGFueSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFvSEJ3Z0hCZ29JQ0FnTENnb0zigKZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUgvMlE9PSc7XG4gICAgaW1hZ2U6IHN0cmluZyA9ICcnO1xuICAgIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgICByZXNpemVNYXhIZWlnaHQ6IDE1MCxcbiAgICAgIHJlc2l6ZU1heFdpZHRoOiAxNTBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSB0ZWFjaGVyU2VydmljZTogVGVhY2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSlcbiAgICB7XG4gICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgaWYgKHRoaXMudGVhY2hlclNlcnZpY2UudGVhY2hlciAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMudGVhY2hlciA9IHRoaXMudGVhY2hlclNlcnZpY2UudGVhY2hlcjtcbiAgICAgICAgdGhpcy50ZWFjaGVyLmltYWdlID0gYCR7cHVibGljVXJsfS90ZWFjaGVycy9sb2dvL2AgKyB0aGlzLnRlYWNoZXIuaW1hZ2U7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSAgdGhpcy50ZWFjaGVyLmltYWdlO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy90ZWFjaCddKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdJbWFnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc2VsZWN0ZWQoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG5cbiAgICAgIHRoaXMubmV3SW1hZ2UgPSB0cnVlO1xuICAgICAgdGhpcy5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICAgJiYgaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMXG4gICAgICAgIHx8IGltYWdlUmVzdWx0LmRhdGFVUkw7XG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybSgpe1xuXG4gICAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICduYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAnaW1hZ2UnOiBbJyddLFxuICAgICAgICAndGl0bGUnOiBbJ+C4meC4suC4oiddLFxuICAgICAgICAncG9zaXRpb24nOiBbJ+C4hOC4o+C4ueC4reC4seC4leC4o+C4suC4iOC5ieC4suC4hyddLFxuICAgICAgICAnaWRfY2FyZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLmlzTnVtYmVyLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxMyksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEzKV1dLFxuICAgICAgICAncGhvbmUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5pc051bWJlcl1dLFxuICAgICAgICAnYWRkcmVzcyc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgJ3RlYWNoaW5nX2xldmVsJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAnaW5zdGl0dXRpb24nOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICdwcm92aW5jZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQodGVhY2hlcjogVGVhY2hlcikge1xuXG4gICAgICBpZih0aGlzLm5ld0ltYWdlKXtcbiAgICAgICAgdGhpcy50ZWFjaGVyLmltYWdlID0gdGhpcy5pbWFnZTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgbGV0IHRlYWNoZXJQYXRoID0gYCR7cHVibGljVXJsfXRlYWNoZXJzL2xvZ28vYC5sZW5ndGg7XG4gICAgICAgIHRoaXMudGVhY2hlci5pbWFnZSA9IHRoaXMudGVhY2hlci5pbWFnZS5zdWJzdHJpbmcodGVhY2hlclBhdGgpO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyggdGhpcy50ZWFjaGVyLmltYWdlKTtcblxuICAgICAgdGhpcy50ZWFjaGVyU2VydmljZS5lZGl0VGVhY2hlclByb2ZpbGUodGhpcy50ZWFjaGVyKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIil7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFJlZ2lzdGVyTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0UmVnaXN0ZXJNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgc2hvd01lc3NhZ2UobXNnOiBhbnkpe1xuICAgIHRoaXMubXNncyA9IFtdO1xuICAgIHRoaXMubXNncy5wdXNoKG1zZyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG5cbiAgY2FuY2VsKCl7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHt9XG5cblxufVxuIl19
