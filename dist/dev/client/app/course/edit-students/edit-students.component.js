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
var router_1 = require("@angular/router");
var course_1 = require("../../models/course");
var student_service_1 = require("../../services/student.service");
var EditStudentsComponent = (function () {
    function EditStudentsComponent(route, router, studentService) {
        this.route = route;
        this.router = router;
        this.studentService = studentService;
        this.filterKeys = 'name';
        this.course = new course_1.Course('Dummy Course', 'Dummy');
        this.searchValue = '';
    }
    EditStudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.selectedId = +params['id'];
            _this.createStudents();
            console.log(_this.selectedId);
        });
    };
    EditStudentsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EditStudentsComponent.prototype.createStudents = function () {
    };
    EditStudentsComponent.prototype.search = function (value) {
        this.searchValue = value;
    };
    EditStudentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-students',
            templateUrl: 'edit-students.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, student_service_1.StudentService])
    ], EditStudentsComponent);
    return EditStudentsComponent;
}());
exports.EditStudentsComponent = EditStudentsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50cy9lZGl0LXN0dWRlbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHVCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pFLHVCQUFxQixxQkFBcUIsQ0FBQyxDQUFBO0FBRTNDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBTzlEO0lBVUksK0JBQ1ksS0FBcUIsRUFDckIsTUFBYyxFQUNkLGNBQThCO1FBRjlCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFUbEMsZUFBVSxHQUFXLE1BQU0sQ0FBQztRQUNwQyxXQUFNLEdBQVcsSUFBSSxlQUFNLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBK0JyRCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQXZCb0IsQ0FBQztJQUU5Qyx3Q0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2hCLFdBQVc7YUFDWCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDhDQUFjLEdBQWQ7SUFLQSxDQUFDO0lBSUQsc0NBQU0sR0FBTixVQUFPLEtBQVU7UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBN0NMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7OzZCQUFBO0lBMkNGLDRCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQTFDWSw2QkFBcUIsd0JBMENqQyxDQUFBIiwiZmlsZSI6ImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50cy9lZGl0LXN0dWRlbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Q291cnNlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvdXJzZVwiO1xuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3N0dWRlbnRcIjtcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2VkaXQtc3R1ZGVudHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnZWRpdC1zdHVkZW50cy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRTdHVkZW50c0NvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHNlbGVjdGVkSWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgZmlsdGVyS2V5czogc3RyaW5nID0gJ25hbWUnO1xuICAgIGNvdXJzZTogQ291cnNlID0gbmV3IENvdXJzZSgnRHVtbXkgQ291cnNlJywgJ0R1bW15Jyk7XG5cbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBzdHVkZW50czogU3R1ZGVudFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVN0dWRlbnRzKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGNyZWF0ZVN0dWRlbnRzKCl7XG4gICAgICAgIC8vIHRoaXMuc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudHMoKVxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShcbiAgICAgICAgLy8gICAgICAgICBzdHVkZW50cyA9PiB0aGlzLnN0dWRlbnRzID0gc3R1ZGVudHMsXG4gICAgICAgIC8vICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gICAgfVxuXG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gICAgc2VhcmNoKHZhbHVlOiBhbnkpe1xuICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG59XG4iXX0=
