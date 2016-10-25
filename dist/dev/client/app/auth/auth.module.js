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
                signup_component_1.SignupComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFHOUMsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFjL0M7SUFBQTtJQUF5QixDQUFDO0lBWDFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLDRCQUFZO2dCQUNaLDBCQUFXO2FBQ1o7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2Ysa0NBQWU7YUFDaEI7U0FDRixDQUFDOztrQkFBQTtJQUN1QixpQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixrQkFBVSxhQUFHLENBQUEiLCJmaWxlIjoiYXBwL2F1dGgvYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQge2F1dGhSb3V0aW5nfSBmcm9tIFwiLi9hdXRoLnJvdXRpbmdcIjtcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tIFwiLi9zaWduaW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSBcIi4vc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoLmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgYXV0aFJvdXRpbmcsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEF1dGhDb21wb25lbnQsXG4gICAgU2lnbmluQ29tcG9uZW50LFxuICAgIFNpZ251cENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiJdfQ==
