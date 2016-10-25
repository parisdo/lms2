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
var shared_module_1 = require('../shared/shared.module');
var public_routes_1 = require('./public.routes');
var public_component_1 = require('./public.component');
var browse_page_component_1 = require('./browse-page/browse-page.component');
var product_item_component_1 = require('./product-item/product-item.component');
var single_service_component_1 = require('./single-service/single-service.component');
var category_page_component_1 = require('./category-page/category-page.component');
var search_page_component_1 = require("./search-page/search-page.component");
var PublicModule = (function () {
    function PublicModule() {
    }
    PublicModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                public_routes_1.publicRouting,
            ],
            declarations: [
                public_component_1.PublicComponent,
                category_page_component_1.CategoryPageComponent,
                browse_page_component_1.BrowsePageComponent,
                product_item_component_1.ProductItemComponent,
                single_service_component_1.SingleServiceComponent,
                search_page_component_1.SearchPageComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PublicModule);
    return PublicModule;
}());
exports.PublicModule = PublicModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wdWJsaWMvcHVibGljLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELDhCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzlDLGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELHNDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLHVDQUFtQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzNFLHlDQUFxQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ2pGLHdDQUFvQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQzlFLHNDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBZ0J4RTtJQUFBO0lBQTJCLENBQUM7SUFkNUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsNEJBQVk7Z0JBQ1osNkJBQWE7YUFDZDtZQUNELFlBQVksRUFBRTtnQkFDWixrQ0FBZTtnQkFDZiwrQ0FBcUI7Z0JBQ3JCLDJDQUFtQjtnQkFDbkIsNkNBQW9CO2dCQUNwQixpREFBc0I7Z0JBQ3RCLDJDQUFtQjthQUNwQjtTQUNGLENBQUM7O29CQUFBO0lBQ3lCLG1CQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG9CQUFZLGVBQUcsQ0FBQSIsImZpbGUiOiJhcHAvcHVibGljL3B1YmxpYy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHtwdWJsaWNSb3V0aW5nfSBmcm9tICcuL3B1YmxpYy5yb3V0ZXMnO1xuaW1wb3J0IHtQdWJsaWNDb21wb25lbnR9IGZyb20gJy4vcHVibGljLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jyb3dzZVBhZ2VDb21wb25lbnR9IGZyb20gJy4vYnJvd3NlLXBhZ2UvYnJvd3NlLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7UHJvZHVjdEl0ZW1Db21wb25lbnR9IGZyb20gJy4vcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtTaW5nbGVTZXJ2aWNlQ29tcG9uZW50fSBmcm9tICcuL3NpbmdsZS1zZXJ2aWNlL3NpbmdsZS1zZXJ2aWNlLmNvbXBvbmVudCc7XG5pbXBvcnQge0NhdGVnb3J5UGFnZUNvbXBvbmVudH0gZnJvbSAnLi9jYXRlZ29yeS1wYWdlL2NhdGVnb3J5LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoUGFnZUNvbXBvbmVudH0gZnJvbSBcIi4vc2VhcmNoLXBhZ2Uvc2VhcmNoLXBhZ2UuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgcHVibGljUm91dGluZyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUHVibGljQ29tcG9uZW50LFxuICAgIENhdGVnb3J5UGFnZUNvbXBvbmVudCxcbiAgICBCcm93c2VQYWdlQ29tcG9uZW50LFxuICAgIFByb2R1Y3RJdGVtQ29tcG9uZW50LFxuICAgIFNpbmdsZVNlcnZpY2VDb21wb25lbnQsXG4gICAgU2VhcmNoUGFnZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFB1YmxpY01vZHVsZSB7fVxuIl19
