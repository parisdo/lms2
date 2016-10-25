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
var request_1 = require('../../../helpers/request');
var storage_1 = require('../../../helpers/storage');
var api_config_1 = require('../../../config/api.config');
var ReviewService = (function () {
    function ReviewService(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    ReviewService.prototype.onReview = function (review) {
        var body = JSON.stringify(review);
        return this._http.post(api_config_1.apiUrl + "product/review?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() })
            .map(this.extractData);
    };
    ReviewService.prototype.getReviewById = function (id) {
        return this._http.get(api_config_1.apiUrl + "product/" + id + "/review?token=" + storage_1.storage.getAuthToken())
            .map(this.extractData);
    };
    ReviewService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    ReviewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], ReviewService);
    return ReviewService;
}());
exports.ReviewService = ReviewService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYXBpL3Jldmlldy9yZXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzlDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUcvQyx3QkFBc0IsMEJBQTBCLENBQUMsQ0FBQTtBQUNqRCx3QkFBcUIsMEJBQTBCLENBQUMsQ0FBQTtBQUNoRCwyQkFBcUIsNEJBQTRCLENBQUMsQ0FBQTtBQUdsRDtJQUVFLHVCQUFxQixLQUFXLEVBQVUsT0FBZTtRQUFwQyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7SUFHN0QsZ0NBQVEsR0FBUixVQUFTLE1BQWM7UUFDckIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUksbUJBQU0sNkJBQXdCLGlCQUFPLENBQUMsWUFBWSxFQUFJLEVBQzlFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7YUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFjLEVBQWtCO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBSSxtQkFBTSxnQkFBVyxFQUFFLHNCQUFpQixpQkFBTyxDQUFDLFlBQVksRUFBSSxDQUFDO2FBQ25GLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLEdBQWE7UUFDL0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBckJIO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUE4QmIsb0JBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLHFCQUFhLGdCQTZCekIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2FwaS9yZXZpZXcvcmV2aWV3LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQge1Jldmlld30gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Jldmlldy5tb2RlbCc7XG5pbXBvcnQge3JlcXVlc3R9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvcmVxdWVzdCc7XG5pbXBvcnQge3N0b3JhZ2V9ZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCB7YXBpVXJsfSBmcm9tICcuLi8uLi8uLi9jb25maWcvYXBpLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXZpZXdTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG4gIHJlczphbnlbXTtcblxuICBvblJldmlldyhyZXZpZXc6IFJldmlldykge1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShyZXZpZXcpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7YXBpVXJsfXByb2R1Y3QvcmV2aWV3P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gLFxuICAgICAgYm9keSwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSlcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSk7XG4gIH1cblxuICBnZXRSZXZpZXdCeUlkKGlkOm51bWJlciB8IHN0cmluZyl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2FwaVVybH1wcm9kdWN0LyR7aWR9L3Jldmlldz90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YClcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcbiAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGJvZHk7XG4gIH1cblxuICAvLyBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogYW55KSB7XG4gIC8vICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxuICAvLyAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XG4gIC8vICAgY29uc29sZS5lcnJvcihlcnJNc2cpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXG4gIC8vICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcbiAgLy8gfVxuXG59XG4iXX0=
