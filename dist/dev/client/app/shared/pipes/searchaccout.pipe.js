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
var Search = (function () {
    function Search() {
    }
    Search.prototype.transform = function (data, key, term) {
        if (term === void 0) { term = ""; }
        if (!data)
            return null;
        return data.filter(function (item) {
            return item[key].toLowerCase().includes(term.toLowerCase());
        });
    };
    Search = __decorate([
        core_1.Pipe({
            name: 'search'
        }), 
        __metadata('design:paramtypes', [])
    ], Search);
    return Search;
}());
exports.Search = Search;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvc2VhcmNoYWNjb3V0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUluQztJQUFBO0lBT0EsQ0FBQztJQU5DLDBCQUFTLEdBQVQsVUFBVSxJQUFRLEVBQUUsR0FBTyxFQUFFLElBQVM7UUFBVCxvQkFBUyxHQUFULFNBQVM7UUFDcEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUTtZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFUSDtRQUFDLFdBQUksQ0FBQztZQUNKLElBQUksRUFBRSxRQUFRO1NBQ2YsQ0FBQzs7Y0FBQTtJQVFGLGFBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLGNBQU0sU0FPbEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3BpcGVzL3NlYXJjaGFjY291dC5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBQaXBlKHtcbiAgbmFtZTogJ3NlYXJjaCdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoe1xuICB0cmFuc2Zvcm0oZGF0YTphbnksIGtleTphbnksIHRlcm0gPSBcIlwiKXtcbiAgICBpZighZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKChpdGVtOmFueSkgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW1ba2V5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0udG9Mb3dlckNhc2UoKSk7XG4gICAgfSlcbiAgfVxufVxuIl19
