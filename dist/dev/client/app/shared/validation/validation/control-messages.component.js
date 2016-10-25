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
var validation_service_1 = require("../validation.service");
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
            moduleId: module.id,
            selector: 'control-messages',
            templateUrl: 'control-messages.component.html',
            styleUrls: ['control-messages.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());
exports.ControlMessagesComponent = ControlMessagesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uL2NvbnRyb2wtbWVzc2FnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQsc0JBQXVDLGdCQUFnQixDQUFDLENBQUE7QUFDeEQsbUNBQWdDLHVCQUF1QixDQUFDLENBQUE7QUFVeEQ7SUFFSTtJQUFnQixDQUFDO0lBRWpCLHNCQUFJLGtEQUFZO2FBQWhCO1lBQ0ksR0FBRyxDQUFDLENBQUMsSUFBSSxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNqRyxNQUFNLENBQUMsc0NBQWlCLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZHLENBQUM7WUFDTCxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQVhEO1FBQUMsWUFBSyxFQUFFOzs2REFBQTtJQVJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzs7Z0NBQUE7SUFlRiwrQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksZ0NBQXdCLDJCQWFwQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uL2NvbnRyb2wtbWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gXCIuLi92YWxpZGF0aW9uLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdjb250cm9sLW1lc3NhZ2VzJyxcbiAgdGVtcGxhdGVVcmw6ICdjb250cm9sLW1lc3NhZ2VzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NvbnRyb2wtbWVzc2FnZXMuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xNZXNzYWdlc0NvbXBvbmVudCB7XG4gICAgQElucHV0KCkgY29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGdldCBlcnJvck1lc3NhZ2UoKSB7XG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiB0aGlzLmNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIHRoaXMuY29udHJvbC50b3VjaGVkICYmIHRoaXMuY29udHJvbC5kaXJ0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0aW9uU2VydmljZS5nZXRWYWxpZGF0b3JFcnJvck1lc3NhZ2UocHJvcGVydHlOYW1lLCB0aGlzLmNvbnRyb2wuZXJyb3JzW3Byb3BlcnR5TmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl19
