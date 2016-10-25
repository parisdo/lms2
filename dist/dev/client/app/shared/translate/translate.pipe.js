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
var translate_service_1 = require("./translate.service");
var TranslatePipe = (function () {
    function TranslatePipe(_translate) {
        this._translate = _translate;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (!value)
            return;
        return this._translate.instant(value);
    };
    TranslatePipe = __decorate([
        core_1.Pipe({
            name: 'translate',
            pure: false
        }), 
        __metadata('design:paramtypes', [translate_service_1.TranslateService])
    ], TranslatePipe);
    return TranslatePipe;
}());
exports.TranslatePipe = TranslatePipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdHJhbnNsYXRlL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFDcEQsa0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFNckQ7SUFFSSx1QkFBb0IsVUFBNEI7UUFBNUIsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7SUFBSSxDQUFDO0lBRXJELGlDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsSUFBVztRQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUVuQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWJMO1FBQUMsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDOztxQkFBQTtJQVdGLG9CQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxxQkFBYSxnQkFTekIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC90cmFuc2xhdGUvdHJhbnNsYXRlLnBpcGUudHNcblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tIFwiLi90cmFuc2xhdGUuc2VydmljZVwiO1xuQFBpcGUoe1xuICAgIG5hbWU6ICd0cmFuc2xhdGUnLFxuICAgIHB1cmU6IGZhbHNlIC8vIGltcHVyZSBwaXBlLCB1cGRhdGUgdmFsdWUgd2hlbiB3ZSBjaGFuZ2UgbGFuZ3VhZ2Vcbn0pXG5cbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHsgfVxuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55IHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGUuaW5zdGFudCh2YWx1ZSk7XG4gICAgfVxufSJdfQ==
