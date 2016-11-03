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
            _this.badges = data.badge;
            _this.badges.map(function (badge) {
                badge.image = config_1.publicUrl + "students/badges/" + badge.image;
            });
        }, function (error) { return console.log(error); });
    };
    EditBadgeComponent.prototype.addBadge = function () {
        var _this = this;
        var badge = new badge_1.Badge(this.course.id, '', this.badgeForm.value.name, this.image, this.badgeForm.value.xp);
        console.log(badge);
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
            this.selectedBadge.image = this.selectedBadge.image.substring(36);
        }
        this.editBadgeImage = false;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1iYWRnZS9lZGl0LWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHVCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpFLHNCQUFvQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ3pDLHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZELCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBRTVELHVCQUF3Qix1QkFBdUIsQ0FBQyxDQUFBO0FBVWhEO0lBY0ksNEJBQ1ksS0FBcUIsRUFDckIsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLFdBQXdCO1FBSHhCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWRwQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQWtCO1lBQzNCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLGNBQWMsRUFBRSxFQUFFO1NBQ3JCLENBQUM7UUFFRixXQUFNLEdBQVksRUFBRSxDQUFDO1FBQ3JCLGtCQUFhLEdBQVUsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQTJHbkMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixtQkFBYyxHQUFXLEVBQUUsQ0FBQztJQXJHVyxDQUFDO0lBRXhDLHFDQUFRLEdBQVI7UUFFRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxlQUFlLEVBQUUs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QWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7YUFDdEQsU0FBUyxDQUNOLFVBQUMsSUFBUztZQUdOLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDekIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekIsQ0FBQztRQUNMLENBQUMsRUFDRCxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQ2hDLENBQUM7SUFDVixDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUNFLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsd0NBQVcsR0FBWCxjQUFlLENBQUM7SUFsS3BCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBQyxDQUFDLDBCQUEwQixDQUFDO1NBQ3pDLENBQUM7OzBCQUFBO0lBK0pGLHlCQUFDO0FBQUQsQ0E3SkEsQUE2SkMsSUFBQTtBQTdKWSwwQkFBa0IscUJBNko5QixDQUFBIiwiZmlsZSI6ImFwcC9jb3Vyc2UvZWRpdC1iYWRnZS9lZGl0LWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UmVzaXplT3B0aW9ucywgSW1hZ2VSZXN1bHR9IGZyb20gXCJuZzItaW1hZ2V1cGxvYWRcIjtcbmltcG9ydCB7QmFkZ2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvYmFkZ2VcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcbmltcG9ydCB7Q291cnNlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvdXJzZVwiO1xuaW1wb3J0IHtwdWJsaWNVcmx9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWdcIjtcbmRlY2xhcmUgdmFyICQ6YW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZWRpdC1iYWRnZScsXG4gICAgdGVtcGxhdGVVcmw6ICdlZGl0LWJhZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6WydlZGl0LWJhZGdlLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEVkaXRCYWRnZUNvbXBvbmVudCB7XG5cbiAgICBjb3Vyc2U6IENvdXJzZTtcblxuICAgIGltYWdlOiBzdHJpbmcgPSAnJztcbiAgICByZXNpemVPcHRpb25zOiBSZXNpemVPcHRpb25zID0ge1xuICAgICAgICByZXNpemVNYXhIZWlnaHQ6IDgwLFxuICAgICAgICByZXNpemVNYXhXaWR0aDogODBcbiAgICB9O1xuXG4gICAgYmFkZ2VzOiBCYWRnZVtdID0gW107XG4gICAgc2VsZWN0ZWRCYWRnZTogQmFkZ2UgPSBuZXcgQmFkZ2UoKTtcbiAgICBiYWRnZUZvcm06IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICAgIG5nT25Jbml0KCl7XG5cbiAgICAgIGlmKHRoaXMuY291cnNlU2VydmljZS5jb3Vyc2UgIT0gbnVsbCl7XG4gICAgICAgIHRoaXMuY291cnNlID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZTtcbiAgICAgICAgdGhpcy5nZXRCYWRnZXModGhpcy5jb3Vyc2UuaWQpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJhZGdlRm9ybSgpO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3RlYWNoJ10pO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgY3JlYXRlQmFkZ2VGb3JtKCl7XG4gICAgICAgIHRoaXMuYmFkZ2VGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAnbmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgICdpbWFnZSc6IFsnJ10sXG4gICAgICAgICAgICAneHAnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZXRDcmVhdGVGb3JtKCl7XG4gICAgICAgICQoJyNjbG9zZU1vZGFsJykuY2xpY2soKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCYWRnZUZvcm0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG51bGw7XG4gICAgfVxuXG5cbiAgICBnZXRCYWRnZXMoaWQ6IGFueSkge1xuICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuZ2V0QWxsQmFkZ2UoaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChkYXRhOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhZGdlcyA9IGRhdGEuYmFkZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWRnZXMubWFwKChiYWRnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICBiYWRnZS5pbWFnZSA9IGAke3B1YmxpY1VybH1zdHVkZW50cy9iYWRnZXMvJHtiYWRnZS5pbWFnZX1gXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gIGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICB9XG5cbiAgICBhZGRCYWRnZSgpe1xuXG4gICAgICAgIGxldCBiYWRnZSA9IG5ldyBCYWRnZSh0aGlzLmNvdXJzZS5pZCwgJycsIHRoaXMuYmFkZ2VGb3JtLnZhbHVlLm5hbWUsIHRoaXMuaW1hZ2UsIHRoaXMuYmFkZ2VGb3JtLnZhbHVlLnhwKTtcbiAgICAgICAgY29uc29sZS5sb2coYmFkZ2UpO1xuXG4gICAgICAgIHRoaXMuY291cnNlU2VydmljZS5jcmVhdGVCYWRnZShiYWRnZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRDcmVhdGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuXG4gICAgZWRpdEJhZGdlTW9kYWwoYmFkZ2U6IEJhZGdlKXtcblxuICAgICAgdGhpcy5zZWxlY3RlZEJhZGdlID0gYmFkZ2U7XG4gICAgICB0aGlzLmVkaXRCYWRnZUltYWdlID0gYmFkZ2UuaW1hZ2U7XG4gICAgfVxuXG4gICAgZWRpdEJhZGdlKCl7XG5cbiAgICAgIGlmKHRoaXMuaXNFZGl0ZWQpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkQmFkZ2UuaW1hZ2UgPSB0aGlzLmVkaXRCYWRnZUltYWdlO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkQmFkZ2UuaW1hZ2UgPSB0aGlzLnNlbGVjdGVkQmFkZ2UuaW1hZ2Uuc3Vic3RyaW5nKDM2KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lZGl0QmFkZ2VJbWFnZSA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZEJhZGdlKTtcblxuICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmVkaXRCYWRnZSh0aGlzLnNlbGVjdGVkQmFkZ2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRFZGl0Rm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZChpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICAgICAgICYmIGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTFxuICAgICAgICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgICB9XG5cblxuICAgIGlzRWRpdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgZWRpdEJhZGdlSW1hZ2U6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBzZWxlY3RlZEJhZGdlSW1hZ2UoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG4gICAgICAgIHRoaXMuaXNFZGl0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVkaXRCYWRnZUltYWdlID0gaW1hZ2VSZXN1bHQucmVzaXplZFxuICAgICAgICAgICAgJiYgaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMXG4gICAgICAgICAgICB8fCBpbWFnZVJlc3VsdC5kYXRhVVJMO1xuICAgIH1cblxuXG4gICAgZGVsZXRlQmFkZ2UoKXtcblxuICAgICAgdGhpcy5zZWxlY3RlZEJhZGdlLmJhZGdlX2lkID0gdGhpcy5zZWxlY3RlZEJhZGdlLmlkO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZEJhZGdlKTtcbiAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmRlbGV0ZUJhZGdlKHRoaXMuc2VsZWN0ZWRCYWRnZS5iYWRnZV9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRFZGl0Rm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXNldEVkaXRGb3JtKCl7XG4gICAgICAkKCcjY2xvc2VFZGl0QmFkZ2VNb2RhbCcpLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCl7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7fVxuXG59XG4iXX0=
