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
var webboard_service_1 = require("../services/webboard.service");
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
                student_service_1.StudentService,
                webboard_service_1.WebboardService
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUErQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2hFLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUV0RCx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUdsRCxzQkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUczRCxpQ0FBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUMzRCwyQ0FBdUMsOEJBQThCLENBQUMsQ0FBQTtBQUN0RSxpQ0FBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUMzRCxtQ0FBZ0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNqRSwyQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsZ0NBQTZCLDZCQUE2QixDQUFDLENBQUE7QUFDM0Qsb0NBQWdDLHdDQUF3QyxDQUFDLENBQUE7QUFDekUsK0JBQTRCLDRCQUE0QixDQUFDLENBQUE7QUFDekQsZ0NBQXlCLHlCQUF5QixDQUFDLENBQUE7QUFDbkQsZ0NBQTZCLDZCQUE2QixDQUFDLENBQUE7QUFDM0QsNEJBQWdDLDRDQUE0QyxDQUFDLENBQUE7QUFDN0UsaUNBQThCLDhCQUE4QixDQUFDLENBQUE7QUF3QzdEO0lBQUE7SUFjQSxDQUFDO0lBYlEsb0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxnQ0FBbUI7Z0JBQ25CLHNDQUFpQjtnQkFDakIsZ0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2Qsa0NBQWU7YUFDaEI7U0FDRixDQUFDO0lBQ0osQ0FBQztJQW5ESDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixxQkFBWTtnQkFDWiwyQkFBbUI7Z0JBQ25CLG1CQUFXO2dCQUNYLGlCQUFVO2dCQUNWLGtCQUFXO2dCQUNYLG1CQUFXO2dCQUNYLCtCQUFpQjtnQkFDakIsbUNBQWlCO2FBQ2xCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLHVDQUFpQjtnQkFDakIscURBQXdCO2dCQUN4Qiw0QkFBVTthQUNYO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLG1CQUFXO2dCQUNYLHFCQUFZO2dCQUNaLDJCQUFtQjtnQkFDbkIsbUJBQVc7Z0JBQ1gsaUJBQVU7Z0JBQ1Ysa0JBQVc7Z0JBQ1gsbUJBQVc7Z0JBQ1gsK0JBQWlCO2dCQUNqQixtQ0FBaUI7Z0JBRWpCLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLHVDQUFpQjtnQkFDakIscURBQXdCO2dCQUN4Qiw0QkFBVTthQUNYO1NBQ0YsQ0FBQzs7b0JBQUE7SUFlRixtQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksb0JBQVksZUFjeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtKc29ucE1vZHVsZSwgSHR0cE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7SW1hZ2VVcGxvYWRNb2R1bGV9IGZyb20gXCJuZzItaW1hZ2V1cGxvYWRcIjtcblxuLy9QcmltZU5HIE1vZHVsZVxuaW1wb3J0IHtHcm93bE1vZHVsZX0gZnJvbSBcInByaW1lbmcvY29tcG9uZW50cy9ncm93bC9ncm93bFwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29udHJvbE1lc3NhZ2VzQ29tcG9uZW50fSBmcm9tIFwiLi9jb250cm9sLW1lc3NhZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb290ZXJDb21wb25lbnR9IGZyb20gXCIuLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHthcHBSb3V0aW5nUHJvdmlkZXJzfSBmcm9tIFwiLi4vYXBwLnJvdXRlc1wiO1xuaW1wb3J0IHtUZWFjaGVyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3RlYWNoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtUZWFjaE5hdkNvbXBvbmVudH0gZnJvbSBcIi4uL3RlYWNoL3RlYWNoLW5hdi90ZWFjaC1uYXYuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtGaWx0ZXJEYXRhfSBmcm9tIFwiLi9waXBlcy9maWx0ZXJkYXRhLnBpcGVcIjtcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gXCJwcmltZW5nL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXJcIjtcbmltcG9ydCB7V2ViYm9hcmRTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2ViYm9hcmQuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgSnNvbnBNb2R1bGUsXG4gICAgR3Jvd2xNb2R1bGUsXG4gICAgUHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgSW1hZ2VVcGxvYWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBUZWFjaE5hdkNvbXBvbmVudCxcbiAgICBDb250cm9sTWVzc2FnZXNDb21wb25lbnQsXG4gICAgRmlsdGVyRGF0YVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgSnNvbnBNb2R1bGUsXG4gICAgR3Jvd2xNb2R1bGUsXG4gICAgUHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgSW1hZ2VVcGxvYWRNb2R1bGUsXG5cbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIFRlYWNoTmF2Q29tcG9uZW50LFxuICAgIENvbnRyb2xNZXNzYWdlc0NvbXBvbmVudCxcbiAgICBGaWx0ZXJEYXRhXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaGFyZWRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgYXBwUm91dGluZ1Byb3ZpZGVycyxcbiAgICAgICAgVmFsaWRhdGlvblNlcnZpY2UsXG4gICAgICAgIFRlYWNoZXJTZXJ2aWNlLFxuICAgICAgICBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICBTdHVkZW50U2VydmljZSxcbiAgICAgICAgV2ViYm9hcmRTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19
