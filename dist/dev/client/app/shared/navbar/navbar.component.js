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
var product_service_1 = require("../services/api/product/product.service");
var router_1 = require("@angular/router");
var NavbarComponent = (function () {
    function NavbarComponent(_router, _productService) {
        this._router = _router;
        this._productService = _productService;
        this.tags = {
            category: [],
            department: [],
            industry: []
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products$ = this._productService.getProductTags();
        this.sub = this.products$.subscribe(function (products) {
            _this.tags.category = products.categories;
            _this.tags.industry = products.industries;
            _this.tags.department = products.departments;
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    NavbarComponent.prototype.onSearch = function (value) {
        this._router.navigate([("/product/search/" + value)]);
    };
    NavbarComponent.prototype.onNavigate = function (path, type, id) {
        this._router.navigate([(path + "/" + type + "/" + id)]);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-navbar',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCxnQ0FBNkIseUNBQXlDLENBQUMsQ0FBQTtBQUN2RSx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQVN2QztJQUVFLHlCQUNVLE9BQWMsRUFDZCxlQUErQjtRQUQvQixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBT2xDLFNBQUksR0FBUTtZQUNqQixRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFDLEVBQUU7U0FDWixDQUFDO0lBVkYsQ0FBQztJQVlELGtDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBYTtZQUNoRCxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDekMsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUdELGtDQUFRLEdBQVIsVUFBUyxLQUFTO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQW1CLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLElBQVcsRUFBQyxJQUFXLEVBQUUsRUFBUztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUcsSUFBSSxTQUFJLElBQUksU0FBSSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQTVDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDOzt1QkFBQTtJQTBDRixzQkFBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF4Q1ksdUJBQWUsa0JBd0MzQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndGItbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICduYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmF2YmFyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKSB7XG4gIH1cblxuICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgcHJvZHVjdHMkOiBPYnNlcnZhYmxlPGFueT47XG5cblxuICBwdWJsaWMgdGFnczogYW55ID0ge1xuICAgIGNhdGVnb3J5OiBbXSxcbiAgICBkZXBhcnRtZW50OiBbXSxcbiAgICBpbmR1c3RyeTpbXVxuICB9O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZHVjdHMkID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFRhZ3MoKTtcbiAgICB0aGlzLnN1YiA9IHRoaXMucHJvZHVjdHMkLnN1YnNjcmliZSgocHJvZHVjdHM6IGFueSk9PiB7XG4gICAgICB0aGlzLnRhZ3MuY2F0ZWdvcnkgPSBwcm9kdWN0cy5jYXRlZ29yaWVzO1xuICAgICAgdGhpcy50YWdzLmluZHVzdHJ5ID0gcHJvZHVjdHMuaW5kdXN0cmllcztcbiAgICAgIHRoaXMudGFncy5kZXBhcnRtZW50ID0gcHJvZHVjdHMuZGVwYXJ0bWVudHM7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3ViKSB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLy9TZWFyY2ggUHJvZHVjdFxuICBvblNlYXJjaCh2YWx1ZTphbnkpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC9wcm9kdWN0L3NlYXJjaC8ke3ZhbHVlfWBdKTtcbiAgfVxuXG4gIG9uTmF2aWdhdGUocGF0aDpzdHJpbmcsdHlwZTpzdHJpbmcsIGlkOm51bWJlcil7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgJHtwYXRofS8ke3R5cGV9LyR7aWR9YF0pO1xuICB9XG5cblxufVxuIl19
