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
var product_service_1 = require('../../shared/services/api/product/product.service');
var router_1 = require('@angular/router');
var SingleServiceComponent = (function () {
    function SingleServiceComponent(route, _router, _productService) {
        this.route = route;
        this._router = _router;
        this._productService = _productService;
        this.tags = {
            category: [],
            department: [],
            industry: [],
            language: []
        };
        this.data = {
            screenshots: [],
            features_en: [],
            features_th: [],
            pricingmodels: []
        };
        this.thumbnail = [];
        this.count = 0;
        this.max = 4;
        this.index = 0;
        this.product_recommend = [];
        this.isCollapsedRequiremnt = true;
        this.isCollapsedTerms = true;
        this.tags.category = [];
        this.tags.department = [];
        this.tags.industry = [];
        this.tags.language = [];
        this.data.screenshots = [];
        this.data.features_en = [];
        this.data.features_th = [];
        this.data.pricingmodels = [];
    }
    SingleServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.product$ = _this._productService.getProductId(id);
            _this.sub_product = _this.product$.subscribe(function (product) {
                _this.tags.category = [];
                _this.tags.department = [];
                _this.tags.industry = [];
                _this.tags.language = [];
                _this.data.screenshots = [];
                _this.thumbnail = [];
                _this.count = 0;
                _this.data.features_en = [];
                _this.data.features_th = [];
                _this.data.pricingmodels = [];
                _this.product_en = product['en'];
                _this.product_th = product['th'];
                _this.id = _this.product_en.id;
                _this.product_en.categories.forEach(function (tags) { return _this.tags.category.push(tags); });
                _this.product_en.industries.forEach(function (tags) { return _this.tags.industry.push(tags); });
                _this.product_en.languages.forEach(function (tags) { return _this.tags.language.push(tags); });
                _this.product_en.departments.forEach(function (tags) { return _this.tags.department.push(tags); });
                _this.product_en.features.forEach(function (tags) { return _this.data.features_en.push(tags); });
                _this.product_en.screenshots.forEach(function (tags) { return _this.data.screenshots.push(tags); });
                _this.product_en.pricingmodels.forEach(function (pricingmodels) { return _this.data.pricingmodels.push(pricingmodels); });
                _this.product_th.features.forEach(function (tags) { return _this.data.features_th.push(tags); });
                _this.selected = _this.product_en.screenshots[0].url;
                _this.setThumbnail();
                if (_this.tags.category.length > 0) {
                    _this.randomRecommendProduct(_this.tags.category[0].id);
                }
            });
        });
    };
    SingleServiceComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
        if (this.sub_product)
            this.sub_product.unsubscribe();
    };
    SingleServiceComponent.prototype.randomRecommendProduct = function (categoryId) {
        var _this = this;
        this._productService.getRecommendProductByCategory(categoryId)
            .subscribe(function (product) {
            _this.product_recommend = product;
        });
    };
    SingleServiceComponent.prototype.collapsed = function (event) {
    };
    SingleServiceComponent.prototype.expanded = function (event) {
    };
    SingleServiceComponent.prototype.onSuccess = function (results) {
        if (results == 'success') {
            this.ngOnInit();
        }
    };
    SingleServiceComponent.prototype.setThumbnail = function () {
        for (var i = 0; i < Math.ceil((this.data.screenshots.length / 4)); i++) {
            this.thumbnail[i] = [];
            for (var j = 0; j < 4; j++) {
                if (this.count < this.data.screenshots.length) {
                    this.thumbnail[i][j] = this.data.screenshots[this.count].url;
                    this.count++;
                }
            }
        }
    };
    SingleServiceComponent.prototype.onSelect = function (_screenshot, i, j) {
        this.selected = _screenshot;
        if (i != 0) {
            this.index = ((j + 1) + (4 * i) - 1);
        }
        else {
            this.index = j;
        }
    };
    SingleServiceComponent.prototype.onControl = function (condition) {
        if (condition == 'plus') {
            if (this.index < this.data.screenshots.length - 1) {
                this.index++;
            }
            else {
                this.index = 0;
            }
        }
        else {
            if (this.index != 0) {
                this.index--;
            }
            else {
                this.index = this.data.screenshots.length - 1;
            }
        }
        this.selected = this.data.screenshots[this.index].url;
    };
    SingleServiceComponent.prototype.visitWebsite = function () {
        ClickyLog(this.id);
    };
    SingleServiceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-single-service',
            templateUrl: 'single-service.component.html',
            styleUrls: ['single-service.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService])
    ], SingleServiceComponent);
    return SingleServiceComponent;
}());
exports.SingleServiceComponent = SingleServiceComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wdWJsaWMvc2luZ2xlLXNlcnZpY2Uvc2luZ2xlLXNlcnZpY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEQsZUFBZSxDQUFDLENBQUE7QUFFOUUsZ0NBQTZCLG1EQUFtRCxDQUFDLENBQUE7QUFDakYsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFZdkQ7SUFnQ0UsZ0NBQW9CLEtBQXFCLEVBQVUsT0FBZSxFQUFVLGVBQStCO1FBQXZGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQXhCcEcsU0FBSSxHQUFRO1lBQ2pCLFFBQVEsRUFBRSxFQUFFO1lBQ1osVUFBVSxFQUFFLEVBQUU7WUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztRQUVLLFNBQUksR0FBUTtZQUNqQixXQUFXLEVBQUUsRUFBRTtZQUNmLFdBQVcsRUFBRSxFQUFFO1lBQ2YsV0FBVyxFQUFFLEVBQUU7WUFDZixhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFDO1FBTUYsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQXFFbEIsc0JBQWlCLEdBQVUsRUFBRSxDQUFDO1FBU3ZCLDBCQUFxQixHQUFZLElBQUksQ0FBQztRQUN0QyxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUExRXRDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxH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Q0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoRCxDQUFDO1FBRUgsQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN4RCxDQUFDO0lBR0QsNkNBQVksR0FBWjtRQUNFLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQXZMSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7OzhCQUFBO0lBc0xGLDZCQUFDO0FBQUQsQ0FwTEEsQUFvTEMsSUFBQTtBQXBMWSw4QkFBc0IseUJBb0xsQyxDQUFBIiwiZmlsZSI6ImFwcC9wdWJsaWMvc2luZ2xlLXNlcnZpY2Uvc2luZ2xlLXNlcnZpY2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCxPdXRwdXQsT25EZXN0cm95LEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZGVjbGFyZSB2YXIgXzogYW55O1xuZGVjbGFyZSB2YXIgQ2xpY2t5TG9nOiBGdW5jdGlvbjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndGItc2luZ2xlLXNlcnZpY2UnLFxuICB0ZW1wbGF0ZVVybDogJ3NpbmdsZS1zZXJ2aWNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpbmdsZS1zZXJ2aWNlLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaW5nbGVTZXJ2aWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuICBzdWJfcHJvZHVjdDogU3Vic2NyaXB0aW9uO1xuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwcm9kdWN0X3RoOiBhbnk7XG4gIHByb2R1Y3RfZW46IGFueTtcblxuICBwdWJsaWMgdGFnczogYW55ID0ge1xuICAgIGNhdGVnb3J5OiBbXSxcbiAgICBkZXBhcnRtZW50OiBbXSxcbiAgICBpbmR1c3RyeTogW10sXG4gICAgbGFuZ3VhZ2U6IFtdXG4gIH07XG5cbiAgcHVibGljIGRhdGE6IGFueSA9IHtcbiAgICBzY3JlZW5zaG90czogW10sXG4gICAgZmVhdHVyZXNfZW46IFtdLFxuICAgIGZlYXR1cmVzX3RoOiBbXSxcbiAgICBwcmljaW5nbW9kZWxzOiBbXVxuICB9O1xuXG4gIGlkOiBhbnk7XG5cbiAgLypTZXQgdGh1bWJuYWlsIGFuZCBTY3JlZW5zaG90Ki9cbiAgc2VsZWN0ZWQ6IGFueTtcbiAgdGh1bWJuYWlsOiBhbnkgPSBbXTtcbiAgY291bnQ6IG51bWJlciA9IDA7XG4gIG1heDogbnVtYmVyID0gNDtcbiAgaW5kZXg6IG51bWJlciA9IDA7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuXG4gICAgdGhpcy50YWdzLmNhdGVnb3J5ID0gW107XG4gICAgdGhpcy50YWdzLmRlcGFydG1lbnQgPSBbXTtcbiAgICB0aGlzLnRhZ3MuaW5kdXN0cnkgPSBbXTtcbiAgICB0aGlzLnRhZ3MubGFuZ3VhZ2UgPSBbXTtcbiAgICB0aGlzLmRhdGEuc2NyZWVuc2hvdHMgPSBbXTtcbiAgICB0aGlzLmRhdGEuZmVhdHVyZXNfZW4gPSBbXTtcbiAgICB0aGlzLmRhdGEuZmVhdHVyZXNfdGggPSBbXTtcbiAgICB0aGlzLmRhdGEucHJpY2luZ21vZGVscyA9IFtdO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpPT4ge1xuICAgICAgbGV0IGlkID0gcGFyYW1zWydpZCddO1xuICAgICAgdGhpcy5wcm9kdWN0JCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RJZChpZCk7XG4gICAgICB0aGlzLnN1Yl9wcm9kdWN0ID0gdGhpcy5wcm9kdWN0JC5zdWJzY3JpYmUoKHByb2R1Y3Q6IGFueSk9PiB7XG4gICAgICAgIHRoaXMudGFncy5jYXRlZ29yeSA9IFtdO1xuICAgICAgICB0aGlzLnRhZ3MuZGVwYXJ0bWVudCA9IFtdO1xuICAgICAgICB0aGlzLnRhZ3MuaW5kdXN0cnkgPSBbXTtcbiAgICAgICAgdGhpcy50YWdzLmxhbmd1YWdlID0gW107XG5cbiAgICAgICAgdGhpcy5kYXRhLnNjcmVlbnNob3RzID0gW107XG4gICAgICAgIHRoaXMudGh1bWJuYWlsID0gW107XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuXG4gICAgICAgIHRoaXMuZGF0YS5mZWF0dXJlc19lbiA9IFtdO1xuICAgICAgICB0aGlzLmRhdGEuZmVhdHVyZXNfdGggPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhLnByaWNpbmdtb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0X2VuID0gcHJvZHVjdFsnZW4nXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0X3RoID0gcHJvZHVjdFsndGgnXTtcblxuICAgICAgICB0aGlzLmlkID0gdGhpcy5wcm9kdWN0X2VuLmlkO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdF9lbi5jYXRlZ29yaWVzLmZvckVhY2goKHRhZ3M6IGFueSkgPT4gdGhpcy50YWdzLmNhdGVnb3J5LnB1c2godGFncykpO1xuICAgICAgICB0aGlzLnByb2R1Y3RfZW4uaW5kdXN0cmllcy5mb3JFYWNoKCh0YWdzOiBhbnkpID0+IHRoaXMudGFncy5pbmR1c3RyeS5wdXNoKHRhZ3MpKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0X2VuLmxhbmd1YWdlcy5mb3JFYWNoKCh0YWdzOiBhbnkpID0+IHRoaXMudGFncy5sYW5ndWFnZS5wdXNoKHRhZ3MpKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0X2VuLmRlcGFydG1lbnRzLmZvckVhY2goKHRhZ3M6IGFueSkgPT4gdGhpcy50YWdzLmRlcGFydG1lbnQucHVzaCh0YWdzKSk7XG4gICAgICAgIHRoaXMucHJvZHVjdF9lbi5mZWF0dXJlcy5mb3JFYWNoKCh0YWdzOiBhbnkpID0+IHRoaXMuZGF0YS5mZWF0dXJlc19lbi5wdXNoKHRhZ3MpKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0X2VuLnNjcmVlbnNob3RzLmZvckVhY2goKHRhZ3M6IGFueSkgPT4gdGhpcy5kYXRhLnNjcmVlbnNob3RzLnB1c2godGFncykpO1xuICAgICAgICB0aGlzLnByb2R1Y3RfZW4ucHJpY2luZ21vZGVscy5mb3JFYWNoKChwcmljaW5nbW9kZWxzOiBhbnkpID0+IHRoaXMuZGF0YS5wcmljaW5nbW9kZWxzLnB1c2gocHJpY2luZ21vZGVscykpO1xuICAgICAgICB0aGlzLnByb2R1Y3RfdGguZmVhdHVyZXMuZm9yRWFjaCgodGFnczogYW55KSA9PiB0aGlzLmRhdGEuZmVhdHVyZXNfdGgucHVzaCh0YWdzKSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMucHJvZHVjdF9lbi5zY3JlZW5zaG90c1swXS51cmw7XG4gICAgICAgIHRoaXMuc2V0VGh1bWJuYWlsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudGFncy5jYXRlZ29yeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5yYW5kb21SZWNvbW1lbmRQcm9kdWN0KHRoaXMudGFncy5jYXRlZ29yeVswXS5pZCk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfVxuXG5cblxuXG5cbiAgbmdPbkRlc3Ryb3koKSB7XG5cbiAgICBpZiAodGhpcy5zdWIpdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5zdWJfcHJvZHVjdCl0aGlzLnN1Yl9wcm9kdWN0LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcm9kdWN0X3JlY29tbWVuZDogYW55W10gPSBbXTtcblxuICByYW5kb21SZWNvbW1lbmRQcm9kdWN0KGNhdGVnb3J5SWQ6IG51bWJlcikge1xuICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFJlY29tbWVuZFByb2R1Y3RCeUNhdGVnb3J5KGNhdGVnb3J5SWQpXG4gICAgICAuc3Vic2NyaWJlKChwcm9kdWN0OiBhbnkpPT4ge1xuICAgICAgICB0aGlzLnByb2R1Y3RfcmVjb21tZW5kID0gcHJvZHVjdDtcbiAgICAgIH0pXG4gIH1cblxuICBwdWJsaWMgaXNDb2xsYXBzZWRSZXF1aXJlbW50OiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGlzQ29sbGFwc2VkVGVybXM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHB1YmxpYyBjb2xsYXBzZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBleHBhbmRlZChldmVudDogYW55KTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xuICB9XG5cbiAgb25TdWNjZXNzKHJlc3VsdHM6IGFueSl7XG4gICAgaWYocmVzdWx0cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG4gIH1cblxuXG4gIHNldFRodW1ibmFpbCgpIHtcblxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBNYXRoLmNlaWwoKHRoaXMuZGF0YS5zY3JlZW5zaG90cy5sZW5ndGggLyA0KSk7IGkrKykge1xuXG4gICAgICB0aGlzLnRodW1ibmFpbFtpXSA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50IDwgdGhpcy5kYXRhLnNjcmVlbnNob3RzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudGh1bWJuYWlsW2ldW2pdID0gdGhpcy5kYXRhLnNjcmVlbnNob3RzW3RoaXMuY291bnRdLnVybDtcbiAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblNlbGVjdChfc2NyZWVuc2hvdDogc3RyaW5nLCBpOiBudW1iZXIsIGo6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBfc2NyZWVuc2hvdDtcblxuICAgIGlmIChpICE9IDApIHtcbiAgICAgIHRoaXMuaW5kZXggPSAoKGogKyAxKSArICg0ICogaSkgLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRleCA9IGo7XG4gICAgfVxuICB9XG5cbiAgb25Db250cm9sKGNvbmRpdGlvbjogc3RyaW5nKSB7XG5cbiAgICBpZiAoY29uZGl0aW9uID09ICdwbHVzJykge1xuXG4gICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMuZGF0YS5zY3JlZW5zaG90cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYgKHRoaXMuaW5kZXggIT0gMCkge1xuICAgICAgICB0aGlzLmluZGV4LS07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5kYXRhLnNjcmVlbnNob3RzLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXRhLnNjcmVlbnNob3RzW3RoaXMuaW5kZXhdLnVybDtcbiAgfVxuXG5cbiAgdmlzaXRXZWJzaXRlKCl7XG4gICAgQ2xpY2t5TG9nKHRoaXMuaWQpO1xuICB9XG5cblxuXG59XG4iXX0=
