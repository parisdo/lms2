"use strict";
var MessageService = (function () {
    function MessageService() {
    }
    MessageService.prototype.getSeverity = function (status) {
        var success = 'success';
        var error = 'error';
        var msg;
        status == 200 ? msg = success : msg = error;
        return msg;
    };
    MessageService.prototype.getUpdateStudentsScoreMessage = function (status) {
        var success = {
            summary: 'Updated Success', detail: 'Updated students score success'
        };
        var error = {
            summary: 'Updated Failed', detail: 'Updated students score failed'
        };
        var summary;
        var detail;
        if (status == 200) {
            summary = success.summary;
            detail = success.detail;
        }
        else {
            summary = error.summary;
            detail = error.detail;
        }
        return { severity: this.getSeverity(status), summary: summary, detail: detail };
    };
    MessageService.prototype.getLoginMessage = function (status) {
        var success = {
            summary: 'Login Success', detail: 'Welcome back to marketplace'
        };
        var error = {
            summary: 'Login Failed', detail: 'Your email or password does not match'
        };
        var summary;
        var detail;
        if (status == 200) {
            summary = success.summary;
            detail = success.detail;
        }
        else {
            summary = error.summary;
            detail = error.detail;
        }
        return { severity: this.getSeverity(status), summary: summary, detail: detail };
    };
    MessageService.prototype.getRegisterMessage = function (status) {
        var success = {
            summary: 'Registration Success', detail: 'Please check your email for a link to complete your registration'
        };
        var error = {
            summary: 'Registration Failed', detail: 'The email has already been taken'
        };
        var summary;
        var detail;
        if (status == 200) {
            summary = success.summary;
            detail = success.detail;
        }
        else {
            summary = error.summary;
            detail = error.detail;
        }
        return { severity: this.getSeverity(status), summary: summary, detail: detail };
    };
    MessageService.prototype.getVendorAddListingMessage = function (status) {
        var success = {
            summary: 'Added Listing Success', detail: 'Successfully added new listing'
        };
        var error = {
            summary: 'Added Listing Failed', detail: 'Cannot added new listing'
        };
        var summary;
        var detail;
        if (status == 200) {
            summary = success.summary;
            detail = success.detail;
        }
        else {
            summary = error.summary;
            detail = error.detail;
        }
        return { severity: this.getSeverity(status), summary: summary, detail: detail };
    };
    MessageService.prototype.getVendorEditListingMessage = function (status) {
        var success = {
            summary: 'Edited Listing Success', detail: 'Successfully edited listing'
        };
        var error = {
            summary: 'Edited Listing Failed', detail: 'Cannot edited listing'
        };
        var summary;
        var detail;
        if (status == 200) {
            summary = success.summary;
            detail = success.detail;
        }
        else {
            summary = error.summary;
            detail = error.detail;
        }
        return { severity: this.getSeverity(status), summary: summary, detail: detail };
    };
    MessageService.prototype.getVendorEditStatusMessage = function (status) {
        var success = {
            summary: 'Updated Status Success', detail: 'our listing has been sent to a Moderator for review. We will review your listing as soon as possible.'
        };
        var error = {
            summary: 'Updated Status Failed', detail: 'Cannot updated status listing'
        };
        var summary;
        var detail;
        if (status == 200) {
            summary = success.summary;
            detail = success.detail;
        }
        else {
            summary = error.summary;
            detail = error.detail;
        }
        return { severity: this.getSeverity(status), summary: summary, detail: detail };
    };
    MessageService.prototype.getVendorDeleteStatusMessage = function (status) {
        var success = {
            summary: 'Deleted Listing Success', detail: 'Listing deleted.'
        };
        var error = {
            summary: 'Deleted Listing Failed', detail: 'Cannot deleted listing'
        };
        var summary;
        var detail;
        if (status == 200) {
            summary = success.summary;
            detail = success.detail;
        }
        else {
            summary = error.summary;
            detail = error.detail;
        }
        return { severity: this.getSeverity(status), summary: summary, detail: detail };
    };
    return MessageService;
}());
exports.msg = new MessageService();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7SUFzTEEsQ0FBQztJQXBMQyxvQ0FBVyxHQUFYLFVBQVksTUFBWTtRQUN0QixJQUFNLE9BQU8sR0FBVyxTQUFTLENBQUM7UUFDbEMsSUFBTSxLQUFLLEdBQVcsT0FBTyxDQUFDO1FBQzlCLElBQUksR0FBUSxDQUFDO1FBQ2IsTUFBTSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFHRCxzREFBNkIsR0FBN0IsVUFBOEIsTUFBWTtRQUV4QyxJQUFNLE9BQU8sR0FBUTtZQUNuQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLGdDQUFnQztTQUNyRSxDQUFDO1FBRUYsSUFBTSxLQUFLLEdBQVE7WUFDakIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSwrQkFBK0I7U0FDbkUsQ0FBQztRQUVGLElBQUksT0FBWSxDQUFDO1FBQ2pCLElBQUksTUFBVyxDQUFDO1FBRWhCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzFCLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzFCLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNMLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3hCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3hCLENBQUM7UUFFRCxNQUFNLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxNQUFNLEVBQUMsQ0FBQTtJQUM3RSxDQUFDO0lBSUQs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YXNzIE1lc3NhZ2VTZXJ2aWNlIHtcblxuICBnZXRTZXZlcml0eShzdGF0dXMgOiBhbnkpe1xuICAgIGNvbnN0IHN1Y2Nlc3M6IHN0cmluZyA9ICdzdWNjZXNzJztcbiAgICBjb25zdCBlcnJvcjogc3RyaW5nID0gJ2Vycm9yJztcbiAgICBsZXQgbXNnOiBhbnk7XG4gICAgc3RhdHVzID09IDIwMCA/IG1zZyA9IHN1Y2Nlc3MgOiBtc2cgPSBlcnJvcjtcbiAgICByZXR1cm4gbXNnO1xuICB9XG5cblxuICBnZXRVcGRhdGVTdHVkZW50c1Njb3JlTWVzc2FnZShzdGF0dXMgOiBhbnkpe1xuXG4gICAgY29uc3Qgc3VjY2VzczogYW55ID0ge1xuICAgICAgc3VtbWFyeTogJ1VwZGF0ZWQgU3VjY2VzcycsIGRldGFpbDogJ1VwZGF0ZWQgc3R1ZGVudHMgc2NvcmUgc3VjY2VzcydcbiAgICB9O1xuXG4gICAgY29uc3QgZXJyb3I6IGFueSA9IHtcbiAgICAgIHN1bW1hcnk6ICdVcGRhdGVkIEZhaWxlZCcsIGRldGFpbDogJ1VwZGF0ZWQgc3R1ZGVudHMgc2NvcmUgZmFpbGVkJ1xuICAgIH07XG5cbiAgICBsZXQgc3VtbWFyeTogYW55O1xuICAgIGxldCBkZXRhaWw6IGFueTtcblxuICAgIGlmKHN0YXR1cyA9PSAyMDApe1xuICAgICAgc3VtbWFyeSA9IHN1Y2Nlc3Muc3VtbWFyeTtcbiAgICAgIGRldGFpbCA9IHN1Y2Nlc3MuZGV0YWlsO1xuICAgIH1lbHNlIHtcbiAgICAgIHN1bW1hcnkgPSBlcnJvci5zdW1tYXJ5O1xuICAgICAgZGV0YWlsID0gZXJyb3IuZGV0YWlsO1xuICAgIH1cblxuICAgIHJldHVybiB7c2V2ZXJpdHk6IHRoaXMuZ2V0U2V2ZXJpdHkoc3RhdHVzKSwgc3VtbWFyeTpzdW1tYXJ5LCBkZXRhaWw6ZGV0YWlsfVxuICB9XG5cblxuXG4gIGdldExvZ2luTWVzc2FnZShzdGF0dXMgOiBhbnkpe1xuXG4gICAgY29uc3Qgc3VjY2VzczogYW55ID0ge1xuICAgICAgc3VtbWFyeTogJ0xvZ2luIFN1Y2Nlc3MnLCBkZXRhaWw6ICdXZWxjb21lIGJhY2sgdG8gbWFya2V0cGxhY2UnXG4gICAgfTtcblxuICAgIGNvbnN0IGVycm9yOiBhbnkgPSB7XG4gICAgICBzdW1tYXJ5OiAnTG9naW4gRmFpbGVkJywgZGV0YWlsOiAnWW91ciBlbWFpbCBvciBwYXNzd29yZCBkb2VzIG5vdCBtYXRjaCdcbiAgICB9O1xuXG4gICAgbGV0IHN1bW1hcnk6IGFueTtcbiAgICBsZXQgZGV0YWlsOiBhbnk7XG5cbiAgICBpZihzdGF0dXMgPT0gMjAwKXtcbiAgICAgIHN1bW1hcnkgPSBzdWNjZXNzLnN1bW1hcnk7XG4gICAgICBkZXRhaWwgPSBzdWNjZXNzLmRldGFpbDtcbiAgICB9ZWxzZSB7XG4gICAgICBzdW1tYXJ5ID0gZXJyb3Iuc3VtbWFyeTtcbiAgICAgIGRldGFpbCA9IGVycm9yLmRldGFpbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge3NldmVyaXR5OiB0aGlzLmdldFNldmVyaXR5KHN0YXR1cyksIHN1bW1hcnk6c3VtbWFyeSwgZGV0YWlsOmRldGFpbH1cbiAgfVxuXG4gIGdldFJlZ2lzdGVyTWVzc2FnZShzdGF0dXMgOiBhbnkpe1xuXG4gICAgY29uc3Qgc3VjY2VzczogYW55ID0ge1xuICAgICAgc3VtbWFyeTogJ1JlZ2lzdHJhdGlvbiBTdWNjZXNzJywgZGV0YWlsOiAnUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGEgbGluayB0byBjb21wbGV0ZSB5b3VyIHJlZ2lzdHJhdGlvbidcbiAgICB9O1xuXG4gICAgY29uc3QgZXJyb3I6IGFueSA9IHtcbiAgICAgIHN1bW1hcnk6ICdSZWdpc3RyYXRpb24gRmFpbGVkJywgZGV0YWlsOiAnVGhlIGVtYWlsIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4nXG4gICAgfTtcblxuICAgIGxldCBzdW1tYXJ5OiBhbnk7XG4gICAgbGV0IGRldGFpbDogYW55O1xuXG4gICAgaWYoc3RhdHVzID09IDIwMCl7XG4gICAgICBzdW1tYXJ5ID0gc3VjY2Vzcy5zdW1tYXJ5O1xuICAgICAgZGV0YWlsID0gc3VjY2Vzcy5kZXRhaWw7XG4gICAgfWVsc2Uge1xuICAgICAgc3VtbWFyeSA9IGVycm9yLnN1bW1hcnk7XG4gICAgICBkZXRhaWwgPSBlcnJvci5kZXRhaWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzZXZlcml0eTogdGhpcy5nZXRTZXZlcml0eShzdGF0dXMpLCBzdW1tYXJ5OnN1bW1hcnksIGRldGFpbDpkZXRhaWx9XG4gIH1cblxuICBnZXRWZW5kb3JBZGRMaXN0aW5nTWVzc2FnZShzdGF0dXMgOiBhbnkpe1xuXG4gICAgY29uc3Qgc3VjY2VzczogYW55ID0ge1xuICAgICAgc3VtbWFyeTogJ0FkZGVkIExpc3RpbmcgU3VjY2VzcycsIGRldGFpbDogJ1N1Y2Nlc3NmdWxseSBhZGRlZCBuZXcgbGlzdGluZydcbiAgICB9O1xuXG4gICAgY29uc3QgZXJyb3I6IGFueSA9IHtcbiAgICAgIHN1bW1hcnk6ICdBZGRlZCBMaXN0aW5nIEZhaWxlZCcsIGRldGFpbDogJ0Nhbm5vdCBhZGRlZCBuZXcgbGlzdGluZydcbiAgICB9O1xuXG4gICAgbGV0IHN1bW1hcnk6IGFueTtcbiAgICBsZXQgZGV0YWlsOiBhbnk7XG5cbiAgICBpZihzdGF0dXMgPT0gMjAwKXtcbiAgICAgIHN1bW1hcnkgPSBzdWNjZXNzLnN1bW1hcnk7XG4gICAgICBkZXRhaWwgPSBzdWNjZXNzLmRldGFpbDtcbiAgICB9ZWxzZSB7XG4gICAgICBzdW1tYXJ5ID0gZXJyb3Iuc3VtbWFyeTtcbiAgICAgIGRldGFpbCA9IGVycm9yLmRldGFpbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge3NldmVyaXR5OiB0aGlzLmdldFNldmVyaXR5KHN0YXR1cyksIHN1bW1hcnk6c3VtbWFyeSwgZGV0YWlsOmRldGFpbH1cbiAgfVxuXG4gIGdldFZlbmRvckVkaXRMaXN0aW5nTWVzc2FnZShzdGF0dXMgOiBhbnkpe1xuXG4gICAgY29uc3Qgc3VjY2VzczogYW55ID0ge1xuICAgICAgc3VtbWFyeTogJ0VkaXRlZCBMaXN0aW5nIFN1Y2Nlc3MnLCBkZXRhaWw6ICdTdWNjZXNzZnVsbHkgZWRpdGVkIGxpc3RpbmcnXG4gICAgfTtcblxuICAgIGNvbnN0IGVycm9yOiBhbnkgPSB7XG4gICAgICBzdW1tYXJ5OiAnRWRpdGVkIExpc3RpbmcgRmFpbGVkJywgZGV0YWlsOiAnQ2Fubm90IGVkaXRlZCBsaXN0aW5nJ1xuICAgIH07XG5cbiAgICBsZXQgc3VtbWFyeTogYW55O1xuICAgIGxldCBkZXRhaWw6IGFueTtcblxuICAgIGlmKHN0YXR1cyA9PSAyMDApe1xuICAgICAgc3VtbWFyeSA9IHN1Y2Nlc3Muc3VtbWFyeTtcbiAgICAgIGRldGFpbCA9IHN1Y2Nlc3MuZGV0YWlsO1xuICAgIH1lbHNlIHtcbiAgICAgIHN1bW1hcnkgPSBlcnJvci5zdW1tYXJ5O1xuICAgICAgZGV0YWlsID0gZXJyb3IuZGV0YWlsO1xuICAgIH1cblxuICAgIHJldHVybiB7c2V2ZXJpdHk6IHRoaXMuZ2V0U2V2ZXJpdHkoc3RhdHVzKSwgc3VtbWFyeTpzdW1tYXJ5LCBkZXRhaWw6ZGV0YWlsfVxuICB9XG5cbiAgZ2V0VmVuZG9yRWRpdFN0YXR1c01lc3NhZ2Uoc3RhdHVzIDogYW55KXtcblxuICAgIGNvbnN0IHN1Y2Nlc3M6IGFueSA9IHtcbiAgICAgIHN1bW1hcnk6ICdVcGRhdGVkIFN0YXR1cyBTdWNjZXNzJywgZGV0YWlsOiAnb3VyIGxpc3RpbmcgaGFzIGJlZW4gc2VudCB0byBhIE1vZGVyYXRvciBmb3IgcmV2aWV3LiBXZSB3aWxsIHJldmlldyB5b3VyIGxpc3RpbmcgYXMgc29vbiBhcyBwb3NzaWJsZS4nXG4gICAgfTtcblxuICAgIGNvbnN0IGVycm9yOiBhbnkgPSB7XG4gICAgICBzdW1tYXJ5OiAnVXBkYXRlZCBTdGF0dXMgRmFpbGVkJywgZGV0YWlsOiAnQ2Fubm90IHVwZGF0ZWQgc3RhdHVzIGxpc3RpbmcnXG4gICAgfTtcblxuICAgIGxldCBzdW1tYXJ5OiBhbnk7XG4gICAgbGV0IGRldGFpbDogYW55O1xuXG4gICAgaWYoc3RhdHVzID09IDIwMCl7XG4gICAgICBzdW1tYXJ5ID0gc3VjY2Vzcy5zdW1tYXJ5O1xuICAgICAgZGV0YWlsID0gc3VjY2Vzcy5kZXRhaWw7XG4gICAgfWVsc2Uge1xuICAgICAgc3VtbWFyeSA9IGVycm9yLnN1bW1hcnk7XG4gICAgICBkZXRhaWwgPSBlcnJvci5kZXRhaWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzZXZlcml0eTogdGhpcy5nZXRTZXZlcml0eShzdGF0dXMpLCBzdW1tYXJ5OnN1bW1hcnksIGRldGFpbDpkZXRhaWx9XG4gIH1cblxuICBnZXRWZW5kb3JEZWxldGVTdGF0dXNNZXNzYWdlKHN0YXR1cyA6IGFueSl7XG5cbiAgICBjb25zdCBzdWNjZXNzOiBhbnkgPSB7XG4gICAgICBzdW1tYXJ5OiAnRGVsZXRlZCBMaXN0aW5nIFN1Y2Nlc3MnLCBkZXRhaWw6ICdMaXN0aW5nIGRlbGV0ZWQuJ1xuICAgIH07XG5cbiAgICBjb25zdCBlcnJvcjogYW55ID0ge1xuICAgICAgc3VtbWFyeTogJ0RlbGV0ZWQgTGlzdGluZyBGYWlsZWQnLCBkZXRhaWw6ICdDYW5ub3QgZGVsZXRlZCBsaXN0aW5nJ1xuICAgIH07XG5cbiAgICBsZXQgc3VtbWFyeTogYW55O1xuICAgIGxldCBkZXRhaWw6IGFueTtcblxuICAgIGlmKHN0YXR1cyA9PSAyMDApe1xuICAgICAgc3VtbWFyeSA9IHN1Y2Nlc3Muc3VtbWFyeTtcbiAgICAgIGRldGFpbCA9IHN1Y2Nlc3MuZGV0YWlsO1xuICAgIH1lbHNlIHtcbiAgICAgIHN1bW1hcnkgPSBlcnJvci5zdW1tYXJ5O1xuICAgICAgZGV0YWlsID0gZXJyb3IuZGV0YWlsO1xuICAgIH1cblxuICAgIHJldHVybiB7c2V2ZXJpdHk6IHRoaXMuZ2V0U2V2ZXJpdHkoc3RhdHVzKSwgc3VtbWFyeTpzdW1tYXJ5LCBkZXRhaWw6ZGV0YWlsfVxuICB9XG5cblxufVxuXG5leHBvcnQgY29uc3QgbXNnID0gbmV3IE1lc3NhZ2VTZXJ2aWNlKCk7XG4iXX0=
