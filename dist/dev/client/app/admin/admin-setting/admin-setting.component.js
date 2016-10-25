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
var router_1 = require("@angular/router");
var product_service_1 = require("../../shared/services/api/product/product.service");
var forms_1 = require("@angular/forms");
var AdminSettingComponent = (function () {
    function AdminSettingComponent(_fb, _router, _productService) {
        this._fb = _fb;
        this._router = _router;
        this._productService = _productService;
        this.languagesTag = [];
        this.departmentsTag = [];
        this.industriesTag = [];
        this.categoriesTag = [];
        this.tempArrCategory = [];
        this.tempArrDepartment = [];
        this.tempArrIndustry = [];
        this.tempAllTag = [];
        this.valueCategory = '';
        this.valueCategory_th = '';
        this.valueDepartment = '';
        this.valueDepartment_th = '';
        this.valueIndustry = '';
        this.valueIndustry_th = '';
    }
    AdminSettingComponent.prototype.ngOnInit = function () {
        this.getProductTags();
    };
    AdminSettingComponent.prototype.onRefresh = function () {
        this.getProductTags();
        this.languagesTag = [];
        this.departmentsTag = [];
        this.industriesTag = [];
        this.categoriesTag = [];
        this.tempArrCategory = [];
        this.tempArrDepartment = [];
        this.tempArrIndustry = [];
        this.tempAllTag = [];
    };
    AdminSettingComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    AdminSettingComponent.prototype.goToDashboard = function () {
        this._router.navigate(['admin/dashboard']);
    };
    AdminSettingComponent.prototype.getProductTags = function () {
        var _this = this;
        this.all_tag$ = this._productService.getProductTags();
        this.sub = this.all_tag$.subscribe(function (product_tags) {
            _this.languagesTag = product_tags.languages;
            _this.departmentsTag = product_tags.departments;
            _this.categoriesTag = product_tags.categories;
            _this.industriesTag = product_tags.industries;
        });
    };
    AdminSettingComponent.prototype.onAddCategoryTag = function (valueCategory, valueCategory_th) {
        if (valueCategory.trim().length > 0 && valueCategory_th.trim().length > 0) {
            this.valueCategory = '';
            this.valueCategory_th = '';
            this.categoriesTag.push({
                'name': valueCategory,
                'name_th': valueCategory_th,
                'type': 'category'
            });
        }
    };
    AdminSettingComponent.prototype.onSelectedCategoryTag = function (item) {
        if (this.tempArrCategory.indexOf(item) == -1) {
            this.tempArrCategory.push(item);
        }
        else {
            var i = this.tempArrCategory.indexOf(item);
            this.tempArrCategory.splice(i, 1);
        }
        this.getStyle(item, 'category');
    };
    AdminSettingComponent.prototype.deleteCategoryTag = function () {
        for (var i = 0; i < this.tempArrCategory.length; i++) {
            this.categoriesTag.splice((_.findIndex(this.categoriesTag, ['name', this.tempArrCategory[i]])), 1);
        }
        this.tempArrCategory = [];
    };
    AdminSettingComponent.prototype.onAddDepartmentTag = function (valueDepartment, valueDepartment_th) {
        if (valueDepartment.trim().length > 0 && valueDepartment_th.trim().length > 0) {
            this.valueDepartment = '';
            this.valueDepartment_th = '';
            this.departmentsTag.push({
                'name': valueDepartment,
                'name_th': valueDepartment_th,
                'type': 'department'
            });
        }
    };
    AdminSettingComponent.prototype.onSelectedDepartmentTag = function (item) {
        if (this.tempArrDepartment.indexOf(item) == -1) {
            this.tempArrDepartment.push(item);
        }
        else {
            var i = this.tempArrDepartment.indexOf(item);
            this.tempArrDepartment.splice(i, 1);
        }
        this.getStyle(item, 'department');
    };
    AdminSettingComponent.prototype.deleteDepartmentTag = function () {
        for (var i = 0; i < this.tempArrDepartment.length; i++) {
            this.departmentsTag.splice((_.findIndex(this.departmentsTag, ['name', this.tempArrDepartment[i]])), 1);
        }
        this.tempArrDepartment = [];
    };
    AdminSettingComponent.prototype.onAddIndustryTag = function (valueIndustry, valueIndustry_th) {
        if (valueIndustry.trim().length > 0 && valueIndustry_th.trim().length > 0) {
            this.valueIndustry = '';
            this.valueIndustry_th = '';
            this.industriesTag.push({
                'name': valueIndustry,
                'name_th': valueIndustry_th,
                'type': 'industry'
            });
        }
    };
    AdminSettingComponent.prototype.onSelectedIndustryTag = function (item) {
        if (this.tempArrIndustry.indexOf(item) == -1) {
            this.tempArrIndustry.push(item);
        }
        else {
            var i = this.tempArrIndustry.indexOf(item);
            this.tempArrIndustry.splice(i, 1);
        }
        this.getStyle(item, 'industry');
    };
    AdminSettingComponent.prototype.deleteIndustryTag = function () {
        for (var i = 0; i < this.tempArrIndustry.length; i++) {
            this.industriesTag.splice((_.findIndex(this.industriesTag, ['name', this.tempArrIndustry[i]])), 1);
        }
        this.tempArrIndustry = [];
    };
    AdminSettingComponent.prototype.getStyle = function (item, type) {
        switch (type) {
            case 'category':
                for (var i = 0; i < this.tempArrCategory.length; i++) {
                    if (this.tempArrCategory[i] === item) {
                        return ' #e1e1e1';
                    }
                }
                break;
            case 'department':
                for (var i = 0; i < this.tempArrDepartment.length; i++) {
                    if (this.tempArrDepartment[i] === item) {
                        return ' #e1e1e1';
                    }
                }
                break;
            case 'industry':
                for (var i = 0; i < this.tempArrIndustry.length; i++) {
                    if (this.tempArrIndustry[i] === item) {
                        return ' #e1e1e1';
                    }
                }
                break;
        }
        return '';
    };
    AdminSettingComponent.prototype.onSave = function () {
        var _this = this;
        this.tempAllTag.push(this.categoriesTag, this.departmentsTag, this.industriesTag);
        this._productService.updateTagProducts(this.tempAllTag)
            .subscribe(function (res) {
            _this.onRefresh();
        });
    };
    AdminSettingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-admin-dashboard',
            templateUrl: 'admin-setting.component.html',
            styleUrls: ['admin-setting.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, product_service_1.ProductService])
    ], AdminSettingComponent);
    return AdminSettingComponent;
}());
exports.AdminSettingComponent = AdminSettingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9hZG1pbi1zZXR0aW5nL2FkbWluLXNldHRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFFM0QsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsZ0NBQTZCLG1EQUFtRCxDQUFDLENBQUE7QUFDakYsc0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFXM0M7SUFrQkUsK0JBQW9CLEdBQWdCLEVBQ2hCLE9BQWUsRUFDZixlQUErQjtRQUYvQixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFabkQsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0Isa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFFMUIsb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsc0JBQWlCLEdBQVUsRUFBRSxDQUFDO1FBQzlCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUEyQ3hCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQW1DOUIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsdUJBQWtCLEdBQVcsRUFBRSxDQUFDO1FBb0NoQyxrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7SUEvRzlCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUks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QUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7OzZCQUFBO0lBd05GLDRCQUFDO0FBQUQsQ0F0TkEsQUFzTkMsSUFBQTtBQXROWSw2QkFBcUIsd0JBc05qQyxDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi9hZG1pbi1zZXR0aW5nL2FkbWluLXNldHRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuZGVjbGFyZSB2YXIgXzogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hZG1pbi1kYXNoYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJ2FkbWluLXNldHRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYWRtaW4tc2V0dGluZy5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQWRtaW5TZXR0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuICBhbGxfdGFnJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG5cbiAgbGFuZ3VhZ2VzVGFnOiBhbnlbXSA9IFtdO1xuICBkZXBhcnRtZW50c1RhZzogYW55W10gPSBbXTtcbiAgaW5kdXN0cmllc1RhZzogYW55W10gPSBbXTtcbiAgY2F0ZWdvcmllc1RhZzogYW55W10gPSBbXTtcblxuICB0ZW1wQXJyQ2F0ZWdvcnk6IGFueVtdID0gW107XG4gIHRlbXBBcnJEZXBhcnRtZW50OiBhbnlbXSA9IFtdO1xuICB0ZW1wQXJySW5kdXN0cnk6IGFueVtdID0gW107XG4gIHRlbXBBbGxUYWc6IGFueSBbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldFByb2R1Y3RUYWdzKCk7XG4gIH1cblxuICBvblJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXRQcm9kdWN0VGFncygpO1xuICAgIHRoaXMubGFuZ3VhZ2VzVGFnID0gW107XG4gICAgdGhpcy5kZXBhcnRtZW50c1RhZyA9IFtdO1xuICAgIHRoaXMuaW5kdXN0cmllc1RhZyA9IFtdO1xuICAgIHRoaXMuY2F0ZWdvcmllc1RhZyA9IFtdO1xuICAgIHRoaXMudGVtcEFyckNhdGVnb3J5ID0gW107XG4gICAgdGhpcy50ZW1wQXJyRGVwYXJ0bWVudCA9IFtdO1xuICAgIHRoaXMudGVtcEFyckluZHVzdHJ5ID0gW107XG4gICAgdGhpcy50ZW1wQWxsVGFnID0gW107XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWIpIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnb1RvRGFzaGJvYXJkKCkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2FkbWluL2Rhc2hib2FyZCddKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0VGFncygpIHtcbiAgICB0aGlzLmFsbF90YWckID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdFRhZ3MoKTtcbiAgICB0aGlzLnN1YiA9IHRoaXMuYWxsX3RhZyQuc3Vic2NyaWJlKChwcm9kdWN0X3RhZ3M6IGFueSk9PiB7XG4gICAgICB0aGlzLmxhbmd1YWdlc1RhZyA9IHByb2R1Y3RfdGFncy5sYW5ndWFnZXM7XG4gICAgICB0aGlzLmRlcGFydG1lbnRzVGFnID0gcHJvZHVjdF90YWdzLmRlcGFydG1lbnRzO1xuICAgICAgdGhpcy5jYXRlZ29yaWVzVGFnID0gcHJvZHVjdF90YWdzLmNhdGVnb3JpZXM7XG4gICAgICB0aGlzLmluZHVzdHJpZXNUYWcgPSBwcm9kdWN0X3RhZ3MuaW5kdXN0cmllcztcbiAgICB9KTtcbiAgfVxuXG4gIHZhbHVlQ2F0ZWdvcnk6IHN0cmluZyA9ICcnO1xuICB2YWx1ZUNhdGVnb3J5X3RoOiBzdHJpbmcgPSAnJztcblxuICBvbkFkZENhdGVnb3J5VGFnKHZhbHVlQ2F0ZWdvcnk6IGFueSwgdmFsdWVDYXRlZ29yeV90aDogYW55KSB7XG4gICAgaWYgKHZhbHVlQ2F0ZWdvcnkudHJpbSgpLmxlbmd0aCA+IDAgJiYgdmFsdWVDYXRlZ29yeV90aC50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy52YWx1ZUNhdGVnb3J5ID0gJyc7XG4gICAgICB0aGlzLnZhbHVlQ2F0ZWdvcnlfdGggPSAnJztcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1RhZy5wdXNoKHtcbiAgICAgICAgJ25hbWUnOiB2YWx1ZUNhdGVnb3J5LFxuICAgICAgICAnbmFtZV90aCc6IHZhbHVlQ2F0ZWdvcnlfdGgsXG4gICAgICAgICd0eXBlJzogJ2NhdGVnb3J5J1xuICAgICAgfSk7XG5cbiAgICB9XG4gIH1cblxuXG4gIG9uU2VsZWN0ZWRDYXRlZ29yeVRhZyhpdGVtOiBhbnkpIHtcbiAgICBpZiAodGhpcy50ZW1wQXJyQ2F0ZWdvcnkuaW5kZXhPZihpdGVtKSA9PSAtMSkge1xuICAgICAgdGhpcy50ZW1wQXJyQ2F0ZWdvcnkucHVzaChpdGVtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgaSA9IHRoaXMudGVtcEFyckNhdGVnb3J5LmluZGV4T2YoaXRlbSk7XG4gICAgICB0aGlzLnRlbXBBcnJDYXRlZ29yeS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIHRoaXMuZ2V0U3R5bGUoaXRlbSwgJ2NhdGVnb3J5Jyk7XG4gIH1cblxuICBkZWxldGVDYXRlZ29yeVRhZygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcEFyckNhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNUYWcuc3BsaWNlKChfLmZpbmRJbmRleCh0aGlzLmNhdGVnb3JpZXNUYWcsIFsnbmFtZScsIHRoaXMudGVtcEFyckNhdGVnb3J5W2ldXSkpLCAxKTtcbiAgICB9XG4gICAgdGhpcy50ZW1wQXJyQ2F0ZWdvcnkgPSBbXTtcbiAgfVxuXG5cbiAgdmFsdWVEZXBhcnRtZW50OiBzdHJpbmcgPSAnJztcbiAgdmFsdWVEZXBhcnRtZW50X3RoOiBzdHJpbmcgPSAnJztcblxuICBvbkFkZERlcGFydG1lbnRUYWcodmFsdWVEZXBhcnRtZW50OiBhbnksIHZhbHVlRGVwYXJ0bWVudF90aDogYW55KSB7XG4gICAgaWYgKHZhbHVlRGVwYXJ0bWVudC50cmltKCkubGVuZ3RoID4gMCAmJiB2YWx1ZURlcGFydG1lbnRfdGgudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudmFsdWVEZXBhcnRtZW50ID0gJyc7XG4gICAgICB0aGlzLnZhbHVlRGVwYXJ0bWVudF90aCA9ICcnO1xuXG4gICAgICB0aGlzLmRlcGFydG1lbnRzVGFnLnB1c2goe1xuICAgICAgICAnbmFtZSc6IHZhbHVlRGVwYXJ0bWVudCxcbiAgICAgICAgJ25hbWVfdGgnOiB2YWx1ZURlcGFydG1lbnRfdGgsXG4gICAgICAgICd0eXBlJzogJ2RlcGFydG1lbnQnXG4gICAgICB9KTtcblxuICAgIH1cbiAgfVxuXG5cbiAgb25TZWxlY3RlZERlcGFydG1lbnRUYWcoaXRlbTogYW55KSB7XG4gICAgaWYgKHRoaXMudGVtcEFyckRlcGFydG1lbnQuaW5kZXhPZihpdGVtKSA9PSAtMSkge1xuICAgICAgdGhpcy50ZW1wQXJyRGVwYXJ0bWVudC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBpID0gdGhpcy50ZW1wQXJyRGVwYXJ0bWVudC5pbmRleE9mKGl0ZW0pO1xuICAgICAgdGhpcy50ZW1wQXJyRGVwYXJ0bWVudC5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIHRoaXMuZ2V0U3R5bGUoaXRlbSwgJ2RlcGFydG1lbnQnKTtcbiAgfVxuXG4gIGRlbGV0ZURlcGFydG1lbnRUYWcoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlbXBBcnJEZXBhcnRtZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRlcGFydG1lbnRzVGFnLnNwbGljZSgoXy5maW5kSW5kZXgodGhpcy5kZXBhcnRtZW50c1RhZywgWyduYW1lJywgdGhpcy50ZW1wQXJyRGVwYXJ0bWVudFtpXV0pKSwgMSk7XG4gICAgfVxuICAgIHRoaXMudGVtcEFyckRlcGFydG1lbnQgPSBbXTtcbiAgfVxuXG5cbiAgdmFsdWVJbmR1c3RyeTogc3RyaW5nID0gJyc7XG4gIHZhbHVlSW5kdXN0cnlfdGg6IHN0cmluZyA9ICcnO1xuXG4gIG9uQWRkSW5kdXN0cnlUYWcodmFsdWVJbmR1c3RyeTogYW55LCB2YWx1ZUluZHVzdHJ5X3RoOiBhbnkpIHtcbiAgICBpZiAodmFsdWVJbmR1c3RyeS50cmltKCkubGVuZ3RoID4gMCAmJiB2YWx1ZUluZHVzdHJ5X3RoLnRyaW0oKS5sZW5ndGggPiAwKSB7XG5cbiAgICAgIHRoaXMudmFsdWVJbmR1c3RyeSA9ICcnO1xuICAgICAgdGhpcy52YWx1ZUluZHVzdHJ5X3RoID0gJyc7XG5cbiAgICAgIHRoaXMuaW5kdXN0cmllc1RhZy5wdXNoKHtcbiAgICAgICAgJ25hbWUnOiB2YWx1ZUluZHVzdHJ5LFxuICAgICAgICAnbmFtZV90aCc6IHZhbHVlSW5kdXN0cnlfdGgsXG4gICAgICAgICd0eXBlJzogJ2luZHVzdHJ5J1xuICAgICAgfSk7XG5cbiAgICB9XG4gIH1cblxuXG4gIG9uU2VsZWN0ZWRJbmR1c3RyeVRhZyhpdGVtOiBhbnkpIHtcbiAgICBpZiAodGhpcy50ZW1wQXJySW5kdXN0cnkuaW5kZXhPZihpdGVtKSA9PSAtMSkge1xuICAgICAgdGhpcy50ZW1wQXJySW5kdXN0cnkucHVzaChpdGVtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgaSA9IHRoaXMudGVtcEFyckluZHVzdHJ5LmluZGV4T2YoaXRlbSk7XG4gICAgICB0aGlzLnRlbXBBcnJJbmR1c3RyeS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIHRoaXMuZ2V0U3R5bGUoaXRlbSwgJ2luZHVzdHJ5Jyk7XG4gIH1cblxuICBkZWxldGVJbmR1c3RyeVRhZygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcEFyckluZHVzdHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmluZHVzdHJpZXNUYWcuc3BsaWNlKChfLmZpbmRJbmRleCh0aGlzLmluZHVzdHJpZXNUYWcsIFsnbmFtZScsIHRoaXMudGVtcEFyckluZHVzdHJ5W2ldXSkpLCAxKTtcbiAgICB9XG4gICAgdGhpcy50ZW1wQXJySW5kdXN0cnkgPSBbXTtcbiAgfVxuXG4gIGdldFN0eWxlKGl0ZW06IGFueSwgdHlwZTogc3RyaW5nKSB7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2NhdGVnb3J5JzpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlbXBBcnJDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnRlbXBBcnJDYXRlZ29yeVtpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuICcgI2UxZTFlMSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVwYXJ0bWVudCc6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wQXJyRGVwYXJ0bWVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnRlbXBBcnJEZXBhcnRtZW50W2ldID09PSBpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAjZTFlMWUxJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbmR1c3RyeSc6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wQXJySW5kdXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy50ZW1wQXJySW5kdXN0cnlbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAnICNlMWUxZTEnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuXG4gIH1cblxuXG4gIC8vVG9kbyBSZS1BcnJheVxuICBvblNhdmUoKSB7XG4gICAgdGhpcy50ZW1wQWxsVGFnLnB1c2goXG4gICAgICB0aGlzLmNhdGVnb3JpZXNUYWcsXG4gICAgICB0aGlzLmRlcGFydG1lbnRzVGFnLFxuICAgICAgdGhpcy5pbmR1c3RyaWVzVGFnXG4gICAgKTtcblxuICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLnVwZGF0ZVRhZ1Byb2R1Y3RzKHRoaXMudGVtcEFsbFRhZylcbiAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICB0aGlzLm9uUmVmcmVzaCgpO1xuICAgICAgfSk7XG5cbiAgfVxuXG59XG4iXX0=
