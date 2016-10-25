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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/Rx');
require('rxjs/add/operator/map');
var ClickyService = (function () {
    function ClickyService(_http) {
        this._http = _http;
        this.viewEndpoint = 'http://52.221.240.34/api/v1/visitors/';
        this.eventEndPoint = 'http://52.221.240.34/api/v1/events/';
    }
    ClickyService.prototype.loadVisitors = function (name) {
        return this._http.get(this.viewEndpoint + name)
            .map(function (response) {
            return response.json();
        });
    };
    ClickyService.prototype.loadEvents = function (name) {
        return this._http.get(this.eventEndPoint + name)
            .map(function (response) {
            return response.json();
        });
    };
    ClickyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClickyService);
    return ClickyService;
}());
exports.ClickyService = ClickyService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZnVuY3Rpb24vYW5hbHl0aWNzL2NsaWNreS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBQ3JDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFDakIsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBRy9CO0lBS0UsdUJBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBSGhDLGlCQUFZLEdBQVcsdUNBQXVDLENBQUM7UUFDL0Qsa0JBQWEsR0FBVyxxQ0FBcUMsQ0FBQztJQUU1QixDQUFDO0lBRW5DLG9DQUFZLEdBQVosVUFBYSxJQUFTO1FBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUM1QyxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsSUFBUztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7YUFDN0MsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNYLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBckJIO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUF1QmIsb0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLHFCQUFhLGdCQXNCekIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2Z1bmN0aW9uL2FuYWx5dGljcy9jbGlja3kuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpY2t5U2VydmljZXtcblxuICB2aWV3RW5kcG9pbnQ6IHN0cmluZyA9ICdodHRwOi8vNTIuMjIxLjI0MC4zNC9hcGkvdjEvdmlzaXRvcnMvJztcbiAgZXZlbnRFbmRQb2ludDogc3RyaW5nID0gJ2h0dHA6Ly81Mi4yMjEuMjQwLjM0L2FwaS92MS9ldmVudHMvJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwIDogSHR0cCl7fVxuXG4gIGxvYWRWaXNpdG9ycyhuYW1lOiBhbnkpIHtcbiAgICAvL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZEZ1bmN0aW9uXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMudmlld0VuZHBvaW50ICsgbmFtZSlcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgfVxuXG4gIGxvYWRFdmVudHMobmFtZTogYW55KXtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5ldmVudEVuZFBvaW50ICsgbmFtZSlcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSk7XG4gIH1cblxufVxuIl19
