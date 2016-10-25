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
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.screenshots = [];
        this.thumbnail = [];
        this.count = 0;
        this.max = 4;
        this.index = 0;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this.setThumbnail();
    };
    CarouselComponent.prototype.setThumbnail = function () {
        for (var i = 0; i < Math.ceil((this.screenshots.length / 4)); i++) {
            this.thumbnail[i] = [];
            for (var j = 0; j < 4; j++) {
                if (this.count < this.screenshots.length) {
                    this.thumbnail[i][j] = this.screenshots[this.count].url;
                    this.count++;
                }
            }
        }
    };
    CarouselComponent.prototype.onSelect = function (_screenshot, i, j) {
        this.selected = _screenshot;
        if (i != 0) {
            this.index = ((j + 1) + (4 * i) - 1);
        }
        else {
            this.index = j;
        }
    };
    CarouselComponent.prototype.onControl = function (condition) {
        if (condition == 'plus') {
            if (this.index < this.screenshots.length - 1) {
                this.index++;
            }
            else {
                this.index = 0;
            }
        }
        else {
            if (this.index != 0) {
                this.index--;
            }
            else {
                this.index = this.screenshots.length - 1;
            }
        }
        this.selected = this.screenshots[this.index].url;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CarouselComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CarouselComponent.prototype, "screenshots", void 0);
    CarouselComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-carousel',
            templateUrl: 'carousel.component.html',
            styleUrls: ['carousel.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUQsZUFBZSxDQUFDLENBQUE7QUFTbkU7SUFRRTtRQUhBLGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBVXhCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFVBQUssR0FBVyxDQUFDLENBQUM7SUFWSixDQUFDO0lBRWYsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBU0Qsd0NBQVksR0FBWjtRQUVFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUUxRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUV2QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQ3hELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFFSCxDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLFdBQW1CLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFFNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7SUFFRCxxQ0FBUyxHQUFULFVBQVUsU0FBaUI7UUFFekIsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDakIsQ0FBQztRQUVILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUVOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFFSCxDQUFDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDbkQsQ0FBQztJQWxFRDtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFFUjtRQUFDLFlBQUssRUFBRTs7MERBQUE7SUFaVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDOzt5QkFBQTtJQTBFRix3QkFBQztBQUFELENBdkVBLEFBdUVDLElBQUE7QUF2RVkseUJBQWlCLG9CQXVFN0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3RiLWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICdjYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjYXJvdXNlbC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBASW5wdXQoKVxuICBzZWxlY3RlZDogYW55O1xuICBASW5wdXQoKVxuICBzY3JlZW5zaG90czogYW55W10gPSBbXTtcblxuXG4gIGNvbnN0cnVjdG9yKCl7fVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5zZXRUaHVtYm5haWwoKTtcbiAgfVxuXG4gIC8qU2V0IHRodW1ibmFpbCBhbmQgU2NyZWVuc2hvdCovXG4gIHRodW1ibmFpbDogYW55ID0gW107XG4gIGNvdW50OiBudW1iZXIgPSAwO1xuICBtYXg6IG51bWJlciA9IDQ7XG4gIGluZGV4OiBudW1iZXIgPSAwO1xuXG5cbiAgc2V0VGh1bWJuYWlsKCkge1xuXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IE1hdGguY2VpbCgodGhpcy5zY3JlZW5zaG90cy5sZW5ndGggLyA0KSk7IGkrKykge1xuXG4gICAgICB0aGlzLnRodW1ibmFpbFtpXSA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50IDwgdGhpcy5zY3JlZW5zaG90cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnRodW1ibmFpbFtpXVtqXSA9IHRoaXMuc2NyZWVuc2hvdHNbdGhpcy5jb3VudF0udXJsO1xuICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgb25TZWxlY3QoX3NjcmVlbnNob3Q6IHN0cmluZywgaTogbnVtYmVyLCBqOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gX3NjcmVlbnNob3Q7XG5cbiAgICBpZiAoaSAhPSAwKSB7XG4gICAgICB0aGlzLmluZGV4ID0gKChqICsgMSkgKyAoNCAqIGkpIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXggPSBqO1xuICAgIH1cbiAgfVxuXG4gIG9uQ29udHJvbChjb25kaXRpb246IHN0cmluZykge1xuXG4gICAgaWYgKGNvbmRpdGlvbiA9PSAncGx1cycpIHtcblxuICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnNjcmVlbnNob3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBpZiAodGhpcy5pbmRleCAhPSAwKSB7XG4gICAgICAgIHRoaXMuaW5kZXgtLTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLnNjcmVlbnNob3RzLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5zY3JlZW5zaG90c1t0aGlzLmluZGV4XS51cmw7XG4gIH1cblxuXG59XG4iXX0=
