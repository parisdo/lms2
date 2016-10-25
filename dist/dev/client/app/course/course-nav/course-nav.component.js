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
var CourseNavComponent = (function () {
    function CourseNavComponent() {
        this.feedback = new core_1.EventEmitter();
        this.leaderboard = new core_1.EventEmitter();
        this.webboard = new core_1.EventEmitter();
    }
    CourseNavComponent.prototype.goToWebboard = function () {
        this.webboard.emit(null);
    };
    CourseNavComponent.prototype.giveAllFeedback = function () {
        this.feedback.emit(null);
    };
    CourseNavComponent.prototype.viewLeaderboard = function () {
        this.leaderboard.emit(null);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CourseNavComponent.prototype, "feedback", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CourseNavComponent.prototype, "leaderboard", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CourseNavComponent.prototype, "webboard", void 0);
    CourseNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-course-nav',
            templateUrl: 'course-nav.component.html',
            styleUrls: ['course-nav.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CourseNavComponent);
    return CourseNavComponent;
}());
exports.CourseNavComponent = CourseNavComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvY291cnNlLW5hdi9jb3Vyc2UtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBUXRFO0lBQUE7UUFFYyxhQUFRLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2pELGdCQUFXLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3BELGFBQVEsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFlL0QsQ0FBQztJQWJHLHlDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNENBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQWREO1FBQUMsYUFBTSxFQUFFOzt3REFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzsyREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzt3REFBQTtJQVZiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQzFDLENBQUM7OzBCQUFBO0lBb0JGLHlCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSwwQkFBa0IscUJBbUI5QixDQUFBIiwiZmlsZSI6ImFwcC9jb3Vyc2UvY291cnNlLW5hdi9jb3Vyc2UtbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWNvdXJzZS1uYXYnLFxuICAgIHRlbXBsYXRlVXJsOiAnY291cnNlLW5hdi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2NvdXJzZS1uYXYuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvdXJzZU5hdkNvbXBvbmVudHtcblxuICAgIEBPdXRwdXQoKSBmZWVkYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGxlYWRlcmJvYXJkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgd2ViYm9hcmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgZ29Ub1dlYmJvYXJkKCk6IGFueXtcbiAgICAgICAgdGhpcy53ZWJib2FyZC5lbWl0KG51bGwpO1xuICAgIH1cblxuICAgIGdpdmVBbGxGZWVkYmFjaygpOiBhbnl7XG4gICAgICAgIHRoaXMuZmVlZGJhY2suZW1pdChudWxsKTtcbiAgICB9XG5cbiAgICB2aWV3TGVhZGVyYm9hcmQoKTogYW55e1xuICAgICAgICB0aGlzLmxlYWRlcmJvYXJkLmVtaXQobnVsbCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==
