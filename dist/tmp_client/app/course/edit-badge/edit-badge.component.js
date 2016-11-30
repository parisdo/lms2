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
var config_1 = require("../../services/config");
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
        this.display = false;
        this.message = {
            title: '',
            content: "",
            button: ''
        };
        this.isNumber = true;
        this.isEdited = false;
        this.editBadgeImage = "";
    }
    EditBadgeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createBadgeForm();
        this.badgePath = (config_1.publicUrl + "students/badges/").length;
        if (localStorage.getItem('course_id') != undefined) {
            this.courseService.getCourse(localStorage.getItem('course_id'))
                .subscribe(function (data) {
                _this.course = data.course;
                _this.getBadges(_this.course.id);
            }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['/teach']);
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
        this.image = '';
        this.isNumber = true;
    };
    EditBadgeComponent.prototype.getBadges = function (id) {
        var _this = this;
        this.courseService.getAllBadge(id)
            .subscribe(function (data) {
            _this.badges = data.badge;
            _this.badges.map(function (badge) {
                badge.image = config_1.publicUrl + "students/badges/" + badge.image;
            });
        }, function (error) { return console.log(error); });
    };
    EditBadgeComponent.prototype.addBadge = function () {
        var _this = this;
        if (this.image == '') {
            this.image = "data:image/png;base64,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\n          ";
        }
        else {
            this.image = this.image;
        }
        var badge = new badge_1.Badge(this.course.id, '', this.badgeForm.value.name, this.image, this.badgeForm.value.xp);
        if (this.checkBadge(badge)) {
            this.isNumber = true;
            this.courseService.createBadge(badge)
                .subscribe(function (data) {
                if (data.status == 'success') {
                    _this.resetCreateForm();
                    _this.ngOnInit();
                    _this.image = '';
                }
            }, function (error) { return console.log(error); });
        }
        else {
            this.isNumber = false;
        }
    };
    EditBadgeComponent.prototype.checkBadge = function (badge) {
        var isBadge = false;
        if (badge.xp > 0) {
            isBadge = true;
        }
        return isBadge;
    };
    EditBadgeComponent.prototype.editBadgeModal = function (badge) {
        this.selectedBadge = badge;
        this.editBadgeImage = badge.image;
    };
    EditBadgeComponent.prototype.editBadge = function () {
        var _this = this;
        if (this.isEdited) {
            this.selectedBadge.image = this.editBadgeImage;
        }
        else {
            this.selectedBadge.image = this.selectedBadge.image.substring(this.badgePath);
        }
        this.isEdited = false;
        this.courseService.editBadge(this.selectedBadge)
            .subscribe(function (data) {
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
        this.isEdited = true;
        this.editBadgeImage = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    EditBadgeComponent.prototype.deletePopup = function () {
        this.resetEditForm();
        this.display = true;
        this.message = {
            title: 'ลบเหรียญ',
            content: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
            button: 'ลบ'
        };
    };
    EditBadgeComponent.prototype.deleteBadge = function () {
        var _this = this;
        this.selectedBadge.badge_id = this.selectedBadge.id;
        this.courseService.deleteBadge(this.selectedBadge.badge_id)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.ngOnInit();
                _this.resetEditForm();
                _this.display = false;
            }
        }, function (error) { return console.log(error); });
    };
    EditBadgeComponent.prototype.resetEditForm = function () {
        $('#closeEditBadgeModal').click();
    };
    EditBadgeComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditBadgeComponent.prototype.ngOnDestroy = function () { };
    EditBadgeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-badge',
            template: "<p-dialog header=\"{{message.title}}\" [(visible)]=\"display\" modal=\"modal\"           showEffect=\"fade\" responsive=\"responsive\" resizable=\"!resizable\">   {{message.content}} <br>   <footer>     <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">       <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteBadge()\">{{message.button}}</button>       <button type=\"button\" class=\"btn btn-secondary\" (click)=\"display = false\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>     </div>   </footer> </p-dialog>  <div class=\"section-header\">   <div class=\"container\" style=\"margin-top: 55px;\">     <div class=\"row\">       <div class=\"col-xs-12\">         <a class=\"section-header-link link\" (click)=\"cancel()\" routerLinkActive=\"true\">           <i class=\"section-header-icon fa fa-chevron-left\" aria-hidden=\"true\"></i> \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A</a>         <h3 class=\"section-header-title\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25</h3>       </div>     </div>   </div> </div>   <div class=\"lms-body\" *ngIf=\"badges != null\">      <div class=\"container\">         <div class=\"row box-wrapper\">            <div class=\"row\" style=\"margin-bottom: 15px\">             <div class=\"col-xs-12\">               <button style=\"float: right\" data-toggle=\"modal\" data-target=\"#addBadgeModal\" class=\"btn btn-green\"> \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D</button>             </div>           </div>            <div class=\"row\">               <div class=\"col-md-3\" *ngFor=\"let badge of badges;let last = last\">                  <div class=\"panel panel-default\">                   <div class=\"panel-body\">                     <img class=\"center img-responsive img-circle \" [src]=\"badge.image\" style=\"margin-bottom: 5px; max-width: 80px\">                     <p>{{badge.name}}</p>                     <small class=\"card-text\">+ {{badge.xp}} XP</small>                   </div>                   <div class=\"panel-footer\">                     <p class=\"card-text link\" data-toggle=\"modal\" data-target=\"#editBadgeModal\" (click)=\"editBadgeModal(badge)\"><ins>\u0E41\u0E01\u0E49\u0E44\u0E02</ins></p>                   </div>                 </div>               </div>           </div>          </div>     </div> </div>   <!--Edit Badge Modal--> <div class=\"modal fade\" id=\"editBadgeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editBadgeModalLabel\" aria-hidden=\"true\" >     <div class=\"modal-dialog\" role=\"document\">         <div class=\"modal-content\">             <div class=\"modal-header\">                 <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">                     <span aria-hidden=\"true\">&times;</span>                 </button>                 <h6 class=\"modal-title\" id=\"editBadgeModalLabel\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25</h6>             </div>             <div class=\"modal-body\">                 <form style=\"max-width: 500px\" class=\"center\">                     <div class=\"form-group row\">                         <div class=\"col-sm-12\">                             <img class=\"img-responsive img-circle center\" [src]=\"editBadgeImage\" [hidden]=\"!editBadgeImage\" style=\"margin-bottom: 15px; max-width: 80px\">                         </div>                         <div class=\"col-sm-8\">                             <input type=\"file\" image-upload                                    (imageSelected)=\"selectedBadgeImage($event)\"                                    [resizeOptions]=\"resizeOptions\">                         </div>                     </div>                      <div class=\"form-group row\">                         <label for=\"badgeName\" class=\"col-sm-4 col-form-label \">\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D *</label>                         <div class=\"col-sm-8\">                             <input type=\"text\" class=\"form-control\" id=\"badgeName\" [(ngModel)]=\"selectedBadge.name\" name=\"nameSelectedBadge\">                         </div>                     </div>                     <div class=\"form-group row\">                         <label for=\"badgeXP\" class=\"col-sm-4 col-form-label\">\u0E04\u0E48\u0E32 XP \u0E17\u0E35\u0E48\u0E43\u0E2B\u0E49 *</label>                         <div class=\"col-sm-8\">                             <input type=\"number\" class=\"form-control\" id=\"badgeXP\" value=\"10\" [(ngModel)]=\"selectedBadge.xp\" name=\"xpSelectedBadge\">                         </div>                     </div>                 </form>             </div>             <div class=\"modal-footer\">                 <button type=\"button\" class=\"btn btn-danger pull-left\" (click)=\"deletePopup()\">\u0E25\u0E1A\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E19\u0E35\u0E49\u0E17\u0E34\u0E49\u0E07</button>                  <div class=\"pull-xs-right\">                     <button type=\"button\" id=\"closeEditBadgeModal\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>                     <button type=\"button\" class=\"btn btn-info\" (click)=\"editBadge()\">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01</button>                 </div>             </div>         </div>     </div> </div>  <!--Add Badge Modal--> <div class=\"modal fade\" id=\"addBadgeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addBadgeModalLabel\" aria-hidden=\"true\">     <div class=\"modal-dialog\" role=\"document\">         <div class=\"modal-content\">             <div class=\"modal-header\">                 <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">                     <span aria-hidden=\"true\">&times;</span>                 </button>                 <h6 class=\"modal-title\" id=\"addBadgeModalLabel\">\u0E41\u0E01\u0E49\u0E44\u0E02</h6>             </div>             <div class=\"modal-body\">                 <form style=\"max-width: 500px\" class=\"center\" [formGroup]=\"badgeForm\">                     <div class=\"form-group row\">                         <div class=\"col-sm-12\">                             <!--<img class=\"img-responsive img-circle center\" src=\"http://fakeimg.pl/80/\" hidden=\"{{image}}\" style=\"margin-bottom: 15px; max-width: 80px\" >-->                             <img class=\"img-responsive img-circle center\" [src]=\"image\" [hidden]=\"!image\" style=\"margin-bottom: 15px; max-width: 80px\">                          </div>                         <div class=\"col-sm-8\">                             <input type=\"file\" image-upload                                    (imageSelected)=\"selected($event)\"                                    [resizeOptions]=\"resizeOptions\"                                    formControlName=\"image\">                         </div>                     </div>                      <div class=\"form-group row\">                         <label for=\"badgeName\" class=\"col-sm-4 col-form-label \">\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D *</label>                         <div class=\"col-sm-8\">                             <input type=\"text\" class=\"form-control\" id=\"addbadgeName\" formControlName=\"name\" #add_name>                         </div>                     </div>                     <div class=\"form-group row\">                         <label for=\"badgeXP\"  class=\"col-sm-4 col-form-label\">\u0E04\u0E48\u0E32 XP \u0E17\u0E35\u0E48\u0E43\u0E2B\u0E49 *</label>                         <div class=\"col-sm-8\">                             <input type=\"number\" class=\"form-control\" id=\"addbadgeXP\" formControlName=\"xp\" #add_xp>                            <div style=\"margin-top: 5px; margin-bottom: 5px;\">                             <small *ngIf=\"!isNumber\">\u0E01\u0E23\u0E38\u0E13\u0E32\u0E43\u0E2A\u0E48\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 0 \u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B</small>                           </div>                          </div>                     </div>                      <div class=\"modal-footer\">                         <div class=\"pull-xs-right\">                             <button type=\"button\" id=\"closeModal\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"resetCreateForm()\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>                             <button type=\"submit\" class=\"btn btn-info\" (click)=\"addBadge()\" [disabled]=\"add_name.value == '' || add_xp.value == ''\">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01</button>                         </div>                     </div>                 </form>             </div>         </div>     </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{font-size:18px;color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}body{background-color:#f0f2f1}.lms-body,body{overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.btn,.lms-body,.modal,.modal-body,.modal-header,.nav,.section-header-link,.section-header-title,a,body,h1,h2,h3,h4,h5,input,label,p,small{font-family:Kanit,sans-serif!important;font-weight:400!important}.lms-body{padding-top:45px;padding-bottom:90px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}.center{margin:0 auto}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.rowTable,.tdTable,.thTable{padding-top:5px;padding-bottom:5px;margin-bottom:5px}.thTable{background-color:#f0f2f1}.tdTable{border-bottom:1px solid #f0f2f1}:host/deep/.ui-growl-item-container.ui-state-highlight.ui-growl-message-success{background-color:#87c97f;border-color:#87c97f}:host /deep/ .ui-resizable-se{display:none}:host /deep/ .ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-shadow{position:fixed;padding:0;overflow:hidden;width:500px}.box-wrapper{background-color:transparent;border:none}.section-header{padding-top:45px;background-color:#fff}.section-header-link,.section-header-title{color:#848484}.section-header-icon{color:#848484!important}.panel{max-height:none}.panel,.panel-body{min-height:inherit}.panel-footer{cursor:pointer;text-align:center} /*# sourceMappingURL=edit-badge.component.css.map */"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, course_service_1.CourseService, forms_1.FormBuilder])
    ], EditBadgeComponent);
    return EditBadgeComponent;
}());
exports.EditBadgeComponent = EditBadgeComponent;
