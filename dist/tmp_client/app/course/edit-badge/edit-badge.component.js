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
            console.log(data.badge);
            _this.badges = data.badge;
            _this.badges.map(function (badge) {
                badge.image = 'http://54.169.115.233/students/badges/' + badge.image;
            });
        }, function (error) { return console.log(error); });
    };
    EditBadgeComponent.prototype.addBadge = function () {
        var _this = this;
        var badge = new badge_1.Badge(this.course.id, '', this.badgeForm.value.name, this.image, this.badgeForm.value.xp);
        console.log(badge);
        this.courseService.createBadge(badge)
            .subscribe(function (data) {
            console.log(data.status);
            if (data.status == 'success') {
                _this.ngOnInit();
                _this.resetCreateForm();
            }
        }, function (error) { return console.log(error); });
    };
    EditBadgeComponent.prototype.editBadgeModal = function (badge) {
        this.selectedBadge = badge;
    };
    EditBadgeComponent.prototype.editBadge = function () {
        var _this = this;
        this.courseService.editBadge(this.selectedBadge)
            .subscribe(function (data) {
            console.log(data);
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
        this.selectedBadge.image = imageResult.resized
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
    EditBadgeComponent.prototype.ngOnDestroy = function () {
    };
    EditBadgeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-badge',
            template: "<div class=\"section-header\">   <div class=\"container\" style=\"margin-top: 55px; padding-bottom: 15px;\">     <div class=\"row\">       <div class=\"col-xs-12\">         <a class=\"section-header-link link\" (click)=\"cancel()\" routerLinkActive=\"true\">           <i class=\"section-header-icon fa fa-chevron-left\" aria-hidden=\"true\"></i> \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A</a>         <h3 class=\"section-header-title\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25</h3>       </div>     </div>   </div> </div>   <div class=\"lms-body\" *ngIf=\"badges != null\">      <div class=\"container\">         <div class=\"row box-wrapper\">            <div class=\"row\">             <div class=\"col-xs-12\">               <button style=\"float: right\" data-toggle=\"modal\" data-target=\"#addBadgeModal\" class=\"btn btn-green\">\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D</button>             </div>           </div>            <div class=\"row\">               <div class=\"col-md-3\" *ngFor=\"let badge of badges;let last = last\">                  <div class=\"panel panel-default\">                   <div class=\"panel-body\">                     <img class=\"center img-responsive img-circle \" [src]=\"badge.image\" style=\"margin-bottom: 5px; max-width: 80px\">                     <p>{{badge.name}}</p>                     <small class=\"card-text\">+ {{badge.xp}} XP</small>                   </div>                   <div class=\"panel-footer\">                     <p class=\"card-text link\" data-toggle=\"modal\" data-target=\"#editBadgeModal\" (click)=\"editBadgeModal(badge)\"><ins>\u0E41\u0E01\u0E49\u0E44\u0E02</ins></p>                   </div>                 </div>               </div>           </div>          </div>     </div> </div>   <!--Edit Badge Modal--> <div class=\"modal fade\" id=\"editBadgeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editBadgeModalLabel\" aria-hidden=\"true\">     <div class=\"modal-dialog\" role=\"document\">         <div class=\"modal-content\">             <div class=\"modal-header\">                 <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">                     <span aria-hidden=\"true\">&times;</span>                 </button>                 <h6 class=\"modal-title\" id=\"editBadgeModalLabel\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25</h6>             </div>             <div class=\"modal-body\">                 <form style=\"max-width: 500px\" class=\"center\">                     <div class=\"form-group row\">                         <div class=\"col-sm-12\">                             <img class=\"img-responsive img-circle center\" [src]=\"selectedBadge.image\" [hidden]=\"!selectedBadge.image\" style=\"margin-bottom: 15px; max-width: 80px\">                         </div>                         <div class=\"col-sm-8\">                             <input type=\"file\" image-upload                                    (imageSelected)=\"selectedBadgeImage($event)\"                                    [resizeOptions]=\"resizeOptions\">                         </div>                     </div>                      <div class=\"form-group row\">                         <label for=\"badgeName\" class=\"col-sm-4 col-form-label \">\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D</label>                         <div class=\"col-sm-8\">                             <input type=\"text\" class=\"form-control\" id=\"badgeName\" [(ngModel)]=\"selectedBadge.name\" name=\"nameSelectedBadge\">                         </div>                     </div>                     <div class=\"form-group row\">                         <label for=\"badgeXP\" class=\"col-sm-4 col-form-label\">\u0E04\u0E48\u0E32 XP \u0E17\u0E35\u0E48\u0E43\u0E2B\u0E49</label>                         <div class=\"col-sm-8\">                             <input type=\"number\" class=\"form-control\" id=\"badgeXP\" value=\"10\" [(ngModel)]=\"selectedBadge.xp\" name=\"xpSelectedBadge\">                         </div>                     </div>                 </form>             </div>             <div class=\"modal-footer\">                 <button type=\"button\" class=\"btn btn-danger pull-left\" (click)=\"deleteBadge()\">\u0E25\u0E1A\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E19\u0E35\u0E49\u0E17\u0E34\u0E49\u0E07</button>                  <div class=\"pull-xs-right\">                     <button type=\"button\" id=\"closeEditBadgeModal\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>                     <button type=\"button\" class=\"btn btn-info\" (click)=\"editBadge()\">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01</button>                 </div>             </div>         </div>     </div> </div>  <!--Add Badge Modal--> <div class=\"modal fade\" id=\"addBadgeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addBadgeModalLabel\" aria-hidden=\"true\">     <div class=\"modal-dialog\" role=\"document\">         <div class=\"modal-content\">             <div class=\"modal-header\">                 <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">                     <span aria-hidden=\"true\">&times;</span>                 </button>                 <h6 class=\"modal-title\" id=\"addBadgeModalLabel\">\u0E41\u0E01\u0E49\u0E44\u0E02</h6>             </div>             <div class=\"modal-body\">                 <form style=\"max-width: 500px\" class=\"center\"[formGroup]=\"badgeForm\">                     <div class=\"form-group row\">                         <div class=\"col-sm-12\">                             <!--<img class=\"img-responsive img-circle center\" src=\"http://fakeimg.pl/80/\" hidden=\"{{image}}\" style=\"margin-bottom: 15px; max-width: 80px\" >-->                             <img class=\"img-responsive img-circle center\" [src]=\"image\" [hidden]=\"!image\" style=\"margin-bottom: 15px; max-width: 80px\">                          </div>                         <div class=\"col-sm-8\">                             <input type=\"file\" image-upload                                    (imageSelected)=\"selected($event)\"                                    [resizeOptions]=\"resizeOptions\"                                    formControlName=\"image\">                         </div>                     </div>                      <div class=\"form-group row\">                         <label for=\"badgeName\" class=\"col-sm-4 col-form-label \">\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D</label>                         <div class=\"col-sm-8\">                             <input type=\"text\" class=\"form-control\" id=\"addbadgeName\" formControlName=\"name\">                         </div>                     </div>                     <div class=\"form-group row\">                         <label for=\"badgeXP\" class=\"col-sm-4 col-form-label\">\u0E04\u0E48\u0E32 XP \u0E17\u0E35\u0E48\u0E43\u0E2B\u0E49</label>                         <div class=\"col-sm-8\">                             <input type=\"number\" class=\"form-control\" id=\"addbadgeXP\" formControlName=\"xp\">                         </div>                     </div>                      <div class=\"modal-footer\">                         <div class=\"pull-xs-right\">                             <button type=\"button\" id=\"closeModal\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>                             <button type=\"submit\" class=\"btn btn-info\" (click)=\"addBadge()\">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01</button>                         </div>                     </div>                 </form>             </div>         </div>     </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}.lms-body,body{font-family:proxima-nova,sans-serif;overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.lms-body{margin-top:45px;margin-bottom:45px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}.center{margin:0 auto}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.box-wrapper{background-color:transparent;border:none}.section-header{padding-top:15px;background-color:#fff}.section-header-link,.section-header-title{color:#848484}.section-header-icon{color:#848484!important}.panel{max-height:none}.panel,.panel-body{min-height:inherit}.panel-footer{cursor:pointer;text-align:center} /*# sourceMappingURL=edit-badge.component.css.map */"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, course_service_1.CourseService, forms_1.FormBuilder])
    ], EditBadgeComponent);
    return EditBadgeComponent;
}());
exports.EditBadgeComponent = EditBadgeComponent;
