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
            template: "<div class=\"section-header\">   <div class=\"container\" style=\"margin-top: 55px; padding-bottom: 15px;\">     <div class=\"row\">       <div class=\"col-xs-12\">         <a class=\"section-header-link link\" (click)=\"cancel()\" routerLinkActive=\"true\" style=\"margin-right: 5px\">           <i class=\"section-header-icon fa fa-chevron-left\" aria-hidden=\"true\"></i> \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A         </a>         <a (click)=\"home()\" class=\"section-header-link link\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>       </div>     </div>     <div class=\"row\">       <div class=\"col-md-6\">         <h3 class=\"section-header-title\">Webboard</h3>       </div>       <div class=\"col-md-6\">         <button class=\"btn btn-success pull-right\" (click)=\"createPost()\" *ngIf=\"post == null && role\">\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E2B\u0E21\u0E48</button>       </div>     </div>   </div> </div>   <div class=\"lms-body\">    <div class=\"container\" *ngIf=\"post == null\">     <div class=\"row box-wrapper\">        <p>\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E40\u0E27\u0E25\u0E32\u0E19\u0E35\u0E49</p>     </div>   </div>      <div class=\"container\" *ngIf=\"post != null\">     <div class=\"row box-wrapper\">        <div class=\"panel panel-default\">         <div class=\"panel-heading\" style=\"text-align: left\">           <p><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Nattaya.M</p>         </div>         <div class=\"panel-body\">           <div *ngIf=\"isEditPost\">             <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.title\" name=\"post_title\" style=\"margin-bottom: 15px\">             <textarea rows=\"10\" class=\"form-control\" id=\"post_detail\" name=\"post_detail\" #post_detail style=\"margin-bottom: 15px;\">{{post.detail}}</textarea>             <div class=\"pull-right\">               <button type=\"button\" class=\"btn btn-secondary\" (click)=\"isEditPost = !isEditPost\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>               <button class=\"btn btn-green\" (click)=\"editPost(post.id, post.title, post_detail.value)\">\u0E41\u0E01\u0E49\u0E44\u0E02</button>             </div>           </div>           <div *ngIf=\"!isEditPost\">             <h3 class=\"panel-title\" style=\"margin-bottom: 15px;\">{{post.title}}</h3>             <p>{{post.detail}}</p>           </div>         </div>         <div class=\"panel-footer\" style=\"text-align: right\">           <small style=\"margin-right: 15px\">{{post.updated_at}}</small>           <div class=\"dropdown pull-right\" *ngIf=\"role\">             <span dropdown-toggle=\"dropdown\"                   id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">               <i class=\"fa fa-cog link\" aria-hidden=\"true\" ></i>             </span>             <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" style=\"right: 0; left: inherit\" *ngIf=\"role\">               <li><a class=\"link\" (click)=\"isEditPost = !isEditPost\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</a></li>               <li><a class=\"link\" (click)=\"deletePost(post.id)\">\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</a></li>             </ul>           </div>         </div>       </div>       <div style=\"margin-bottom: 15px;\">         <small class=\"text-muted\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> {{comments.length}} \u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19</small>       </div>       <div class=\"row\">         <div class=\"col-xs-12\" *ngFor=\"let comment of comments\">           <div class=\"panel panel-default panel-comment\">              <div class=\"panel-heading\" >                <div class=\"row\">                 <div class=\"col-xs-6\">                   <p style=\"text-align: left\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{comment.comment.name}}</p>                 </div>                 <div class=\"col-xs-6\">                   <div style=\"text-align: right\">                     <small style=\"margin-right: 15px\">{{comment.comment.updated_at}}</small>                     <div class=\"dropdown pull-right\" *ngIf=\"role || student_id == comment.comment.user_id\">                   <span dropdown-toggle=\"dropdown\" [id]=\"comment\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">                     <i class=\"fa fa-cog link\" aria-hidden=\"true\" ></i></span>                       <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" style=\"right: 0; left: inherit\">                         <li><a class=\"link\" (click)=\"editModeComment(comment.comment.id)\" *ngIf=\"teacher_id == comment.comment.user_id || student_id == comment.comment.user_id\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</a></li>                         <li><a class=\"link\" (click)=\"deleteComment(comment.comment.id)\">\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</a></li>                       </ul>                     </div>                   </div>                 </div>               </div>             </div>              <div class=\"panel-body\">               <p *ngIf=\"edit_comment_id != comment.comment.id\">{{comment.comment.detail}}</p>               <div *ngIf=\"edit_comment_id == comment.comment.id\">                 <textarea rows=\"3\" class=\"form-control\" id=\"comment_detail\" name=\"comment_detail\" #comment_detail style=\"margin-bottom: 15px;\">{{comment.comment.detail}}</textarea>                 <div class=\"pull-right\">                   <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelEdit()\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>                   <button class=\"btn btn-green\" (click)=\"editComment(comment.comment.id, comment_detail.value)\">\u0E41\u0E01\u0E49\u0E44\u0E02</button>                 </div>               </div>             </div>              <div class=\"panel-footer\">               <a class=\"pull-right\" (click)=\"onReply(comment.comment.id)\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i> \u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A</a>               <a (click)=\"onShowReplyComment(comment.comment.id)\" *ngIf=\"comment.comment.showReplyComment\">\u0E0B\u0E48\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2B\u0E47\u0E19\u0E22\u0E48\u0E2D\u0E22</a>               <a (click)=\"onShowReplyComment(comment.comment.id)\" *ngIf=\"!comment.comment.showReplyComment\">\u0E14\u0E39 {{comment.reply_comments.length}} \u0E04\u0E27\u0E32\u0E21\u0E40\u0E2B\u0E47\u0E19\u0E22\u0E48\u0E2D\u0E22</a>              </div>              <div *ngIf=\"comment.comment.showReplyComment\">               <div class=\"row replyComment\">                 <div class=\"col-xs-12\" *ngFor=\"let replyComment of comment.reply_comments\">                   <div class=\"panel-replyComment panel panel-default\">                     <div class=\"panel-heading\" style=\"text-align: left\">                        <div class=\"row\">                         <div class=\"col-xs-6\">                           <p><i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{replyComment.name}}</p>                         </div>                         <div class=\"col-xs-6\">                           <div style=\"text-align: right\">                             <small style=\"margin-right: 15px\">{{replyComment.updated_at}}</small>                             <div class=\"dropdown pull-right\" *ngIf=\"role || replyComment.user_id == student_id\">                   <span dropdown-toggle=\"dropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">                     <i class=\"fa fa-cog link\" aria-hidden=\"true\" ></i></span>                               <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" style=\"right: 0; left: inherit\">                                 <li><a class=\"link\" (click)=\"editModeReplyComment(replyComment.id)\" *ngIf=\"teacher_id == replyComment.user_id || replyComment.user_id == student_id\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</a></li>                                 <li><a class=\"link\" (click)=\"deleteReplyComment(replyComment.id)\">\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</a></li>                               </ul>                             </div>                           </div>                         </div>                       </div>                      </div>                     <div class=\"panel-body\">                       <p *ngIf=\"edit_reply_comment_id != replyComment.id\">{{replyComment.detail}}</p>                       <div *ngIf=\"edit_reply_comment_id == replyComment.id\">                         <textarea rows=\"3\" class=\"form-control\" id=\"reply_comment_detail\" name=\"reply_comment_detail\" #reply_comment_detail style=\"margin-bottom: 15px;\">{{replyComment.detail}}</textarea>                         <div class=\"pull-right\">                           <button type=\"button\" class=\"btn btn-secondary\" (click)=\"edit_reply_comment_id = null;\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>                           <button class=\"btn btn-green\" (click)=\"editReplyComment(replyComment.id, reply_comment_detail.value)\">\u0E41\u0E01\u0E49\u0E44\u0E02</button>                         </div>                       </div>                     </div>                   </div>                 </div>               </div>             </div>              <div *ngIf=\"isReply && replyId == comment.comment.id\" class=\"textboxReplyComment\">               <textarea rows=\"3\" class=\"form-control\" #textReplyComment style=\"margin-bottom: 15px;\"></textarea>               <div style=\"text-align: right\">                 <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelReply()\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>                 <button class=\"btn btn-green\" (click)=\"replyComment(comment.comment.id, textReplyComment.value)\">\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</button>               </div>             </div>            </div>         </div>       </div>       <form class=\"center\" [formGroup]=\"commentForm\" novalidate autocomplete=\"off\">         <hr>         <h6 class=\"text-muted\" style=\"margin-bottom: 15px\"><i class=\"zmdi zmdi-comment-alt\"></i> \u0E41\u0E2A\u0E14\u0E07\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19           <hr>         </h6>          <div class=\"form-group row\">           <div class=\"col-sm-12\">         <textarea rows=\"5\" class=\"form-control\" id=\"detail\" name=\"detail\"                   formControlName=\"detail\" [(ngModel)]=\"commentForm.detail\">         </textarea>           </div>         </div>          <hr>         <div class=\"form-group row pull-right\">           <div class=\"col-sm-12\">             <button type=\"button\" class=\"btn btn-secondary\" (click)=\"reset()\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>             <button type=\"submit\" class=\"btn btn-green\" (click)=\"postComment()\">\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</button>           </div>         </div>       </form>      </div>   </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{font-size:18px;color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}body{background-color:#f0f2f1}.lms-body,body{font-family:proxima-nova,sans-serif;overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.lms-body{padding-top:45px;padding-bottom:90px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}.center{margin:0 auto}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.rowTable,.tdTable,.thTable{padding-top:5px;padding-bottom:5px;margin-bottom:5px}.thTable{background-color:#f0f2f1}.tdTable{border-bottom:1px solid #f0f2f1}:host/deep/.ui-growl-item-container.ui-state-highlight.ui-growl-message-info{background-color:#87c97f;border-color:#87c97f}:host /deep/ .ui-resizable-se{display:none}:host /deep/ .ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-shadow{position:fixed;padding:0;overflow:hidden;width:500px}.lms-body{margin-top:15px}.box-wrapper{background-color:transparent;border:none}.section-header{padding-top:15px;margin-top:-45px;background-color:#83c7d4}.section-header-link,.section-header-title{color:#fff}.section-header-icon{color:#fff!important}.fa-home{font-size:14px}.panel.panel-default.panel-comment{background-color:#e5e6e9;padding:15px}.goBack{float:left;margin-right:15px;margin-top:-5px}.dropdown{float:right}.dropdown-setting{margin-top:-5px}.level-tag{position:absolute;top:-10px;right:-10px;border-radius:1em;width:40px;border:4px solid #fff;color:#fff;background-color:#eec820}.ui-widget,:host/deep/.ui-growl{z-index:2000}.fa-cog{cursor:pointer;color:#848484}.information{cursor:pointer;text-decoration:underline}.panel{max-height:none;min-height:inherit}.panel-body{cursor:pointer;min-height:inherit}.replyComment{margin-top:15px}.panel-replyComment{background-color:#f5f5f5}.textboxReplyComment{margin-top:15px}a{color:#848484} /*# sourceMappingURL=post.component.css.map */"]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.ActivatedRoute, router_1.Router, webboard_service_1.WebboardService, student_service_1.StudentService, teacher_service_1.TeacherService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
