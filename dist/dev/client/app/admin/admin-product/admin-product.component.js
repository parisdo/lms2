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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var product_service_1 = require("../../shared/services/api/product/product.service");
var status_log_model_1 = require("../../shared/models/status-log.model");
var AdminProductComponent = (function () {
    function AdminProductComponent(_fb, route, _router, _sanitizer, _productService) {
        this._fb = _fb;
        this.route = route;
        this._router = _router;
        this._sanitizer = _sanitizer;
        this._productService = _productService;
        this.loading = true;
        this.products = [];
        this.apps = [];
        this.apps_th = [];
        this.languagesTag = [];
        this.categoriesTag = [];
        this.departmentsTag = [];
        this.industriesTag = [];
        this.features = [];
        this.features_th = [];
        this.updated = true;
        this.reviewed = false;
        this.screenshots = [];
        this.thumbnail = [];
        this.count = 0;
        this.max = 4;
        this.index = 0;
        this.selected = '';
        this.logs = [];
        this.video = false;
        this.thaiInput = false;
        this.myFormAdminReview = this._fb.group({
            id: [''],
            status: [''],
            comment: [''],
        });
    }
    AdminProductComponent.prototype.ngOnInit = function () {
        this.getProductId();
    };
    AdminProductComponent.prototype.onRefresh = function () {
        this.logs = [];
        this.languagesTag = [];
        this.departmentsTag = [];
        this.categoriesTag = [];
        this.industriesTag = [];
        this.features = [];
        this.features_th = [];
        this.screenshots = [];
        this.getProductId();
    };
    AdminProductComponent.prototype.ngOnDestroy = function () {
        if (this.sub_updateStatus) {
            this.sub_updateStatus.unsubscribe();
        }
        if (this.sub) {
            this.sub.unsubscribe();
        }
        if (this.sub_delete) {
            this.sub_delete.unsubscribe();
        }
    };
    AdminProductComponent.prototype.getProductId = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this._productService.getProductId(_this.id)
                .subscribe(function (products) {
                _this.products = products['en'];
                _this.apps = products['en'];
                _this.apps_th = products['th'];
                _this.embedYoutube(_this.apps.youtube);
                for (var i = 0; i < _this.products.languages.length; i++) {
                    _this.languagesTag.push(_this.products.languages[i]);
                }
                for (var i = 0; i < _this.products.departments.length; i++) {
                    _this.departmentsTag.push(_this.products.departments[i]);
                }
                for (var i = 0; i < _this.products.categories.length; i++) {
                    _this.categoriesTag.push(_this.products.categories[i]);
                }
                for (var i = 0; i < _this.products.industries.length; i++) {
                    _this.industriesTag.push(_this.products.industries[i]);
                }
                for (var i = 0; i < _this.products.features.length; i++) {
                    _this.features.push(_this.products.features[i]);
                }
                for (var i = 0; i < _this.apps_th.features.length; i++) {
                    _this.features_th.push(_this.apps_th.features[i]);
                }
                for (var i = 0; i < _this.products.screenshots.length; i++) {
                    _this.screenshots.push(_this.products.screenshots[i]);
                }
                _this.setThumbnail();
                _this.selected = _this.screenshots[0].url;
                _this.loading = false;
            });
            _this.getLogProduct();
        });
    };
    AdminProductComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.updated = false;
        this.reviewed = false;
        var statusLog = new status_log_model_1.StatusLog(this.myFormAdminReview.value.comment);
        this.updateStatus$ = this._productService.updateProductStatus(this.id, 'notapproved', statusLog);
        this.sub_updateStatus = this.updateStatus$.subscribe(function (res) {
            _this.updated = true;
            _this.reviewed = true;
            _this.onRefresh();
            _this.myFormAdminReview.reset();
        }, function (error) { return _this.errorMessage = error; });
    };
    AdminProductComponent.prototype.updateProductStatus = function (id, status) {
        var _this = this;
        this.updated = false;
        this.updateStatus$ = this._productService.updateProductStatus(id, status);
        this.sub_updateStatus = this.updateStatus$.subscribe(function () {
            _this.updated = true;
            _this.onRefresh();
        }, function (error) { return _this.errorMessage = error; });
    };
    AdminProductComponent.prototype.onSelect = function (_screenshot, i, j) {
        this.selected = _screenshot;
        if (i != 0) {
            this.index = ((j + 1) + (4 * i) - 1);
        }
        else {
            this.index = j;
        }
    };
    AdminProductComponent.prototype.onControl = function (condition) {
        if (condition == 'plus') {
            if (this.index < this.screenshots.length - 1) {
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
                this.index = this.screenshots.length - 1;
            }
        }
        this.selected = this.screenshots[this.index].url;
    };
    AdminProductComponent.prototype.setThumbnail = function () {
        for (var i = 0; i < Math.ceil((this.screenshots.length / 4)); i++) {
            this.thumbnail[i] = [];
            for (var j = 0; j < 4; j++) {
                if (this.count < this.screenshots.length) {
                    this.thumbnail[i][j] = this.screenshots[this.count].url;
                    this.count++;
                }
            }
        }
    };
    AdminProductComponent.prototype.embedYoutube = function (url) {
        if (url !== '') {
            this.video = true;
            var id = url.split('=', 2)[1];
            this.embedUrl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + id);
        }
    };
    AdminProductComponent.prototype.goToListing = function () {
        this._router.navigate(["admin/listing"]);
    };
    AdminProductComponent.prototype.getLogProduct = function () {
        var _this = this;
        this.logs$ = this._productService.getLogProduct(this.id);
        this.sub_logs = this.logs$.subscribe(function (res) {
            if (res.status == 'ok')
                _this.logs = res.data.logs;
            _this.loading = false;
        }), function (err) { return _this.errorMessage = err; };
    };
    AdminProductComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.deleteProduct$ = this._productService.deleteProduct(id);
        this.sub_delete = this.deleteProduct$.subscribe(function () {
            _this._router.navigate(["admin/listing"]);
        });
    };
    AdminProductComponent.prototype.onChangeLanguaeFrom = function (lang) {
        switch (lang) {
            case 'th':
                this.thaiInput = true;
                break;
            case 'en':
                this.thaiInput = false;
                break;
            default:
                this.thaiInput = false;
        }
    };
    AdminProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin-product',
            templateUrl: 'admin-product.component.html',
            styleUrls: ['admin-product.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, platform_browser_1.DomSanitizer, product_service_1.ProductService])
    ], AdminProductComponent);
    return AdminProductComponent;
}());
exports.AdminProductComponent = AdminProductComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9hZG1pbi1wcm9kdWN0L2FkbWluLXByb2R1Y3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsaUNBQTRDLDJCQUEyQixDQUFDLENBQUE7QUFFeEUsc0JBQXFDLGdCQUFnQixDQUFDLENBQUE7QUFDdEQsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsZ0NBQTZCLG1EQUFtRCxDQUFDLENBQUE7QUFDakYsaUNBQXdCLHNDQUFzQyxDQUFDLENBQUE7QUFZL0Q7SUE4Q0UsK0JBQW9CLEdBQWdCLEVBQ2hCLEtBQXFCLEVBQ3JCLE9BQWUsRUFDaEIsVUFBd0IsRUFDdkIsZUFBK0I7UUFKL0IsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQWM7UUFDdkIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBL0NuRCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBS2YsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVuQixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUVsQixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUV4QixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQU8sRUFBRSxDQUFDO1FBTXJCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsUUFBRyxH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OzZCQUFBO0lBNlFGLDRCQUFDO0FBQUQsQ0EzUUEsQUEyUUMsSUFBQTtBQTNRWSw2QkFBcUIsd0JBMlFqQyxDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi9hZG1pbi1wcm9kdWN0L2FkbWluLXByb2R1Y3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2FmZVJlc291cmNlVXJsLCBEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0YXR1c0xvZ30gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvc3RhdHVzLWxvZy5tb2RlbFwiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYWRtaW4tcHJvZHVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnYWRtaW4tcHJvZHVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhZG1pbi1wcm9kdWN0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZG1pblByb2R1Y3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgaWQ6IGFueTtcbiAgbG9hZGluZyA9IHRydWU7XG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gIHByb2R1Y3RzOiBhbnkgPSBbXTtcblxuICBhcHBzOiBhbnkgPSBbXTtcbiAgYXBwc190aCA6YW55ID0gW107XG5cbiAgbGFuZ3VhZ2VzVGFnOiBhbnkgPSBbXTtcbiAgY2F0ZWdvcmllc1RhZzogYW55ID0gW107XG4gIGRlcGFydG1lbnRzVGFnOiBhbnkgPSBbXTtcbiAgaW5kdXN0cmllc1RhZzogYW55ID0gW107XG5cbiAgZmVhdHVyZXM6IGFueSA9IFtdO1xuICBmZWF0dXJlc190aDphbnkgPSBbXTtcblxuXG4gIG15Rm9ybUFkbWluUmV2aWV3OiBGb3JtR3JvdXA7XG4gIHN1Yl91cGRhdGVTdGF0dXM6IFN1YnNjcmlwdGlvbjtcbiAgdXBkYXRlU3RhdHVzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICB1cGRhdGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgcmV2aWV3ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKlNldCB0aHVtYm5haWwgYW5kIFNjcmVlbnNob3QqL1xuICBzY3JlZW5zaG90czogYW55ID0gW107XG4gIHRodW1ibmFpbDogYW55ID0gW107XG4gIGNvdW50OiBudW1iZXIgPSAwO1xuICBtYXg6IG51bWJlciA9IDQ7XG4gIGluZGV4OiBudW1iZXIgPSAwO1xuICBzZWxlY3RlZDogYW55ID0gJyc7XG5cblxuICAvKkxvZyBTZXJ2aWNlKi9cbiAgbG9ncyQ6IE9ic2VydmFibGU8YW55PjtcbiAgc3ViX2xvZ3M6IFN1YnNjcmlwdGlvbjtcbiAgbG9nczogYW55ID0gW107XG5cblxuICAvL01lZGlhXG4gIGVtYmVkVXJsOiBTYWZlUmVzb3VyY2VVcmw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuICAgIHRoaXMubXlGb3JtQWRtaW5SZXZpZXcgPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICBpZDogWycnXSxcbiAgICAgIHN0YXR1czogWycnXSxcbiAgICAgIGNvbW1lbnQ6IFsnJ10sXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldFByb2R1Y3RJZCgpO1xuICB9XG5cbiAgb25SZWZyZXNoKCkge1xuICAgIHRoaXMubG9ncyA9IFtdO1xuICAgIHRoaXMubGFuZ3VhZ2VzVGFnID0gW107XG4gICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IFtdO1xuICAgIHRoaXMuY2F0ZWdvcmllc1RhZyA9IFtdO1xuICAgIHRoaXMuaW5kdXN0cmllc1RhZyA9IFtdO1xuICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLmZlYXR1cmVzX3RoID0gW107XG4gICAgdGhpcy5zY3JlZW5zaG90cyA9IFtdO1xuXG4gICAgdGhpcy5nZXRQcm9kdWN0SWQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yl91cGRhdGVTdGF0dXMpe3RoaXMuc3ViX3VwZGF0ZVN0YXR1cy51bnN1YnNjcmliZSgpO31cbiAgICBpZiAodGhpcy5zdWIpe3RoaXMuc3ViLnVuc3Vic2NyaWJlKCk7fVxuICAgIGlmICh0aGlzLnN1Yl9kZWxldGUpe3RoaXMuc3ViX2RlbGV0ZS51bnN1YnNjcmliZSgpO31cbiAgfVxuXG4gIGdldFByb2R1Y3RJZCgpIHtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdElkKHRoaXMuaWQpXG4gICAgICAgIC5zdWJzY3JpYmUoKHByb2R1Y3RzOiBhbnkpID0+IHtcblxuICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0c1snZW4nXTtcbiAgICAgICAgICB0aGlzLmFwcHMgPSBwcm9kdWN0c1snZW4nXTtcbiAgICAgICAgICB0aGlzLmFwcHNfdGggPSBwcm9kdWN0c1sndGgnXTtcblxuICAgICAgICAgIHRoaXMuZW1iZWRZb3V0dWJlKHRoaXMuYXBwcy55b3V0dWJlKTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0cy5sYW5ndWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzVGFnLnB1c2godGhpcy5wcm9kdWN0cy5sYW5ndWFnZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMuZGVwYXJ0bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudHNUYWcucHVzaCh0aGlzLnByb2R1Y3RzLmRlcGFydG1lbnRzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1RhZy5wdXNoKHRoaXMucHJvZHVjdHMuY2F0ZWdvcmllc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0cy5pbmR1c3RyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmluZHVzdHJpZXNUYWcucHVzaCh0aGlzLnByb2R1Y3RzLmluZHVzdHJpZXNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0cy5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKHRoaXMucHJvZHVjdHMuZmVhdHVyZXNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmFwcHNfdGguZmVhdHVyZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlc190aC5wdXNoKHRoaXMuYXBwc190aC5mZWF0dXJlc1tpXSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMuc2NyZWVuc2hvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuc2hvdHMucHVzaCh0aGlzLnByb2R1Y3RzLnNjcmVlbnNob3RzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRUaHVtYm5haWwoKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5zY3JlZW5zaG90c1swXS51cmw7XG5cbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vQWZ0ZXIgZ2V0IHBhcmFtIElkXG4gICAgICB0aGlzLmdldExvZ1Byb2R1Y3QoKTtcblxuICAgIH0pO1xuICB9XG5cbiAgLy9Gb3IgTmVlZHMgUmV2aWV3XG4gIG9uU3VibWl0KHZhbHVlOiBPYmplY3QpIHtcbiAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJldmlld2VkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0dXNMb2cgPSBuZXcgU3RhdHVzTG9nKFxuICAgICAgdGhpcy5teUZvcm1BZG1pblJldmlldy52YWx1ZS5jb21tZW50XG4gICAgKTtcblxuICAgIHRoaXMudXBkYXRlU3RhdHVzJCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLnVwZGF0ZVByb2R1Y3RTdGF0dXMoXG4gICAgICB0aGlzLmlkLFxuICAgICAgJ25vdGFwcHJvdmVkJyxcbiAgICAgIHN0YXR1c0xvZ1xuICAgICk7XG5cbiAgICB0aGlzLnN1Yl91cGRhdGVTdGF0dXMgPSB0aGlzLnVwZGF0ZVN0YXR1cyQuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLnJldmlld2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMub25SZWZyZXNoKCk7XG4gICAgICB0aGlzLm15Rm9ybUFkbWluUmV2aWV3LnJlc2V0KCk7XG4gICAgfSwgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcblxuICB9XG5cbiAgdXBkYXRlUHJvZHVjdFN0YXR1cyhpZDogYW55LCBzdGF0dXM6IGFueSkge1xuICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlU3RhdHVzJCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLnVwZGF0ZVByb2R1Y3RTdGF0dXMoaWQsIHN0YXR1cyk7XG4gICAgdGhpcy5zdWJfdXBkYXRlU3RhdHVzID0gdGhpcy51cGRhdGVTdGF0dXMkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5vblJlZnJlc2goKTtcblxuICAgIH0sIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gIH1cblxuXG4gIC8qU2NyZWVuc2hvdCovXG4gIG9uU2VsZWN0KF9zY3JlZW5zaG90OiBzdHJpbmcsIGk6IG51bWJlciwgajogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IF9zY3JlZW5zaG90O1xuXG4gICAgaWYgKGkgIT0gMCkge1xuICAgICAgdGhpcy5pbmRleCA9ICgoaiArIDEpICsgKDQgKiBpKSAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV4ID0gajtcbiAgICB9XG4gIH1cblxuICBvbkNvbnRyb2woY29uZGl0aW9uOiBzdHJpbmcpIHtcblxuICAgIGlmIChjb25kaXRpb24gPT0gJ3BsdXMnKSB7XG5cbiAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5zY3JlZW5zaG90cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYgKHRoaXMuaW5kZXggIT0gMCkge1xuICAgICAgICB0aGlzLmluZGV4LS07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5zY3JlZW5zaG90cy5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2NyZWVuc2hvdHNbdGhpcy5pbmRleF0udXJsO1xuICB9XG5cblxuICBzZXRUaHVtYm5haWwoKSB7XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IE1hdGguY2VpbCgodGhpcy5zY3JlZW5zaG90cy5sZW5ndGggLyA0KSk7IGkrKykge1xuXG4gICAgICB0aGlzLnRodW1ibmFpbFtpXSA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50IDwgdGhpcy5zY3JlZW5zaG90cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnRodW1ibmFpbFtpXVtqXSA9IHRoaXMuc2NyZWVuc2hvdHNbdGhpcy5jb3VudF0udXJsO1xuICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgdmlkZW86IGJvb2xlYW4gPSBmYWxzZTtcblxuICBlbWJlZFlvdXR1YmUodXJsOiBhbnkpIHtcblxuICAgIGlmICh1cmwgIT09ICcnKSB7XG4gICAgICB0aGlzLnZpZGVvID0gdHJ1ZTtcbiAgICAgIGxldCBpZCA9IHVybC5zcGxpdCgnPScsIDIpWzFdO1xuICAgICAgdGhpcy5lbWJlZFVybCA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7aWR9YCk7XG5cbiAgICB9XG4gIH1cblxuXG4gIGdvVG9MaXN0aW5nKCkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL2xpc3RpbmdgXSk7XG4gIH1cblxuXG4gIHByaXZhdGUgZ2V0TG9nUHJvZHVjdCgpIHtcbiAgICB0aGlzLmxvZ3MkID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0TG9nUHJvZHVjdCh0aGlzLmlkKTtcbiAgICB0aGlzLnN1Yl9sb2dzID0gdGhpcy5sb2dzJC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PSAnb2snKSB0aGlzLmxvZ3MgPSByZXMuZGF0YS5sb2dzO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSksIChlcnI6IGFueSkgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnI7XG4gIH1cblxuICBzdWJfZGVsZXRlOiBTdWJzY3JpcHRpb247XG4gIGRlbGV0ZVByb2R1Y3QkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgZGVsZXRlUHJvZHVjdChpZDogYW55KSB7XG4gICAgdGhpcy5kZWxldGVQcm9kdWN0JCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmRlbGV0ZVByb2R1Y3QoaWQpO1xuICAgIHRoaXMuc3ViX2RlbGV0ZSA9IHRoaXMuZGVsZXRlUHJvZHVjdCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYGFkbWluL2xpc3RpbmdgXSk7XG4gICAgfSk7XG4gIH1cblxuICB0aGFpSW5wdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBvbkNoYW5nZUxhbmd1YWVGcm9tKGxhbmc6IHN0cmluZykge1xuXG4gICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICBjYXNlICd0aCc6XG4gICAgICAgIHRoaXMudGhhaUlucHV0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbic6XG4gICAgICAgIHRoaXMudGhhaUlucHV0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGFpSW5wdXQgPSBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG59XG5cbiJdfQ==
