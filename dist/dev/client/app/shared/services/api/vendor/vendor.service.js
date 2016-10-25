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
var storage_1 = require("../../../helpers/storage");
var api_config_1 = require("../../../config/api.config");
var request_1 = require('../../../helpers/request');
var VendorService = (function () {
    function VendorService(_http) {
        this._http = _http;
        this.vendor = [];
    }
    VendorService.prototype.getVendorProfile = function () {
        return this._http.get(api_config_1.apiUrl + "developer/profile?token=" + storage_1.storage.getAuthToken())
            .map(function (response) {
            var data = response.json().data.developer_profile[0];
            var objs = [];
            objs.push(data);
            return objs;
        });
    };
    VendorService.prototype.getOrganizationProfile = function () {
        return this._http.get(api_config_1.apiUrl + "developer/profile?token=" + storage_1.storage.getAuthToken())
            .map(function (response) {
            var data = response.json().data.organization_profile[0];
            var objs = [];
            objs.push(data);
            return objs;
        });
    };
    VendorService.prototype.updateVendorProfile = function (vendor) {
        var body = JSON.stringify(vendor);
        return this._http.put(api_config_1.apiUrl + "developer/profile?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() })
            .map(function (res) { return res.json(); });
    };
    VendorService.prototype.updateVendorCompany = function (vendor_company) {
        var body = JSON.stringify(vendor_company);
        return this._http.put(api_config_1.apiUrl + "developer/organization/profile?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() })
            .map(function (res) { return res.json(); });
    };
    VendorService.prototype.resetPasswordAccount = function (value) {
        var body = JSON.stringify(value);
        return this._http.post(api_config_1.apiUrl + "password/reset?token=" + storage_1.storage.getAuthToken(), body, { headers: request_1.request.getJsonHeaders() })
            .map(function (res) { return res.json(); });
    };
    VendorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VendorService);
    return VendorService;
}());
exports.VendorService = VendorService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYXBpL3ZlbmRvci92ZW5kb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUc3Qyx3QkFBc0IsMEJBQTBCLENBQUMsQ0FBQTtBQUNqRCwyQkFBcUIsNEJBQTRCLENBQUMsQ0FBQTtBQUNsRCx3QkFBc0IsMEJBQTBCLENBQUMsQ0FBQTtBQUtqRDtJQUlJLHVCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUYvQixXQUFNLEdBQWEsRUFBRSxDQUFDO0lBR3RCLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUksbUJBQU0sZ0NBQTJCLGlCQUFPLENBQUMsWUFBWSxFQUFJLENBQUM7YUFDOUUsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNULElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxJQUFJLEdBQWEsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCw4Q0FBc0IsR0FBdEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUksbUJBQU0sZ0NBQTJCLGlCQUFPLENBQUMsWUFBWSxFQUFJLENBQUM7YUFDOUUsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNULElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsSUFBSSxJQUFJLEdBQWEsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCwyQ0FBbUIsR0FBbkIsVUFBb0IsTUFBYztRQUM5QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBSSxtQkFBTSxnQ0FBMkIsaUJBQU8sQ0FBQyxZQUFZLEVBQUksRUFDOUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLGlCQUFPLENBQUMsY0FBYyxFQUFFLEVBQUMsQ0FBQzthQUMzQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDJDQUFtQixHQUFuQixVQUFvQixjQUE2QjtRQUU3QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBSSxtQkFBTSw2Q0FBd0MsaUJBQU8sQ0FBQyxZQUFZLEVBQUksRUFDM0YsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLGlCQUFPLENBQUMsY0FBYyxFQUFFLEVBQUMsQ0FBQzthQUMzQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUlELDRDQUFvQixHQUFwQixVQUFxQixLQUFVO1FBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFJLG1CQUFNLDZCQUF3QixpQkFBTyxDQUFDLFlBQVksRUFBSSxFQUM1RSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxjQUFjLEVBQUUsRUFBQyxDQUFDO2FBQzNDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBbERMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUF1RGIsb0JBQUM7QUFBRCxDQXREQSxBQXNEQyxJQUFBO0FBdERZLHFCQUFhLGdCQXNEekIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2FwaS92ZW5kb3IvdmVuZG9yLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1ZlbmRvcn0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy92ZW5kb3IubW9kZWxcIjtcbmltcG9ydCB7c3RvcmFnZX0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZVwiO1xuaW1wb3J0IHthcGlVcmx9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvYXBpLmNvbmZpZ1wiO1xuaW1wb3J0IHtyZXF1ZXN0fSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3JlcXVlc3QnO1xuaW1wb3J0IHtWZW5kb3JDb21wYW55fSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3ZlbmRvci1jb21wYW55Lm1vZGVsXCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlbmRvclNlcnZpY2Uge1xuXG4gICAgdmVuZG9yOiBWZW5kb3JbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuICAgIH1cblxuICAgIGdldFZlbmRvclByb2ZpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHthcGlVcmx9ZGV2ZWxvcGVyL3Byb2ZpbGU/dG9rZW49JHtzdG9yYWdlLmdldEF1dGhUb2tlbigpfWApXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLmRhdGEuZGV2ZWxvcGVyX3Byb2ZpbGVbMF07XG4gICAgICAgICAgICAgICAgbGV0IG9ianM6IFZlbmRvcltdID0gW107XG4gICAgICAgICAgICAgICAgb2Jqcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpzO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRPcmdhbml6YXRpb25Qcm9maWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7YXBpVXJsfWRldmVsb3Blci9wcm9maWxlP3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gKVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5kYXRhLm9yZ2FuaXphdGlvbl9wcm9maWxlWzBdO1xuICAgICAgICAgICAgICAgIGxldCBvYmpzOiBWZW5kb3JbXSA9IFtdO1xuICAgICAgICAgICAgICAgIG9ianMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqcztcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlVmVuZG9yUHJvZmlsZSh2ZW5kb3I6IFZlbmRvcikge1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodmVuZG9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KGAke2FwaVVybH1kZXZlbG9wZXIvcHJvZmlsZT90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YCxcbiAgICAgICAgICAgIGJvZHksIHtoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCl9KVxuICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZlbmRvckNvbXBhbnkodmVuZG9yX2NvbXBhbnk6IFZlbmRvckNvbXBhbnkpIHtcblxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodmVuZG9yX2NvbXBhbnkpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQoYCR7YXBpVXJsfWRldmVsb3Blci9vcmdhbml6YXRpb24vcHJvZmlsZT90b2tlbj0ke3N0b3JhZ2UuZ2V0QXV0aFRva2VuKCl9YCxcbiAgICAgICAgICAgIGJvZHksIHtoZWFkZXJzOiByZXF1ZXN0LmdldEpzb25IZWFkZXJzKCl9KVxuICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuXG5cbiAgICByZXNldFBhc3N3b3JkQWNjb3VudCh2YWx1ZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7YXBpVXJsfXBhc3N3b3JkL3Jlc2V0P3Rva2VuPSR7c3RvcmFnZS5nZXRBdXRoVG9rZW4oKX1gLFxuICAgICAgICAgICAgYm9keSwge2hlYWRlcnM6IHJlcXVlc3QuZ2V0SnNvbkhlYWRlcnMoKX0pXG4gICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG5cblxuXG59XG4iXX0=
