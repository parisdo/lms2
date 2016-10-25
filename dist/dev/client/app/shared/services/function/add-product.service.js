"use strict";
var AddProductService = (function () {
    function AddProductService() {
        this.myFormIndustries = [];
        this.myFormLanguages = [];
        this.myFormDepartments = [];
        this.myFormCategories = [];
        this.myFormExtraservices = [];
        this.myFormFeatures = [];
        this.myFormThaiFeatures = [];
        this.thaiInput = false;
        this.selectedLang = 'en';
        this.MAX_SIZE_FEATURE = 5;
        this.options = {
            currency: ['THB', 'SDG', 'USD', 'AUD']
        };
        this.myFormPricingModel = [];
        this.showMonthly = false;
        this.showYearly = false;
        this.showLifetime = false;
        this.showFreeService = false;
        this.showOther = false;
        this.singlepriceMonthly = false;
        this.pricerangeMonthly = false;
        this.singlepriceYearly = false;
        this.pricerangeYearly = false;
        this.singlepriceLifetime = false;
        this.pricerangeLifetime = false;
        if (!AddProductService.isCreating) {
            throw new Error("You can't call new in Singleton instances!");
        }
    }
    AddProductService.getInstance = function () {
        if (AddProductService.instance == null) {
            AddProductService.isCreating = true;
            AddProductService.instance = new AddProductService();
            AddProductService.isCreating = false;
        }
        return AddProductService.instance;
    };
    AddProductService.prototype.resetData = function () {
        this.myFormIndustries = [];
        this.myFormLanguages = [];
        this.myFormDepartments = [];
        this.myFormCategories = [];
        this.myFormExtraservices = [];
        this.myFormFeatures = [];
        this.myFormThaiFeatures = [];
        this.thaiInput = false;
        this.selectedLang = 'en';
        this.myFormPricingModel = [];
        this.showMonthly = false;
        this.showYearly = false;
        this.showLifetime = false;
        this.showFreeService = false;
        this.showOther = false;
        this.singlepriceMonthly = false;
        this.pricerangeMonthly = false;
        this.singlepriceYearly = false;
        this.pricerangeYearly = false;
        this.singlepriceLifetime = false;
        this.pricerangeLifetime = false;
        this.dayModel = null;
        this.otherModel = '';
        this.priceStartMonthlyModel = null;
        this.priceStartYearlyModel = null;
        this.priceStartLifetimeModel = null;
        this.priceEndMonthlyModel = null;
        this.priceEndYearlyModel = null;
        this.priceEndLifetimeModel = null;
        this.currencyMonthlyModel = null;
        this.currencyYearlyModel = null;
        this.currencyLifetimeModel = null;
        return 'success';
    };
    AddProductService.prototype.checkedId = function (id, type) {
        if (type == 'categories') {
            for (var i = 0; i < this.myFormCategories.length; i++) {
                if (id == this.myFormCategories[i])
                    return true;
            }
        }
        if (type == 'departments') {
            for (var i = 0; i < this.myFormDepartments.length; i++) {
                if (id == this.myFormDepartments[i])
                    return true;
            }
        }
        if (type == 'industries') {
            for (var i = 0; i < this.myFormIndustries.length; i++) {
                if (id == this.myFormIndustries[i])
                    return true;
            }
        }
        if (type == 'languages') {
            for (var i = 0; i < this.myFormLanguages.length; i++) {
                if (id == this.myFormLanguages[i])
                    return true;
            }
        }
        if (type == 'extraservices') {
            for (var i = 0; i < this.myFormExtraservices.length; i++) {
                if (id == this.myFormExtraservices[i])
                    return true;
            }
        }
        if (type == 'pricingmodels') {
            for (var i = 0; i < this.myFormPricingModel.length; i++) {
                if (id == this.myFormPricingModel[i].id) {
                    return true;
                }
            }
        }
        return false;
    };
    AddProductService.prototype.getIndustries = function () {
        return this.myFormIndustries;
    };
    AddProductService.prototype.setIndustries = function (value) {
        this.myFormIndustries.push(value);
    };
    AddProductService.prototype.setCheckboxIndustries = function (value, event) {
        if (event.currentTarget.checked == true) {
            this.myFormIndustries.push(value.id);
        }
        if (event.currentTarget.checked == false) {
            var i = this.myFormIndustries.indexOf(value.id);
            if (i != -1) {
                this.myFormIndustries.splice(i, 1);
            }
        }
    };
    AddProductService.prototype.getLanguages = function () {
        return this.myFormLanguages;
    };
    AddProductService.prototype.setLanguages = function (value) {
        this.myFormLanguages.push(value);
    };
    AddProductService.prototype.setCheckboxLanguages = function (value, event) {
        if (event.currentTarget.checked == true) {
            this.myFormLanguages.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            var i = this.myFormLanguages.indexOf(value.dbid);
            if (i != -1) {
                this.myFormLanguages.splice(i, 1);
            }
        }
    };
    AddProductService.prototype.getDepartments = function () {
        return this.myFormDepartments;
    };
    AddProductService.prototype.setDepartments = function (value) {
        this.myFormDepartments.push(value);
    };
    AddProductService.prototype.setCheckboxDepartments = function (value, event) {
        if (event.currentTarget.checked == true) {
            this.myFormDepartments.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            var i = this.myFormDepartments.indexOf(value.dbid);
            if (i != -1) {
                this.myFormDepartments.splice(i, 1);
            }
        }
    };
    AddProductService.prototype.getCategories = function () {
        return this.myFormCategories;
    };
    AddProductService.prototype.setCategories = function (value) {
        this.myFormCategories.push(value);
    };
    AddProductService.prototype.setCheckboxCategories = function (value, event) {
        if (event.currentTarget.checked == true) {
            this.myFormCategories.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            var i = this.myFormCategories.indexOf(value.dbid);
            if (i != -1) {
                this.myFormCategories.splice(i, 1);
            }
        }
    };
    AddProductService.prototype.getExtraservices = function () {
        return this.myFormExtraservices;
    };
    AddProductService.prototype.setExtraservices = function (value) {
        this.myFormExtraservices.push(value);
    };
    AddProductService.prototype.setCheckboxExtraservices = function (value, event) {
        if (event.currentTarget.checked == true) {
            this.myFormExtraservices.push(value.dbid);
        }
        if (event.currentTarget.checked == false) {
            var i = this.myFormExtraservices.indexOf(value.dbid);
            if (i != -1) {
                this.myFormExtraservices.splice(i, 1);
            }
        }
    };
    AddProductService.prototype.getFeatures = function (lang) {
        switch (lang) {
            case 'th':
                return this.myFormThaiFeatures;
            case 'en':
                return this.myFormFeatures;
        }
        return null;
    };
    AddProductService.prototype.getSelectedLang = function () {
        return this.selectedLang;
    };
    AddProductService.prototype.getThaiInput = function () {
        return this.thaiInput;
    };
    AddProductService.prototype.setFeature = function (value) {
        this.myFormFeatures.push(value);
    };
    AddProductService.prototype.setThaiFeature = function (value) {
        this.myFormThaiFeatures.push(value);
    };
    AddProductService.prototype.setAddNewFeature = function (newFeature, lang) {
        switch (lang) {
            case 'th':
                if (newFeature && this.myFormThaiFeatures.length < this.MAX_SIZE_FEATURE) {
                    this.myFormThaiFeatures.push(newFeature);
                }
                break;
            case 'en':
                if (newFeature && this.myFormFeatures.length < this.MAX_SIZE_FEATURE) {
                    this.myFormFeatures.push(newFeature);
                }
                break;
        }
    };
    AddProductService.prototype.setDeleteFeature = function (feature, lang) {
        switch (lang) {
            case 'th':
                var i = this.myFormThaiFeatures.indexOf(feature);
                if (i != -1) {
                    this.myFormThaiFeatures.splice(i, 1);
                }
                break;
            case 'en':
                var j = this.myFormFeatures.indexOf(feature);
                if (j != -1) {
                    this.myFormFeatures.splice(j, 1);
                }
                break;
        }
    };
    AddProductService.prototype.setChangeLanguaeFrom = function (lang) {
        this.selectedLang = lang;
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
    AddProductService.prototype.getPricingModel = function () {
        return this.myFormPricingModel;
    };
    AddProductService.prototype.getShowInputPricing = function (type) {
        switch (type) {
            case 'showMonthly':
                return this.showMonthly;
            case 'showYearly':
                return this.showYearly;
            case 'showLifetime':
                return this.showLifetime;
            case 'showFreeService':
                return this.showFreeService;
            case 'showOther':
                return this.showOther;
            case 'singlepriceMonthly':
                return this.singlepriceMonthly;
            case 'pricerangeMonthly':
                return this.pricerangeMonthly;
            case 'singlepriceYearly':
                return this.singlepriceYearly;
            case 'pricerangeYearly':
                return this.pricerangeYearly;
            case 'singlepriceLifetime':
                return this.singlepriceLifetime;
            case 'pricerangeLifetime':
                return this.pricerangeLifetime;
        }
        return false;
    };
    AddProductService.prototype.setPricingModel = function (value) {
        this.myFormPricingModel.push(value);
    };
    AddProductService.prototype.setCheckboxPricingModel = function (value, event) {
        if (event.currentTarget.checked == true) {
            if (value.name === 'Yearly Subscription') {
                this.showYearly = true;
            }
            if (value.name === 'Monthly Pricing') {
                this.showMonthly = true;
            }
            if (value.name === 'Lifetime License') {
                this.showLifetime = true;
            }
            if (value.name === 'Freemium Version') {
                this.showFreeService = true;
            }
            if (value.name === 'Other') {
                this.showOther = true;
            }
            this.myFormPricingModel.push({
                'id': value.dbid,
                'model': value.name,
                "plan": '',
                "price_start": '',
                "price_end": '',
                "currency": '',
                "day": '',
                "other_model": ''
            });
            return 'sucecss';
        }
        if (event.currentTarget.checked == false) {
            if (value.name === 'Yearly Subscription') {
                this.showYearly = false;
                this.singlepriceYearly = false;
                this.pricerangeYearly = false;
            }
            if (value.name === 'Monthly Pricing') {
                this.showMonthly = false;
                this.singlepriceMonthly = false;
                this.pricerangeMonthly = false;
            }
            if (value.name === 'Lifetime License') {
                this.showLifetime = false;
                this.singlepriceLifetime = false;
                this.pricerangeLifetime = false;
            }
            if (value.name === 'Freemium Version') {
                this.showFreeService = false;
            }
            if (value.name === 'Other') {
                this.showOther = false;
            }
            var i = _.findIndex(this.myFormPricingModel, ['id', value.dbid]);
            console.log(i);
            if (i != -1) {
                this.myFormPricingModel.splice(i, 1);
            }
            return 'sucecss';
        }
        return 'fail';
    };
    AddProductService.prototype.setSelectPricingPlan = function (value, id, name) {
        if (value === 'Single Price' && name === 'Monthly Pricing') {
            this.singlepriceMonthly = true;
            this.pricerangeMonthly = false;
        }
        if (value === 'Price range' && name === 'Monthly Pricing') {
            this.singlepriceMonthly = false;
            this.pricerangeMonthly = true;
        }
        if (value === 'Single Price' && name === 'Yearly Subscription') {
            this.singlepriceYearly = true;
            this.pricerangeYearly = false;
        }
        if (value === 'Price range' && name === 'Yearly Subscription') {
            this.singlepriceYearly = false;
            this.pricerangeYearly = true;
        }
        if (value === 'Single Price' && name === 'Lifetime License') {
            this.singlepriceLifetime = true;
            this.pricerangeLifetime = false;
        }
        if (value === 'Price range' && name === 'Lifetime License') {
            this.singlepriceLifetime = false;
            this.pricerangeLifetime = true;
        }
        var i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "plan": value,
            "price_start": '',
            "price_end": '',
            "currency": this.options.currency[0],
            "day": '',
            "other_model": ''
        });
    };
    AddProductService.prototype.setInputPrice = function (id, price_start, price_end, currency) {
        var i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "price_start": price_start,
            "price_end": price_end,
            "currency": currency,
            "day": '',
            "other_model": ''
        });
    };
    AddProductService.prototype.setInputDay = function (id, day) {
        var i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "price_start": '',
            "price_end": '',
            "currency": '',
            "day": day,
            "other_model": ''
        });
    };
    AddProductService.prototype.setInputOtherModel = function (id, other_model) {
        var i = _.findIndex(this.myFormPricingModel, ['id', id]);
        _.merge(this.myFormPricingModel[i], {
            "price_start": '',
            "price_end": '',
            "currency": '',
            "day": '',
            "other_model": other_model
        });
    };
    AddProductService.prototype.getModel = function (model) {
        switch (model) {
            case 'dayModel':
                return this.dayModel;
            case 'otherModel':
                return this.otherModel;
            case 'priceStartMonthlyModel':
                return this.priceStartMonthlyModel;
            case 'priceEndMonthlyModel':
                return this.priceEndMonthlyModel;
            case 'priceStartYearlyModel':
                return this.priceStartYearlyModel;
            case 'priceEndYearlyModel':
                return this.priceEndYearlyModel;
            case 'priceStartLifetimeModel':
                return this.priceStartLifetimeModel;
            case 'priceEndLifetimeModel':
                return this.priceEndLifetimeModel;
            case 'currencyMonthlyModel':
                return this.currencyMonthlyModel;
            case 'currencyYearlyModel':
                return this.currencyYearlyModel;
            case 'currencyLifetimeModel':
                return this.currencyLifetimeModel;
        }
        return '';
    };
    AddProductService.prototype.setOnBindingPricingModel = function (value) {
        switch (value.id) {
            case 1:
                this.showFreeService = true;
                this.dayModel = value.day;
                break;
            case 2:
                this.showMonthly = true;
                this.currencyMonthlyModel = value.currency;
                if (value.plan === 'Single Price') {
                    this.singlepriceMonthly = true;
                    this.priceStartMonthlyModel = value.price_start;
                }
                if (value.plan === 'Price range') {
                    this.pricerangeMonthly = true;
                    this.priceStartMonthlyModel = value.price_start;
                    this.priceEndMonthlyModel = value.price_end;
                }
                break;
            case 3:
                this.showYearly = true;
                this.currencyYearlyModel = value.currency;
                if (value.plan === 'Single Price') {
                    this.singlepriceYearly = true;
                    this.priceStartYearlyModel = value.price_start;
                }
                if (value.plan === 'Price range') {
                    this.pricerangeYearly = true;
                    this.priceStartYearlyModel = value.price_start;
                    this.priceEndYearlyModel = value.price_end;
                }
                break;
            case 4:
                this.showLifetime = true;
                this.currencyLifetimeModel = value.currency;
                if (value.plan === 'Single Price') {
                    this.singlepriceLifetime = true;
                    this.priceStartLifetimeModel = value.price_start;
                }
                if (value.plan === 'Price range') {
                    this.pricerangeLifetime = true;
                    this.priceStartLifetimeModel = value.price_start;
                    this.priceEndLifetimeModel = value.price_end;
                }
                break;
            case 5:
                this.showOther = true;
                this.otherModel = value.other_model;
                break;
            default:
                console.log("Sorry, we are out of " + value + ".");
        }
    };
    AddProductService.prototype.resetBindingModel = function (type) {
        switch (type) {
            case 'Yearly Subscription':
                this.priceStartYearlyModel = null;
                this.priceEndYearlyModel = null;
                this.currencyYearlyModel = this.options.currency[0];
                break;
            case 'Monthly Pricing':
                this.priceStartMonthlyModel = null;
                this.priceEndMonthlyModel = null;
                this.currencyMonthlyModel = this.options.currency[0];
                break;
            case 'Lifetime License':
                this.priceStartLifetimeModel = null;
                this.priceEndLifetimeModel = null;
                this.currencyLifetimeModel = this.options.currency[0];
                break;
            case 'Freemium Version':
                this.dayModel = null;
                break;
            case 'Other':
                this.otherModel = null;
                break;
            default:
                console.log("Sorry, we are out of " + type + ".");
        }
    };
    AddProductService.isCreating = false;
    return AddProductService;
}());
exports.AddProductService = AddProductService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZnVuY3Rpb24vYWRkLXByb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFvREU7UUEvQ0EscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBQzdCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFDN0Isd0JBQW1CLEdBQVUsRUFBRSxDQUFDO1FBR2hDLG1CQUFjLEdBQVUsRUFBRSxDQUFDO1FBQzNCLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUcvQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGlCQUFZLEdBQVcsSUFBSSxDQUFDO1FBQzVCLHFCQUFnQixHQUFXLENBQUMsQ0FBQztRQUd0QixZQUFPLEdBQVE7WUFDcEIsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1NBQ3ZDLENBQUM7UUFDRix1QkFBa0IsR0FBUSxFQUFFLENBQUM7UUFDN0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyx3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDckMsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBa0JsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FB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LEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNILENBQUM7SUFob0JNLDRCQUFVLEdBQVksS0FBSyxDQUFDO0lBbW9CckMsd0JBQUM7QUFBRCxDQXRvQkEsQUFzb0JDLElBQUE7QUF0b0JZLHlCQUFpQixvQkFzb0I3QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvZnVuY3Rpb24vYWRkLXByb2R1Y3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIF86IGFueTtcbmV4cG9ydCBjbGFzcyBBZGRQcm9kdWN0U2VydmljZSB7XG5cbiAgc3RhdGljIGluc3RhbmNlOiBBZGRQcm9kdWN0U2VydmljZTtcbiAgc3RhdGljIGlzQ3JlYXRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcblxuICBteUZvcm1JbmR1c3RyaWVzOiBhbnlbXSA9IFtdO1xuICBteUZvcm1MYW5ndWFnZXM6IGFueVtdID0gW107XG4gIG15Rm9ybURlcGFydG1lbnRzOiBhbnlbXSA9IFtdO1xuICBteUZvcm1DYXRlZ29yaWVzOiBhbnlbXSA9IFtdO1xuICBteUZvcm1FeHRyYXNlcnZpY2VzOiBhbnlbXSA9IFtdO1xuXG4gIC8vRmVhdHVyZVxuICBteUZvcm1GZWF0dXJlczogYW55W10gPSBbXTtcbiAgbXlGb3JtVGhhaUZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuICBuZXdGZWF0dXJlOiBzdHJpbmc7XG4gIG5ld1RoYWlGZWF0dXJlOiBzdHJpbmc7XG4gIHRoYWlJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuICBzZWxlY3RlZExhbmc6IHN0cmluZyA9ICdlbic7XG4gIE1BWF9TSVpFX0ZFQVRVUkU6IG51bWJlciA9IDU7XG5cbiAgLy9QcmljaW5nIE1vZGVsXG4gIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgY3VycmVuY3k6IFsnVEhCJywgJ1NERycsICdVU0QnLCAnQVVEJ11cbiAgfTtcbiAgbXlGb3JtUHJpY2luZ01vZGVsOiBhbnkgPSBbXTtcbiAgc2hvd01vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd1llYXJseTogYm9vbGVhbiA9IGZhbHNlO1xuICBzaG93TGlmZXRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd0ZyZWVTZXJ2aWNlOiBib29sZWFuID0gZmFsc2U7XG4gIHNob3dPdGhlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBzaW5nbGVwcmljZU1vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpY2VyYW5nZU1vbnRobHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2luZ2xlcHJpY2VZZWFybHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpY2VyYW5nZVllYXJseTogYm9vbGVhbiA9IGZhbHNlO1xuICBzaW5nbGVwcmljZUxpZmV0aW1lOiBib29sZWFuID0gZmFsc2U7XG4gIHByaWNlcmFuZ2VMaWZldGltZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGRheU1vZGVsOiBudW1iZXI7XG4gIG90aGVyTW9kZWw6IHN0cmluZztcblxuICBwcmljZVN0YXJ0TW9udGhseU1vZGVsOiBudW1iZXI7XG4gIHByaWNlU3RhcnRZZWFybHlNb2RlbDogbnVtYmVyO1xuICBwcmljZVN0YXJ0TGlmZXRpbWVNb2RlbDogbnVtYmVyO1xuXG4gIHByaWNlRW5kTW9udGhseU1vZGVsOiBudW1iZXI7XG4gIHByaWNlRW5kWWVhcmx5TW9kZWw6IG51bWJlcjtcbiAgcHJpY2VFbmRMaWZldGltZU1vZGVsOiBudW1iZXI7XG5cbiAgY3VycmVuY3lNb250aGx5TW9kZWw6IGFueTtcbiAgY3VycmVuY3lZZWFybHlNb2RlbDogYW55O1xuICBjdXJyZW5jeUxpZmV0aW1lTW9kZWw6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIUFkZFByb2R1Y3RTZXJ2aWNlLmlzQ3JlYXRpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW4ndCBjYWxsIG5ldyBpbiBTaW5nbGV0b24gaW5zdGFuY2VzIVwiKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKEFkZFByb2R1Y3RTZXJ2aWNlLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIEFkZFByb2R1Y3RTZXJ2aWNlLmlzQ3JlYXRpbmcgPSB0cnVlO1xuICAgICAgQWRkUHJvZHVjdFNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgQWRkUHJvZHVjdFNlcnZpY2UoKTtcbiAgICAgIEFkZFByb2R1Y3RTZXJ2aWNlLmlzQ3JlYXRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gQWRkUHJvZHVjdFNlcnZpY2UuaW5zdGFuY2U7XG4gIH1cblxuICByZXNldERhdGEoKSB7XG4gICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzID0gW107XG4gICAgdGhpcy5teUZvcm1MYW5ndWFnZXMgPSBbXTtcbiAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzID0gW107XG4gICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzID0gW107XG4gICAgdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzID0gW107XG5cbiAgICB0aGlzLm15Rm9ybUZlYXR1cmVzID0gW107XG4gICAgdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLnRoYWlJbnB1dCA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRMYW5nID0gJ2VuJztcblxuICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsID0gW107XG4gICAgdGhpcy5zaG93TW9udGhseSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd1llYXJseSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0xpZmV0aW1lID0gZmFsc2U7XG4gICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dPdGhlciA9IGZhbHNlO1xuICAgIHRoaXMuc2luZ2xlcHJpY2VNb250aGx5ID0gZmFsc2U7XG4gICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IGZhbHNlO1xuICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSBmYWxzZTtcbiAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSBmYWxzZTtcbiAgICB0aGlzLnNpbmdsZXByaWNlTGlmZXRpbWUgPSBmYWxzZTtcbiAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5kYXlNb2RlbCA9IG51bGw7XG4gICAgdGhpcy5vdGhlck1vZGVsID0gJyc7XG5cbiAgICB0aGlzLnByaWNlU3RhcnRNb250aGx5TW9kZWwgPSBudWxsO1xuICAgIHRoaXMucHJpY2VTdGFydFllYXJseU1vZGVsID0gbnVsbDtcbiAgICB0aGlzLnByaWNlU3RhcnRMaWZldGltZU1vZGVsID0gbnVsbDtcblxuICAgIHRoaXMucHJpY2VFbmRNb250aGx5TW9kZWwgPSBudWxsO1xuICAgIHRoaXMucHJpY2VFbmRZZWFybHlNb2RlbCA9IG51bGw7XG4gICAgdGhpcy5wcmljZUVuZExpZmV0aW1lTW9kZWwgPSBudWxsO1xuXG4gICAgdGhpcy5jdXJyZW5jeU1vbnRobHlNb2RlbCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW5jeVllYXJseU1vZGVsID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbmN5TGlmZXRpbWVNb2RlbCA9IG51bGw7XG5cblxuICAgIHJldHVybiAnc3VjY2Vzcyc7XG5cbiAgfVxuXG4gIGNoZWNrZWRJZChpZDogbnVtYmVyLCB0eXBlOiBhbnkpIHtcblxuICAgIC8vY29uc29sZS5sb2coaWQsIHR5cGUpO1xuICAgIGlmICh0eXBlID09ICdjYXRlZ29yaWVzJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15Rm9ybUNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlkID09IHRoaXMubXlGb3JtQ2F0ZWdvcmllc1tpXSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PSAnZGVwYXJ0bWVudHMnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtRGVwYXJ0bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlkID09IHRoaXMubXlGb3JtRGVwYXJ0bWVudHNbaV0pXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT0gJ2luZHVzdHJpZXMnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtSW5kdXN0cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaWQgPT0gdGhpcy5teUZvcm1JbmR1c3RyaWVzW2ldKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09ICdsYW5ndWFnZXMnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtTGFuZ3VhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpZCA9PSB0aGlzLm15Rm9ybUxhbmd1YWdlc1tpXSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ2V4dHJhc2VydmljZXMnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaWQgPT0gdGhpcy5teUZvcm1FeHRyYXNlcnZpY2VzW2ldKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PSAncHJpY2luZ21vZGVscycpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBpZiAoaWQgPT0gdGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0uaWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICBnZXRJbmR1c3RyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLm15Rm9ybUluZHVzdHJpZXM7XG4gIH1cblxuICBzZXRJbmR1c3RyaWVzKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLm15Rm9ybUluZHVzdHJpZXMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBzZXRDaGVja2JveEluZHVzdHJpZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuXG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICB0aGlzLm15Rm9ybUluZHVzdHJpZXMucHVzaCh2YWx1ZS5pZCk7XG4gICAgfVxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBpID0gdGhpcy5teUZvcm1JbmR1c3RyaWVzLmluZGV4T2YodmFsdWUuaWQpO1xuICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgdGhpcy5teUZvcm1JbmR1c3RyaWVzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRMYW5ndWFnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubXlGb3JtTGFuZ3VhZ2VzO1xuICB9XG5cbiAgc2V0TGFuZ3VhZ2VzKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLm15Rm9ybUxhbmd1YWdlcy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHNldENoZWNrYm94TGFuZ3VhZ2VzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgfVxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBpID0gdGhpcy5teUZvcm1MYW5ndWFnZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgIHRoaXMubXlGb3JtTGFuZ3VhZ2VzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGdldERlcGFydG1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLm15Rm9ybURlcGFydG1lbnRzO1xuICB9XG5cbiAgc2V0RGVwYXJ0bWVudHModmFsdWU6IGFueSkge1xuICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBzZXRDaGVja2JveERlcGFydG1lbnRzKHZhbHVlOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IHRydWUpIHtcbiAgICAgIHRoaXMubXlGb3JtRGVwYXJ0bWVudHMucHVzaCh2YWx1ZS5kYmlkKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybURlcGFydG1lbnRzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICB0aGlzLm15Rm9ybURlcGFydG1lbnRzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiB0aGlzLm15Rm9ybUNhdGVnb3JpZXM7XG4gIH1cblxuICBzZXRDYXRlZ29yaWVzKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLm15Rm9ybUNhdGVnb3JpZXMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBzZXRDaGVja2JveENhdGVnb3JpZXModmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5teUZvcm1DYXRlZ29yaWVzLnB1c2godmFsdWUuZGJpZCk7XG4gICAgfVxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBpID0gdGhpcy5teUZvcm1DYXRlZ29yaWVzLmluZGV4T2YodmFsdWUuZGJpZCk7XG4gICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICB0aGlzLm15Rm9ybUNhdGVnb3JpZXMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEV4dHJhc2VydmljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcztcbiAgfVxuXG4gIHNldEV4dHJhc2VydmljZXModmFsdWU6IGFueSkge1xuICAgIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHNldENoZWNrYm94RXh0cmFzZXJ2aWNlcyh2YWx1ZTogYW55LCBldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMucHVzaCh2YWx1ZS5kYmlkKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgbGV0IGkgPSB0aGlzLm15Rm9ybUV4dHJhc2VydmljZXMuaW5kZXhPZih2YWx1ZS5kYmlkKTtcbiAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgIHRoaXMubXlGb3JtRXh0cmFzZXJ2aWNlcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAvL0ZlYXR1cmVcbiAgZ2V0RmVhdHVyZXMobGFuZzogYW55KSB7XG4gICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICBjYXNlICd0aCcgOlxuICAgICAgICByZXR1cm4gdGhpcy5teUZvcm1UaGFpRmVhdHVyZXM7XG4gICAgICBjYXNlICdlbic6XG4gICAgICAgIHJldHVybiB0aGlzLm15Rm9ybUZlYXR1cmVzO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFNlbGVjdGVkTGFuZygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZExhbmc7XG4gIH1cblxuICBnZXRUaGFpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGhhaUlucHV0O1xuICB9XG5cbiAgc2V0RmVhdHVyZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5teUZvcm1GZWF0dXJlcy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHNldFRoYWlGZWF0dXJlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlcy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHNldEFkZE5ld0ZlYXR1cmUobmV3RmVhdHVyZTogc3RyaW5nLCBsYW5nOiBzdHJpbmcpIHtcblxuICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgY2FzZSAndGgnOlxuICAgICAgICBpZiAobmV3RmVhdHVyZSAmJiB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlcy5sZW5ndGggPCB0aGlzLk1BWF9TSVpFX0ZFQVRVUkUpIHtcbiAgICAgICAgICB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlcy5wdXNoKG5ld0ZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW4nOlxuICAgICAgICBpZiAobmV3RmVhdHVyZSAmJiB0aGlzLm15Rm9ybUZlYXR1cmVzLmxlbmd0aCA8IHRoaXMuTUFYX1NJWkVfRkVBVFVSRSkge1xuICAgICAgICAgIHRoaXMubXlGb3JtRmVhdHVyZXMucHVzaChuZXdGZWF0dXJlKTtcblxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICB9XG5cbiAgc2V0RGVsZXRlRmVhdHVyZShmZWF0dXJlOiBzdHJpbmcsIGxhbmc6IHN0cmluZykge1xuXG4gICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICBjYXNlICd0aCc6XG4gICAgICAgIGxldCBpID0gdGhpcy5teUZvcm1UaGFpRmVhdHVyZXMuaW5kZXhPZihmZWF0dXJlKTtcbiAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICB0aGlzLm15Rm9ybVRoYWlGZWF0dXJlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbic6XG4gICAgICAgIGxldCBqID0gdGhpcy5teUZvcm1GZWF0dXJlcy5pbmRleE9mKGZlYXR1cmUpO1xuICAgICAgICBpZiAoaiAhPSAtMSkge1xuICAgICAgICAgIHRoaXMubXlGb3JtRmVhdHVyZXMuc3BsaWNlKGosIDEpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG5cbiAgc2V0Q2hhbmdlTGFuZ3VhZUZyb20obGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZExhbmcgPSBsYW5nO1xuICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgY2FzZSAndGgnOlxuICAgICAgICB0aGlzLnRoYWlJbnB1dCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW4nOlxuICAgICAgICB0aGlzLnRoYWlJbnB1dCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudGhhaUlucHV0ID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuXG4gIC8vUHJpY2luZyBNb2RlbFxuICBnZXRQcmljaW5nTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsO1xuICB9XG5cblxuICBnZXRTaG93SW5wdXRQcmljaW5nKHR5cGU6IHN0cmluZykge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc2hvd01vbnRobHknOlxuICAgICAgICByZXR1cm4gdGhpcy5zaG93TW9udGhseTtcbiAgICAgIGNhc2UgJ3Nob3dZZWFybHknOlxuICAgICAgICByZXR1cm4gdGhpcy5zaG93WWVhcmx5O1xuICAgICAgY2FzZSAnc2hvd0xpZmV0aW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0xpZmV0aW1lO1xuICAgICAgY2FzZSAnc2hvd0ZyZWVTZXJ2aWNlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlO1xuICAgICAgY2FzZSAnc2hvd090aGVyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd090aGVyO1xuICAgICAgY2FzZSAnc2luZ2xlcHJpY2VNb250aGx5JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2luZ2xlcHJpY2VNb250aGx5O1xuICAgICAgY2FzZSAncHJpY2VyYW5nZU1vbnRobHknOlxuICAgICAgICByZXR1cm4gdGhpcy5wcmljZXJhbmdlTW9udGhseTtcbiAgICAgIGNhc2UgJ3NpbmdsZXByaWNlWWVhcmx5JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2luZ2xlcHJpY2VZZWFybHk7XG4gICAgICBjYXNlICdwcmljZXJhbmdlWWVhcmx5JzpcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2VyYW5nZVllYXJseTtcbiAgICAgIGNhc2UgJ3NpbmdsZXByaWNlTGlmZXRpbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lO1xuICAgICAgY2FzZSAncHJpY2VyYW5nZUxpZmV0aW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZXRQcmljaW5nTW9kZWwodmFsdWU6IGFueSkge1xuICAgIHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLnB1c2godmFsdWUpO1xuICB9XG5cbiAgc2V0Q2hlY2tib3hQcmljaW5nTW9kZWwodmFsdWU6IGFueSwgZXZlbnQ6IGFueSkge1xuXG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XG5cbiAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgdGhpcy5zaG93WWVhcmx5ID0gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdNb250aGx5IFByaWNpbmcnKSB7XG4gICAgICAgIHRoaXMuc2hvd01vbnRobHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdMaWZldGltZSBMaWNlbnNlJykge1xuICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnT3RoZXInKSB7XG4gICAgICAgIHRoaXMuc2hvd090aGVyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwucHVzaCh7XG4gICAgICAgICdpZCc6IHZhbHVlLmRiaWQsXG4gICAgICAgICdtb2RlbCc6IHZhbHVlLm5hbWUsXG4gICAgICAgIFwicGxhblwiOiAnJyxcbiAgICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgICAgXCJwcmljZV9lbmRcIjogJycsXG4gICAgICAgIFwiY3VycmVuY3lcIjogJycsXG4gICAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuICdzdWNlY3NzJztcblxuICAgIH1cbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkID09IGZhbHNlKSB7XG5cblxuICAgICAgaWYgKHZhbHVlLm5hbWUgPT09ICdZZWFybHkgU3Vic2NyaXB0aW9uJykge1xuICAgICAgICB0aGlzLnNob3dZZWFybHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaW5nbGVwcmljZVllYXJseSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTW9udGhseSBQcmljaW5nJykge1xuICAgICAgICB0aGlzLnNob3dNb250aGx5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2luZ2xlcHJpY2VNb250aGx5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZS5uYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgICAgdGhpcy5zaG93TGlmZXRpbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaW5nbGVwcmljZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJpY2VyYW5nZUxpZmV0aW1lID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ0ZyZWVtaXVtIFZlcnNpb24nKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZyZWVTZXJ2aWNlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUubmFtZSA9PT0gJ090aGVyJykge1xuICAgICAgICB0aGlzLnNob3dPdGhlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsZXQgaSA9IF8uZmluZEluZGV4KHRoaXMubXlGb3JtUHJpY2luZ01vZGVsLCBbJ2lkJywgdmFsdWUuZGJpZF0pO1xuICAgICAgY29uc29sZS5sb2coaSlcblxuICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgdGhpcy5teUZvcm1QcmljaW5nTW9kZWwuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJ3N1Y2Vjc3MnO1xuXG4gICAgfVxuICAgIHJldHVybiAnZmFpbCc7XG5cbiAgfVxuXG4gIHNldFNlbGVjdFByaWNpbmdQbGFuKHZhbHVlOiBhbnksIGlkOiBhbnksIG5hbWU6IGFueSkge1xuXG4gICAgaWYgKHZhbHVlID09PSAnU2luZ2xlIFByaWNlJyAmJiBuYW1lID09PSAnTW9udGhseSBQcmljaW5nJykge1xuICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSB0cnVlO1xuICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gJ1ByaWNlIHJhbmdlJyAmJiBuYW1lID09PSAnTW9udGhseSBQcmljaW5nJykge1xuICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJpY2VyYW5nZU1vbnRobHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gJ1NpbmdsZSBQcmljZScgJiYgbmFtZSA9PT0gJ1llYXJseSBTdWJzY3JpcHRpb24nKSB7XG4gICAgICB0aGlzLnNpbmdsZXByaWNlWWVhcmx5ID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gJ1ByaWNlIHJhbmdlJyAmJiBuYW1lID09PSAnWWVhcmx5IFN1YnNjcmlwdGlvbicpIHtcbiAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJpY2VyYW5nZVllYXJseSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSAnU2luZ2xlIFByaWNlJyAmJiBuYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IHRydWU7XG4gICAgICB0aGlzLnByaWNlcmFuZ2VMaWZldGltZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gJ1ByaWNlIHJhbmdlJyAmJiBuYW1lID09PSAnTGlmZXRpbWUgTGljZW5zZScpIHtcbiAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IGZhbHNlO1xuICAgICAgdGhpcy5wcmljZXJhbmdlTGlmZXRpbWUgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCBpID0gXy5maW5kSW5kZXgodGhpcy5teUZvcm1QcmljaW5nTW9kZWwsIFsnaWQnLCBpZF0pO1xuICAgIF8ubWVyZ2UodGhpcy5teUZvcm1QcmljaW5nTW9kZWxbaV0sIHtcbiAgICAgIFwicGxhblwiOiB2YWx1ZSxcbiAgICAgIFwicHJpY2Vfc3RhcnRcIjogJycsXG4gICAgICBcInByaWNlX2VuZFwiOiAnJyxcbiAgICAgIFwiY3VycmVuY3lcIjogdGhpcy5vcHRpb25zLmN1cnJlbmN5WzBdLFxuICAgICAgXCJkYXlcIjogJycsXG4gICAgICBcIm90aGVyX21vZGVsXCI6ICcnXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbnB1dFByaWNlKGlkOiBhbnksIHByaWNlX3N0YXJ0OiBhbnksIHByaWNlX2VuZDogYW55LCBjdXJyZW5jeTogYW55KSB7XG4gICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgXCJwcmljZV9zdGFydFwiOiBwcmljZV9zdGFydCxcbiAgICAgIFwicHJpY2VfZW5kXCI6IHByaWNlX2VuZCxcbiAgICAgIFwiY3VycmVuY3lcIjogY3VycmVuY3ksXG4gICAgICBcImRheVwiOiAnJyxcbiAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICB9KTtcbiAgfVxuXG4gIHNldElucHV0RGF5KGlkOiBhbnksIGRheTogYW55KSB7XG4gICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgIFwiZGF5XCI6IGRheSxcbiAgICAgIFwib3RoZXJfbW9kZWxcIjogJydcbiAgICB9KTtcbiAgfVxuXG4gIHNldElucHV0T3RoZXJNb2RlbChpZDogYW55LCBvdGhlcl9tb2RlbDogYW55KSB7XG4gICAgbGV0IGkgPSBfLmZpbmRJbmRleCh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbCwgWydpZCcsIGlkXSk7XG4gICAgXy5tZXJnZSh0aGlzLm15Rm9ybVByaWNpbmdNb2RlbFtpXSwge1xuICAgICAgXCJwcmljZV9zdGFydFwiOiAnJyxcbiAgICAgIFwicHJpY2VfZW5kXCI6ICcnLFxuICAgICAgXCJjdXJyZW5jeVwiOiAnJyxcbiAgICAgIFwiZGF5XCI6ICcnLFxuICAgICAgXCJvdGhlcl9tb2RlbFwiOiBvdGhlcl9tb2RlbFxuICAgIH0pO1xuICB9XG5cblxuICBnZXRNb2RlbChtb2RlbDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChtb2RlbCkge1xuICAgICAgY2FzZSdkYXlNb2RlbCc6XG4gICAgICAgIHJldHVybiB0aGlzLmRheU1vZGVsO1xuICAgICAgY2FzZSdvdGhlck1vZGVsJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub3RoZXJNb2RlbDtcbiAgICAgIGNhc2UgJ3ByaWNlU3RhcnRNb250aGx5TW9kZWwnOlxuICAgICAgICByZXR1cm4gdGhpcy5wcmljZVN0YXJ0TW9udGhseU1vZGVsO1xuICAgICAgY2FzZSAncHJpY2VFbmRNb250aGx5TW9kZWwnOlxuICAgICAgICByZXR1cm4gdGhpcy5wcmljZUVuZE1vbnRobHlNb2RlbDtcbiAgICAgIGNhc2UgJ3ByaWNlU3RhcnRZZWFybHlNb2RlbCc6XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlU3RhcnRZZWFybHlNb2RlbDtcbiAgICAgIGNhc2UgJ3ByaWNlRW5kWWVhcmx5TW9kZWwnOlxuICAgICAgICByZXR1cm4gdGhpcy5wcmljZUVuZFllYXJseU1vZGVsO1xuICAgICAgY2FzZSAncHJpY2VTdGFydExpZmV0aW1lTW9kZWwnOlxuICAgICAgICByZXR1cm4gdGhpcy5wcmljZVN0YXJ0TGlmZXRpbWVNb2RlbDtcbiAgICAgIGNhc2UgJ3ByaWNlRW5kTGlmZXRpbWVNb2RlbCc6XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlRW5kTGlmZXRpbWVNb2RlbDtcbiAgICAgIGNhc2UgJ2N1cnJlbmN5TW9udGhseU1vZGVsJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVuY3lNb250aGx5TW9kZWw7XG4gICAgICBjYXNlJ2N1cnJlbmN5WWVhcmx5TW9kZWwnOlxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW5jeVllYXJseU1vZGVsO1xuICAgICAgY2FzZSAnY3VycmVuY3lMaWZldGltZU1vZGVsJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVuY3lMaWZldGltZU1vZGVsO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvL0VkaXQgUHJvZHVjdFxuICBzZXRPbkJpbmRpbmdQcmljaW5nTW9kZWwodmFsdWU6IGFueSkge1xuICAgIHN3aXRjaCAodmFsdWUuaWQpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5zaG93RnJlZVNlcnZpY2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmRheU1vZGVsID0gdmFsdWUuZGF5O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5zaG93TW9udGhseSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVuY3lNb250aGx5TW9kZWwgPSB2YWx1ZS5jdXJyZW5jeTtcbiAgICAgICAgaWYgKHZhbHVlLnBsYW4gPT09ICdTaW5nbGUgUHJpY2UnKSB7XG4gICAgICAgICAgdGhpcy5zaW5nbGVwcmljZU1vbnRobHkgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucHJpY2VTdGFydE1vbnRobHlNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5wbGFuID09PSAnUHJpY2UgcmFuZ2UnKSB7XG4gICAgICAgICAgdGhpcy5wcmljZXJhbmdlTW9udGhseSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wcmljZVN0YXJ0TW9udGhseU1vZGVsID0gdmFsdWUucHJpY2Vfc3RhcnQ7XG4gICAgICAgICAgdGhpcy5wcmljZUVuZE1vbnRobHlNb2RlbCA9IHZhbHVlLnByaWNlX2VuZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgdGhpcy5zaG93WWVhcmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW5jeVllYXJseU1vZGVsID0gdmFsdWUuY3VycmVuY3k7XG4gICAgICAgIGlmICh2YWx1ZS5wbGFuID09PSAnU2luZ2xlIFByaWNlJykge1xuICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VZZWFybHkgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucHJpY2VTdGFydFllYXJseU1vZGVsID0gdmFsdWUucHJpY2Vfc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLnBsYW4gPT09ICdQcmljZSByYW5nZScpIHtcbiAgICAgICAgICB0aGlzLnByaWNlcmFuZ2VZZWFybHkgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucHJpY2VTdGFydFllYXJseU1vZGVsID0gdmFsdWUucHJpY2Vfc3RhcnQ7XG4gICAgICAgICAgdGhpcy5wcmljZUVuZFllYXJseU1vZGVsID0gdmFsdWUucHJpY2VfZW5kO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICB0aGlzLnNob3dMaWZldGltZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVuY3lMaWZldGltZU1vZGVsID0gdmFsdWUuY3VycmVuY3k7XG4gICAgICAgIGlmICh2YWx1ZS5wbGFuID09PSAnU2luZ2xlIFByaWNlJykge1xuICAgICAgICAgIHRoaXMuc2luZ2xlcHJpY2VMaWZldGltZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wcmljZVN0YXJ0TGlmZXRpbWVNb2RlbCA9IHZhbHVlLnByaWNlX3N0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5wbGFuID09PSAnUHJpY2UgcmFuZ2UnKSB7XG4gICAgICAgICAgdGhpcy5wcmljZXJhbmdlTGlmZXRpbWUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucHJpY2VTdGFydExpZmV0aW1lTW9kZWwgPSB2YWx1ZS5wcmljZV9zdGFydDtcbiAgICAgICAgICB0aGlzLnByaWNlRW5kTGlmZXRpbWVNb2RlbCA9IHZhbHVlLnByaWNlX2VuZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgdGhpcy5zaG93T3RoZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLm90aGVyTW9kZWwgPSB2YWx1ZS5vdGhlcl9tb2RlbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvcnJ5LCB3ZSBhcmUgb3V0IG9mIFwiICsgdmFsdWUgKyBcIi5cIik7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRCaW5kaW5nTW9kZWwodHlwZTogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdZZWFybHkgU3Vic2NyaXB0aW9uJzpcbiAgICAgICAgdGhpcy5wcmljZVN0YXJ0WWVhcmx5TW9kZWwgPSBudWxsO1xuICAgICAgICB0aGlzLnByaWNlRW5kWWVhcmx5TW9kZWwgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbmN5WWVhcmx5TW9kZWwgPSB0aGlzLm9wdGlvbnMuY3VycmVuY3lbMF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnTW9udGhseSBQcmljaW5nJzpcbiAgICAgICAgdGhpcy5wcmljZVN0YXJ0TW9udGhseU1vZGVsID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmljZUVuZE1vbnRobHlNb2RlbCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVuY3lNb250aGx5TW9kZWwgPSB0aGlzLm9wdGlvbnMuY3VycmVuY3lbMF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnTGlmZXRpbWUgTGljZW5zZSc6XG4gICAgICAgIHRoaXMucHJpY2VTdGFydExpZmV0aW1lTW9kZWwgPSBudWxsO1xuICAgICAgICB0aGlzLnByaWNlRW5kTGlmZXRpbWVNb2RlbCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVuY3lMaWZldGltZU1vZGVsID0gdGhpcy5vcHRpb25zLmN1cnJlbmN5WzBdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0ZyZWVtaXVtIFZlcnNpb24nOlxuICAgICAgICB0aGlzLmRheU1vZGVsID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdPdGhlcic6XG4gICAgICAgIHRoaXMub3RoZXJNb2RlbCA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coXCJTb3JyeSwgd2UgYXJlIG91dCBvZiBcIiArIHR5cGUgKyBcIi5cIik7XG4gICAgfVxuICB9XG5cblxufVxuIl19
