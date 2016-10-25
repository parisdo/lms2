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
var http_1 = require('@angular/http');
var request_1 = require('../../../helpers/request');
var api_config_1 = require('../../../config/api.config');
var storage_1 = require('../../../helpers/storage');
var router_1 = require('@angular/router');
var translate_service_1 = require("../../../translate/translate.service");
var AuthService = (function () {
    function AuthService(_http, _router, translateService) {
        this._http = _http;
        this._router = _router;
        this.translateService = translateService;
    }
    AuthService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        return this._http.post(api_config_1.apiUrl + "register", body, { headers: request_1.request.getJsonHeaders() })
            .map(function (response) { return response.json(); });
    };
    AuthService.prototype.login = function (user) {
        var body = JSON.stringify(user);
        return this._http.post(api_config_1.apiUrl + "login", body, { headers: request_1.request.getJsonHeaders() })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        storage_1.storage.removeAuthToken();
        this.translateService.getBrowserLang();
        this._router.navigate(['']);
    };
    AuthService.prototype.checkRole = function (role) {
        return role === storage_1.storage.getRoleToken();
    };
    AuthService.prototype.isLoggedIn = function () {
        return !!storage_1.storage.getAuthToken();
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, translate_service_1.TranslateService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYXBpL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBRXJDLHdCQUFzQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ2pELDJCQUFxQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ2xELHdCQUFzQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ2pELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLGtDQUErQixzQ0FBc0MsQ0FBQyxDQUFBO0FBR3RFO0lBRUUscUJBQXFCLEtBQVcsRUFDWCxPQUFlLEVBQ2YsZ0JBQWtDO1FBRmxDLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFM0QsNEJBQU0sR0FBTixVQUFPLElBQVk7UUFDakIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUksbUJBQU0sYUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7YUFDckYsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sSUFBUztRQUNiLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFJLG1CQUFNLFVBQU8sRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxjQUFjLEVBQUUsRUFBQyxDQUFDO2FBQ2hGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNFLGlCQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLElBQVc7UUFDbkIsTUFBTSxDQUFDLElBQUksS0FBSyxpQkFBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxpQkFBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUEvQkg7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWdDYixrQkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlksbUJBQVcsY0ErQnZCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9hcGkvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7cmVxdWVzdH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9yZXF1ZXN0JztcbmltcG9ydCB7YXBpVXJsfSBmcm9tICcuLi8uLi8uLi9jb25maWcvYXBpLmNvbmZpZyc7XG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG5cbiAgc2lnbnVwKHVzZXI6IE9iamVjdCkge1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGAke2FwaVVybH1yZWdpc3RlcmAsIGJvZHksIHsgaGVhZGVyczogcmVxdWVzdC5nZXRKc29uSGVhZGVycygpIH0pXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IGFueSkge1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGAke2FwaVVybH1sb2dpbmAsIGJvZHksIHtoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCl9KVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICBzdG9yYWdlLnJlbW92ZUF1dGhUb2tlbigpO1xuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRCcm93c2VyTGFuZygpO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgfVxuXG4gIGNoZWNrUm9sZShyb2xlOnN0cmluZyl7XG4gICAgcmV0dXJuIHJvbGUgPT09IHN0b3JhZ2UuZ2V0Um9sZVRva2VuKCk7XG4gIH1cblxuICBpc0xvZ2dlZEluKCkge1xuICAgIHJldHVybiAhIXN0b3JhZ2UuZ2V0QXV0aFRva2VuKCk7XG4gIH1cbn1cbiJdfQ==
