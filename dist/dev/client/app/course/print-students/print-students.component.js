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
var student_service_1 = require("../../services/student.service");
var PrintStudentsComponent = (function () {
    function PrintStudentsComponent(router, studentService) {
        this.router = router;
        this.studentService = studentService;
        this.students = [];
    }
    PrintStudentsComponent.prototype.ngOnInit = function () {
        if (this.studentService.students != null) {
            this.students = this.studentService.students;
            console.log(this.students);
        }
    };
    PrintStudentsComponent.prototype.cancel = function () {
        window.history.back();
    };
    PrintStudentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'print-students',
            templateUrl: 'print-students.component.html',
            styleUrls: ['print-students.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, student_service_1.StudentService])
    ], PrintStudentsComponent);
    return PrintStudentsComponent;
}());
exports.PrintStudentsComponent = PrintStudentsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvcHJpbnQtc3R1ZGVudHMvcHJpbnQtc3R1ZGVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFJaEQsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFHdkQsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFTOUQ7SUFRSSxnQ0FBb0IsTUFBYyxFQUFVLGNBQThCO1FBQXRELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGMUUsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQUVtRCxDQUFDO0lBRTdFLHlDQUFRLEdBQVI7UUFFRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUdILENBQUM7SUFFRCx1Q0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBNUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDOUMsQ0FBQzs7OEJBQUE7SUF5QkYsNkJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLDhCQUFzQix5QkF3QmxDLENBQUEiLCJmaWxlIjoiYXBwL2NvdXJzZS9wcmludC1zdHVkZW50cy9wcmludC1zdHVkZW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWRnZX0gZnJvbSBcIi4uLy4uL21vZGVscy9iYWRnZVwiO1xuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3N0dWRlbnRcIjtcbmltcG9ydCB7VmFsaWRhdG9ycywgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ltYWdlUmVzdWx0LCBSZXNpemVPcHRpb25zfSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwcmludC1zdHVkZW50cycsXG4gICAgdGVtcGxhdGVVcmw6ICdwcmludC1zdHVkZW50cy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3ByaW50LXN0dWRlbnRzLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpbnRTdHVkZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIC8vR2V0IHBhcmFtZXRlclxuXG5cbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBzdHVkZW50czogU3R1ZGVudFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSl7fVxuXG4gICAgbmdPbkluaXQoKXtcblxuICAgICAgaWYodGhpcy5zdHVkZW50U2VydmljZS5zdHVkZW50cyAhPSBudWxsKXtcbiAgICAgICAgdGhpcy5zdHVkZW50cyA9IHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudHM7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3R1ZGVudHMpO1xuICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBjYW5jZWwoKXtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG5cbn1cbiJdfQ==
