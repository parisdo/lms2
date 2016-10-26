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
            templateUrl: 'edit-xp.component.html',
            styleUrls: ['edit-xp.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, course_service_1.CourseService])
    ], EditXPComponent);
    return EditXPComponent;
}());
exports.EditXPComponent = EditXPComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC14cC9lZGl0LXhwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZELHNCQUFvQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ3pDLGdDQUFrQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ25ELHdCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBV2xEO0lBWUUseUJBQW9CLFdBQXdCLEVBQ3hCLGFBQTRCO1FBRDVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTmhELFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDckIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLFNBQUksR0FBYyxFQUFFLENBQUM7SUFJckIsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBR3hDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUM5RixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFB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QUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBR0QsZ0NBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQWhJSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUMsQ0FBQyx1QkFBdUIsQ0FBQztTQUNwQyxDQUFDOzt1QkFBQTtJQTRIRixzQkFBQztBQUFELENBMUhBLEFBMEhDLElBQUE7QUExSFksdUJBQWUsa0JBMEgzQixDQUFBIiwiZmlsZSI6ImFwcC9jb3Vyc2UvZWRpdC14cC9lZGl0LXhwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDb3Vyc2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvY291cnNlXCI7XG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtWYWxpZGF0b3JzLCBGb3JtQnVpbGRlcn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0xldmVsfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2xldmVsXCI7XG5pbXBvcnQge21zZ30gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcbmltcG9ydCB7RWRpdFhwQ291cnNlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VkaXRfeHBcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcInByaW1lbmcvY29tcG9uZW50cy9jb21tb24vYXBpXCI7XG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2VkaXQteHAnLFxuICB0ZW1wbGF0ZVVybDogJ2VkaXQteHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6WydlZGl0LXhwLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEVkaXRYUENvbXBvbmVudCB7XG5cbiAgY291cnNlOiBDb3Vyc2U7XG5cbiAgeHBGb3JtOiBhbnk7XG5cbiAgbGV2ZWxzRm9ybTogYW55O1xuICBsZXZlbHM6IExldmVsW10gPSBbXTtcbiAgY3VycmVudF9sZXZlbDogbnVtYmVyID0gMDtcbiAgY3VycmVudF9sZXZlbEVuZDogbnVtYmVyID0gMDtcbiAgbXNnczogTWVzc2FnZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb3Vyc2UgPSB0aGlzLmNvdXJzZVNlcnZpY2UuY291cnNlO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5jb3Vyc2UpO1xuXG4gICAgdGhpcy5jb3Vyc2UuaWQgPSB0aGlzLmNvdXJzZVNlcnZpY2UuY291cnNlLmlkO1xuICAgIHRoaXMubGV2ZWxzID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmxldmVscztcbiAgICB0aGlzLmN1cnJlbnRfbGV2ZWwgPSB0aGlzLmNvdXJzZVNlcnZpY2UubGV2ZWxzW3RoaXMuY291cnNlU2VydmljZS5sZXZlbHMubGVuZ3RoIC0gMV0ubGV2ZWxfaWQ7XG4gICAgdGhpcy5jdXJyZW50X2xldmVsRW5kID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmxldmVsc1t0aGlzLmNvdXJzZVNlcnZpY2UubGV2ZWxzLmxlbmd0aCAtIDFdLmNlaWxpbmdfeHA7XG5cbiAgICB0aGlzLmNyZWF0ZVhwRm9ybSgpO1xuICAgIHRoaXMuY3JlYXRlTGV2ZWxzRm9ybSgpO1xuICB9XG5cbiAgY3JlYXRlWHBGb3JtKCkge1xuICAgIHRoaXMueHBGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnc3RhcnRfeHAnOiBbdGhpcy5jb3Vyc2Uuc3RhcnRfeHAsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnbGVhZGVyX2JvYXJkJzogW3RoaXMuY291cnNlLmxlYWRlcl9ib2FyZCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTGV2ZWxzRm9ybSgpIHtcbiAgICB0aGlzLmxldmVsc0Zvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdmbG9vcl94cCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICdjZWlsaW5nX3hwJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgfSk7XG4gIH1cblxuICBhZGRMZXZlbChsZXZlbDogYW55KSB7XG5cbiAgICBpZiAobGV2ZWwuY2VpbGluZ194cCA+IGxldmVsLmZsb29yX3hwKSB7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRfbGV2ZWwgPT0gMCkge1xuICAgICAgICB0aGlzLm5ld0xldmVsKGxldmVsKTtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKGxldmVsLmZsb29yX3hwID4gdGhpcy5jdXJyZW50X2xldmVsRW5kKSB7XG5cbiAgICAgICAgICBsZXZlbC5mbG9vcl94cCA9ICgrdGhpcy5jdXJyZW50X2xldmVsRW5kICsgMSk7XG4gICAgICAgICAgdGhpcy5uZXdMZXZlbChsZXZlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdMZXZlbChsZXZlbDogYW55KSB7XG4gICAgdmFyIG5ld0xldmVsID0gbmV3IExldmVsKCsrdGhpcy5jdXJyZW50X2xldmVsLCBsZXZlbC5mbG9vcl94cCwgbGV2ZWwuY2VpbGluZ194cCk7XG4gICAgdGhpcy5sZXZlbHMucHVzaChuZXdMZXZlbCk7XG4gICAgdGhpcy5jdXJyZW50X2xldmVsRW5kID0gbGV2ZWwuY2VpbGluZ194cDtcbiAgfVxuXG4gIGRlbGV0ZUxldmVsKGxldmVsOiBhbnkpIHtcbiAgICB0aGlzLmN1cnJlbnRfbGV2ZWwgLT0gMTtcbiAgICB0aGlzLmN1cnJlbnRfbGV2ZWxFbmQgPSBsZXZlbC5mbG9vcl94cCAtIDE7XG4gICAgXy5yZW1vdmUodGhpcy5sZXZlbHMsIGxldmVsKVxuICB9XG5cbiAgc3VibWl0KCkge1xuXG4gICAgaWYgKHRoaXMubGV2ZWxzLmxlbmd0aCA9PSAwKSB7XG4gICAgICBsZXQgbGV2ZWwgPSBuZXcgTGV2ZWwoJzEnLCAnMScsIDEwKTtcbiAgICAgIHRoaXMubGV2ZWxzLnB1c2gobGV2ZWwpXG4gICAgfVxuXG4gICAgbGV0IHN0dWRlbnRzX2xldmVsOiBhbnk7XG5cbiAgICB0aGlzLmxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xuICAgICAgaWYgKF8uaW5SYW5nZSh0aGlzLnhwRm9ybS52YWx1ZS5zdGFydF94cCwgbGV2ZWwuZmxvb3JfeHAsIGxldmVsLmNlaWxpbmdfeHApKSB7XG4gICAgICAgIHN0dWRlbnRzX2xldmVsID0gbGV2ZWw7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIGxldCBlZGl0WHAgPSBuZXcgRWRpdFhwQ291cnNlKFxuICAgICAgdGhpcy5jb3Vyc2UuaWQsXG4gICAgICB0aGlzLnhwRm9ybS52YWx1ZS5zdGFydF94cCxcbiAgICAgIHRoaXMueHBGb3JtLnZhbHVlLmxlYWRlcl9ib2FyZCxcbiAgICAgIHRoaXMubGV2ZWxzLFxuICAgICAgc3R1ZGVudHNfbGV2ZWxcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coZWRpdFhwKTtcbiAgICB0aGlzLmNvdXJzZVNlcnZpY2Uuc2V0dGluZ0NvdXJzZShlZGl0WHApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBzaG93TWVzc2FnZShtc2c6IGFueSl7XG4gICAgdGhpcy5tc2dzID0gW107XG4gICAgdGhpcy5tc2dzLnB1c2gobXNnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubXNncyA9IFtdO1xuICAgIH0sIDMwMDApO1xuICB9XG5cblxuICBjYW5jZWwoKXtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cbn1cbiJdfQ==
