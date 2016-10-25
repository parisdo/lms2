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
var product_service_1 = require("../services/api/product/product.service");
var FooterComponent = (function () {
    function FooterComponent(_router, _productService) {
        this._router = _router;
        this._productService = _productService;
        this.tags = {
            category: '',
            department: '',
            industry: ''
        };
        this._footers = [];
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.footers;
        this.products$ = this._productService.getProductTags();
        this.sub = this.products$.subscribe(function (products) {
            _this.tags.category = products.categories[0];
            _this.tags.industry = products.industries[0];
            _this.tags.department = products.departments[0];
        });
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    FooterComponent.prototype.onSearch = function (value) {
        this._router.navigate([("/product/search/" + value)]);
    };
    FooterComponent.prototype.onNavigate = function (path, type, id) {
        this._router.navigate([(path + "/" + type + "/" + id)]);
    };
    Object.defineProperty(FooterComponent.prototype, "footers", {
        get: function () {
            return this._footers;
        },
        enumerable: true,
        configurable: true
    });
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-footer',
            templateUrl: 'footer.component.html',
            styleUrls: ['footer.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxnQ0FBNkIseUNBQXlDLENBQUMsQ0FBQTtBQWF2RTtJQUdFLHlCQUFvQixPQUFlLEVBQ2YsZUFBK0I7UUFEL0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQU81QyxTQUFJLEdBQVE7WUFDakIsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztRQStCTSxhQUFRLEdBQVUsRUFBRSxDQUFDO0lBekM3QixDQUFDO0lBWUQsa0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBYTtZQUNoRCxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQU1qRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUdELGtDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQW1CLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLElBQVksRUFBRSxJQUFZLEVBQUUsRUFBVTtRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUcsSUFBSSxTQUFJLElBQUksU0FBSSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUtELHNCQUFJLG9DQUFPO2FBQVg7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQXpESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDOzt1QkFBQTtJQXNERixzQkFBQztBQUFELENBcERBLEFBb0RDLElBQUE7QUFwRFksdUJBQWUsa0JBb0QzQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3RiLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvb3Rlci5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcbiAgfVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuICBwcm9kdWN0cyQ6IE9ic2VydmFibGU8YW55PjtcblxuXG4gIHB1YmxpYyB0YWdzOiBhbnkgPSB7XG4gICAgY2F0ZWdvcnk6ICcnLFxuICAgIGRlcGFydG1lbnQ6ICcnLFxuICAgIGluZHVzdHJ5OiAnJ1xuICB9O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9vdGVycztcbiAgICB0aGlzLnByb2R1Y3RzJCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RUYWdzKCk7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnByb2R1Y3RzJC5zdWJzY3JpYmUoKHByb2R1Y3RzOiBhbnkpPT4ge1xuICAgICAgdGhpcy50YWdzLmNhdGVnb3J5ID0gcHJvZHVjdHMuY2F0ZWdvcmllc1swXTtcbiAgICAgIHRoaXMudGFncy5pbmR1c3RyeSA9IHByb2R1Y3RzLmluZHVzdHJpZXNbMF07XG4gICAgICB0aGlzLnRhZ3MuZGVwYXJ0bWVudCA9IHByb2R1Y3RzLmRlcGFydG1lbnRzWzBdO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMudGFncy5jYXRlZ29yeSk7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMudGFncy5pbmR1c3RyeSk7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMudGFncy5kZXBhcnRtZW50KTtcblxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3ViKSB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLy9TZWFyY2ggUHJvZHVjdFxuICBvblNlYXJjaCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgL3Byb2R1Y3Qvc2VhcmNoLyR7dmFsdWV9YF0pO1xuICB9XG5cbiAgb25OYXZpZ2F0ZShwYXRoOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgaWQ6IG51bWJlcikge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYCR7cGF0aH0vJHt0eXBlfS8ke2lkfWBdKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfZm9vdGVyczogYW55W10gPSBbXTtcblxuICBnZXQgZm9vdGVycygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvb3RlcnM7XG4gIH1cblxufVxuIl19
