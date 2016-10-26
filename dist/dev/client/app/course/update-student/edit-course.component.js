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
var course_service_1 = require("../../services/course.service");
var forms_1 = require("@angular/forms");
var EditCourseComponent = (function () {
    function EditCourseComponent(formBuilder, courseService) {
        this.formBuilder = formBuilder;
        this.courseService = courseService;
    }
    EditCourseComponent.prototype.ngOnInit = function () {
        this.course = this.courseService.course;
        this.createCourseForm();
    };
    EditCourseComponent.prototype.createCourseForm = function () {
        this.courseForm = this.formBuilder.group({
            'course_id': [this.course.id],
            'name': [this.course.name, [forms_1.Validators.required]],
            'description': [this.course.description, [forms_1.Validators.required]]
        });
    };
    EditCourseComponent.prototype.submit = function () {
        console.log(this.courseForm.value);
        this.courseService.editCourse(this.courseForm.value)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
    };
    EditCourseComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditCourseComponent.prototype.ngOnDestroy = function () {
    };
    EditCourseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-course',
            templateUrl: 'edit-course.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, course_service_1.CourseService])
    ], EditCourseComponent);
    return EditCourseComponent;
}());
exports.EditCourseComponent = EditCourseComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvdXBkYXRlLXN0dWRlbnQvZWRpdC1jb3Vyc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFFeEMsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsc0JBQXNDLGdCQUFnQixDQUFDLENBQUE7QUFPdkQ7SUFJSSw2QkFBb0IsV0FBd0IsRUFDeEIsYUFBNEI7UUFENUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRSxDQUFDO0lBRW5ELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFHRCw4Q0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3JDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzdCLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEUsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELG9DQUFNLEdBQU47UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDL0MsU0FBUyxDQUNOLFVBQUMsSUFBUztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDaEMsQ0FBQztJQUNWLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQseUNBQVcsR0FBWDtJQUVBLENBQUM7SUE3Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw0QkFBNEI7U0FDNUMsQ0FBQzs7MkJBQUE7SUEyQ0YsMEJBQUM7QUFBRCxDQTFDQSxBQTBDQyxJQUFBO0FBMUNZLDJCQUFtQixzQkEwQy9CLENBQUEiLCJmaWxlIjoiYXBwL2NvdXJzZS91cGRhdGUtc3R1ZGVudC9lZGl0LWNvdXJzZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q291cnNlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvdXJzZVwiO1xuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcbmltcG9ydCB7VmFsaWRhdG9ycywgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZWRpdC1jb3Vyc2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnZWRpdC1jb3Vyc2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0Q291cnNlQ29tcG9uZW50IHtcblxuICAgIGNvdXJzZTogQ291cnNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlKXt9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLmNvdXJzZSA9IHRoaXMuY291cnNlU2VydmljZS5jb3Vyc2U7XG4gICAgICAgIHRoaXMuY3JlYXRlQ291cnNlRm9ybSgpO1xuICAgIH1cblxuICAgIGNvdXJzZUZvcm06IGFueTtcbiAgICBjcmVhdGVDb3Vyc2VGb3JtKCl7XG4gICAgICAgIHRoaXMuY291cnNlRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgJ2NvdXJzZV9pZCc6IFt0aGlzLmNvdXJzZS5pZF0sXG4gICAgICAgICAgICAnbmFtZSc6IFt0aGlzLmNvdXJzZS5uYW1lLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogW3RoaXMuY291cnNlLmRlc2NyaXB0aW9uLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc3VibWl0KCl7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb3Vyc2VGb3JtLnZhbHVlKTtcbiAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmVkaXRDb3Vyc2UodGhpcy5jb3Vyc2VGb3JtLnZhbHVlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCl7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcblxuICAgIH1cblxufVxuIl19
