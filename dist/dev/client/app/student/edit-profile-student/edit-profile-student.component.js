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
var student_1 = require("../../models/student");
var forms_1 = require("@angular/forms");
var EditProfileStudentComponent = (function () {
    function EditProfileStudentComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.student = new student_1.Student('55080501', 'มานี', 'ดีใจ', 'Khjde093');
        this.createForm();
    }
    EditProfileStudentComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'username': ['', [forms_1.Validators.required]],
            'name': ['', [forms_1.Validators.required]],
            'password': ['', [forms_1.Validators.required]],
            'confirm_password': ['', [forms_1.Validators.required]]
        });
    };
    EditProfileStudentComponent.prototype.reset = function () {
        this.createForm();
    };
    EditProfileStudentComponent.prototype.signin = function (student) {
        this.student = new student_1.Student(student.username, student.name, student.password);
        console.log(this.student);
    };
    EditProfileStudentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-profile-student',
            templateUrl: 'edit-profile-student.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], EditProfileStudentComponent);
    return EditProfileStudentComponent;
}());
exports.EditProfileStudentComponent = EditProfileStudentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L2VkaXQtcHJvZmlsZS1zdHVkZW50L2VkaXQtcHJvZmlsZS1zdHVkZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBUXZEO0lBTUkscUNBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRjVDLFlBQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsVUFBVSxFQUFHLE1BQU0sRUFBRyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFHNUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxnREFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDRDQUFNLEdBQU4sVUFBTyxPQUFnQjtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUEvQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLHFDQUFxQztTQUNyRCxDQUFDOzttQ0FBQTtJQTZCRixrQ0FBQztBQUFELENBM0JBLEFBMkJDLElBQUE7QUEzQlksbUNBQTJCLDhCQTJCdkMsQ0FBQSIsImZpbGUiOiJhcHAvc3R1ZGVudC9lZGl0LXByb2ZpbGUtc3R1ZGVudC9lZGl0LXByb2ZpbGUtc3R1ZGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3R1ZGVudH0gZnJvbSBcIi4uLy4uL21vZGVscy9zdHVkZW50XCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2VkaXQtcHJvZmlsZS1zdHVkZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2VkaXQtcHJvZmlsZS1zdHVkZW50LmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3R1ZGVudENvbXBvbmVudHtcblxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIHVzZXJGb3JtOiBhbnk7XG4gICAgc3R1ZGVudCA9IG5ldyBTdHVkZW50KCc1NTA4MDUwMScsICAn4Lih4Liy4LiZ4Li1JyAsICfguJTguLXguYPguIgnLCAnS2hqZGUwOTMnKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgIH1cbiAgICBjcmVhdGVGb3JtKCl7XG4gICAgICAgIHRoaXMudXNlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICd1c2VybmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgICduYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAgICAgJ2NvbmZpcm1fcGFzc3dvcmQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gICAgfVxuXG4gICAgc2lnbmluKHN0dWRlbnQ6IFN0dWRlbnQpIHtcbiAgICAgICAgdGhpcy5zdHVkZW50ID0gbmV3IFN0dWRlbnQoc3R1ZGVudC51c2VybmFtZSwgc3R1ZGVudC5uYW1lLCBzdHVkZW50LnBhc3N3b3JkKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdHVkZW50KTtcbiAgICB9XG5cbn1cbiJdfQ==
