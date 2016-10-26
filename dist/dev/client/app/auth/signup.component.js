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
    SignupComponent.prototype.cancel = function () {
        window.history.back();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3NpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQkFBOEQsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRSx3QkFBc0IsbUJBQW1CLENBQUMsQ0FBQTtBQUMxQyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxnQ0FBNkIsNkJBQTZCLENBQUMsQ0FBQTtBQUMzRCw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUUzQyxtQ0FBZ0MsZ0NBQWdDLENBQUMsQ0FBQTtBQVNqRTtJQVdFLHlCQUFtQixXQUF3QixFQUFVLGNBQThCLEVBQy9ELFdBQXdCLEVBQVUsTUFBYztRQURqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMvRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUcEUsWUFBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBUSxtQ0FBbUMsQ0FBQztRQUNyRCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQWtCO1lBQzdCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1NBQ3BCLENBQUM7UUFLQSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBRXBDLElBQUksS0FBSyxHQUFVLEVBQUUsQ0FBQztRQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGdC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QUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUMvQixDQUFDO0lBQ0osQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUF6Rkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzs7dUJBQUE7SUFzRkYsc0JBQUM7QUFBRCxDQXJGQSxBQXFGQyxJQUFBO0FBckZZLHVCQUFlLGtCQXFGM0IsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9zaWdudXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VGVhY2hlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy90ZWFjaGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtJbWFnZVJlc3VsdCwgUmVzaXplT3B0aW9uc30gZnJvbSBcIm5nMi1pbWFnZXVwbG9hZFwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9ycyB9IGZyb20gJ25nMi12YWxpZGF0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXNpZ251cCcsXG4gIHRlbXBsYXRlVXJsOiAnc2lnbnVwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZ251cC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCB7XG5cbiAgdXNlckZvcm06IGFueTtcbiAgdGVhY2hlciA9IG5ldyBUZWFjaGVyKCk7XG4gIGZha2VJbWFnZTogYW55ID0gJ2h0dHA6Ly9mYWtlaW1nLnBsLzE1MC8/dGV4dD1pbWFnZSc7XG4gIGltYWdlOiBzdHJpbmcgPSAnJztcbiAgcmVzaXplT3B0aW9uczogUmVzaXplT3B0aW9ucyA9IHtcbiAgICByZXNpemVNYXhIZWlnaHQ6IDE1MCxcbiAgICByZXNpemVNYXhXaWR0aDogMTUwXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSB0ZWFjaGVyU2VydmljZTogVGVhY2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKVxuICB7XG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogYW55KSB7XG4gICAgdmFyIGZpbGVzMSA9IGV2ZW50LnNyY0VsZW1lbnQuZmlsZXM7XG4gICAgdmFyIGZpbGVzMiA9IGV2ZW50LnNyY0VsZW1lbnQuZmlsZXM7XG5cbiAgICBsZXQgZmlsZXM6IGFueVtdID0gW107XG4gICAgZmlsZXMucHVzaChmaWxlczEsIGZpbGVzMik7XG4gICAgY29uc29sZS5sb2coJ3Rlc3Qgc2VuZCBmaWxlJyk7XG4gICAgY29uc29sZS5sb2coZmlsZXMpO1xuXG4gICAgdGhpcy5hdXRoU2VydmljZS51cGxvYWQoZmlsZXMpO1xuICB9XG5cbiAgY3JlYXRlRm9ybSgpe1xuICAgIC8vdmFyIHBhc3N3b3JkID0gbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UucGFzc3dvcmRWYWxpZGF0b3JdKTtcbiAgICAvLyB2YXIgY2VydGFpblBhc3N3b3JkID0gbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tVmFsaWRhdG9ycy5lcXVhbFRvKHBhc3N3b3JkKV0pO1xuXG4gICAgdGhpcy51c2VyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ2VtYWlsJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UuZW1haWxWYWxpZGF0b3JdXSxcbiAgICAgICdwYXNzd29yZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLnBhc3N3b3JkVmFsaWRhdG9yXV0sXG4gICAgICAvLyBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAvLyBjZXJ0YWluUGFzc3dvcmQ6IGNlcnRhaW5QYXNzd29yZCxcbiAgICAgICduYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgJ2ltYWdlJzogWycnLF0sXG4gICAgICAndGl0bGUnOiBbJ+C4meC4suC4oiddLFxuICAgICAgJ3Bvc2l0aW9uJzogWyfguITguKPguLnguK3guLHguJXguKPguLLguIjguYnguLLguIcnXSxcbiAgICAgICdpZF9jYXJkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UuaXNOdW1iZXIsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTMpXV0sXG4gICAgICAncGhvbmUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5pc051bWJlcl1dLFxuICAgICAgJ2FkZHJlc3MnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAndGVhY2hpbmdfbGV2ZWwnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnaW5zdGl0dXRpb24nOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAncHJvdmluY2UnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0KCl7XG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gIH1cblxuICBzZWxlY3RlZChpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZVJlc3VsdC5yZXNpemVkXG4gICAgICAgICAgJiYgaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMXG4gICAgICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgfVxuXG4gIG9uU3VibWl0KHRlYWNoZXI6IFRlYWNoZXIpIHtcblxuICAgIHRoaXMuaW1hZ2UgPT0gJycgPyB0aGlzLmltYWdlID0gdGhpcy5mYWtlSW1hZ2UgOiB0aGlzLmltYWdlO1xuXG4gICAgdGhpcy50ZWFjaGVyID0gbmV3IFRlYWNoZXIodGVhY2hlci5lbWFpbCwgdGVhY2hlci5wYXNzd29yZCwgdGVhY2hlci5uYW1lLCB0aGlzLmltYWdlLCB0ZWFjaGVyLnRpdGxlLCB0ZWFjaGVyLnBvc2l0aW9uLFxuICAgICAgdGVhY2hlci5pZF9jYXJkLCB0ZWFjaGVyLnBob25lLCB0ZWFjaGVyLmFkZHJlc3MsIHRlYWNoZXIudGVhY2hpbmdfbGV2ZWwsIHRlYWNoZXIuaW5zdGl0dXRpb24sIHRlYWNoZXIucHJvdmluY2VcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2codGhpcy50ZWFjaGVyKTtcblxuICAgIHRoaXMudGVhY2hlclNlcnZpY2UuYWRkVGVhY2hlcih0aGlzLnRlYWNoZXIpXG4gICAgLnN1YnNjcmliZShcbiAgICAgICAgdGVhY2hlciAgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRlYWNoZXIpO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvc2lnbmluJ10pO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgKTtcbiAgfVxuXG4gIGNhbmNlbCgpe1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG59XG5cblxuIl19
