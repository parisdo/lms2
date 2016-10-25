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
var ClickyAdminComponent = (function () {
    function ClickyAdminComponent(_clickyService, _productService) {
        this._clickyService = _clickyService;
        this._productService = _productService;
        this.products = [];
        this.loading = false;
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
    ClickyAdminComponent.prototype.ngOnChanges = function () {
        if (this.apps != undefined) {
            this.getAnalytics(this.apps);
        }
    };
    ClickyAdminComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    ClickyAdminComponent.prototype.getAnalytics = function (id) {
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
    ClickyAdminComponent.prototype.selectedIndex = function (index) {
        if (index == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    ClickyAdminComponent.prototype.selectData = function (event) {
        this.msgs = [];
        this.msgs.push({
            severity: 'info',
            summary: 'Data Selected',
            'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ClickyAdminComponent.prototype, "apps", void 0);
    ClickyAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-clicky-admmin-component',
            templateUrl: 'clicky-admin.component.html',
            styleUrls: ['clicky.compoenent.css'],
        }), 
        __metadata('design:paramtypes', [clicky_service_1.ClickyService, product_service_1.ProductService])
    ], ClickyAdminComponent);
    return ClickyAdminComponent;
}());
exports.ClickyAdminComponent = ClickyAdminComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZnVuY3Rpb24vYW5hbHl0aWNzL2NsaWNreS1hZG1pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUd2RCwrQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQVVqRTtJQWdCRSw4QkFBb0IsY0FBNkIsRUFDN0IsZUFBK0I7UUFEL0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBVm5ELGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQVd2QixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsTUFBTSxFQUFPLEVBQUU7WUFDZixRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDbEMsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsV0FBVyxFQUFFLFNBQVM7aUJBQ3ZCO2FBQ0Y7U0FDRixDQUFBO0lBR0gsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsQ0FBQztJQUNILENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUdELDJDQUFZLEdBQVosVUFBYSxFQUFPO1FBQXBCLGlCQWVDO1FBYkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQ3BDLFNBQVMsQ0FBQyxVQUFDLElBQVM7WUFFbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUc5QyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ25CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN0QixDQUFDO1lBQ0osQ0FBQztZQUNELEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRDQUFhLEdBQWIsVUFBYyxLQUFhO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDYixRQUFRLEVBQUUsTUFBTTtZQUNoQixPQUFPLEVBQUUsZUFBZTtZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7U0FDckYsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTdFRDtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFUVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7OzRCQUFBO0lBb0ZGLDJCQUFDO0FBQUQsQ0FsRkEsQUFrRkMsSUFBQTtBQWxGWSw0QkFBb0IsdUJBa0ZoQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvZnVuY3Rpb24vYW5hbHl0aWNzL2NsaWNreS1hZG1pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqcy9SeFwiO1xuXG5pbXBvcnQge0NsaWNreVNlcnZpY2V9IGZyb20gXCIuL2NsaWNreS5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vYXBpL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndGItY2xpY2t5LWFkbW1pbi1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ2NsaWNreS1hZG1pbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjbGlja3kuY29tcG9lbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDbGlja3lBZG1pbkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgYXBwczphbnk7XG5cbiAgLy9TZXJ2aWNlXG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuICBwcm9kdWN0cyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHJvZHVjdHM6IGFueVtdID0gW107XG4gIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gIC8vQ2hhcnRzXG4gIGRhdGE6IGFueTtcblxuICBtc2dzOiBhbnlbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jbGlja3lTZXJ2aWNlOiBDbGlja3lTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcblxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIGxhYmVsczogW10gPSBbXSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0ZpcnN0IERhdGFzZXQnLFxuICAgICAgICAgIGRhdGE6IFs2NSwgNTksIDgwLCA4MSwgNTYsIDU1LCA0MF0sXG4gICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjNGJjMGMwJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCl7XG4gICAgaWYodGhpcy5hcHBzICE9IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5nZXRBbmFseXRpY3ModGhpcy5hcHBzKTtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5hcHBzKVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YikgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG5cbiAgZ2V0QW5hbHl0aWNzKGlkOiBhbnkpIHtcbiAgICAvL3RoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5fY2xpY2t5U2VydmljZS5sb2FkVmlzaXRvcnMoJ0FEQScpXG4gICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpPT4ge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS5kYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YVswXS5kYXRlc1tpXSlcblxuICAgICAgICAgIHRoaXMuZGF0YS5sYWJlbHMucHVzaChcbiAgICAgICAgICAgIGRhdGFbMF0uZGF0ZXNbaV0uZGF0ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhLmxhYmVscy5yZXZlcnNlKCk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBzZWxlY3RlZEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdERhdGEoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMubXNncyA9IFtdO1xuICAgIHRoaXMubXNncy5wdXNoKHtcbiAgICAgIHNldmVyaXR5OiAnaW5mbycsXG4gICAgICBzdW1tYXJ5OiAnRGF0YSBTZWxlY3RlZCcsXG4gICAgICAnZGV0YWlsJzogdGhpcy5kYXRhLmRhdGFzZXRzW2V2ZW50LmVsZW1lbnQuX2RhdGFzZXRJbmRleF0uZGF0YVtldmVudC5lbGVtZW50Ll9pbmRleF1cbiAgICB9KTtcbiAgfVxuXG5cbn1cbiJdfQ==
