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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var webboard_routing_1 = require("./webboard.routing");
var webboard_component_1 = require("./webboard.component");
var webboard_list_component_1 = require("./webboard-list/webboard-list.component");
var new_post_component_1 = require("./new-post/new-post.component");
var post_component_1 = require("./post/post.component");
var WebboardModule = (function () {
    function WebboardModule() {
    }
    WebboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                webboard_routing_1.webboardRouting
            ],
            declarations: [
                webboard_component_1.WebboardComponent,
                webboard_list_component_1.WebboardListComponent,
                new_post_component_1.NewPostComponent,
                post_component_1.PostComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], WebboardModule);
    return WebboardModule;
}());
exports.WebboardModule = WebboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWJib2FyZC93ZWJib2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5Qyx1QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxzQkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCxtQ0FBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN2RCx3Q0FBb0MseUNBQXlDLENBQUMsQ0FBQTtBQUM5RSxtQ0FBK0IsK0JBQStCLENBQUMsQ0FBQTtBQUMvRCwrQkFBNEIsdUJBQXVCLENBQUMsQ0FBQTtBQWtCcEQ7SUFBQTtJQUE2QixDQUFDO0lBZjlCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLG1CQUFXO2dCQUNYLDRCQUFZO2dCQUVaLGtDQUFlO2FBQ2xCO1lBQ0QsWUFBWSxFQUFFO2dCQUNYLHNDQUFpQjtnQkFDaEIsK0NBQXFCO2dCQUNyQixxQ0FBZ0I7Z0JBQ2hCLDhCQUFhO2FBQ2hCO1NBQ0osQ0FBQzs7c0JBQUE7SUFDMkIscUJBQUM7QUFBRCxDQUE3QixBQUE4QixJQUFBO0FBQWpCLHNCQUFjLGlCQUFHLENBQUEiLCJmaWxlIjoiYXBwL3dlYmJvYXJkL3dlYmJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7U2hhcmVkTW9kdWxlfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7d2ViYm9hcmRSb3V0aW5nfSBmcm9tIFwiLi93ZWJib2FyZC5yb3V0aW5nXCI7XG5pbXBvcnQge1dlYmJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi93ZWJib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7V2ViYm9hcmRMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi93ZWJib2FyZC1saXN0L3dlYmJvYXJkLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge05ld1Bvc3RDb21wb25lbnR9IGZyb20gXCIuL25ldy1wb3N0L25ldy1wb3N0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQb3N0Q29tcG9uZW50fSBmcm9tIFwiLi9wb3N0L3Bvc3QuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcblxuICAgICAgICB3ZWJib2FyZFJvdXRpbmdcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgIFdlYmJvYXJkQ29tcG9uZW50LFxuICAgICAgICBXZWJib2FyZExpc3RDb21wb25lbnQsXG4gICAgICAgIE5ld1Bvc3RDb21wb25lbnQsXG4gICAgICAgIFBvc3RDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFdlYmJvYXJkTW9kdWxlIHt9XG4iXX0=
