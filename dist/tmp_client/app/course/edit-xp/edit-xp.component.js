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
var course_service_1 = require("../../services/course.service");
var forms_1 = require("@angular/forms");
var level_1 = require("../../models/level");
var message_service_1 = require('../../services/message-service');
var edit_xp_1 = require("../../models/edit_xp");
var EditXPComponent = (function () {
    function EditXPComponent(formBuilder, courseService) {
        this.formBuilder = formBuilder;
        this.courseService = courseService;
        this.levels = [];
        this.current_level = 0;
        this.current_levelEnd = 0;
        this.msgs = [];
    }
    EditXPComponent.prototype.ngOnInit = function () {
        this.course = this.courseService.course;
        this.course.id = this.courseService.course.id;
        this.levels = this.courseService.levels;
        this.current_level = this.courseService.levels[this.courseService.levels.length - 1].level_id;
        this.current_levelEnd = this.courseService.levels[this.courseService.levels.length - 1].ceiling_xp;
        this.createXpForm();
        this.createLevelsForm();
    };
    EditXPComponent.prototype.createXpForm = function () {
        this.xpForm = this.formBuilder.group({
            'start_xp': [this.course.start_xp, [forms_1.Validators.required]],
            'leader_board': [this.course.leader_board, [forms_1.Validators.required]]
        });
    };
    EditXPComponent.prototype.createLevelsForm = function () {
        this.levelsForm = this.formBuilder.group({
            'floor_xp': ['', [forms_1.Validators.required]],
            'ceiling_xp': ['', [forms_1.Validators.required]]
        });
    };
    EditXPComponent.prototype.addLevel = function (level) {
        if (level.ceiling_xp > level.floor_xp) {
            if (this.current_level == 0) {
                this.newLevel(level);
            }
            else {
                if (level.floor_xp > this.current_levelEnd) {
                    level.floor_xp = (+this.current_levelEnd + 1);
                    this.newLevel(level);
                }
            }
        }
    };
    EditXPComponent.prototype.newLevel = function (level) {
        var newLevel = new level_1.Level(++this.current_level, level.floor_xp, level.ceiling_xp);
        this.levels.push(newLevel);
        this.current_levelEnd = level.ceiling_xp;
    };
    EditXPComponent.prototype.deleteLevel = function (level) {
        this.current_level -= 1;
        this.current_levelEnd = level.floor_xp - 1;
        _.remove(this.levels, level);
    };
    EditXPComponent.prototype.submit = function () {
        var _this = this;
        if (this.levels.length == 0) {
            var level = new level_1.Level('1', '1', 10);
            this.levels.push(level);
        }
        var students_level;
        this.levels.forEach(function (level) {
            if (_.inRange(_this.xpForm.value.start_xp, level.floor_xp, level.ceiling_xp)) {
                students_level = level;
            }
        });
        var editXp = new edit_xp_1.EditXpCourse(this.course.id, this.xpForm.value.start_xp, this.xpForm.value.leader_board, this.levels, students_level);
        console.log(editXp);
        this.courseService.settingCourse(editXp)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.showMessage(message_service_1.msg.getUpdateStudentsScoreMessage(200));
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateStudentsScoreMessage(500));
            }
        }, function (error) { return console.log(error); });
    };
    EditXPComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    EditXPComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditXPComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-xp',
            template: "<p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>  <div class=\"section-header\">   <div class=\"container\" style=\"margin-top: 55px; padding-bottom: 15px;\">     <div class=\"row\">       <div class=\"col-xs-12\">         <a class=\"section-header-link link\" (click)=\"cancel()\" routerLinkActive=\"true\">           <i class=\"section-header-icon fa fa-chevron-left\" aria-hidden=\"true\"></i> \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A</a>         <h3 class=\"section-header-title\">\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E41\u0E15\u0E49\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E0A\u0E31\u0E49\u0E19</h3>       </div>     </div>   </div> </div>  <div class=\"lms-body\" *ngIf=\"course != null\">   <div class=\"container\">          <div class=\"row box-wrapper\">             <div class=\"center\">                  <div style=\"margin-bottom: 45px;\">                     <h5>\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19</h5>                     <form [formGroup]=\"xpForm\">                         <div class=\"form-group row\">                             <label for=\"start_xp\" class=\"col-xs-4 col-form-label\">\u0E41\u0E15\u0E49\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E04\u0E19</label>                             <div class=\"col-xs-6\">                                 <input class=\"form-control\" type=\"number\" id=\"start_xp\" formControlName=\"start_xp\" name=\"start_xp\">                             </div>                             <label class=\"col-xs-2 col-form-label\">XP</label>                         </div>                         <div class=\"form-group row\">                             <label for=\"leader_board\" class=\"col-xs-4 col-form-label\">\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E09\u0E1E\u0E32\u0E30</label>                             <div class=\"col-xs-6\">                                 <input class=\"form-control\" id=\"leader_board\" type=\"number\"  formControlName=\"leader_board\" name=\"leader_board\">                             </div>                             <label class=\"col-xs-2 col-form-label\">\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E41\u0E23\u0E01\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19</label>                         </div>                     </form>                 </div>                  <hr>                 <h5>\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E02\u0E31\u0E49\u0E19</h5>                 <table class=\"table table-hover\" style=\"margin-bottom: 15px\">                     <thead>                     <tr>                         <th>Level</th>                         <th>\u0E04\u0E48\u0E32 XP \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19</th>                         <th>\u0E04\u0E48\u0E32 XP \u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14</th>                     </tr>                     </thead>                     <tbody *ngIf=\"levels != null\">                     <tr *ngFor=\"let level of levels; let last = last\">                         <th scope=\"row\">{{level.level_id}}</th>                         <td><div class=\"\">{{level.floor_xp}}</div></td>                         <td><div class=\"\">{{level.ceiling_xp}}</div></td>                         <td>                             <button *ngIf=\"last\" class=\"btn btn-danger\" type=\"button\" (click)=\"deleteLevel(level)\">\u0E25\u0E1A</button>                         </td>                     </tr>                     </tbody>                 </table>                  <div class=\"row\">                     <form class=\"form-inline\" [formGroup]=\"levelsForm\">                          <label style=\"margin-right: 15px; font-weight: 900;\">Level</label>                           <div class=\"form-group\">                             <label for=\"floor_xp\">\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19</label>                             <input type=\"number\" class=\"form-control\" id=\"floor_xp\" formControlName=\"floor_xp\" name=\"floor_xp\">                         </div>                         <div class=\"form-group\">                             <label for=\"ceiling_xp\">\u0E16\u0E36\u0E07</label>                             <input type=\"number\" class=\"form-control\" id=\"ceiling_xp\" formControlName=\"ceiling_xp\" name=\"ceiling_xp\">                         </div>                          <div class=\"form-group\">                             <button class=\"btn btn-info\" (click)=\"addLevel(levelsForm.value)\" [disabled]=\"!levelsForm.valid\">\u0E40\u0E1E\u0E34\u0E48\u0E21</button>                         </div>                      </form>                 </div>             </div>              <div class=\"row\" style=\"margin-top: 45px; margin-bottom: 45px\">                 <div class=\"pull-xs-right\">                     <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>                     <button type=\"submit\" class=\"btn btn-info\" (click)=\"submit()\">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01</button>                 </div>             </div>          </div>      </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}.lms-body,body{font-family:proxima-nova,sans-serif;overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.lms-body{margin-top:45px;margin-bottom:45px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}.center{margin:0 auto}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.box-title{color:#1e394f;margin-bottom:15px}.section-header{padding-top:15px;background-color:#fff}.section-header-link,.section-header-title{color:#848484}.section-header-icon{color:#848484!important}.fa{color:#848484;cursor:pointer}.box-wrapper{padding:45px} /*# sourceMappingURL=edit-xp.component.css.map */"]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, course_service_1.CourseService])
    ], EditXPComponent);
    return EditXPComponent;
}());
exports.EditXPComponent = EditXPComponent;
