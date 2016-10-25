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
var BrowsePageComponent = (function () {
    function BrowsePageComponent(route, _productService, elementRef) {
        this.route = route;
        this._productService = _productService;
        this.elementRef = elementRef;
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
    BrowsePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = [];
        this.sub = this.route
            .params.subscribe(function (params) {
            _this.type = params['type'];
            _this.id = +params['id'];
            _this.tags$ = _this._productService.getProductTags();
            _this.tags$.subscribe(function (products) {
                _this.tags.category = products.categories;
                _this.tags.industry = products.industries;
                _this.tags.department = products.departments;
                _this.tags.language = products.languages;
            });
            var resetData = Promise.resolve(_this.filterService.resetData());
            var setFilter = Promise.resolve(_this.filterService.setFilter(_this.id, _this.type, _this.checked));
            var setAllData = Promise.resolve(_this.filterService.setAllData());
            Promise.all([resetData, setFilter, setAllData]).then(function () {
                _this.getProductByFilter(_this.filterService.getData());
            });
        });
    };
    BrowsePageComponent.prototype.ngDoCheck = function () {
        this.bodyHeight = this.resultsControlContainerEl.nativeElement.offsetHeight;
    };
    BrowsePageComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
        if (this.sub_products)
            this.sub_products.unsubscribe();
    };
    BrowsePageComponent.prototype.onCheckAllTag = function (type, event) {
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
    BrowsePageComponent.prototype.onCheckboxFilterTag = function (value, type, event) {
        var _this = this;
        event.currentTarget.checked ? this.checked = true : this.checked = false;
        var setFilter = Promise.resolve(this.filterService.setFilter(value, type, this.checked));
        var setAllData = Promise.resolve(this.filterService.setAllData());
        Promise.all([setFilter, setAllData]).then(function () {
            _this.getProductByFilter(_this.filterService.getData());
        });
    };
    BrowsePageComponent.prototype.getProductByFilter = function (value) {
        var _this = this;
        this.products$ = this._productService.getProductByFilter(value);
        this.sub_products = this.products$.subscribe(function (product) {
            _this.products = product;
        });
    };
    __decorate([
        core_1.ViewChild('cardContainer'), 
        __metadata('design:type', core_1.ElementRef)
    ], BrowsePageComponent.prototype, "resultsControlContainerEl", void 0);
    BrowsePageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-browse-page',
            templateUrl: 'browse-page.component.html',
            styleUrls: ['browse-page.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, product_service_1.ProductService, core_1.ElementRef])
    ], BrowsePageComponent);
    return BrowsePageComponent;
}());
exports.BrowsePageComponent = BrowsePageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wdWJsaWMvYnJvd3NlLXBhZ2UvYnJvd3NlLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsZ0NBQTZCLG1EQUFtRCxDQUFDLENBQUE7QUFHakYsdUNBQXFDLHVEQUF1RCxDQUFDLENBQUE7QUFVN0Y7SUFFRSw2QkFBb0IsS0FBcUIsRUFBVSxlQUErQixFQUFVLFVBQXFCO1FBQTdGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUUxRyxXQUFNLEdBQVE7WUFDbkIsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQztRQVdLLFNBQUksR0FBUTtZQUNqQixRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFFSyxhQUFRLEdBQVE7WUFDckIsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsS0FBSztZQUNmLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUM7UUFLRixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsK0NBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFqQytELENBQUM7SUFzQ3JILHNDQUFRLEdBQVI7UUFBQSxpQkEyQkM7UUF6QkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSzthQUNsQixNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN0QixLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixLQUFJLENB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QUFDLFNBQVMsQ0FBQyxVQUFDLE9BQVk7WUFDeEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBdkZEO1FBQUMsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7OzBFQUFBO0lBNUM3QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7OzJCQUFBO0lBK0hGLDBCQUFDO0FBQUQsQ0E3SEEsQUE2SEMsSUFBQTtBQTdIWSwyQkFBbUIsc0JBNkgvQixDQUFBIiwiZmlsZSI6ImFwcC9wdWJsaWMvYnJvd3NlLXBhZ2UvYnJvd3NlLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1NpbmdsZXRvbkZpbHRlclNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9mdW5jdGlvbi9maWx0ZXItcHJvZHVjdC5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd0Yi1icm93c2UtcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnYnJvd3NlLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYnJvd3NlLXBhZ2UuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIEJyb3dzZVBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjpFbGVtZW50UmVmKSB7fVxuXG4gIHB1YmxpYyBzdGF0dXM6IGFueSA9IHtcbiAgICBpc0ZpcnN0T3BlbjogdHJ1ZSxcbiAgfTtcblxuICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgc3ViX3Byb2R1Y3RzOiBTdWJzY3JpcHRpb247XG5cbiAgdGFncyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHJvZHVjdHMkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgcHJvZHVjdHM6IGFueTtcblxuXG4gIHB1YmxpYyB0YWdzOiBhbnkgPSB7XG4gICAgY2F0ZWdvcnk6IFtdLFxuICAgIGRlcGFydG1lbnQ6IFtdLFxuICAgIGluZHVzdHJ5OiBbXSxcbiAgICBsYW5ndWFnZTogW11cbiAgfTtcblxuICBwdWJsaWMgY2hlY2tBbGw6IGFueSA9IHtcbiAgICBpbmR1c3RyeTogZmFsc2UsXG4gICAgY2F0ZWdvcnk6IGZhbHNlLFxuICAgIGRlcGFydG1lbnQ6IGZhbHNlLFxuICAgIGxhbmd1YWdlOiBmYWxzZVxuICB9O1xuXG5cbiAgdHlwZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBjaGVja2VkOiBib29sZWFuID0gdHJ1ZTtcbiAgZmlsdGVyU2VydmljZSA9IFNpbmdsZXRvbkZpbHRlclNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcblxuICBAVmlld0NoaWxkKCdjYXJkQ29udGFpbmVyJykgcmVzdWx0c0NvbnRyb2xDb250YWluZXJFbDogRWxlbWVudFJlZjtcbiAgYm9keUhlaWdodDogbnVtYmVyO1xuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLnR5cGUgPSBwYXJhbXNbJ3R5cGUnXTtcbiAgICAgICAgdGhpcy5pZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICAgIHRoaXMudGFncyQgPSB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0VGFncygpO1xuICAgICAgICB0aGlzLnRhZ3MkLnN1YnNjcmliZSgocHJvZHVjdHM6IGFueSk9PiB7XG4gICAgICAgICAgdGhpcy50YWdzLmNhdGVnb3J5ID0gcHJvZHVjdHMuY2F0ZWdvcmllcztcbiAgICAgICAgICB0aGlzLnRhZ3MuaW5kdXN0cnkgPSBwcm9kdWN0cy5pbmR1c3RyaWVzO1xuICAgICAgICAgIHRoaXMudGFncy5kZXBhcnRtZW50ID0gcHJvZHVjdHMuZGVwYXJ0bWVudHM7XG4gICAgICAgICAgdGhpcy50YWdzLmxhbmd1YWdlID0gcHJvZHVjdHMubGFuZ3VhZ2VzO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGxldCByZXNldERhdGEgPSBQcm9taXNlLnJlc29sdmUodGhpcy5maWx0ZXJTZXJ2aWNlLnJlc2V0RGF0YSgpKTtcbiAgICAgICAgbGV0IHNldEZpbHRlciA9IFByb21pc2UucmVzb2x2ZSh0aGlzLmZpbHRlclNlcnZpY2Uuc2V0RmlsdGVyKHRoaXMuaWQsIHRoaXMudHlwZSwgdGhpcy5jaGVja2VkKSk7XG4gICAgICAgIGxldCBzZXRBbGxEYXRhID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZmlsdGVyU2VydmljZS5zZXRBbGxEYXRhKCkpO1xuXG4gICAgICAgIFByb21pc2UuYWxsKFtyZXNldERhdGEsIHNldEZpbHRlciwgc2V0QWxsRGF0YV0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdEJ5RmlsdGVyKHRoaXMuZmlsdGVyU2VydmljZS5nZXREYXRhKCkpO1xuICAgICAgICB9KTtcblxuXG4gICAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICB0aGlzLmJvZHlIZWlnaHQgPSB0aGlzLnJlc3VsdHNDb250cm9sQ29udGFpbmVyRWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWIpdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5zdWJfcHJvZHVjdHMpdGhpcy5zdWJfcHJvZHVjdHMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG9uQ2hlY2tBbGxUYWcodHlwZTogc3RyaW5nLCBldmVudDogYW55KSB7XG5cbiAgICB0aGlzLnN0YXR1cy5pc0ZpcnN0T3BlbiA9IGZhbHNlO1xuICAgIGxldCBvbkNoZWNrQWxsVGFnID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZmlsdGVyU2VydmljZS5vbkNoZWNrQWxsVGFnKHR5cGUsIGV2ZW50KSk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2RlcGFydG1lbnQnOlxuICAgICAgICB0aGlzLmNoZWNrQWxsLmRlcGFydG1lbnQgPSB0aGlzLmZpbHRlclNlcnZpY2UuZ2V0Q2hlY2tBbGxUeXBlKHR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2luZHVzdHJ5JzpcbiAgICAgICAgdGhpcy5jaGVja0FsbC5pbmR1c3RyeSA9IHRoaXMuZmlsdGVyU2VydmljZS5nZXRDaGVja0FsbFR5cGUodHlwZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGFuZ3VhZ2UnOlxuICAgICAgICB0aGlzLmNoZWNrQWxsLmxhbmd1YWdlID0gdGhpcy5maWx0ZXJTZXJ2aWNlLmdldENoZWNrQWxsVHlwZSh0eXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjYXRlZ29yeSc6XG4gICAgICAgIHRoaXMuY2hlY2tBbGwuY2F0ZWdvcnkgPSB0aGlzLmZpbHRlclNlcnZpY2UuZ2V0Q2hlY2tBbGxUeXBlKHR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBvbkNoZWNrQWxsVGFnLnRoZW4oKHZhbHVlKT0+IHtcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdEJ5RmlsdGVyKHRoaXMuZmlsdGVyU2VydmljZS5nZXREYXRhKCkpXG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uQ2hlY2tib3hGaWx0ZXJUYWcodmFsdWU6IGFueSwgdHlwZTogc3RyaW5nLCBldmVudDogYW55KSB7XG5cbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPyB0aGlzLmNoZWNrZWQgPSB0cnVlIDogdGhpcy5jaGVja2VkID0gZmFsc2U7XG5cbiAgICBsZXQgc2V0RmlsdGVyID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZmlsdGVyU2VydmljZS5zZXRGaWx0ZXIodmFsdWUsIHR5cGUsIHRoaXMuY2hlY2tlZCkpO1xuICAgIGxldCBzZXRBbGxEYXRhID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZmlsdGVyU2VydmljZS5zZXRBbGxEYXRhKCkpO1xuXG4gICAgUHJvbWlzZS5hbGwoW3NldEZpbHRlciwgc2V0QWxsRGF0YV0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5nZXRQcm9kdWN0QnlGaWx0ZXIodGhpcy5maWx0ZXJTZXJ2aWNlLmdldERhdGEoKSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGdldFByb2R1Y3RCeUZpbHRlcih2YWx1ZTogYW55KSB7XG5cbiAgICB0aGlzLnByb2R1Y3RzJCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RCeUZpbHRlcih2YWx1ZSk7XG4gICAgdGhpcy5zdWJfcHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzJC5zdWJzY3JpYmUoKHByb2R1Y3Q6IGFueSk9PiB7XG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdDtcbiAgICB9KTtcblxuICB9XG59XG4iXX0=
