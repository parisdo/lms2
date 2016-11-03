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
            template: "<div class=\"section-header\">   <div class=\"container\" style=\"margin-top: 55px; padding-bottom: 15px;\">     <div class=\"row\">       <div class=\"col-xs-12\">         <a class=\"section-header-link link\" (click)=\"cancel()\" routerLinkActive=\"true\">           <i class=\"section-header-icon fa fa-chevron-left\" aria-hidden=\"true\"></i> \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A</a>         <h3 class=\"section-header-title\">\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</h3>       </div>     </div>   </div> </div>   <div class=\"lms-body\">   <div class=\"container\">     <div class=\"row box-wrapper\">        <form class=\"center\" [formGroup]=\"postForm\" novalidate autocomplete=\"off\">         <div class=\"form-group row\">           <label for=\"title\" class=\"col-sm-3 col-form-label\">\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07</label>           <div class=\"col-sm-9\">             <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" formControlName=\"title\" [(ngModel)]=\"postForm.title\">           </div>         </div>         <div class=\"form-group row\">           <label for=\"detail\" class=\"col-sm-3 col-form-label\">\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</label>           <div class=\"col-sm-9\">             <textarea class=\"form-control\" rows=\"5\" id=\"detail\" name=\"detail\" formControlName=\"detail\" [(ngModel)]=\"postForm.detail\"></textarea>           </div>         </div>         <hr>         <div class=\"form-group row pull-xs-right\">           <div class=\"col-xs-12\">             <button type=\"button\" class=\"btn btn-orenge\" (click)=\"cancel()\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>             <button type=\"submit\" class=\"btn btn-info\" (click)=\"createPost()\" [disabled]=\"!postForm.valid\">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01</button>           </div>         </div>       </form>     </div> </div> </div>",
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, webboard_service_1.WebboardService, router_1.Router])
    ], NewPostComponent);
    return NewPostComponent;
}());
exports.NewPostComponent = NewPostComponent;
