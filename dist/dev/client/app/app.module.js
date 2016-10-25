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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var home_module_1 = require('./home/home.module');
var shared_module_1 = require('./shared/shared.module');
var auth_module_1 = require("./auth/auth.module");
var teach_module_1 = require("./teach/teach.module");
var course_module_1 = require("./course/course.module");
var student_module_1 = require("./student/student.module");
var webboard_module_1 = require("./webboard/webboard.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                shared_module_1.SharedModule.forRoot(),
                home_module_1.HomeModule,
                auth_module_1.AuthModule,
                teach_module_1.TeachModule,
                course_module_1.CourseModule,
                student_module_1.StudentModule,
                webboard_module_1.WebboardModule
            ],
            declarations: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFHaEQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsMkJBQXVCLGNBQWMsQ0FBQyxDQUFBO0FBRXRDLDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3RELDRCQUF5QixvQkFBb0IsQ0FBQyxDQUFBO0FBQzlDLDZCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2pELDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELCtCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3ZELGdDQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBc0IxRDtJQUFBO0lBQXdCLENBQUM7SUFwQnpCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGdDQUFhO2dCQUNiLG9CQUFPO2dCQUNQLDRCQUFZLENBQUMsT0FBTyxFQUFFO2dCQUN0Qix3QkFBVTtnQkFDVix3QkFBVTtnQkFDViwwQkFBVztnQkFDWCw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixnQ0FBYzthQUNmO1lBQ0QsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQWE7b0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7O2lCQUFBO0lBRXNCLGdCQUFDO0FBQUQsQ0FBeEIsQUFBeUIsSUFBQTtBQUFaLGlCQUFTLFlBQUcsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgcm91dGluZ30gZnJvbSAnLi9hcHAucm91dGVzJztcblxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7QXV0aE1vZHVsZX0gZnJvbSBcIi4vYXV0aC9hdXRoLm1vZHVsZVwiO1xuaW1wb3J0IHtUZWFjaE1vZHVsZX0gZnJvbSBcIi4vdGVhY2gvdGVhY2gubW9kdWxlXCI7XG5pbXBvcnQge0NvdXJzZU1vZHVsZX0gZnJvbSBcIi4vY291cnNlL2NvdXJzZS5tb2R1bGVcIjtcbmltcG9ydCB7U3R1ZGVudE1vZHVsZX0gZnJvbSBcIi4vc3R1ZGVudC9zdHVkZW50Lm1vZHVsZVwiO1xuaW1wb3J0IHtXZWJib2FyZE1vZHVsZX0gZnJvbSBcIi4vd2ViYm9hcmQvd2ViYm9hcmQubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIHJvdXRpbmcsXG4gICAgU2hhcmVkTW9kdWxlLmZvclJvb3QoKSxcbiAgICBIb21lTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUsXG4gICAgVGVhY2hNb2R1bGUsXG4gICAgQ291cnNlTW9kdWxlLFxuICAgIFN0dWRlbnRNb2R1bGUsXG4gICAgV2ViYm9hcmRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXG4gICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG4gIH1dLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=
