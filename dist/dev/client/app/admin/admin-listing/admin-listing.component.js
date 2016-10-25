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
var AdminLisitingComponent = (function () {
    function AdminLisitingComponent(_router, _productService) {
        this._router = _router;
        this._productService = _productService;
        this.loading_log = true;
        this.product_all_data = [];
        this.red = 'red';
    }
    AdminLisitingComponent.prototype.ngOnInit = function () {
        this.getProduct('underreview');
    };
    AdminLisitingComponent.prototype.ngOnDestroy = function () {
        this.product_all_data = [];
        if (this.sub_product_all)
            this.sub_product_all.unsubscribe();
    };
    AdminLisitingComponent.prototype.goToDashboard = function () {
        this._router.navigate(["admin"]);
    };
    AdminLisitingComponent.prototype.showLog = function (value) {
        var _this = this;
        this.loading_log = true;
        this.logs = [];
        var id = value.id;
        this._productService.getLogProduct(id)
            .subscribe(function (res) {
            if (res.status == 'ok')
                _this.logs = res.data.logs;
            _this.loading_log = false;
        });
    };
    AdminLisitingComponent.prototype.getProduct = function (type) {
        var _this = this;
        this.product_all_data = [];
        this.loading_product_all = true;
        this.product_all$ = this._productService.getProductStatus(type);
        this.sub_product_all = this.product_all$.subscribe(function (product) {
            _this.product_all = product.data;
            var category = [];
            for (var i = 0; i < _this.product_all.length; i++) {
                category = [];
                _this.product_all_data.push({
                    id: _this.product_all[i].id,
                    companyname: _this.product_all[i].companyname,
                    name: _this.product_all[i].name,
                    status: _this.product_all[i].status,
                    colorstatus: _this.product_all[i].status.replace(" ", "").toLowerCase()
                });
                for (var j = 0; j < _this.product_all[i].category.length; j++) {
                    category.push(_this.product_all[i].category[j] + " ");
                    _.merge(_this.product_all_data[i], { 'category': category });
                }
            }
            _this.product_all_length = _this.product_all.length;
            _this.loading_product_all = false;
        });
    };
    AdminLisitingComponent.prototype.goToProductDetail = function (value) {
        var id = value.id;
        this._router.navigate([("admin/product/" + id)]);
    };
    AdminLisitingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-listing',
            templateUrl: 'admin-listing.component.html',
            styleUrls: ['admin-listing.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], AdminLisitingComponent);
    return AdminLisitingComponent;
}());
exports.AdminLisitingComponent = AdminLisitingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9hZG1pbi1saXN0aW5nL2FkbWluLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFFM0QsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsZ0NBQTZCLG1EQUFtRCxDQUFDLENBQUE7QUFZakY7SUFhRSxnQ0FBb0IsT0FBZSxFQUNmLGVBQStCO1FBRC9CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFUbkQsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBRzlCLFFBQUcsR0FBVyxLQUFLLENBQUM7SUFLcEIsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBR0QsOENBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0Qsd0NBQU8sR0FBUCxVQUFRLEtBQVU7UUFBbEIsaUJBU0M7UUFSQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFD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OzhCQUFBO0lBaUZGLDZCQUFDO0FBQUQsQ0EvRUEsQUErRUMsSUFBQTtBQS9FWSw4QkFBc0IseUJBK0VsQyxDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi9hZG1pbi1saXN0aW5nL2FkbWluLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5cblxuZGVjbGFyZSB2YXIgXzogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhZG1pbi1saXN0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICdhZG1pbi1saXN0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2FkbWluLWxpc3RpbmcuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluTGlzaXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHN1Yl9wcm9kdWN0X2FsbDogU3Vic2NyaXB0aW9uO1xuICBwcm9kdWN0X2FsbCQ6IE9ic2VydmFibGU8YW55PjsgIGxvZ3M6IGFueVtdO1xuICBsb2FkaW5nX2xvZzogYm9vbGVhbiA9IHRydWU7XG4gIGxvYWRpbmdfcHJvZHVjdF9hbGw6IGJvb2xlYW47XG4gIHByb2R1Y3RfYWxsOiBhbnk7XG4gIHByb2R1Y3RfYWxsX2RhdGE6IGFueSBbXSA9IFtdO1xuICBwcm9kdWN0X2FsbF9sZW5ndGg6IG51bWJlcjtcblxuICByZWQ6IHN0cmluZyA9ICdyZWQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRQcm9kdWN0KCd1bmRlcnJldmlldycpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5wcm9kdWN0X2FsbF9kYXRhID0gW107XG4gICAgaWYgKHRoaXMuc3ViX3Byb2R1Y3RfYWxsKXRoaXMuc3ViX3Byb2R1Y3RfYWxsLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuXG4gIGdvVG9EYXNoYm9hcmQoKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgYWRtaW5gXSk7XG4gIH1cblxuXG4gIHNob3dMb2codmFsdWU6IGFueSkge1xuICAgIHRoaXMubG9hZGluZ19sb2cgPSB0cnVlO1xuICAgIHRoaXMubG9ncyA9IFtdO1xuICAgIGxldCBpZCA9IHZhbHVlLmlkO1xuICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldExvZ1Byb2R1Y3QoaWQpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT4ge1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSAnb2snKSB0aGlzLmxvZ3MgPSByZXMuZGF0YS5sb2dzO1xuICAgICAgICB0aGlzLmxvYWRpbmdfbG9nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdCh0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2R1Y3RfYWxsX2RhdGEgPSBbXTtcbiAgICB0aGlzLmxvYWRpbmdfcHJvZHVjdF9hbGwgPSB0cnVlO1xuICAgIHRoaXMucHJvZHVjdF9hbGwkID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFN0YXR1cyh0eXBlKTtcbiAgICB0aGlzLnN1Yl9wcm9kdWN0X2FsbCA9IHRoaXMucHJvZHVjdF9hbGwkLnN1YnNjcmliZSgocHJvZHVjdDogYW55KT0+IHtcbiAgICAgIHRoaXMucHJvZHVjdF9hbGwgPSBwcm9kdWN0LmRhdGE7XG4gICAgICBsZXQgY2F0ZWdvcnk6IGFueVtdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdF9hbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2F0ZWdvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0X2FsbF9kYXRhLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IHRoaXMucHJvZHVjdF9hbGxbaV0uaWQsXG4gICAgICAgICAgICBjb21wYW55bmFtZTogdGhpcy5wcm9kdWN0X2FsbFtpXS5jb21wYW55bmFtZSxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvZHVjdF9hbGxbaV0ubmFtZSxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5wcm9kdWN0X2FsbFtpXS5zdGF0dXMsXG4gICAgICAgICAgICBjb2xvcnN0YXR1czogdGhpcy5wcm9kdWN0X2FsbFtpXS5zdGF0dXMucmVwbGFjZShcIiBcIiwgXCJcIikudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnByb2R1Y3RfYWxsW2ldLmNhdGVnb3J5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY2F0ZWdvcnkucHVzaCh0aGlzLnByb2R1Y3RfYWxsW2ldLmNhdGVnb3J5W2pdICsgXCIgXCIpO1xuICAgICAgICAgIF8ubWVyZ2UodGhpcy5wcm9kdWN0X2FsbF9kYXRhW2ldLCB7J2NhdGVnb3J5JzogY2F0ZWdvcnl9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdF9hbGxfZGF0YSk7XG4gICAgICB0aGlzLnByb2R1Y3RfYWxsX2xlbmd0aCA9IHRoaXMucHJvZHVjdF9hbGwubGVuZ3RoO1xuICAgICAgdGhpcy5sb2FkaW5nX3Byb2R1Y3RfYWxsID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGdvVG9Qcm9kdWN0RGV0YWlsKHZhbHVlOiBhbnkpIHtcbiAgICBsZXQgaWQgPSB2YWx1ZS5pZDtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2BhZG1pbi9wcm9kdWN0LyR7aWR9YF0pO1xuICB9XG59XG4iXX0=
