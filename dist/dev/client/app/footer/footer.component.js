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
var FooterComponent = (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.gotoClass = function () {
        this.router.navigate(['/teach']);
    };
    FooterComponent.prototype.goBack = function () {
        window.history.back();
    };
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-footer',
            templateUrl: 'footer.component.html',
            styleUrls: ['footer.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBUXZDO0lBRUkseUJBQW1CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUVyQyxtQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBaEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7O3VCQUFBO0lBYUYsc0JBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLHVCQUFlLGtCQVkzQixDQUFBIiwiZmlsZSI6ImFwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1mb290ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZm9vdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gICAgZ290b0NsYXNzKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RlYWNoJ10pO1xuICAgIH1cblxuICAgIGdvQmFjaygpOiB2b2lkIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cblxufVxuIl19
