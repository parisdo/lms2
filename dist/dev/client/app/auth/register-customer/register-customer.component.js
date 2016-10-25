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
var RegisterCustomerComponent = (function () {
    function RegisterCustomerComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.msgs = [];
    }
    RegisterCustomerComponent.prototype.onSubmit = function (value) {
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
    RegisterCustomerComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    RegisterCustomerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-register-customer',
            templateUrl: 'register-customer.component.html',
            styleUrls: ['register-customer.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], RegisterCustomerComponent);
    return RegisterCustomerComponent;
}());
exports.RegisterCustomerComponent = RegisterCustomerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3JlZ2lzdGVyLWN1c3RvbWVyL3JlZ2lzdGVyLWN1c3RvbWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQiw2Q0FBNkMsQ0FBQyxDQUFBO0FBR3hFLGdDQUFrQix5Q0FBeUMsQ0FBQyxDQUFBO0FBUzVEO0lBT0UsbUNBQW9CLE9BQWMsRUFDZCxZQUF3QjtRQUR4QixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQVk7UUFINUMsU0FBSSxHQUFjLEVBQUUsQ0FBQztJQUtyQixDQUFDO0lBRUQsNENBQVEsR0FBUixVQUFTLEtBQVM7UUFBbEIsaUJBWUM7UUFYQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBRWhDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBRyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLFVBQVUsQ0FBQyxjQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6RCxDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0wsS0FBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBRyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDL0MsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0NBQVcsR0FBWCxVQUFZLEdBQVE7UUFBcEIsaUJBTUM7UUFMQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUF2Q0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvQyxDQUFDOztpQ0FBQTtJQW9DRixnQ0FBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksaUNBQXlCLDRCQWtDckMsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9yZWdpc3Rlci1jdXN0b21lci9yZWdpc3Rlci1jdXN0b21lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCJwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL2FwaVwiO1xuaW1wb3J0IHttc2d9IGZyb20gJy4uLy4uL3NoYXJlZC92YWxpZGF0aW9uL21lc3NhZ2Utc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3RiLXJlZ2lzdGVyLWN1c3RvbWVyJyxcbiAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci1jdXN0b21lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyZWdpc3Rlci1jdXN0b21lci5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDdXN0b21lckNvbXBvbmVudCB7XG5cbiAgc3ViOlN1YnNjcmlwdGlvbjtcbiAgYXV0aCQ6T2JzZXJ2YWJsZTxhbnk+O1xuXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKXtcblxuICB9XG5cbiAgb25TdWJtaXQodmFsdWU6YW55KXtcbiAgICB0aGlzLmF1dGgkID0gdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbnVwKHZhbHVlKTtcbiAgICAgIHRoaXMuc3ViID0gdGhpcy5hdXRoJC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuXG4gICAgICAgICAgaWYocmVzLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0UmVnaXN0ZXJNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKX0sIDIwMDApO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFJlZ2lzdGVyTWVzc2FnZSg1MDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfVxuXG4gIHNob3dNZXNzYWdlKG1zZzogYW55KXtcbiAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB0aGlzLm1zZ3MucHVzaChtc2cpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tc2dzID0gW107XG4gICAgfSwgMzAwMCk7XG4gIH1cblxufVxuIl19
