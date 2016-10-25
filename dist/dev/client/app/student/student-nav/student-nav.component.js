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
var router_1 = require("@angular/router");
var StudentNavComponent = (function () {
    function StudentNavComponent(router) {
        this.router = router;
    }
    StudentNavComponent.prototype.gotoWebboard = function () {
        this.router.navigate(["/webboard/post"]);
    };
    StudentNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'student-nav',
            templateUrl: 'student-nav.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], StudentNavComponent);
    return StudentNavComponent;
}());
exports.StudentNavComponent = StudentNavComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQtbmF2L3N0dWRlbnQtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBUXZDO0lBRUksNkJBQXFCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUUsQ0FBQztJQUN0QywwQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQVZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNEJBQTRCO1NBQzVDLENBQUM7OzJCQUFBO0lBT0YsMEJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLDJCQUFtQixzQkFNL0IsQ0FBQSIsImZpbGUiOiJhcHAvc3R1ZGVudC9zdHVkZW50LW5hdi9zdHVkZW50LW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3N0dWRlbnQtbmF2JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3N0dWRlbnQtbmF2LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50TmF2Q29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cbiAgICBnb3RvV2ViYm9hcmQoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Avd2ViYm9hcmQvcG9zdGBdKTtcbiAgICB9XG59XG4iXX0=
