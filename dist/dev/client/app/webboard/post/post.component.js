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
var teacher_service_1 = require("../../services/teacher.service");
var PostComponent = (function () {
    function PostComponent(formBuilder, authService, route, router, webboardService, studentService, teacherService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.webboardService = webboardService;
        this.studentService = studentService;
        this.teacherService = teacherService;
        this.comments = [];
        this.edit_comment_id = null;
        this.edit_reply_comment_id = null;
        this.isEditPost = false;
        this.isReply = false;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.student_id = this.authService.id;
        this.role = this.authService.checkRole();
        if (this.role) {
            this.getTeacher();
        }
        else {
            this.getStudent(this.student_id);
        }
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.course_id = +params['id'];
            _this.getPost();
            _this.createCommentForm();
        });
    };
    PostComponent.prototype.getTeacher = function () {
        var _this = this;
        this.teacherService.getTeacher()
            .subscribe(function (data) {
            _this.teacher = data;
            _this.teacher_id = data.user_id;
            _this.name = _this.teacher.name;
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.getStudent = function (id) {
        var _this = this;
        this.studentService.getStudent(id)
            .subscribe(function (data) {
            _this.student = data.student[0].student;
            _this.name = _this.student.name;
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.createPost = function () {
        var navigationExtras = {
            queryParams: { 'id': this.course_id },
        };
        this.router.navigate(["/webboard/new-post"], navigationExtras);
    };
    PostComponent.prototype.getPost = function () {
        var _this = this;
        this.webboardService.getAllPost(this.course_id)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.post = data.data.post;
                _this.comments = data.data.comments;
                console.log(_this.comments);
            }
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.editPost = function (id, title, detail) {
        var _this = this;
        var post = { id: id, title: title, detail: detail };
        this.webboardService.editPost(post)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.getPost();
                _this.isEditPost = !_this.isEditPost;
            }
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.createCommentForm = function () {
        this.commentForm = this.formBuilder.group({
            'detail': ['', [forms_1.Validators.required]]
        });
    };
    PostComponent.prototype.postComment = function () {
        var _this = this;
        var newComment = new comment_1.Comments(this.course_id, this.name, this.commentForm.detail);
        this.webboardService.postComment(newComment)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.getPost();
                _this.createCommentForm();
            }
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.editComment = function (id, detail) {
        var _this = this;
        this.edit_comment_id = id;
        var editComment = new comment_1.Comments(id, this.name, detail);
        this.webboardService.editComment(editComment)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.getPost();
                _this.edit_comment_id = null;
            }
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.deletePost = function (id) {
        var postId = { id: id };
        this.webboardService.deletePost(postId)
            .subscribe(function (data) {
            location.reload();
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.cancelEdit = function () {
        this.edit_comment_id = null;
    };
    PostComponent.prototype.editModeComment = function (id) {
        this.edit_comment_id = id;
    };
    PostComponent.prototype.deleteComment = function (id) {
        var _this = this;
        var comment_id = { id: id };
        this.webboardService.deleteComment(comment_id)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.getPost();
            }
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.reset = function () {
        this.createCommentForm();
    };
    PostComponent.prototype.home = function () {
        if (this.role) {
            this.router.navigate(['/teach']);
        }
        else {
            this.router.navigate(['/student/dashboard']);
        }
    };
    PostComponent.prototype.cancel = function () {
        window.history.back();
    };
    PostComponent.prototype.onReply = function (id) {
        this.replyId = id;
        this.isReply = true;
    };
    PostComponent.prototype.onShowReplyComment = function (id) {
        this.comments.forEach(function (comment) {
            if (id == comment.comment.id) {
                comment.comment.showReplyComment = !comment.comment.showReplyComment;
            }
        });
    };
    PostComponent.prototype.cancelReply = function () {
        this.isReply = false;
    };
    PostComponent.prototype.replyComment = function (id, detail) {
        var _this = this;
        var replyComment = new comment_1.Comments(id, this.name, detail);
        this.webboardService.replyComment(replyComment)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.getPost();
                _this.isReply = false;
            }
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.editModeReplyComment = function (id) {
        this.edit_reply_comment_id = id;
    };
    PostComponent.prototype.editReplyComment = function (id, detail) {
        var _this = this;
        this.edit_reply_comment_id = id;
        var editComment = new comment_1.Comments(id, this.name, detail);
        this.webboardService.editReplyComment(editComment)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.getPost();
                _this.edit_reply_comment_id = null;
            }
        }, function (error) { return console.log(error); });
    };
    PostComponent.prototype.deleteReplyComment = function (id) {
        var _this = this;
        var replyComentId = { id: id };
        this.webboardService.deleteReplyComment(replyComentId)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                _this.getPost();
            }
        }, function (error) { return console.log(error); });
    };
    PostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lms-post',
            templateUrl: 'post.component.html',
            styleUrls: ['post.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.ActivatedRoute, router_1.Router, webboard_service_1.WebboardService, student_service_1.StudentService, teacher_service_1.TeacherService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWJib2FyZC9wb3N0L3Bvc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUsNkJBQTBCLHlCQUF5QixDQUFDLENBQUE7QUFDcEQsaUNBQThCLGlDQUFpQyxDQUFDLENBQUE7QUFFaEUsc0JBQXNDLGdCQUFnQixDQUFDLENBQUE7QUFDdkQsd0JBQXVCLHNCQUFzQixDQUFDLENBQUE7QUFDOUMsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFFOUQsZ0NBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFTOUQ7SUFpQkUsdUJBQW9CLFdBQXdCLEVBQVUsV0FBd0IsRUFBVSxLQUFxQixFQUFVLE1BQWMsRUFDakgsZUFBZ0MsRUFBVSxjQUE4QixFQUFVLGNBQThCO1FBRGhILGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakgsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBUHBJLGFBQVEsR0FBUyxFQUFFLENBQUM7UUFHcEIsb0JBQWUsR0FBUSxJQUFJLENBQUM7UUFDNUIsMEJBQXFCLEdBQVEsSUFBSSxDQUFDO1FBNEVsQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBd0g1QixZQUFPLEdBQVksS0FBSyxDQUFDO0lBak04RyxDQUFDO0lBR3hJLGdDQUFRLEdBQVI7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENB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Q3BCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFDLENBQUMsb0JBQW9CLENBQUM7U0FDbkMsQ0FBQzs7cUJBQUE7SUF1U0Ysb0JBQUM7QUFBRCxDQXRTQSxBQXNTQyxJQUFBO0FBdFNZLHFCQUFhLGdCQXNTekIsQ0FBQSIsImZpbGUiOiJhcHAvd2ViYm9hcmQvcG9zdC9wb3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtXZWJib2FyZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy93ZWJib2FyZC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Bvc3R9IGZyb20gXCIuLi8uLi9tb2RlbHMvcG9zdFwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0NvbW1lbnRzfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbW1lbnRcIjtcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7U3R1ZGVudH0gZnJvbSBcIi4uLy4uL21vZGVscy9zdHVkZW50XCI7XG5pbXBvcnQge1RlYWNoZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGVhY2hlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGVhY2hlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbG1zLXBvc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAncG9zdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOlsncG9zdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9zdENvbXBvbmVudCB7XG5cbiAgdGVhY2hlcjogVGVhY2hlcjtcbiAgdGVhY2hlcl9pZDogYW55O1xuICBzdHVkZW50OiBTdHVkZW50O1xuICBzdHVkZW50X2lkOiBhbnk7XG5cbiAgbmFtZTogc3RyaW5nO1xuICByb2xlOiBhbnk7XG4gIGNvdXJzZV9pZDogYW55O1xuICBwb3N0OiBQb3N0O1xuICBjb21tZW50czogYW55W10gPVtdO1xuICBjb21tZW50Rm9ybTogYW55O1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICBlZGl0X2NvbW1lbnRfaWQ6IGFueSA9IG51bGw7XG4gIGVkaXRfcmVwbHlfY29tbWVudF9pZDogYW55ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHdlYmJvYXJkU2VydmljZTogV2ViYm9hcmRTZXJ2aWNlLCBwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSwgcHJpdmF0ZSB0ZWFjaGVyU2VydmljZTogVGVhY2hlclNlcnZpY2UpIHt9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0dWRlbnRfaWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmlkO1xuICAgIHRoaXMucm9sZSA9IHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tSb2xlKCk7XG5cbiAgICBpZih0aGlzLnJvbGUpe1xuICAgICAgdGhpcy5nZXRUZWFjaGVyKCk7XG4gICAgfWVsc2Uge1xuICAgICAgdGhpcy5nZXRTdHVkZW50KHRoaXMuc3R1ZGVudF9pZCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAucXVlcnlQYXJhbXNcbiAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5jb3Vyc2VfaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICB0aGlzLmdldFBvc3QoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21tZW50Rm9ybSgpO1xuICAgICAgfSlcbiAgfVxuXG4gIGdldFRlYWNoZXIoKSB7XG4gICAgdGhpcy50ZWFjaGVyU2VydmljZS5nZXRUZWFjaGVyKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4ge1xuXG4gICAgICAgICAgdGhpcy50ZWFjaGVyID0gZGF0YTtcbiAgICAgICAgICB0aGlzLnRlYWNoZXJfaWQgPSBkYXRhLnVzZXJfaWQ7XG4gICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy50ZWFjaGVyLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+ICBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9XG5cbiAgZ2V0U3R1ZGVudChpZDogYW55KSB7XG4gICAgdGhpcy5zdHVkZW50U2VydmljZS5nZXRTdHVkZW50KGlkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnN0dWRlbnQgPSBkYXRhLnN0dWRlbnRbMF0uc3R1ZGVudDtcbiAgICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnN0dWRlbnQubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfVxuXG4gIGNyZWF0ZVBvc3QoKXtcbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdpZCc6IHRoaXMuY291cnNlX2lkfSxcbiAgICB9O1xuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Avd2ViYm9hcmQvbmV3LXBvc3RgXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gIH1cblxuXG4gIGdldFBvc3QoKXtcblxuICAgIHRoaXMud2ViYm9hcmRTZXJ2aWNlLmdldEFsbFBvc3QodGhpcy5jb3Vyc2VfaWQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgdGhpcy5wb3N0ID0gZGF0YS5kYXRhLnBvc3Q7XG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gZGF0YS5kYXRhLmNvbW1lbnRzO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCB0aGlzLnBvc3QgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLmNvbW1lbnRzICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cblxuICBpc0VkaXRQb3N0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgZWRpdFBvc3QoaWQ6IGFueSwgdGl0bGU6IGFueSwgZGV0YWlsOiBhbnkpe1xuXG4gICAgbGV0IHBvc3QgPSB7aWQ6IGlkLCB0aXRsZTogdGl0bGUsIGRldGFpbDogZGV0YWlsfTtcbiAgICAvL2NvbnNvbGUubG9nKHBvc3QpO1xuXG4gICAgdGhpcy53ZWJib2FyZFNlcnZpY2UuZWRpdFBvc3QocG9zdClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICB0aGlzLmdldFBvc3QoKTtcbiAgICAgICAgICAgIHRoaXMuaXNFZGl0UG9zdCA9ICF0aGlzLmlzRWRpdFBvc3Q7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbW1lbnRGb3JtKCkge1xuICAgIHRoaXMuY29tbWVudEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdkZXRhaWwnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcbiAgfVxuXG4gIHBvc3RDb21tZW50KCl7XG4gICAgbGV0IG5ld0NvbW1lbnQgPSBuZXcgQ29tbWVudHModGhpcy5jb3Vyc2VfaWQsIHRoaXMubmFtZSwgdGhpcy5jb21tZW50Rm9ybS5kZXRhaWwpO1xuICAgIC8vY29uc29sZS5sb2cobmV3Q29tbWVudCk7XG5cbiAgICB0aGlzLndlYmJvYXJkU2VydmljZS5wb3N0Q29tbWVudChuZXdDb21tZW50KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zdCgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21tZW50Rm9ybSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBlZGl0Q29tbWVudChpZDogYW55LCBkZXRhaWw6IGFueSl7XG5cbiAgICB0aGlzLmVkaXRfY29tbWVudF9pZCA9IGlkO1xuICAgIGxldCBlZGl0Q29tbWVudCA9IG5ldyBDb21tZW50cyhpZCwgdGhpcy5uYW1lLGRldGFpbCk7XG5cbiAgIC8vIGNvbnNvbGUubG9nKGVkaXRDb21tZW50KTtcblxuICAgIHRoaXMud2ViYm9hcmRTZXJ2aWNlLmVkaXRDb21tZW50KGVkaXRDb21tZW50KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zdCgpO1xuICAgICAgICAgICAgdGhpcy5lZGl0X2NvbW1lbnRfaWQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBkZWxldGVQb3N0KGlkOiBhbnkpe1xuXG4gICAgbGV0IHBvc3RJZCA9IHtpZDogaWR9O1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbW1lbnRfaWQpO1xuXG4gICAgdGhpcy53ZWJib2FyZFNlcnZpY2UuZGVsZXRlUG9zdChwb3N0SWQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgY2FuY2VsRWRpdCgpe1xuICAgIHRoaXMuZWRpdF9jb21tZW50X2lkID0gbnVsbDtcbiAgfVxuXG4gIGVkaXRNb2RlQ29tbWVudChpZDogYW55KXtcbiAgICB0aGlzLmVkaXRfY29tbWVudF9pZCA9IGlkO1xuICB9XG5cbiAgZGVsZXRlQ29tbWVudChpZDogYW55KXtcblxuICAgIGxldCBjb21tZW50X2lkID0ge2lkOiBpZH07XG4gICAvLyBjb25zb2xlLmxvZyhjb21tZW50X2lkKTtcblxuICAgIHRoaXMud2ViYm9hcmRTZXJ2aWNlLmRlbGV0ZUNvbW1lbnQoY29tbWVudF9pZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICB0aGlzLmdldFBvc3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmNyZWF0ZUNvbW1lbnRGb3JtKCk7XG4gIH1cblxuXG4gIGhvbWUoKXtcbiAgICBpZih0aGlzLnJvbGUpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVhY2gnXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0dWRlbnQvZGFzaGJvYXJkJ10pO1xuICAgIH1cbiAgfVxuXG4gIGNhbmNlbCgpe1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG5cbiAgaXNSZXBseTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vcmVwbHlDb21tZW50XG5cbiAgcmVwbHlJZDogYW55O1xuXG4gIG9uUmVwbHkoaWQ/OiBhbnkpe1xuICAgIHRoaXMucmVwbHlJZCA9IGlkO1xuICAgIHRoaXMuaXNSZXBseSA9IHRydWU7XG4gIH1cblxuICBvblNob3dSZXBseUNvbW1lbnQoaWQ/OiBhbnkpe1xuXG4gICAgdGhpcy5jb21tZW50cy5mb3JFYWNoKChjb21tZW50OiBhbnkpID0+IHtcbiAgICAgIGlmKGlkID09IGNvbW1lbnQuY29tbWVudC5pZCl7XG4gICAgICAgIGNvbW1lbnQuY29tbWVudC5zaG93UmVwbHlDb21tZW50ID0gIWNvbW1lbnQuY29tbWVudC5zaG93UmVwbHlDb21tZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2FuY2VsUmVwbHkoKXtcbiAgICB0aGlzLmlzUmVwbHkgPSBmYWxzZTtcbiAgfVxuXG4gIHJlcGx5Q29tbWVudChpZD86IGFueSwgZGV0YWlsPzogYW55KXtcbiAgICBsZXQgcmVwbHlDb21tZW50ID0gbmV3IENvbW1lbnRzKGlkLCB0aGlzLm5hbWUsIGRldGFpbCk7XG5cbiAgICB0aGlzLndlYmJvYXJkU2VydmljZS5yZXBseUNvbW1lbnQocmVwbHlDb21tZW50KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zdCgpO1xuICAgICAgICAgICAgdGhpcy5pc1JlcGx5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcblxuICB9XG5cbiAgZWRpdE1vZGVSZXBseUNvbW1lbnQoaWQ6IGFueSl7XG4gICAgdGhpcy5lZGl0X3JlcGx5X2NvbW1lbnRfaWQgPSBpZDtcbiAgfVxuXG4gIGVkaXRSZXBseUNvbW1lbnQoaWQ6IGFueSwgZGV0YWlsOiBhbnkpe1xuXG4gICAgdGhpcy5lZGl0X3JlcGx5X2NvbW1lbnRfaWQgPSBpZDtcbiAgICBsZXQgZWRpdENvbW1lbnQgPSBuZXcgQ29tbWVudHMoaWQsIHRoaXMubmFtZSxkZXRhaWwpO1xuXG5cbiAgICB0aGlzLndlYmJvYXJkU2VydmljZS5lZGl0UmVwbHlDb21tZW50KGVkaXRDb21tZW50KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zdCgpO1xuICAgICAgICAgICAgdGhpcy5lZGl0X3JlcGx5X2NvbW1lbnRfaWQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBkZWxldGVSZXBseUNvbW1lbnQoaWQ6IGFueSl7XG5cbiAgICAvL2NvbnNvbGUubG9nKGlkKTtcblxuICAgIGxldCByZXBseUNvbWVudElkID0ge2lkOiBpZH07XG5cbiAgICB0aGlzLndlYmJvYXJkU2VydmljZS5kZWxldGVSZXBseUNvbW1lbnQocmVwbHlDb21lbnRJZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgdGhpcy5nZXRQb3N0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG5cbn1cbiJdfQ==
