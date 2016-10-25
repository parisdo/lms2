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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var translations_1 = require('./translations');
var TranslateService = (function () {
    function TranslateService(_translations) {
        this._translations = _translations;
        this.language = window.navigator.language;
        if (localStorage.getItem('lang') === null) {
            this.getBrowserLang();
        }
        else {
            this.use(localStorage.getItem('lang'));
        }
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            this._currentLang = localStorage.getItem('lang');
            return this._currentLang;
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.getBrowserLang = function () {
        var browserLang = this.language.substring(0, 2);
        this.use(browserLang);
    };
    TranslateService.prototype.use = function (lang) {
        localStorage.setItem('lang', lang);
        this._currentLang = lang;
    };
    TranslateService.prototype.translate = function (key) {
        var translation = key;
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        return translation;
    };
    TranslateService.prototype.instant = function (key) {
        return this.translate(key);
    };
    TranslateService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(translations_1.TRANSLATIONS)), 
        __metadata('design:paramtypes', [Object])
    ], TranslateService);
    return TranslateService;
}());
exports.TranslateService = TranslateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdHJhbnNsYXRlL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQsNkJBQTZCLGdCQUFnQixDQUFDLENBQUE7QUFHOUM7SUFVSSwwQkFBMEMsYUFBa0I7UUFBbEIsa0JBQWEsR0FBYixhQUFhLENBQUs7UUFSNUQsYUFBUSxHQUFXLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBU3pDLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUEsQ0FBQztZQUN0QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNMLENBQUM7SUFaRCxzQkFBVyx5Q0FBVzthQUF0QjtZQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQVdNLHlDQUFjLEdBQXJCO1FBQ0ksSUFBSSxXQUFXLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLDhCQUFHLEdBQVYsVUFBVyxJQUFZO1FBRW5CLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFTyxvQ0FBUyxHQUFqQixVQUFrQixHQUFXO1FBRXpCLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUV0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEYsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFRCxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxrQ0FBTyxHQUFkLFVBQWUsR0FBVztRQUV0QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBN0NMO1FBQUMsaUJBQVUsRUFBRTttQkFXSSxhQUFNLENBQUMsMkJBQVksQ0FBQzs7d0JBWHhCO0lBOENiLHVCQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQTdDWSx3QkFBZ0IsbUJBNkM1QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvdHJhbnNsYXRlL3RyYW5zbGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVFJBTlNMQVRJT05TIH0gZnJvbSAnLi90cmFuc2xhdGlvbnMnOyAvLyBpbXBvcnQgb3VyIG9wYXF1ZSB0b2tlblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfY3VycmVudExhbmc6IHN0cmluZztcbiAgICBsYW5ndWFnZTogc3RyaW5nID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZTtcblxuICAgIHB1YmxpYyBnZXQgY3VycmVudExhbmcoKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmcnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5nO1xuICAgIH1cblxuICAgIC8vIGluamVjdCBvdXIgdHJhbnNsYXRpb25zXG4gICAgY29uc3RydWN0b3IoQEluamVjdChUUkFOU0xBVElPTlMpIHByaXZhdGUgX3RyYW5zbGF0aW9uczogYW55KSB7XG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJykgPT09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5nZXRCcm93c2VyTGFuZygpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCcm93c2VyTGFuZygpe1xuICAgICAgICBsZXQgYnJvd3Nlckxhbmc6IHN0cmluZyA9IHRoaXMubGFuZ3VhZ2Uuc3Vic3RyaW5nKDAsIDIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGJyb3dzZXJMYW5nKTtcbiAgICAgICAgdGhpcy51c2UoYnJvd3NlckxhbmcpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIC8vIHNldCBjdXJyZW50IGxhbmd1YWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nJywgbGFuZyk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5nID0gbGFuZztcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zbGF0ZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIC8vIHByaXZhdGUgcGVyZm9ybSB0cmFuc2xhdGlvblxuICAgICAgICBsZXQgdHJhbnNsYXRpb24gPSBrZXk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zbGF0aW9uc1t0aGlzLmN1cnJlbnRMYW5nXSAmJiB0aGlzLl90cmFuc2xhdGlvbnNbdGhpcy5jdXJyZW50TGFuZ11ba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0aW9uc1t0aGlzLmN1cnJlbnRMYW5nXVtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnN0YW50KGtleTogc3RyaW5nKSB7XG4gICAgICAgIC8vIHB1YmxpYyBwZXJmb3JtIHRyYW5zbGF0aW9uXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZShrZXkpO1xuICAgIH1cbn1cbiJdfQ==
