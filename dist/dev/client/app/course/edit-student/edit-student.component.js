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
        if (this.courseService.course != null && this.studentService.students != null) {
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
        }
        else {
            this.router.navigate(['/teach']);
        }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50L2VkaXQtc3R1ZGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCx3QkFBc0Isc0JBQXNCLENBQUMsQ0FBQTtBQUM3QyxzQkFBc0MsZ0JBQWdCLENBQUMsQ0FBQTtBQUN2RCx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV2RCwrQkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUM1RCxnQ0FBNkIsZ0NBQWdDLENBQUMsQ0FBQTtBQVE5RDtJQXVCSSw4QkFBb0IsV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLGNBQThCO1FBSjlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFuQmxELGNBQVMsR0FBUSx3SkFBd0osQ0FBQztRQUMxSyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQWtCO1lBQzdCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1NBQ3BCLENBQUM7UUFLRixZQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDO1FBQ3RCLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQVFuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFtQkM7UUFqQkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDNUUsSUFBSSxDQUFDLFNB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dWRlbnQvZWRpdC1zdHVkZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0JhZGdlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2JhZGdlXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3R1ZGVudFwiO1xuaW1wb3J0IHtWYWxpZGF0b3JzLCBGb3JtQnVpbGRlcn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7SW1hZ2VSZXN1bHQsIFJlc2l6ZU9wdGlvbnN9IGZyb20gXCJuZzItaW1hZ2V1cGxvYWRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2VkaXQtc3R1ZGVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICdlZGl0LXN0dWRlbnQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0U3R1ZGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIC8vR2V0IHBhcmFtZXRlclxuICAgIHByaXZhdGUgc2VsZWN0ZWRJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICB1c2VyRm9ybTogYW55O1xuICAgIGZha2VJbWFnZTogYW55ID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3QkRBQW9IQndnSEJnb0lDQWdMQ2dvTOKApkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBSC8yUT09JztcbiAgICBpbWFnZTogc3RyaW5nID0gJyc7XG4gICAgcmVzaXplT3B0aW9uczogUmVzaXplT3B0aW9ucyA9IHtcbiAgICAgIHJlc2l6ZU1heEhlaWdodDogMTUwLFxuICAgICAgcmVzaXplTWF4V2lkdGg6IDE1MFxuICAgIH07XG5cblxuICBjb3Vyc2VfaWQ6IGFueTtcblxuICAgIHN0dWRlbnQgPSBuZXcgU3R1ZGVudDtcbiAgICBzdHVkZW50czogU3R1ZGVudFtdID0gW107XG5cbiAgICBiYWRnZXM6IEJhZGdlW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlKXtcblxuICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcblxuICAgICAgaWYodGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZSAhPSBudWxsICYmIHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudHMgIT0gbnVsbCl7XG4gICAgICAgIHRoaXMuY291cnNlX2lkID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZS5pZDtcbiAgICAgICAgdGhpcy5zdHVkZW50cyA9IHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudHM7XG5cbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgICAgICAgIHRoaXMuc3R1ZGVudHMuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuICAgICAgICAgICAgICBzdHVkZW50LmlkID09IHRoaXMuc2VsZWN0ZWRJZCA/IHRoaXMuc3R1ZGVudCA9IHN0dWRlbnQ6IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdHVkZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVhY2gnXSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBzZWxlY3RlZChpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgIHRoaXMuc3R1ZGVudC5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICAgJiYgaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMXG4gICAgICAgIHx8IGltYWdlUmVzdWx0LmRhdGFVUkw7XG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybSgpe1xuICAgICAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAndXNlcm5hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICAgICAnc3R1ZGVudF9pZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgICduYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAgICAgJ292ZXJhbGxfeHAnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2V0KCl7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgIH1cblxuICAgIHNhdmUoc3R1ZGVudDogU3R1ZGVudCkge1xuXG4gICAgICB0aGlzLnN0dWRlbnQuY291cnNlX2lkID0gdGhpcy5jb3Vyc2VfaWQ7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0dWRlbnQpO1xuXG4gICAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLmVkaXRTdHVkZW50UHJvZmlsZSh0aGlzLnN0dWRlbnQpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgICAvL3RoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAvL3RoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==
