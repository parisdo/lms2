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
var config_1 = require("../../services/config");
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
        this.isEdited = false;
        this.editBadgeImage = "";
    }
    EditBadgeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createBadgeForm();
        this.badgePath = (config_1.publicUrl + "students/badges/").length;
        if (localStorage.getItem('course_id') != undefined) {
            this.courseService.getCourse(localStorage.getItem('course_id'))
                .subscribe(function (data) {
                _this.course = data.course;
                _this.getBadges(_this.course.id);
            }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['/teach']);
        }
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
            _this.badges = data.badge;
            _this.badges.map(function (badge) {
                badge.image = config_1.publicUrl + "students/badges/" + badge.image;
            });
        }, function (error) { return console.log(error); });
    };
    EditBadgeComponent.prototype.addBadge = function () {
        var _this = this;
        var badge = new badge_1.Badge(this.course.id, '', this.badgeForm.value.name, this.image, this.badgeForm.value.xp);
        this.courseService.createBadge(badge)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.ngOnInit();
                _this.resetCreateForm();
            }
        }, function (error) { return console.log(error); });
    };
    EditBadgeComponent.prototype.editBadgeModal = function (badge) {
        this.selectedBadge = badge;
        this.editBadgeImage = badge.image;
    };
    EditBadgeComponent.prototype.editBadge = function () {
        var _this = this;
        if (this.isEdited) {
            this.selectedBadge.image = this.editBadgeImage;
        }
        else {
            this.selectedBadge.image = this.selectedBadge.image.substring(this.badgePath);
        }
        this.isEdited = false;
        console.log(this.selectedBadge);
        this.courseService.editBadge(this.selectedBadge)
            .subscribe(function (data) {
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
        this.isEdited = true;
        this.editBadgeImage = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    EditBadgeComponent.prototype.deleteBadge = function () {
        var _this = this;
        this.selectedBadge.badge_id = this.selectedBadge.id;
        console.log(this.selectedBadge);
        this.courseService.deleteBadge(this.selectedBadge.badge_id)
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
    EditBadgeComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditBadgeComponent.prototype.ngOnDestroy = function () { };
    EditBadgeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-badge',
            templateUrl: 'edit-badge.component.html',
            styleUrls: ['edit-badge.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, course_service_1.CourseService, forms_1.FormBuilder])
    ], EditBadgeComponent);
    return EditBadgeComponent;
}());
exports.EditBadgeComponent = EditBadgeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1iYWRnZS9lZGl0LWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHVCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpFLHNCQUFvQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ3pDLHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZELCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBRTVELHVCQUF3Qix1QkFBdUIsQ0FBQyxDQUFBO0FBVWhEO0lBZUksNEJBQ1ksS0FBcUIsRUFDckIsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLFdBQXdCO1FBSHhCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWZwQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQWtCO1lBQzNCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLGNBQWMsRUFBRSxFQUFFO1NBQ3JCLENBQUM7UUFFRixXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXJCLGtCQUFhLEdBQVUsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQWtIbkMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixtQkFBYyxHQUFXLEVBQUUsQ0FBQztJQTVHVyxDQUFDO0lBRXhDLHFDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFkQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFHLGtCQUFTLHNCQUFrQixDQUFDLE1BQU0sQ0FBQztRQUV2RCxFQUFFLENBQUEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMs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Q0FBQSIsImZpbGUiOiJhcHAvY291cnNlL2VkaXQtYmFkZ2UvZWRpdC1iYWRnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Jlc2l6ZU9wdGlvbnMsIEltYWdlUmVzdWx0fSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5pbXBvcnQge0JhZGdlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2JhZGdlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcbmltcG9ydCB7cHVibGljVXJsfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29uZmlnXCI7XG5kZWNsYXJlIHZhciAkOmFueTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2VkaXQtYmFkZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnZWRpdC1iYWRnZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOlsnZWRpdC1iYWRnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBFZGl0QmFkZ2VDb21wb25lbnQge1xuXG4gICAgY291cnNlOiBDb3Vyc2U7XG5cbiAgICBpbWFnZTogc3RyaW5nID0gJyc7XG4gICAgcmVzaXplT3B0aW9uczogUmVzaXplT3B0aW9ucyA9IHtcbiAgICAgICAgcmVzaXplTWF4SGVpZ2h0OiA4MCxcbiAgICAgICAgcmVzaXplTWF4V2lkdGg6IDgwXG4gICAgfTtcblxuICAgIGJhZGdlczogQmFkZ2VbXSA9IFtdO1xuICAgIGJhZGdlUGF0aDogYW55O1xuICAgIHNlbGVjdGVkQmFkZ2U6IEJhZGdlID0gbmV3IEJhZGdlKCk7XG4gICAgYmFkZ2VGb3JtOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgICBuZ09uSW5pdCgpe1xuXG4gICAgICB0aGlzLmNyZWF0ZUJhZGdlRm9ybSgpO1xuXG4gICAgICB0aGlzLmJhZGdlUGF0aCA9IGAke3B1YmxpY1VybH1zdHVkZW50cy9iYWRnZXMvYC5sZW5ndGg7XG5cbiAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3Vyc2VfaWQnKSAhPSB1bmRlZmluZWQpe1xuICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuZ2V0Q291cnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3Vyc2VfaWQnKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY291cnNlID0gZGF0YS5jb3Vyc2U7XG4gICAgICAgICAgICB0aGlzLmdldEJhZGdlcyh0aGlzLmNvdXJzZS5pZCk7XG4gICAgICAgICAgfSwgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVhY2gnXSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBjcmVhdGVCYWRnZUZvcm0oKXtcbiAgICAgICAgdGhpcy5iYWRnZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICduYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAgICAgJ2ltYWdlJzogWycnXSxcbiAgICAgICAgICAgICd4cCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldENyZWF0ZUZvcm0oKXtcbiAgICAgICAgJCgnI2Nsb3NlTW9kYWwnKS5jbGljaygpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJhZGdlRm9ybSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gbnVsbDtcbiAgICB9XG5cblxuICAgIGdldEJhZGdlcyhpZDogYW55KSB7XG4gICAgICAgIHRoaXMuY291cnNlU2VydmljZS5nZXRBbGxCYWRnZShpZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKGRhdGE6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFkZ2VzID0gZGF0YS5iYWRnZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhZGdlcy5tYXAoKGJhZGdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgIGJhZGdlLmltYWdlID0gYCR7cHVibGljVXJsfXN0dWRlbnRzL2JhZGdlcy8ke2JhZGdlLmltYWdlfWBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiAgY29uc29sZS5sb2coZXJyb3IpKVxuICAgIH1cblxuICAgIGFkZEJhZGdlKCl7XG5cbiAgICAgICAgbGV0IGJhZGdlID0gbmV3IEJhZGdlKHRoaXMuY291cnNlLmlkLCAnJywgdGhpcy5iYWRnZUZvcm0udmFsdWUubmFtZSwgdGhpcy5pbWFnZSwgdGhpcy5iYWRnZUZvcm0udmFsdWUueHApO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGJhZGdlKTtcblxuICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuY3JlYXRlQmFkZ2UoYmFkZ2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Q3JlYXRlRm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIGVkaXRCYWRnZU1vZGFsKGJhZGdlOiBCYWRnZSl7XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRCYWRnZSA9IGJhZGdlO1xuICAgICAgdGhpcy5lZGl0QmFkZ2VJbWFnZSA9IGJhZGdlLmltYWdlO1xuICAgIH1cblxuICAgIGVkaXRCYWRnZSgpe1xuXG5cbiAgICAgIGlmKHRoaXMuaXNFZGl0ZWQpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkQmFkZ2UuaW1hZ2UgPSB0aGlzLmVkaXRCYWRnZUltYWdlO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkQmFkZ2UuaW1hZ2UgPSB0aGlzLnNlbGVjdGVkQmFkZ2UuaW1hZ2Uuc3Vic3RyaW5nKHRoaXMuYmFkZ2VQYXRoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc0VkaXRlZCA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZEJhZGdlKTtcblxuICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmVkaXRCYWRnZSh0aGlzLnNlbGVjdGVkQmFkZ2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRFZGl0Rm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZChpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICAgICAgICYmIGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTFxuICAgICAgICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgICB9XG5cblxuICAgIGlzRWRpdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgZWRpdEJhZGdlSW1hZ2U6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBzZWxlY3RlZEJhZGdlSW1hZ2UoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG4gICAgICAgIHRoaXMuaXNFZGl0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVkaXRCYWRnZUltYWdlID0gaW1hZ2VSZXN1bHQucmVzaXplZFxuICAgICAgICAgICAgJiYgaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMXG4gICAgICAgICAgICB8fCBpbWFnZVJlc3VsdC5kYXRhVVJMO1xuICAgIH1cblxuXG4gICAgZGVsZXRlQmFkZ2UoKXtcblxuICAgICAgdGhpcy5zZWxlY3RlZEJhZGdlLmJhZGdlX2lkID0gdGhpcy5zZWxlY3RlZEJhZGdlLmlkO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZEJhZGdlKTtcbiAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmRlbGV0ZUJhZGdlKHRoaXMuc2VsZWN0ZWRCYWRnZS5iYWRnZV9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRFZGl0Rm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXNldEVkaXRGb3JtKCl7XG4gICAgICAkKCcjY2xvc2VFZGl0QmFkZ2VNb2RhbCcpLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCl7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7fVxuXG59XG4iXX0=
