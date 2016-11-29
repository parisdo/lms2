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
var post_1 = require("../../models/post");
var webboard_service_1 = require("../../services/webboard.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var NewPostComponent = (function () {
    function NewPostComponent(formBuilder, webboardService, route, router) {
        this.formBuilder = formBuilder;
        this.webboardService = webboardService;
        this.route = route;
        this.router = router;
        this.createForm();
    }
    NewPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.course_id = +params['id'];
            console.log(_this.course_id);
        });
    };
    NewPostComponent.prototype.createForm = function () {
        this.postForm = this.formBuilder.group({
            'title': ['', [forms_1.Validators.required]],
            'detail': ['', [forms_1.Validators.required]]
        });
    };
    NewPostComponent.prototype.createPost = function () {
        var _this = this;
        var newPost = new post_1.Post(this.course_id, this.postForm.title, this.postForm.detail);
        console.log(newPost);
        this.webboardService.createPost(newPost)
            .subscribe(function (data) {
            if (data.status == 'success') {
                var navigationExtras = {
                    queryParams: { 'id': _this.course_id },
                };
                _this.router.navigate(["/webboard/post"], navigationExtras);
            }
        }, function (error) { return console.log(error); });
    };
    NewPostComponent.prototype.cancel = function () {
        window.history.back();
    };
    NewPostComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewPostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-post',
            templateUrl: 'new-post.component.html',
            styleUrls: ['new-post.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, webboard_service_1.WebboardService, router_1.ActivatedRoute, router_1.Router])
    ], NewPostComponent);
    return NewPostComponent;
}());
exports.NewPostComponent = NewPostComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWJib2FyZC9uZXctcG9zdC9uZXctcG9zdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQkFBbUIsbUJBQW1CLENBQUMsQ0FBQTtBQUN2QyxpQ0FBOEIsaUNBQWlDLENBQUMsQ0FBQTtBQUNoRSx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxzQkFBc0MsZ0JBQWdCLENBQUMsQ0FBQTtBQVN2RDtJQU1FLDBCQUFvQixXQUF3QixFQUFVLGVBQWdDLEVBQ2xFLEtBQXFCLEVBQVUsTUFBYztRQUQ3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNsRSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFOUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2xCLFdBQVc7YUFDWCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2YsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFHRCxxQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFBQSxpQkF5QkM7UUF2QkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2FBQ3JDLFNBQVMsQ0FDUixVQUFDLElBQVM7WUFHUixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBRTNCLElBQUksZ0JBQWdCLEdBQXFCO29CQUN2QyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBQztpQkFDckMsQ0FBQztnQkFFRixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUU3RCxDQUFDO1FBR0gsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQztJQUNOLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQXBFSDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUMsQ0FBQyx3QkFBd0IsQ0FBQztTQUN2QyxDQUFDOzt3QkFBQTtJQWtFRix1QkFBQztBQUFELENBakVBLEFBaUVDLElBQUE7QUFqRVksd0JBQWdCLG1CQWlFNUIsQ0FBQSIsImZpbGUiOiJhcHAvd2ViYm9hcmQvbmV3LXBvc3QvbmV3LXBvc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Bvc3R9IGZyb20gXCIuLi8uLi9tb2RlbHMvcG9zdFwiO1xuaW1wb3J0IHtXZWJib2FyZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy93ZWJib2FyZC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICduZXctcG9zdCcsXG4gICAgdGVtcGxhdGVVcmw6ICduZXctcG9zdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOlsnbmV3LXBvc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5ld1Bvc3RDb21wb25lbnQge1xuXG4gIGNvdXJzZV9pZDogYW55O1xuICBwb3N0Rm9ybTogYW55O1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHdlYmJvYXJkU2VydmljZTogV2ViYm9hcmRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXG4gICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLmNvdXJzZV9pZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY291cnNlX2lkKTtcbiAgICAgIH0pXG4gIH1cblxuXG4gIGNyZWF0ZUZvcm0oKSB7XG4gICAgdGhpcy5wb3N0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ3RpdGxlJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgJ2RldGFpbCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlUG9zdCgpe1xuXG4gICAgbGV0IG5ld1Bvc3QgPSBuZXcgUG9zdCh0aGlzLmNvdXJzZV9pZCwgdGhpcy5wb3N0Rm9ybS50aXRsZSwgdGhpcy5wb3N0Rm9ybS5kZXRhaWwpO1xuXG4gICAgY29uc29sZS5sb2cobmV3UG9zdCk7XG5cbiAgICB0aGlzLndlYmJvYXJkU2VydmljZS5jcmVhdGVQb3N0KG5ld1Bvc3QpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG5cblxuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG5cbiAgICAgICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnaWQnOiB0aGlzLmNvdXJzZV9pZH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC93ZWJib2FyZC9wb3N0YF0sIG5hdmlnYXRpb25FeHRyYXMpO1xuXG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBjYW5jZWwoKXtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cblxufVxuIl19
