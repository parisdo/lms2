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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var product_service_1 = require("../../shared/services/api/product/product.service");
var validation_service_1 = require("../../shared/validation/validation.service");
var product_model_1 = require("../../shared/models/product.model");
var add_product_service_1 = require("../../shared/services/function/add-product.service");
var message_service_1 = require('../../shared/validation/message-service');
var VendorAddListingComponent = (function () {
    function VendorAddListingComponent(_fb, _productService, router, _sanitizer) {
        this._fb = _fb;
        this._productService = _productService;
        this.router = router;
        this._sanitizer = _sanitizer;
        this.loading = true;
        this._addProductService = add_product_service_1.AddProductService.getInstance();
        this.tags = {
            category: [],
            department: [],
            industry: [],
            language: [],
            pricingmodels: [],
            extraservices: []
        };
        this.tempLogo = 'http://fakeimg.pl/150/?text=no image';
        this.myFormLogo = '';
        this.myFormScreenshots = [];
        this.fileChosen = false;
        this.screenshotsChosen = false;
        this.resizeOptions = {
            resizeMaxHeight: 500,
            resizeMaxWidth: 500
        };
        this.MAX_IMAGE_SIZE = 5000000;
        this.logoMaxSize = {
            overMaxSize: false,
            fileName: ''
        };
        this.myFormIndustries = [];
        this.myFormLanguages = [];
        this.myFormDepartments = [];
        this.myFormCategories = [];
        this.myFormExtraservices = [];
        this.myFormFeatures = [];
        this.myFormThaiFeatures = [];
        this.myFormUrl = '';
        this.videoType = false;
        this.embedVideo = false;
        this.myUrl = null;
        this.msgs = [];
        this.myFormPricingModel = [];
        this.options = {
            currency: ['THB', 'SDG', 'USD', 'AUD'],
            pricing_model: [
                { 'id': 1, 'name': 'Freemium Version' },
                { 'id': 2, 'name': 'Monthly Pricing' },
                { 'id': 3, 'name': 'Yearly Subscription' },
                { 'id': 4, 'name': 'Lifetime License' },
                { 'id': 5, 'name': 'Other' }
            ]
        };
        this.screenshotsMaxSize = {
            overMaxSize: false,
            fileName: ''
        };
        this.buildForm();
    }
    VendorAddListingComponent.prototype.ngOnInit = function () {
        this._addProductService.resetData();
        this.getProductTags();
        this.myFormPricingModel = this._addProductService.getPricingModel();
        this.myFormIndustries = this._addProductService.getIndustries();
        this.myFormLanguages = this._addProductService.getLanguages();
        this.myFormDepartments = this._addProductService.getDepartments();
        this.myFormCategories = this._addProductService.getCategories();
        this.myFormExtraservices = this._addProductService.getExtraservices();
        this.myFormFeatures = this._addProductService.getFeatures('en');
        this.myFormThaiFeatures = this._addProductService.getFeatures('th');
    };
    VendorAddListingComponent.prototype.ngOnDestroy = function () {
        if (this.sub_tag)
            this.sub_tag.unsubscribe();
        if (this.sub_addproduct)
            this.sub_addproduct.unsubscribe();
        this._addProductService.resetData();
    };
    VendorAddListingComponent.prototype.buildForm = function () {
        this.myForm = this._fb.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(100)])],
            logo: [''],
            description: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(1000)])],
            shortdescription: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(500)])],
            minrequirement: ['', forms_1.Validators.maxLength(1000)],
            termsncond: ['', forms_1.Validators.maxLength(1000)],
            youtube: [''],
            industries: [''],
            languages: [''],
            departments: [''],
            categories: [''],
            features: [''],
            screenshots: [''],
            purchase_link: [''],
            thai_description: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(1000)])],
            thai_shortdescription: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(500)])]
        });
    };
    VendorAddListingComponent.prototype.getProductTags = function () {
        var _this = this;
        this.tags$ = this._productService.getProductTags();
        this.sub_tag = this.tags$.subscribe(function (product_tags) {
            _this.tags.category = product_tags.categories;
            _this.tags.industry = product_tags.industries;
            _this.tags.department = product_tags.departments;
            _this.tags.language = product_tags.languages;
            _this.tags.pricingmodels = product_tags.pricingmodels;
            _this.tags.extraservices = product_tags.extraservices;
            _this.loading = false;
        });
    };
    VendorAddListingComponent.prototype.onSubmit = function () {
        var _this = this;
        this.myFormPricingModel = this._addProductService.getPricingModel();
        var product = new product_model_1.Product(null, this.myForm.value.name, this.myFormLogo, this.myForm.value.description, this.myForm.value.shortdescription, this.myForm.value.minrequirement, this.myForm.value.termsncond, this.myFormUrl, this.myFormIndustries, this.myFormLanguages, this.myFormDepartments, this.myFormCategories, this.myFormFeatures, this.myFormScreenshots, this.myForm.value.purchase_link, this.myFormPricingModel, this.myFormExtraservices, this.myForm.value.thai_description, this.myForm.value.thai_shortdescription, this.myFormThaiFeatures);
        console.log(product);
        this.addproduct$ = this._productService.addProduct(product);
        this.sub_addproduct = this.addproduct$
            .subscribe(function (res) {
            if (res.status == 'ok') {
                _this.showMessage(message_service_1.msg.getVendorAddListingMessage(200));
                setTimeout(function () {
                    _this.router.navigate(["/vendor/all-listing"]);
                }, 1000);
            }
            else {
                _this.showMessage(message_service_1.msg.getVendorAddListingMessage(500));
            }
        });
    };
    VendorAddListingComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    VendorAddListingComponent.prototype.onChangeLanguaeFrom = function (lang) {
        this._addProductService.setChangeLanguaeFrom(lang);
    };
    VendorAddListingComponent.prototype.onCheckboxIndustries = function (value, event) {
        this._addProductService.setCheckboxIndustries(value, event);
    };
    VendorAddListingComponent.prototype.onCheckboxLanguages = function (value, event) {
        this._addProductService.setCheckboxLanguages(value, event);
    };
    VendorAddListingComponent.prototype.onCheckboxDepartments = function (value, event) {
        this._addProductService.setCheckboxDepartments(value, event);
    };
    VendorAddListingComponent.prototype.onCheckboxCategories = function (value, event) {
        this._addProductService.setCheckboxCategories(value, event);
    };
    VendorAddListingComponent.prototype.onCheckboxExtraservices = function (value, event) {
        this._addProductService.setCheckboxExtraservices(value, event);
    };
    VendorAddListingComponent.prototype.onAddNewFeature = function (newFeature, lang) {
        this.newFeature = '';
        this.newThaiFeature = '';
        this._addProductService.setAddNewFeature(newFeature, lang);
    };
    VendorAddListingComponent.prototype.onDeleteFeature = function (feature, lang) {
        this._addProductService.setDeleteFeature(feature, lang);
    };
    VendorAddListingComponent.prototype.getSelectedLang = function () {
        return this._addProductService.getSelectedLang();
    };
    VendorAddListingComponent.prototype.getThaiInput = function () {
        return this._addProductService.getThaiInput();
    };
    VendorAddListingComponent.prototype.onCheckboxPricingModel = function (value, event) {
        this._addProductService.setCheckboxPricingModel(value, event);
    };
    VendorAddListingComponent.prototype.getShowInput = function (type) {
        return this._addProductService.getShowInputPricing(type);
    };
    VendorAddListingComponent.prototype.onSelectPricingPlan = function (value, id, name) {
        this._addProductService.setSelectPricingPlan(value, id, name);
    };
    VendorAddListingComponent.prototype.onInputPrice = function (id, price_start, price_end, currency) {
        this._addProductService.setInputPrice(id, price_start, price_end, currency);
    };
    VendorAddListingComponent.prototype.onInputDay = function (id, day) {
        this._addProductService.setInputDay(id, day);
    };
    VendorAddListingComponent.prototype.onInputOtherModel = function (id, other_model) {
        this._addProductService.setInputOtherModel(id, other_model);
    };
    VendorAddListingComponent.prototype.fileChangeScreenshots = function (imageResult) {
        var _this = this;
        if (imageResult.file.size > this.MAX_IMAGE_SIZE) {
            this.screenshotsMaxSize.overMaxSize = true;
            this.screenshotsMaxSize.fileName = imageResult.file.name;
            setTimeout(function () {
                _this.screenshotsMaxSize.overMaxSize = false;
            }, 3000);
        }
        else {
            this.myFormScreenshots.push(imageResult.resized.dataURL);
            this.screenshotsChosen = true;
        }
    };
    VendorAddListingComponent.prototype.onDeleteScreenshot = function (src) {
        var i = this.myFormScreenshots.indexOf(src);
        if (i != -1) {
            this.myFormScreenshots.splice(i, 1);
        }
        else {
            this.screenshotsChosen = false;
        }
    };
    VendorAddListingComponent.prototype.fileChangeLogo = function (imageResult) {
        var _this = this;
        if (imageResult.file.size > this.MAX_IMAGE_SIZE) {
            this.logoMaxSize.overMaxSize = true;
            this.logoMaxSize.fileName = imageResult.file.name;
            setTimeout(function () {
                _this.logoMaxSize.overMaxSize = false;
            }, 3000);
        }
        else {
            this.tempLogo = '';
            this.myFormLogo = imageResult.resized.dataURL;
            this.logoMaxSize.fileName = imageResult.file.name;
            this.fileChosen = true;
        }
    };
    VendorAddListingComponent.prototype.embedYoutube = function (url) {
        var _this = this;
        this.embedUrl = null;
        this.embedVideo = true;
        if (url != '') {
            if (validation_service_1.ValidationService.youtubeParser(url) != false) {
                console.log('true');
                var id = url.split('=', 2)[1];
                this.embedUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
                this.myFormUrl = url;
                this.videoType = true;
            }
            else {
                this.videoType = false;
            }
        }
        setTimeout(function () { _this.embedVideo = false; }, 3000);
    };
    VendorAddListingComponent.prototype.deleteVideo = function () {
        this.videoType = false;
        this.embedVideo = false;
        this.myFormUrl = '';
        this.embedUrl = null;
    };
    VendorAddListingComponent.prototype.onCancle = function () {
        this.router.navigate(["/vendor"]);
    };
    VendorAddListingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-vendor-add-listing',
            templateUrl: 'vendor-add-listing.component.html',
            styleUrls: ['vendor-add-listing.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, product_service_1.ProductService, router_1.Router, platform_browser_1.DomSanitizer])
    ], VendorAddListingComponent);
    return VendorAddListingComponent;
}());
exports.VendorAddListingComponent = VendorAddListingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92ZW5kb3IvdmVuZG9yLWFkZC1saXN0aW5nL3ZlbmRvci1hZGQtbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQUd2RSxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxpQ0FBNEMsMkJBQTJCLENBQUMsQ0FBQTtBQUN4RSxnQ0FBNkIsbURBQW1ELENBQUMsQ0FBQTtBQUNqRixtQ0FBZ0MsNENBQTRDLENBQUMsQ0FBQTtBQUM3RSw4QkFBc0IsbUNBQW1DLENBQUMsQ0FBQTtBQUMxRCxvQ0FBZ0Msb0RBQW9ELENBQUMsQ0FBQTtBQUVyRixnQ0FBa0IseUNBQXlDLENBQUMsQ0FBQTtBQVc1RDtJQTBFRSxtQ0FBb0IsR0FBZ0IsRUFDaEIsZUFBK0IsRUFDL0IsTUFBYyxFQUNkLFVBQXdCO1FBSHhCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFjO1FBdEU1QyxZQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLHVCQUFrQixHQUFHLHVDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBSzlDLFNBQUksR0FBUTtZQUNqQixRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLGFBQWEsRUFBQyxFQUFFO1lBQ2hCLGFBQWEsRUFBRSxFQUFFO1NBQ2xCLENBQUM7UUFFRixhQUFRLEdBQVcsc0NBQXNDLENBQUM7UUFDMUQsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixzQkFBaUIsR0FBWSxL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LEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw0Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUF0V0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztTQUNoRCxDQUFDOztpQ0FBQTtJQW9XRixnQ0FBQztBQUFELENBbFdBLEFBa1dDLElBQUE7QUFsV1ksaUNBQXlCLDRCQWtXckMsQ0FBQSIsImZpbGUiOiJhcHAvdmVuZG9yL3ZlbmRvci1hZGQtbGlzdGluZy92ZW5kb3ItYWRkLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVzaXplT3B0aW9ucywgSW1hZ2VSZXN1bHR9IGZyb20gXCJuZzItaW1hZ2V1cGxvYWRcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdC5tb2RlbFwiO1xuaW1wb3J0IHtBZGRQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9mdW5jdGlvbi9hZGQtcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCJwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL2FwaVwiO1xuaW1wb3J0IHttc2d9IGZyb20gJy4uLy4uL3NoYXJlZC92YWxpZGF0aW9uL21lc3NhZ2Utc2VydmljZSc7XG5cbmRlY2xhcmUgdmFyIF86IGFueTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndGItdmVuZG9yLWFkZC1saXN0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICd2ZW5kb3ItYWRkLWxpc3RpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndmVuZG9yLWFkZC1saXN0aW5nLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFZlbmRvckFkZExpc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHN1Yl90YWc6IFN1YnNjcmlwdGlvbjtcbiAgdGFncyQ6IE9ic2VydmFibGU8YW55PjtcblxuICBzdWJfYWRkcHJvZHVjdDogU3Vic2NyaXB0aW9uO1xuICBhZGRwcm9kdWN0JDogT2JzZXJ2YWJsZTxhbnk+O1xuICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICBfYWRkUHJvZHVjdFNlcnZpY2UgPSBBZGRQcm9kdWN0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuXG4gIG15Rm9ybTogRm9ybUdyb3VwO1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcblxuICBwdWJsaWMgdGFnczogYW55ID0ge1xuICAgIGNhdGVnb3J5OiBbXSxcbiAgICBkZXBhcnRtZW50OiBbXSxcbiAgICBpbmR1c3RyeTogW10sXG4gICAgbGFuZ3VhZ2U6IFtdLFxuICAgIHByaWNpbmdtb2RlbHM6W10sXG4gICAgZXh0cmFzZXJ2aWNlczogW11cbiAgfTtcblxuICB0ZW1wTG9nbzogc3RyaW5nID0gJ2h0dHA6Ly9mYWtlaW1nLnBsLzE1MC8/dGV4dD1ubyBpbWFnZSc7XG4gIG15Rm9ybUxvZ286IHN0cmluZyA9ICcnO1xuICBteUZvcm1TY3JlZW5zaG90czogYW55W10gPSBbXTtcbiAgZmlsZUNob3NlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBzY3JlZW5zaG90c0Nob3NlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgcmVzaXplTWF4SGVpZ2h0OiA1MDAsXG4gICAgcmVzaXplTWF4V2lkdGg6IDUwMFxuICB9O1xuXG4gIE1BWF9JTUFHRV9TSVpFOiBudW1iZXIgPSA1MDAwMDAwO1xuXG4gIGxvZ29NYXhTaXplOiBhbnkgPSB7XG4gICAgb3Zlck1heFNpemU6IGZhbHNlLFxuICAgIGZpbGVOYW1lOiAnJ1xuICB9O1xuXG4gIG15Rm9ybUluZHVzdHJpZXM6IGFueVtdID0gW107XG4gIG15Rm9ybUxhbmd1YWdlczogYW55W10gPSBbXTtcbiAgbXlGb3JtRGVwYXJ0bWVudHM6IGFueVtdID0gW107XG4gIG15Rm9ybUNhdGVnb3JpZXM6IGFueVtdID0gW107XG4gIG15Rm9ybUV4dHJhc2VydmljZXM6IGFueVtdID0gW107XG5cbiAgLy9GZWF0dXJlc1xuICBteUZvcm1GZWF0dXJlczogYW55W10gPSBbXTtcbiAgbXlGb3JtVGhhaUZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuICBuZXdGZWF0dXJlOiBzdHJpbmc7XG4gIG5ld1RoYWlGZWF0dXJlOiBzdHJpbmc7XG5cbiAgbXlGb3JtVXJsOiBzdHJpbmcgPSAnJztcbiAgZW1iZWRVcmw6IFNhZmVSZXNvdXJjZVVybDtcbiAgdmlkZW9UeXBlOiBib29sZWFuID0gZmFsc2U7XG4gIGVtYmVkVmlkZW86IGJvb2xlYW4gPSBmYWxzZTtcbiAgbXlVcmw6IHN0cmluZyA9IG51bGw7XG5cbiAgbXNnczogTWVzc2FnZVtdID0gW107XG5cbiAgLy9QcmljaW5nIE1vZGVsXG4gIG15Rm9ybVByaWNpbmdNb2RlbDogYW55ID0gW107XG4gIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgY3VycmVuY3k6IFsnVEhCJywgJ1NERycsICdVU0QnLCAnQVVEJ10sXG4gICAgcHJpY2luZ19tb2RlbDogW1xuICAgICAgeydpZCc6IDEsICduYW1lJzogJ0ZyZWVtaXVtIFZlcnNpb24nfSxcbiAgICAgIHsnaWQnOiAyLCAnbmFtZSc6ICdNb250aGx5IFByaWNpbmcnfSxcbiAgICAgIHsnaWQnOiAzLCAnbmFtZSc6ICdZZWFybHkgU3Vic2NyaXB0aW9uJ30sXG4gICAgICB7J2lkJzogNCwgJ25hbWUnOiAnTGlmZXRpbWUgTGljZW5zZSd9LFxuICAgICAgeydpZCc6IDUsICduYW1lJzogJ090aGVyJ31cbiAgICBdXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG5cbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLnJlc2V0RGF0YSgpO1xuICAgIHRoaXMuZ2V0UHJvZHVjdFRhZ3MoKTtcblxuICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsID0gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2UuZ2V0UHJpY2luZ01vZGVsKCk7XG4gICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzID0gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2UuZ2V0SW5kdXN0cmllcygpO1xuICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzID0gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2UuZ2V0TGFuZ3VhZ2VzKCk7XG4gICAgdGhpcy5teUZvcm1EZXBhcnRtZW50cyA9IHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldERlcGFydG1lbnRzKCk7XG4gICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzID0gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpO1xuICAgIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcyA9IHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldEV4dHJhc2VydmljZXMoKTtcbiAgICB0aGlzLm15Rm9ybUZlYXR1cmVzID0gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2UuZ2V0RmVhdHVyZXMoJ2VuJyk7XG4gICAgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMgPSB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5nZXRGZWF0dXJlcygndGgnKTtcblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3ViX3RhZykgdGhpcy5zdWJfdGFnLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuc3ViX2FkZHByb2R1Y3QpIHRoaXMuc3ViX2FkZHByb2R1Y3QudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5yZXNldERhdGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtKCkge1xuICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMCldKV0sXG4gICAgICBsb2dvOiBbJyddLFxuICAgICAgZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDAwKV0pXSxcbiAgICAgIHNob3J0ZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MDApXSldLFxuICAgICAgbWlucmVxdWlyZW1lbnQ6IFsnJywgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwMCldLFxuICAgICAgdGVybXNuY29uZDogWycnLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDAwKV0sXG4gICAgICB5b3V0dWJlOiBbJyddLFxuICAgICAgaW5kdXN0cmllczogWycnXSxcbiAgICAgIGxhbmd1YWdlczogWycnXSxcbiAgICAgIGRlcGFydG1lbnRzOiBbJyddLFxuICAgICAgY2F0ZWdvcmllczogWycnXSxcbiAgICAgIGZlYXR1cmVzOiBbJyddLFxuICAgICAgc2NyZWVuc2hvdHM6IFsnJ10sXG4gICAgICBwdXJjaGFzZV9saW5rOiBbJyddLFxuICAgICAgdGhhaV9kZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMDApXSldLFxuICAgICAgdGhhaV9zaG9ydGRlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNTAwKV0pXVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UHJvZHVjdFRhZ3MoKSB7XG4gICAgdGhpcy50YWdzJCA9IHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RUYWdzKCk7XG4gICAgdGhpcy5zdWJfdGFnID0gdGhpcy50YWdzJC5zdWJzY3JpYmUoKHByb2R1Y3RfdGFnczogYW55KT0+IHtcbiAgICAgIHRoaXMudGFncy5jYXRlZ29yeSA9IHByb2R1Y3RfdGFncy5jYXRlZ29yaWVzO1xuICAgICAgdGhpcy50YWdzLmluZHVzdHJ5ID0gcHJvZHVjdF90YWdzLmluZHVzdHJpZXM7XG4gICAgICB0aGlzLnRhZ3MuZGVwYXJ0bWVudCA9IHByb2R1Y3RfdGFncy5kZXBhcnRtZW50cztcbiAgICAgIHRoaXMudGFncy5sYW5ndWFnZSA9IHByb2R1Y3RfdGFncy5sYW5ndWFnZXM7XG4gICAgICB0aGlzLnRhZ3MucHJpY2luZ21vZGVscyA9IHByb2R1Y3RfdGFncy5wcmljaW5nbW9kZWxzO1xuICAgICAgdGhpcy50YWdzLmV4dHJhc2VydmljZXMgPSBwcm9kdWN0X3RhZ3MuZXh0cmFzZXJ2aWNlcztcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwgPSB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5nZXRQcmljaW5nTW9kZWwoKTtcblxuICAgIGNvbnN0IHByb2R1Y3QgPSBuZXcgUHJvZHVjdChcbiAgICAgIG51bGwsXG4gICAgICB0aGlzLm15Rm9ybS52YWx1ZS5uYW1lLFxuICAgICAgdGhpcy5teUZvcm1Mb2dvLFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUuZGVzY3JpcHRpb24sXG4gICAgICB0aGlzLm15Rm9ybS52YWx1ZS5zaG9ydGRlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUubWlucmVxdWlyZW1lbnQsXG4gICAgICB0aGlzLm15Rm9ybS52YWx1ZS50ZXJtc25jb25kLFxuICAgICAgdGhpcy5teUZvcm1VcmwsXG4gICAgICB0aGlzLm15Rm9ybUluZHVzdHJpZXMsXG4gICAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcyxcbiAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMsXG4gICAgICB0aGlzLm15Rm9ybUNhdGVnb3JpZXMsXG4gICAgICB0aGlzLm15Rm9ybUZlYXR1cmVzLFxuICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cyxcbiAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnB1cmNoYXNlX2xpbmssXG4gICAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCxcbiAgICAgIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcyxcbiAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnRoYWlfZGVzY3JpcHRpb24sXG4gICAgICB0aGlzLm15Rm9ybS52YWx1ZS50aGFpX3Nob3J0ZGVzY3JpcHRpb24sXG4gICAgICB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlc1xuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcblxuICAgIHRoaXMuYWRkcHJvZHVjdCQgPSB0aGlzLl9wcm9kdWN0U2VydmljZS5hZGRQcm9kdWN0KHByb2R1Y3QpO1xuICAgIHRoaXMuc3ViX2FkZHByb2R1Y3QgPSB0aGlzLmFkZHByb2R1Y3QkXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZihyZXMuc3RhdHVzID09ICdvaycpe1xuICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFZlbmRvckFkZExpc3RpbmdNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvdmVuZG9yL2FsbC1saXN0aW5nYF0pO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VmVuZG9yQWRkTGlzdGluZ01lc3NhZ2UoNTAwKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgc2hvd01lc3NhZ2UobXNnOiBhbnkpe1xuICAgIHRoaXMubXNncy5wdXNoKG1zZyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIG9uQ2hhbmdlTGFuZ3VhZUZyb20obGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0Q2hhbmdlTGFuZ3VhZUZyb20obGFuZyk7XG4gIH1cblxuICBvbkNoZWNrYm94SW5kdXN0cmllcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0Q2hlY2tib3hJbmR1c3RyaWVzKHZhbHVlLCBldmVudCk7XG4gIH1cblxuICBvbkNoZWNrYm94TGFuZ3VhZ2VzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRDaGVja2JveExhbmd1YWdlcyh2YWx1ZSwgZXZlbnQpO1xuICB9XG5cbiAgb25DaGVja2JveERlcGFydG1lbnRzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRDaGVja2JveERlcGFydG1lbnRzKHZhbHVlLCBldmVudCk7XG4gIH1cblxuICBvbkNoZWNrYm94Q2F0ZWdvcmllcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0Q2hlY2tib3hDYXRlZ29yaWVzKHZhbHVlLCBldmVudCk7XG4gIH1cblxuICBvbkNoZWNrYm94RXh0cmFzZXJ2aWNlcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0Q2hlY2tib3hFeHRyYXNlcnZpY2VzKHZhbHVlLCBldmVudCk7XG4gIH1cblxuXG4gIG9uQWRkTmV3RmVhdHVyZShuZXdGZWF0dXJlOiBzdHJpbmcsIGxhbmc6IHN0cmluZykge1xuICAgIHRoaXMubmV3RmVhdHVyZSA9ICcnO1xuICAgIHRoaXMubmV3VGhhaUZlYXR1cmUgPSAnJztcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRBZGROZXdGZWF0dXJlKG5ld0ZlYXR1cmUsIGxhbmcpO1xuICB9XG5cbiAgb25EZWxldGVGZWF0dXJlKGZlYXR1cmU6IHN0cmluZywgbGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0RGVsZXRlRmVhdHVyZShmZWF0dXJlLCBsYW5nKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkTGFuZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2UuZ2V0U2VsZWN0ZWRMYW5nKCk7XG4gIH1cblxuICBnZXRUaGFpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldFRoYWlJbnB1dCgpO1xuICB9XG5cblxuICBvbkNoZWNrYm94UHJpY2luZ01vZGVsKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRDaGVja2JveFByaWNpbmdNb2RlbCh2YWx1ZSwgZXZlbnQpO1xuICB9XG5cbiAgZ2V0U2hvd0lucHV0KHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5nZXRTaG93SW5wdXRQcmljaW5nKHR5cGUpO1xuICB9XG5cbiAgb25TZWxlY3RQcmljaW5nUGxhbih2YWx1ZTogYW55LCBpZDogYW55LCBuYW1lOiBhbnkpIHtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRTZWxlY3RQcmljaW5nUGxhbih2YWx1ZSwgaWQsIG5hbWUpO1xuICB9XG5cbiAgb25JbnB1dFByaWNlKGlkOiBhbnksIHByaWNlX3N0YXJ0OiBhbnksIHByaWNlX2VuZDogYW55LCBjdXJyZW5jeTogYW55KSB7XG4gICAgdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0SW5wdXRQcmljZShpZCwgcHJpY2Vfc3RhcnQsIHByaWNlX2VuZCwgY3VycmVuY3kpO1xuICB9XG5cbiAgb25JbnB1dERheShpZDogYW55LCBkYXk6IGFueSkge1xuICAgIHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLnNldElucHV0RGF5KGlkLCBkYXkpO1xuICB9XG5cbiAgb25JbnB1dE90aGVyTW9kZWwoaWQ6IGFueSwgb3RoZXJfbW9kZWw6IGFueSkge1xuICAgIHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLnNldElucHV0T3RoZXJNb2RlbChpZCwgb3RoZXJfbW9kZWwpO1xuICB9XG5cblxuICBzY3JlZW5zaG90c01heFNpemU6IGFueSA9IHtcbiAgICBvdmVyTWF4U2l6ZTogZmFsc2UsXG4gICAgZmlsZU5hbWU6ICcnXG4gIH07XG5cbiAgZmlsZUNoYW5nZVNjcmVlbnNob3RzKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuXG4gICAgaWYgKGltYWdlUmVzdWx0LmZpbGUuc2l6ZSA+IHRoaXMuTUFYX0lNQUdFX1NJWkUpIHtcblxuICAgICAgdGhpcy5zY3JlZW5zaG90c01heFNpemUub3Zlck1heFNpemUgPSB0cnVlO1xuICAgICAgdGhpcy5zY3JlZW5zaG90c01heFNpemUuZmlsZU5hbWUgPSBpbWFnZVJlc3VsdC5maWxlLm5hbWU7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcmVlbnNob3RzTWF4U2l6ZS5vdmVyTWF4U2l6ZSA9IGZhbHNlO1xuICAgICAgfSwgMzAwMCk7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLnB1c2goaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMKTtcbiAgICAgIHRoaXMuc2NyZWVuc2hvdHNDaG9zZW4gPSB0cnVlO1xuXG4gICAgfVxuXG4gIH1cblxuXG4gIG9uRGVsZXRlU2NyZWVuc2hvdChzcmM6IGFueSkge1xuICAgIGxldCBpID0gdGhpcy5teUZvcm1TY3JlZW5zaG90cy5pbmRleE9mKHNyYyk7XG5cbiAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cy5zcGxpY2UoaSwgMSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY3JlZW5zaG90c0Nob3NlbiA9IGZhbHNlO1xuICAgIH1cblxuXG4gIH1cblxuICBmaWxlQ2hhbmdlTG9nbyhpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcblxuICAgIGlmIChpbWFnZVJlc3VsdC5maWxlLnNpemUgPiB0aGlzLk1BWF9JTUFHRV9TSVpFKSB7XG5cbiAgICAgIHRoaXMubG9nb01heFNpemUub3Zlck1heFNpemUgPSB0cnVlO1xuICAgICAgdGhpcy5sb2dvTWF4U2l6ZS5maWxlTmFtZSA9IGltYWdlUmVzdWx0LmZpbGUubmFtZTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9nb01heFNpemUub3Zlck1heFNpemUgPSBmYWxzZTtcbiAgICAgIH0sIDMwMDApO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGVtcExvZ28gPSAnJztcbiAgICAgIHRoaXMubXlGb3JtTG9nbyA9IGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTDtcbiAgICAgIHRoaXMubG9nb01heFNpemUuZmlsZU5hbWUgPSBpbWFnZVJlc3VsdC5maWxlLm5hbWU7XG4gICAgICB0aGlzLmZpbGVDaG9zZW4gPSB0cnVlO1xuICAgIH1cblxuICB9XG5cbiAgZW1iZWRZb3V0dWJlKHVybDogYW55KSB7XG5cbiAgICB0aGlzLmVtYmVkVXJsID0gbnVsbDtcbiAgICB0aGlzLmVtYmVkVmlkZW8gPSB0cnVlO1xuXG4gICAgaWYodXJsICE9ICcnKXtcblxuICAgICAgaWYgKFZhbGlkYXRpb25TZXJ2aWNlLnlvdXR1YmVQYXJzZXIodXJsKSAhPSBmYWxzZSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCd0cnVlJyk7XG4gICAgICAgIGxldCBpZCA9IHVybC5zcGxpdCgnPScsIDIpWzFdO1xuICAgICAgICB0aGlzLmVtYmVkVXJsID0gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIGlkKTtcbiAgICAgICAgdGhpcy5teUZvcm1VcmwgPSB1cmw7XG4gICAgICAgIHRoaXMudmlkZW9UeXBlID0gdHJ1ZTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy52aWRlb1R5cGUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge3RoaXMuZW1iZWRWaWRlbyA9IGZhbHNlfSwzMDAwKTtcblxuICB9XG5cbiAgZGVsZXRlVmlkZW8oKSB7XG4gICAgdGhpcy52aWRlb1R5cGUgPSBmYWxzZTtcbiAgICB0aGlzLmVtYmVkVmlkZW8gPSBmYWxzZTtcblxuICAgIHRoaXMubXlGb3JtVXJsID0gJyc7XG4gICAgdGhpcy5lbWJlZFVybCA9IG51bGw7XG4gIH1cblxuICBvbkNhbmNsZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC92ZW5kb3JgXSk7XG4gIH1cblxuXG59XG4iXX0=
