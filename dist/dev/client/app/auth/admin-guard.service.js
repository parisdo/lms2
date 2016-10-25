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
var AdminGuard = (function () {
    function AdminGuard(_authService, router) {
        this._authService = _authService;
        this.router = router;
        this.login = false;
        this.role = false;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        this.isLoggedIn();
        this.checkRole();
        if (this.login && this.role) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    };
    AdminGuard.prototype.isLoggedIn = function () {
        this.login = this._authService.isLoggedIn();
    };
    AdminGuard.prototype.checkRole = function () {
        this.role = this._authService.checkRole('admin');
    };
    AdminGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AdminGuard);
    return AdminGuard;
}());
exports.AdminGuard = AdminGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2FkbWluLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxQyxlQUFlLENBQUMsQ0FBQTtBQUNyRCx1QkFLVSxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVCLDZCQUEwQiwwQ0FBMEMsQ0FBQyxDQUFBO0FBR3JFO0lBQ0Usb0JBQW9CLFlBQXlCLEVBQVUsTUFBYztRQUFqRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFHckUsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixTQUFJLEdBQVksS0FBSyxDQUFDO0lBSHRCLENBQUM7SUFLRCxnQ0FBVyxHQUFYLFVBQVksSUFBNEIsRUFDNUIsS0FBMEI7UUFDcEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQTNCSDtRQUFDLGlCQUFVLEVBQUU7O2tCQUFBO0lBNkJiLGlCQUFDO0FBQUQsQ0E1QkEsQUE0QkMsSUFBQTtBQTVCWSxrQkFBVSxhQTRCdEIsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9hZG1pbi1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbkFjdGl2YXRlLFxuICBSb3V0ZXIsXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIFJvdXRlclN0YXRlU25hcHNob3Rcbn0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvYXBpL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZG1pbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIGxvZ2luOiBib29sZWFuID0gZmFsc2U7XG4gIHJvbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgICAgICAgICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIHRoaXMuaXNMb2dnZWRJbigpO1xuICAgIHRoaXMuY2hlY2tSb2xlKCk7XG5cbiAgICBpZiAodGhpcy5sb2dpbiAmJiB0aGlzLnJvbGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzTG9nZ2VkSW4oKSB7XG4gICAgdGhpcy5sb2dpbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgfVxuXG4gIGNoZWNrUm9sZSgpIHtcbiAgICB0aGlzLnJvbGUgPSB0aGlzLl9hdXRoU2VydmljZS5jaGVja1JvbGUoJ2FkbWluJyk7XG4gIH1cblxufVxuIl19
