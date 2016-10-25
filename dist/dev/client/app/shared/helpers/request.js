"use strict";
var http_1 = require('@angular/http');
var Request = (function () {
    function Request() {
    }
    Request.prototype.getJsonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    Request.prototype.getxhrHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With');
        headers.append('Access-Control-Allow-Credentials', 'true');
        return { headers: headers };
    };
    return Request;
}());
exports.request = new Request();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaGVscGVycy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFFeEQ7SUFBQTtJQW1CQSxDQUFDO0lBakJDLGdDQUFjLEdBQWQ7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsK0JBQWEsR0FBYjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRyxHQUFHLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFHLHlCQUF5QixDQUFDLENBQUM7UUFDM0UsT0FBTyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSw2REFBNkQsQ0FBQyxDQUFDO1FBQzlHLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0NBQWtDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLEVBQUMsZ0JBQU8sRUFBQyxDQUFDO0lBQ25CLENBQUM7SUFFSCxjQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQUVZLGVBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDIiwiZmlsZSI6ImFwcC9zaGFyZWQvaGVscGVycy9yZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5jbGFzcyBSZXF1ZXN0IHtcblxuICBnZXRKc29uSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICBnZXR4aHJIZWFkZXJzKCl7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdYLVJlcXVlc3RlZC1XaXRoJywnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJyAsICcqJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnICwgJ1BPU1QsIEdFVCwgT1BUSU9OUywgUFVUJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnT3JpZ2luLCBDb250ZW50LVR5cGUsIEFjY2VwdCwgQXV0aG9yaXphdGlvbiwgWC1SZXF1ZXN0LVdpdGgnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLCAndHJ1ZScpO1xuICAgIHJldHVybiB7aGVhZGVyc307XG4gIH1cblxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG4iXX0=
