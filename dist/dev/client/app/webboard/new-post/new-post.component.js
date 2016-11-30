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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWJib2FyZC9uZXctcG9zdC9uZXctcG9zdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQkFBbUIsbUJBQW1CLENBQUMsQ0FBQTtBQUN2QyxpQ0FBOEIsaUNBQWlDLENBQUMsQ0FBQTtBQUNoRSx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxzQkFBc0MsZ0JBQWdCLENBQUMsQ0FBQTtBQVN2RDtJQU1FLDBCQUFvQixXQUF3QixFQUFVLGVBQWdDLEVBQ2xFLEtBQXFCLEVBQVUsTUFBYztRQUQ3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNsRSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFOUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2xCLFdBQVc7YUFDWCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2YsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFHRCxxQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFBQSxpQkF5QkM7UUF2QkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBSWxGLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzthQUNyQyxTQUFTLENBQ1IsVUFBQyxJQUFTO1lBR1IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUUzQixJQUFJLGdCQUFnQixHQUFxQjtvQkFDdkMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUM7aUJBQ3JDLENBQUM7Z0JBRUYsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFFN0QsQ0FBQztRQUdILENBQUMsRUFDRCxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7SUFDTixDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFwRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFDLENBQUMsd0JBQXdCLENBQUM7U0FDdkMsQ0FBQzs7d0JBQUE7SUFrRUYsdUJBQUM7QUFBRCxDQWpFQSxBQWlFQyxJQUFBO0FBakVZLHdCQUFnQixtQkFpRTVCLENBQUEiLCJmaWxlIjoiYXBwL3dlYmJvYXJkL25ldy1wb3N0L25ldy1wb3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQb3N0fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Bvc3RcIjtcbmltcG9ydCB7V2ViYm9hcmRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvd2ViYm9hcmQuc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbmV3LXBvc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnbmV3LXBvc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczpbJ25ldy1wb3N0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdQb3N0Q29tcG9uZW50IHtcblxuICBjb3Vyc2VfaWQ6IGFueTtcbiAgcG9zdEZvcm06IGFueTtcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB3ZWJib2FyZFNlcnZpY2U6IFdlYmJvYXJkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAucXVlcnlQYXJhbXNcbiAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5jb3Vyc2VfaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuY291cnNlX2lkKTtcbiAgICAgIH0pXG4gIH1cblxuXG4gIGNyZWF0ZUZvcm0oKSB7XG4gICAgdGhpcy5wb3N0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ3RpdGxlJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgJ2RldGFpbCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlUG9zdCgpe1xuXG4gICAgbGV0IG5ld1Bvc3QgPSBuZXcgUG9zdCh0aGlzLmNvdXJzZV9pZCwgdGhpcy5wb3N0Rm9ybS50aXRsZSwgdGhpcy5wb3N0Rm9ybS5kZXRhaWwpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhuZXdQb3N0KTtcblxuICAgIHRoaXMud2ViYm9hcmRTZXJ2aWNlLmNyZWF0ZVBvc3QobmV3UG9zdClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcblxuXG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcblxuICAgICAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdpZCc6IHRoaXMuY291cnNlX2lkfSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3dlYmJvYXJkL3Bvc3RgXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG5cbiAgICAgICAgICB9XG5cblxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIGNhbmNlbCgpe1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuXG59XG4iXX0=
