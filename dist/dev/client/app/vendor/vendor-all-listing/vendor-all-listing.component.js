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
var message_service_1 = require("../../shared/validation/message-service");
var VendorAllListingComponent = (function () {
    function VendorAllListingComponent(_prodctService, route, _router) {
        this._prodctService = _prodctService;
        this.route = route;
        this._router = _router;
        this.msgs = [];
        this.displayDelete = false;
    }
    VendorAllListingComponent.prototype.ngOnInit = function () {
        this.getProductOfDeveloper();
    };
    VendorAllListingComponent.prototype.getProductOfDeveloper = function () {
        var _this = this;
        this.product$ = this._prodctService.getProductOfDeveloper();
        this.sub = this.product$.subscribe(function (product) {
            _this.products = product;
        });
    };
    VendorAllListingComponent.prototype.toggleDialogDelete = function (id) {
        this.displayDelete = !this.displayDelete;
        this.selectedProductId = id;
    };
    VendorAllListingComponent.prototype.onDeleteProduct = function () {
        var _this = this;
        this._prodctService.deleteProduct(this.selectedProductId)
            .subscribe(function (res) {
            _this.showMessage(message_service_1.msg.getVendorDeleteStatusMessage(200));
            _this.onRefresh();
        });
    };
    VendorAllListingComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    VendorAllListingComponent.prototype.onRefresh = function () {
        this.toggleDialogDelete();
        this.products = [];
        this.getProductOfDeveloper();
    };
    VendorAllListingComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    VendorAllListingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-vendor-all-listing',
            templateUrl: 'vendor-all-listing.component.html',
            styleUrls: ['vendor-all-listing.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute, router_1.Router])
    ], VendorAllListingComponent);
    return VendorAllListingComponent;
}());
exports.VendorAllListingComponent = VendorAllListingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92ZW5kb3IvdmVuZG9yLWFsbC1saXN0aW5nL3ZlbmRvci1hbGwtbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUczRCxnQ0FBNkIsbURBQW1ELENBQUMsQ0FBQTtBQUNqRix1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV2RCxnQ0FBa0IseUNBQ2xCLENBQUMsQ0FEMEQ7QUFRM0Q7SUFTRSxtQ0FDVSxjQUE2QixFQUFVLEtBQW9CLEVBQVUsT0FBYztRQUFuRixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBTDdGLFNBQUksR0FBYyxFQUFFLENBQUM7UUFFckIsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFJN0IsQ0FBQztJQUVILDRDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU8seURBQXFCLEdBQTdCO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBVztZQUM3QyxLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxzREFBa0IsR0FBbEIsVUFBbUIsRUFBTztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxtREFBZSxHQUFmO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7YUFDdEQsU0FBUyxDQUFDLFVBQUMsR0FBTztZQUNqQixLQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFHLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0NBQVcsR0FBWCxVQUFZLEdBQVE7UUFBcEIsaUJBTUM7UUFMQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw2Q0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBNURIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7U0FDaEQsQ0FBQzs7aUNBQUE7SUE0REYsZ0NBQUM7QUFBRCxDQTFEQSxBQTBEQyxJQUFBO0FBMURZLGlDQUF5Qiw0QkEwRHJDLENBQUEiLCJmaWxlIjoiYXBwL3ZlbmRvci92ZW5kb3ItYWxsLWxpc3RpbmcvdmVuZG9yLWFsbC1saXN0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QubW9kZWxcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9hcGlcIjtcbmltcG9ydCB7bXNnfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3ZhbGlkYXRpb24vbWVzc2FnZS1zZXJ2aWNlXCJcbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3RiLXZlbmRvci1hbGwtbGlzdGluZycsXG4gIHRlbXBsYXRlVXJsOiAndmVuZG9yLWFsbC1saXN0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3ZlbmRvci1hbGwtbGlzdGluZy5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBWZW5kb3JBbGxMaXN0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LE9uRGVzdHJveXtcblxuICBwcm9kdWN0czpQcm9kdWN0W107XG4gIHN1YjpTdWJzY3JpcHRpb247XG4gIHByb2R1Y3QkOk9ic2VydmFibGU8YW55PjtcbiAgbXNnczogTWVzc2FnZVtdID0gW107XG4gIHNlbGVjdGVkUHJvZHVjdElkOiBudW1iZXI7XG4gIGRpc3BsYXlEZWxldGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9wcm9kY3RTZXJ2aWNlOlByb2R1Y3RTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9yb3V0ZXI6Um91dGVyXG4gICl7fVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5nZXRQcm9kdWN0T2ZEZXZlbG9wZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdE9mRGV2ZWxvcGVyKCkge1xuICAgIHRoaXMucHJvZHVjdCQgPSB0aGlzLl9wcm9kY3RTZXJ2aWNlLmdldFByb2R1Y3RPZkRldmVsb3BlcigpO1xuICAgIHRoaXMuc3ViID0gdGhpcy5wcm9kdWN0JC5zdWJzY3JpYmUoKHByb2R1Y3Q6YW55KT0+e1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3Q7XG4gICAgfSlcbiAgfVxuXG4gIHRvZ2dsZURpYWxvZ0RlbGV0ZShpZD86YW55KXtcbiAgICB0aGlzLmRpc3BsYXlEZWxldGUgPSAhdGhpcy5kaXNwbGF5RGVsZXRlO1xuICAgIHRoaXMuc2VsZWN0ZWRQcm9kdWN0SWQgPSBpZDtcbiAgfVxuXG4gIG9uRGVsZXRlUHJvZHVjdCgpe1xuICAgIHRoaXMuX3Byb2RjdFNlcnZpY2UuZGVsZXRlUHJvZHVjdCh0aGlzLnNlbGVjdGVkUHJvZHVjdElkKVxuICAgICAgLnN1YnNjcmliZSgocmVzOmFueSk9PntcbiAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VmVuZG9yRGVsZXRlU3RhdHVzTWVzc2FnZSgyMDApKTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2goKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2hvd01lc3NhZ2UobXNnOiBhbnkpe1xuICAgIHRoaXMubXNncyA9IFtdO1xuICAgIHRoaXMubXNncy5wdXNoKG1zZyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIG9uUmVmcmVzaCgpIHtcbiAgICB0aGlzLnRvZ2dsZURpYWxvZ0RlbGV0ZSgpO1xuICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICB0aGlzLmdldFByb2R1Y3RPZkRldmVsb3BlcigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1Yil0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cblxuXG5cbn1cbiJdfQ==
