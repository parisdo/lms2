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
var edit_xp_1 = require("../../models/edit_xp");
var EditXPComponent = (function () {
    function EditXPComponent(formBuilder, courseService) {
        this.formBuilder = formBuilder;
        this.courseService = courseService;
        this.levels = [];
        this.current_level = 0;
        this.current_levelEnd = 0;
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
        var students_level;
        this.levels.forEach(function (level) {
            if (_.inRange(_this.xpForm.value.start_xp, level.floor_xp, level.ceiling_xp)) {
                students_level = level;
            }
        });
        var editXp = new edit_xp_1.EditXpCourse(this.course.id, this.xpForm.value.start_xp, this.xpForm.value.leader_board, this.levels, students_level);
        this.courseService.settingCourse(editXp)
            .subscribe(function (data) {
            console.log(data);
            console.log(data.status);
        }, function (error) { return console.log(error); });
    };
    EditXPComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditXPComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-xp',
            templateUrl: 'edit-xp.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, course_service_1.CourseService])
    ], EditXPComponent);
    return EditXPComponent;
}());
exports.EditXPComponent = EditXPComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC14cC9lZGl0LXhwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZELHNCQUFvQixvQkFBb0IsQ0FBQyxDQUFBO0FBR3pDLHdCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBUWxEO0lBV0kseUJBQW9CLFdBQXdCLEVBQ3hCLGFBQTRCO1FBRDVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTGhELFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDckIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO0lBR3FCLENBQUM7SUFFbkQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFHeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzlGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBRW5HLElBQUksQ0FBQyxZQUFZLEVB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TSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsSUFBSSxDQUFDLE1BQU0sRUFDWCxjQUFjLENBQ2pCLENBQUM7UUFHRixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7YUFDbkMsU0FBUyxDQUNOLFVBQUMsSUFBUztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDaEMsQ0FBQztJQUNWLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBNUdMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7O3VCQUFBO0lBeUdGLHNCQUFDO0FBQUQsQ0F2R0EsQUF1R0MsSUFBQTtBQXZHWSx1QkFBZSxrQkF1RzNCLENBQUEiLCJmaWxlIjoiYXBwL2NvdXJzZS9lZGl0LXhwL2VkaXQteHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7TGV2ZWx9IGZyb20gXCIuLi8uLi9tb2RlbHMvbGV2ZWxcIjtcbmRlY2xhcmUgdmFyIF86IGFueTtcblxuaW1wb3J0IHtFZGl0WHBDb3Vyc2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWRpdF94cFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZWRpdC14cCcsXG4gICAgdGVtcGxhdGVVcmw6ICdlZGl0LXhwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBFZGl0WFBDb21wb25lbnQge1xuXG4gICAgY291cnNlOiBDb3Vyc2U7XG5cbiAgICB4cEZvcm06IGFueTtcblxuICAgIGxldmVsc0Zvcm06IGFueTtcbiAgICBsZXZlbHM6IExldmVsW10gPSBbXTtcbiAgICBjdXJyZW50X2xldmVsOiBudW1iZXIgPSAwO1xuICAgIGN1cnJlbnRfbGV2ZWxFbmQ6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2Upe31cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuY291cnNlID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmNvdXJzZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvdXJzZSk7XG5cbiAgICAgICAgdGhpcy5jb3Vyc2UuaWQgPSB0aGlzLmNvdXJzZVNlcnZpY2UuY291cnNlLmlkO1xuICAgICAgICB0aGlzLmxldmVscyA9IHRoaXMuY291cnNlU2VydmljZS5sZXZlbHM7XG4gICAgICAgIHRoaXMuY3VycmVudF9sZXZlbCA9IHRoaXMuY291cnNlU2VydmljZS5sZXZlbHNbdGhpcy5jb3Vyc2VTZXJ2aWNlLmxldmVscy5sZW5ndGggLSAxXS5sZXZlbF9pZDtcbiAgICAgICAgdGhpcy5jdXJyZW50X2xldmVsRW5kID0gdGhpcy5jb3Vyc2VTZXJ2aWNlLmxldmVsc1t0aGlzLmNvdXJzZVNlcnZpY2UubGV2ZWxzLmxlbmd0aCAtIDFdLmNlaWxpbmdfeHA7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVYcEZvcm0oKTtcbiAgICAgICAgdGhpcy5jcmVhdGVMZXZlbHNGb3JtKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlWHBGb3JtKCl7XG4gICAgICAgIHRoaXMueHBGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAnc3RhcnRfeHAnOiAgIFt0aGlzLmNvdXJzZS5zdGFydF94cCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgICdsZWFkZXJfYm9hcmQnOiBbdGhpcy5jb3Vyc2UubGVhZGVyX2JvYXJkLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUxldmVsc0Zvcm0oKXtcbiAgICAgICAgdGhpcy5sZXZlbHNGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAnZmxvb3JfeHAnOiAgIFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgICdjZWlsaW5nX3hwJzogICAgIFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRMZXZlbChsZXZlbDogYW55KXtcblxuICAgICAgICBpZihsZXZlbC5jZWlsaW5nX3hwID4gbGV2ZWwuZmxvb3JfeHApe1xuXG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRfbGV2ZWwgPT0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdMZXZlbChsZXZlbCk7XG4gICAgICAgICAgICB9ZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZihsZXZlbC5mbG9vcl94cCA+IHRoaXMuY3VycmVudF9sZXZlbEVuZCl7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwuZmxvb3JfeHAgPSAoK3RoaXMuY3VycmVudF9sZXZlbEVuZCArIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0xldmVsKGxldmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdMZXZlbChsZXZlbDogYW55KXtcbiAgICAgICAgdmFyIG5ld0xldmVsID0gbmV3IExldmVsKCsrdGhpcy5jdXJyZW50X2xldmVsLCBsZXZlbC5mbG9vcl94cCwgbGV2ZWwuY2VpbGluZ194cCk7XG4gICAgICAgIHRoaXMubGV2ZWxzLnB1c2gobmV3TGV2ZWwpO1xuICAgICAgICB0aGlzLmN1cnJlbnRfbGV2ZWxFbmQgPSBsZXZlbC5jZWlsaW5nX3hwO1xuICAgIH1cblxuICAgIGRlbGV0ZUxldmVsKGxldmVsOiBhbnkpe1xuICAgICAgICB0aGlzLmN1cnJlbnRfbGV2ZWwgLT0gMTtcbiAgICAgICAgdGhpcy5jdXJyZW50X2xldmVsRW5kID0gbGV2ZWwuZmxvb3JfeHAgLSAxO1xuICAgICAgICBfLnJlbW92ZSh0aGlzLmxldmVscywgbGV2ZWwpXG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuXG4gICAgICAgIGxldCBzdHVkZW50c19sZXZlbDogYW55O1xuXG4gICAgICAgIHRoaXMubGV2ZWxzLmZvckVhY2goKGxldmVsKSA9PiB7XG4gICAgICAgICAgICBpZihfLmluUmFuZ2UodGhpcy54cEZvcm0udmFsdWUuc3RhcnRfeHAsIGxldmVsLmZsb29yX3hwLCBsZXZlbC5jZWlsaW5nX3hwKSApe1xuICAgICAgICAgICAgICAgIHN0dWRlbnRzX2xldmVsID0gbGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgbGV0IGVkaXRYcCA9IG5ldyBFZGl0WHBDb3Vyc2UoXG4gICAgICAgICAgICB0aGlzLmNvdXJzZS5pZCxcbiAgICAgICAgICAgIHRoaXMueHBGb3JtLnZhbHVlLnN0YXJ0X3hwLFxuICAgICAgICAgICAgdGhpcy54cEZvcm0udmFsdWUubGVhZGVyX2JvYXJkLFxuICAgICAgICAgICAgdGhpcy5sZXZlbHMsXG4gICAgICAgICAgICBzdHVkZW50c19sZXZlbFxuICAgICAgICApO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coZWRpdFhwKTtcbiAgICAgICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLnNldHRpbmdDb3Vyc2UoZWRpdFhwKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKXtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbn1cbiJdfQ==
