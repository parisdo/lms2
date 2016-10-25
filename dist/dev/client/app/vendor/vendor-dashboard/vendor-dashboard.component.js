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
var vendor_service_1 = require("../../shared/services/api/vendor/vendor.service");
var VendorDashboardComponent = (function () {
    function VendorDashboardComponent(_router, _vendorService) {
        this._router = _router;
        this._vendorService = _vendorService;
        this.username = '';
        this.vendor_organization = {
            companyname: "",
            logo: ""
        };
        this.vendor_profile = {
            name: ""
        };
    }
    VendorDashboardComponent.prototype.ngOnInit = function () {
        this.getOrganizationProfile();
        this.getVendorProfile();
    };
    VendorDashboardComponent.prototype.ngOnDestroy = function () {
        if (this.sub_vendor_organization)
            this.sub_vendor_organization.unsubscribe();
        if (this.sub_vendor_profile)
            this.sub_vendor_profile.unsubscribe();
    };
    VendorDashboardComponent.prototype.getOrganizationProfile = function () {
        var _this = this;
        this.vendor_organization$ = this._vendorService.getOrganizationProfile();
        this.sub_vendor_organization = this.vendor_organization$.subscribe(function (vendor) {
            _this.vendor_organization.companyname = vendor[0].companyname;
            _this.vendor_organization.logo = vendor[0].logo;
        });
    };
    VendorDashboardComponent.prototype.goToEditProfile = function () {
        this._router.navigate(["vendor/profile"]);
    };
    VendorDashboardComponent.prototype.getVendorProfile = function () {
        var _this = this;
        this.vendor_profile$ = this._vendorService.getVendorProfile();
        this.sub_vendor_profile = this.vendor_profile$.subscribe(function (vendor) {
            _this.vendor_profile.name = vendor[0].name;
        });
    };
    VendorDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-vendor-dashboard',
            templateUrl: 'vendor-dashboard.component.html',
            styleUrls: ['vendor-dashboard.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, vendor_service_1.VendorService])
    ], VendorDashboardComponent);
    return VendorDashboardComponent;
}());
exports.VendorDashboardComponent = VendorDashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92ZW5kb3IvdmVuZG9yLWRhc2hib2FyZC92ZW5kb3ItZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBSWhELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLCtCQUE0QixpREFBaUQsQ0FBQyxDQUFBO0FBUzlFO0lBdUJFLGtDQUFvQixPQUFlLEVBQ2YsY0FBNkI7UUFEN0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBcEJqRCxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBU2Ysd0JBQW1CLEdBQUc7WUFDM0IsV0FBVyxFQUFFLEVBQUU7WUFDZixJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7UUFFSyxtQkFBYyxHQUFHO1lBQ3RCLElBQUksRUFBQyxFQUFFO1NBQ1IsQ0FBQztJQUtGLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7WUFBQSxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQUEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUFFRCx5REFBc0IsR0FBdEI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFXO1lBQzdFLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEdBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUM5RCxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxHQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFbEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0RBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFHRCxtREFBZ0IsR0FBaEI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7WUFDbkUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUU1QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFoRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDOztnQ0FBQTtJQTRERiwrQkFBQztBQUFELENBMURBLEFBMERDLElBQUE7QUExRFksZ0NBQXdCLDJCQTBEcEMsQ0FBQSIsImZpbGUiOiJhcHAvdmVuZG9yL3ZlbmRvci1kYXNoYm9hcmQvdmVuZG9yLWRhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtWZW5kb3J9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL3ZlbmRvci5tb2RlbFwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VmVuZG9yU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkvdmVuZG9yL3ZlbmRvci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3RiLXZlbmRvci1kYXNoYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJ3ZlbmRvci1kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndmVuZG9yLWRhc2hib2FyZC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgVmVuZG9yRGFzaGJvYXJkQ29tcG9uZW50IHtcblxuICBlcnJvck1lc3NhZ2U6IGFueTtcblxuICB1c2VybmFtZTogc3RyaW5nID0gJyc7XG5cbiAgc3ViX3ZlbmRvcl9vcmdhbml6YXRpb246IFN1YnNjcmlwdGlvbjtcbiAgc3ViX3ZlbmRvcl9wcm9maWxlOiBTdWJzY3JpcHRpb247XG4gIHZlbmRvcl9vcmdhbml6YXRpb24kOiBPYnNlcnZhYmxlPGFueT47XG4gIC8vIHZlbmRvcl9vcmdhbml6YXRpb246IFZlbmRvcjtcbiAgdmVuZG9yX3Byb2ZpbGUkOiBPYnNlcnZhYmxlPGFueT47XG4gIC8vIHZlbmRvcl9wcm9maWxlOiBWZW5kb3I7XG5cbiAgcHVibGljIHZlbmRvcl9vcmdhbml6YXRpb24gPSB7XG4gICAgY29tcGFueW5hbWU6IFwiXCIsXG4gICAgbG9nbzogXCJcIlxuICB9O1xuXG4gIHB1YmxpYyB2ZW5kb3JfcHJvZmlsZSA9IHtcbiAgICBuYW1lOlwiXCJcbiAgfTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF92ZW5kb3JTZXJ2aWNlOiBWZW5kb3JTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldE9yZ2FuaXphdGlvblByb2ZpbGUoKTtcbiAgICB0aGlzLmdldFZlbmRvclByb2ZpbGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yl92ZW5kb3Jfb3JnYW5pemF0aW9uKXRoaXMuc3ViX3ZlbmRvcl9vcmdhbml6YXRpb24udW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5zdWJfdmVuZG9yX3Byb2ZpbGUpdGhpcy5zdWJfdmVuZG9yX3Byb2ZpbGUudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGdldE9yZ2FuaXphdGlvblByb2ZpbGUoKSB7XG4gICAgdGhpcy52ZW5kb3Jfb3JnYW5pemF0aW9uJCA9IHRoaXMuX3ZlbmRvclNlcnZpY2UuZ2V0T3JnYW5pemF0aW9uUHJvZmlsZSgpO1xuICAgIHRoaXMuc3ViX3ZlbmRvcl9vcmdhbml6YXRpb24gPSB0aGlzLnZlbmRvcl9vcmdhbml6YXRpb24kLnN1YnNjcmliZSgodmVuZG9yOiBhbnkpPT4ge1xuICAgICAgdGhpcy52ZW5kb3Jfb3JnYW5pemF0aW9uLmNvbXBhbnluYW1lICA9IHZlbmRvclswXS5jb21wYW55bmFtZTtcbiAgICAgIHRoaXMudmVuZG9yX29yZ2FuaXphdGlvbi5sb2dvICA9IHZlbmRvclswXS5sb2dvO1xuXG4gICAgfSk7XG4gIH1cblxuICBnb1RvRWRpdFByb2ZpbGUoKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgdmVuZG9yL3Byb2ZpbGVgXSk7XG4gIH1cblxuXG4gIGdldFZlbmRvclByb2ZpbGUoKSB7XG4gICAgdGhpcy52ZW5kb3JfcHJvZmlsZSQgPSB0aGlzLl92ZW5kb3JTZXJ2aWNlLmdldFZlbmRvclByb2ZpbGUoKTtcbiAgICB0aGlzLnN1Yl92ZW5kb3JfcHJvZmlsZSA9IHRoaXMudmVuZG9yX3Byb2ZpbGUkLnN1YnNjcmliZSgodmVuZG9yOiBhbnkpPT4ge1xuICAgICAgdGhpcy52ZW5kb3JfcHJvZmlsZS5uYW1lID0gdmVuZG9yWzBdLm5hbWU7XG5cbiAgICB9KTtcbiAgfVxufVxuIl19
