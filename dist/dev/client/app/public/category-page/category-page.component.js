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
var product_service_1 = require('../../shared/services/api/product/product.service');
var filter_product_service_1 = require('../../shared/services/function/filter-product.service');
var CategoryPageComponent = (function () {
    function CategoryPageComponent(route, _router, _productService) {
        this.route = route;
        this._router = _router;
        this._productService = _productService;
        this.status = {
            isFirstOpen: true,
        };
        this.tags = {
            category: [],
            department: [],
            industry: [],
            language: []
        };
        this.checkAll = {
            industry: false,
            category: false,
            department: false,
            language: false
        };
        this.checked = true;
        this.filterService = filter_product_service_1.SingletonFilterService.getInstance();
    }
    CategoryPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = [];
        this.sub = this.route
            .params.subscribe(function (params) {
            _this.type = params['type'];
            _this.id = params['id'];
            _this.tags$ = _this._productService.getProductCategoryTags(_this.id);
            _this.tags$.subscribe(function (products) {
                _this.tags.category = products.categories;
                _this.tags.industry = products.industries;
                _this.tags.department = products.departments;
                _this.tags.language = products.languages;
            });
            _this.getProductByTypeAndTag(_this.type, _this.id);
        });
    };
    CategoryPageComponent.prototype.ngDoCheck = function () {
        this.bodyHeight = this.resultsControlContainerEl.nativeElement.offsetHeight;
    };
    CategoryPageComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
        if (this.sub_products)
            this.sub_products.unsubscribe();
        if (this.sub_allproducts)
            this.sub_allproducts.unsubscribe();
    };
    CategoryPageComponent.prototype.getProductByTypeAndTag = function (type, id) {
        var _this = this;
        this.all_products$ = this._productService.getProductTagsByType(type, id);
        this.sub_allproducts = this.all_products$.subscribe(function (products) {
            _this.products = products;
        });
    };
    CategoryPageComponent.prototype.onCheckAllTag = function (type, event) {
        var _this = this;
        this.status.isFirstOpen = false;
        var onCheckAllTag = Promise.resolve(this.filterService.onCheckAllTag(type, event));
        switch (type) {
            case 'department':
                this.checkAll.department = this.filterService.getCheckAllType(type);
                break;
            case 'industry':
                this.checkAll.industry = this.filterService.getCheckAllType(type);
                break;
            case 'language':
                this.checkAll.language = this.filterService.getCheckAllType(type);
                break;
            case 'category':
                this.checkAll.category = this.filterService.getCheckAllType(type);
                break;
        }
        onCheckAllTag.then(function (value) {
            _this.getProductByFilter(_this.filterService.getData());
        });
    };
    CategoryPageComponent.prototype.onCheckboxFilterTag = function (value, type, event) {
        var _this = this;
        event.currentTarget.checked ? this.checked = true : this.checked = false;
        var setFilter = Promise.resolve(this.filterService.setFilter(value, type, this.checked));
        var setAllData = Promise.resolve(this.filterService.setAllData());
        Promise.all([setFilter, setAllData]).then(function () {
            _this.getProductByFilter(_this.filterService.getData());
        });
    };
    CategoryPageComponent.prototype.getProductByFilter = function (value) {
        var _this = this;
        this.products$ = this._productService.getProductByFilter(value);
        this.sub_products = this.products$.subscribe(function (product) {
            _this.products = product;
        });
    };
    CategoryPageComponent.prototype.getStyle = function (categoryId) {
        return (this.id == categoryId) ? '#ff0000' : '#ffffff';
    };
    CategoryPageComponent.prototype.onNavigate = function (path, type, id) {
        if (this.id != id)
            this._router.navigate([(path + "/" + type + "/" + id)]);
    };
    __decorate([
        core_1.ViewChild('cardContainer'), 
        __metadata('design:type', core_1.ElementRef)
    ], CategoryPageComponent.prototype, "resultsControlContainerEl", void 0);
    CategoryPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-browse-page',
            templateUrl: 'category-page.component.html',
            styleUrls: ['category-page.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService])
    ], CategoryPageComponent);
    return CategoryPageComponent;
}());
exports.CategoryPageComponent = CategoryPageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wdWJsaWMvY2F0ZWdvcnktcGFnZS9jYXRlZ29yeS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBQ3ZFLHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGdDQUE2QixtREFBbUQsQ0FBQyxDQUFBO0FBR2pGLHVDQUFxQyx1REFBdUQsQ0FBQyxDQUFBO0FBUzdGO0lBRUUsK0JBQW9CLEtBQXFCLEVBQVUsT0FBZSxFQUFVLGVBQStCO1FBQXZGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUlwRyxXQUFNLEdBQVE7WUFDbkIsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQztRQWFLLFNBQUksR0FBUTtZQUNqQixRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFFSyxhQUFRLEdBQVE7WUFDckIsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsS0FBSztZQUNmLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUM7UUFLRixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsK0NBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFuQ3JELENBQUM7SUF3Q0Qsd0NBQVEsR0FBUjtRQUFBLGlCQW9CQztRQWxCQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2xCLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3RCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLEtBQUks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LENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsVUFBa0I7UUFDekIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxVQUFVLENBQUMsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQ3pELENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsSUFBVyxFQUFDLElBQVcsRUFBRSxFQUFTO1FBQzNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFHLElBQUksU0FBSSxJQUFJLFNBQUksRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUEvRkQ7UUFBQyxnQkFBUyxDQUFDLGVBQWUsQ0FBQzs7NEVBQUE7SUFoRDdCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDM0MsQ0FBQzs7NkJBQUE7SUE2SUYsNEJBQUM7QUFBRCxDQTNJQSxBQTJJQyxJQUFBO0FBM0lZLDZCQUFxQix3QkEySWpDLENBQUEiLCJmaWxlIjoiYXBwL3B1YmxpYy9jYXRlZ29yeS1wYWdlL2NhdGVnb3J5LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7U2luZ2xldG9uRmlsdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Z1bmN0aW9uL2ZpbHRlci1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd0Yi1icm93c2UtcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnY2F0ZWdvcnktcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjYXRlZ29yeS1wYWdlLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBzdGF0dXM6IGFueSA9IHtcbiAgICBpc0ZpcnN0T3BlbjogdHJ1ZSxcbiAgfTtcblxuICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgc3ViX2FsbHByb2R1Y3RzOiBTdWJzY3JpcHRpb247XG4gIHN1Yl9wcm9kdWN0czogU3Vic2NyaXB0aW9uO1xuXG4gIHRhZ3MkOiBPYnNlcnZhYmxlPGFueT47XG4gIHByb2R1Y3RzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBhbGxfcHJvZHVjdHMkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgcHJvZHVjdHM6IGFueTtcblxuXG4gIHB1YmxpYyB0YWdzOiBhbnkgPSB7XG4gICAgY2F0ZWdvcnk6IFtdLFxuICAgIGRlcGFydG1lbnQ6IFtdLFxuICAgIGluZHVzdHJ5OiBbXSxcbiAgICBsYW5ndWFnZTogW11cbiAgfTtcblxuICBwdWJsaWMgY2hlY2tBbGw6IGFueSA9IHtcbiAgICBpbmR1c3RyeTogZmFsc2UsXG4gICAgY2F0ZWdvcnk6IGZhbHNlLFxuICAgIGRlcGFydG1lbnQ6IGZhbHNlLFxuICAgIGxhbmd1YWdlOiBmYWxzZVxuICB9O1xuXG5cbiAgdHlwZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBjaGVja2VkOiBib29sZWFuID0gdHJ1ZTtcbiAgZmlsdGVyU2VydmljZSA9IFNpbmdsZXRvbkZpbHRlclNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcblxuICBAVmlld0NoaWxkKCdjYXJkQ29udGFpbmVyJykgcmVzdWx0c0NvbnRyb2xDb250YWluZXJFbDogRWxlbWVudFJlZjtcbiAgYm9keUhlaWdodDogbnVtYmVyO1xuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLnR5cGUgPSBwYXJhbXNbJ3R5cGUnXTtcbiAgICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcblxuICAgICAgICB0aGlzLnRhZ3MkID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdENhdGVnb3J5VGFncyh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy50YWdzJC5zdWJzY3JpYmUoKHByb2R1Y3RzOiBhbnkpPT4ge1xuICAgICAgICAgIHRoaXMudGFncy5jYXRlZ29yeSA9IHByb2R1Y3RzLmNhdGVnb3JpZXM7XG4gICAgICAgICAgdGhpcy50YWdzLmluZHVzdHJ5ID0gcHJvZHVjdHMuaW5kdXN0cmllcztcbiAgICAgICAgICB0aGlzLnRhZ3MuZGVwYXJ0bWVudCA9IHByb2R1Y3RzLmRlcGFydG1lbnRzO1xuICAgICAgICAgIHRoaXMudGFncy5sYW5ndWFnZSA9IHByb2R1Y3RzLmxhbmd1YWdlcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0QnlUeXBlQW5kVGFnKHRoaXMudHlwZSwgdGhpcy5pZCk7XG5cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIHRoaXMuYm9keUhlaWdodCA9IHRoaXMucmVzdWx0c0NvbnRyb2xDb250YWluZXJFbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yil0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLnN1Yl9wcm9kdWN0cyl0aGlzLnN1Yl9wcm9kdWN0cy51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLnN1Yl9hbGxwcm9kdWN0cyl0aGlzLnN1Yl9hbGxwcm9kdWN0cy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdEJ5VHlwZUFuZFRhZyh0eXBlOiBzdHJpbmcsIGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLmFsbF9wcm9kdWN0cyQgPSB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0VGFnc0J5VHlwZSh0eXBlLCBpZCk7XG4gICAgdGhpcy5zdWJfYWxscHJvZHVjdHMgPSB0aGlzLmFsbF9wcm9kdWN0cyQuc3Vic2NyaWJlKChwcm9kdWN0cyk9PiB7XG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgfSk7XG4gIH1cblxuXG4gIG9uQ2hlY2tBbGxUYWcodHlwZTogc3RyaW5nLCBldmVudDogYW55KSB7XG5cbiAgICB0aGlzLnN0YXR1cy5pc0ZpcnN0T3BlbiA9IGZhbHNlO1xuICAgIGxldCBvbkNoZWNrQWxsVGFnID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZmlsdGVyU2VydmljZS5vbkNoZWNrQWxsVGFnKHR5cGUsIGV2ZW50KSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdkZXBhcnRtZW50JzpcbiAgICAgICAgdGhpcy5jaGVja0FsbC5kZXBhcnRtZW50ID0gdGhpcy5maWx0ZXJTZXJ2aWNlLmdldENoZWNrQWxsVHlwZSh0eXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbmR1c3RyeSc6XG4gICAgICAgIHRoaXMuY2hlY2tBbGwuaW5kdXN0cnkgPSB0aGlzLmZpbHRlclNlcnZpY2UuZ2V0Q2hlY2tBbGxUeXBlKHR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xhbmd1YWdlJzpcbiAgICAgICAgdGhpcy5jaGVja0FsbC5sYW5ndWFnZSA9IHRoaXMuZmlsdGVyU2VydmljZS5nZXRDaGVja0FsbFR5cGUodHlwZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2F0ZWdvcnknOlxuICAgICAgICB0aGlzLmNoZWNrQWxsLmNhdGVnb3J5ID0gdGhpcy5maWx0ZXJTZXJ2aWNlLmdldENoZWNrQWxsVHlwZSh0eXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgb25DaGVja0FsbFRhZy50aGVuKCh2YWx1ZSk9PiB7XG4gICAgICB0aGlzLmdldFByb2R1Y3RCeUZpbHRlcih0aGlzLmZpbHRlclNlcnZpY2UuZ2V0RGF0YSgpKVxuICAgIH0pO1xuXG4gIH1cblxuXG4gIG9uQ2hlY2tib3hGaWx0ZXJUYWcodmFsdWU6IGFueSwgdHlwZTogc3RyaW5nLCBldmVudDogYW55KSB7XG5cbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPyB0aGlzLmNoZWNrZWQgPSB0cnVlIDogdGhpcy5jaGVja2VkID0gZmFsc2U7XG5cbiAgICBsZXQgc2V0RmlsdGVyID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZmlsdGVyU2VydmljZS5zZXRGaWx0ZXIodmFsdWUsIHR5cGUsIHRoaXMuY2hlY2tlZCkpO1xuICAgIGxldCBzZXRBbGxEYXRhID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZmlsdGVyU2VydmljZS5zZXRBbGxEYXRhKCkpO1xuXG4gICAgUHJvbWlzZS5hbGwoW3NldEZpbHRlciwgc2V0QWxsRGF0YV0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5nZXRQcm9kdWN0QnlGaWx0ZXIodGhpcy5maWx0ZXJTZXJ2aWNlLmdldERhdGEoKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9kdWN0QnlGaWx0ZXIodmFsdWU6IGFueSkge1xuICAgIHRoaXMucHJvZHVjdHMkID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdEJ5RmlsdGVyKHZhbHVlKTtcbiAgICB0aGlzLnN1Yl9wcm9kdWN0cyA9IHRoaXMucHJvZHVjdHMkLnN1YnNjcmliZSgocHJvZHVjdDogYW55KT0+IHtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0O1xuICAgIH0pO1xuXG4gIH1cblxuICBnZXRTdHlsZShjYXRlZ29yeUlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKHRoaXMuaWQgPT0gY2F0ZWdvcnlJZCkgPyAnI2ZmMDAwMCcgOiAnI2ZmZmZmZic7XG4gIH1cblxuICBvbk5hdmlnYXRlKHBhdGg6c3RyaW5nLHR5cGU6c3RyaW5nLCBpZDpudW1iZXIpe1xuICAgIGlmKHRoaXMuaWQgIT0gaWQpIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYCR7cGF0aH0vJHt0eXBlfS8ke2lkfWBdKTtcbiAgfVxuXG5cbn1cbiJdfQ==
