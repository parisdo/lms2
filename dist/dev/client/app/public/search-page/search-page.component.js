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
var router_1 = require('@angular/router');
var product_service_1 = require("../../shared/services/api/product/product.service");
var SearchPageComponent = (function () {
    function SearchPageComponent(route, _router, _productService) {
        this.route = route;
        this._router = _router;
        this._productService = _productService;
        this.loading = true;
        this.noResult = false;
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.noResult = false;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.search_keyword = params['q'];
            _this._productService.searchProduct(_this.search_keyword)
                .subscribe(function (product) {
                if (product.data.length > 0) {
                    _this.products = product.data;
                    _this.loading = false;
                    _this.noResult = false;
                }
                else {
                    _this.loading = false;
                    _this.noResult = true;
                }
            });
        });
    };
    SearchPageComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    SearchPageComponent.prototype.onNavigate = function (productId) {
        this._router.navigate([("/product/single-service/" + productId)]);
    };
    SearchPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-search-page',
            templateUrl: 'search-page.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService])
    ], SearchPageComponent);
    return SearchPageComponent;
}());
exports.SearchPageComponent = SearchPageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wdWJsaWMvc2VhcmNoLXBhZ2Uvc2VhcmNoLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQXdDLGlCQUFpQixDQUFDLENBQUE7QUFFMUQsZ0NBQTZCLG1EQUFtRCxDQUFDLENBQUE7QUFRakY7SUFRRSw2QkFBb0IsS0FBcUIsRUFDckIsT0FBZSxFQUNmLGVBQStCO1FBRi9CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFMbkQsWUFBTyxHQUFXLElBQUksQ0FBQztRQUN2QixhQUFRLEdBQVMsS0FBSyxDQUFDO0lBTXZCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBeUJDO1FBeEJDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDbEIsTUFBTTthQUNOLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDZixLQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDO2lCQUNwRCxTQUFTLENBQUMsVUFBQyxPQUFXO2dCQUVyQixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUMxQixLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBRTdCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsQ0FBQztnQkFBQSxJQUFJLENBQUEsQ0FBQztvQkFDSixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLENBQUM7WUFHSCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsU0FBaUI7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyw4QkFBMkIsU0FBUyxDQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUF2REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDRCQUE0QjtTQUMxQyxDQUFDOzsyQkFBQTtJQXNERiwwQkFBQztBQUFELENBcERBLEFBb0RDLElBQUE7QUFwRFksMkJBQW1CLHNCQW9EL0IsQ0FBQSIsImZpbGUiOiJhcHAvcHVibGljL3NlYXJjaC1wYWdlL3NlYXJjaC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3RiLXNlYXJjaC1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWFyY2gtcGFnZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHNlYXJjaF9rZXl3b3JkOnN0cmluZztcbiAgc3ViOiBTdWJzY3JpcHRpb247XG4gIHByb2R1Y3RzOmFueTtcbiAgbG9hZGluZzpib29sZWFuID0gdHJ1ZTtcbiAgbm9SZXN1bHQ6Ym9vbGVhbj1mYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubm9SZXN1bHQgPSBmYWxzZTtcblxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgLnBhcmFtc1xuICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLnNlYXJjaF9rZXl3b3JkID0gcGFyYW1zWydxJ107XG4gICAgICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLnNlYXJjaFByb2R1Y3QodGhpcy5zZWFyY2hfa2V5d29yZClcbiAgICAgICAgICAuc3Vic2NyaWJlKChwcm9kdWN0OmFueSk9PntcblxuICAgICAgICAgICAgaWYocHJvZHVjdC5kYXRhLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdC5kYXRhO1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb2R1Y3QuZGF0YSk7XG4gICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLm5vUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMubm9SZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICB9KTtcblxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgb25OYXZpZ2F0ZShwcm9kdWN0SWQ6IG51bWJlcikge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC9wcm9kdWN0L3NpbmdsZS1zZXJ2aWNlLyR7cHJvZHVjdElkfWBdKTtcbiAgfVxuXG5cbn1cbiJdfQ==
