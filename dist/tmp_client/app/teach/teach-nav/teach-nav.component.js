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
var auth_service_1 = require("../../auth/auth.service");
var router_1 = require("@angular/router");
var teacher_service_1 = require("../../services/teacher.service");
var TeachNavComponent = (function () {
    function TeachNavComponent(authService, router, teacherService) {
        this.authService = authService;
        this.router = router;
        this.teacherService = teacherService;
    }
    TeachNavComponent.prototype.ngOnInit = function () {
        if (this.authService.checkRole()) {
            this.getTeacher();
        }
    };
    TeachNavComponent.prototype.getTeacher = function () {
        var _this = this;
        this.teacherService.getTeacher()
            .subscribe(function (data) {
            _this.teacher = data;
            _this.teacher.image = data.image;
        }, function (error) {
            console.log(error);
            _this.authService.signout();
        });
    };
    TeachNavComponent.prototype.gotoHome = function () {
        this.router.navigate(['/teach']);
    };
    TeachNavComponent.prototype.signout = function () {
        var _this = this;
        this.authService.signout().subscribe(function () { return _this.router.navigate(['/auth/signin']); });
    };
    TeachNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-teach-nav',
            template: "<nav class=\"navbar navbar-default navbar-fixed-top\" *ngIf=\"authService.isLoggedIn()\">   <div class=\"container-fluid\">     <div class=\"container\">       <!-- Brand and toggle get grouped for better mobile display -->       <div class=\"navbar-header\">         <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"                 data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">           <span class=\"sr-only\">Toggle navigation</span>           <span class=\"icon-bar\"></span>           <span class=\"icon-bar\"></span>           <span class=\"icon-bar\"></span>         </button>         <a class=\"navbar-brand\" routerLink=\"/\">           <img src=\"/assets/logo/IPST.png\" class=\"img-responsive\">           <img src=\"/assets/logo/ilc-logo_b.png\" class=\"img-responsive\">         </a>      </div>        <!-- Collect the nav links, forms, and other content for toggling -->       <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\" *ngIf=\"teacher != null\">         <ul class=\"nav navbar-nav navbar-right\">           <li class=\"dropdown\">             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">               {{teacher.name}} <span class=\"caret\"></span></a>             <ul class=\"dropdown-menu\">               <li><a routerLink=\"/teach/edit-teacher\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</a></li>               <li><a class=\"btn-logout\" (click)=\"signout()\">\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A</a></li>             </ul>           </li>         </ul>       </div><!-- /.navbar-collapse -->     </div>   </div><!-- /.container-fluid --> </nav>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{font-size:18px;color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}body{background-color:#f0f2f1}.lms-body,body{font-family:proxima-nova,sans-serif;overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.lms-body{margin-top:45px;padding-top:45px;padding-bottom:90px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}.center{margin:0 auto}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.rowTable,.tdTable,.thTable{padding-top:5px;padding-bottom:5px;margin-bottom:5px}.thTable{background-color:#f0f2f1}.tdTable{border-bottom:1px solid #f0f2f1}:host/deep/.ui-growl-item-container.ui-state-highlight.ui-growl-message-info{background-color:#87c97f;border-color:#87c97f}.container{margin-top:0!important}.navbar{position:fixed;opacity:.99;z-index:999;background-color:#83c7d4}.navbar,.navbar-nav>li>a{color:#fff}.navbar-nav{float:none}.btn-toggle{color:#fff}.btn-logout{cursor:pointer}.navbar-brand>img{display:block;max-height:25px;float:left;margin-right:15px}.navbar-default .navbar-nav>.open>a{background-color:transparent} /*# sourceMappingURL=teach-nav.component.css.map */"]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, teacher_service_1.TeacherService])
    ], TeachNavComponent);
    return TeachNavComponent;
}());
exports.TeachNavComponent = TeachNavComponent;
