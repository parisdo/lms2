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
var shared_module_1 = require('../shared/shared.module');
var admin_dashboard_component_1 = require("./admin-dashboard/admin-dashboard.component");
var admin_component_1 = require("./admin.component");
var admin_routes_1 = require("./admin.routes");
var admin_service_1 = require("../shared/services/api/admin/admin.service");
var admin_listing_component_1 = require("./admin-listing/admin-listing.component");
var admin_navbar_component_1 = require("./admin-navbar/admin-navbar.component");
var admin_setting_component_1 = require("./admin-setting/admin-setting.component");
var admin_vendor_component_1 = require("./admin-vendor/admin-vendor.component");
var account_management_service_1 = require("../shared/services/api/admin/account-management.service");
var admin_product_component_1 = require("./admin-product/admin-product.component");
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                admin_routes_1.adminRouting,
            ],
            declarations: [
                admin_component_1.AdminComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                admin_listing_component_1.AdminLisitingComponent,
                admin_navbar_component_1.AdminNavbarComponent,
                admin_setting_component_1.AdminSettingComponent,
                admin_vendor_component_1.AdminVendorComponent,
                admin_product_component_1.AdminProductComponent
            ],
            providers: [
                admin_service_1.AdminService,
                account_management_service_1.AccountManagementService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9hZG1pbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUNwRSw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCwwQ0FBc0MsNkNBQTZDLENBQUMsQ0FBQTtBQUNwRixnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCw2QkFBMkIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM1Qyw4QkFBMkIsNENBQTRDLENBQUMsQ0FBQTtBQUN4RSx3Q0FBcUMseUNBQXlDLENBQUMsQ0FBQTtBQUMvRSx1Q0FBbUMsdUNBQXVDLENBQUMsQ0FBQTtBQUMzRSx3Q0FBb0MseUNBQXlDLENBQUMsQ0FBQTtBQUM5RSx1Q0FBbUMsdUNBQXVDLENBQUMsQ0FBQTtBQUMzRSwyQ0FBdUMseURBQXlELENBQUMsQ0FBQTtBQUNqRyx3Q0FBb0MseUNBQXlDLENBQUMsQ0FBQTtBQXFCOUU7SUFBQTtJQUEwQixDQUFDO0lBbkIzQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCw0QkFBWTtnQkFDWiwyQkFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLGdDQUFjO2dCQUNkLG1EQUF1QjtnQkFDdkIsZ0RBQXNCO2dCQUN0Qiw2Q0FBb0I7Z0JBQ3BCLCtDQUFxQjtnQkFDckIsNkNBQW9CO2dCQUNwQiwrQ0FBcUI7YUFDdEI7WUFDRCxTQUFTLEVBQUM7Z0JBQ1IsNEJBQVk7Z0JBQ1oscURBQXdCO2FBQ3pCO1NBQ0YsQ0FBQzs7bUJBQUE7SUFDd0Isa0JBQUM7QUFBRCxDQUExQixBQUEyQixJQUFBO0FBQWQsbUJBQVcsY0FBRyxDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi9hZG1pbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7QWRtaW5EYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluQ29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7YWRtaW5Sb3V0aW5nfSBmcm9tIFwiLi9hZG1pbi5yb3V0ZXNcIjtcbmltcG9ydCB7QWRtaW5TZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS9hZG1pbi9hZG1pbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0FkbWluTGlzaXRpbmdDb21wb25lbnR9IGZyb20gXCIuL2FkbWluLWxpc3RpbmcvYWRtaW4tbGlzdGluZy5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5OYXZiYXJDb21wb25lbnR9IGZyb20gXCIuL2FkbWluLW5hdmJhci9hZG1pbi1uYXZiYXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluU2V0dGluZ0NvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4tc2V0dGluZy9hZG1pbi1zZXR0aW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBZG1pblZlbmRvckNvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4tdmVuZG9yL2FkbWluLXZlbmRvci5jb21wb25lbnRcIjtcbmltcG9ydCB7QWNjb3VudE1hbmFnZW1lbnRTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS9hZG1pbi9hY2NvdW50LW1hbmFnZW1lbnQuc2VydmljZVwiO1xuaW1wb3J0IHtBZG1pblByb2R1Y3RDb21wb25lbnR9IGZyb20gXCIuL2FkbWluLXByb2R1Y3QvYWRtaW4tcHJvZHVjdC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBhZG1pblJvdXRpbmcsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIEFkbWluRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIEFkbWluTGlzaXRpbmdDb21wb25lbnQsXG4gICAgQWRtaW5OYXZiYXJDb21wb25lbnQsXG4gICAgQWRtaW5TZXR0aW5nQ29tcG9uZW50LFxuICAgIEFkbWluVmVuZG9yQ29tcG9uZW50LFxuICAgIEFkbWluUHJvZHVjdENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6W1xuICAgIEFkbWluU2VydmljZSxcbiAgICBBY2NvdW50TWFuYWdlbWVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbk1vZHVsZSB7fVxuIl19
