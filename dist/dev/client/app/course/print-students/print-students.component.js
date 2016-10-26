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
        if (this.studentService.students.length != 0) {
            this.students = this.studentService.students;
            console.log(this.students);
        }
        else {
            this.router.navigate(['/teach']);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvcHJpbnQtc3R1ZGVudHMvcHJpbnQtc3R1ZGVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFJaEQsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFHdkQsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFTOUQ7SUFRSSxnQ0FBb0IsTUFBYyxFQUFVLGNBQThCO1FBQXRELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGMUUsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQUVtRCxDQUFDO0lBRTdFLHlDQUFRLEdBQVI7UUFFRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBR0gsQ0FBQztJQUVELHVDQUFNLEdBQU47UUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUE5Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM5QyxDQUFDOzs4QkFBQTtJQTJCRiw2QkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksOEJBQXNCLHlCQTBCbEMsQ0FBQSIsImZpbGUiOiJhcHAvY291cnNlL3ByaW50LXN0dWRlbnRzL3ByaW50LXN0dWRlbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0JhZGdlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2JhZGdlXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3R1ZGVudFwiO1xuaW1wb3J0IHtWYWxpZGF0b3JzLCBGb3JtQnVpbGRlcn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7SW1hZ2VSZXN1bHQsIFJlc2l6ZU9wdGlvbnN9IGZyb20gXCJuZzItaW1hZ2V1cGxvYWRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3ByaW50LXN0dWRlbnRzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3ByaW50LXN0dWRlbnRzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncHJpbnQtc3R1ZGVudHMuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcmludFN0dWRlbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgLy9HZXQgcGFyYW1ldGVyXG5cblxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIHN0dWRlbnRzOiBTdHVkZW50W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlKXt9XG5cbiAgICBuZ09uSW5pdCgpe1xuXG4gICAgICBpZih0aGlzLnN0dWRlbnRTZXJ2aWNlLnN0dWRlbnRzLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgdGhpcy5zdHVkZW50cyA9IHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudHM7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3R1ZGVudHMpO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy90ZWFjaCddKTtcbiAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgY2FuY2VsKCl7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuXG59XG4iXX0=
