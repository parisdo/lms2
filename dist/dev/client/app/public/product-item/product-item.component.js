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
var ProductItemComponent = (function () {
    function ProductItemComponent(_router) {
        this._router = _router;
    }
    ProductItemComponent.prototype.onNavigate = function (path, id) {
        this._router.navigate([(path + "/" + id)]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ProductItemComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ProductItemComponent.prototype, "vendor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ProductItemComponent.prototype, "shortdescription", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ProductItemComponent.prototype, "logo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ProductItemComponent.prototype, "id", void 0);
    ProductItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-product-item',
            templateUrl: 'product-item.component.html',
            styleUrls: ['product-item.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ProductItemComponent);
    return ProductItemComponent;
}());
exports.ProductItemComponent = ProductItemComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wdWJsaWMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQVN2QztJQWNFLDhCQUFvQixPQUFjO1FBQWQsWUFBTyxHQUFQLE9BQU8sQ0FBTztJQUFFLENBQUM7SUFFckMseUNBQVUsR0FBVixVQUFXLElBQVcsRUFBRSxFQUFrQjtRQUV4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUcsSUFBSSxTQUFJLEVBQUUsQ0FBRSxDQUFDLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBakJEO1FBQUMsWUFBSyxFQUFFOzt1REFBQTtJQUVSO1FBQUMsWUFBSyxFQUFFOzt3REFBQTtJQUVSO1FBQUMsWUFBSyxFQUFFOztrRUFBQTtJQUVSO1FBQUMsWUFBSyxFQUFFOztzREFBQTtJQUVSO1FBQUMsWUFBSyxFQUFFOztvREFBQTtJQWpCVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7OzRCQUFBO0lBdUJGLDJCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSw0QkFBb0IsdUJBcUJoQyxDQUFBIiwiZmlsZSI6ImFwcC9wdWJsaWMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3RiLXByb2R1Y3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAncHJvZHVjdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0SXRlbUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdmVuZG9yOnN0cmluZztcbiAgQElucHV0KClcbiAgc2hvcnRkZXNjcmlwdGlvbjpzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxvZ286c3RyaW5nO1xuICBASW5wdXQoKVxuICBpZDpzdHJpbmc7XG5cbiAgLy8gQE91dHB1dCgpIG5vdGlmeVBhcmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpe31cblxuICBvbk5hdmlnYXRlKHBhdGg6c3RyaW5nLCBpZDpzdHJpbmcgfCBudW1iZXIpXG4gIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2Ake3BhdGh9LyR7aWR9YF0pXG4gIH1cblxufVxuIl19
