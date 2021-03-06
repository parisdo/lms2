"use strict";
var router_1 = require('@angular/router');
var signin_component_1 = require("./signin.component");
var signup_component_1 = require("./signup.component");
var auth_service_1 = require("./auth.service");
var auth_guard_service_1 = require("./auth-guard.service");
var auth_component_1 = require("./auth.component");
var forgotpassword_component_1 = require("./forgotpassword/forgotpassword.component");
var authRoutes = [{
        path: 'auth',
        component: auth_component_1.AuthComponent,
        children: [
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
            { path: 'forgotpassword', component: forgotpassword_component_1.ForgotPasswordComponent },
        ]
    }];
exports.authProviders = [
    auth_guard_service_1.AuthGuard,
    auth_service_1.AuthService
];
exports.authRouting = router_1.RouterModule.forChild(authRoutes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFFdkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFFbkQsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsbUNBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFDL0MsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MseUNBQXNDLDJDQUEyQyxDQUFDLENBQUE7QUFFbEYsSUFBTSxVQUFVLEdBQVcsQ0FBQztRQUMxQixJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSw4QkFBYTtRQUN4QixRQUFRLEVBQUU7WUFDUixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUcsU0FBUyxFQUFFLGtDQUFlLEVBQUU7WUFDL0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFHLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFHLFNBQVMsRUFBRSxrREFBdUIsRUFBRTtTQUNoRTtLQUNGLENBQUMsQ0FBQztBQUVVLHFCQUFhLEdBQUc7SUFDM0IsOEJBQVM7SUFDVCwwQkFBVztDQUNaLENBQUM7QUFJVyxtQkFBVyxHQUF3QixxQkFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvYXV0aC9hdXRoLnJvdXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSBcIi4vc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL3NpZ251cC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSBcIi4vYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0F1dGhDb21wb25lbnR9IGZyb20gXCIuL2F1dGguY29tcG9uZW50XCI7XG5pbXBvcnQge0ZvcmdvdFBhc3N3b3JkQ29tcG9uZW50fSBmcm9tIFwiLi9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5jb21wb25lbnRcIjtcblxuY29uc3QgYXV0aFJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJ2F1dGgnLFxuICBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQsXG4gIGNoaWxkcmVuOiBbXG4gICAgeyBwYXRoOiAnc2lnbmluJywgIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnc2lnbnVwJywgIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnZm9yZ290cGFzc3dvcmQnLCAgY29tcG9uZW50OiBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCB9LFxuICBdXG59XTtcblxuZXhwb3J0IGNvbnN0IGF1dGhQcm92aWRlcnMgPSBbXG4gIEF1dGhHdWFyZCxcbiAgQXV0aFNlcnZpY2Vcbl07XG5cblxuXG5leHBvcnQgY29uc3QgYXV0aFJvdXRpbmc6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoYXV0aFJvdXRlcyk7XG4iXX0=
