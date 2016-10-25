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
var student_service_1 = require("../../services/student.service");
var StudentDashboardComponent = (function () {
    function StudentDashboardComponent(studentService) {
        this.studentService = studentService;
    }
    StudentDashboardComponent.prototype.ngOnInit = function () {
    };
    StudentDashboardComponent.prototype.getStudent = function () {
    };
    StudentDashboardComponent.prototype.getCourse = function (courseId) {
    };
    StudentDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-student-dashboard',
            templateUrl: 'student-dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService])
    ], StudentDashboardComponent);
    return StudentDashboardComponent;
}());
exports.StudentDashboardComponent = StudentDashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQtZGFzaGJvYXJkL3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBYTlEO0lBS0ksbUNBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNsRCxDQUFDO0lBRUQsNENBQVEsR0FBUjtJQU1BLENBQUM7SUFFRCw4Q0FBVSxHQUFWO0lBVUEsQ0FBQztJQUVELDZDQUFTLEdBQVQsVUFBVSxRQUFhO0lBT3ZCLENBQUM7SUExQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLGtDQUFrQztTQUNsRCxDQUFDOztpQ0FBQTtJQXlDRixnQ0FBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksaUNBQXlCLDRCQXNDckMsQ0FBQSIsImZpbGUiOiJhcHAvc3R1ZGVudC9zdHVkZW50LWRhc2hib2FyZC9zdHVkZW50LWRhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7U3R1ZGVudH0gZnJvbSBcIi4uLy4uL21vZGVscy9zdHVkZW50XCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcblxuZGVjbGFyZSB2YXIgJDphbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1zdHVkZW50LWRhc2hib2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdzdHVkZW50LWRhc2hib2FyZC5jb21wb25lbnQuaHRtbCdcbn0pXG5cblxuZXhwb3J0IGNsYXNzIFN0dWRlbnREYXNoYm9hcmRDb21wb25lbnR7XG5cbiAgICBzdHVkZW50OiBTdHVkZW50O1xuICAgIGNvdXJzZTogQ291cnNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2Upe1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIC8vIHRoaXMuZ2V0U3R1ZGVudCgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgICQoXCJib2R5XCIpLnRvb2x0aXAoeyBzZWxlY3RvcjogJ1tkYXRhLXRvZ2dsZT10b29sdGlwXScgfSk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGdldFN0dWRlbnQoKXtcbiAgICAgICAgLy8gdGhpcy5zdHVkZW50U2VydmljZS5nZXRTdHVkZW50KCc1NTA4MDUwMTYzNicpXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICAgICAgIChzdHVkZW50KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnQgPSBzdHVkZW50WzBdO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0dWRlbnQpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy90aGlzLmdldENvdXJzZSh0aGlzLnN0dWRlbnQuY291cnNlSWQpO1xuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgLy8gICAgICAgICApO1xuICAgIH1cblxuICAgIGdldENvdXJzZShjb3Vyc2VJZDogYW55KXtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3Vyc2VJZCk7XG4gICAgICAgIC8vIHRoaXMuc3R1ZGVudFNlcnZpY2UuZ2V0Q291cnNlKGNvdXJzZUlkKVxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShcbiAgICAgICAgLy8gICAgICAgICBjb3Vyc2UgPT4gdGhpcy5jb3Vyc2UgPSBjb3Vyc2VbMF0sXG4gICAgICAgIC8vICAgICAgICAgZXJyb3IgPT4gIGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfVxuXG5cbn1cbiJdfQ==
