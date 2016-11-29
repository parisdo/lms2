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
var validation_service_1 = require('../services/validation.service');
var ControlMessagesComponent = (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched && this.control.dirty) {
                    return validation_service_1.ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = __decorate([
        core_1.Component({
            selector: 'control-messages',
            template: "<div *ngIf=\"errorMessage !== null\" style=\"margin-top: 5px; margin-bottom: -10px\">\n                <small style=\"color: #a94442\">{{errorMessage}} *</small>\n             </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());
exports.ControlMessagesComponent = ControlMessagesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29udHJvbC1tZXNzYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCxzQkFBdUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUN4RCxtQ0FBa0MsZ0NBQWdDLENBQUMsQ0FBQTtBQVFuRTtJQUVFO0lBQWdCLENBQUM7SUFFakIsc0JBQUksa0RBQVk7YUFBaEI7WUFDRSxHQUFHLENBQUMsQ0FBQyxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ25HLE1BQU0sQ0FBQyxzQ0FBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDckcsQ0FBQztZQUNILENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7SUFYRDtRQUFDLFlBQUssRUFBRTs7NkRBQUE7SUFQVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSx3TEFFUTtTQUNuQixDQUFDOztnQ0FBQTtJQWNGLCtCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxnQ0FBd0IsMkJBYXBDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb250cm9sLW1lc3NhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbnRyb2wtbWVzc2FnZXMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJlcnJvck1lc3NhZ2UgIT09IG51bGxcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDVweDsgbWFyZ2luLWJvdHRvbTogLTEwcHhcIj5cbiAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9XCJjb2xvcjogI2E5NDQ0MlwiPnt7ZXJyb3JNZXNzYWdlfX0gKjwvc21hbGw+XG4gICAgICAgICAgICAgPC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbE1lc3NhZ2VzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udHJvbDogRm9ybUNvbnRyb2w7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0IGVycm9yTWVzc2FnZSgpIHtcbiAgICBmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gdGhpcy5jb250cm9sLmVycm9ycykge1xuICAgICAgaWYgKHRoaXMuY29udHJvbC5lcnJvcnMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJiB0aGlzLmNvbnRyb2wuZGlydHkpIHtcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRpb25TZXJ2aWNlLmdldFZhbGlkYXRvckVycm9yTWVzc2FnZShwcm9wZXJ0eU5hbWUsIHRoaXMuY29udHJvbC5lcnJvcnNbcHJvcGVydHlOYW1lXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==
