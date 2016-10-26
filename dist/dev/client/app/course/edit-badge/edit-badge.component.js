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
        if (this.courseService.course != null) {
            this.course = this.courseService.course;
            this.getBadges(this.course.id);
            this.createBadgeForm();
        }
        else {
            this.router.navigate(['teach']);
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
            console.log(data.badge);
            _this.badges = data.badge;
            _this.badges.map(function (badge) {
                badge.image = 'http://54.169.115.233/students/badges/' + badge.image;
            });
        }, function (error) { return console.log(error); });
    };
    EditBadgeComponent.prototype.addBadge = function () {
        var _this = this;
        var badge = new badge_1.Badge(this.course.id, '', this.badgeForm.value.name, this.image, this.badgeForm.value.xp);
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
    EditBadgeComponent.prototype.ngOnDestroy = function () {
    };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1iYWRnZS9lZGl0LWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHVCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpFLHNCQUFvQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ3pDLHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZELCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBVzVEO0lBY0ksNEJBQ1ksS0FBcUIsRUFDckIsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLFdBQXdCO1FBSHhCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWRwQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQWtCO1lBQzNCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLGNBQWMsRUFBRSxFQUFFO1NBQ3JCLENBQUM7UUFFRixXQUFNLEdBQVksRUFBRSxDQUFDO1FBQ3JCLGtCQUFhLEdBQVUsSUFBSSxhQUFLLEVBQUUsQ0FBQztJQU9JLENBQUM7SUFFeEMscUNBQVEsR0FBUjtRQUVFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFD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c0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsd0NBQVcsR0FBWDtJQUVBLENBQUM7SUFwSkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFDLENBQUMsMEJBQTBCLENBQUM7U0FDekMsQ0FBQzs7MEJBQUE7SUFrSkYseUJBQUM7QUFBRCxDQWpKQSxBQWlKQyxJQUFBO0FBakpZLDBCQUFrQixxQkFpSjlCLENBQUEiLCJmaWxlIjoiYXBwL2NvdXJzZS9lZGl0LWJhZGdlL2VkaXQtYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSZXNpemVPcHRpb25zLCBJbWFnZVJlc3VsdH0gZnJvbSBcIm5nMi1pbWFnZXVwbG9hZFwiO1xuaW1wb3J0IHtCYWRnZX0gZnJvbSBcIi4uLy4uL21vZGVscy9iYWRnZVwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtDb3Vyc2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvY291cnNlXCI7XG5cbmRlY2xhcmUgdmFyICQ6YW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZWRpdC1iYWRnZScsXG4gICAgdGVtcGxhdGVVcmw6ICdlZGl0LWJhZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6WydlZGl0LWJhZGdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFZGl0QmFkZ2VDb21wb25lbnQge1xuXG4gICAgY291cnNlOiBDb3Vyc2U7XG5cbiAgICBpbWFnZTogc3RyaW5nID0gJyc7XG4gICAgcmVzaXplT3B0aW9uczogUmVzaXplT3B0aW9ucyA9IHtcbiAgICAgICAgcmVzaXplTWF4SGVpZ2h0OiA4MCxcbiAgICAgICAgcmVzaXplTWF4V2lkdGg6IDgwXG4gICAgfTtcblxuICAgIGJhZGdlczogQmFkZ2VbXSA9IFtdO1xuICAgIHNlbGVjdGVkQmFkZ2U6IEJhZGdlID0gbmV3IEJhZGdlKCk7XG4gICAgYmFkZ2VGb3JtOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgICBuZ09uSW5pdCgpe1xuXG4gICAgICBpZih0aGlzLmNvdXJzZVNlcnZpY2UuY291cnNlICE9IG51bGwpe1xuICAgICAgICB0aGlzLmNvdXJzZSA9IHRoaXMuY291cnNlU2VydmljZS5jb3Vyc2U7XG4gICAgICAgIHRoaXMuZ2V0QmFkZ2VzKHRoaXMuY291cnNlLmlkKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCYWRnZUZvcm0oKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd0ZWFjaCddKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGNyZWF0ZUJhZGdlRm9ybSgpe1xuICAgICAgICB0aGlzLmJhZGdlRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgJ25hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICAgICAnaW1hZ2UnOiBbJyddLFxuICAgICAgICAgICAgJ3hwJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2V0Q3JlYXRlRm9ybSgpe1xuICAgICAgICAkKCcjY2xvc2VNb2RhbCcpLmNsaWNrKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQmFkZ2VGb3JtKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIGdldEJhZGdlcyhpZDogYW55KSB7XG4gICAgICAgIHRoaXMuY291cnNlU2VydmljZS5nZXRBbGxCYWRnZShpZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKGRhdGE6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuYmFkZ2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhZGdlcyA9IGRhdGEuYmFkZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWRnZXMubWFwKChiYWRnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICBiYWRnZS5pbWFnZSA9ICdodHRwOi8vNTQuMTY5LjExNS4yMzMvc3R1ZGVudHMvYmFkZ2VzLycgKyBiYWRnZS5pbWFnZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+ICBjb25zb2xlLmxvZyhlcnJvcikpXG4gICAgfVxuXG4gICAgYWRkQmFkZ2UoKXtcblxuICAgICAgICBsZXQgYmFkZ2UgPSBuZXcgQmFkZ2UodGhpcy5jb3Vyc2UuaWQsICcnLCB0aGlzLmJhZGdlRm9ybS52YWx1ZS5uYW1lLCB0aGlzLmltYWdlLCB0aGlzLmJhZGdlRm9ybS52YWx1ZS54cCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJhZGdlKTtcblxuICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuY3JlYXRlQmFkZ2UoYmFkZ2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldENyZWF0ZUZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBlZGl0QmFkZ2VNb2RhbChiYWRnZTogQmFkZ2Upe1xuICAgICAgICB0aGlzLnNlbGVjdGVkQmFkZ2UgPSBiYWRnZTtcbiAgICB9XG5cbiAgICBlZGl0QmFkZ2UoKXtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRCYWRnZSk7XG4gICAgICAgIHRoaXMuY291cnNlU2VydmljZS5lZGl0QmFkZ2UodGhpcy5zZWxlY3RlZEJhZGdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRFZGl0Rm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZChpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICAgICAgICYmIGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTFxuICAgICAgICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgICB9XG5cbiAgICBzZWxlY3RlZEJhZGdlSW1hZ2UoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCYWRnZS5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICAgICAgICYmIGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTFxuICAgICAgICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgICB9XG5cblxuICAgIGRlbGV0ZUJhZGdlKCl7XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRCYWRnZS5iYWRnZV9pZCA9IHRoaXMuc2VsZWN0ZWRCYWRnZS5pZDtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRCYWRnZSk7XG4gICAgICAgIHRoaXMuY291cnNlU2VydmljZS5kZWxldGVCYWRnZSh0aGlzLnNlbGVjdGVkQmFkZ2UuYmFkZ2VfaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RWRpdEZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVzZXRFZGl0Rm9ybSgpe1xuICAgICAgICAkKCcjY2xvc2VFZGl0QmFkZ2VNb2RhbCcpLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCl7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG5cbiAgICB9XG5cblxufVxuIl19
