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
var student_service_1 = require("../../services/student.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var message_service_1 = require('../../services/message-service');
var auth_service_1 = require("../../auth/auth.service");
var StudentDashboardComponent = (function () {
    function StudentDashboardComponent(formBuilder, studentService, authService, route, router) {
        this.formBuilder = formBuilder;
        this.studentService = studentService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.showHighScore = 5;
        this.highScoreStudents = [];
        this.badges = [];
        this.fakeImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoL…FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==';
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 150,
            resizeMaxWidth: 150
        };
        this.msgs = [];
        this.edit = false;
    }
    StudentDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.student_id = +params['id'];
            console.log(_this.student_id);
            _this.getStudent();
        });
    };
    StudentDashboardComponent.prototype.selected = function (imageResult) {
        this.student.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    StudentDashboardComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'student_id': ['', [forms_1.Validators.required]],
            'name': ['', [forms_1.Validators.required]],
            'password': ['', [forms_1.Validators.required]]
        });
    };
    StudentDashboardComponent.prototype.gotoPage = function (page) {
        this.router.navigate([("/course/" + page)]);
    };
    StudentDashboardComponent.prototype.getStudent = function () {
        var _this = this;
        this.studentService.getStudent(this.student_id)
            .subscribe(function (data) {
            console.log(data);
            _this.teacher = data.teacher[0];
            _this.student = data.student[0].student;
            _this.student.image = 'http://54.169.115.233/students/logo/' + _this.student.image;
            _this.student.progressType = _this.progressCalculator(_this.student.overall_xp);
            _this.studentService.student = _this.student;
            _this.badges = data.student[0].badge;
            _this.badges.map(function (badge) {
                badge.image = 'http://54.169.115.233/students/badges/' + badge.image;
            });
            _this.course = data.course;
            _this.highScoreStudents = data.leaderboard;
            _this.highScoreStudents.map(function (student) {
                student.image = 'http://54.169.115.233/students/logo/' + student.image;
            });
            _this.showHighScore = +_this.course.leader_board;
            _this.createForm();
        }, function (error) { return console.log(error); });
    };
    StudentDashboardComponent.prototype.progressCalculator = function (xp) {
        var allStatus = ['info', 'success', 'warning', 'danger'];
        var status;
        if (xp < 25) {
            status = allStatus[3];
        }
        else if (xp < 50) {
            status = allStatus[2];
        }
        else if (xp < 75) {
            status = allStatus[1];
        }
        else {
            status = allStatus[0];
        }
        return status;
    };
    StudentDashboardComponent.prototype.gotoWebboard = function () {
        var navigationExtras = {
            queryParams: { 'id': this.course.id },
        };
        this.router.navigate(["/webboard/post"], navigationExtras);
    };
    StudentDashboardComponent.prototype.editMode = function (mode) {
        this.edit = mode;
    };
    StudentDashboardComponent.prototype.save = function () {
        var _this = this;
        this.studentService.editStudent(this.student)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                _this.showMessage(message_service_1.msg.getUpdateStudentsScoreMessage(200));
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateStudentsScoreMessage(500));
            }
        }, function (error) { return console.log(error); });
    };
    StudentDashboardComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    StudentDashboardComponent.prototype.signout = function () {
        var _this = this;
        this.authService.signout().subscribe(function () { return _this.router.navigate(['/auth/signin']); });
    };
    StudentDashboardComponent.prototype.cancel = function () {
        window.history.back();
    };
    StudentDashboardComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    StudentDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-student-dashboard',
            template: "<p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>  <nav class=\"navbar navbar-default navbar-fixed-top\" *ngIf=\"student != null\">   <div class=\"container-fluid\">     <div class=\"container\">       <!-- Brand and toggle get grouped for better mobile display -->       <div class=\"navbar-header\">         <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"                 aria-expanded=\"false\">           <span class=\"sr-only\">Toggle navigation</span>           <span class=\"icon-bar\"></span>           <span class=\"icon-bar\"></span>           <span class=\"icon-bar\"></span>         </button>         <a class=\"navbar-brand\" routerLink=\"/\">LMS Logo</a>       </div>        <!-- Collect the nav links, forms, and other content for toggling -->       <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">         <ul class=\"nav navbar-nav navbar-right\">           <li class=\"dropdown\">             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">               {{student.name}} <span class=\"caret\"></span></a>             <ul class=\"dropdown-menu\">               <li><a (click)=\"editMode(true)\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</a></li>               <li><a class=\"btn-logout\" (click)=\"signout()\">\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A</a></li>             </ul>           </li>         </ul>       </div><!-- /.navbar-collapse -->     </div>   </div><!-- /.container-fluid --> </nav>   <div class=\"jumbotron courseNav\">   <div class=\"container\">     <div class=\"row center\">       <div class=\"col-xs-4 courseNavLink\" data-toggle=\"modal\" data-target=\"#viewLeaderboard\">         <p class=\"link\">Leaderboard</p>       </div>       <div class=\"col-xs-4 courseNavLink\" (click)=\"gotoWebboard()\">         <p class=\"link\">Chat</p>       </div>       <div class=\"col-xs-4 courseNavLink\">         <p class=\"link\">Help</p>       </div>     </div>   </div> </div>  <div class=\"lms-body\">   <div class=\"container\" *ngIf=\"student != null && teacher!=null && course !=null\">      <div class=\"row box-wrapper\" style=\"background: none; border: none\">       <div class=\"scrollable-content\">          <h3>{{course.name}}</h3>         <h4><strong>\u0E04\u0E23\u0E39\u0E1C\u0E39\u0E49\u0E2A\u0E2D\u0E19</strong> {{teacher.name}}</h4>          <div class=\"row box-wrapper\">           <div class=\"col-md-4 col-xs-12 text-xs-center\" style=\"margin-bottom: 45px\">             <div class=\"form-group row\">               <div class=\"col-sm-10\">                 <img class=\"img-responsive center\" [src]=\"student.image\" [hidden]=\"!student.image\"                      style=\"margin-top: 15px; margin-bottom: 15px\">                 <div *ngIf=\"edit\">                   <label class=\"btn btn-info btn-sm\" for=\"file-selector\" style=\"display: block\">                     <input id=\"file-selector\" type=\"file\" image-upload (imageSelected)=\"selected($event)\"                            [resizeOptions]=\"resizeOptions\" style=\"display:none;\">                     \u0E43\u0E2A\u0E48\u0E23\u0E39\u0E1B                   </label>                   <small class='text-muted' [hidden]=\"image\">\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E43\u0E2A\u0E48\u0E23\u0E39\u0E1B (\u0E43\u0E2A\u0E48\u0E23\u0E39\u0E1B\u0E44\u0E1F\u0E25\u0E4C .jpg, .jpeg)</small>                   <small class='text-muted' style=\"font-size: 10px\" id=\"upload-file-info\"></small>                 </div>               </div>             </div>           </div>            <div class=\"col-md-8 col-xs-12\">             <form class=\"center\" *ngIf=\"!edit\">               <div style=\"margin-bottom: 15px\" class=\"row\">                 <div class=\"col-xs-12\"><h3 >\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27</h3> </div>                 <hr>               </div>               <div class=\"row\">                 <div class=\"col-xs-12\">                   <p><strong>\u0E0A\u0E37\u0E48\u0E2D</strong> {{student.name}}</p>                   <p><strong>XP</strong> {{student.overall_xp}}</p>                    <div class=\"progress\" style=\"margin-top: 15px; margin-bottom: 15px;\">                     <div class=\"progress-bar progress-bar-{{student.progressType}}\" role=\"progressbar\"                          [attr.aria-valuenow]=\"student.overall_xp\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"100\"                          [style.width]=\"student.overall_xp + '%'\">                       {{student.overall_xp}}                     </div>                   </div>                    <p><strong>Level</strong> {{student.level}}</p>                 </div>                </div>             </form>             <form class=\"center\" [formGroup]=\"userForm\" novalidate autocomplete=\"off\" *ngIf=\"edit\">               <div style=\"margin-bottom: 15px\" class=\"row\">                 <div class=\"col-xs-12\"><h3 >\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27</h3> </div>                 <hr>               </div>                <div class=\"form-group row\">                 <label for=\"student_id\" class=\"col-sm-3 col-form-label\">\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</label>                 <div class=\"col-sm-9\">                   <input type=\"text\" class=\"form-control\" id=\"student_id\" name=\"student_id\" formControlName=\"student_id\"                          [(ngModel)]=\"student.student_id\">                 </div>               </div>               <div class=\"form-group row\">                 <label for=\"name\" class=\"col-sm-3 col-form-label\">\u0E0A\u0E37\u0E48\u0E2D</label>                 <div class=\"col-sm-9\">                   <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" formControlName=\"name\"                          [(ngModel)]=\"student.name\">                 </div>               </div>               <div class=\"form-group row\">                 <label for=\"password\" class=\"col-sm-3 col-form-label\">\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19</label>                 <div class=\"col-sm-9\">                   <input type=\"text\" class=\"form-control\" id=\"password\" name=\"password\" formControlName=\"password\"                          [(ngModel)]=\"student.password\">                 </div>               </div>               <hr>               <div class=\"form-group row pull-xs-right\">                 <div class=\"col-xs-12\">                   <button type=\"button\" class=\"btn btn-orenge\" (click)=\"editMode(false)\">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button>                   <button type=\"submit\" class=\"btn btn-info\" (click)=\"save()\" [disabled]=\"!userForm.valid\">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01</button>                 </div>               </div>             </form>           </div>          </div>          <div class=\"row\" style=\"margin-top: 15px\">           <div class=\"col-xs-12\">             <h4 style=\"margin-bottom: 15px;\">\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A</h4>             <div class=\"row box-wrapper\">               <div class=\"row\" *ngIf=\"badges\">                 <div class=\"col-md-3\" *ngFor=\"let badge of badges;\">                   <div class=\"card card-block text-center\" style=\"max-width: 18rem;\">                     <img class=\"center img-responsive img-circle \" src=\"{{badge.image}}\"                          style=\"margin-bottom: 5px; max-width: 80px\">                     <p class=\"card-text\" style=\"margin-bottom: 0\">{{badge.name}}</p>                   </div>                 </div>               </div>               <p *ngIf=\"badges.length == 0\">\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A</p>             </div>           </div>         </div>        </div>     </div>    </div>     <!--View Leaderboard Modal-->   <div class=\"modal fade\" id=\"viewLeaderboard\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"giveFeedbackLabel\"        aria-hidden=\"true\">     <div class=\"modal-dialog\" role=\"document\" style=\"overflow-y: initial !important; \">       <div class=\"modal-content\">         <div class=\"modal-header\">           <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">             <span aria-hidden=\"true\">&times;</span>           </button>            <div class=\"modal-title\" id=\"viewLeaderboardlLabel\">             <form class=\"form-inline text-center\" style=\"margin-right: 15px; margin-left: 15px; margin-bottom: 0\">               <div class=\"form-group\">                 <p class=\"form-control-static\">\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E09\u0E1E\u0E32\u0E30</p>               </div>               <div class=\"form-group\">                 {{showHighScore}}               </div>               <span>\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E41\u0E23\u0E01</span>             </form>           </div>          </div>         <div class=\"modal-body\" style=\"max-height: 350px; overflow-y: auto;\">             <div class=\"row\">             <!--Student Card-->             <div class=\"col-xs-12\" style=\"padding-right: 25px; padding-left: 25px\">               <div class=\"card card-block\" *ngIf=\"highScoreStudents.length > 0\">                 <div class=\"row\" *ngFor=\"let student of highScoreStudents; let index = index\">                   <div *ngIf=\"index < showHighScore\">                     <div class=\"col-md-1 col-xs-12 text-center\">                       <h3>{{index + 1}}</h3>                     </div>                     <div class=\"col-md-2 col-xs-12 text-xs-center\">                       <img class=\"center img-responsive img-circle\"                            [src]=\"student.image\">                     </div>                     <div class=\"col-md-5 col-xs-12 text-xs-center\">                       <h6 class=\"card-title\" style=\"margin-top: 15px\">{{student.student_id}} {{student.name}}</h6>                     </div>                     <div class=\"col-md-2 col-xs-12 text-xs-center\">                       <h6 style=\"margin-top: 15px\">{{student.overall_xp}} XP</h6>                     </div>                     <div class=\"col-md-2 col-xs-12 text-xs-center\">                       <h6 style=\"margin-top: 15px\">Level {{student.level}}</h6>                     </div>                   </div>                 </div>               </div>             </div>            </div>         </div>         <div class=\"modal-footer\">           <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\u0E1B\u0E34\u0E14</button>         </div>       </div>     </div>   </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}.lms-body,body{font-family:proxima-nova,sans-serif;overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.lms-body{margin-top:45px;margin-bottom:45px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}.center{margin:0 auto}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.container{margin-top:0!important}.lms-body{margin-top:0}.scrollable-content{overflow-y:hidden;max-height:inherit}.navbar{position:fixed;opacity:.99;z-index:999;background-color:#87c97f}.navbar,.navbar-nav>li>a{color:#fff}.navbar-nav{float:none}.btn-toggle{color:#fff}.btn-logout{cursor:pointer}.navbar-default .navbar-nav>.open>a{background-color:transparent}.jumbotron{max-height:100px;margin-bottom:5px;padding-top:55px;padding-bottom:0}.container{margin-top:0}.courseNav{background-color:#fff;color:#000}.courseNavLink{cursor:pointer;text-align:center;border-bottom:5px solid transparent}.courseNavLink:hover{color:#83c7d4;border-bottom:5px solid #83c7d4}.link{margin:.5rem}.link:hover{color:#83c7d4}.progress,.progress-bar{height:100%;font-size:12px;line-height:20px;width:50%} /*# sourceMappingURL=student-dashboard.component.css.map */"]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, student_service_1.StudentService, auth_service_1.AuthService, router_1.ActivatedRoute, router_1.Router])
    ], StudentDashboardComponent);
    return StudentDashboardComponent;
}());
exports.StudentDashboardComponent = StudentDashboardComponent;
