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
var vendor_routes_1 = require('./vendor.routes');
var vendor_component_1 = require('./vendor.component');
var vendor_navbar_component_1 = require('./vendor-navbar/vendor-navbar.component');
var shared_module_1 = require('../shared/shared.module');
var vendor_dashboard_component_1 = require('./vendor-dashboard/vendor-dashboard.component');
var vendor_all_listing_component_1 = require('./vendor-all-listing/vendor-all-listing.component');
var vendor_listing_component_1 = require('./vendor-all-listing/vendor-listing/vendor-listing.component');
var vendor_add_listing_component_1 = require('./vendor-add-listing/vendor-add-listing.component');
var vendor_edit_listing_component_1 = require("./vendor-edit-listing/vendor-edit-listing.component");
var vendor_profile_component_1 = require("./vendor-profile/vendor-profile.component");
var vendor_service_1 = require("../shared/services/api/vendor/vendor.service");
var VendorModule = (function () {
    function VendorModule() {
    }
    VendorModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                vendor_routes_1.vendorRouting,
            ],
            declarations: [
                vendor_component_1.VendorComponent,
                vendor_navbar_component_1.VendorNavbarComponent,
                vendor_dashboard_component_1.VendorDashboardComponent,
                vendor_all_listing_component_1.VendorAllListingComponent,
                vendor_listing_component_1.VendorListingComponent,
                vendor_add_listing_component_1.VendorAddListingComponent,
                vendor_edit_listing_component_1.VendorEditListingComponent,
                vendor_profile_component_1.VendorProfileComponent
            ],
            providers: [
                vendor_service_1.VendorService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], VendorModule);
    return VendorModule;
}());
exports.VendorModule = VendorModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92ZW5kb3IvdmVuZG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLDhCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBRTlDLGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELHdDQUFvQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQzlFLDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELDJDQUF1QywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ3ZGLDZDQUF3QyxtREFBbUQsQ0FBQyxDQUFBO0FBQzVGLHlDQUFxQyw4REFBOEQsQ0FBQyxDQUFBO0FBQ3BHLDZDQUF3QyxtREFBbUQsQ0FBQyxDQUFBO0FBQzVGLDhDQUF5QyxxREFBcUQsQ0FBQyxDQUFBO0FBQy9GLHlDQUFxQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ2pGLCtCQUE0Qiw4Q0FBOEMsQ0FBQyxDQUFBO0FBc0IzRTtJQUFBO0lBQTJCLENBQUM7SUFuQjVCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLDRCQUFZO2dCQUNaLDZCQUFhO2FBQ2Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osa0NBQWU7Z0JBQ2YsK0NBQXFCO2dCQUNyQixxREFBd0I7Z0JBQ3hCLHdEQUF5QjtnQkFDekIsaURBQXNCO2dCQUN0Qix3REFBeUI7Z0JBQ3pCLDBEQUEwQjtnQkFDMUIsaURBQXNCO2FBQ3ZCO1lBQ0QsU0FBUyxFQUFDO2dCQUNSLDhCQUFhO2FBQ2Q7U0FDRixDQUFDOztvQkFBQTtJQUN5QixtQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixvQkFBWSxlQUFHLENBQUEiLCJmaWxlIjoiYXBwL3ZlbmRvci92ZW5kb3IubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt2ZW5kb3JSb3V0aW5nfSBmcm9tICcuL3ZlbmRvci5yb3V0ZXMnO1xuXG5pbXBvcnQge1ZlbmRvckNvbXBvbmVudH0gZnJvbSAnLi92ZW5kb3IuY29tcG9uZW50JztcbmltcG9ydCB7VmVuZG9yTmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL3ZlbmRvci1uYXZiYXIvdmVuZG9yLW5hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7VmVuZG9yRGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuL3ZlbmRvci1kYXNoYm9hcmQvdmVuZG9yLWRhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHtWZW5kb3JBbGxMaXN0aW5nQ29tcG9uZW50fSBmcm9tICcuL3ZlbmRvci1hbGwtbGlzdGluZy92ZW5kb3ItYWxsLWxpc3RpbmcuY29tcG9uZW50JztcbmltcG9ydCB7VmVuZG9yTGlzdGluZ0NvbXBvbmVudH0gZnJvbSAnLi92ZW5kb3ItYWxsLWxpc3RpbmcvdmVuZG9yLWxpc3RpbmcvdmVuZG9yLWxpc3RpbmcuY29tcG9uZW50JztcbmltcG9ydCB7VmVuZG9yQWRkTGlzdGluZ0NvbXBvbmVudH0gZnJvbSAnLi92ZW5kb3ItYWRkLWxpc3RpbmcvdmVuZG9yLWFkZC1saXN0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge1ZlbmRvckVkaXRMaXN0aW5nQ29tcG9uZW50fSBmcm9tIFwiLi92ZW5kb3ItZWRpdC1saXN0aW5nL3ZlbmRvci1lZGl0LWxpc3RpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZlbmRvclByb2ZpbGVDb21wb25lbnR9IGZyb20gXCIuL3ZlbmRvci1wcm9maWxlL3ZlbmRvci1wcm9maWxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWZW5kb3JTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS92ZW5kb3IvdmVuZG9yLnNlcnZpY2VcIjtcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIHZlbmRvclJvdXRpbmcsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFZlbmRvckNvbXBvbmVudCxcbiAgICBWZW5kb3JOYXZiYXJDb21wb25lbnQsXG4gICAgVmVuZG9yRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIFZlbmRvckFsbExpc3RpbmdDb21wb25lbnQsXG4gICAgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCxcbiAgICBWZW5kb3JBZGRMaXN0aW5nQ29tcG9uZW50LFxuICAgIFZlbmRvckVkaXRMaXN0aW5nQ29tcG9uZW50LFxuICAgIFZlbmRvclByb2ZpbGVDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOltcbiAgICBWZW5kb3JTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVmVuZG9yTW9kdWxlIHt9XG4iXX0=
