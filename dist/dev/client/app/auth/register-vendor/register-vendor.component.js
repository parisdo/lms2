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
var auth_service_1 = require('../../shared/services/api/auth/auth.service');
var message_service_1 = require('../../shared/validation/message-service');
var RegisterVendorComponent = (function () {
    function RegisterVendorComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.msgs = [];
    }
    RegisterVendorComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.auth$ = this._authService.signup(value);
        this.sub = this.auth$.subscribe(function (res) {
            if (res.status == 'success') {
                _this.showMessage(message_service_1.msg.getRegisterMessage(200));
                setTimeout(function () { _this._router.navigate(['/']); }, 2000);
            }
            else {
                _this.showMessage(message_service_1.msg.getRegisterMessage(500));
            }
        }, function (error) { return console.log(error); });
    };
    RegisterVendorComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    RegisterVendorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-register-vendor',
            templateUrl: 'register-vendor.component.html',
            styleUrls: ['register-vendor.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], RegisterVendorComponent);
    return RegisterVendorComponent;
}());
exports.RegisterVendorComponent = RegisterVendorComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3JlZ2lzdGVyLXZlbmRvci9yZWdpc3Rlci12ZW5kb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsNkJBQTBCLDZDQUE2QyxDQUFDLENBQUE7QUFFeEUsZ0NBQWtCLHlDQUF5QyxDQUFDLENBQUE7QUFVNUQ7SUFNRSxpQ0FBb0IsT0FBYyxFQUNkLFlBQXdCO1FBRHhCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUg1QyxTQUFJLEdBQWMsRUFBRSxDQUFDO0lBSXJCLENBQUM7SUFFRCwwQ0FBUSxHQUFSLFVBQVMsS0FBUztRQUFsQixpQkFZQztRQVhDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFFaEMsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUMxQixLQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFHLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsVUFBVSxDQUFDLGNBQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pELENBQUM7WUFBQSxJQUFJLENBQUMsQ0FBQztnQkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFHLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUMvQyxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksR0FBUTtRQUFwQixpQkFNQztRQUxDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXJDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7OytCQUFBO0lBa0NGLDhCQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtBQWhDWSwrQkFBdUIsMEJBZ0NuQyxDQUFBIiwiZmlsZSI6ImFwcC9hdXRoL3JlZ2lzdGVyLXZlbmRvci9yZWdpc3Rlci12ZW5kb3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkvYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttc2d9IGZyb20gJy4uLy4uL3NoYXJlZC92YWxpZGF0aW9uL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCJwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL2FwaVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd0Yi1yZWdpc3Rlci12ZW5kb3InLFxuICB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLXZlbmRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyZWdpc3Rlci12ZW5kb3IuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVmVuZG9yQ29tcG9uZW50IHtcblxuICBzdWI6U3Vic2NyaXB0aW9uO1xuICBhdXRoJDpPYnNlcnZhYmxlPGFueT47XG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKXtcbiAgfVxuXG4gIG9uU3VibWl0KHZhbHVlOmFueSl7XG4gICAgdGhpcy5hdXRoJCA9IHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ251cCh2YWx1ZSk7XG4gICAgdGhpcy5zdWIgPSB0aGlzLmF1dGgkLnN1YnNjcmliZSgocmVzKSA9PiB7XG5cbiAgICAgICAgaWYocmVzLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFJlZ2lzdGVyTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pfSwgMjAwMCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRSZWdpc3Rlck1lc3NhZ2UoNTAwKSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH1cblxuICBzaG93TWVzc2FnZShtc2c6IGFueSl7XG4gICAgdGhpcy5tc2dzID0gW107XG4gICAgdGhpcy5tc2dzLnB1c2gobXNnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubXNncyA9IFtdO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbn1cbiJdfQ==
