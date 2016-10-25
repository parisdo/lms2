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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var vendor_model_1 = require("../../shared/models/vendor.model");
var router_1 = require("@angular/router");
var country_service_1 = require("../../shared/services/function/country/country.service");
var state_service_1 = require("../../shared/services/function/country/state.service");
var vendor_service_1 = require("../../shared/services/api/vendor/vendor.service");
var vendor_company_model_1 = require("../../shared/models/vendor-company.model");
var VendorProfileComponent = (function () {
    function VendorProfileComponent(_router, _fb, _vendorService, _countryService, _stateService) {
        this._router = _router;
        this._fb = _fb;
        this._vendorService = _vendorService;
        this._countryService = _countryService;
        this._stateService = _stateService;
        this.loading_profile = true;
        this.loading_organization = false;
        this.countrySelected = false;
        this.citytype = false;
        this.statetype = false;
        this.disabled_country = true;
        this.disabled = false;
        this.src = "";
        this.resizeOptions = {
            resizeMaxHeight: 160,
            resizeMaxWidth: 160
        };
        this.myFormLogo = '';
        this.fileChosen = true;
        this.options = {
            organizations: ['Government', 'Startup', 'University', 'Registered Business', 'Group'],
            year_founded: []
        };
        this.tabs = [
            { title: 'Account', content: 'Dynamic content 1', active: true, disabled: false }
        ];
        this.alerted = false;
        this.messageAlert = 'Update Vendor Profile  Successfully';
        this.typeAlert = 'success';
        this.resetPassword = false;
        this.editMode = false;
        this.myFormVendorProfile = this._fb.group({
            name: [''],
            position: [''],
            department: [''],
            countrycode: [''],
            phonenumber: [''],
            linkedin: ['']
        });
        this.myFormCompanyProfile = this._fb.group({
            organization_type: [''],
            suite: [''],
            numberstreet: [''],
            city: [''],
            state: [''],
            country: [''],
            zip: [''],
            company_name: [''],
            url: [''],
            logo: [''],
            year: [''],
            mission: [''],
            founded: [''],
            size: [''],
            affiliation: [''],
            companyphone: [''],
            taxid: [''],
            facebook: [''],
            twitter: [''],
            line: ['']
        });
        this.myForm = this._fb.group({
            name: [''],
            position: [''],
            department: [''],
            countrycode: [''],
            phonenumber: [''],
            linkedin: [''],
            organization_type: [''],
            suite: [''],
            numberstreet: [''],
            city: [''],
            state: [''],
            country: [''],
            zip: [''],
            company_name: [''],
            url: [''],
            logo: [''],
            year: [''],
            mission: [''],
            founded: [''],
            size: [''],
            affiliation: [''],
            companyphone: [''],
            taxid: [''],
            facebook: [''],
            twitter: [''],
            line: ['']
        });
        this.myPasswordForm = this._fb.group({
            currentpassword: [''],
            newpassword: [''],
            newpassword_confirmation: ['']
        });
        this.countries = this._countryService.getCountries();
    }
    VendorProfileComponent.prototype.ngOnInit = function () {
        this.getDeveloperProfile();
        this.getOrganizationProfile();
        this.createYears();
    };
    VendorProfileComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
        if (this.sub_organization)
            this.sub_organization.unsubscribe();
    };
    VendorProfileComponent.prototype.createYears = function () {
        var year = new Date().getFullYear();
        for (var i = year; i >= 1950; i--)
            this.options['year_founded'].push(i);
    };
    VendorProfileComponent.prototype.getDeveloperProfile = function () {
        var _this = this;
        this.vendor_profile$ = this._vendorService.getVendorProfile();
        this.sub = this.vendor_profile$
            .subscribe(function (vendor) {
            _this.vendor_profile = vendor;
            _this.loading_profile = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    VendorProfileComponent.prototype.getOrganizationProfile = function () {
        var _this = this;
        this.vendor_organization$ = this._vendorService.getOrganizationProfile();
        this.sub = this.vendor_organization$.subscribe(function (vendor) {
            _this.vendor_organization = vendor;
            _this.myFormLogo = vendor[0].logo;
            _this.onSelectCountry(vendor[0].country);
            _this.loading_organization = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    VendorProfileComponent.prototype.onSelectCountry = function (country_name) {
        console.log(country_name);
        this.countrySelected = true;
        if (country_name == 'Thailand') {
            this.citys = this._stateService.getStates().filter(function (item) { return item.name == country_name; });
            this.citytype = true;
            this.statetype = false;
        }
        if (country_name == 'United States') {
            this.states = this._stateService.getStates().filter(function (item) { return item.name == country_name; });
            this.statetype = true;
            this.citytype = false;
        }
        if (country_name !== 'United States' && country_name !== 'Thailand') {
            this.statetype = false;
            this.citytype = false;
        }
    };
    VendorProfileComponent.prototype.onAlert = function (msg, type) {
        this.messageAlert = msg;
        this.typeAlert = type;
        $('.alert').show();
        setTimeout(function () {
            $('.alert').hide();
        }, 3000);
    };
    VendorProfileComponent.prototype.onSubmitCompanyProfile = function (value) {
        var _this = this;
        var vendor_company = new vendor_company_model_1.VendorCompany(this.myFormCompanyProfile.value.organization_type, this.myFormCompanyProfile.value.suite, this.myFormCompanyProfile.value.numberstreet, this.myFormCompanyProfile.value.city, this.myFormCompanyProfile.value.state, this.myFormCompanyProfile.value.country, this.myFormCompanyProfile.value.zip, this.myFormCompanyProfile.value.company_name, this.myFormCompanyProfile.value.url, this.myFormLogo, this.myFormCompanyProfile.value.year, this.myFormCompanyProfile.value.mission, this.myFormCompanyProfile.value.founded, this.myFormCompanyProfile.value.size, this.myFormCompanyProfile.value.affiliation, this.myFormCompanyProfile.value.companyphone, this.myFormCompanyProfile.value.taxid, this.myFormCompanyProfile.value.facebook, this.myFormCompanyProfile.value.twitter, this.myFormCompanyProfile.value.line);
        this._vendorService.updateVendorCompany(vendor_company)
            .subscribe(function (res) {
            _this.onAlert('Update Vendor Profile  Successfully', 'success');
            _this.getDeveloperProfile();
            _this.getOrganizationProfile();
            _this.createYears();
        }, function (error) {
            _this.onAlert('Failed', 'danger');
        });
    };
    VendorProfileComponent.prototype.onSubmitVendorProfile = function (value) {
        var _this = this;
        var vendor = new vendor_model_1.Vendor(this.myFormVendorProfile.value.name, this.myFormVendorProfile.value.position, this.myFormVendorProfile.value.department, this.myFormVendorProfile.value.countrycode, this.myFormVendorProfile.value.phonenumber, this.myFormVendorProfile.value.linkedin);
        this._vendorService.updateVendorProfile(vendor)
            .subscribe(function (res) {
            _this.onAlert('Update Vendor Profile  Successfully', 'success');
        }, function (error) {
            _this.onAlert('Failed', 'danger');
        });
    };
    VendorProfileComponent.prototype.fileChangeLogo = function (imageResult) {
        this.myFormLogo = imageResult.resized.dataURL;
        this.fileChosen = true;
    };
    VendorProfileComponent.prototype.onSubmitPassword = function (value) {
        var _this = this;
        this._vendorService.resetPasswordAccount(value)
            .subscribe(function (res) {
            if (res.status != 'failed') {
                _this.onAlert('Reset Password Account Successfully', 'success');
            }
            else {
                _this.onAlert('Reset Password Account Failed', 'danger');
            }
        }, function (error) {
            _this.onAlert('Reset Password Account Failed', 'danger');
        });
        this.myPasswordForm.reset();
    };
    VendorProfileComponent.prototype.onEdit = function () {
        this.editMode = true;
        this.disabled = true;
    };
    VendorProfileComponent.prototype.Cancel = function () {
        this.getOrganizationProfile();
        this.editMode = false;
        this.disabled = false;
    };
    VendorProfileComponent.prototype.goToEdit = function () {
        this._router.navigate(['/vendor/profile']);
    };
    VendorProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-vendor',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: 'vendor-profile.component.html',
            styleUrls: ['vendor-profile.component.css'],
            providers: [ng2_bootstrap_1.TabsetComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, forms_1.FormBuilder, vendor_service_1.VendorService, country_service_1.DataCountryService, state_service_1.DataStateService])
    ], VendorProfileComponent);
    return VendorProfileComponent;
}());
exports.VendorProfileComponent = VendorProfileComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92ZW5kb3IvdmVuZG9yLXByb2ZpbGUvdmVuZG9yLXByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0UsZUFBZSxDQUFDLENBQUE7QUFHcEYsc0JBQXFDLGdCQUFnQixDQUFDLENBQUE7QUFDdEQsOEJBQThCLDZCQUM5QixDQUFDLENBRDBEO0FBRzNELDZCQUFxQixrQ0FBa0MsQ0FBQyxDQUFBO0FBRXhELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLGdDQUFpQyx3REFBd0QsQ0FBQyxDQUFBO0FBQzFGLDhCQUErQixzREFBc0QsQ0FBQyxDQUFBO0FBQ3RGLCtCQUE0QixpREFBaUQsQ0FBQyxDQUFBO0FBQzlFLHFDQUE0QiwwQ0FBMEMsQ0FBQyxDQUFBO0FBYXZFO0lBaURJLGdDQUFvQixPQUFlLEVBQ2YsR0FBZ0IsRUFDaEIsY0FBNkIsRUFDN0IsZUFBbUMsRUFDbkMsYUFBK0I7UUFKL0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQXpDbkQsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMseUJBQW9CLEdBQVksS0FBSyxDQUFDO1FBVXRDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLGtCQUFhLEdBQWtCO1lBQzNCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1NBQ3RCLENBQUM7UUFFRixlQUFVLEdBQVcsRUFBRSxDQUFDO1FB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QztRQUVYLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUtELHVDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsdUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBRTFCLENBQUM7SUFHRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQS9VTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07WUFDL0MsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztZQUMzQyxTQUFTLEVBQUUsQ0FBQywrQkFBZSxDQUFDO1NBQy9CLENBQUM7OzhCQUFBO0lBNFVGLDZCQUFDO0FBQUQsQ0ExVUEsQUEwVUMsSUFBQTtBQTFVWSw4QkFBc0IseUJBMFVsQyxDQUFBIiwiZmlsZSI6ImFwcC92ZW5kb3IvdmVuZG9yLXByb2ZpbGUvdmVuZG9yLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7VGFic2V0Q29tcG9uZW50fSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnXG5pbXBvcnQge0NvdW50cnl9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZnVuY3Rpb24vY291bnRyeS9jb3VudHJ5XCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Z1bmN0aW9uL2NvdW50cnkvc3RhdGVcIjtcbmltcG9ydCB7VmVuZG9yfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy92ZW5kb3IubW9kZWxcIjtcbmltcG9ydCB7UmVzaXplT3B0aW9ucywgSW1hZ2VSZXN1bHR9IGZyb20gXCJuZzItaW1hZ2V1cGxvYWRcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0RhdGFDb3VudHJ5U2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9mdW5jdGlvbi9jb3VudHJ5L2NvdW50cnkuc2VydmljZVwiO1xuaW1wb3J0IHtEYXRhU3RhdGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Z1bmN0aW9uL2NvdW50cnkvc3RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtWZW5kb3JTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS92ZW5kb3IvdmVuZG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7VmVuZG9yQ29tcGFueX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvdmVuZG9yLWNvbXBhbnkubW9kZWxcIjtcblxuZGVjbGFyZSB2YXIgJDphbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC12ZW5kb3InLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHRlbXBsYXRlVXJsOiAndmVuZG9yLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyd2ZW5kb3ItcHJvZmlsZS5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbVGFic2V0Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFZlbmRvclByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBkZXZlbG9wZXI6IFZlbmRvcltdO1xuICAgIHZlbmRvcl9wcm9maWxlOiBWZW5kb3JbXTtcbiAgICB2ZW5kb3JfcHJvZmlsZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIHZlbmRvcl9vcmdhbml6YXRpb246IFZlbmRvcltdO1xuICAgIHZlbmRvcl9vcmdhbml6YXRpb24kOiBPYnNlcnZhYmxlPGFueT47XG4gICAgc3ViX29yZ2FuaXphdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgbG9hZGluZ19wcm9maWxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBsb2FkaW5nX29yZ2FuaXphdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XG4gICAgbXlGb3JtVmVuZG9yUHJvZmlsZTogRm9ybUdyb3VwO1xuICAgIG15Rm9ybUNvbXBhbnlQcm9maWxlOiBGb3JtR3JvdXA7XG5cbiAgICBjb3VudHJpZXM6IENvdW50cnlbXTtcbiAgICBzdGF0ZXM6IFN0YXRlW107XG4gICAgY2l0eXM6IFN0YXRlW107XG5cbiAgICBjb3VudHJ5U2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjaXR5dHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHN0YXRldHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGVtcHR5OiBzdHJpbmc7XG4gICAgZGlzYWJsZWRfY291bnRyeTogYm9vbGVhbiA9IHRydWU7XG4gICAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHNyYzogc3RyaW5nID0gXCJcIjtcbiAgICByZXNpemVPcHRpb25zOiBSZXNpemVPcHRpb25zID0ge1xuICAgICAgICByZXNpemVNYXhIZWlnaHQ6IDE2MCxcbiAgICAgICAgcmVzaXplTWF4V2lkdGg6IDE2MFxuICAgIH07XG5cbiAgICBteUZvcm1Mb2dvOiBzdHJpbmcgPSAnJztcbiAgICBmaWxlQ2hvc2VuOiBib29sZWFuID0gdHJ1ZTtcblxuXG4gICAgcHVibGljIG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgb3JnYW5pemF0aW9uczogWydHb3Zlcm5tZW50JywgJ1N0YXJ0dXAnLCAnVW5pdmVyc2l0eScsICdSZWdpc3RlcmVkIEJ1c2luZXNzJywgJ0dyb3VwJ10sXG4gICAgICAgIHllYXJfZm91bmRlZDogW11cbiAgICB9O1xuXG4gICAgcHVibGljIHRhYnM6IEFycmF5PGFueT4gPSBbXG4gICAgICAgIHt0aXRsZTogJ0FjY291bnQnLCBjb250ZW50OiAnRHluYW1pYyBjb250ZW50IDEnLCBhY3RpdmU6IHRydWUsIGRpc2FibGVkOiBmYWxzZX1cbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3ZlbmRvclNlcnZpY2U6IFZlbmRvclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY291bnRyeVNlcnZpY2U6IERhdGFDb3VudHJ5U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9zdGF0ZVNlcnZpY2U6IERhdGFTdGF0ZVNlcnZpY2VcbiAgICAgICAgICAgICAgICApIHtcblxuICAgICAgICB0aGlzLm15Rm9ybVZlbmRvclByb2ZpbGUgPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBuYW1lOiBbJyddLFxuICAgICAgICAgICAgcG9zaXRpb246IFsnJ10sXG4gICAgICAgICAgICBkZXBhcnRtZW50OiBbJyddLFxuICAgICAgICAgICAgY291bnRyeWNvZGU6IFsnJ10sXG4gICAgICAgICAgICBwaG9uZW51bWJlcjogWycnXSxcbiAgICAgICAgICAgIGxpbmtlZGluOiBbJyddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUgPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBvcmdhbml6YXRpb25fdHlwZTogWycnXSxcbiAgICAgICAgICAgIHN1aXRlOiBbJyddLFxuICAgICAgICAgICAgbnVtYmVyc3RyZWV0OiBbJyddLFxuICAgICAgICAgICAgY2l0eTogWycnXSxcbiAgICAgICAgICAgIHN0YXRlOiBbJyddLFxuICAgICAgICAgICAgY291bnRyeTogWycnXSxcbiAgICAgICAgICAgIHppcDogWycnXSxcbiAgICAgICAgICAgIGNvbXBhbnlfbmFtZTogWycnXSxcbiAgICAgICAgICAgIHVybDogWycnXSxcbiAgICAgICAgICAgIGxvZ286IFsnJ10sXG4gICAgICAgICAgICB5ZWFyOiBbJyddLFxuICAgICAgICAgICAgbWlzc2lvbjogWycnXSxcbiAgICAgICAgICAgIGZvdW5kZWQ6IFsnJ10sXG4gICAgICAgICAgICBzaXplOiBbJyddLFxuICAgICAgICAgICAgYWZmaWxpYXRpb246IFsnJ10sXG4gICAgICAgICAgICBjb21wYW55cGhvbmU6IFsnJ10sXG4gICAgICAgICAgICB0YXhpZDogWycnXSxcbiAgICAgICAgICAgIGZhY2Vib29rOiBbJyddLFxuICAgICAgICAgICAgdHdpdHRlcjogWycnXSxcbiAgICAgICAgICAgIGxpbmU6IFsnJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBuYW1lOiBbJyddLFxuICAgICAgICAgICAgcG9zaXRpb246IFsnJ10sXG4gICAgICAgICAgICBkZXBhcnRtZW50OiBbJyddLFxuICAgICAgICAgICAgY291bnRyeWNvZGU6IFsnJ10sXG4gICAgICAgICAgICBwaG9uZW51bWJlcjogWycnXSxcbiAgICAgICAgICAgIGxpbmtlZGluOiBbJyddLFxuICAgICAgICAgICAgb3JnYW5pemF0aW9uX3R5cGU6IFsnJ10sXG4gICAgICAgICAgICBzdWl0ZTogWycnXSxcbiAgICAgICAgICAgIG51bWJlcnN0cmVldDogWycnXSxcbiAgICAgICAgICAgIGNpdHk6IFsnJ10sXG4gICAgICAgICAgICBzdGF0ZTogWycnXSxcbiAgICAgICAgICAgIGNvdW50cnk6IFsnJ10sXG4gICAgICAgICAgICB6aXA6IFsnJ10sXG4gICAgICAgICAgICBjb21wYW55X25hbWU6IFsnJ10sXG4gICAgICAgICAgICB1cmw6IFsnJ10sXG4gICAgICAgICAgICBsb2dvOiBbJyddLFxuICAgICAgICAgICAgeWVhcjogWycnXSxcbiAgICAgICAgICAgIG1pc3Npb246IFsnJ10sXG4gICAgICAgICAgICBmb3VuZGVkOiBbJyddLFxuICAgICAgICAgICAgc2l6ZTogWycnXSxcbiAgICAgICAgICAgIGFmZmlsaWF0aW9uOiBbJyddLFxuICAgICAgICAgICAgY29tcGFueXBob25lOiBbJyddLFxuICAgICAgICAgICAgdGF4aWQ6IFsnJ10sXG4gICAgICAgICAgICBmYWNlYm9vazogWycnXSxcbiAgICAgICAgICAgIHR3aXR0ZXI6IFsnJ10sXG4gICAgICAgICAgICBsaW5lOiBbJyddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubXlQYXNzd29yZEZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBjdXJyZW50cGFzc3dvcmQ6IFsnJ10sXG4gICAgICAgICAgICBuZXdwYXNzd29yZDogWycnXSxcbiAgICAgICAgICAgIG5ld3Bhc3N3b3JkX2NvbmZpcm1hdGlvbjogWycnXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvdW50cmllcyA9IHRoaXMuX2NvdW50cnlTZXJ2aWNlLmdldENvdW50cmllcygpO1xuICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvdW50cmllcyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0RGV2ZWxvcGVyUHJvZmlsZSgpO1xuICAgICAgICB0aGlzLmdldE9yZ2FuaXphdGlvblByb2ZpbGUoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVZZWFycygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWIpdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgaWYgKHRoaXMuc3ViX29yZ2FuaXphdGlvbil0aGlzLnN1Yl9vcmdhbml6YXRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVZZWFycygpIHtcbiAgICAgICAgbGV0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSB5ZWFyOyBpID49IDE5NTA7IGktLSkgdGhpcy5vcHRpb25zWyd5ZWFyX2ZvdW5kZWQnXS5wdXNoKGkpO1xuICAgIH1cblxuXG4gICAgZ2V0RGV2ZWxvcGVyUHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy52ZW5kb3JfcHJvZmlsZSQgPSB0aGlzLl92ZW5kb3JTZXJ2aWNlLmdldFZlbmRvclByb2ZpbGUoKTtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnZlbmRvcl9wcm9maWxlJFxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICB2ZW5kb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbmRvcl9wcm9maWxlID0gdmVuZG9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdfcHJvZmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGdldE9yZ2FuaXphdGlvblByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMudmVuZG9yX29yZ2FuaXphdGlvbiQgPSB0aGlzLl92ZW5kb3JTZXJ2aWNlLmdldE9yZ2FuaXphdGlvblByb2ZpbGUoKTtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnZlbmRvcl9vcmdhbml6YXRpb24kLnN1YnNjcmliZShcbiAgICAgICAgICAgIHZlbmRvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZW5kb3Jfb3JnYW5pemF0aW9uID0gdmVuZG9yO1xuICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nbyA9IHZlbmRvclswXS5sb2dvO1xuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2ZW5kb3IpO1xuICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RDb3VudHJ5KHZlbmRvclswXS5jb3VudHJ5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdfb3JnYW5pemF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RDb3VudHJ5KGNvdW50cnlfbmFtZTogc3RyaW5nKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKGNvdW50cnlfbmFtZSlcbiAgICAgICAgdGhpcy5jb3VudHJ5U2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChjb3VudHJ5X25hbWUgPT0gJ1RoYWlsYW5kJykge1xuICAgICAgICAgICAgdGhpcy5jaXR5cyA9IHRoaXMuX3N0YXRlU2VydmljZS5nZXRTdGF0ZXMoKS5maWx0ZXIoKGl0ZW0gOiBhbnkpPT4gaXRlbS5uYW1lID09IGNvdW50cnlfbmFtZSk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNpdHlzKVxuXG4gICAgICAgICAgdGhpcy5jaXR5dHlwZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YXRldHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50cnlfbmFtZSA9PSAnVW5pdGVkIFN0YXRlcycpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVzID0gdGhpcy5fc3RhdGVTZXJ2aWNlLmdldFN0YXRlcygpLmZpbHRlcigoaXRlbSA6IGFueSk9PiBpdGVtLm5hbWUgPT0gY291bnRyeV9uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGV0eXBlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2l0eXR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudHJ5X25hbWUgIT09ICdVbml0ZWQgU3RhdGVzJyAmJiBjb3VudHJ5X25hbWUgIT09ICdUaGFpbGFuZCcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGV0eXBlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNpdHl0eXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vIEFsZXJ0IC8vLy8vLy8vLy8vLy9cbiAgICBhbGVydGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbWVzc2FnZUFsZXJ0OiBzdHJpbmcgPSAnVXBkYXRlIFZlbmRvciBQcm9maWxlICBTdWNjZXNzZnVsbHknO1xuICAgIHR5cGVBbGVydDogc3RyaW5nID0gJ3N1Y2Nlc3MnO1xuXG4gICAgb25BbGVydChtc2c6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlQWxlcnQgPSBtc2c7XG4gICAgICAgIHRoaXMudHlwZUFsZXJ0ID0gdHlwZTtcblxuICAgICAgICAkKCcuYWxlcnQnKS5zaG93KCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgICQoJy5hbGVydCcpLmhpZGUoKVxuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cblxuICAgIG9uU3VibWl0Q29tcGFueVByb2ZpbGUodmFsdWU6T2JqZWN0KXtcblxuICAgICAgICBjb25zdCB2ZW5kb3JfY29tcGFueSA9IG5ldyBWZW5kb3JDb21wYW55KFxuXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLm9yZ2FuaXphdGlvbl90eXBlLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5zdWl0ZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUubnVtYmVyc3RyZWV0LFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5jaXR5LFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5zdGF0ZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuY291bnRyeSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuemlwLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5jb21wYW55X25hbWUsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLnVybCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtTG9nbyxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUueWVhcixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUubWlzc2lvbixcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuZm91bmRlZCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuc2l6ZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUuYWZmaWxpYXRpb24sXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLmNvbXBhbnlwaG9uZSxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtQ29tcGFueVByb2ZpbGUudmFsdWUudGF4aWQsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybUNvbXBhbnlQcm9maWxlLnZhbHVlLmZhY2Vib29rLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS50d2l0dGVyLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1Db21wYW55UHJvZmlsZS52YWx1ZS5saW5lXG4gICAgICAgICk7XG5cbiAgICAgICAgLy90aGlzLkNhbmNlbCgpO1xuXG4gICAgICAgIHRoaXMuX3ZlbmRvclNlcnZpY2UudXBkYXRlVmVuZG9yQ29tcGFueSh2ZW5kb3JfY29tcGFueSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BbGVydCgnVXBkYXRlIFZlbmRvciBQcm9maWxlICBTdWNjZXNzZnVsbHknLCAnc3VjY2VzcycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGV2ZWxvcGVyUHJvZmlsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE9yZ2FuaXphdGlvblByb2ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVZZWFycygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFsZXJ0KCdGYWlsZWQnLCAnZGFuZ2VyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgfVxuXG5cbiAgICBvblN1Ym1pdFZlbmRvclByb2ZpbGUodmFsdWU6T2JqZWN0KXtcbiAgICAgICAgY29uc3QgdmVuZG9yID0gbmV3IFZlbmRvcihcbiAgICAgICAgICAgIHRoaXMubXlGb3JtVmVuZG9yUHJvZmlsZS52YWx1ZS5uYW1lLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1WZW5kb3JQcm9maWxlLnZhbHVlLnBvc2l0aW9uLFxuICAgICAgICAgICAgdGhpcy5teUZvcm1WZW5kb3JQcm9maWxlLnZhbHVlLmRlcGFydG1lbnQsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVZlbmRvclByb2ZpbGUudmFsdWUuY291bnRyeWNvZGUsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVZlbmRvclByb2ZpbGUudmFsdWUucGhvbmVudW1iZXIsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybVZlbmRvclByb2ZpbGUudmFsdWUubGlua2VkaW5cbiAgICAgICAgKTtcblxuICAgICAgICAvL3RoaXMuQ2FuY2VsKCk7XG5cbiAgICAgICAgdGhpcy5fdmVuZG9yU2VydmljZS51cGRhdGVWZW5kb3JQcm9maWxlKHZlbmRvcilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWxlcnQoJ1VwZGF0ZSBWZW5kb3IgUHJvZmlsZSAgU3VjY2Vzc2Z1bGx5JywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFsZXJ0KCdGYWlsZWQnLCAnZGFuZ2VyJyk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZpbGVDaGFuZ2VMb2dvKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuICAgICAgICB0aGlzLm15Rm9ybUxvZ28gPSBpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkw7XG4gICAgICAgIHRoaXMuZmlsZUNob3NlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgLy9SZXNldCBQYXNzd29yZFxuICAgIG15UGFzc3dvcmRGb3JtOiBGb3JtR3JvdXA7XG4gICAgcmVzZXRQYXNzd29yZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgb25TdWJtaXRQYXNzd29yZCh2YWx1ZTogT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuX3ZlbmRvclNlcnZpY2UucmVzZXRQYXNzd29yZEFjY291bnQodmFsdWUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyAhPSAnZmFpbGVkJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWxlcnQoJ1Jlc2V0IFBhc3N3b3JkIEFjY291bnQgU3VjY2Vzc2Z1bGx5JywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFsZXJ0KCdSZXNldCBQYXNzd29yZCBBY2NvdW50IEZhaWxlZCcsICdkYW5nZXInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWxlcnQoJ1Jlc2V0IFBhc3N3b3JkIEFjY291bnQgRmFpbGVkJywgJ2RhbmdlcicpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubXlQYXNzd29yZEZvcm0ucmVzZXQoKTtcbiAgICB9XG5cblxuICAgIGVkaXRNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkVkaXQoKSB7XG4gICAgICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBDYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuZ2V0T3JnYW5pemF0aW9uUHJvZmlsZSgpO1xuICAgICAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIH1cblxuXG4gICAgZ29Ub0VkaXQoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy92ZW5kb3IvcHJvZmlsZSddKTtcbiAgICB9XG5cblxuXG59XG4iXX0=
