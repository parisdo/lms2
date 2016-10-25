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
var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());
exports.CanDeactivateGuard = CanDeactivateGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2Nhbi1kZWFjdGl2YXRlLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQVM5QztJQUFBO0lBSUEsQ0FBQztJQUhHLDBDQUFhLEdBQWIsVUFBYyxTQUFpQztRQUMzQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ3RFLENBQUM7SUFKTDtRQUFDLGlCQUFVLEVBQUU7OzBCQUFBO0lBS2IseUJBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLDBCQUFrQixxQkFJOUIsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9jYW4tZGVhY3RpdmF0ZS1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuRGVhY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5Db21wb25lbnREZWFjdGl2YXRlIHtcbiAgICBjYW5EZWFjdGl2YXRlOiAoKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbkRlYWN0aXZhdGVHdWFyZCBpbXBsZW1lbnRzIENhbkRlYWN0aXZhdGU8Q2FuQ29tcG9uZW50RGVhY3RpdmF0ZT4ge1xuICAgIGNhbkRlYWN0aXZhdGUoY29tcG9uZW50OiBDYW5Db21wb25lbnREZWFjdGl2YXRlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jYW5EZWFjdGl2YXRlID8gY29tcG9uZW50LmNhbkRlYWN0aXZhdGUoKSA6IHRydWU7XG4gICAgfVxufVxuXG4iXX0=
