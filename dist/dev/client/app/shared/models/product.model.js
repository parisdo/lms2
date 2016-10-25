"use strict";
var Product = (function () {
    function Product(id, name, logo, description, shortdescription, minrequirement, termsncond, youtube, industries, languages, departments, categories, features, screenshots, purchase_link, pricing_model, extraservices, description_th, shortdescription_th, features_th) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.description = description;
        this.shortdescription = shortdescription;
        this.minrequirement = minrequirement;
        this.termsncond = termsncond;
        this.youtube = youtube;
        this.industries = industries;
        this.languages = languages;
        this.departments = departments;
        this.categories = categories;
        this.features = features;
        this.screenshots = screenshots;
        this.purchase_link = purchase_link;
        this.pricing_model = pricing_model;
        this.extraservices = extraservices;
        this.description_th = description_th;
        this.shortdescription_th = shortdescription_th;
        this.features_th = features_th;
    }
    return Product;
}());
exports.Product = Product;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL3Byb2R1Y3QubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0UsaUJBQ1MsRUFBTSxFQUNOLElBQVcsRUFDWCxJQUFXLEVBQ1gsV0FBa0IsRUFDbEIsZ0JBQXVCLEVBQ3ZCLGNBQXFCLEVBQ3JCLFVBQWlCLEVBQ2pCLE9BQWMsRUFDZCxVQUFnQixFQUNoQixTQUFlLEVBQ2YsV0FBaUIsRUFDakIsVUFBZ0IsRUFDaEIsUUFBYyxFQUNkLFdBQWlCLEVBQ2pCLGFBQW1CLEVBQ25CLGFBQW1CLEVBQ25CLGFBQW1CLEVBQ25CLGNBQXFCLEVBQ3JCLG1CQUEwQixFQUMxQixXQUFpQjtRQW5CakIsT0FBRSxHQUFGLEVBQUUsQ0FBSTtRQUNOLFNBQUksR0FBSixJQUFJLENBQU87UUFDWCxTQUFJLEdBQUosSUFBSSxDQUFPO1FBQ1gsZ0JBQVcsR0FBWCxXQUFXLENBQU87UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFPO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFPO1FBQ3JCLGVBQVUsR0FBVixVQUFVLENBQU87UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLGVBQVUsR0FBVixVQUFVLENBQU07UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFNO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQU07UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBTTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFNO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFNO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFNO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFNO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUFPO1FBQ3JCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBTztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBTTtJQUN4QixDQUFDO0lBQ0wsY0FBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2QlksZUFBTyxVQXVCbkIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL21vZGVscy9wcm9kdWN0Lm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2R1Y3R7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpZDphbnksXG4gICAgcHVibGljIG5hbWU6c3RyaW5nLFxuICAgIHB1YmxpYyBsb2dvOnN0cmluZyxcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246c3RyaW5nLFxuICAgIHB1YmxpYyBzaG9ydGRlc2NyaXB0aW9uOnN0cmluZyxcbiAgICBwdWJsaWMgbWlucmVxdWlyZW1lbnQ6c3RyaW5nLFxuICAgIHB1YmxpYyB0ZXJtc25jb25kOnN0cmluZyxcbiAgICBwdWJsaWMgeW91dHViZTpzdHJpbmcsXG4gICAgcHVibGljIGluZHVzdHJpZXM6YW55W10sXG4gICAgcHVibGljIGxhbmd1YWdlczphbnlbXSxcbiAgICBwdWJsaWMgZGVwYXJ0bWVudHM6YW55W10sXG4gICAgcHVibGljIGNhdGVnb3JpZXM6YW55W10sXG4gICAgcHVibGljIGZlYXR1cmVzOmFueVtdLFxuICAgIHB1YmxpYyBzY3JlZW5zaG90czphbnlbXSxcbiAgICBwdWJsaWMgcHVyY2hhc2VfbGluazphbnlbXSxcbiAgICBwdWJsaWMgcHJpY2luZ19tb2RlbDphbnlbXSxcbiAgICBwdWJsaWMgZXh0cmFzZXJ2aWNlczphbnlbXSxcbiAgICBwdWJsaWMgZGVzY3JpcHRpb25fdGg6c3RyaW5nLFxuICAgIHB1YmxpYyBzaG9ydGRlc2NyaXB0aW9uX3RoOnN0cmluZyxcbiAgICBwdWJsaWMgZmVhdHVyZXNfdGg6YW55W11cbiAgKXt9XG59XG4iXX0=
