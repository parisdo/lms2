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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var router_1 = require('@angular/router');
var ng2_imageupload_1 = require("ng2-imageupload");
var growl_1 = require("primeng/components/growl/growl");
var header_component_1 = require("../header/header.component");
var control_messages_component_1 = require("./control-messages.component");
var footer_component_1 = require("../footer/footer.component");
var validation_service_1 = require("../services/validation.service");
var app_routes_1 = require("../app.routes");
var teacher_service_1 = require("../services/teacher.service");
var teach_nav_component_1 = require("../teach/teach-nav/teach-nav.component");
var course_service_1 = require("../services/course.service");
var filterdata_pipe_1 = require("./pipes/filterdata.pipe");
var student_service_1 = require("../services/student.service");
var progressbar_1 = require("primeng/components/progressbar/progressbar");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [
                app_routes_1.appRoutingProviders,
                validation_service_1.ValidationService,
                teacher_service_1.TeacherService,
                course_service_1.CourseService,
                student_service_1.StudentService
            ]
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                growl_1.GrowlModule,
                progressbar_1.ProgressBarModule,
                ng2_imageupload_1.ImageUploadModule
            ],
            declarations: [
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                teach_nav_component_1.TeachNavComponent,
                control_messages_component_1.ControlMessagesComponent,
                filterdata_pipe_1.FilterData
            ],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                growl_1.GrowlModule,
                progressbar_1.ProgressBarModule,
                ng2_imageupload_1.ImageUploadModule,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                teach_nav_component_1.TeachNavComponent,
                control_messages_component_1.ControlMessagesComponent,
                filterdata_pipe_1.FilterData
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUErQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2hFLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUV0RCx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUdsRCxzQkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUczRCxpQ0FBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUMzRCwyQ0FBdUMsOEJBQThCLENBQUMsQ0FBQTtBQUN0RSxpQ0FBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUMzRCxtQ0FBZ0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNqRSwyQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsZ0NBQTZCLDZCQUE2QixDQUFDLENBQUE7QUFDM0Qsb0NBQWdDLHdDQUF3QyxDQUFDLENBQUE7QUFDekUsK0JBQTRCLDRCQUE0QixDQUFDLENBQUE7QUFDekQsZ0NBQXlCLHlCQUF5QixDQUFDLENBQUE7QUFDbkQsZ0NBQTZCLDZCQUE2QixDQUFDLENBQUE7QUFDM0QsNEJBQWdDLDRDQUE0QyxDQUFDLENBQUE7QUF3QzdFO0lBQUE7SUFhQSxDQUFDO0lBWlEsb0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxnQ0FBbUI7Z0JBQ25CLHNDQUFpQjtnQkFDakIsZ0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2IsZ0NBQWM7YUFDZjtTQUNGLENBQUM7SUFDSixDQUFDO0lBbERIO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLHFCQUFZO2dCQUNaLDJCQUFtQjtnQkFDbkIsbUJBQVc7Z0JBQ1gsaUJBQVU7Z0JBQ1Ysa0JBQVc7Z0JBQ1gsbUJBQVc7Z0JBQ1gsK0JBQWlCO2dCQUNqQixtQ0FBaUI7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2YsdUNBQWlCO2dCQUNqQixxREFBd0I7Z0JBQ3hCLDRCQUFVO2FBQ1g7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AscUJBQVk7Z0JBQ1osbUJBQVc7Z0JBQ1gscUJBQVk7Z0JBQ1osMkJBQW1CO2dCQUNuQixtQkFBVztnQkFDWCxpQkFBVTtnQkFDVixrQkFBVztnQkFDWCxtQkFBVztnQkFDWCwrQkFBaUI7Z0JBQ2pCLG1DQUFpQjtnQkFFakIsa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2YsdUNBQWlCO2dCQUNqQixxREFBd0I7Z0JBQ3hCLDRCQUFVO2FBQ1g7U0FDRixDQUFDOztvQkFBQTtJQWNGLG1CQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxvQkFBWSxlQWF4QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0pzb25wTW9kdWxlLCBIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtJbWFnZVVwbG9hZE1vZHVsZX0gZnJvbSBcIm5nMi1pbWFnZXVwbG9hZFwiO1xuXG4vL1ByaW1lTkcgTW9kdWxlXG5pbXBvcnQge0dyb3dsTW9kdWxlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2dyb3dsL2dyb3dsXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcblxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb250cm9sTWVzc2FnZXNDb21wb25lbnR9IGZyb20gXCIuL2NvbnRyb2wtbWVzc2FnZXMuY29tcG9uZW50XCI7XG5pbXBvcnQge0Zvb3RlckNvbXBvbmVudH0gZnJvbSBcIi4uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge2FwcFJvdXRpbmdQcm92aWRlcnN9IGZyb20gXCIuLi9hcHAucm91dGVzXCI7XG5pbXBvcnQge1RlYWNoZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdGVhY2hlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1RlYWNoTmF2Q29tcG9uZW50fSBmcm9tIFwiLi4vdGVhY2gvdGVhY2gtbmF2L3RlYWNoLW5hdi5jb21wb25lbnRcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpbHRlckRhdGF9IGZyb20gXCIuL3BpcGVzL2ZpbHRlcmRhdGEucGlwZVwiO1xuaW1wb3J0IHtTdHVkZW50U2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0dWRlbnQuc2VydmljZVwiO1xuaW1wb3J0IHtQcm9ncmVzc0Jhck1vZHVsZX0gZnJvbSBcInByaW1lbmcvY29tcG9uZW50cy9wcm9ncmVzc2Jhci9wcm9ncmVzc2JhclwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgSnNvbnBNb2R1bGUsXG4gICAgR3Jvd2xNb2R1bGUsXG4gICAgUHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgSW1hZ2VVcGxvYWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBUZWFjaE5hdkNvbXBvbmVudCxcbiAgICBDb250cm9sTWVzc2FnZXNDb21wb25lbnQsXG4gICAgRmlsdGVyRGF0YVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgSnNvbnBNb2R1bGUsXG4gICAgR3Jvd2xNb2R1bGUsXG4gICAgUHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgSW1hZ2VVcGxvYWRNb2R1bGUsXG5cbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIFRlYWNoTmF2Q29tcG9uZW50LFxuICAgIENvbnRyb2xNZXNzYWdlc0NvbXBvbmVudCxcbiAgICBGaWx0ZXJEYXRhXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaGFyZWRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgYXBwUm91dGluZ1Byb3ZpZGVycyxcbiAgICAgICAgVmFsaWRhdGlvblNlcnZpY2UsXG4gICAgICAgIFRlYWNoZXJTZXJ2aWNlLFxuICAgICAgICBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICBTdHVkZW50U2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
