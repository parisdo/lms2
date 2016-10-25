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
var teacher_1 = require("../models/teacher");
var router_1 = require("@angular/router");
var teacher_service_1 = require("../services/teacher.service");
var auth_service_1 = require("./auth.service");
var validation_service_1 = require("../services/validation.service");
var SignupComponent = (function () {
    function SignupComponent(authService, teacherService, formBuilder, router) {
        this.authService = authService;
        this.teacherService = teacherService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.teacher = new teacher_1.Teacher();
        this.fakeImage = 'http://fakeimg.pl/150/?text=image';
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 150,
            resizeMaxWidth: 150
        };
        this.createForm();
    }
    SignupComponent.prototype.onChange = function (event) {
        var files1 = event.srcElement.files;
        var files2 = event.srcElement.files;
        var files = [];
        files.push(files1, files2);
        console.log('test send file');
        console.log(files);
        this.authService.upload(files);
    };
    SignupComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            'password': ['', [forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator]],
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
    SignupComponent.prototype.reset = function () {
        this.createForm();
    };
    SignupComponent.prototype.selected = function (imageResult) {
        this.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    SignupComponent.prototype.onSubmit = function (teacher) {
        var _this = this;
        this.image == '' ? this.image = this.fakeImage : this.image;
        this.teacher = new teacher_1.Teacher(teacher.email, teacher.password, teacher.name, this.image, teacher.title, teacher.position, teacher.id_card, teacher.phone, teacher.address, teacher.teaching_level, teacher.institution, teacher.province);
        console.log(this.teacher);
        this.teacherService.addTeacher(this.teacher)
            .subscribe(function (teacher) {
            console.log(teacher);
            _this.router.navigate(['/auth/signin']);
        }, function (error) { return console.log(error); });
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-signup',
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, teacher_service_1.TeacherService, forms_1.FormBuilder, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3NpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQkFBOEQsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRSx3QkFBc0IsbUJBQW1CLENBQUMsQ0FBQTtBQUMxQyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxnQ0FBNkIsNkJBQTZCLENBQUMsQ0FBQTtBQUMzRCw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUUzQyxtQ0FBZ0MsZ0NBQWdDLENBQUMsQ0FBQTtBQVNqRTtJQVdFLHlCQUFtQixXQUF3QixFQUFVLGNBQThCLEVBQy9ELFdBQXdCLEVBQVUsTUFBYztRQURqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMvRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUcEUsWUFBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBUSxtQ0FBbUMsQ0FBQztRQUNyRCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQWtCO1lBQzdCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1NBQ3BCLENBQUM7UUFLQSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBRXBDLElBQUksS0FBSyxHQUFVLEVBQUUsQ0FBQztRQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGdC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QUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUMvQixDQUFDO0lBQ0osQ0FBQztJQXJGSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDOzt1QkFBQTtJQWlGRixzQkFBQztBQUFELENBaEZBLEFBZ0ZDLElBQUE7QUFoRlksdUJBQWUsa0JBZ0YzQixDQUFBIiwiZmlsZSI6ImFwcC9hdXRoL3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VGVhY2hlcn0gZnJvbSBcIi4uL21vZGVscy90ZWFjaGVyXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtUZWFjaGVyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3RlYWNoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ltYWdlUmVzdWx0LCBSZXNpemVPcHRpb25zfSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3JzIH0gZnJvbSAnbmcyLXZhbGlkYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtc2lnbnVwJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lnbnVwLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IHtcblxuICB1c2VyRm9ybTogYW55O1xuICB0ZWFjaGVyID0gbmV3IFRlYWNoZXIoKTtcbiAgZmFrZUltYWdlOiBhbnkgPSAnaHR0cDovL2Zha2VpbWcucGwvMTUwLz90ZXh0PWltYWdlJztcbiAgaW1hZ2U6IHN0cmluZyA9ICcnO1xuICByZXNpemVPcHRpb25zOiBSZXNpemVPcHRpb25zID0ge1xuICAgIHJlc2l6ZU1heEhlaWdodDogMTUwLFxuICAgIHJlc2l6ZU1heFdpZHRoOiAxNTBcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHRlYWNoZXJTZXJ2aWNlOiBUZWFjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpXG4gIHtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB2YXIgZmlsZXMxID0gZXZlbnQuc3JjRWxlbWVudC5maWxlcztcbiAgICB2YXIgZmlsZXMyID0gZXZlbnQuc3JjRWxlbWVudC5maWxlcztcblxuICAgIGxldCBmaWxlczogYW55W10gPSBbXTtcbiAgICBmaWxlcy5wdXNoKGZpbGVzMSwgZmlsZXMyKTtcbiAgICBjb25zb2xlLmxvZygndGVzdCBzZW5kIGZpbGUnKTtcbiAgICBjb25zb2xlLmxvZyhmaWxlcyk7XG5cbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnVwbG9hZChmaWxlcyk7XG4gIH1cblxuICBjcmVhdGVGb3JtKCl7XG4gICAgLy92YXIgcGFzc3dvcmQgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5wYXNzd29yZFZhbGlkYXRvcl0pO1xuICAgIC8vIHZhciBjZXJ0YWluUGFzc3dvcmQgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21WYWxpZGF0b3JzLmVxdWFsVG8ocGFzc3dvcmQpXSk7XG5cbiAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnZW1haWwnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl1dLFxuICAgICAgJ3Bhc3N3b3JkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UucGFzc3dvcmRWYWxpZGF0b3JdXSxcbiAgICAgIC8vIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIC8vIGNlcnRhaW5QYXNzd29yZDogY2VydGFpblBhc3N3b3JkLFxuICAgICAgJ25hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnaW1hZ2UnOiBbJycsXSxcbiAgICAgICd0aXRsZSc6IFsn4LiZ4Liy4LiiJ10sXG4gICAgICAncG9zaXRpb24nOiBbJ+C4hOC4o+C4ueC4reC4seC4leC4o+C4suC4iOC5ieC4suC4hyddLFxuICAgICAgJ2lkX2NhcmQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5pc051bWJlciwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMTMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMyldXSxcbiAgICAgICdwaG9uZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLmlzTnVtYmVyXV0sXG4gICAgICAnYWRkcmVzcyc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICd0ZWFjaGluZ19sZXZlbCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICdpbnN0aXR1dGlvbic6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICdwcm92aW5jZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuXG4gIHNlbGVjdGVkKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuICAgICAgdGhpcy5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICAgICAmJiBpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkxcbiAgICAgICAgICB8fCBpbWFnZVJlc3VsdC5kYXRhVVJMO1xuICB9XG5cbiAgb25TdWJtaXQodGVhY2hlcjogVGVhY2hlcikge1xuXG4gICAgdGhpcy5pbWFnZSA9PSAnJyA/IHRoaXMuaW1hZ2UgPSB0aGlzLmZha2VJbWFnZSA6IHRoaXMuaW1hZ2U7XG5cbiAgICB0aGlzLnRlYWNoZXIgPSBuZXcgVGVhY2hlcih0ZWFjaGVyLmVtYWlsLCB0ZWFjaGVyLnBhc3N3b3JkLCB0ZWFjaGVyLm5hbWUsIHRoaXMuaW1hZ2UsIHRlYWNoZXIudGl0bGUsIHRlYWNoZXIucG9zaXRpb24sXG4gICAgICB0ZWFjaGVyLmlkX2NhcmQsIHRlYWNoZXIucGhvbmUsIHRlYWNoZXIuYWRkcmVzcywgdGVhY2hlci50ZWFjaGluZ19sZXZlbCwgdGVhY2hlci5pbnN0aXR1dGlvbiwgdGVhY2hlci5wcm92aW5jZVxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnRlYWNoZXIpO1xuXG4gICAgdGhpcy50ZWFjaGVyU2VydmljZS5hZGRUZWFjaGVyKHRoaXMudGVhY2hlcilcbiAgICAuc3Vic2NyaWJlKFxuICAgICAgICB0ZWFjaGVyICA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codGVhY2hlcik7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9zaWduaW4nXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+ICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICApO1xuICB9XG59XG5cblxuIl19
