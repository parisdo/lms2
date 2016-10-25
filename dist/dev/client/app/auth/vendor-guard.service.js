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
var router_1 = require('@angular/router');
var auth_service_1 = require("../shared/services/api/auth/auth.service");
var VendorGuard = (function () {
    function VendorGuard(_authService, router) {
        this._authService = _authService;
        this.router = router;
        this.login = false;
        this.role = false;
    }
    VendorGuard.prototype.canActivate = function (next, state) {
        this.isLoggedIn();
        this.checkRole();
        if (this.login && this.role) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    };
    VendorGuard.prototype.isLoggedIn = function () {
        this.login = this._authService.isLoggedIn();
    };
    VendorGuard.prototype.checkRole = function () {
        this.role = this._authService.checkRole('vendor');
    };
    VendorGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], VendorGuard);
    return VendorGuard;
}());
exports.VendorGuard = VendorGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3ZlbmRvci1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsdUJBS1UsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qiw2QkFBMEIsMENBQTBDLENBQUMsQ0FBQTtBQUdyRTtJQUNFLHFCQUFvQixZQUF5QixFQUFVLE1BQWM7UUFBakQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBR3JFLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsU0FBSSxHQUFZLEtBQUssQ0FBQztJQUh0QixDQUFDO0lBS0QsaUNBQVcsR0FBWCxVQUFZLElBQTRCLEVBQzVCLEtBQTBCO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUEzQkg7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQTZCYixrQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksbUJBQVcsY0E0QnZCLENBQUEiLCJmaWxlIjoiYXBwL2F1dGgvdmVuZG9yLWd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuQWN0aXZhdGUsXG4gIFJvdXRlcixcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgUm91dGVyU3RhdGVTbmFwc2hvdFxufSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkvYXV0aC9hdXRoLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlbmRvckd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIGxvZ2luOiBib29sZWFuID0gZmFsc2U7XG4gIHJvbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgICAgICAgICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIHRoaXMuaXNMb2dnZWRJbigpO1xuICAgIHRoaXMuY2hlY2tSb2xlKCk7XG5cbiAgICBpZiAodGhpcy5sb2dpbiAmJiB0aGlzLnJvbGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzTG9nZ2VkSW4oKSB7XG4gICAgdGhpcy5sb2dpbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgfVxuXG4gIGNoZWNrUm9sZSgpIHtcbiAgICB0aGlzLnJvbGUgPSB0aGlzLl9hdXRoU2VydmljZS5jaGVja1JvbGUoJ3ZlbmRvcicpO1xuICB9XG5cbn1cbiJdfQ==
