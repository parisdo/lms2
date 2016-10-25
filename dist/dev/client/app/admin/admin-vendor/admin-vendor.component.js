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
var router_1 = require("@angular/router");
var product_service_1 = require("../../shared/services/api/product/product.service");
var admin_service_1 = require("../../shared/services/api/admin/admin.service");
var account_management_service_1 = require("../../shared/services/api/admin/account-management.service");
var AdminVendorComponent = (function () {
    function AdminVendorComponent(_productService, _adminService, _accountService, _router, route) {
        this._productService = _productService;
        this._adminService = _adminService;
        this._accountService = _accountService;
        this._router = _router;
        this.route = route;
        this.loading_detail = true;
        this.loading_vendor = true;
        this.vendor_data = [];
        this.archive_account = false;
        this.archive_success = false;
        this.unarchive_success = false;
        this.resetPassword = false;
    }
    AdminVendorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading_vendor = true;
        this.sub_detail = this.route
            .params
            .subscribe(function (params) {
            var id = parseInt(params['id']);
            var mode = params['mode'];
            _this.vendor$ = _this._adminService.getAllDeveloper();
            _this.vendor$.subscribe(function (developer) {
                _this.vendor = developer;
                for (var i = 0; i < _this.vendor.length; i++) {
                    _this.vendor_data.push({
                        id: _this.vendor[i].id,
                        name: _this.vendor[i].name,
                        companyname: _this.vendor[i].companyname
                    });
                }
                _this.loading_vendor = false;
            });
            if (mode == 'view') {
                _this.viewProfile(id);
            }
        });
    };
    AdminVendorComponent.prototype.ngOnDestroy = function () {
        if (this.sub_archive)
            this.sub_archive.unsubscribe();
        if (this.sub_detail)
            this.sub_detail.unsubscribe();
    };
    AdminVendorComponent.prototype.viewProfile = function (data) {
        var _this = this;
        var id = data.id;
        this.detail$ = this._adminService.getAllDeveloperId(id);
        this.sub_detail = this.detail$.subscribe(function (detail) {
            _this.detail = detail.data;
            _this.detail_vendor = detail.data.developer;
            _this.apps = detail.apps;
            _this.loading_detail = false;
        });
    };
    AdminVendorComponent.prototype.confirmArchiveAccount = function (userId, status) {
        this.archive_success = false;
        this.unarchive_success = false;
        this.userId = userId;
        this.status = status;
    };
    AdminVendorComponent.prototype.archiveAccount = function (userId, status) {
        var _this = this;
        this.archive_account$ = this._accountService.archiveAccount(userId, status);
        this.sub_archive = this.archive_account$.subscribe(function (res) {
            _this.viewProfile(_this.detail_vendor.id);
            if (res.status == 'success') {
                if (status === 'archive')
                    _this.archive_success = true;
                if (status === 'unarchive')
                    _this.unarchive_success = true;
            }
        });
    };
    AdminVendorComponent.prototype.resetPasswordAccount = function (userId) {
        var _this = this;
        this.resetPassword = false;
        this._accountService.resetPasswordAccount(userId).subscribe(function (res) {
            _this.resetPassword = true;
        });
    };
    AdminVendorComponent.prototype.goToDetail = function (productId) {
        this._router.navigate([("admin/product/" + productId)]);
    };
    AdminVendorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin-vendors',
            templateUrl: 'admin-vendor.component.html',
            styleUrls: ['admin-vendor.component.css'],
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, admin_service_1.AdminService, account_management_service_1.AccountManagementService, router_1.Router, router_1.ActivatedRoute])
    ], AdminVendorComponent);
    return AdminVendorComponent;
}());
exports.AdminVendorComponent = AdminVendorComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9hZG1pbi12ZW5kb3IvYWRtaW4tdmVuZG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBRTNELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGdDQUE2QixtREFBbUQsQ0FBQyxDQUFBO0FBQ2pGLDhCQUEyQiwrQ0FBK0MsQ0FBQyxDQUFBO0FBQzNFLDJDQUF1Qyw0REFBNEQsQ0FBQyxDQUFBO0FBU3BHO0lBR0UsOEJBQW9CLGVBQStCLEVBQy9CLGFBQTJCLEVBQzNCLGVBQXlDLEVBQ3pDLE9BQWMsRUFDZCxLQUFxQjtRQUpyQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0Isb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBQ3pDLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUl6QyxtQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixtQkFBYyxHQUFZLElBQUksQ0FBQztRQUsvQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQTREdEIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFFakMsb0JBQWUsR0FBVyxLQUFLLENBQUM7UUFDaEMsc0JBQWlCLEdBQVcsS0FBSyxDQUFDO1FBMkJsQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztJQWxHL0IsQ0FBQztJQWtCRCx1Q0FBUSxHQUFSO1FBQUEsaUJBNkJDO1FBM0JDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBRTNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDekIsTUFBTTthQUNOLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDZixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwRCxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFNBQWM7Z0JBQ3BDLEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUN6QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7b0JBQzFDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO3dCQUNwQixFQUFFLEVBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNwQixJQUFJLEVBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO3dCQUN4QixXQUFXLEVBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO3FCQUN2QyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDQSxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7UUFFSCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUdPLDBDQUFXLEdBQW5CLFVBQW9CLElBQVM7UUFBN0IsaUJBVUM7UUFUQyxJQUFJLEVBQUUsR0FBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVztZQUNuRCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDMUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMzQyxLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFeEIsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBWUQsb0RBQXFCLEdBQXJCLFVBQXNCLE1BQVcsRUFBRSxNQUFVO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELDZDQUFjLEdBQWQsVUFBZSxNQUFXLEVBQUUsTUFBVTtRQUF0QyxpQkFZQztRQVhDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBUTtZQUMxRCxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFeEMsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUUxQixFQUFFLENBQUEsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO29CQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO2dCQUNwRCxFQUFFLENBQUEsQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDO29CQUFDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDM0QsQ0FBQztRQUVILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELG1EQUFvQixHQUFwQixVQUFxQixNQUFXO1FBQWhDLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFRO1lBQ25FLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxTQUFnQjtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFpQixTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQTdISDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7OzRCQUFBO0lBeUhGLDJCQUFDO0FBQUQsQ0F2SEEsQUF1SEMsSUFBQTtBQXZIWSw0QkFBb0IsdUJBdUhoQyxDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi9hZG1pbi12ZW5kb3IvYWRtaW4tdmVuZG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7QWRtaW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS9hZG1pbi9hZG1pbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjY291bnRNYW5hZ2VtZW50U2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkvYWRtaW4vYWNjb3VudC1tYW5hZ2VtZW50LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYWRtaW4tdmVuZG9ycycsXG4gIHRlbXBsYXRlVXJsOiAnYWRtaW4tdmVuZG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2FkbWluLXZlbmRvci5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQWRtaW5WZW5kb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FkbWluU2VydmljZTogQWRtaW5TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hY2NvdW50U2VydmljZTogQWNjb3VudE1hbmFnZW1lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXG4gIH1cblxuICBsb2FkaW5nX2RldGFpbDogYm9vbGVhbiA9IHRydWU7XG4gIGxvYWRpbmdfdmVuZG9yOiBib29sZWFuID0gdHJ1ZTtcbiAgc3ViX2RldGFpbDogU3Vic2NyaXB0aW9uO1xuXG4gIHZlbmRvciQ6IE9ic2VydmFibGU8YW55PjtcbiAgdmVuZG9yOiBhbnk7XG4gIHZlbmRvcl9kYXRhOmFueVtdID1bXTtcblxuICBkZXRhaWw6IGFueVtdO1xuICBkZXRhaWwkOiBPYnNlcnZhYmxlPGFueT47XG4gIGRldGFpbF92ZW5kb3I6IGFueTtcbiAgYXBwczogYW55IFtdO1xuXG4gIHN1Yl9hcmNoaXZlOiBTdWJzY3JpcHRpb247XG4gIGFyY2hpdmVfYWNjb3VudCQ6IE9ic2VydmFibGU8YW55PjtcblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMubG9hZGluZ192ZW5kb3IgPSB0cnVlO1xuXG4gICAgdGhpcy5zdWJfZGV0YWlsID0gdGhpcy5yb3V0ZVxuICAgICAgLnBhcmFtc1xuICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICBsZXQgaWQgPSBwYXJzZUludChwYXJhbXNbJ2lkJ10pO1xuICAgICAgICBsZXQgbW9kZSA9IHBhcmFtc1snbW9kZSddO1xuXG4gICAgICAgIHRoaXMudmVuZG9yJCA9IHRoaXMuX2FkbWluU2VydmljZS5nZXRBbGxEZXZlbG9wZXIoKTtcbiAgICAgICAgdGhpcy52ZW5kb3IkLnN1YnNjcmliZSgoZGV2ZWxvcGVyOiBhbnkpPT4ge1xuICAgICAgICAgIHRoaXMudmVuZG9yID0gZGV2ZWxvcGVyO1xuICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudmVuZG9yLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgdGhpcy52ZW5kb3JfZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICBpZDp0aGlzLnZlbmRvcltpXS5pZCxcbiAgICAgICAgICAgICBuYW1lOnRoaXMudmVuZG9yW2ldLm5hbWUsXG4gICAgICAgICAgICAgY29tcGFueW5hbWU6dGhpcy52ZW5kb3JbaV0uY29tcGFueW5hbWVcbiAgICAgICAgICAgfSk7XG4gICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sb2FkaW5nX3ZlbmRvciA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobW9kZSA9PSAndmlldycpIHtcbiAgICAgICAgICB0aGlzLnZpZXdQcm9maWxlKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3ViX2FyY2hpdmUpdGhpcy5zdWJfYXJjaGl2ZS51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLnN1Yl9kZXRhaWwpdGhpcy5zdWJfZGV0YWlsLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuXG4gIHByaXZhdGUgdmlld1Byb2ZpbGUoZGF0YTogYW55KSB7XG4gICAgbGV0IGlkICA9IGRhdGEuaWQ7XG4gICAgdGhpcy5kZXRhaWwkID0gdGhpcy5fYWRtaW5TZXJ2aWNlLmdldEFsbERldmVsb3BlcklkKGlkKTtcbiAgICB0aGlzLnN1Yl9kZXRhaWwgPSB0aGlzLmRldGFpbCQuc3Vic2NyaWJlKChkZXRhaWw6IGFueSk9PiB7XG4gICAgICB0aGlzLmRldGFpbCA9IGRldGFpbC5kYXRhO1xuICAgICAgdGhpcy5kZXRhaWxfdmVuZG9yID0gZGV0YWlsLmRhdGEuZGV2ZWxvcGVyO1xuICAgICAgdGhpcy5hcHBzID0gZGV0YWlsLmFwcHM7XG5cbiAgICAgIHRoaXMubG9hZGluZ19kZXRhaWwgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgYXJjaGl2ZV9hY2NvdW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgYXJjaGl2ZV9zdWNjZXNzOmJvb2xlYW4gPSBmYWxzZTtcbiAgdW5hcmNoaXZlX3N1Y2Nlc3M6Ym9vbGVhbiA9IGZhbHNlO1xuICBlcnJvclN0YXR1czpib29sZWFuO1xuICBlcnJvclRleHQ6c3RyaW5nO1xuICB1c2VySWQ6bnVtYmVyO1xuICBzdGF0dXM6c3RyaW5nO1xuXG4gIGNvbmZpcm1BcmNoaXZlQWNjb3VudCh1c2VySWQ6IGFueSwgc3RhdHVzOmFueSl7XG4gICAgdGhpcy5hcmNoaXZlX3N1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0aGlzLnVuYXJjaGl2ZV9zdWNjZXNzID0gZmFsc2U7XG4gICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIH1cblxuICBhcmNoaXZlQWNjb3VudCh1c2VySWQ6IGFueSwgc3RhdHVzOmFueSkge1xuICAgIHRoaXMuYXJjaGl2ZV9hY2NvdW50JCA9IHRoaXMuX2FjY291bnRTZXJ2aWNlLmFyY2hpdmVBY2NvdW50KHVzZXJJZCwgc3RhdHVzKTtcbiAgICB0aGlzLnN1Yl9hcmNoaXZlID0gdGhpcy5hcmNoaXZlX2FjY291bnQkLnN1YnNjcmliZSgocmVzOiBhbnkpPT4ge1xuICAgICAgdGhpcy52aWV3UHJvZmlsZSh0aGlzLmRldGFpbF92ZW5kb3IuaWQpO1xuXG4gICAgICBpZihyZXMuc3RhdHVzID09ICdzdWNjZXNzJyl7XG5cbiAgICAgICAgaWYoc3RhdHVzID09PSAnYXJjaGl2ZScpIHRoaXMuYXJjaGl2ZV9zdWNjZXNzID0gdHJ1ZVxuICAgICAgICBpZihzdGF0dXMgPT09ICd1bmFyY2hpdmUnKSB0aGlzLnVuYXJjaGl2ZV9zdWNjZXNzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHJlc2V0UGFzc3dvcmRBY2NvdW50KHVzZXJJZDogYW55KSB7XG4gICAgdGhpcy5yZXNldFBhc3N3b3JkID0gZmFsc2U7XG4gICAgdGhpcy5fYWNjb3VudFNlcnZpY2UucmVzZXRQYXNzd29yZEFjY291bnQodXNlcklkKS5zdWJzY3JpYmUoKHJlczogYW55KT0+IHtcbiAgICAgIHRoaXMucmVzZXRQYXNzd29yZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBnb1RvRGV0YWlsKHByb2R1Y3RJZDpudW1iZXIpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL3Byb2R1Y3QvJHtwcm9kdWN0SWR9YF0pO1xuICB9XG59XG4iXX0=
