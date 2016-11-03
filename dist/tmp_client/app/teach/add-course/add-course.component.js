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
var student_1 = require("../../models/student");
var level_1 = require("../../models/level");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var course_service_1 = require("../../services/course.service");
var add_course_1 = require("../../models/add_course");
var Tab = (function () {
    function Tab(id, name) {
        this.id = id;
        this.name = name;
    }
    return Tab;
}());
exports.Tab = Tab;
var AddCourseComponent = (function () {
    function AddCourseComponent(formBuilder, router, courseService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.courseService = courseService;
        this.tabIndex = 1;
        this.tabName = '';
        this.tabProgress = [
            new Tab(1, 'เพิ่มชั้นเรียน'),
            new Tab(2, 'เพิ่มนักเรียน'),
            new Tab(3, 'เพิ่มรูปนักเรียน'),
            new Tab(4, 'กำหนดค่าเริ่มต้น')
        ];
        this.popupMessage = {
            "title": "เพิ่มวิชาเรียบเรียบร้อย",
            "message": ""
        };
        this.check = 'excel';
        this.students = [];
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 150,
            resizeMaxWidth: 150
        };
        this.levels = [];
        this.current_level = 0;
        this.current_levelEnd = 0;
        this.createCourseForm();
        this.createStudentsForm();
        this.createXpForm();
        this.createLevelsForm();
    }
    AddCourseComponent.prototype.ngOnInit = function () {
        this.tabName = this.getTabName().name;
    };
    AddCourseComponent.prototype.next = function () {
        this.tabIndex == 4 ? this.tabIndex = 4 : this.tabIndex++;
        this.tabName = this.getTabName().name;
    };
    AddCourseComponent.prototype.getTabName = function () {
        var _this = this;
        return this.tabProgress.find(function (index) { return index.id == _this.tabIndex; });
    };
    AddCourseComponent.prototype.previous = function () {
        this.tabIndex == 1 ? this.tabIndex = 1 : this.tabIndex--;
        this.tabName = this.getTabName().name;
    };
    AddCourseComponent.prototype.createCourseForm = function () {
        this.courseForm = this.formBuilder.group({
            'name': ['', [forms_1.Validators.required]],
            'description': ['', [forms_1.Validators.required]]
        });
    };
    AddCourseComponent.prototype.createStudentsForm = function () {
        this.studentsForm = this.formBuilder.group({
            'student_id': ['', [forms_1.Validators.required]],
            'student_title': ['mr'],
            'student_name': ['', [forms_1.Validators.required]]
        });
    };
    AddCourseComponent.prototype.onCheck = function (check) {
        this.check = check;
    };
    AddCourseComponent.prototype.addStudent = function (student) {
        var fakeImage = (student.student_title == 'mr' ?
            "data:image/jpeg;base64,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" :
            "data:image/jpeg;base64,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");
        var newStudent = new student_1.Student(student.student_id, student.student_title, student.student_name, fakeImage);
        this.students.push(newStudent);
        this.createStudentsForm();
    };
    AddCourseComponent.prototype.deleteStudent = function (student) {
        _.remove(this.students, student);
    };
    AddCourseComponent.prototype.selected = function (imageResult, student) {
        this.students[this.students.indexOf(student)].image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    AddCourseComponent.prototype.createXpForm = function () {
        this.xpForm = this.formBuilder.group({
            'start_xp': ['1', [forms_1.Validators.required]],
            'leader_board': ['10', [forms_1.Validators.required]]
        });
    };
    AddCourseComponent.prototype.createLevelsForm = function () {
        this.levelsForm = this.formBuilder.group({
            'floor_xp': ['', [forms_1.Validators.required]],
            'ceiling_xp': ['', [forms_1.Validators.required]]
        });
    };
    AddCourseComponent.prototype.addLevel = function (level) {
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
    AddCourseComponent.prototype.newLevel = function (level) {
        var newLevel = new level_1.Level(++this.current_level, level.floor_xp, level.ceiling_xp);
        this.levels.push(newLevel);
        this.current_levelEnd = level.ceiling_xp;
    };
    AddCourseComponent.prototype.deleteLevel = function (level) {
        this.current_level -= 1;
        this.current_levelEnd = level.floor_xp - 1;
        _.remove(this.levels, level);
    };
    AddCourseComponent.prototype.submit = function () {
        var _this = this;
        if (this.levels.length == 0) {
            var level = new level_1.Level('1', '1', 10);
            this.levels.push(level);
        }
        var studentLevel;
        this.levels.forEach(function (level) {
            if (_.inRange(_this.xpForm.value.start_xp, level.floor_xp, level.ceiling_xp)) {
                studentLevel = level;
            }
        });
        this.students.forEach(function (student) {
            student.level = studentLevel.level_id;
            student.overall_xp = _this.xpForm.value.start_xp;
        });
        var newCourse = new add_course_1.AddCourse(this.courseForm.value.name, this.courseForm.value.description, this.xpForm.value.start_xp, this.xpForm.value.leader_board, this.levels, this.students);
        this.courseService.createNewCourse(newCourse)
            .subscribe(function (data) {
            console.log(data);
            console.log(data.status);
            _this.router.navigate(['/teach']);
        }, function (error) { return console.log(error); });
    };
    AddCourseComponent.prototype.cancel = function () {
        window.history.back();
    };
    AddCourseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-add-course',
            template: "<div class=\"section-header\">   <div class=\"container\" style=\"margin-top: 55px; padding-bottom: 15px;\">     <div class=\"row\">       <div class=\"col-xs-12\">         <a class=\"section-header-link link\" (click)=\"cancel()\" routerLinkActive=\"true\">           <i class=\"section-header-icon fa fa-chevron-left\" aria-hidden=\"true\"></i> \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A</a>         <h3 class=\"section-header-title\">\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19</h3>       </div>     </div>   </div> </div>  <div class=\"lms-body\">   <div class=\"container\" style=\"max-width: 800px; display: block\">     <div class=\"row box-wrapper\">        <h4>\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E17\u0E35\u0E48 {{tabIndex}} {{tabName}}</h4>       <div class=\"progress\">         <div class=\"progress-bar progress-bar-info\" role=\"progressbar\"              [attr.aria-valuenow]=\"tabIndex * 25\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"100\"              [style.width]=\"tabIndex * 25 + '%'\">           {{tabIndex * 25}} %         </div>       </div>       <hr>       <form *ngIf=\"tabIndex == 1\" [formGroup]=\"courseForm\" novalidate autocomplete=\"off\">         <div class=\"form-group row\">           <label for=\"name\" class=\"col-sm-2 col-form-label\"> \u0E0A\u0E37\u0E48\u0E2D\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19</label>           <div class=\"col-sm-10\">             <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" formControlName=\"name\">             <control-messages [control]=\"courseForm.controls.name\"></control-messages>           </div>         </div>         <div class=\"form-group row\">           <label for=\"description\" class=\"col-sm-2 col-form-label\">\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14</label>           <div class=\"col-sm-10\">           <textarea rows=\"5\" class=\"form-control\" id=\"description\" name=\"description\"                     formControlName=\"description\"></textarea>             <control-messages [control]=\"courseForm.controls.description\"></control-messages>           </div>         </div>         <hr>          <div class=\"form-group row pull-right\">           <div class=\"col-sm-12\">             <button type=\"button\" class=\"btn btn-info {{tabIndex == 1 ? 'disabled': ''}}\" (click)=\"previous()\">\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A             </button>             <button [disabled]=\"!courseForm.valid\" type=\"button\" class=\"btn btn-info {{tabIndex == 4 ? 'disabled': ''}}\"                     (click)=\"next()\">\u0E15\u0E48\u0E2D\u0E44\u0E1B             </button>           </div>         </div>       </form>        <div *ngIf=\"tabIndex == 2\">          <div style=\"margin-bottom: 15px\">           <label class=\"form-check-inline\" style=\"margin-right: 15px\">             <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" (click)=\"onCheck('excel')\"                    [checked]=\"check == 'excel'\"> \u0E19\u0E33\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E02\u0E49\u0E32\u0E08\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C           </label>            <label class=\"form-check-inline\">             <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" (click)=\"onCheck('manual')\"                    [checked]=\"check == 'manual'\"> \u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E2D\u0E07           </label>          </div>          <table class=\"table table-hover\" style=\"margin-bottom: 15px\">           <thead>           <tr>             <th>\u0E23\u0E2B\u0E31\u0E2A</th>             <th>\u0E04\u0E33\u0E19\u0E33\u0E2B\u0E19\u0E49\u0E32</th>             <th>\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25</th>             <th>\u0E41\u0E01\u0E49\u0E44\u0E02</th>           </tr>           </thead>           <tbody *ngIf=\"students != null\">           <tr *ngFor=\"let student of students\">             <th scope=\"row\">{{student.student_id}}</th>             <th scope=\"row\">{{student.title == 'mr' ? '\u0E19\u0E32\u0E22': '\u0E19\u0E32\u0E07\u0E2A\u0E32\u0E27'}}</th>             <td>               <div class=\"\">{{student.name}}</div>             </td>             <td>               <button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"deleteStudent(student)\">\u0E25\u0E1A</button>             </td>           </tr>           </tbody>         </table>           <form *ngIf=\"check == 'excel'\">           <div class=\"form-group\">             <input type=\"file\" class=\"form-control-file\" aria-describedby=\"fileHelp\">             <small class=\"form-text text-muted\">This is some placeholder block-level help text for the above input. It's               a               bit lighter and easily wraps to a new line.             </small>           </div>         </form>          <div *ngIf=\"check == 'manual'\">            <div class=\"row\">             <form [formGroup]=\"studentsForm\">               <div style=\"padding-bottom: 45px\">                 <div class=\"col-md-3\">                   <div class=\"form-group\">                     <input type=\"text\" class=\"form-control\" id=\"student_id\" formControlName=\"student_id\"                            name=\"student_id\">                   </div>                 </div>                 <div class=\"col-md-3\">                   <div class=\"form-group\">                     <select class=\"form-control\" id=\"student_title\" formControlName=\"student_title\"                             name=\"student_title\">                       <option value=\"mr\">\u0E19\u0E32\u0E22</option>                       <option value=\"miss\">\u0E19\u0E32\u0E07\u0E2A\u0E32\u0E27</option>                     </select>                   </div>                 </div>                 <div class=\"col-md-3\">                   <div class=\"form-group\">                     <input type=\"text\" class=\"form-control\" id=\"student_name\" formControlName=\"student_name\"                            name=\"student_name\">                   </div>                 </div>                 <div class=\"col-md-3\">                   <div class=\"form-group\">                     <button class=\"btn btn-green btn-block\" (click)=\"addStudent(studentsForm.value)\"                             [disabled]=\"!studentsForm.valid\">                       \u0E40\u0E1E\u0E34\u0E48\u0E21                     </button>                   </div>                 </div>                 <hr>               </div>                <div class=\"form-group row pull-right\">                  <div class=\"col-sm-12\">                   <button type=\"button\" class=\"btn btn-info {{tabIndex == 1 ? 'disabled': ''}}\" (click)=\"previous()\">                     \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A                   </button>                   <button [disabled]=\"students.length == 0\" type=\"button\"                           class=\"btn btn-info {{tabIndex == 4 ? 'disabled': ''}}\" (click)=\"next()\">\u0E15\u0E48\u0E2D\u0E44\u0E1B                   </button>                 </div>               </div>             </form>           </div>         </div>        </div>        <form *ngIf=\"tabIndex == 3\">         <table class=\"table table-hover\">           <thead>           <tr>             <th>\u0E23\u0E2B\u0E31\u0E2A</th>             <th>\u0E0A\u0E37\u0E48\u0E2D</th>             <th>\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E</th>           </tr>           </thead>           <tbody>           <tr *ngFor=\"let student of students\">             <th scope=\"row\">{{student.student_id}}</th>             <td>{{student.name}}</td>             <td>               <img [src]=\"student.image\" class=\"img-responsive\" style=\"max-height: 100px\"><br>               <input type=\"file\" image-upload                      (imageSelected)=\"selected($event, student)\"                      [resizeOptions]=\"resizeOptions\">             </td>           </tr>           </tbody>         </table>         <div class=\"form-group row pull-right\">           <div class=\"col-sm-12\">             <button type=\"button\" class=\"btn btn-info {{tabIndex == 1 ? 'disabled': ''}}\" (click)=\"previous()\">\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A             </button>             <button type=\"button\" class=\"btn btn-info {{tabIndex == 4 ? 'disabled': ''}}\" (click)=\"next()\">\u0E15\u0E48\u0E2D\u0E44\u0E1B             </button>           </div>         </div>       </form>        <div *ngIf=\"tabIndex == 4\">         <div style=\"margin-bottom: 45px;\">           <h5>\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19</h5>           <form [formGroup]=\"xpForm\">             <div class=\"form-group row\">               <label for=\"start_xp\" class=\"col-xs-4 col-form-label\">\u0E41\u0E15\u0E49\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E04\u0E19</label>               <div class=\"col-xs-6\">                 <input class=\"form-control\" type=\"number\" id=\"start_xp\" formControlName=\"start_xp\" name=\"start_xp\">               </div>               <label class=\"col-xs-2 col-form-label\">XP</label>             </div>             <div class=\"form-group row\">               <label for=\"leader_board\" class=\"col-xs-4 col-form-label\">\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E09\u0E1E\u0E32\u0E30</label>               <div class=\"col-xs-6\">                 <input class=\"form-control\" id=\"leader_board\" type=\"number\" formControlName=\"leader_board\"                        name=\"leader_board\">               </div>               <label class=\"col-xs-2 col-form-label\">\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E41\u0E23\u0E01\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19</label>             </div>           </form>         </div>          <hr>         <h5>\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E02\u0E31\u0E49\u0E19</h5>         <table class=\"table table-hover\" style=\"margin-bottom: 15px\">           <thead>           <tr>             <th>Level</th>             <th>\u0E04\u0E48\u0E32 XP \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19</th>             <th>\u0E04\u0E48\u0E32 XP \u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14</th>           </tr>           </thead>           <tbody *ngIf=\"levels != null\">           <tr *ngFor=\"let level of levels; let last = last\">             <th scope=\"row\">{{level.level_id}}</th>             <td>               <div class=\"\">{{level.floor_xp}}</div>             </td>             <td>               <div class=\"\">{{level.ceiling_xp}}</div>             </td>             <td>               <button *ngIf=\"last\" class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"deleteLevel(level)\">\u0E25\u0E1A               </button>             </td>           </tr>           </tbody>         </table>         <form class=\"form-inline\" [formGroup]=\"levelsForm\" style=\"margin-bottom: 45px\">            <label style=\"margin-right: 15px; font-weight: 900;\">Level</label>           <div class=\"form-group\">             <label for=\"floor_xp\">\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19</label>             <input type=\"number\" class=\"form-control\" id=\"floor_xp\" formControlName=\"floor_xp\" name=\"floor_xp\">           </div>           <div class=\"form-group\">             <label for=\"ceiling_xp\">\u0E16\u0E36\u0E07</label>             <input type=\"number\" class=\"form-control\" id=\"ceiling_xp\" formControlName=\"ceiling_xp\" name=\"ceiling_xp\">           </div>           <div class=\"form-group\">             <button class=\"btn btn-green \" (click)=\"addLevel(levelsForm.value)\" [disabled]=\"!levelsForm.valid\">\u0E40\u0E1E\u0E34\u0E48\u0E21             </button>           </div>         </form>          <div class=\"form-group row pull-right\">           <div class=\"col-sm-12\">             <button type=\"button\" class=\"btn btn-info {{tabIndex == 1 ? 'disabled': ''}}\" (click)=\"previous()\">               \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A             </button>             <button type=\"button\" class=\"btn btn-info {{tabIndex == 4 ? 'disabled': ''}}\" (click)=\"next()\">\u0E15\u0E48\u0E2D\u0E44\u0E1B             </button>           </div>         </div>        </div>      </div>       <div class=\"form-group row pull-right\" style=\"padding: 15px 5px;\">       <div class=\"col-sm-12\">         <button *ngIf=\"tabIndex == 4\" [disabled]=\"!courseForm.valid\"                 type=\"button\" class=\"btn btn-info\" (click)=\"submit()\">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01         </button>        </div>     </div>   </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}.lms-body,body{font-family:proxima-nova,sans-serif;overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.lms-body{margin-top:45px;margin-bottom:45px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}.center{margin:0 auto}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.box-title{color:#1e394f;margin-bottom:15px}.section-header{padding-top:15px;background-color:#fff}.section-header-link,.section-header-title{color:#848484}.section-header-icon{color:#848484!important}.fa{color:#848484;cursor:pointer}.box-wrapper{padding:45px} /*# sourceMappingURL=add-course.component.css.map */"]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, course_service_1.CourseService])
    ], AddCourseComponent);
    return AddCourseComponent;
}());
exports.AddCourseComponent = AddCourseComponent;
