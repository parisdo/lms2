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
var clicky_service_1 = require("./clicky.service");
var product_service_1 = require("../../api/product/product.service");
var ClickyComponent = (function () {
    function ClickyComponent(_clickyService, _productService) {
        this._clickyService = _clickyService;
        this._productService = _productService;
        this.products = [];
        this.loading = true;
        this.data = {
            labels: [],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                }
            ]
        };
    }
    ClickyComponent.prototype.ngOnInit = function () {
        this.getProductOfDeveloper();
    };
    ClickyComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    ClickyComponent.prototype.getProductOfDeveloper = function () {
        var _this = this;
        this.products$ = this._productService.getProductOfDeveloper();
        this.sub = this.products$.subscribe(function (products) {
            _this.products = products;
            if (_this.products.length > 0) {
                _this.getAnalytics(_this.products[0].id);
            }
        });
    };
    ClickyComponent.prototype.getAnalytics = function (id) {
        var _this = this;
        this._clickyService.loadVisitors('ADA')
            .subscribe(function (data) {
            for (var i = 0; i < data[0].dates.length; i++) {
                _this.data.labels.push(data[0].dates[i].date);
            }
            _this.data.labels.reverse();
            _this.loading = false;
        });
    };
    ClickyComponent.prototype.selectedIndex = function (index) {
        if (index == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    ClickyComponent.prototype.selectData = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index] });
    };
    ClickyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-clicky-component',
            templateUrl: 'clicky.component.html',
            styleUrls: ['clicky.compoenent.css'],
        }), 
        __metadata('design:paramtypes', [clicky_service_1.ClickyService, product_service_1.ProductService])
    ], ClickyComponent);
    return ClickyComponent;
}());
exports.ClickyComponent = ClickyComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZnVuY3Rpb24vYW5hbHl0aWNzL2NsaWNreS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUdoRCwrQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQVVqRTtJQWNFLHlCQUNVLGNBQTRCLEVBQzVCLGVBQThCO1FBRDlCLG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBWHhDLGFBQVEsR0FBUyxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFXLElBQUksQ0FBQztRQVlyQixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsTUFBTSxFQUFPLEVBQUU7WUFDZixRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDbEMsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsV0FBVyxFQUFFLFNBQVM7aUJBQ3ZCO2FBQ0Y7U0FDRixDQUFBO0lBR0gsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCwrQ0FBcUIsR0FBckI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFZO1lBQy9DLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLEVBQU07UUFBbkIsaUJBY0M7UUFiQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7YUFDcEMsU0FBUyxDQUFDLFVBQUMsSUFBUTtZQUVsQixHQUFHLENBQUMsQ0FBQyxJQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBRzVDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ3RCLENBQUM7WUFDTixDQUFDO1lBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLEtBQVk7UUFDeEIsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLEtBQVM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDckosQ0FBQztJQXRGSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7O3VCQUFBO0lBb0ZGLHNCQUFDO0FBQUQsQ0FsRkEsQUFrRkMsSUFBQTtBQWxGWSx1QkFBZSxrQkFrRjNCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9mdW5jdGlvbi9hbmFseXRpY3MvY2xpY2t5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anMvUnhcIjtcblxuaW1wb3J0IHtDbGlja3lTZXJ2aWNlfSBmcm9tIFwiLi9jbGlja3kuc2VydmljZVwiO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSBcIi4uLy4uL2FwaS9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3RiLWNsaWNreS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ2NsaWNreS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjbGlja3kuY29tcG9lbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDbGlja3lDb21wb25lbnQge1xuXG4gIC8vU2VydmljZVxuICBzdWI6U3Vic2NyaXB0aW9uO1xuICBwcm9kdWN0cyQ6T2JzZXJ2YWJsZTxhbnk+O1xuICBwcm9kdWN0czphbnlbXSA9IFtdO1xuICBsb2FkaW5nOmJvb2xlYW4gPSB0cnVlO1xuXG5cbiAgLy9DaGFydHNcbiAgZGF0YTogYW55O1xuXG4gIG1zZ3M6IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NsaWNreVNlcnZpY2U6Q2xpY2t5U2VydmljZSxcbiAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTpQcm9kdWN0U2VydmljZSkge1xuXG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgbGFiZWxzOiBbXSA9IFtdLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnRmlyc3QgRGF0YXNldCcsXG4gICAgICAgICAgZGF0YTogWzY1LCA1OSwgODAsIDgxLCA1NiwgNTUsIDQwXSxcbiAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyM0YmMwYzAnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRQcm9kdWN0T2ZEZXZlbG9wZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmKHRoaXMuc3ViKSB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdE9mRGV2ZWxvcGVyKCkge1xuICAgIHRoaXMucHJvZHVjdHMkID0gdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdE9mRGV2ZWxvcGVyKCk7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnByb2R1Y3RzJC5zdWJzY3JpYmUoKHByb2R1Y3RzOmFueSkgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgaWYodGhpcy5wcm9kdWN0cy5sZW5ndGggPiAwKXtcbiAgICAgICAgdGhpcy5nZXRBbmFseXRpY3ModGhpcy5wcm9kdWN0c1swXS5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbmFseXRpY3MoaWQ6YW55KXtcbiAgICB0aGlzLl9jbGlja3lTZXJ2aWNlLmxvYWRWaXNpdG9ycygnQURBJylcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGE6YW55KT0+e1xuXG4gICAgICAgIGZvciAobGV0ICBpID0gMDsgaSA8IGRhdGFbMF0uZGF0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YVswXS5kYXRlc1tpXSlcblxuICAgICAgICAgICAgdGhpcy5kYXRhLmxhYmVscy5wdXNoKFxuICAgICAgICAgICAgICBkYXRhWzBdLmRhdGVzW2ldLmRhdGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhLmxhYmVscy5yZXZlcnNlKCk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBzZWxlY3RlZEluZGV4KGluZGV4Om51bWJlcil7XG4gICAgaWYoaW5kZXggPT0gMCl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0RGF0YShldmVudDphbnkpIHtcbiAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB0aGlzLm1zZ3MucHVzaCh7c2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ0RhdGEgU2VsZWN0ZWQnLCAnZGV0YWlsJzogdGhpcy5kYXRhLmRhdGFzZXRzW2V2ZW50LmVsZW1lbnQuX2RhdGFzZXRJbmRleF0uZGF0YVtldmVudC5lbGVtZW50Ll9pbmRleF19KTtcbiAgfVxuXG5cbn1cbiJdfQ==
