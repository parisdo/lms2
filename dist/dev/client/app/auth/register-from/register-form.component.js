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
var forms_1 = require('@angular/forms');
var validation_service_1 = require('../../shared/validation/validation.service');
var country_service_1 = require('../../shared/services/function/country/country.service');
var state_service_1 = require('../../shared/services/function/country/state.service');
var RegisterFormComponent = (function () {
    function RegisterFormComponent(_fb, _countryService, _stateService) {
        this._fb = _fb;
        this._countryService = _countryService;
        this._stateService = _stateService;
        this.customerSubmit = new core_1.EventEmitter();
        this.vendorSubmit = new core_1.EventEmitter();
        this.selectedCounty = '';
        this.selectedState = '';
        this.selectedCity = '';
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.getCountry();
        this.buildForm();
    };
    RegisterFormComponent.prototype.buildForm = function () {
        this.registrationForm = this._fb.group({
            personal_name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.emailValidator])],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator])],
            password_confirmation: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator])],
            company_name: ['', forms_1.Validators.required],
            country: [this.selectedCounty],
            state: [this.selectedState],
            city: [this.selectedCity],
            role: [this.role]
        });
    };
    RegisterFormComponent.prototype.getCountry = function () {
        this.countries = this._countryService.getCountries();
        this.states = this._stateService.getStates().filter(function (item) { return item.name == 'United States'; });
        this.cities = this._stateService.getStates().filter(function (item) { return item.name == 'Thailand'; });
    };
    RegisterFormComponent.prototype.onSubmit = function () {
        switch (this.role) {
            case 'customer':
                this.customerSubmit.emit(this.registrationForm.value);
                break;
            case 'vendor':
                this.vendorSubmit.emit(this.registrationForm.value);
                break;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RegisterFormComponent.prototype, "titleform", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RegisterFormComponent.prototype, "role", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegisterFormComponent.prototype, "customerSubmit", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegisterFormComponent.prototype, "vendorSubmit", void 0);
    RegisterFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-register-form',
            templateUrl: 'register-form.component.html',
            styleUrls: ['register-form.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, country_service_1.DataCountryService, state_service_1.DataStateService])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());
exports.RegisterFormComponent = RegisterFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3JlZ2lzdGVyLWZyb20vcmVnaXN0ZXItZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2RCxlQUFlLENBQUMsQ0FBQTtBQUM3RSxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSxtQ0FBZ0MsNENBQTRDLENBQUMsQ0FBQTtBQUc3RSxnQ0FBaUMsd0RBQXdELENBQUMsQ0FBQTtBQUMxRiw4QkFBK0Isc0RBQXNELENBQUMsQ0FBQTtBQVV0RjtJQWlCRSwrQkFBb0IsR0FBZ0IsRUFDaEIsZUFBbUMsRUFDbkMsYUFBK0I7UUFGL0IsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBZnpDLG1CQUFjLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDcEMsaUJBQVksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQU81QyxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztJQU0xQixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUdELHlDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDckMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3hDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLHNDQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDeEYsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsc0NBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzlGLHFCQUFxQixFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsc0NBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzNHLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUN2QyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzlCLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDM0IsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN6QixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFVLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxJQUFJLGVBQWUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFVLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBRTlGLENBQUM7SUFHRCx3Q0FBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxDQUFDO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEQsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUF6REQ7UUFBQyxZQUFLLEVBQUU7OzREQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O2lFQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7OytEQUFBO0lBWlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDOzs2QkFBQTtJQWdFRiw0QkFBQztBQUFELENBOURBLEFBOERDLElBQUE7QUE5RFksNkJBQXFCLHdCQThEakMsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9yZWdpc3Rlci1mcm9tL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7Q291bnRyeX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Z1bmN0aW9uL2NvdW50cnkvY291bnRyeSc7XG5pbXBvcnQge1N0YXRlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvZnVuY3Rpb24vY291bnRyeS9zdGF0ZSc7XG5pbXBvcnQge0RhdGFDb3VudHJ5U2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Z1bmN0aW9uL2NvdW50cnkvY291bnRyeS5zZXJ2aWNlJztcbmltcG9ydCB7RGF0YVN0YXRlU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Z1bmN0aW9uL2NvdW50cnkvc3RhdGUuc2VydmljZSc7XG5pbXBvcnQge1NlbGVjdEl0ZW0sIE1lc3NhZ2V9IGZyb20gXCJwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL2FwaVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd0Yi1yZWdpc3Rlci1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGl0bGVmb3JtOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvbGU6IHN0cmluZztcbiAgQE91dHB1dCgpIGN1c3RvbWVyU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmVuZG9yU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgcmVnaXN0cmF0aW9uRm9ybTogRm9ybUdyb3VwO1xuICBjb3VudHJpZXM6IENvdW50cnlbXTtcbiAgc3RhdGVzOiBTdGF0ZVtdO1xuICBjaXRpZXM6IFN0YXRlW107XG4gIHNlbGVjdGVkQ291bnR5OiBzdHJpbmcgPSAnJztcbiAgc2VsZWN0ZWRTdGF0ZTogc3RyaW5nID0gJyc7XG4gIHNlbGVjdGVkQ2l0eTogc3RyaW5nID0gJyc7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NvdW50cnlTZXJ2aWNlOiBEYXRhQ291bnRyeVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3N0YXRlU2VydmljZTogRGF0YVN0YXRlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRDb3VudHJ5KCk7XG4gICAgdGhpcy5idWlsZEZvcm0oKTtcbiAgfVxuXG5cbiAgYnVpbGRGb3JtKCkge1xuICAgIHRoaXMucmVnaXN0cmF0aW9uRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgIHBlcnNvbmFsX25hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLmVtYWlsVmFsaWRhdG9yXSldLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5wYXNzd29yZFZhbGlkYXRvcl0pXSxcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLnBhc3N3b3JkVmFsaWRhdG9yXSldLFxuICAgICAgY29tcGFueV9uYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY291bnRyeTogW3RoaXMuc2VsZWN0ZWRDb3VudHldLFxuICAgICAgc3RhdGU6IFt0aGlzLnNlbGVjdGVkU3RhdGVdLFxuICAgICAgY2l0eTogW3RoaXMuc2VsZWN0ZWRDaXR5XSxcbiAgICAgIHJvbGU6IFt0aGlzLnJvbGVdXG4gICAgfSk7XG4gIH1cblxuICBnZXRDb3VudHJ5KCkge1xuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5fY291bnRyeVNlcnZpY2UuZ2V0Q291bnRyaWVzKCk7XG4gICAgdGhpcy5zdGF0ZXMgPSB0aGlzLl9zdGF0ZVNlcnZpY2UuZ2V0U3RhdGVzKCkuZmlsdGVyKChpdGVtIDogYW55KT0+IGl0ZW0ubmFtZSA9PSAnVW5pdGVkIFN0YXRlcycpO1xuICAgIHRoaXMuY2l0aWVzID0gdGhpcy5fc3RhdGVTZXJ2aWNlLmdldFN0YXRlcygpLmZpbHRlcigoaXRlbSA6IGFueSk9PiBpdGVtLm5hbWUgPT0gJ1RoYWlsYW5kJyk7XG5cbiAgfVxuXG5cbiAgb25TdWJtaXQoKSB7XG4gICAgc3dpdGNoICh0aGlzLnJvbGUpIHtcbiAgICAgIGNhc2UgJ2N1c3RvbWVyJyA6XG4gICAgICAgIHRoaXMuY3VzdG9tZXJTdWJtaXQuZW1pdCh0aGlzLnJlZ2lzdHJhdGlvbkZvcm0udmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ZlbmRvcic6XG4gICAgICAgIHRoaXMudmVuZG9yU3VibWl0LmVtaXQodGhpcy5yZWdpc3RyYXRpb25Gb3JtLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cblxufVxuIl19
