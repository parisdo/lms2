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
var badge_1 = require("../../models/badge");
var forms_1 = require("@angular/forms");
var course_service_1 = require("../../services/course.service");
var EditBadgeComponent = (function () {
    function EditBadgeComponent(route, router, courseService, formBuilder) {
        this.route = route;
        this.router = router;
        this.courseService = courseService;
        this.formBuilder = formBuilder;
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 80,
            resizeMaxWidth: 80
        };
        this.badges = [];
        this.selectedBadge = new badge_1.Badge();
    }
    EditBadgeComponent.prototype.ngOnInit = function () {
        this.course = this.courseService.course;
        this.getBadges(this.course.id);
        this.createBadgeForm();
    };
    EditBadgeComponent.prototype.createBadgeForm = function () {
        this.badgeForm = this.formBuilder.group({
            'name': ['', [forms_1.Validators.required]],
            'image': [''],
            'xp': ['', [forms_1.Validators.required]]
        });
    };
    EditBadgeComponent.prototype.resetCreateForm = function () {
        $('#closeModal').click();
        this.createBadgeForm();
        this.image = null;
    };
    EditBadgeComponent.prototype.getBadges = function (id) {
        var _this = this;
        this.courseService.getAllBadge(id)
            .subscribe(function (data) {
            console.log(data.badge);
            _this.badges = data.badge;
            _this.badges.map(function (badge) {
                badge.image = 'http://54.169.115.233/students/badges/' + badge.image;
            });
        }, function (error) { return console.log(error); });
    };
    EditBadgeComponent.prototype.addBadge = function () {
        var _this = this;
        var badge = new badge_1.Badge('', this.course.id, this.badgeForm.value.name, this.image, this.badgeForm.value.xp);
        console.log(badge);
        this.courseService.createBadge(badge)
            .subscribe(function (data) {
            console.log(data.status);
            if (data.status == 'success') {
                _this.ngOnInit();
                _this.resetCreateForm();
            }
        }, function (error) { return console.log(error); });
    };
    EditBadgeComponent.prototype.editBadgeModal = function (badge) {
        this.selectedBadge = badge;
    };
    EditBadgeComponent.prototype.editBadge = function () {
        var _this = this;
        this.courseService.editBadge(this.selectedBadge)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                _this.ngOnInit();
                _this.resetEditForm();
            }
        }, function (error) { return console.log(error); });
    };
    EditBadgeComponent.prototype.selected = function (imageResult) {
        this.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    EditBadgeComponent.prototype.selectedBadgeImage = function (imageResult) {
        this.selectedBadge.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    EditBadgeComponent.prototype.deleteBadge = function () {
        var _this = this;
        this.courseService.deleteBadge(this.selectedBadge.id)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.ngOnInit();
                _this.resetEditForm();
            }
        }, function (error) { return console.log(error); });
    };
    EditBadgeComponent.prototype.resetEditForm = function () {
        $('#closeEditBadgeModal').click();
    };
    EditBadgeComponent.prototype.ngOnDestroy = function () {
    };
    EditBadgeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-badge',
            templateUrl: 'edit-badge.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, course_service_1.CourseService, forms_1.FormBuilder])
    ], EditBadgeComponent);
    return EditBadgeComponent;
}());
exports.EditBadgeComponent = EditBadgeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1iYWRnZS9lZGl0LWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHVCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pFLHNCQUFvQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ3pDLHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZELCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBVTVEO0lBY0ksNEJBQ1ksS0FBcUIsRUFDckIsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLFdBQXdCO1FBSHhCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWRwQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQWtCO1lBQzNCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLGNBQWMsRUFBRSxFQUFFO1NBQ3JCLENBQUM7UUFFRixXQUFNLEdBQVksRUFBRSxDQUFDO1FBQ3JCLGtCQUFhLEdBQVUsSUFBSSxhQUFLLEVBQUUsQ0FBQztJQU9JLENBQUM7SUFFeEMscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNENBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDcEMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxP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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSZXNpemVPcHRpb25zLCBJbWFnZVJlc3VsdH0gZnJvbSBcIm5nMi1pbWFnZXVwbG9hZFwiO1xuaW1wb3J0IHtCYWRnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9iYWRnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0JhZGdlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2JhZGdlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcblxuZGVjbGFyZSB2YXIgJDphbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdlZGl0LWJhZGdlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2VkaXQtYmFkZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0QmFkZ2VDb21wb25lbnQge1xuXG4gICAgY291cnNlOiBDb3Vyc2U7XG5cbiAgICBpbWFnZTogc3RyaW5nID0gJyc7XG4gICAgcmVzaXplT3B0aW9uczogUmVzaXplT3B0aW9ucyA9IHtcbiAgICAgICAgcmVzaXplTWF4SGVpZ2h0OiA4MCxcbiAgICAgICAgcmVzaXplTWF4V2lkdGg6IDgwXG4gICAgfTtcblxuICAgIGJhZGdlczogQmFkZ2VbXSA9IFtdO1xuICAgIHNlbGVjdGVkQmFkZ2U6IEJhZGdlID0gbmV3IEJhZGdlKCk7XG4gICAgYmFkZ2VGb3JtOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLmNvdXJzZSA9IHRoaXMuY291cnNlU2VydmljZS5jb3Vyc2U7XG4gICAgICAgIHRoaXMuZ2V0QmFkZ2VzKHRoaXMuY291cnNlLmlkKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCYWRnZUZvcm0oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVCYWRnZUZvcm0oKXtcbiAgICAgICAgdGhpcy5iYWRnZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICduYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAgICAgJ2ltYWdlJzogWycnXSxcbiAgICAgICAgICAgICd4cCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldENyZWF0ZUZvcm0oKXtcbiAgICAgICAgJCgnI2Nsb3NlTW9kYWwnKS5jbGljaygpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJhZGdlRm9ybSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRCYWRnZXMoaWQ6IGFueSkge1xuICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuZ2V0QWxsQmFkZ2UoaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChkYXRhOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmJhZGdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWRnZXMgPSBkYXRhLmJhZGdlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFkZ2VzLm1hcCgoYmFkZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgYmFkZ2UuaW1hZ2UgPSAnaHR0cDovLzU0LjE2OS4xMTUuMjMzL3N0dWRlbnRzL2JhZGdlcy8nICsgYmFkZ2UuaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiAgY29uc29sZS5sb2coZXJyb3IpKVxuICAgIH1cblxuICAgIGFkZEJhZGdlKCl7XG5cbiAgICAgICAgbGV0IGJhZGdlID0gbmV3IEJhZGdlKCcnLHRoaXMuY291cnNlLmlkLCB0aGlzLmJhZGdlRm9ybS52YWx1ZS5uYW1lLCB0aGlzLmltYWdlLCB0aGlzLmJhZGdlRm9ybS52YWx1ZS54cCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJhZGdlKTtcblxuICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuY3JlYXRlQmFkZ2UoYmFkZ2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldENyZWF0ZUZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBlZGl0QmFkZ2VNb2RhbChiYWRnZTogQmFkZ2Upe1xuICAgICAgICB0aGlzLnNlbGVjdGVkQmFkZ2UgPSBiYWRnZTtcbiAgICB9XG5cbiAgICBlZGl0QmFkZ2UoKXtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRCYWRnZSk7XG4gICAgICAgIHRoaXMuY291cnNlU2VydmljZS5lZGl0QmFkZ2UodGhpcy5zZWxlY3RlZEJhZGdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRFZGl0Rm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZChpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICAgICAgICYmIGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTFxuICAgICAgICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgICB9XG5cbiAgICBzZWxlY3RlZEJhZGdlSW1hZ2UoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCYWRnZS5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICAgICAgICYmIGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTFxuICAgICAgICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgICB9XG5cblxuICAgIGRlbGV0ZUJhZGdlKCl7XG4gICAgICAgIHRoaXMuY291cnNlU2VydmljZS5kZWxldGVCYWRnZSh0aGlzLnNlbGVjdGVkQmFkZ2UuaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RWRpdEZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVzZXRFZGl0Rm9ybSgpe1xuICAgICAgICAkKCcjY2xvc2VFZGl0QmFkZ2VNb2RhbCcpLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG5cbiAgICB9XG5cblxufVxuIl19
