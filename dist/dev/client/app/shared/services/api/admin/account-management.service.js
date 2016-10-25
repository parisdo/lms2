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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var storage_1 = require("../../../helpers/storage");
var request_1 = require('../../../helpers/request');
var api_config_1 = require("../../../config/api.config");
var AccountManagementService = (function () {
    function AccountManagementService(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    AccountManagementService.prototype.archiveAccount = function (userId, status) {
        return this._http.post("" + api_config_1.apiUrl + status + "/user/" + userId + "?token=" + storage_1.storage.getAuthToken(), { headers: request_1.request.getJsonHeaders() })
            .map(function (res) { return res.json(); });
    };
    AccountManagementService.prototype.resetPasswordAccount = function (userId) {
        return this._http.post(api_config_1.apiUrl + "password/reset/user/" + userId + "?token=" + storage_1.storage.getAuthToken(), { headers: request_1.request.getJsonHeaders() }).cache()
            .map(function (res) { return res.json(); });
    };
    AccountManagementService.prototype.forgotPassword = function (email) {
        var body = JSON.stringify(email);
        return this._http.post(api_config_1.apiUrl + "password/email", body, { headers: request_1.request.getJsonHeaders() })
            .map(function (res) { return res.json(); });
    };
    AccountManagementService.prototype.newPassword = function (value) {
        var body = JSON.stringify(value);
        return this._http.post(api_config_1.apiUrl + "password/reset/forgot", body, { headers: request_1.request.getJsonHeaders() })
            .map(function (res) { return res.json(); });
    };
    AccountManagementService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AccountManagementService);
    return AccountManagementService;
}());
exports.AccountManagementService = AccountManagementService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYXBpL2FkbWluL2FjY291bnQtbWFuYWdlbWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsdUJBQTRCLGlCQUFpQixDQUFDLENBQUE7QUFDOUMscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRS9DLHdCQUFzQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ2pELHdCQUFzQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ2pELDJCQUFxQiw0QkFBNEIsQ0FBQyxDQUFBO0FBSWxEO0lBR0Usa0NBQXFCLEtBQVcsRUFBVSxPQUFlO1FBQXBDLFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUcsQ0FBQztJQUc3RCxpREFBYyxHQUFkLFVBQWUsTUFBVSxFQUFFLE1BQVU7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUcsbUJBQU0sR0FBRyxNQUFNLGNBQVMsTUFBTSxlQUFVLGlCQUFPLENBQUMsWUFBWSxFQUFJLEVBQ3RGLEVBQUUsT0FBTyxFQUFFLGlCQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQzthQUN2QyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHVEQUFvQixHQUFwQixVQUFxQixNQUFVO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBSSxtQkFBTSw0QkFBdUIsTUFBTSxlQUFVLGlCQUFPLENBQUMsWUFBWSxFQUFJLEVBQzNGLEVBQUUsT0FBTyxFQUFFLGlCQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTthQUMvQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUdELGlEQUFjLEdBQWQsVUFBZSxLQUFTO1FBQ3RCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFJLG1CQUFNLG1CQUFnQixFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7YUFDM0YsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw4Q0FBVyxHQUFYLFVBQVksS0FBUztRQUNuQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBSSxtQkFBTSwwQkFBdUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO2FBQ2xHLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBOUJIO1FBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7SUFpQ2IsK0JBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLGdDQUF3QiwyQkFnQ3BDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9hcGkvYWRtaW4vYWNjb3VudC1tYW5hZ2VtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2VcIjtcbmltcG9ydCB7cmVxdWVzdH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9yZXF1ZXN0JztcbmltcG9ydCB7YXBpVXJsfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2FwaS5jb25maWdcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWNjb3VudE1hbmFnZW1lbnRTZXJ2aWNlIHtcblxuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cbiAgcmVzcG9uc2U6YW55O1xuXG4gIGFyY2hpdmVBY2NvdW50KHVzZXJJZDphbnksIHN0YXR1czphbnkpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGAke2FwaVVybH0ke3N0YXR1c30vdXNlci8ke3VzZXJJZH0/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWBcbiAgICAgICwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSlcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZEFjY291bnQodXNlcklkOmFueSl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHthcGlVcmx9cGFzc3dvcmQvcmVzZXQvdXNlci8ke3VzZXJJZH0/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWBcbiAgICAgICwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSkuY2FjaGUoKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuICAvL0ZvciB1c2VyIGZvcmdvdCBwYXNzd29yZFxuICBmb3Jnb3RQYXNzd29yZChlbWFpbDphbnkpe1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShlbWFpbCk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHthcGlVcmx9cGFzc3dvcmQvZW1haWxgLCBib2R5LCB7IGhlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKSB9KVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuICBuZXdQYXNzd29yZCh2YWx1ZTphbnkpe1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHthcGlVcmx9cGFzc3dvcmQvcmVzZXQvZm9yZ290YCwgYm9keSwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSlcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICB9XG5cblxufVxuIl19
