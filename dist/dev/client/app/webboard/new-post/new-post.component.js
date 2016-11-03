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
    function NewPostComponent(formBuilder, webboardService, router) {
        this.formBuilder = formBuilder;
        this.webboardService = webboardService;
        this.router = router;
        this.createForm();
    }
    NewPostComponent.prototype.createForm = function () {
        this.postForm = this.formBuilder.group({
            'title': ['', [forms_1.Validators.required]],
            'detail': ['', [forms_1.Validators.required]]
        });
    };
    NewPostComponent.prototype.createPost = function () {
        var newPost = new post_1.Post(this.webboardService.cousre_id, this.postForm.title, this.postForm.detail);
        console.log(newPost);
        this.webboardService.postComment(newPost)
            .subscribe(function (data) {
            console.log(data);
            console.log(data.status);
        }, function (error) { return console.log(error); });
    };
    NewPostComponent.prototype.cancel = function () {
        window.history.back();
    };
    NewPostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-post',
            templateUrl: 'new-post.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, webboard_service_1.WebboardService, router_1.Router])
    ], NewPostComponent);
    return NewPostComponent;
}());
exports.NewPostComponent = NewPostComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWJib2FyZC9uZXctcG9zdC9uZXctcG9zdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQkFBbUIsbUJBQW1CLENBQUMsQ0FBQTtBQUN2QyxpQ0FBOEIsaUNBQWlDLENBQUMsQ0FBQTtBQUNoRSx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxzQkFBc0MsZ0JBQWdCLENBQUMsQ0FBQTtBQU92RDtJQUtFLDBCQUFvQixXQUF3QixFQUFVLGVBQWdDLEVBQVUsTUFBYztRQUExRixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFM0csSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFFRSxJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ3RDLFNBQVMsQ0FDUixVQUFDLElBQVM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFDRCxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7SUFDTixDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXhDSDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDOzt3QkFBQTtJQXdDRix1QkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7QUF2Q1ksd0JBQWdCLG1CQXVDNUIsQ0FBQSIsImZpbGUiOiJhcHAvd2ViYm9hcmQvbmV3LXBvc3QvbmV3LXBvc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Bvc3R9IGZyb20gXCIuLi8uLi9tb2RlbHMvcG9zdFwiO1xuaW1wb3J0IHtXZWJib2FyZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy93ZWJib2FyZC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICduZXctcG9zdCcsXG4gICAgdGVtcGxhdGVVcmw6ICduZXctcG9zdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5ld1Bvc3RDb21wb25lbnQge1xuXG5cbiAgcG9zdEZvcm06IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB3ZWJib2FyZFNlcnZpY2U6IFdlYmJvYXJkU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXG4gICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG5cbiAgY3JlYXRlRm9ybSgpIHtcbiAgICB0aGlzLnBvc3RGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAndGl0bGUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnZGV0YWlsJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQb3N0KCl7XG5cbiAgICBsZXQgbmV3UG9zdCA9IG5ldyBQb3N0KHRoaXMud2ViYm9hcmRTZXJ2aWNlLmNvdXNyZV9pZCwgdGhpcy5wb3N0Rm9ybS50aXRsZSwgdGhpcy5wb3N0Rm9ybS5kZXRhaWwpO1xuXG4gICAgY29uc29sZS5sb2cobmV3UG9zdCk7XG5cbiAgICB0aGlzLndlYmJvYXJkU2VydmljZS5wb3N0Q29tbWVudChuZXdQb3N0KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc3RhdHVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBjYW5jZWwoKXtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuXG5cbn1cbiJdfQ==
