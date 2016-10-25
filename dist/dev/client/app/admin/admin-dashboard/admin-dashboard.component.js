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
var product_service_1 = require("../../shared/services/api/product/product.service");
var router_1 = require("@angular/router");
var admin_service_1 = require("../../shared/services/api/admin/admin.service");
var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(_adminService, _productService, _router) {
        this._adminService = _adminService;
        this._productService = _productService;
        this._router = _router;
        this.product_data = [];
        this.loading_product = true;
        this.vendor_data = [];
        this.loading_vendor = true;
        this.listing = 'Moderate New Listings';
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.getProductStatus();
        this.getVendors();
    };
    AdminDashboardComponent.prototype.ngOnDestroy = function () {
        if (this.sub_product)
            this.sub_product.unsubscribe();
        if (this.sub_vendor)
            this.sub_vendor.unsubscribe();
    };
    AdminDashboardComponent.prototype.getProductStatus = function () {
        var _this = this;
        this.loading_product = true;
        this.product$ = this._productService.getProductStatus('all');
        this.sub_product = this.product$.subscribe(function (product) {
            _this.product = product.data;
            var category = [];
            for (var i = 0; i < _this.product.length; i++) {
                category = [];
                _this.product_data.push({
                    id: _this.product[i].id,
                    companyname: _this.product[i].companyname,
                    name: _this.product[i].name
                });
                for (var j = 0; j < _this.product[i].category.length; j++) {
                    category.push(_this.product[i].category[j] + " ");
                    _.merge(_this.product_data[i], { 'category': category });
                }
            }
            _this.loading_product = false;
        });
    };
    AdminDashboardComponent.prototype.getVendors = function () {
        var _this = this;
        this.loading_vendor = true;
        this.vendor$ = this._adminService.getAllDeveloper();
        this.sub_vendor = this.vendor$.subscribe(function (vendor) {
            _this.vendor = vendor;
            for (var i = 0; i < _this.vendor.length; i++) {
                _this.vendor_data.push({
                    id: _this.vendor[i].id,
                    companyname: _this.vendor[i].companyname,
                    name: _this.vendor[i].name
                });
            }
            _this.loading_vendor = false;
        });
    };
    AdminDashboardComponent.prototype.checkProduct = function () {
        this.product.length > 0 ? this.listing = 'Moderate New Listings' : this.listing = 'No New Listings';
    };
    AdminDashboardComponent.prototype.goToListing = function () {
        this._router.navigate(["admin/listing"]);
    };
    AdminDashboardComponent.prototype.goToProductDetail = function (data) {
        var id = data.id;
        this._router.navigate([("admin/product/" + id)]);
    };
    AdminDashboardComponent.prototype.goToVendorProfile = function (data) {
        var id = data.id;
        this._router.navigate([("admin/vendor/" + id + "/view")]);
    };
    AdminDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-admin-dashboard',
            templateUrl: 'admin-dashboard.component.html',
            styleUrls: ['admin-dashboard.component.css'],
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService, product_service_1.ProductService, router_1.Router])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());
exports.AdminDashboardComponent = AdminDashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBRTNELGdDQUE2QixtREFBbUQsQ0FBQyxDQUFBO0FBQ2pGLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDhCQUEyQiwrQ0FBK0MsQ0FBQyxDQUFBO0FBVTNFO0lBZ0JFLGlDQUFvQixhQUEyQixFQUMzQixlQUErQixFQUMvQixPQUFlO1FBRmYsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFibkMsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFHekIsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsZ0JBQVcsR0FBUyxFQUFFLENBQUM7UUFHdkIsbUJBQWMsR0FBWSxJQUFJLENBQUM7UUE4RC9CLFlBQU8sR0FBVyx1QkFBdUIsQ0FBQztJQXpEMUMsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRU8sa0RBQWdCLEdBQXhCO1FBQUEsaUJBc0JDO1FBckJDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxn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QztJQUVELG1EQUFpQixHQUFqQixVQUFrQixJQUFTO1FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBaUIsRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxtREFBaUIsR0FBakIsVUFBa0IsSUFBUztRQUN6QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQWdCLEVBQUUsV0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBcEdIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzs7K0JBQUE7SUFpR0YsOEJBQUM7QUFBRCxDQWhHQSxBQWdHQyxJQUFBO0FBaEdZLCtCQUF1QiwwQkFnR25DLENBQUEiLCJmaWxlIjoiYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0FkbWluU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkvYWRtaW4vYWRtaW4uc2VydmljZVwiO1xuXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3RiLWFkbWluLWRhc2hib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gIHByb2R1Y3Q6IGFueTtcbiAgcHJvZHVjdF9kYXRhOmFueSBbXSA9IFtdO1xuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxhbnk+O1xuICBzdWJfcHJvZHVjdDogU3Vic2NyaXB0aW9uO1xuICBsb2FkaW5nX3Byb2R1Y3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHZlbmRvcjogYW55O1xuICB2ZW5kb3JfZGF0YTphbnlbXSA9IFtdO1xuICB2ZW5kb3IkOiBPYnNlcnZhYmxlPGFueT47XG4gIHN1Yl92ZW5kb3I6IFN1YnNjcmlwdGlvbjtcbiAgbG9hZGluZ192ZW5kb3I6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FkbWluU2VydmljZTogQWRtaW5TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldFByb2R1Y3RTdGF0dXMoKTtcbiAgICB0aGlzLmdldFZlbmRvcnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yl9wcm9kdWN0KXRoaXMuc3ViX3Byb2R1Y3QudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5zdWJfdmVuZG9yKXRoaXMuc3ViX3ZlbmRvci51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0U3RhdHVzKCkge1xuICAgIHRoaXMubG9hZGluZ19wcm9kdWN0ID0gdHJ1ZTtcbiAgICB0aGlzLnByb2R1Y3QkID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFN0YXR1cygnYWxsJyk7XG4gICAgdGhpcy5zdWJfcHJvZHVjdCA9IHRoaXMucHJvZHVjdCQuc3Vic2NyaWJlKChwcm9kdWN0OiBhbnkpPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0ID0gcHJvZHVjdC5kYXRhO1xuICAgICAgbGV0IGNhdGVnb3J5IDphbnlbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2F0ZWdvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0X2RhdGEucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDp0aGlzLnByb2R1Y3RbaV0uaWQsXG4gICAgICAgICAgICBjb21wYW55bmFtZTogdGhpcy5wcm9kdWN0W2ldLmNvbXBhbnluYW1lLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9kdWN0W2ldLm5hbWVcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9kdWN0W2ldLmNhdGVnb3J5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY2F0ZWdvcnkucHVzaCh0aGlzLnByb2R1Y3RbaV0uY2F0ZWdvcnlbal0gKyBcIiBcIik7XG4gICAgICAgICAgXy5tZXJnZSh0aGlzLnByb2R1Y3RfZGF0YVtpXSx7J2NhdGVnb3J5JzpjYXRlZ29yeX0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRpbmdfcHJvZHVjdCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIGdldFZlbmRvcnMoKSB7XG4gICAgdGhpcy5sb2FkaW5nX3ZlbmRvciA9IHRydWU7XG4gICAgdGhpcy52ZW5kb3IkID0gdGhpcy5fYWRtaW5TZXJ2aWNlLmdldEFsbERldmVsb3BlcigpO1xuICAgIHRoaXMuc3ViX3ZlbmRvciA9IHRoaXMudmVuZG9yJC5zdWJzY3JpYmUoKHZlbmRvcjogYW55KT0+IHtcbiAgICAgIHRoaXMudmVuZG9yID0gdmVuZG9yO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKHZlbmRvcik7XG5cbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnZlbmRvci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMudmVuZG9yX2RhdGEucHVzaCh7XG4gICAgICAgICAgaWQ6IHRoaXMudmVuZG9yW2ldLmlkLFxuICAgICAgICAgIGNvbXBhbnluYW1lOnRoaXMudmVuZG9yW2ldLmNvbXBhbnluYW1lLFxuICAgICAgICAgIG5hbWU6dGhpcy52ZW5kb3JbaV0ubmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sb2FkaW5nX3ZlbmRvciA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgbGlzdGluZzogc3RyaW5nID0gJ01vZGVyYXRlIE5ldyBMaXN0aW5ncyc7XG5cbiAgY2hlY2tQcm9kdWN0KCkge1xuICAgIHRoaXMucHJvZHVjdC5sZW5ndGggPiAwID8gdGhpcy5saXN0aW5nID0gJ01vZGVyYXRlIE5ldyBMaXN0aW5ncycgOiB0aGlzLmxpc3RpbmcgPSAnTm8gTmV3IExpc3RpbmdzJztcbiAgfVxuXG4gIGdvVG9MaXN0aW5nKCkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL2xpc3RpbmdgXSk7XG4gIH1cblxuICBnb1RvUHJvZHVjdERldGFpbChkYXRhOiBhbnkpIHtcbiAgICBsZXQgaWQgPSBkYXRhLmlkO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL3Byb2R1Y3QvJHtpZH1gXSk7XG4gIH1cblxuICBnb1RvVmVuZG9yUHJvZmlsZShkYXRhOiBhbnkpIHtcbiAgICBsZXQgaWQgPSBkYXRhLmlkO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL3ZlbmRvci8ke2lkfS92aWV3YF0pO1xuICB9XG5cbn1cbiJdfQ==
