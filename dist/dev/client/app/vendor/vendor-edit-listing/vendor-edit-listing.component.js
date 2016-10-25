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
var VendorEditListingComponent = (function () {
    function VendorEditListingComponent(_fb, _productService, route, router, _sanitizer) {
        this._fb = _fb;
        this._productService = _productService;
        this.route = route;
        this.router = router;
        this._sanitizer = _sanitizer;
        this.empty = '';
        this.tags = {
            category: [],
            department: [],
            industry: [],
            language: [],
            extraservices: [],
            pricingmodels: []
        };
        this.pricingmodelsTag = [];
        this.myFormIndustries = [];
        this.myFormLanguages = [];
        this.myFormDepartments = [];
        this.myFormCategories = [];
        this.myFormExtraservices = [];
        this.myFormPricingModel = [];
        this.myFormFeatures = [];
        this.myFormThaiFeatures = [];
        this.myFormUrl = '';
        this.videoType = false;
        this.embedVideo = false;
        this.myUrl = null;
        this.myFormLogo = '';
        this.fileChosen = true;
        this.myFormScreenshots = [];
        this.screenshotsChosen = true;
        this.resizeOptions = {
            resizeMaxHeight: 500,
            resizeMaxWidth: 500
        };
        this.options = {
            currency: ['THB', 'SDG', 'USD', 'AUD']
        };
        this.loading = true;
        this.updated = false;
        this.selectedLang = 'en';
        this._addProductService = add_product_service_1.AddProductService.getInstance();
        this.msgs = [];
        this.display = false;
        this.displayLog = false;
        this.appStatus = { status: '', button: '', feedback: '', id: 0 };
        this.logs = [];
        this.logsLength = 0;
        this.productStatus = [
            { status: 'Not Published', button: 'Submit for Approval', feedback: 'Are you sure', id: 0 },
            { status: 'Under Review', button: 'none.', feedback: 'Are you sure', id: 1 },
            { status: 'Not Approved', button: 'Resubmit', feedback: 'Are you sure', id: 2 },
            { status: 'Approved', button: 'Publish', feedback: 'Are you sure', id: 3 },
            { status: 'Published', button: 'Archive Publish Changes', feedback: 'Are you sure', id: 4 },
            { status: 'Archived', button: 'Send for Review', feedback: 'Are you sure', id: 5 }
        ];
        this.MAX_IMAGE_SIZE = 5000000;
        this.logoMaxSize = {
            overMaxSize: false,
            fileName: ''
        };
        this.screenshotsMaxSize = {
            overMaxSize: false,
            fileName: ''
        };
        this.myForm = this._fb.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(50)])],
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
            pricing_model: [''],
            price_start: [''],
            price_end: [''],
            currency: [''],
            licensing_model: [''],
            thai_description: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(1000)])],
            thai_shortdescription: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(500)])]
        });
    }
    VendorEditListingComponent.prototype.ngOnInit = function () {
        this._addProductService.resetData();
        this.getProductId();
        this.myFormPricingModel = this._addProductService.getPricingModel();
        this.myFormIndustries = this._addProductService.getIndustries();
        this.myFormLanguages = this._addProductService.getLanguages();
        this.myFormDepartments = this._addProductService.getDepartments();
        this.myFormCategories = this._addProductService.getCategories();
        this.myFormExtraservices = this._addProductService.getExtraservices();
        this.myFormFeatures = this._addProductService.getFeatures('en');
        this.myFormThaiFeatures = this._addProductService.getFeatures('th');
        this.updated = false;
    };
    VendorEditListingComponent.prototype.getProductTags = function () {
        var _this = this;
        this._productService.getProductTags()
            .subscribe(function (product_tags) {
            _this.tags.category = product_tags.categories;
            _this.tags.industry = product_tags.industries;
            _this.tags.department = product_tags.departments;
            _this.tags.language = product_tags.languages;
            _this.tags.extraservices = product_tags.extraservices;
            _this.tags.pricingmodels = product_tags.pricingmodels;
        });
    };
    VendorEditListingComponent.prototype.getProductId = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var id = +params['id'];
            _this._productService.getProductId(id)
                .subscribe(function (apps) {
                if (apps) {
                    console.log(apps);
                    _this.apps = apps['en'];
                    _this.apps_th = apps['th'];
                    _this.myFormLogo = apps['en'].logo;
                    _this.embedYoutube(apps['en'].youtube);
                    for (var i = 0; i < apps['en'].screenshots.length; i++) {
                        _this.myFormScreenshots.push(apps['en'].screenshots[i].url);
                    }
                    for (var i = 0; i < apps['en'].pricingmodels.length; i++) {
                        _this._addProductService.setPricingModel(apps['en'].pricingmodels[i]);
                        _this.onBindingPricingModel(apps['en'].pricingmodels[i]);
                    }
                    apps['en'].features.forEach(function (value) { return _this._addProductService.setFeature(value.text); });
                    _this.myFormFeatures = _this._addProductService.getFeatures('en');
                    apps['th'].features.forEach(function (value) { return _this._addProductService.setThaiFeature(value.text); });
                    _this.myFormThaiFeatures = _this._addProductService.getFeatures('th');
                    apps['en'].industries.forEach(function (value) { return _this._addProductService.setIndustries(value.id); });
                    _this.myFormIndustries = _this._addProductService.getIndustries();
                    apps['en'].categories.forEach(function (value) { return _this._addProductService.setCategories(value.id); });
                    _this.myFormCategories = _this._addProductService.getCategories();
                    apps['en'].languages.forEach(function (value) { return _this._addProductService.setLanguages(value.id); });
                    _this.myFormLanguages = _this._addProductService.getLanguages();
                    apps['en'].departments.forEach(function (value) { return _this._addProductService.setDepartments(value.id); });
                    _this.myFormDepartments = _this._addProductService.getDepartments();
                    apps['en'].extraservices.forEach(function (value) { return _this._addProductService.setExtraservices(value.id); });
                    _this.myFormExtraservices = _this._addProductService.getExtraservices();
                    _this.loading = false;
                    _this.getProductTags();
                    _this.appId = apps['en'].id;
                    _this.getProductStatus(apps['en'].status);
                    _this.getLogs(_this.appId);
                }
            });
        });
    };
    VendorEditListingComponent.prototype.getLogs = function (id) {
        var _this = this;
        this._productService.getLogProduct(id)
            .subscribe(function (res) {
            console.log(res);
            if (res.status == "ok") {
                _this.logs = res.data.logs;
                _this.logsLength = res.data.logs.length;
            }
        });
    };
    VendorEditListingComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    VendorEditListingComponent.prototype.toggleLog = function () {
        this.displayLog = !this.displayLog;
    };
    VendorEditListingComponent.prototype.toggleDialog = function () {
        this.display = !this.display;
    };
    VendorEditListingComponent.prototype.getProductStatus = function (status) {
        var _this = this;
        this.productStatus.forEach(function (product) {
            if (product.status == status)
                _this.appStatus = product;
        });
    };
    VendorEditListingComponent.prototype.onSubmitReview = function () {
        var _this = this;
        this.toggleDialog();
        if (this.appStatus.status != 'Under Review') {
            this.appStatus.id == 5 ? this.appStatus.id = 0 : this.appStatus.id;
            var nextStatus = this.productStatus[this.appStatus.id + 1].status.replace(" ", "").toLowerCase();
            console.log(nextStatus);
            this._productService.updateProductStatus(this.appId, nextStatus).subscribe(function (res) {
                console.log(res);
                if (res.status == 'success') {
                    _this.showMessage(message_service_1.msg.getVendorEditStatusMessage(200));
                    _this.clear();
                }
                else {
                    _this.showMessage(message_service_1.msg.getVendorEditStatusMessage(500));
                }
            }, function (error) {
                console.log(error);
                _this.showMessage(message_service_1.msg.getVendorEditStatusMessage(500));
            });
        }
        else {
            console.log('Under Review');
        }
    };
    VendorEditListingComponent.prototype.clear = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var id = +params['id'];
            _this._productService.getProductId(id)
                .subscribe(function (apps) {
                if (apps) {
                    _this.getProductStatus(apps['en'].status);
                    _this.getLogs(_this.appId);
                }
            });
        });
    };
    VendorEditListingComponent.prototype.onSubmit = function () {
        var _this = this;
        var product = new product_model_1.Product(null, this.myForm.value.name, this.myFormLogo, this.myForm.value.description, this.myForm.value.shortdescription, this.myForm.value.minrequirement, this.myForm.value.termsncond, this.myFormUrl, this.myFormIndustries, this.myFormLanguages, this.myFormDepartments, this.myFormCategories, this.myFormFeatures, this.myFormScreenshots, this.myForm.value.purchase_link, this.myFormPricingModel, this.myFormExtraservices, this.myForm.value.thai_description, this.myForm.value.thai_shortdescription, this.myFormThaiFeatures);
        this.updated = false;
        this._productService.updateProduct(this.appId, product)
            .subscribe(function (res) {
            _this.updated = true;
            if (res.status == 'ok') {
                _this.showMessage(message_service_1.msg.getVendorEditListingMessage(200));
                setTimeout(function () {
                    _this.router.navigate(["/vendor/all-listing"]);
                }, 1000);
            }
            else {
                _this.showMessage(message_service_1.msg.getVendorEditListingMessage(500));
            }
        }, function (error) {
            console.log(error);
        });
    };
    VendorEditListingComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
        this._addProductService.resetData();
    };
    VendorEditListingComponent.prototype.onCancel = function () {
        this.router.navigate(["vendor"]);
    };
    VendorEditListingComponent.prototype.onChangeLanguaeFrom = function (lang) {
        this._addProductService.setChangeLanguaeFrom(lang);
    };
    VendorEditListingComponent.prototype.getSelectedLang = function () {
        return this._addProductService.getSelectedLang();
    };
    VendorEditListingComponent.prototype.getThaiInput = function () {
        return this._addProductService.getThaiInput();
    };
    VendorEditListingComponent.prototype.checkedId = function (id, type) {
        return this._addProductService.checkedId(id, type);
    };
    VendorEditListingComponent.prototype.onCheckboxIndustries = function (value, event) {
        this._addProductService.setCheckboxIndustries(value, event);
    };
    VendorEditListingComponent.prototype.onCheckboxLanguages = function (value, event) {
        this._addProductService.setCheckboxLanguages(value, event);
    };
    VendorEditListingComponent.prototype.onCheckboxDepartments = function (value, event) {
        this._addProductService.setCheckboxDepartments(value, event);
    };
    VendorEditListingComponent.prototype.onCheckboxCategories = function (value, event) {
        this._addProductService.setCheckboxCategories(value, event);
    };
    VendorEditListingComponent.prototype.onCheckboxExtraservices = function (value, event) {
        this._addProductService.setCheckboxExtraservices(value, event);
    };
    VendorEditListingComponent.prototype.onAddNewFeature = function (newFeature, lang) {
        this.newFeature = '';
        this.newThaiFeature = '';
        this._addProductService.setAddNewFeature(newFeature, lang);
    };
    VendorEditListingComponent.prototype.onDeleteFeature = function (feature, lang) {
        this._addProductService.setDeleteFeature(feature, lang);
    };
    VendorEditListingComponent.prototype.onCheckboxPricingModel = function (value, event) {
        if (event.currentTarget.checked == true) {
            this._addProductService.setCheckboxPricingModel(value, event);
        }
        if (event.currentTarget.checked == false) {
            this.onResetBindingModel(value.name);
            this._addProductService.setCheckboxPricingModel(value, event);
        }
    };
    VendorEditListingComponent.prototype.onSelectPricingPlan = function (value, id, name) {
        this.onResetBindingModel(name);
        this._addProductService.setSelectPricingPlan(value, id, name);
    };
    VendorEditListingComponent.prototype.onInputPrice = function (id, price_start, price_end, currency) {
        this._addProductService.setInputPrice(id, price_start, price_end, currency);
    };
    VendorEditListingComponent.prototype.onInputDay = function (id, day) {
        this._addProductService.setInputDay(id, day);
    };
    VendorEditListingComponent.prototype.onInputOtherModel = function (id, other_model) {
        this._addProductService.setInputOtherModel(id, other_model);
    };
    VendorEditListingComponent.prototype.getModel = function (model) {
        return this._addProductService.getModel(model);
    };
    VendorEditListingComponent.prototype.getShowInput = function (type) {
        return this._addProductService.getShowInputPricing(type);
    };
    VendorEditListingComponent.prototype.onBindingPricingModel = function (value) {
        this._addProductService.setOnBindingPricingModel(value);
    };
    VendorEditListingComponent.prototype.onResetBindingModel = function (type) {
        this._addProductService.resetBindingModel(type);
    };
    VendorEditListingComponent.prototype.fileChangeLogo = function (imageResult) {
        var _this = this;
        if (imageResult.file.size > this.MAX_IMAGE_SIZE) {
            this.logoMaxSize.overMaxSize = true;
            this.logoMaxSize.fileName = imageResult.file.name;
            setTimeout(function () {
                _this.logoMaxSize.overMaxSize = false;
            }, 3000);
        }
        else {
            this.myFormLogo = imageResult.resized.dataURL;
            this.fileChosen = true;
        }
    };
    VendorEditListingComponent.prototype.fileChangeScreenshots = function (imageResult) {
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
    VendorEditListingComponent.prototype.onDeleteScreenshot = function (src) {
        var i = this.myFormScreenshots.indexOf(src);
        if (i != -1) {
            this.myFormScreenshots.splice(i, 1);
        }
        else {
            this.screenshotsChosen = false;
        }
    };
    VendorEditListingComponent.prototype.embedYoutube = function (url) {
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
    VendorEditListingComponent.prototype.deleteVideo = function () {
        this.videoType = false;
        this.embedVideo = false;
        this.myFormUrl = '';
        this.embedUrl = null;
    };
    VendorEditListingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-vendor-edit-listing',
            templateUrl: 'vendor-edt-listing.component.html',
            styleUrls: ['vendor-edit-listing.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, product_service_1.ProductService, router_1.ActivatedRoute, router_1.Router, platform_browser_1.DomSanitizer])
    ], VendorEditListingComponent);
    return VendorEditListingComponent;
}());
exports.VendorEditListingComponent = VendorEditListingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92ZW5kb3IvdmVuZG9yLWVkaXQtbGlzdGluZy92ZW5kb3ItZWRpdC1saXN0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBR2hELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGlDQUE0QywyQkFBMkIsQ0FBQyxDQUFBO0FBQ3hFLGdDQUE2QixtREFBbUQsQ0FBQyxDQUFBO0FBQ2pGLG1DQUFnQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBQzdFLDhCQUFzQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQzFELG9DQUFnQyxvREFBb0QsQ0FBQyxDQUFBO0FBRXJGLGdDQUFrQix5Q0FBeUMsQ0FBQyxDQUFBO0FBWTVEO0lBeUVFLG9DQUFvQixHQUFnQixFQUNoQixlQUErQixFQUMvQixLQUFxQixFQUNyQixNQUFjLEVBQ2YsVUFBd0I7UUFKdkIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNmLGVBQVUsR0FBVixVQUFVLENBQWM7UUEzRTNDLFVBQUssR0FBUSxFQUFFLENBQUM7UUFPVCxTQUFJLEdBQVE7WUFDakIsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLEVBQUU7WUFDWixhQUFhLEVBQUUsRUFBRTtZQUNqQixhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFDO1FBRUYscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBRTdCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUM3QixvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFDOUIscUJBQWdCLEdBQVUsRUFB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QUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQztRQUVILENBQUM7UUFFRCxVQUFVLENBQUMsY0FBTyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQSxDQUFBLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUduRCxDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFwaEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7U0FDakQsQ0FBQzs7a0NBQUE7SUFvaEJGLGlDQUFDO0FBQUQsQ0FqaEJBLEFBaWhCQyxJQUFBO0FBamhCWSxrQ0FBMEIsNkJBaWhCdEMsQ0FBQSIsImZpbGUiOiJhcHAvdmVuZG9yL3ZlbmRvci1lZGl0LWxpc3RpbmcvdmVuZG9yLWVkaXQtbGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVzaXplT3B0aW9ucywgSW1hZ2VSZXN1bHR9IGZyb20gXCJuZzItaW1hZ2V1cGxvYWRcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QubW9kZWxcIjtcbmltcG9ydCB7QWRkUHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZnVuY3Rpb24vYWRkLXByb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9hcGlcIjtcbmltcG9ydCB7bXNnfSBmcm9tICcuLi8uLi9zaGFyZWQvdmFsaWRhdGlvbi9tZXNzYWdlLXNlcnZpY2UnO1xuXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3RiLXZlbmRvci1lZGl0LWxpc3RpbmcnLFxuICB0ZW1wbGF0ZVVybDogJ3ZlbmRvci1lZHQtbGlzdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd2ZW5kb3ItZWRpdC1saXN0aW5nLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgVmVuZG9yRWRpdExpc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGVtcHR5OiBhbnkgPSAnJztcbiAgbXlGb3JtOiBGb3JtR3JvdXA7XG5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIGFwcHM6IGFueVtdO1xuICBhcHBzX3RoOiBhbnlbXTtcblxuICBwdWJsaWMgdGFnczogYW55ID0ge1xuICAgIGNhdGVnb3J5OiBbXSxcbiAgICBkZXBhcnRtZW50OiBbXSxcbiAgICBpbmR1c3RyeTogW10sXG4gICAgbGFuZ3VhZ2U6IFtdLFxuICAgIGV4dHJhc2VydmljZXM6IFtdLFxuICAgIHByaWNpbmdtb2RlbHM6IFtdXG4gIH07XG5cbiAgcHJpY2luZ21vZGVsc1RhZzogYW55W10gPSBbXTtcblxuICBteUZvcm1JbmR1c3RyaWVzOiBhbnlbXSA9IFtdO1xuICBteUZvcm1MYW5ndWFnZXM6IGFueVtdID0gW107XG4gIG15Rm9ybURlcGFydG1lbnRzOiBhbnlbXSA9IFtdO1xuICBteUZvcm1DYXRlZ29yaWVzOiBhbnlbXSA9IFtdO1xuICBteUZvcm1FeHRyYXNlcnZpY2VzOiBhbnlbXSA9IFtdO1xuICBteUZvcm1QcmljaW5nTW9kZWw6IGFueVtdID0gW107XG5cbiAgbXlGb3JtRmVhdHVyZXM6IGFueVtdID0gW107XG4gIG15Rm9ybVRoYWlGZWF0dXJlczogYW55W10gPSBbXTtcbiAgbmV3RmVhdHVyZTogc3RyaW5nO1xuICBuZXdUaGFpRmVhdHVyZTogc3RyaW5nO1xuXG4gIG15Rm9ybVVybDogc3RyaW5nID0gJyc7XG4gIGVtYmVkVXJsOiBTYWZlUmVzb3VyY2VVcmw7XG4gIHZpZGVvVHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICBlbWJlZFZpZGVvOiBib29sZWFuID0gZmFsc2U7XG4gIG15VXJsOiBzdHJpbmcgPSBudWxsO1xuXG4gIG15Rm9ybUxvZ286IHN0cmluZyA9ICcnO1xuICBmaWxlQ2hvc2VuOiBib29sZWFuID0gdHJ1ZTtcblxuICBteUZvcm1TY3JlZW5zaG90czogYW55W10gPSBbXTtcbiAgc2NyZWVuc2hvdHNDaG9zZW46IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgcmVzaXplTWF4SGVpZ2h0OiA1MDAsXG4gICAgcmVzaXplTWF4V2lkdGg6IDUwMFxuICB9O1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgY3VycmVuY3k6IFsnVEhCJywgJ1NERycsICdVU0QnLCAnQVVEJ11cbiAgfTtcblxuXG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG4gIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vQ2FsbGJhY2sgYWZ0ZXIgYWRkZWQgcHJvZHVjdFxuICB1cGRhdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHNlbGVjdGVkTGFuZzogc3RyaW5nID0gJ2VuJztcblxuICBfYWRkUHJvZHVjdFNlcnZpY2UgPSBBZGRQcm9kdWN0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuXG5cbiAgLy9Mb2cgYW5kIFN0YXR1c1xuICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcbiAgZGlzcGxheTogYm9vbGVhbiA9IGZhbHNlO1xuICBkaXNwbGF5TG9nOiBib29sZWFuID0gZmFsc2U7XG4gIGFwcFN0YXR1czogYW55ID0ge3N0YXR1czogJycsIGJ1dHRvbjogJycsIGZlZWRiYWNrOiAnJywgaWQ6IDB9O1xuICBhcHBJZDogYW55O1xuICBsb2dzOiBhbnlbXSA9IFtdO1xuICBsb2dzTGVuZ3RoOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHVibGljIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXG5cbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MCldKV0sXG4gICAgICBsb2dvOiBbJyddLFxuICAgICAgZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDAwKV0pXSxcbiAgICAgIHNob3J0ZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MDApXSldLFxuICAgICAgbWlucmVxdWlyZW1lbnQ6IFsnJywgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwMCldLFxuICAgICAgdGVybXNuY29uZDogWycnLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDAwKV0sXG4gICAgICB5b3V0dWJlOiBbJyddLFxuICAgICAgaW5kdXN0cmllczogWycnXSxcbiAgICAgIGxhbmd1YWdlczogWycnXSxcbiAgICAgIGRlcGFydG1lbnRzOiBbJyddLFxuICAgICAgY2F0ZWdvcmllczogWycnXSxcbiAgICAgIGZlYXR1cmVzOiBbJyddLFxuICAgICAgc2NyZWVuc2hvdHM6IFsnJ10sXG4gICAgICBwdXJjaGFzZV9saW5rOiBbJyddLFxuICAgICAgcHJpY2luZ19tb2RlbDogWycnXSxcbiAgICAgIHByaWNlX3N0YXJ0OiBbJyddLFxuICAgICAgcHJpY2VfZW5kOiBbJyddLFxuICAgICAgY3VycmVuY3k6IFsnJ10sXG4gICAgICBsaWNlbnNpbmdfbW9kZWw6IFsnJ10sXG4gICAgICB0aGFpX2Rlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwMCldKV0sXG4gICAgICB0aGFpX3Nob3J0ZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MDApXSldXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLnJlc2V0RGF0YSgpO1xuICAgIHRoaXMuZ2V0UHJvZHVjdElkKCk7XG5cbiAgICB0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCA9IHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldFByaWNpbmdNb2RlbCgpO1xuICAgIHRoaXMubXlGb3JtSW5kdXN0cmllcyA9IHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldEluZHVzdHJpZXMoKTtcbiAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcyA9IHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldExhbmd1YWdlcygpO1xuICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMgPSB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5nZXREZXBhcnRtZW50cygpO1xuICAgIHRoaXMubXlGb3JtQ2F0ZWdvcmllcyA9IHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldENhdGVnb3JpZXMoKTtcbiAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMgPSB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5nZXRFeHRyYXNlcnZpY2VzKCk7XG4gICAgdGhpcy5teUZvcm1GZWF0dXJlcyA9IHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldEZlYXR1cmVzKCdlbicpO1xuICAgIHRoaXMubXlGb3JtVGhhaUZlYXR1cmVzID0gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2UuZ2V0RmVhdHVyZXMoJ3RoJyk7XG5cbiAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldFByb2R1Y3RUYWdzKCkge1xuICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RUYWdzKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIHByb2R1Y3RfdGFncyA9PiB7XG4gICAgICAgICAgdGhpcy50YWdzLmNhdGVnb3J5ID0gcHJvZHVjdF90YWdzLmNhdGVnb3JpZXM7XG4gICAgICAgICAgdGhpcy50YWdzLmluZHVzdHJ5ID0gcHJvZHVjdF90YWdzLmluZHVzdHJpZXM7XG4gICAgICAgICAgdGhpcy50YWdzLmRlcGFydG1lbnQgPSBwcm9kdWN0X3RhZ3MuZGVwYXJ0bWVudHM7XG4gICAgICAgICAgdGhpcy50YWdzLmxhbmd1YWdlID0gcHJvZHVjdF90YWdzLmxhbmd1YWdlcztcbiAgICAgICAgICB0aGlzLnRhZ3MuZXh0cmFzZXJ2aWNlcyA9IHByb2R1Y3RfdGFncy5leHRyYXNlcnZpY2VzO1xuICAgICAgICAgIHRoaXMudGFncy5wcmljaW5nbW9kZWxzID0gcHJvZHVjdF90YWdzLnByaWNpbmdtb2RlbHM7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZ2V0UHJvZHVjdElkKCkge1xuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgLnBhcmFtc1xuICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0SWQoaWQpXG4gICAgICAgICAgLnN1YnNjcmliZShhcHBzID0+IHtcbiAgICAgICAgICAgIGlmIChhcHBzKSB7XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYXBwcyk7XG5cbiAgICAgICAgICAgICAgdGhpcy5hcHBzID0gYXBwc1snZW4nXTtcbiAgICAgICAgICAgICAgdGhpcy5hcHBzX3RoID0gYXBwc1sndGgnXTtcblxuICAgICAgICAgICAgICB0aGlzLm15Rm9ybUxvZ28gPSBhcHBzWydlbiddLmxvZ287XG5cbiAgICAgICAgICAgICAgdGhpcy5lbWJlZFlvdXR1YmUoYXBwc1snZW4nXS55b3V0dWJlKTtcblxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcHNbJ2VuJ10uc2NyZWVuc2hvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLnB1c2goYXBwc1snZW4nXS5zY3JlZW5zaG90c1tpXS51cmwpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBzWydlbiddLnByaWNpbmdtb2RlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRQcmljaW5nTW9kZWwoYXBwc1snZW4nXS5wcmljaW5nbW9kZWxzW2ldKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQmluZGluZ1ByaWNpbmdNb2RlbChhcHBzWydlbiddLnByaWNpbmdtb2RlbHNbaV0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYXBwc1snZW4nXS5mZWF0dXJlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRGZWF0dXJlKHZhbHVlLnRleHQpKTtcbiAgICAgICAgICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcyA9IHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldEZlYXR1cmVzKCdlbicpO1xuXG4gICAgICAgICAgICAgIGFwcHNbJ3RoJ10uZmVhdHVyZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0VGhhaUZlYXR1cmUodmFsdWUudGV4dCkpO1xuICAgICAgICAgICAgICB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlcyA9IHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldEZlYXR1cmVzKCd0aCcpO1xuXG4gICAgICAgICAgICAgIGFwcHNbJ2VuJ10uaW5kdXN0cmllcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRJbmR1c3RyaWVzKHZhbHVlLmlkKSk7XG4gICAgICAgICAgICAgIHRoaXMubXlGb3JtSW5kdXN0cmllcyA9IHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldEluZHVzdHJpZXMoKTtcblxuICAgICAgICAgICAgICBhcHBzWydlbiddLmNhdGVnb3JpZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0Q2F0ZWdvcmllcyh2YWx1ZS5pZCkpO1xuICAgICAgICAgICAgICB0aGlzLm15Rm9ybUNhdGVnb3JpZXMgPSB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5nZXRDYXRlZ29yaWVzKCk7XG5cbiAgICAgICAgICAgICAgYXBwc1snZW4nXS5sYW5ndWFnZXMuZm9yRWFjaCgodmFsdWU6IGFueSk9PiB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRMYW5ndWFnZXModmFsdWUuaWQpKTtcbiAgICAgICAgICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMgPSB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5nZXRMYW5ndWFnZXMoKTtcblxuICAgICAgICAgICAgICBhcHBzWydlbiddLmRlcGFydG1lbnRzLmZvckVhY2goKHZhbHVlOiBhbnkpPT4gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0RGVwYXJ0bWVudHModmFsdWUuaWQpKTtcbiAgICAgICAgICAgICAgdGhpcy5teUZvcm1EZXBhcnRtZW50cyA9IHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldERlcGFydG1lbnRzKCk7XG5cbiAgICAgICAgICAgICAgYXBwc1snZW4nXS5leHRyYXNlcnZpY2VzLmZvckVhY2goKHZhbHVlOiBhbnkpPT4gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0RXh0cmFzZXJ2aWNlcyh2YWx1ZS5pZCkpO1xuICAgICAgICAgICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMgPSB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5nZXRFeHRyYXNlcnZpY2VzKCk7XG5cbiAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdFRhZ3MoKTtcblxuICAgICAgICAgICAgICB0aGlzLmFwcElkID0gYXBwc1snZW4nXS5pZDtcbiAgICAgICAgICAgICAgdGhpcy5nZXRQcm9kdWN0U3RhdHVzKGFwcHNbJ2VuJ10uc3RhdHVzKTtcbiAgICAgICAgICAgICAgdGhpcy5nZXRMb2dzKHRoaXMuYXBwSWQpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuICB9XG5cblxuXG4gIGdldExvZ3MoaWQ6IGFueSkge1xuICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldExvZ1Byb2R1Y3QoaWQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzOmFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgaWYocmVzLnN0YXR1cyA9PSBcIm9rXCIpe1xuICAgICAgICAgICAgdGhpcy5sb2dzID0gcmVzLmRhdGEubG9ncztcbiAgICAgICAgICAgIHRoaXMubG9nc0xlbmd0aCA9IHJlcy5kYXRhLmxvZ3MubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIH1cblxuXG4gIHNob3dNZXNzYWdlKG1zZzogYW55KXtcbiAgICB0aGlzLm1zZ3MucHVzaChtc2cpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tc2dzID0gW107XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICB0b2dnbGVMb2coKXtcbiAgICB0aGlzLmRpc3BsYXlMb2cgPSAhdGhpcy5kaXNwbGF5TG9nO1xuICB9XG5cbiAgdG9nZ2xlRGlhbG9nKCkge1xuICAgIHRoaXMuZGlzcGxheSA9ICF0aGlzLmRpc3BsYXk7XG4gIH1cblxuICAgcHJvZHVjdFN0YXR1czogYW55ID0gW1xuICAgICAge3N0YXR1czogJ05vdCBQdWJsaXNoZWQnLCBidXR0b246ICdTdWJtaXQgZm9yIEFwcHJvdmFsJywgZmVlZGJhY2s6ICdBcmUgeW91IHN1cmUnLCBpZDogMH0sXG4gICAgICB7c3RhdHVzOiAnVW5kZXIgUmV2aWV3JywgIGJ1dHRvbjogJ25vbmUuJywgZmVlZGJhY2s6ICdBcmUgeW91IHN1cmUnLCBpZDogMX0sXG4gICAgICB7c3RhdHVzOiAnTm90IEFwcHJvdmVkJywgYnV0dG9uOiAnUmVzdWJtaXQnLCBmZWVkYmFjazogJ0FyZSB5b3Ugc3VyZScsIGlkOiAyfSxcbiAgICAgIHtzdGF0dXM6ICdBcHByb3ZlZCcsICAgIGJ1dHRvbjogJ1B1Ymxpc2gnLCBmZWVkYmFjazogJ0FyZSB5b3Ugc3VyZScsIGlkOiAzfSxcbiAgICAgIHtzdGF0dXM6ICdQdWJsaXNoZWQnLCAgIGJ1dHRvbjogJ0FyY2hpdmUgUHVibGlzaCBDaGFuZ2VzJywgZmVlZGJhY2s6ICdBcmUgeW91IHN1cmUnLCBpZDogNH0sXG4gICAgICB7c3RhdHVzOiAnQXJjaGl2ZWQnLCAgICBidXR0b246ICdTZW5kIGZvciBSZXZpZXcnLCBmZWVkYmFjazogJ0FyZSB5b3Ugc3VyZScsIGlkOiA1fVxuICAgIF07XG5cblxuICBnZXRQcm9kdWN0U3RhdHVzKHN0YXR1czogYW55KXtcbiAgICB0aGlzLnByb2R1Y3RTdGF0dXMuZm9yRWFjaCgocHJvZHVjdDogYW55KSA9PiB7XG4gICAgICBpZihwcm9kdWN0LnN0YXR1cyA9PSBzdGF0dXMpIHRoaXMuYXBwU3RhdHVzID0gcHJvZHVjdDtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0UmV2aWV3KCkge1xuXG4gICAgdGhpcy50b2dnbGVEaWFsb2coKTtcblxuICAgIGlmKHRoaXMuYXBwU3RhdHVzLnN0YXR1cyAhPSAnVW5kZXIgUmV2aWV3Jyl7XG5cbiAgICAgIHRoaXMuYXBwU3RhdHVzLmlkID09IDUgPyB0aGlzLmFwcFN0YXR1cy5pZCA9IDAgOiB0aGlzLmFwcFN0YXR1cy5pZDtcbiAgICAgIGxldCBuZXh0U3RhdHVzID0gdGhpcy5wcm9kdWN0U3RhdHVzW3RoaXMuYXBwU3RhdHVzLmlkICsgMV0uc3RhdHVzLnJlcGxhY2UoXCIgXCIsIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zb2xlLmxvZyhuZXh0U3RhdHVzKTtcblxuICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UudXBkYXRlUHJvZHVjdFN0YXR1cyh0aGlzLmFwcElkLCBuZXh0U3RhdHVzKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgaWYocmVzLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VmVuZG9yRWRpdFN0YXR1c01lc3NhZ2UoMjAwKSk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VmVuZG9yRWRpdFN0YXR1c01lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFZlbmRvckVkaXRTdGF0dXNNZXNzYWdlKDUwMCkpO1xuICAgICAgICB9KTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKCdVbmRlciBSZXZpZXcnKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcblxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgLnBhcmFtc1xuICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0SWQoaWQpXG4gICAgICAgICAgLnN1YnNjcmliZShhcHBzID0+IHtcbiAgICAgICAgICAgIGlmIChhcHBzKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdFN0YXR1cyhhcHBzWydlbiddLnN0YXR1cyk7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0TG9ncyh0aGlzLmFwcElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgfVxuXG5cbiAgb25TdWJtaXQoKSB7XG5cbiAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3QoXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUubmFtZSxcbiAgICAgIHRoaXMubXlGb3JtTG9nbyxcbiAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUuc2hvcnRkZXNjcmlwdGlvbixcbiAgICAgIHRoaXMubXlGb3JtLnZhbHVlLm1pbnJlcXVpcmVtZW50LFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUudGVybXNuY29uZCxcbiAgICAgIHRoaXMubXlGb3JtVXJsLFxuICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLFxuICAgICAgdGhpcy5teUZvcm1MYW5ndWFnZXMsXG4gICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLFxuICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLFxuICAgICAgdGhpcy5teUZvcm1GZWF0dXJlcyxcbiAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMsXG4gICAgICB0aGlzLm15Rm9ybS52YWx1ZS5wdXJjaGFzZV9saW5rLFxuICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwsXG4gICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMsXG4gICAgICB0aGlzLm15Rm9ybS52YWx1ZS50aGFpX2Rlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUudGhhaV9zaG9ydGRlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXNcbiAgICApO1xuXG5cbiAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLnVwZGF0ZVByb2R1Y3QodGhpcy5hcHBJZCwgcHJvZHVjdClcbiAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgaWYocmVzLnN0YXR1cyA9PSAnb2snKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobXNnLmdldFZlbmRvckVkaXRMaXN0aW5nTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC92ZW5kb3IvYWxsLWxpc3RpbmdgXSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRWZW5kb3JFZGl0TGlzdGluZ01lc3NhZ2UoNTAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5yZXNldERhdGEoKTtcbiAgfVxuICBvbkNhbmNlbCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYHZlbmRvcmBdKTtcbiAgfVxuXG4gIG9uQ2hhbmdlTGFuZ3VhZUZyb20obGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0Q2hhbmdlTGFuZ3VhZUZyb20obGFuZyk7XG4gIH1cblxuICBnZXRTZWxlY3RlZExhbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLmdldFNlbGVjdGVkTGFuZygpO1xuICB9XG5cbiAgZ2V0VGhhaUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5nZXRUaGFpSW5wdXQoKTtcbiAgfVxuXG4gIGNoZWNrZWRJZChpZDogbnVtYmVyLCB0eXBlOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2UuY2hlY2tlZElkKGlkLCB0eXBlKTtcbiAgfVxuXG4gIG9uQ2hlY2tib3hJbmR1c3RyaWVzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRDaGVja2JveEluZHVzdHJpZXModmFsdWUsIGV2ZW50KTtcbiAgfVxuXG4gIG9uQ2hlY2tib3hMYW5ndWFnZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLnNldENoZWNrYm94TGFuZ3VhZ2VzKHZhbHVlLCBldmVudCk7XG4gIH1cblxuICBvbkNoZWNrYm94RGVwYXJ0bWVudHModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLnNldENoZWNrYm94RGVwYXJ0bWVudHModmFsdWUsIGV2ZW50KTtcbiAgfVxuXG4gIG9uQ2hlY2tib3hDYXRlZ29yaWVzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRDaGVja2JveENhdGVnb3JpZXModmFsdWUsIGV2ZW50KTtcbiAgfVxuXG4gIG9uQ2hlY2tib3hFeHRyYXNlcnZpY2VzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRDaGVja2JveEV4dHJhc2VydmljZXModmFsdWUsIGV2ZW50KTtcblxuICB9XG5cbiAgb25BZGROZXdGZWF0dXJlKG5ld0ZlYXR1cmU6IHN0cmluZywgbGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5uZXdGZWF0dXJlID0gJyc7XG4gICAgdGhpcy5uZXdUaGFpRmVhdHVyZSA9ICcnO1xuICAgIHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLnNldEFkZE5ld0ZlYXR1cmUobmV3RmVhdHVyZSwgbGFuZyk7XG4gIH1cblxuICBvbkRlbGV0ZUZlYXR1cmUoZmVhdHVyZTogc3RyaW5nLCBsYW5nOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXREZWxldGVGZWF0dXJlKGZlYXR1cmUsIGxhbmcpO1xuICB9XG5cbiAgb25DaGVja2JveFByaWNpbmdNb2RlbCh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG5cbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgIHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLnNldENoZWNrYm94UHJpY2luZ01vZGVsKHZhbHVlLCBldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgdGhpcy5vblJlc2V0QmluZGluZ01vZGVsKHZhbHVlLm5hbWUpO1xuICAgICAgdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0Q2hlY2tib3hQcmljaW5nTW9kZWwodmFsdWUsIGV2ZW50KTtcbiAgICB9XG5cbiAgfVxuXG4gIG9uU2VsZWN0UHJpY2luZ1BsYW4odmFsdWU6IGFueSwgaWQ6IGFueSwgbmFtZTogYW55KSB7XG4gICAgdGhpcy5vblJlc2V0QmluZGluZ01vZGVsKG5hbWUpO1xuICAgIHRoaXMuX2FkZFByb2R1Y3RTZXJ2aWNlLnNldFNlbGVjdFByaWNpbmdQbGFuKHZhbHVlLCBpZCwgbmFtZSk7XG4gIH1cblxuICBvbklucHV0UHJpY2UoaWQ6IGFueSwgcHJpY2Vfc3RhcnQ6IGFueSwgcHJpY2VfZW5kOiBhbnksIGN1cnJlbmN5OiBhbnkpIHtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRJbnB1dFByaWNlKGlkLCBwcmljZV9zdGFydCwgcHJpY2VfZW5kLCBjdXJyZW5jeSk7XG4gIH1cblxuICBvbklucHV0RGF5KGlkOiBhbnksIGRheTogYW55KSB7XG4gICAgdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2Uuc2V0SW5wdXREYXkoaWQsIGRheSk7XG5cbiAgfVxuXG4gIG9uSW5wdXRPdGhlck1vZGVsKGlkOiBhbnksIG90aGVyX21vZGVsOiBhbnkpIHtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRJbnB1dE90aGVyTW9kZWwoaWQsIG90aGVyX21vZGVsKTtcbiAgfVxuXG4gIGdldE1vZGVsKG1vZGVsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkUHJvZHVjdFNlcnZpY2UuZ2V0TW9kZWwobW9kZWwpO1xuICB9XG5cbiAgZ2V0U2hvd0lucHV0KHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5nZXRTaG93SW5wdXRQcmljaW5nKHR5cGUpO1xuICB9XG5cbiAgb25CaW5kaW5nUHJpY2luZ01vZGVsKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5zZXRPbkJpbmRpbmdQcmljaW5nTW9kZWwodmFsdWUpO1xuICB9XG5cbiAgb25SZXNldEJpbmRpbmdNb2RlbCh0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZGRQcm9kdWN0U2VydmljZS5yZXNldEJpbmRpbmdNb2RlbCh0eXBlKTtcbiAgfVxuXG5cbiAgTUFYX0lNQUdFX1NJWkU6IG51bWJlciA9IDUwMDAwMDA7XG5cbiAgbG9nb01heFNpemU6IGFueSA9IHtcbiAgICBvdmVyTWF4U2l6ZTogZmFsc2UsXG4gICAgZmlsZU5hbWU6ICcnXG4gIH07XG5cbiAgZmlsZUNoYW5nZUxvZ28oaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG5cbiAgICBpZiAoaW1hZ2VSZXN1bHQuZmlsZS5zaXplID4gdGhpcy5NQVhfSU1BR0VfU0laRSkge1xuICAgICAgdGhpcy5sb2dvTWF4U2l6ZS5vdmVyTWF4U2l6ZSA9IHRydWU7XG4gICAgICB0aGlzLmxvZ29NYXhTaXplLmZpbGVOYW1lID0gaW1hZ2VSZXN1bHQuZmlsZS5uYW1lO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2dvTWF4U2l6ZS5vdmVyTWF4U2l6ZSA9IGZhbHNlO1xuICAgICAgfSwgMzAwMCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5teUZvcm1Mb2dvID0gaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMO1xuICAgICAgdGhpcy5maWxlQ2hvc2VuID0gdHJ1ZTtcbiAgICB9XG5cbiAgfVxuXG4gIHNjcmVlbnNob3RzTWF4U2l6ZTogYW55ID0ge1xuICAgIG92ZXJNYXhTaXplOiBmYWxzZSxcbiAgICBmaWxlTmFtZTogJydcbiAgfTtcblxuXG4gIGZpbGVDaGFuZ2VTY3JlZW5zaG90cyhpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcblxuICAgIGlmIChpbWFnZVJlc3VsdC5maWxlLnNpemUgPiB0aGlzLk1BWF9JTUFHRV9TSVpFKSB7XG5cbiAgICAgIHRoaXMuc2NyZWVuc2hvdHNNYXhTaXplLm92ZXJNYXhTaXplID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2NyZWVuc2hvdHNNYXhTaXplLmZpbGVOYW1lID0gaW1hZ2VSZXN1bHQuZmlsZS5uYW1lO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zY3JlZW5zaG90c01heFNpemUub3Zlck1heFNpemUgPSBmYWxzZTtcbiAgICAgIH0sIDMwMDApO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXlGb3JtU2NyZWVuc2hvdHMucHVzaChpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkwpO1xuICAgICAgdGhpcy5zY3JlZW5zaG90c0Nob3NlbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25EZWxldGVTY3JlZW5zaG90KHNyYzogYW55KSB7XG4gICAgbGV0IGkgPSB0aGlzLm15Rm9ybVNjcmVlbnNob3RzLmluZGV4T2Yoc3JjKTtcbiAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgdGhpcy5teUZvcm1TY3JlZW5zaG90cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NyZWVuc2hvdHNDaG9zZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBlbWJlZFlvdXR1YmUodXJsOiBhbnkpIHtcblxuICAgIHRoaXMuZW1iZWRVcmwgPSBudWxsO1xuICAgIHRoaXMuZW1iZWRWaWRlbyA9IHRydWU7XG5cbiAgICBpZih1cmwgIT0gJycpe1xuXG4gICAgICBpZiAoVmFsaWRhdGlvblNlcnZpY2UueW91dHViZVBhcnNlcih1cmwpICE9IGZhbHNlKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3RydWUnKTtcbiAgICAgICAgbGV0IGlkID0gdXJsLnNwbGl0KCc9JywgMilbMV07XG4gICAgICAgIHRoaXMuZW1iZWRVcmwgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgaWQpO1xuICAgICAgICB0aGlzLm15Rm9ybVVybCA9IHVybDtcbiAgICAgICAgdGhpcy52aWRlb1R5cGUgPSB0cnVlO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnZpZGVvVHlwZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7dGhpcy5lbWJlZFZpZGVvID0gZmFsc2V9LDMwMDApO1xuXG5cbiAgfVxuXG4gIGRlbGV0ZVZpZGVvKCkge1xuICAgIHRoaXMudmlkZW9UeXBlID0gZmFsc2U7XG4gICAgdGhpcy5lbWJlZFZpZGVvID0gZmFsc2U7XG4gICAgdGhpcy5teUZvcm1VcmwgPSAnJztcbiAgICB0aGlzLmVtYmVkVXJsID0gbnVsbDtcbiAgfVxuXG5cblxuXG59XG4iXX0=
