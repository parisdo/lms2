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
var course_service_1 = require("../../services/course.service");
var PrintStudentsComponent = (function () {
    function PrintStudentsComponent(router, courseService) {
        this.router = router;
        this.courseService = courseService;
        this.students = [];
        this.newpage = false;
        this.thum = [];
        this.count = 0;
    }
    PrintStudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('course_id') != undefined) {
            this.courseService.getCourse(localStorage.getItem('course_id'))
                .subscribe(function (data) {
                _this.courseName = data.course.name;
                _this.students = data.students;
                _this.setPage();
            }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['/teach']);
        }
    };
    PrintStudentsComponent.prototype.setPage = function () {
        for (var i = 0; i < Math.ceil((this.students.length / 15)); i++) {
            this.thum[i] = [];
            for (var j = 0; j < 15; j++) {
                if (this.count < this.students.length) {
                    this.thum[i][j] = this.students[this.count];
                    this.count++;
                }
            }
        }
    };
    PrintStudentsComponent.prototype.print = function () {
        window.print();
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
        __metadata('design:paramtypes', [router_1.Router, course_service_1.CourseService])
    ], PrintStudentsComponent);
    return PrintStudentsComponent;
}());
exports.PrintStudentsComponent = PrintStudentsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvcHJpbnQtc3R1ZGVudHMvcHJpbnQtc3R1ZGVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFJaEQsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFFdkQsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFVNUQ7SUFVSSxnQ0FBb0IsTUFBYyxFQUFVLGFBQTRCO1FBQXBELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUx4RSxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBRXpCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFvQnpCLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixVQUFLLEdBQVcsQ0FBQyxDQUFDO0lBbEJ3RCxDQUFDO0lBRTNFLHlDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVZDLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUM1RCxTQUFTLENBQUMsVUFBQyxJQUFTO2dCQUNuQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixDQUFDLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBTUQsd0NBQU8sR0FBUDtRQUVFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNmLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUVILENBQUM7SUFHRCxzQ0FBSyxHQUFMO1FBQ0UsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCx1Q0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBMURMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDOUMsQ0FBQzs7OEJBQUE7SUF1REYsNkJBQUM7QUFBRCxDQXREQSxBQXNEQyxJQUFBO0FBdERZLDhCQUFzQix5QkFzRGxDLENBQUEiLCJmaWxlIjoiYXBwL2NvdXJzZS9wcmludC1zdHVkZW50cy9wcmludC1zdHVkZW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWRnZX0gZnJvbSBcIi4uLy4uL21vZGVscy9iYWRnZVwiO1xuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3N0dWRlbnRcIjtcbmltcG9ydCB7VmFsaWRhdG9ycywgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ltYWdlUmVzdWx0LCBSZXNpemVPcHRpb25zfSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwcmludC1zdHVkZW50cycsXG4gICAgdGVtcGxhdGVVcmw6ICdwcmludC1zdHVkZW50cy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3ByaW50LXN0dWRlbnRzLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpbnRTdHVkZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIC8vR2V0IHBhcmFtZXRlclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIGNvdXJzZU5hbWU6IGFueTtcbiAgICBzdHVkZW50czogU3R1ZGVudFtdID0gW107XG5cbiAgICBuZXdwYWdlOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSl7fVxuXG4gICAgbmdPbkluaXQoKXtcblxuICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvdXJzZV9pZCcpICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIHRoaXMuY291cnNlU2VydmljZS5nZXRDb3Vyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvdXJzZV9pZCcpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb3Vyc2VOYW1lID0gZGF0YS5jb3Vyc2UubmFtZTtcbiAgICAgICAgICAgIHRoaXMuc3R1ZGVudHMgPSBkYXRhLnN0dWRlbnRzO1xuICAgICAgICAgICAgdGhpcy5zZXRQYWdlKCk7XG4gICAgICAgICAgfSwgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVhY2gnXSk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICB0aHVtOiBhbnkgPSBbXTtcbiAgICBjb3VudDogbnVtYmVyID0gMDtcblxuICAgIHNldFBhZ2UoKSB7XG5cbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBNYXRoLmNlaWwoKHRoaXMuc3R1ZGVudHMubGVuZ3RoIC8gMTUpKTsgaSsrKSB7XG4gICAgICAgIHRoaXMudGh1bVtpXSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCAxNTsgaisrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY291bnQgPCB0aGlzLnN0dWRlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy50aHVtW2ldW2pdID0gdGhpcy5zdHVkZW50c1t0aGlzLmNvdW50XTtcbiAgICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuXG4gICAgcHJpbnQoKXtcbiAgICAgIHdpbmRvdy5wcmludCgpO1xuICAgIH1cblxuICAgIGNhbmNlbCgpe1xuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cblxufVxuIl19
