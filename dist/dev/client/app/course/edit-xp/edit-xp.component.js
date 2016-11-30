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
var router_1 = require("@angular/router");
var EditXPComponent = (function () {
    function EditXPComponent(formBuilder, courseService, router) {
        this.formBuilder = formBuilder;
        this.courseService = courseService;
        this.router = router;
        this.levels = [];
        this.current_level = 0;
        this.current_levelEnd = 0;
        this.msgs = [];
    }
    EditXPComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('course_id') != undefined) {
            this.courseService.getCourse(localStorage.getItem('course_id'))
                .subscribe(function (data) {
                _this.course = data.course;
                _this.levels = data.levels;
                _this.current_level = _this.courseService.levels[_this.courseService.levels.length - 1].level_id;
                _this.current_levelEnd = _this.courseService.levels[_this.courseService.levels.length - 1].ceiling_xp;
                _this.createXpForm();
                _this.createLevelsForm();
            }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['/teach']);
        }
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
        var editXp = new edit_xp_1.EditXpCourse(this.course.id, this.xpForm.value.start_xp, this.xpForm.value.leader_board, this.levels);
        this.courseService.settingCourse(editXp)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.showMessage(message_service_1.msg.getUpdateMessage(200));
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateMessage(500));
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
        __metadata('design:paramtypes', [forms_1.FormBuilder, course_service_1.CourseService, router_1.Router])
    ], EditXPComponent);
    return EditXPComponent;
}());
exports.EditXPComponent = EditXPComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC14cC9lZGl0LXhwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZELHNCQUFvQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ3pDLGdDQUFrQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ25ELHdCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBRWxELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBVXZDO0lBWUUseUJBQW9CLFdBQXdCLEVBQVUsYUFBNEIsRUFBVSxNQUFjO1FBQXRGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTDFHLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDckIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLFNBQUksR0FBYyxFQUFFLENBQUM7SUFFd0YsQ0FBQztJQUU5RyxrQ0FBUSxHQUFSO1FBQUEsaUJBc0JDO1FBbkJDLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUM1RCxTQUFTLENBQUMsVUFBQyxJQUFTO2dCQUNuQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFFMUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FB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LENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFHRCxnQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBeElIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBQyxDQUFDLHVCQUF1QixDQUFDO1NBQ3BDLENBQUM7O3VCQUFBO0lBb0lGLHNCQUFDO0FBQUQsQ0FsSUEsQUFrSUMsSUFBQTtBQWxJWSx1QkFBZSxrQkFrSTNCLENBQUEiLCJmaWxlIjoiYXBwL2NvdXJzZS9lZGl0LXhwL2VkaXQteHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7TGV2ZWx9IGZyb20gXCIuLi8uLi9tb2RlbHMvbGV2ZWxcIjtcbmltcG9ydCB7bXNnfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHtFZGl0WHBDb3Vyc2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWRpdF94cFwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9hcGlcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2VkaXQteHAnLFxuICB0ZW1wbGF0ZVVybDogJ2VkaXQteHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6WydlZGl0LXhwLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEVkaXRYUENvbXBvbmVudCB7XG5cbiAgY291cnNlOiBDb3Vyc2U7XG5cbiAgeHBGb3JtOiBhbnk7XG5cbiAgbGV2ZWxzRm9ybTogYW55O1xuICBsZXZlbHM6IExldmVsW10gPSBbXTtcbiAgY3VycmVudF9sZXZlbDogbnVtYmVyID0gMDtcbiAgY3VycmVudF9sZXZlbEVuZDogbnVtYmVyID0gMDtcbiAgbXNnczogTWVzc2FnZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBuZ09uSW5pdCgpIHtcblxuXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvdXJzZV9pZCcpICE9IHVuZGVmaW5lZCl7XG4gICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuZ2V0Q291cnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3Vyc2VfaWQnKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5jb3Vyc2UgPSBkYXRhLmNvdXJzZTtcbiAgICAgICAgICB0aGlzLmxldmVscyA9IGRhdGEubGV2ZWxzO1xuXG4gICAgICAgICAgdGhpcy5jdXJyZW50X2xldmVsID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmxldmVsc1t0aGlzLmNvdXJzZVNlcnZpY2UubGV2ZWxzLmxlbmd0aCAtIDFdLmxldmVsX2lkO1xuICAgICAgICAgIHRoaXMuY3VycmVudF9sZXZlbEVuZCA9IHRoaXMuY291cnNlU2VydmljZS5sZXZlbHNbdGhpcy5jb3Vyc2VTZXJ2aWNlLmxldmVscy5sZW5ndGggLSAxXS5jZWlsaW5nX3hwO1xuXG4gICAgICAgICAgdGhpcy5jcmVhdGVYcEZvcm0oKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUxldmVsc0Zvcm0oKTtcblxuICAgICAgICB9LCBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgIH1lbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RlYWNoJ10pO1xuICAgIH1cblxuXG5cbiAgfVxuXG4gIGNyZWF0ZVhwRm9ybSgpIHtcbiAgICB0aGlzLnhwRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ3N0YXJ0X3hwJzogW3RoaXMuY291cnNlLnN0YXJ0X3hwLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgJ2xlYWRlcl9ib2FyZCc6IFt0aGlzLmNvdXJzZS5sZWFkZXJfYm9hcmQsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUxldmVsc0Zvcm0oKSB7XG4gICAgdGhpcy5sZXZlbHNGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnZmxvb3JfeHAnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnY2VpbGluZ194cCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgYWRkTGV2ZWwobGV2ZWw6IGFueSkge1xuXG4gICAgaWYgKGxldmVsLmNlaWxpbmdfeHAgPiBsZXZlbC5mbG9vcl94cCkge1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50X2xldmVsID09IDApIHtcbiAgICAgICAgdGhpcy5uZXdMZXZlbChsZXZlbCk7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmIChsZXZlbC5mbG9vcl94cCA+IHRoaXMuY3VycmVudF9sZXZlbEVuZCkge1xuXG4gICAgICAgICAgbGV2ZWwuZmxvb3JfeHAgPSAoK3RoaXMuY3VycmVudF9sZXZlbEVuZCArIDEpO1xuICAgICAgICAgIHRoaXMubmV3TGV2ZWwobGV2ZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3TGV2ZWwobGV2ZWw6IGFueSkge1xuICAgIHZhciBuZXdMZXZlbCA9IG5ldyBMZXZlbCgrK3RoaXMuY3VycmVudF9sZXZlbCwgbGV2ZWwuZmxvb3JfeHAsIGxldmVsLmNlaWxpbmdfeHApO1xuICAgIHRoaXMubGV2ZWxzLnB1c2gobmV3TGV2ZWwpO1xuICAgIHRoaXMuY3VycmVudF9sZXZlbEVuZCA9IGxldmVsLmNlaWxpbmdfeHA7XG4gIH1cblxuICBkZWxldGVMZXZlbChsZXZlbDogYW55KSB7XG4gICAgdGhpcy5jdXJyZW50X2xldmVsIC09IDE7XG4gICAgdGhpcy5jdXJyZW50X2xldmVsRW5kID0gbGV2ZWwuZmxvb3JfeHAgLSAxO1xuICAgIF8ucmVtb3ZlKHRoaXMubGV2ZWxzLCBsZXZlbClcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcblxuICAgIGlmICh0aGlzLmxldmVscy5sZW5ndGggPT0gMCkge1xuICAgICAgbGV0IGxldmVsID0gbmV3IExldmVsKCcxJywgJzEnLCAxMCk7XG4gICAgICB0aGlzLmxldmVscy5wdXNoKGxldmVsKVxuICAgIH1cblxuICAgIC8vIGxldCBzdHVkZW50c19sZXZlbCA9IDE7XG4gICAgLy9cbiAgICAvLyB0aGlzLmxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xuICAgIC8vICAgaWYgKF8uaW5SYW5nZSh0aGlzLnhwRm9ybS52YWx1ZS5zdGFydF94cCwgbGV2ZWwuZmxvb3JfeHAsIGxldmVsLmNlaWxpbmdfeHApKSB7XG4gICAgLy8gICAgIHN0dWRlbnRzX2xldmVsID0gbGV2ZWw7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cblxuICAgIGxldCBlZGl0WHAgPSBuZXcgRWRpdFhwQ291cnNlKFxuICAgICAgdGhpcy5jb3Vyc2UuaWQsXG4gICAgICB0aGlzLnhwRm9ybS52YWx1ZS5zdGFydF94cCxcbiAgICAgIHRoaXMueHBGb3JtLnZhbHVlLmxlYWRlcl9ib2FyZCxcbiAgICAgIHRoaXMubGV2ZWxzXG4gICAgKTtcblxuICAgIC8vY29uc29sZS5sb2coZWRpdFhwKTtcbiAgICB0aGlzLmNvdXJzZVNlcnZpY2Uuc2V0dGluZ0NvdXJzZShlZGl0WHApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFVwZGF0ZU1lc3NhZ2UoMjAwKSk7XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlTWVzc2FnZSg1MDApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgc2hvd01lc3NhZ2UobXNnOiBhbnkpe1xuICAgIHRoaXMubXNncyA9IFtdO1xuICAgIHRoaXMubXNncy5wdXNoKG1zZyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG5cbiAgY2FuY2VsKCl7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG59XG4iXX0=
