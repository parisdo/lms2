"use strict";
var VendorCompany = (function () {
    function VendorCompany(organization_type, suite, numberstreet, city, state, country, zip, company_name, url, logo, year, mission, founded, size, affiliation, companyphone, taxid, facebook, twitter, line) {
        this.organization_type = organization_type;
        this.suite = suite;
        this.numberstreet = numberstreet;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zip = zip;
        this.company_name = company_name;
        this.url = url;
        this.logo = logo;
        this.year = year;
        this.mission = mission;
        this.founded = founded;
        this.size = size;
        this.affiliation = affiliation;
        this.companyphone = companyphone;
        this.taxid = taxid;
        this.facebook = facebook;
        this.twitter = twitter;
        this.line = line;
    }
    return VendorCompany;
}());
exports.VendorCompany = VendorCompany;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL3ZlbmRvci1jb21wYW55Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUNFLHVCQUNTLGlCQUF5QixFQUN6QixLQUFhLEVBQ2IsWUFBb0IsRUFDcEIsSUFBWSxFQUNaLEtBQWEsRUFDYixPQUFlLEVBQ2YsR0FBVyxFQUNYLFlBQW9CLEVBQ3BCLEdBQVcsRUFDWCxJQUFZLEVBQ1osSUFBWSxFQUNaLE9BQWUsRUFDZixPQUFlLEVBQ2YsSUFBWSxFQUNaLFdBQW1CLEVBQ25CLFlBQW9CLEVBQ3BCLEtBQWEsRUFDYixRQUFnQixFQUNoQixPQUFlLEVBQ2YsSUFBWTtRQW5CWixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVE7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFDWCxpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNuQixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLHFCQUFhLGdCQXVCekIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL21vZGVscy92ZW5kb3ItY29tcGFueS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBWZW5kb3JDb21wYW55e1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgb3JnYW5pemF0aW9uX3R5cGU/OnN0cmluZyxcbiAgICBwdWJsaWMgc3VpdGU/OnN0cmluZyxcbiAgICBwdWJsaWMgbnVtYmVyc3RyZWV0PzpzdHJpbmcsXG4gICAgcHVibGljIGNpdHk/OnN0cmluZyxcbiAgICBwdWJsaWMgc3RhdGU/OnN0cmluZyxcbiAgICBwdWJsaWMgY291bnRyeT86c3RyaW5nLFxuICAgIHB1YmxpYyB6aXA/OnN0cmluZyxcbiAgICBwdWJsaWMgY29tcGFueV9uYW1lPzpzdHJpbmcsXG4gICAgcHVibGljIHVybD86c3RyaW5nLFxuICAgIHB1YmxpYyBsb2dvPzpzdHJpbmcsXG4gICAgcHVibGljIHllYXI/OnN0cmluZyxcbiAgICBwdWJsaWMgbWlzc2lvbj86c3RyaW5nLFxuICAgIHB1YmxpYyBmb3VuZGVkPzpzdHJpbmcsXG4gICAgcHVibGljIHNpemU/OnN0cmluZyxcbiAgICBwdWJsaWMgYWZmaWxpYXRpb24/Om51bWJlcixcbiAgICBwdWJsaWMgY29tcGFueXBob25lPzpzdHJpbmcsXG4gICAgcHVibGljIHRheGlkPzpzdHJpbmcsXG4gICAgcHVibGljIGZhY2Vib29rPzpzdHJpbmcsXG4gICAgcHVibGljIHR3aXR0ZXI/OnN0cmluZyxcbiAgICBwdWJsaWMgbGluZT86c3RyaW5nXG4gICl7fVxufVxuIl19
