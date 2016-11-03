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
        var students_level = 1;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC14cC9lZGl0LXhwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZELHNCQUFvQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ3pDLGdDQUFrQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ25ELHdCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBV2xEO0lBWUUseUJBQW9CLFdBQXdCLEVBQ3hCLGFBQTRCO1FBRDVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTmhELFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDckIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLFNBQUksR0FBYyxFQUFFLENBQUM7SUFJckIsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBR3hDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUM5RixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFB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QUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFDLENBQUMsdUJBQXVCLENBQUM7U0FDcEMsQ0FBQzs7dUJBQUE7SUE0SEYsc0JBQUM7QUFBRCxDQTFIQSxBQTBIQyxJQUFBO0FBMUhZLHVCQUFlLGtCQTBIM0IsQ0FBQSIsImZpbGUiOiJhcHAvY291cnNlL2VkaXQteHAvZWRpdC14cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q291cnNlfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvdXJzZVwiO1xuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcbmltcG9ydCB7VmFsaWRhdG9ycywgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtMZXZlbH0gZnJvbSBcIi4uLy4uL21vZGVscy9sZXZlbFwiO1xuaW1wb3J0IHttc2d9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQge0VkaXRYcENvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9lZGl0X3hwXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCJwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL2FwaVwiO1xuZGVjbGFyZSB2YXIgXzogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdlZGl0LXhwJyxcbiAgdGVtcGxhdGVVcmw6ICdlZGl0LXhwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOlsnZWRpdC14cC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBFZGl0WFBDb21wb25lbnQge1xuXG4gIGNvdXJzZTogQ291cnNlO1xuXG4gIHhwRm9ybTogYW55O1xuXG4gIGxldmVsc0Zvcm06IGFueTtcbiAgbGV2ZWxzOiBMZXZlbFtdID0gW107XG4gIGN1cnJlbnRfbGV2ZWw6IG51bWJlciA9IDA7XG4gIGN1cnJlbnRfbGV2ZWxFbmQ6IG51bWJlciA9IDA7XG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGNvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY291cnNlID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZTtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuY291cnNlKTtcblxuICAgIHRoaXMuY291cnNlLmlkID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZS5pZDtcbiAgICB0aGlzLmxldmVscyA9IHRoaXMuY291cnNlU2VydmljZS5sZXZlbHM7XG4gICAgdGhpcy5jdXJyZW50X2xldmVsID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmxldmVsc1t0aGlzLmNvdXJzZVNlcnZpY2UubGV2ZWxzLmxlbmd0aCAtIDFdLmxldmVsX2lkO1xuICAgIHRoaXMuY3VycmVudF9sZXZlbEVuZCA9IHRoaXMuY291cnNlU2VydmljZS5sZXZlbHNbdGhpcy5jb3Vyc2VTZXJ2aWNlLmxldmVscy5sZW5ndGggLSAxXS5jZWlsaW5nX3hwO1xuXG4gICAgdGhpcy5jcmVhdGVYcEZvcm0oKTtcbiAgICB0aGlzLmNyZWF0ZUxldmVsc0Zvcm0oKTtcbiAgfVxuXG4gIGNyZWF0ZVhwRm9ybSgpIHtcbiAgICB0aGlzLnhwRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ3N0YXJ0X3hwJzogW3RoaXMuY291cnNlLnN0YXJ0X3hwLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgJ2xlYWRlcl9ib2FyZCc6IFt0aGlzLmNvdXJzZS5sZWFkZXJfYm9hcmQsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUxldmVsc0Zvcm0oKSB7XG4gICAgdGhpcy5sZXZlbHNGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnZmxvb3JfeHAnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnY2VpbGluZ194cCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgYWRkTGV2ZWwobGV2ZWw6IGFueSkge1xuXG4gICAgaWYgKGxldmVsLmNlaWxpbmdfeHAgPiBsZXZlbC5mbG9vcl94cCkge1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50X2xldmVsID09IDApIHtcbiAgICAgICAgdGhpcy5uZXdMZXZlbChsZXZlbCk7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmIChsZXZlbC5mbG9vcl94cCA+IHRoaXMuY3VycmVudF9sZXZlbEVuZCkge1xuXG4gICAgICAgICAgbGV2ZWwuZmxvb3JfeHAgPSAoK3RoaXMuY3VycmVudF9sZXZlbEVuZCArIDEpO1xuICAgICAgICAgIHRoaXMubmV3TGV2ZWwobGV2ZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3TGV2ZWwobGV2ZWw6IGFueSkge1xuICAgIHZhciBuZXdMZXZlbCA9IG5ldyBMZXZlbCgrK3RoaXMuY3VycmVudF9sZXZlbCwgbGV2ZWwuZmxvb3JfeHAsIGxldmVsLmNlaWxpbmdfeHApO1xuICAgIHRoaXMubGV2ZWxzLnB1c2gobmV3TGV2ZWwpO1xuICAgIHRoaXMuY3VycmVudF9sZXZlbEVuZCA9IGxldmVsLmNlaWxpbmdfeHA7XG4gIH1cblxuICBkZWxldGVMZXZlbChsZXZlbDogYW55KSB7XG4gICAgdGhpcy5jdXJyZW50X2xldmVsIC09IDE7XG4gICAgdGhpcy5jdXJyZW50X2xldmVsRW5kID0gbGV2ZWwuZmxvb3JfeHAgLSAxO1xuICAgIF8ucmVtb3ZlKHRoaXMubGV2ZWxzLCBsZXZlbClcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcblxuICAgIGlmICh0aGlzLmxldmVscy5sZW5ndGggPT0gMCkge1xuICAgICAgbGV0IGxldmVsID0gbmV3IExldmVsKCcxJywgJzEnLCAxMCk7XG4gICAgICB0aGlzLmxldmVscy5wdXNoKGxldmVsKVxuICAgIH1cblxuICAgIGxldCBzdHVkZW50c19sZXZlbCA9IDE7XG5cbiAgICAvLyB0aGlzLmxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xuICAgIC8vICAgaWYgKF8uaW5SYW5nZSh0aGlzLnhwRm9ybS52YWx1ZS5zdGFydF94cCwgbGV2ZWwuZmxvb3JfeHAsIGxldmVsLmNlaWxpbmdfeHApKSB7XG4gICAgLy8gICAgIHN0dWRlbnRzX2xldmVsID0gbGV2ZWw7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cblxuICAgIGxldCBlZGl0WHAgPSBuZXcgRWRpdFhwQ291cnNlKFxuICAgICAgdGhpcy5jb3Vyc2UuaWQsXG4gICAgICB0aGlzLnhwRm9ybS52YWx1ZS5zdGFydF94cCxcbiAgICAgIHRoaXMueHBGb3JtLnZhbHVlLmxlYWRlcl9ib2FyZCxcbiAgICAgIHRoaXMubGV2ZWxzLFxuICAgICAgc3R1ZGVudHNfbGV2ZWxcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coZWRpdFhwKTtcbiAgICB0aGlzLmNvdXJzZVNlcnZpY2Uuc2V0dGluZ0NvdXJzZShlZGl0WHApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZVN0dWRlbnRzU2NvcmVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBzaG93TWVzc2FnZShtc2c6IGFueSl7XG4gICAgdGhpcy5tc2dzID0gW107XG4gICAgdGhpcy5tc2dzLnB1c2gobXNnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubXNncyA9IFtdO1xuICAgIH0sIDMwMDApO1xuICB9XG5cblxuICBjYW5jZWwoKXtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cbn1cbiJdfQ==
