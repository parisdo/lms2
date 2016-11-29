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
var message_service_1 = require('../../services/message-service');
var router_1 = require("@angular/router");
var EditCourseComponent = (function () {
    function EditCourseComponent(formBuilder, courseService, router) {
        this.formBuilder = formBuilder;
        this.courseService = courseService;
        this.router = router;
        this.msgs = [];
    }
    EditCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('course_id') != undefined) {
            this.courseService.getCourse(localStorage.getItem('course_id'))
                .subscribe(function (data) {
                _this.course = data.course;
                _this.createCourseForm();
            }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['/teach']);
        }
    };
    EditCourseComponent.prototype.createCourseForm = function () {
        this.courseForm = this.formBuilder.group({
            'course_id': [this.course.id],
            'name': [this.course.name, [forms_1.Validators.required]],
            'description': [this.course.description]
        });
    };
    EditCourseComponent.prototype.submit = function () {
        var _this = this;
        this.courseService.editCourse(this.courseForm.value)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.showMessage(message_service_1.msg.getUpdateStudentsScoreMessage(200));
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateStudentsScoreMessage(500));
            }
        }, function (error) { return console.log(error); });
    };
    EditCourseComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
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
            styleUrls: ['edit-course.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, course_service_1.CourseService, router_1.Router])
    ], EditCourseComponent);
    return EditCourseComponent;
}());
exports.EditCourseComponent = EditCourseComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1jb3Vyc2UvZWRpdC1jb3Vyc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFFeEMsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsc0JBQXNDLGdCQUFnQixDQUFDLENBQUE7QUFFdkQsZ0NBQWtCLGdDQUFnQyxDQUFDLENBQUE7QUFDbkQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFTdkM7SUFLSSw2QkFBb0IsV0FBd0IsRUFBVSxhQUE0QixFQUM5RCxNQUFjO1FBRGQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM5RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSGxDLFNBQUksR0FBYyxFQUFFLENBQUM7SUFHZSxDQUFDO0lBRXJDLHNDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVhDLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUM1RCxTQUFTLENBQUMsVUFBQyxJQUFTO2dCQUNuQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLENBQUMsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQUEsSUFBSSxDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUdILENBQUM7SUFHRCw4Q0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3JDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzdCLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUMzQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0Qsb0NBQU0sR0FBTjtRQUFBLGlCQWNDO1FBWEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDL0MsU0FBUyxDQUNOLFVBQUMsSUFBUztZQUNSLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBRyxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0QsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMscUJBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNELENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUNoQyxDQUFDO0lBQ1YsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxHQUFRO1FBQXBCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBR0Qsb0NBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHlDQUFXLEdBQVg7SUFFQSxDQUFDO0lBdkVMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7OzJCQUFBO0lBb0VGLDBCQUFDO0FBQUQsQ0FsRUEsQUFrRUMsSUFBQTtBQWxFWSwyQkFBbUIsc0JBa0UvQixDQUFBIiwiZmlsZSI6ImFwcC9jb3Vyc2UvZWRpdC1jb3Vyc2UvZWRpdC1jb3Vyc2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcInByaW1lbmcvY29tcG9uZW50cy9jb21tb24vYXBpXCI7XG5pbXBvcnQge21zZ30gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdlZGl0LWNvdXJzZScsXG4gICAgdGVtcGxhdGVVcmw6ICdlZGl0LWNvdXJzZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2VkaXQtY291cnNlLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEVkaXRDb3Vyc2VDb21wb25lbnQge1xuXG4gICAgY291cnNlOiBDb3Vyc2U7XG4gICAgbXNnczogTWVzc2FnZVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY291cnNlX2lkJykgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmdldENvdXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY291cnNlX2lkJykpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvdXJzZSA9IGRhdGEuY291cnNlO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb3Vyc2VGb3JtKCk7XG4gICAgICAgICAgfSwgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVhY2gnXSk7XG4gICAgICB9XG5cblxuICAgIH1cblxuICAgIGNvdXJzZUZvcm06IGFueTtcbiAgICBjcmVhdGVDb3Vyc2VGb3JtKCl7XG4gICAgICAgIHRoaXMuY291cnNlRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgJ2NvdXJzZV9pZCc6IFt0aGlzLmNvdXJzZS5pZF0sXG4gICAgICAgICAgICAnbmFtZSc6IFt0aGlzLmNvdXJzZS5uYW1lLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogW3RoaXMuY291cnNlLmRlc2NyaXB0aW9uXVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHN1Ym1pdCgpe1xuXG4gICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb3Vyc2VGb3JtLnZhbHVlKTtcbiAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmVkaXRDb3Vyc2UodGhpcy5jb3Vyc2VGb3JtLnZhbHVlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlU3R1ZGVudHNTY29yZU1lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaG93TWVzc2FnZShtc2c6IGFueSl7XG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICAgIHRoaXMubXNncy5wdXNoKG1zZyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5tc2dzID0gW107XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG5cblxuICAgIGNhbmNlbCgpe1xuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuXG4gICAgfVxuXG59XG4iXX0=
