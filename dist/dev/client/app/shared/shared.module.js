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
var equal_validator_directive_1 = require("../services/equal-validator.directive");
var dialog_1 = require("primeng/components/dialog/dialog");
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
                webboard_service_1.WebboardService,
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
                ng2_imageupload_1.ImageUploadModule,
                dialog_1.DialogModule
            ],
            declarations: [
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                teach_nav_component_1.TeachNavComponent,
                control_messages_component_1.ControlMessagesComponent,
                filterdata_pipe_1.FilterData,
                equal_validator_directive_1.EqualValidator
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
                filterdata_pipe_1.FilterData,
                equal_validator_directive_1.EqualValidator,
                dialog_1.DialogModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUErQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2hFLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUV0RCx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUdsRCxzQkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUMzRCxpQ0FBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUMzRCwyQ0FBdUMsOEJBQThCLENBQUMsQ0FBQTtBQUN0RSxpQ0FBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUMzRCxtQ0FBZ0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNqRSwyQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsZ0NBQTZCLDZCQUE2QixDQUFDLENBQUE7QUFDM0Qsb0NBQWdDLHdDQUF3QyxDQUFDLENBQUE7QUFDekUsK0JBQTRCLDRCQUE0QixDQUFDLENBQUE7QUFDekQsZ0NBQXlCLHlCQUF5QixDQUFDLENBQUE7QUFDbkQsZ0NBQTZCLDZCQUE2QixDQUFDLENBQUE7QUFDM0QsNEJBQWdDLDRDQUE0QyxDQUFDLENBQUE7QUFDN0UsaUNBQThCLDhCQUE4QixDQUFDLENBQUE7QUFDN0QsMENBQTZCLHVDQUF1QyxDQUFDLENBQUE7QUFDckUsdUJBQTJCLGtDQUFrQyxDQUFDLENBQUE7QUE2QzlEO0lBQUE7SUFlQSxDQUFDO0lBZFEsb0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxnQ0FBbUI7Z0JBQ25CLHNDQUFpQjtnQkFDakIsZ0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2Qsa0NBQWU7YUFFaEI7U0FDRixDQUFDO0lBQ0osQ0FBQztJQXhESDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixxQkFBWTtnQkFDWiwyQkFBbUI7Z0JBQ25CLG1CQUFXO2dCQUNYLGlCQUFVO2dCQUNWLGtCQUFXO2dCQUNYLG1CQUFXO2dCQUNYLCtCQUFpQjtnQkFDakIsbUNBQWlCO2dCQUNqQixxQkFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLHVDQUFpQjtnQkFDakIscURBQXdCO2dCQUN4Qiw0QkFBVTtnQkFDViwwQ0FBYzthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLG1CQUFXO2dCQUNYLHFCQUFZO2dCQUNaLDJCQUFtQjtnQkFDbkIsbUJBQVc7Z0JBQ1gsaUJBQVU7Z0JBQ1Ysa0JBQVc7Z0JBQ1gsbUJBQVc7Z0JBQ1gsK0JBQWlCO2dCQUNqQixtQ0FBaUI7Z0JBRWpCLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLHVDQUFpQjtnQkFDakIscURBQXdCO2dCQUN4Qiw0QkFBVTtnQkFDViwwQ0FBYztnQkFDZCxxQkFBWTthQUNiO1NBQ0YsQ0FBQzs7b0JBQUE7SUFnQkYsbUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLG9CQUFZLGVBZXhCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7SnNvbnBNb2R1bGUsIEh0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0ltYWdlVXBsb2FkTW9kdWxlfSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5cbi8vUHJpbWVORyBNb2R1bGVcbmltcG9ydCB7R3Jvd2xNb2R1bGV9IGZyb20gXCJwcmltZW5nL2NvbXBvbmVudHMvZ3Jvd2wvZ3Jvd2xcIjtcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29udHJvbE1lc3NhZ2VzQ29tcG9uZW50fSBmcm9tIFwiLi9jb250cm9sLW1lc3NhZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb290ZXJDb21wb25lbnR9IGZyb20gXCIuLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHthcHBSb3V0aW5nUHJvdmlkZXJzfSBmcm9tIFwiLi4vYXBwLnJvdXRlc1wiO1xuaW1wb3J0IHtUZWFjaGVyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3RlYWNoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtUZWFjaE5hdkNvbXBvbmVudH0gZnJvbSBcIi4uL3RlYWNoL3RlYWNoLW5hdi90ZWFjaC1uYXYuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtGaWx0ZXJEYXRhfSBmcm9tIFwiLi9waXBlcy9maWx0ZXJkYXRhLnBpcGVcIjtcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gXCJwcmltZW5nL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXJcIjtcbmltcG9ydCB7V2ViYm9hcmRTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2ViYm9hcmQuc2VydmljZVwiO1xuaW1wb3J0IHtFcXVhbFZhbGlkYXRvcn0gZnJvbSBcIi4uL3NlcnZpY2VzL2VxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmVcIjtcbmltcG9ydCB7RGlhbG9nTW9kdWxlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2dcIjtcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgSnNvbnBNb2R1bGUsXG4gICAgR3Jvd2xNb2R1bGUsXG4gICAgUHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgSW1hZ2VVcGxvYWRNb2R1bGUsXG4gICAgRGlhbG9nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBGb290ZXJDb21wb25lbnQsXG4gICAgVGVhY2hOYXZDb21wb25lbnQsXG4gICAgQ29udHJvbE1lc3NhZ2VzQ29tcG9uZW50LFxuICAgIEZpbHRlckRhdGEsXG4gICAgRXF1YWxWYWxpZGF0b3JcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIEpzb25wTW9kdWxlLFxuICAgIEdyb3dsTW9kdWxlLFxuICAgIFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIEltYWdlVXBsb2FkTW9kdWxlLFxuXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBUZWFjaE5hdkNvbXBvbmVudCxcbiAgICBDb250cm9sTWVzc2FnZXNDb21wb25lbnQsXG4gICAgRmlsdGVyRGF0YSxcbiAgICBFcXVhbFZhbGlkYXRvcixcbiAgICBEaWFsb2dNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBhcHBSb3V0aW5nUHJvdmlkZXJzLFxuICAgICAgICBWYWxpZGF0aW9uU2VydmljZSxcbiAgICAgICAgVGVhY2hlclNlcnZpY2UsXG4gICAgICAgIENvdXJzZVNlcnZpY2UsXG4gICAgICAgIFN0dWRlbnRTZXJ2aWNlLFxuICAgICAgICBXZWJib2FyZFNlcnZpY2UsXG5cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=
