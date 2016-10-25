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
var VendorListingComponent = (function () {
    function VendorListingComponent(_router) {
        this._router = _router;
        this.userUpdated = new core_1.EventEmitter();
        this.color = '#bec1c1';
    }
    VendorListingComponent.prototype.onNavigate = function (path, id) {
        this._router.navigate([(path + "/" + id)]);
    };
    VendorListingComponent.prototype.onDeleteProduct = function (id) {
        this.userUpdated.emit(id);
    };
    VendorListingComponent.prototype.ngOnInit = function () {
        if (this.status != null) {
            this.color = this.status.replace(" ", "").toLowerCase();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], VendorListingComponent.prototype, "logo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], VendorListingComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], VendorListingComponent.prototype, "description", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], VendorListingComponent.prototype, "status", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], VendorListingComponent.prototype, "id", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VendorListingComponent.prototype, "userUpdated", void 0);
    VendorListingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-vendor-listing',
            templateUrl: 'vendor-listing.component.html',
            styleUrls: ['vendor-listing.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], VendorListingComponent);
    return VendorListingComponent;
}());
exports.VendorListingComponent = VendorListingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92ZW5kb3IvdmVuZG9yLWFsbC1saXN0aW5nL3ZlbmRvci1saXN0aW5nL3ZlbmRvci1saXN0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBQzdFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBU3ZDO0lBYUUsZ0NBQ1UsT0FBYztRQUFkLFlBQU8sR0FBUCxPQUFPLENBQU87UUFOZCxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRzNDLFVBQUssR0FBVyxTQUFTLENBQUM7SUFJeEIsQ0FBQztJQUVILDJDQUFVLEdBQVYsVUFBVyxJQUFXLEVBQUUsRUFBUztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUcsSUFBSSxTQUFJLEVBQUUsQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZ0RBQWUsR0FBZixVQUFnQixFQUFTO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pELENBQUM7SUFDSCxDQUFDO0lBM0JEO1FBQUMsWUFBSyxFQUFFOzt3REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt3REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsrREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzswREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztzREFBQTtJQUVSO1FBQUMsYUFBTSxFQUFFOzsrREFBQTtJQWZYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDNUMsQ0FBQzs7OEJBQUE7SUFrQ0YsNkJBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLDhCQUFzQix5QkFnQ2xDLENBQUEiLCJmaWxlIjoiYXBwL3ZlbmRvci92ZW5kb3ItYWxsLWxpc3RpbmcvdmVuZG9yLWxpc3RpbmcvdmVuZG9yLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3RiLXZlbmRvci1saXN0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICd2ZW5kb3ItbGlzdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd2ZW5kb3ItbGlzdGluZy5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgVmVuZG9yTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBASW5wdXQoKSBsb2dvOnN0cmluZztcbiAgQElucHV0KCkgbmFtZTpzdHJpbmc7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOnN0cmluZztcbiAgQElucHV0KCkgc3RhdHVzOnN0cmluZztcbiAgQElucHV0KCkgaWQ6bnVtYmVyO1xuXG4gIEBPdXRwdXQoKSB1c2VyVXBkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIGNvbG9yOiBzdHJpbmcgPSAnI2JlYzFjMSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlclxuICApe31cblxuICBvbk5hdmlnYXRlKHBhdGg6c3RyaW5nLCBpZDpudW1iZXIpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYCR7cGF0aH0vJHtpZH1gXSk7XG4gIH1cblxuICBvbkRlbGV0ZVByb2R1Y3QoaWQ6bnVtYmVyKXtcbiAgICB0aGlzLnVzZXJVcGRhdGVkLmVtaXQoaWQpO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICBpZih0aGlzLnN0YXR1cyAhPSBudWxsKXtcbiAgICAgdGhpcy5jb2xvciA9IHRoaXMuc3RhdHVzLnJlcGxhY2UoXCIgXCIsIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9XG5cblxufVxuIl19
