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
var router_1 = require("@angular/router");
var auth_service_1 = require("../../auth/auth.service");
var webboard_service_1 = require("../../services/webboard.service");
var forms_1 = require("@angular/forms");
var comment_1 = require("../../models/comment");
var student_service_1 = require("../../services/student.service");
var PostComponent = (function () {
    function PostComponent(formBuilder, authService, route, router, webboardService, studentService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.webboardService = webboardService;
        this.studentService = studentService;
        this.comments = [];
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.student = this.studentService.student;
        console.log(this.student);
        this.role = this.authService.checkRole();
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.course_id = +params['id'];
            _this.webboardService.cousre_id = _this.course_id;
            console.log(_this.course_id);
            _this.getPost();
            _this.createCommentForm();
        });
    };
    PostComponent.prototype.getPost = function () {
        var _this = this;
        this.webboardService.getAllPost(this.course_id)
            .subscribe(function (data) {
            console.log(data);
            _this.post = data.post;
            _this.comments = data.comments;
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.createCommentForm = function () {
        this.commentForm = this.formBuilder.group({
            'detail': ['', [forms_1.Validators.required]]
        });
    };
    PostComponent.prototype.postComment = function () {
        var _this = this;
        var newComment = new comment_1.Comments(this.course_id, this.commentForm.detail);
        console.log(newComment);
        this.webboardService.postComment(newComment)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                _this.getPost();
            }
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.editPost = function (id, detail) {
        var _this = this;
        var editComment = new comment_1.Comments(id, detail);
        console.log(editComment);
        this.webboardService.editComment(editComment)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                _this.getPost();
                _this.edit_comment_id = null;
            }
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.cancleEdit = function () {
        this.edit_comment_id = null;
    };
    PostComponent.prototype.editModeComment = function (id) {
        this.edit_comment_id = id;
    };
    PostComponent.prototype.deletePost = function (id) {
        var _this = this;
        var comment_id = { id: id };
        console.log(comment_id);
        this.webboardService.deleteComment(comment_id)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                _this.getPost();
            }
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.reset = function () {
        this.createCommentForm();
    };
    PostComponent.prototype.cancel = function () {
        window.history.back();
    };
    PostComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lms-post',
            templateUrl: 'post.component.html',
            styleUrls: ['post.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.ActivatedRoute, router_1.Router, webboard_service_1.WebboardService, student_service_1.StudentService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWJib2FyZC9wb3N0L3Bvc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFFdkQsNkJBQTBCLHlCQUF5QixDQUFDLENBQUE7QUFDcEQsaUNBQThCLGlDQUFpQyxDQUFDLENBQUE7QUFFaEUsc0JBQXNDLGdCQUFnQixDQUFDLENBQUE7QUFDdkQsd0JBQXVCLHNCQUFzQixDQUFDLENBQUE7QUFDOUMsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFTOUQ7SUFXRSx1QkFBb0IsV0FBd0IsRUFBVSxXQUF3QixFQUFVLEtBQXFCLEVBQVUsTUFBYyxFQUNqSCxlQUFnQyxFQUFVLGNBQThCO1FBRHhFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakgsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBUDVGLGFBQVEsR0FBUyxFQUFFLENBQUM7SUFPMkUsQ0FBQztJQUdoRyxnQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFiQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2xCLFdBQVc7YUFDWCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2YsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUdELCtCQUFPLEdBQVA7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDNUMsU0FBUyxDQUNSLFVBQUMsSUFBUztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO0lBQ04sQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDeEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsbUNBQVcsR0FBWDtRQUFBLGlCQWVDO1FBYkMsSUFBSSxVQUFVLEdBQUcsSUFBSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQzthQUN6QyxTQUFTLENBQ1IsVUFBQyxJQUFTO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQztJQUNOLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsRUFBTyxFQUFFLE1BQVc7UUFBN0IsaUJBa0JDO1FBZkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxrQkFBUSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQzthQUMxQyxTQUFTLENBQ1IsVUFBQyxJQUFTO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM5QixDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQztJQUNOLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUlELHVDQUFlLEdBQWYsVUFBZ0IsRUFBTztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEVBQU87UUFBbEIsaUJBZUM7UUFiQyxJQUFJLFVBQVUsR0FBRyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQzthQUMzQyxTQUFTLENBQ1IsVUFBQyxJQUFTO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQztJQUNOLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFHRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBcklIO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBQyxDQUFDLG9CQUFvQixDQUFDO1NBQ25DLENBQUM7O3FCQUFBO0lBa0lGLG9CQUFDO0FBQUQsQ0FqSUEsQUFpSUMsSUFBQTtBQWpJWSxxQkFBYSxnQkFpSXpCLENBQUEiLCJmaWxlIjoiYXBwL3dlYmJvYXJkL3Bvc3QvcG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7V2ViYm9hcmRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvd2ViYm9hcmQuc2VydmljZVwiO1xuaW1wb3J0IHtQb3N0fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Bvc3RcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtDb21tZW50c30gZnJvbSBcIi4uLy4uL21vZGVscy9jb21tZW50XCI7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3R1ZGVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbG1zLXBvc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAncG9zdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOlsncG9zdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9zdENvbXBvbmVudCB7XG5cbiAgcm9sZTogYW55O1xuICBjb3Vyc2VfaWQ6IGFueTtcbiAgcG9zdDogUG9zdDtcbiAgY29tbWVudHM6IGFueVtdID1bXTtcbiAgY29tbWVudEZvcm06IGFueTtcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBzdHVkZW50OiBTdHVkZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgd2ViYm9hcmRTZXJ2aWNlOiBXZWJib2FyZFNlcnZpY2UsIHByaXZhdGUgc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlKSB7fVxuXG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLnN0dWRlbnQgPSB0aGlzLnN0dWRlbnRTZXJ2aWNlLnN0dWRlbnQ7XG4gICAgY29uc29sZS5sb2codGhpcy5zdHVkZW50KTtcblxuICAgIHRoaXMucm9sZSA9IHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tSb2xlKCk7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAucXVlcnlQYXJhbXNcbiAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5jb3Vyc2VfaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICB0aGlzLndlYmJvYXJkU2VydmljZS5jb3VzcmVfaWQgPSB0aGlzLmNvdXJzZV9pZDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb3Vyc2VfaWQpO1xuICAgICAgICB0aGlzLmdldFBvc3QoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21tZW50Rm9ybSgpO1xuICAgICAgfSlcbiAgfVxuXG5cbiAgZ2V0UG9zdCgpe1xuICAgIHRoaXMud2ViYm9hcmRTZXJ2aWNlLmdldEFsbFBvc3QodGhpcy5jb3Vyc2VfaWQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgdGhpcy5wb3N0ID0gZGF0YS5wb3N0O1xuICAgICAgICAgIHRoaXMuY29tbWVudHMgPSBkYXRhLmNvbW1lbnRzO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbW1lbnRGb3JtKCkge1xuICAgIHRoaXMuY29tbWVudEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdkZXRhaWwnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcG9zdENvbW1lbnQoKXtcblxuICAgIGxldCBuZXdDb21tZW50ID0gbmV3IENvbW1lbnRzKHRoaXMuY291cnNlX2lkLCB0aGlzLmNvbW1lbnRGb3JtLmRldGFpbCk7XG4gICAgY29uc29sZS5sb2cobmV3Q29tbWVudCk7XG5cbiAgICB0aGlzLndlYmJvYXJkU2VydmljZS5wb3N0Q29tbWVudChuZXdDb21tZW50KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICB0aGlzLmdldFBvc3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgZWRpdFBvc3QoaWQ6IGFueSwgZGV0YWlsOiBhbnkpe1xuXG5cbiAgICBsZXQgZWRpdENvbW1lbnQgPSBuZXcgQ29tbWVudHMoaWQsIGRldGFpbCk7XG5cbiAgICBjb25zb2xlLmxvZyhlZGl0Q29tbWVudCk7XG5cbiAgICB0aGlzLndlYmJvYXJkU2VydmljZS5lZGl0Q29tbWVudChlZGl0Q29tbWVudClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgdGhpcy5nZXRQb3N0KCk7XG4gICAgICAgICAgICB0aGlzLmVkaXRfY29tbWVudF9pZCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIGNhbmNsZUVkaXQoKXtcbiAgICB0aGlzLmVkaXRfY29tbWVudF9pZCA9IG51bGw7XG4gIH1cblxuICBlZGl0X2NvbW1lbnRfaWQ6IGFueTtcblxuICBlZGl0TW9kZUNvbW1lbnQoaWQ6IGFueSl7XG4gICAgdGhpcy5lZGl0X2NvbW1lbnRfaWQgPSBpZDtcbiAgfVxuXG4gIGRlbGV0ZVBvc3QoaWQ6IGFueSl7XG5cbiAgICBsZXQgY29tbWVudF9pZCA9IHtpZDogaWR9O1xuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRfaWQpO1xuXG4gICAgdGhpcy53ZWJib2FyZFNlcnZpY2UuZGVsZXRlQ29tbWVudChjb21tZW50X2lkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICB0aGlzLmdldFBvc3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmNyZWF0ZUNvbW1lbnRGb3JtKCk7XG4gIH1cblxuICBjYW5jZWwoKXtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuIl19
