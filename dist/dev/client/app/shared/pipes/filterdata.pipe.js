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
var FilterData = (function () {
    function FilterData() {
    }
    FilterData.prototype.transform = function (items, args, filterKeys) {
        if (typeof items === 'object') {
            var resultArray = [];
            if (args.length === 0) {
                resultArray = items;
            }
            else {
                items.forEach(function (item) {
                    if (item[filterKeys] != null && item[filterKeys].match(new RegExp('' + args, 'i'))) {
                        resultArray.push(item);
                    }
                });
            }
            return resultArray;
        }
        else {
            return null;
        }
    };
    FilterData = __decorate([
        core_1.Pipe({
            name: 'filterData',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], FilterData);
    return FilterData;
}());
exports.FilterData = FilterData;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvZmlsdGVyZGF0YS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFPbEQ7SUFBQTtJQTJCQSxDQUFDO0lBMUJHLDhCQUFTLEdBQVQsVUFBVSxLQUFXLEVBQUUsSUFBVSxFQUFFLFVBQWU7UUFFMUMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLFdBQVcsR0FBTyxFQUFFLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLENBQUM7WUFFRCxJQUFJLENBQUMsQ0FBQztnQkFFRixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtvQkFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxHQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0UsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0IsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQTtZQUVOLENBQUM7WUFFRCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUVMLENBQUM7SUE5QlQ7UUFBQyxXQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsWUFBWTtZQUNsQixJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7O2tCQUFBO0lBNkJGLGlCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSxrQkFBVSxhQTJCdEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3BpcGVzL2ZpbHRlcmRhdGEucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnZmlsdGVyRGF0YScsXG4gICAgcHVyZTogZmFsc2Vcbn0pXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJEYXRhIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKGl0ZW1zOmFueVtdLCBhcmdzOmFueVtdLCBmaWx0ZXJLZXlzOiBhbnkpOmFueVtdIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0QXJyYXk6YW55ID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEFycmF5ID0gaXRlbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bZmlsdGVyS2V5c10gIT0gbnVsbCAmJiBpdGVtW2ZpbHRlcktleXNdLm1hdGNoKG5ldyBSZWdFeHAoJycrYXJncywgJ2knKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRBcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdEFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG59XG4iXX0=
