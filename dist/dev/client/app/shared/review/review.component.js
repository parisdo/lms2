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
var review_service_1 = require("../services/api/review/review.service");
var review_model_1 = require("../models/review.model");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../services/api/auth/auth.service");
var ReviewComponent = (function () {
    function ReviewComponent(_authService, _reviewService, _fb) {
        this._authService = _authService;
        this._reviewService = _reviewService;
        this._fb = _fb;
        this.success = new core_1.EventEmitter();
        this.rating = 1;
        this.max = 5;
        this.rate = 5;
        this.isReadonly = true;
        this.count = 0;
        this.reset = false;
        this.myForm = this._fb.group({
            reviewcomment: [''],
            reviewscore: [''],
            productid: ['']
        });
    }
    ReviewComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    ;
    ReviewComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    ReviewComponent.prototype.ngOnInit = function () {
        this.getReviewService();
    };
    ReviewComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
        if (this.sub_review)
            this.sub_review.unsubscribe();
    };
    ReviewComponent.prototype.getReviewService = function () {
        var _this = this;
        this.review$ = this._reviewService.getReviewById(this.productId);
        this.sub = this.review$.subscribe(function (review) {
            _this.review = review.data;
        });
    };
    ReviewComponent.prototype.onSubmit = function () {
        var _this = this;
        this.count += 1;
        var review = new review_model_1.Review(this.myForm.value.reviewcomment, this.rating, this.productId);
        if (this.count == 1) {
            this.review$ = this._reviewService.onReview(review);
            this.sub_review = this.review$.subscribe(function (res) {
                _this.getReviewService();
                _this.myForm.reset();
                _this.reset = true;
                if (_this.reset) {
                    _this.count = 0;
                }
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReviewComponent.prototype, "productId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReviewComponent.prototype, "success", void 0);
    ReviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-review',
            templateUrl: 'review.component.html',
            styleUrls: ['review.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, review_service_1.ReviewService, forms_1.FormBuilder])
    ], ReviewComponent);
    return ReviewComponent;
}());
exports.ReviewComponent = ReviewComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcmV2aWV3L3Jldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2RCxlQUFlLENBQUMsQ0FBQTtBQUM3RSwrQkFBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQUVwRSw2QkFBcUIsd0JBQXdCLENBQUMsQ0FBQTtBQUM5QyxzQkFBcUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUN0RCw2QkFBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQVM5RDtJQWlDRSx5QkFBb0IsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsR0FBZ0I7UUFGaEIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQTdCcEMsWUFBTyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUtoRCxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBSVosUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUE2Q2xDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQTFCckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUMzQixhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDbkIsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBckJNLHNDQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O0lBRU0sbUNBQVMsR0FBaEI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFnQkQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUdELDBDQUFnQixHQUFoQjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7WUFDNUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU1ELGtDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBTSxDQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQy9CLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDO1FBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQVE7Z0JBRTlDLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN4QixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2YsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLENBQUM7WUFDSCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDO0lBcEZEO1FBQUMsWUFBSyxFQUFFOztzREFBQTtJQUdSO1FBQUMsYUFBTSxFQUFFOztvREFBQTtJQVpYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7O3VCQUFBO0lBMkZGLHNCQUFDO0FBQUQsQ0F6RkEsQUF5RkMsSUFBQTtBQXpGWSx1QkFBZSxrQkF5RjNCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Jldmlld1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvcmV2aWV3L3Jldmlldy5zZXJ2aWNlXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7UmV2aWV3fSBmcm9tIFwiLi4vbW9kZWxzL3Jldmlldy5tb2RlbFwiO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvYXV0aC9hdXRoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndGItcmV2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICdyZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmV2aWV3LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIHByb2R1Y3RJZDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKVxuICBzdWNjZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgc3ViX3JldmlldzogU3Vic2NyaXB0aW9uO1xuICByZXZpZXckOiBPYnNlcnZhYmxlPGFueT47XG4gIHJhdGluZzogbnVtYmVyID0gMTtcblxuICBteUZvcm06IEZvcm1Hcm91cDtcblxuICBwdWJsaWMgbWF4OiBudW1iZXIgPSA1O1xuICBwdWJsaWMgcmF0ZTogbnVtYmVyID0gNTtcbiAgcHVibGljIGlzUmVhZG9ubHk6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgb3ZlclN0YXI6IG51bWJlcjtcbiAgcHVibGljIHBlcmNlbnQ6IG51bWJlcjtcblxuICBwdWJsaWMgaG92ZXJpbmdPdmVyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJTdGFyID0gdmFsdWU7XG4gICAgdGhpcy5wZXJjZW50ID0gMTAwICogKHZhbHVlIC8gdGhpcy5tYXgpO1xuICB9O1xuXG4gIHB1YmxpYyByZXNldFN0YXIoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVyU3RhciA9IHZvaWQgMDtcbiAgfVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuICByZXZpZXc6IFJldmlldztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Jldmlld1NlcnZpY2U6IFJldmlld1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcikge1xuXG4gICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICByZXZpZXdjb21tZW50OiBbJyddLFxuICAgICAgcmV2aWV3c2NvcmU6IFsnJ10sXG4gICAgICBwcm9kdWN0aWQ6IFsnJ11cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0UmV2aWV3U2VydmljZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3ViKXRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuc3ViX3Jldmlldyl0aGlzLnN1Yl9yZXZpZXcudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG5cbiAgZ2V0UmV2aWV3U2VydmljZSgpIHtcbiAgICB0aGlzLnJldmlldyQgPSB0aGlzLl9yZXZpZXdTZXJ2aWNlLmdldFJldmlld0J5SWQodGhpcy5wcm9kdWN0SWQpXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJldmlldyQuc3Vic2NyaWJlKChyZXZpZXc6IGFueSk9PiB7XG4gICAgICB0aGlzLnJldmlldyA9IHJldmlldy5kYXRhO1xuICAgIH0pO1xuICB9XG5cblxuICBjb3VudDogbnVtYmVyID0gMDtcbiAgcmVzZXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmNvdW50ICs9IDE7XG4gICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldyhcbiAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnJldmlld2NvbW1lbnQsXG4gICAgICB0aGlzLnJhdGluZyxcbiAgICAgIHRoaXMucHJvZHVjdElkXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmNvdW50ID09IDEpIHtcbiAgICAgIHRoaXMucmV2aWV3JCA9IHRoaXMuX3Jldmlld1NlcnZpY2Uub25SZXZpZXcocmV2aWV3KTtcbiAgICAgIHRoaXMuc3ViX3JldmlldyA9IHRoaXMucmV2aWV3JC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5zdWNjZXNzLmVtaXQoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICB0aGlzLmdldFJldmlld1NlcnZpY2UoKTtcbiAgICAgICAgICB0aGlzLm15Rm9ybS5yZXNldCgpO1xuICAgICAgICAgIHRoaXMucmVzZXQgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLnJlc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gICAgfVxuICB9XG5cblxufVxuIl19
