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
            template: "<div class=\"section-header\">   <div class=\"container\" style=\"margin-top: 55px; padding-bottom: 15px;\">     <div class=\"row\">       <div class=\"col-xs-12\">         <a class=\"section-header-link link\" (click)=\"cancel()\" routerLinkActive=\"true\">           <i class=\"section-header-icon fa fa-chevron-left\" aria-hidden=\"true\"></i> \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A</a>         <h3 class=\"section-header-title\">\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E2A\u0E19\u0E17\u0E19\u0E32</h3>       </div>     </div>   </div> </div>   <div class=\"lms-body\" *ngIf=\"post != null\">   <div class=\"container\">     <div class=\"row box-wrapper\">        <div class=\"panel panel-default\">         <div class=\"panel-heading\" style=\"text-align: left\">           <p><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Nattaya.M</p>         </div>         <div class=\"panel-body\">           <h3 class=\"panel-title\" style=\"margin-bottom: 15px;\">{{post.title}}</h3>           <p>{{post.detail}}</p>         </div>         <div class=\"panel-footer\" style=\"text-align: right\">           <small style=\"margin-right: 15px\">{{post.updated_at}}</small>           <div class=\"dropdown pull-right\" *ngIf=\"role\">             <span dropdown-toggle=\"dropdown\"                   id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">               <i class=\"fa fa-cog link\" aria-hidden=\"true\" ></i>             </span>             <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" style=\"right: 0; left: inherit\">               <li><a class=\"link\" (click)=\"editPost()\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</a></li>               <li><a class=\"link\" (click)=\"deletePost()\">\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</a></li>             </ul>           </div>         </div>       </div>        <div style=\"margin-bottom: 15px;\">         <small class=\"text-muted\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> {{comments.length}} \u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19</small>       </div>         <div class=\"row\">         <div class=\"col-xs-12\" *ngFor=\"let comment of comments\">           <div class=\"panel panel-default panel-comment\">              <div class=\"panel-heading\" style=\"text-align: left\">               <p><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Tittaya Mairittha</p>             </div>             <div class=\"panel-body\">               <p *ngIf=\"edit_comment_id != comment.id\">{{comment.detail}}</p>               <div *ngIf=\"edit_comment_id == comment.id\">                 <textarea rows=\"3\"class=\"form-control\" id=\"comment_detail\" name=\"comment_detail\" #comment_detail                 style=\"margin-bottom: 15px;\">                 {{comment.detail}}                 </textarea>                  <div class=\"pull-right\">                   <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancleEdit()\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>                   <button class=\"btn btn-green\" (click)=\"editPost(comment.id, comment_detail.value)\">\u0E41\u0E01\u0E49\u0E44\u0E02</button>                 </div>                </div>             </div>             <div class=\"panel-footer\" style=\"text-align: right\">               <small style=\"margin-right: 15px\">{{comment.updated_at}}</small>               <div class=\"dropdown pull-right\" *ngIf=\"role\">                  <span dropdown-toggle=\"dropdown\" [id]=\"comment\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">               <i class=\"fa fa-cog link\" aria-hidden=\"true\" ></i>             </span>                 <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" style=\"right: 0; left: inherit\">                   <li><a class=\"link\" (click)=\"editModeComment(comment.id)\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</a></li>                   <li><a class=\"link\" (click)=\"deletePost(comment.id)\">\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</a></li>                 </ul>               </div>             </div>           </div>         </div>       </div>        <form class=\"center\" [formGroup]=\"commentForm\" novalidate autocomplete=\"off\">         <hr>         <h6 class=\"text-muted\" style=\"margin-bottom: 15px\"><i class=\"zmdi zmdi-comment-alt\"></i> \u0E41\u0E2A\u0E14\u0E07\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19           <hr>         </h6>          <div class=\"form-group row\">           <div class=\"col-sm-12\">         <textarea rows=\"5\" class=\"form-control\" id=\"detail\" name=\"detail\"                   formControlName=\"detail\" [(ngModel)]=\"commentForm.detail\">         </textarea>           </div>         </div>          <hr>         <div class=\"form-group row pull-right\">           <div class=\"col-sm-12\">             <button type=\"button\" class=\"btn btn-secondary\" (click)=\"reset()\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>             <button type=\"submit\" class=\"btn btn-green\" (click)=\"postComment()\">\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</button>           </div>         </div>       </form>      </div>   </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}.lms-body,body{font-family:proxima-nova,sans-serif;overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.lms-body{margin-top:45px;margin-bottom:45px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}.center{margin:0 auto}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.lms-body{margin-top:15px}.box-wrapper{background-color:transparent;border:none}.section-header{padding-top:15px;margin-top:-45px;background-color:#83c7d4}.section-header-link,.section-header-title{color:#fff}.section-header-icon{color:#fff!important}.panel.panel-default.panel-comment{background-color:#e5e6e9}.goBack{float:left;margin-right:15px;margin-top:-5px}.dropdown{float:right}.dropdown-setting{margin-top:-5px}.level-tag{position:absolute;top:-10px;right:-10px;border-radius:1em;width:40px;border:4px solid #fff;color:#fff;background-color:#eec820}.ui-widget,:host/deep/.ui-growl{z-index:2000}.fa-cog{cursor:pointer;color:#848484}.information{cursor:pointer;text-decoration:underline}.panel{max-height:none;min-height:inherit}.panel-body{cursor:pointer;min-height:inherit} /*# sourceMappingURL=post.component.css.map */"]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.ActivatedRoute, router_1.Router, webboard_service_1.WebboardService, student_service_1.StudentService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
