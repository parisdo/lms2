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
var TranslateComponent = (function () {
    function TranslateComponent(_translate) {
        this._translate = _translate;
    }
    TranslateComponent.prototype.ngOnInit = function () {
        this.supportedLanguages = [
            { display: 'EN', value: 'en' },
            { display: 'TH', value: 'th' }
        ];
    };
    TranslateComponent.prototype.isCurrentLang = function (lang) {
        return lang === this._translate.currentLang;
    };
    TranslateComponent.prototype.selectLang = function (lang) {
        this._translate.use(lang);
    };
    TranslateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-translate',
            templateUrl: 'translate.component.html',
            styleUrls: ['translate.component.css'],
        }), 
        __metadata('design:paramtypes', [translate_service_1.TranslateService])
    ], TranslateComponent);
    return TranslateComponent;
}());
exports.TranslateComponent = TranslateComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdHJhbnNsYXRlL3RyYW5zbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQVFyRDtJQUlJLDRCQUFvQixVQUE0QjtRQUE1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFFLENBQUM7SUFFbkQscUNBQVEsR0FBUjtRQUVJLElBQUksQ0FBQyxrQkFBa0IsR0FBRztZQUN0QixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUM5QixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtTQUNqQyxDQUFDO0lBQ04sQ0FBQztJQUdELDBDQUFhLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7SUFFaEQsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxJQUFZO1FBRW5CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUE3Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzs7MEJBQUE7SUEwQkYseUJBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLDBCQUFrQixxQkF5QjlCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC90cmFuc2xhdGUvdHJhbnNsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tIFwiLi90cmFuc2xhdGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd0Yi10cmFuc2xhdGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyYW5zbGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmFuc2xhdGUuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVDb21wb25lbnQge1xuXG4gICAgcHVibGljIHN1cHBvcnRlZExhbmd1YWdlczogYW55W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2Upe31cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIC8vIHN0YW5kaW5nIGRhdGFcbiAgICAgICAgdGhpcy5zdXBwb3J0ZWRMYW5ndWFnZXMgPSBbXG4gICAgICAgICAgICB7IGRpc3BsYXk6ICdFTicsIHZhbHVlOiAnZW4nIH0sXG4gICAgICAgICAgICB7IGRpc3BsYXk6ICdUSCcsIHZhbHVlOiAndGgnIH1cbiAgICAgICAgXTtcbiAgICB9XG5cblxuICAgIGlzQ3VycmVudExhbmcobGFuZzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBsYW5nID09PSB0aGlzLl90cmFuc2xhdGUuY3VycmVudExhbmc7XG5cbiAgICB9XG5cbiAgICBzZWxlY3RMYW5nKGxhbmc6IHN0cmluZykge1xuICAgICAgICAvLyBzZXQgZGVmYXVsdDtcbiAgICAgICAgdGhpcy5fdHJhbnNsYXRlLnVzZShsYW5nKTtcbiAgICB9XG5cbn1cbiJdfQ==
