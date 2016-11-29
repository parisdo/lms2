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
var shared_module_1 = require("../shared/shared.module");
var auth_routing_1 = require("./auth.routing");
var signin_component_1 = require("./signin.component");
var signup_component_1 = require("./signup.component");
var auth_component_1 = require("./auth.component");
var forgotpassword_component_1 = require("./forgotpassword/forgotpassword.component");
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                auth_routing_1.authRouting,
            ],
            declarations: [
                auth_component_1.AuthComponent,
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                forgotpassword_component_1.ForgotPasswordComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFHOUMsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MseUNBQXNDLDJDQUEyQyxDQUFDLENBQUE7QUFlbEY7SUFBQTtJQUF5QixDQUFDO0lBWjFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLDRCQUFZO2dCQUNaLDBCQUFXO2FBQ1o7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2Ysa0RBQXVCO2FBQ3hCO1NBQ0YsQ0FBQzs7a0JBQUE7SUFDdUIsaUJBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsa0JBQVUsYUFBRyxDQUFBIiwiZmlsZSI6ImFwcC9hdXRoL2F1dGgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHthdXRoUm91dGluZ30gZnJvbSBcIi4vYXV0aC5yb3V0aW5nXCI7XG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSBcIi4vc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL3NpZ251cC5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aENvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9yZ290UGFzc3dvcmRDb21wb25lbnR9IGZyb20gXCIuL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgYXV0aFJvdXRpbmcsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEF1dGhDb21wb25lbnQsXG4gICAgU2lnbmluQ29tcG9uZW50LFxuICAgIFNpZ251cENvbXBvbmVudCxcbiAgICBGb3Jnb3RQYXNzd29yZENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiJdfQ==
