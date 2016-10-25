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
var api_config_1 = require('../../../config/api.config');
var request_1 = require('../../../helpers/request');
var storage_1 = require('../../../helpers/storage');
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this.tags = {
            category: [],
            department: [],
            industry: [],
            language: []
        };
    }
    ProductService.prototype.getProductCategoryTags = function (id) {
        return this._http.get(api_config_1.apiUrl + "product/tags/category/" + id + "?token=" + storage_1.storage.getAuthToken())
            .map(function (res) { return res.json().data; });
    };
    ProductService.prototype.getProductTags = function () {
        return this._http.get(api_config_1.apiUrl + "product/tags")
            .map(function (res) { return res.json().data; });
    };
    ProductService.prototype.getProductTagsByType = function (type, id) {
        return this._http.get(api_config_1.apiUrl + "product/filter/" + type + "/" + id)
            .map(function (res) { return res.json().data; });
    };
    ProductService.prototype.getProductByFilter = function (value) {
        var body = JSON.stringify(value);
        return this._http.post(api_config_1.apiUrl + "product/filter", body, { headers: request_1.request.getJsonHeaders() })
            .map(function (res) { return res.json().data; });
    };
    ProductService.prototype.getProductId = function (id) {
        return this._http.get(api_config_1.apiUrl + "product/" + id)
            .map(function (res) { return res.json().data; });
    };
    ProductService.prototype.getProductOfDeveloper = function () {
        return this._http.get(api_config_1.apiUrl + "product/developer?token=" + storage_1.storage.getAuthToken())
            .map(function (res) { return res.json().data; });
    };
    ProductService.prototype.getRecommendProductByCategory = function (categoryId) {
        return this._http.get(api_config_1.apiUrl + "product/random/category/" + categoryId)
            .map(function (res) { return res.json().data; });
    };
    ProductService.prototype.addProduct = function (product) {
        var body = JSON.stringify(product);
        return this._http.post(api_config_1.apiUrl + "product?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.updateProduct = function (id, product) {
        var body = JSON.stringify(product);
        return this._http.put(api_config_1.apiUrl + "product/" + id + "?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this._http.delete(api_config_1.apiUrl + "product/" + id + "?token=" + storage_1.storage.getAuthToken())
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.updateProductStatus = function (id, status, comment) {
        if (comment === void 0) { comment = ""; }
        var body = JSON.stringify(comment);
        return this._http.post(api_config_1.apiUrl + "product/" + id + "/" + status + "?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getLogProduct = function (id) {
        return this._http.get(api_config_1.apiUrl + "product/log/" + id)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductStatus = function (status) {
        return this._http.get(api_config_1.apiUrl + "product/list/" + status)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.updateTagProducts = function (value) {
        var body = JSON.stringify(value);
        return this._http.post(api_config_1.apiUrl + "tag?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.searchProduct = function (value) {
        return this._http.get(api_config_1.apiUrl + "product/search?query=" + value)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYXBpL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBRTdDLDJCQUFxQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ2xELHdCQUFzQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ2pELHdCQUFxQiwwQkFBMEIsQ0FBQyxDQUFBO0FBR2hEO0lBRUUsd0JBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBSXhCLFNBQUksR0FBUTtZQUNqQixRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7SUFSRixDQUFDO0lBVUQsK0NBQXNCLEdBQXRCLFVBQXVCLEVBQVM7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLG1CQUFNLDhCQUF5QixFQUFFLGVBQVUsaUJBQU8sQ0FBQyxZQUFZLEVBQUksQ0FBQzthQUMxRixHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLG1CQUFNLGlCQUFjLENBQUM7YUFDM0MsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBZixDQUFlLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNkNBQW9CLEdBQXBCLFVBQXFCLElBQVksRUFBRSxFQUFVO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FB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UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFJLG1CQUFNLGtCQUFhLGlCQUFPLENBQUMsWUFBWSxFQUFJLEVBQ25FLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7YUFDM0MsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsS0FBWTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUksbUJBQU0sNkJBQXdCLEtBQU8sQ0FBQzthQUM1RCxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1gsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF2R0g7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQXlHYixxQkFBQztBQUFELENBeEdBLEFBd0dDLElBQUE7QUF4R1ksc0JBQWMsaUJBd0cxQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvYXBpL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQge2FwaVVybH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2FwaS5jb25maWcnO1xuaW1wb3J0IHtyZXF1ZXN0fSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3JlcXVlc3QnO1xuaW1wb3J0IHtzdG9yYWdlfWZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuICB9XG5cblxuICBwdWJsaWMgdGFnczogYW55ID0ge1xuICAgIGNhdGVnb3J5OiBbXSxcbiAgICBkZXBhcnRtZW50OiBbXSxcbiAgICBpbmR1c3RyeTogW10sXG4gICAgbGFuZ3VhZ2U6IFtdXG4gIH07XG5cbiAgZ2V0UHJvZHVjdENhdGVnb3J5VGFncyhpZDpudW1iZXIpe1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHthcGlVcmx9cHJvZHVjdC90YWdzL2NhdGVnb3J5LyR7aWR9P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKS5kYXRhKTtcbiAgfVxuXG4gIGdldFByb2R1Y3RUYWdzKCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHthcGlVcmx9cHJvZHVjdC90YWdzYClcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkuZGF0YSk7XG4gIH1cblxuICBnZXRQcm9kdWN0VGFnc0J5VHlwZSh0eXBlOiBzdHJpbmcsIGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7YXBpVXJsfXByb2R1Y3QvZmlsdGVyLyR7dHlwZX0vJHtpZH1gKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKS5kYXRhKTtcbiAgfVxuXG4gIGdldFByb2R1Y3RCeUZpbHRlcih2YWx1ZTphbnkpe1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHthcGlVcmx9cHJvZHVjdC9maWx0ZXJgLFxuICAgICAgYm9keSwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSlcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkuZGF0YSk7XG4gIH1cblxuXG4gIGdldFByb2R1Y3RJZChpZDogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2FwaVVybH1wcm9kdWN0LyR7aWR9YClcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkuZGF0YSk7XG4gIH1cblxuICBnZXRQcm9kdWN0T2ZEZXZlbG9wZXIoKXtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7YXBpVXJsfXByb2R1Y3QvZGV2ZWxvcGVyP3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKS5kYXRhKTtcbiAgfVxuXG4gIGdldFJlY29tbWVuZFByb2R1Y3RCeUNhdGVnb3J5KGNhdGVnb3J5SWQ6bnVtYmVyKXtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7YXBpVXJsfXByb2R1Y3QvcmFuZG9tL2NhdGVnb3J5LyR7Y2F0ZWdvcnlJZH1gKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKS5kYXRhKTtcbiAgfVxuXG4gIGFkZFByb2R1Y3QocHJvZHVjdDogYW55KSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHByb2R1Y3QpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7YXBpVXJsfXByb2R1Y3Q/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWAsXG4gICAgICBib2R5LCB7IGhlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKSB9KVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuXG4gIHVwZGF0ZVByb2R1Y3QoaWQ6YW55LCBwcm9kdWN0OiBhbnkpe1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwcm9kdWN0KTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQoYCR7YXBpVXJsfXByb2R1Y3QvJHtpZH0/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWAsXG4gICAgICBib2R5LCB7IGhlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKSB9KVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuICBkZWxldGVQcm9kdWN0KGlkOmFueSl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKGAke2FwaVVybH1wcm9kdWN0LyR7aWR9P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuICB1cGRhdGVQcm9kdWN0U3RhdHVzKGlkOmFueSxzdGF0dXM6YW55LGNvbW1lbnQ6YW55ID0gXCJcIil7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7YXBpVXJsfXByb2R1Y3QvJHtpZH0vJHtzdGF0dXN9P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gLFxuICAgICAgYm9keSwgeyBoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCkgfSlcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgZ2V0TG9nUHJvZHVjdChpZDpudW1iZXIpe1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHthcGlVcmx9cHJvZHVjdC9sb2cvJHtpZH1gKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuICAvL0dldCBQcm9kdWN0IFN0YXR1cyBGb3JtIEFkbWluXG4gIGdldFByb2R1Y3RTdGF0dXMoc3RhdHVzOmFueSl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke2FwaVVybH1wcm9kdWN0L2xpc3QvJHtzdGF0dXN9YClcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgdXBkYXRlVGFnUHJvZHVjdHModmFsdWU6YW55KXtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7YXBpVXJsfXRhZz90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YCxcbiAgICAgIGJvZHksIHsgaGVhZGVyczogcmVxdWVzdC5nZXRKc29uSGVhZGVycygpIH0pXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgfVxuXG4gIHNlYXJjaFByb2R1Y3QodmFsdWU6c3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7YXBpVXJsfXByb2R1Y3Qvc2VhcmNoP3F1ZXJ5PSR7dmFsdWV9YClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==
