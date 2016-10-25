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
var auth_service_1 = require('../services/api/auth/auth.service');
var forms_1 = require('@angular/forms');
var storage_1 = require("../helpers/storage");
var router_1 = require("@angular/router");
var message_service_1 = require('../../shared/validation/message-service');
var AuthNavbarComponent = (function () {
    function AuthNavbarComponent(_router, _authService, formBuilder) {
        this._router = _router;
        this._authService = _authService;
        this.formBuilder = formBuilder;
        this.msgs = [];
        this.display = false;
    }
    AuthNavbarComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    AuthNavbarComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            'email': ['', [forms_1.Validators.required]],
            'password': ['', [forms_1.Validators.required]]
        });
    };
    AuthNavbarComponent.prototype.login = function () {
        var _this = this;
        this.$authService = this._authService.login(this.loginForm.value);
        this.sub = this.$authService.subscribe(function (res) {
            if (res.status === 'success') {
                storage_1.storage.setAuthToken(res.data['token']);
                storage_1.storage.setRoleToken(res.data['role']);
                storage_1.storage.setNameToken(res.data['name']);
                localStorage.setItem('id', res.data['id']);
                res.data['role'] == 'admin' ? _this.navigateTo('admin') : _this.navigateTo('vendor');
            }
            else {
                _this.clear();
                _this.showMessage(message_service_1.msg.getLoginMessage(500));
            }
        });
    };
    AuthNavbarComponent.prototype.logout = function () {
        this._authService.logout();
        this._router.navigate(['/']);
    };
    AuthNavbarComponent.prototype.toggleDialog = function () {
        this.display = !this.display;
    };
    AuthNavbarComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    AuthNavbarComponent.prototype.navigateTo = function (page) {
        var _this = this;
        this.clear();
        this.showMessage(message_service_1.msg.getLoginMessage(200));
        setTimeout(function () {
            _this._router.navigate([page]);
        }, 1000);
    };
    AuthNavbarComponent.prototype.clear = function () {
        this.toggleDialog();
        this.loginForm.reset();
    };
    AuthNavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-auth-navbar',
            templateUrl: 'auth-navbar.component.html',
            styleUrls: ['auth-navbar.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, forms_1.FormBuilder])
    ], AuthNavbarComponent);
    return AuthNavbarComponent;
}());
exports.AuthNavbarComponent = AuthNavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aC9hdXRoLW5hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCw2QkFBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUU5RCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx3QkFBc0Isb0JBQW9CLENBQUMsQ0FBQTtBQUMzQyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV2QyxnQ0FBa0IseUNBQXlDLENBQUMsQ0FBQTtBQVM1RDtJQVNFLDZCQUNVLE9BQWMsRUFBVSxZQUF5QixFQUFVLFdBQXdCO1FBQW5GLFlBQU8sR0FBUCxPQUFPLENBQU87UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSjdGLFNBQUksR0FBYyxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUl6QixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsd0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBSyxHQUFMO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDcEMsVUFBQyxHQUFRO1lBQ1AsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixpQkFBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLGlCQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsaUJBQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRixDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0wsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLEtBQUksQ0FBQyxXQUFXLENBQUMscUJBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFHRCwwQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxHQUFRO1FBQXBCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLElBQVk7UUFBdkIsaUJBUUM7UUFOQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFM0MsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCxtQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQS9FSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7OzJCQUFBO0lBNEVGLDBCQUFDO0FBQUQsQ0ExRUEsQUEwRUMsSUFBQTtBQTFFWSwyQkFBbUIsc0JBMEUvQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvYXV0aC9hdXRoLW5hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2FwaS9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3IsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSBcIi4uL2hlbHBlcnMvc3RvcmFnZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcInByaW1lbmcvY29tcG9uZW50cy9jb21tb24vYXBpXCI7XG5pbXBvcnQge21zZ30gZnJvbSAnLi4vLi4vc2hhcmVkL3ZhbGlkYXRpb24vbWVzc2FnZS1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndGItYXV0aC1uYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJ2F1dGgtbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2F1dGgtbmF2YmFyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBsb2dpbkZvcm06IGFueTtcbiAgc3ViOiBTdWJzY3JpcHRpb247XG4gICRhdXRoU2VydmljZTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xuICBkaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gIH1cblxuICBjcmVhdGVGb3JtKCkge1xuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnZW1haWwnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAncGFzc3dvcmQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIHRoaXMuJGF1dGhTZXJ2aWNlID0gdGhpcy5fYXV0aFNlcnZpY2UubG9naW4odGhpcy5sb2dpbkZvcm0udmFsdWUpO1xuICAgIHRoaXMuc3ViID0gdGhpcy4kYXV0aFNlcnZpY2Uuc3Vic2NyaWJlKFxuICAgICAgKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICBzdG9yYWdlLnNldEF1dGhUb2tlbihyZXMuZGF0YVsndG9rZW4nXSk7XG4gICAgICAgICAgc3RvcmFnZS5zZXRSb2xlVG9rZW4ocmVzLmRhdGFbJ3JvbGUnXSk7XG4gICAgICAgICAgc3RvcmFnZS5zZXROYW1lVG9rZW4ocmVzLmRhdGFbJ25hbWUnXSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgcmVzLmRhdGFbJ2lkJ10pO1xuICAgICAgICAgIHJlcy5kYXRhWydyb2xlJ10gPT0gJ2FkbWluJyA/IHRoaXMubmF2aWdhdGVUbygnYWRtaW4nKTogdGhpcy5uYXZpZ2F0ZVRvKCd2ZW5kb3InKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRMb2dpbk1lc3NhZ2UoNTAwKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0KCl7XG4gICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgfVxuXG5cbiAgdG9nZ2xlRGlhbG9nKCkge1xuICAgIHRoaXMuZGlzcGxheSA9ICF0aGlzLmRpc3BsYXk7XG4gIH1cblxuICBzaG93TWVzc2FnZShtc2c6IGFueSl7XG4gICAgdGhpcy5tc2dzID0gW107XG4gICAgdGhpcy5tc2dzLnB1c2gobXNnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubXNncyA9IFtdO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgbmF2aWdhdGVUbyhwYWdlOiBzdHJpbmcpe1xuXG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldExvZ2luTWVzc2FnZSgyMDApKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtwYWdlXSk7XG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgdGhpcy50b2dnbGVEaWFsb2coKTtcbiAgICB0aGlzLmxvZ2luRm9ybS5yZXNldCgpO1xuICB9XG5cbn1cbiJdfQ==
